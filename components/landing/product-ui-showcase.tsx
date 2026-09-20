'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Message01Icon,
  UserGroupIcon,
  WorkflowSquare01Icon,
  ChartHistogramIcon,
  ArrowRight02Icon,
  CheckmarkCircle02Icon,
  ShoppingBag01Icon,
} from '@hugeicons/core-free-icons';
import { Icon } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { SiteLocale } from '@/lib/landing/landing-i18n';
import { Eyebrow } from '@/components/landing/eyebrow';
import { trackClick } from '@/lib/analytics';

interface ProductUiShowcaseProps {
  locale: SiteLocale;
}

type ShowcaseTabKey = 'tryon' | 'chat' | 'leads' | 'workflows' | 'analytics';

interface ShowcaseTab {
  key: ShowcaseTabKey;
  label: Record<SiteLocale, string>;
  navIcon: React.ReactNode;
  title: Record<SiteLocale, string>;
  description: Record<SiteLocale, string>;
  route: string;
  image: (locale: SiteLocale) => string;
  imageAlt: Record<SiteLocale, string>;
  demoData: boolean;
  hotspots: {
    title: Record<SiteLocale, string>;
    desc: Record<SiteLocale, string>;
  }[];
}

const SHOWCASE_TABS: ShowcaseTab[] = [
  {
    key: 'tryon',
    label: { en: 'Storefront Try-On', ar: 'التجربة الافتراضية' },
    navIcon: <Icon icon={ShoppingBag01Icon} className="size-4" />,
    title: {
      en: 'Photorealistic AI fitting inside your native Shopify product page.',
      ar: 'تجربة قياس واقعية مدمجة مباشرة في صفحة منتج شوبيفاي.',
    },
    description: {
      en: 'Shoppers upload a single photo and see the garment rendered with accurate drape and fabric texture in ~3.2 seconds. No separate app install required.',
      ar: 'يرفع المتسوق صورة واحدة ويرى القطعة عليه بانسدال واقعي وملمس طبيعي خلال نحو ٣ ثوانٍ. بدون الحاجة لتثبيت أي تطبيق خارجي.',
    },
    route: '/try-on',
    image: (locale) => `/landing/proof/demo-ui-storefront-tryon-${locale}.webp`,
    imageAlt: {
      en: 'GrindCTRL Shopify app storefront try-on interface',
      ar: 'واجهة التجربة الافتراضية على صفحة منتج شوبيفاي',
    },
    demoData: true,
    hotspots: [
      {
        title: { en: 'Native Shopify Block', ar: 'تطبيق شوبيفاي أصلي' },
        desc: { en: 'Integrates into any Shopify OS 2.0 theme without custom code edits.', ar: 'يندمج مع أي قالب شوبيفاي بدون تعديل على الكود.' },
      },
      {
        title: { en: 'Credit Safeguard', ar: 'حماية الرصيد' },
        desc: { en: 'Failed generations never consume merchant credits.', ar: 'التوليد غير الناجح لا يستهلك رصيد المتجر.' },
      },
      {
        title: { en: 'Ephemeral Storage', ar: 'حفظ مؤقت فقط' },
        desc: { en: 'Result images are purged automatically after 30 minutes.', ar: 'حذف تلقائي لصور النتائج بعد ٣٠ دقيقة لضمان الخصوصية.' },
      },
    ],
  },
  {
    key: 'chat',
    label: { en: 'Store Chat & Handoff', ar: 'المحادثات والمساعد' },
    navIcon: <Icon icon={Message01Icon} className="size-4" />,
    title: {
      en: 'Conversational assistant grounded in your live store knowledge.',
      ar: 'مساعد محادثة ذكي يستند إلى معرفة متجرك الحقيقية.',
    },
    description: {
      en: 'Answers questions about fit, fabric care, and shipping policy with zero hallucinations. Instantly escalates to human staff with full context when needed.',
      ar: 'يجيب عن المقاسات وطريقة العناية وسياسات الشحن بدقة تامة وبدون تخمين، مع إمكانية التحويل الفوري لموظف المبيعات بسياق كامل.',
    },
    route: '/conversations',
    image: (locale) => `/landing/proof/demo-ui-shopper-chat-${locale}.webp`,
    imageAlt: {
      en: 'GrindCTRL Store Chat conversation interface',
      ar: 'واجهة محادثة متجر GrindCTRL مع المتسوق',
    },
    demoData: true,
    hotspots: [
      {
        title: { en: 'Bilingual RTL & LTR', ar: 'ثنائي اللغة (عربي وإنجليزي)' },
        desc: { en: 'Fluent native Arabic and English phrasing with correct RTL typography.', ar: 'صياغة طبيعية بالعربية والإنجليزية مع دعم كامل لليمين لليسار.' },
      },
      {
        title: { en: 'Grounded Catalog Data', ar: 'ربط مباشر بالكتالوج' },
        desc: { en: 'Real-time inventory and sizing lookup from your Shopify database.', ar: 'تحقق مباشر من المخزون والمقاسات من قاعدة بيانات متجرك.' },
      },
      {
        title: { en: 'One-Click Human Request', ar: 'طلب موظف حقيقي' },
        desc: { en: 'Shopper can request a human team member at any moment.', ar: 'يمكن للمتسوق طلب التحدث مع شخص حقيقي في أي لحظة.' },
      },
    ],
  },
  {
    key: 'leads',
    label: { en: 'Captured Leads & CRM', ar: 'سجل العملاء المحتملين' },
    navIcon: <Icon icon={UserGroupIcon} className="size-4" />,
    title: {
      en: 'Unified customer profiles with attached garment intent.',
      ar: 'ملفات عملاء موحدة مع ربط القطع التي تم قياسها واهتماماتهم.',
    },
    description: {
      en: 'Every shopper interaction logs contact information, preferred language, and the exact try-on garment into a centralized CRM workspace.',
      ar: 'كل تفاعل يوثق بيانات الاتصال واللغة المفضلة والقطعة المحددة في لوحة تحكم مركزية لخدمة العملاء والمبيعات.',
    },
    route: '/conversations',
    image: () => '/landing/proof/demo-ui-captured-leads-demo-data-en.webp',
    imageAlt: {
      en: 'GrindCTRL captured leads CRM dashboard preview',
      ar: 'لوحة سجل العملاء المحتملين في GrindCTRL',
    },
    demoData: true,
    hotspots: [
      {
        title: { en: 'Lead Stage Pipeline', ar: 'مراحل العميل المحتمل' },
        desc: { en: 'Filters by Needs Reply, In Progress, or Resolved.', ar: 'تصفية حسب يحتاج رداً، قيد المعالجة، أو تم الحل.' },
      },
      {
        title: { en: 'Garment Interest Tag', ar: 'القطعة محل الاهتمام' },
        desc: { en: 'Associates the specific SKU the customer previewed.', ar: 'ربط المعرّف الدقيق للقطعة التي جرّبها العميل.' },
      },
      {
        title: { en: 'Assigned Teammate', ar: 'عضو الفريق المسؤول' },
        desc: { en: 'Clear ownership so no high-intent inquiry gets lost.', ar: 'مسؤولية واضحة تضمن عدم ضياع أي عميل مهتم.' },
      },
    ],
  },
  {
    key: 'workflows',
    label: { en: 'Automations & Operations', ar: 'الأتمتة والعمليات' },
    navIcon: <Icon icon={WorkflowSquare01Icon} className="size-4" />,
    title: {
      en: 'Workflow catalog coordinating handoffs, alerts, and syncs.',
      ar: 'كتالوج سير العمل لتنسيق التحويلات والإشعارات والمزامنة.',
    },
    description: {
      en: 'Explore pre-built and custom automation templates spanning WhatsApp cart recovery, n8n webhook triggers, and team notification flows.',
      ar: 'استعرض قوالب الأتمتة الجاهزة والمخصصة التي تشمل استرجاع السلات عبر واتساب، وروابط n8n، وإشعارات الفريق الفورية.',
    },
    route: '/operations',
    image: () => '/landing/proof/demo-ui-workflow-catalog-preview-en.webp',
    imageAlt: {
      en: 'GrindCTRL automation workflow catalog preview',
      ar: 'كتالوج سير عمل الأتمتة في GrindCTRL',
    },
    demoData: true,
    hotspots: [
      {
        title: { en: 'Automated Event Triggers', ar: 'مشغلات الأحداث التلقائية' },
        desc: { en: 'Fires on try-on completions, abandoned intent, or stock drops.', ar: 'تفعيل عند اكتمال القياس أو مغادرة السلة أو تغير المخزون.' },
      },
      {
        title: { en: 'Maturity Status Badges', ar: 'حالات النضج المعتمدة' },
        desc: { en: 'Clearly identifies Ready, Planned, and Setup-Required templates.', ar: 'تحديد واضح للقوالب الجاهزة أو المخططة أو التي تتطلب إعداداً.' },
      },
      {
        title: { en: 'Multi-Channel Dispatch', ar: 'إرسال متعدد القنوات' },
        desc: { en: 'Connects directly with WhatsApp, email, and CRM endpoints.', ar: 'اتصال مباشر مع واتساب والبريد الإلكتروني ونقاط CRM.' },
      },
    ],
  },
  {
    key: 'analytics',
    label: { en: 'Analytics & Reporting', ar: 'التحليلات والتقارير' },
    navIcon: <Icon icon={ChartHistogramIcon} className="size-4" />,
    title: {
      en: 'Executive telemetry tracking try-on volume, resolution, and ROI.',
      ar: 'تقارير تنفيذية ترصد حجم التوليد، ومعدل الإغلاق، وعائد الاستثمار.',
    },
    description: {
      en: 'Gain full clarity on shopper engagement, average response times, AI resolution rates, and attributed customer conversion with zero vanity metrics.',
      ar: 'رؤية واضحة لحجم تفاعل المتسوقين، ومتوسط سرعة الرد، ونسبة حل المحادثات بالذكاء الاصطناعي، بدون أي أرقام مضللة.',
    },
    route: '/operations',
    image: () => '/landing/proof/demo-ui-analytics-preview-demo-data-en.webp',
    imageAlt: {
      en: 'GrindCTRL executive analytics reporting dashboard preview',
      ar: 'لوحة تقارير وتحليلات GrindCTRL التنفيذية',
    },
    demoData: true,
    hotspots: [
      {
        title: { en: 'AI vs Human Breakdown', ar: 'نسبة الحل الآلي والبشري' },
        desc: { en: 'Track percentage of chats handled without human intervention.', ar: 'متابعة نسبة المحادثات التي أُغلقت بنجاح بدون تدخل بشري.' },
      },
      {
        title: { en: 'Response Velocity', ar: 'سرعة أول رد' },
        desc: { en: 'Monitor median time to first reply in seconds.', ar: 'قياس متوسط سرعة الرد الأول بالثواني.' },
      },
      {
        title: { en: 'Truthful Demo Disclosure', ar: 'إفصاح شفاف للبيانات' },
        desc: { en: 'Synthetic data clearly declared on all preview telemetry.', ar: 'بيانات تجريبية معلنة بشفافية تامة.' },
      },
    ],
  },
];

export function ProductUiShowcase({ locale }: ProductUiShowcaseProps) {
  const [activeTabKey, setActiveTabKey] = useState<ShowcaseTabKey>('tryon');

  const isArabic = locale === 'ar';
  const activeTab = SHOWCASE_TABS.find((tab) => tab.key === activeTabKey) ?? SHOWCASE_TABS[0];

  const copy = {
    eyebrow: isArabic ? 'استكشف واجهة المنصة' : 'The Product In Action',
    title: isArabic
      ? 'واجهات منتج حقيقية، لا مجرد رسومات تسويقية.'
      : 'Authentic product UI, not decorative illustrations.',
    subtitle: isArabic
      ? 'تنقّل بين أجزاء المنصة الأساسية. كل نافذة مأخوذة مباشرة من مكونات GrindCTRL العاملة مع بيانات تجريبية معتمدة.'
      : 'Explore each core platform pillar. Every viewport is an authentic capture from GrindCTRL React components, labeled with verified demo data.',
    exploreButton: isArabic ? 'تفاصيل أكثر عن هذه الميزة' : 'Explore this capability',
    demoDataBadge: isArabic ? 'بيانات تجريبية معتمدة' : 'Demo Data Fixture',
  };

  return (
    <section id="platform" className="relative scroll-mt-20 overflow-hidden" aria-labelledby="product-ui-title">
      <div className="container max-w-[120rem] mx-auto px-4">
        <div className="border-x border-b border-border py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-card/10">
        
        {/* Section Header */}
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
          <Eyebrow locale={locale}>{copy.eyebrow}</Eyebrow>
          <h2
            id="product-ui-title"
            className="mt-3 text-[28px] font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[44px]"
          >
            {copy.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            {copy.subtitle}
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="mb-10 flex overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto inline-flex gap-2 rounded-2xl border border-border/80 bg-card/70 p-1.5 backdrop-blur">
            {SHOWCASE_TABS.map((tab) => {
              const isSelected = tab.key === activeTabKey;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTabKey(tab.key)}
                  className={cn(
                    'flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-150 sm:text-sm',
                    isSelected
                      ? 'bg-foreground text-background shadow-sm'
                      : 'text-muted-foreground hover:bg-background/60 hover:text-foreground',
                  )}
                >
                  {tab.navIcon}
                  <span>{tab.label[locale]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Product Stage */}
        <div className="overflow-hidden rounded-3xl border border-border/90 bg-card shadow-[0_1px_3px_rgb(0_0_0/0.05),0_24px_64px_-24px_rgb(30_20_10/0.2)]">
          
          {/* Top Window Chrome Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-border/80 bg-background/90 px-5 py-3 backdrop-blur sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-xs font-semibold text-foreground">
                GrindCTRL Platform Console • {activeTab.label[locale]}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-[11px] font-bold">
                {copy.demoDataBadge}
              </Badge>
              <Button asChild variant="ghost" size="sm" className="h-8 rounded-full text-xs font-semibold">
                <Link
                  href={activeTab.route}
                  onClick={() => trackClick('cta_clicked', { cta: 'view_capability', section: activeTab.key })}
                >
                  {copy.exploreButton}
                  <span className="ms-1 inline-block rtl:-scale-x-100">
                    <Icon icon={ArrowRight02Icon} className="size-3.5" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Body: Split View with Deep-Dive Features & Authentic UI Viewport */}
          <div className="grid min-w-0 items-center lg:grid-cols-[0.88fr_1.12fr]">
            
            {/* Left Column: Context & Key Architecture Callouts */}
            <div className="flex min-w-0 flex-col gap-6 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-3">
                <Badge variant="outline" className="w-fit rounded-full text-xs font-bold">
                  {activeTab.label[locale]}
                </Badge>
                <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {activeTab.title[locale]}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {activeTab.description[locale]}
                </p>
              </div>

              {/* 3 Hotspot Annotations */}
              <div className="flex flex-col gap-3">
                {activeTab.hotspots.map((hotspot, idx) => (
                  <div
                    key={hotspot.title.en}
                    className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/80 p-3.5 shadow-xs transition-colors hover:border-foreground/40"
                  >
                    <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-primary/10 text-xs font-bold text-primary tabular-nums">
                      {idx + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-foreground sm:text-sm">
                        {hotspot.title[locale]}
                      </h4>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {hotspot.desc[locale]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Product Truth Tag */}
              <div className="flex items-center gap-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                <Icon icon={CheckmarkCircle02Icon} className="size-4 text-emerald-600 dark:text-emerald-400" />
                <span>
                  {isArabic
                    ? 'شاشات ملتقطة من المنتج الفعلي بدون تعديل في المقاييس أو الأرقام'
                    : 'Real interface components captured with declared synthetic fixture values'}
                </span>
              </div>
            </div>

            {/* Right Column: Authentic UI Viewport */}
            <div className="relative min-w-0 border-t border-border/80 bg-muted/30 p-4 sm:p-6 lg:border-s lg:border-t-0 lg:p-8">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-border/90 bg-card shadow-md">
                <Image
                  src={activeTab.image(locale)}
                  alt={activeTab.imageAlt[locale]}
                  fill
                  sizes="(min-width: 1024px) 620px, 92vw"
                  className="object-contain object-top p-1 transition-transform duration-300 hover:scale-[1.01]"
                />
              </div>

              <div className="mt-3 flex items-center justify-between px-2 text-[11px] text-muted-foreground">
                <span>{activeTab.label[locale]}</span>
                <span>{copy.demoDataBadge}</span>
              </div>
            </div>

          </div>

        </div>

        </div>
      </div>
    </section>
  );
}
