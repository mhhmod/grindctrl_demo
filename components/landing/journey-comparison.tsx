'use client';

import React, { useState } from 'react';
import {
  AlertCircleIcon,
  CheckmarkCircle02Icon,
  ArrowRight02Icon,
  Clock01Icon,
  Cancel01Icon,
} from '@hugeicons/core-free-icons';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/icons';
import { cn } from '@/lib/utils';
import type { SiteLocale } from '@/lib/landing/landing-i18n';
import { Eyebrow } from '@/components/landing/eyebrow';
import { ShopifyMark, WhatsAppMark, InstagramMark } from '@/components/brand-marks';

interface JourneyComparisonProps {
  locale: SiteLocale;
}

export function JourneyComparison({ locale }: JourneyComparisonProps) {
  const [activeMode, setActiveMode] = useState<'connected' | 'fragmented'>('connected');
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  const isArabic = locale === 'ar';

  const copy = {
    eyebrow: isArabic ? 'لماذا تختلف GrindCTRL' : 'Problem & Transformation',
    title: isArabic
      ? 'من الفوضى المشتتة إلى نظام تجارة ذكي مترابط.'
      : 'From fragmented friction to one connected commerce engine.',
    subtitle: isArabic
      ? 'معظم المتاجر تفقد العملاء بين رسائل إنستغرام، والجداول اليدوية، والردود المتأخرة. إليك الفرق عندما يعمل كل شيء كنظام واحد.'
      : 'Most stores lose shoppers between disconnected Instagram DMs, manual spreadsheets, and delayed follow-ups. Experience the difference when every signal triggers action.',
    connectedTab: isArabic ? 'مع GrindCTRL (نظام مترابط)' : 'With GrindCTRL (Connected)',
    fragmentedTab: isArabic ? 'الواقع المشتت (قبل GrindCTRL)' : 'The Fragmented Reality (Before)',

    fragmented: {
      headline: isArabic ? '٥ أدوات منفصلة، وضياع دائم للفرص' : '5 disconnected tools, manual copy-paste & lost revenue',
      steps: [
        {
          num: '01',
          title: isArabic ? 'متسوق يستفسر في إنستغرام' : 'Shopper asks on Instagram',
          desc: isArabic
            ? 'يسأل عن توفر المقاس وطريقة الارتداء في تعليق أو رسالة خاصة.'
            : 'Shopper asks about sizing, fit, or material on an Instagram post.',
          badge: isArabic ? 'إشارة معزولة' : 'Siloed Signal',
          friction: isArabic ? 'لا ربط بمخزون المتجر الفعلي' : 'No connection to real-time inventory',
          metric: isArabic ? 'زمن الرد: غير محدد' : 'Response time: Unknown',
        },
        {
          num: '02',
          title: isArabic ? 'نسخ يدوي إلى جدول بيانات' : 'Manual spreadsheet logging',
          desc: isArabic
            ? 'يقوم الموظف بنسخ اسم العميل ورقم هاتفه يدوياً إلى Excel أو ملحوظة.'
            : 'Staff manually copies username, request, and phone number to a sheet.',
          badge: isArabic ? 'عمل يدوي معرض للخطأ' : 'Manual Friction',
          friction: isArabic ? 'تأخير متوسط ٦–١٤ ساعة' : 'Average delay 6–14 hours',
          metric: isArabic ? 'أخطاء إدخال بنسبة ٢٥٪' : '~25% entry error rate',
        },
        {
          num: '03',
          title: isArabic ? 'انقطاع سياق المحادثة' : 'Context lost between shifts',
          desc: isArabic
            ? 'موظف الشيفت المسائي لا يعرف ما طلبه العميل صباحاً فيحدث تضارب.'
            : 'Shift changes lose context: customer is asked the same question twice.',
          badge: isArabic ? 'فقدان البيانات' : 'Lost Context',
          friction: isArabic ? 'تجربة مشتتة للمتسوق' : 'Frustrating customer experience',
          metric: isArabic ? 'إحباط العميل' : 'High churn point',
        },
        {
          num: '04',
          title: isArabic ? 'متابعة متأخرة بعد مغادرة المشتري' : 'Follow-up sent too late',
          desc: isArabic
            ? 'إرسال رسالة بعد ساعات طويلة، حين يكون المتسوق قد اشترى من منافس.'
            : 'Follow-up sent 18 hours later; the buyer already purchased from a rival.',
          badge: isArabic ? 'فرصة ضائعة' : 'Lost Sale',
          friction: isArabic ? 'انخفاض معدل التحويل' : 'Abandoned intent',
          metric: isArabic ? 'خسارة ٤٠٪ من المهتمين' : '~40% drop-off',
        },
        {
          num: '05',
          title: isArabic ? 'صفر تقارير ورؤية عمياء' : 'Zero attribution & reporting',
          desc: isArabic
            ? 'إدارة المتجر لا تعرف كم فرصة ضاعت، ولا أي المنتجات تثير الأسئلة.'
            : 'Leadership has no visibility into lost leads, questions, or attribution.',
          badge: isArabic ? 'رؤية عمياء' : 'Blind Operations',
          friction: isArabic ? 'قرارات مبنية على التخمين' : 'Decisions made by guesswork',
          metric: isArabic ? 'بيانات غير موثقة' : 'Unattributed revenue',
        },
      ],
    },

    connected: {
      headline: isArabic ? 'مسار فوري وموحد: من إشارة المتسوق إلى الإيراد' : 'One unified path: from shopper signal to attributed order',
      steps: [
        {
          num: '01',
          title: isArabic ? 'تجربة قياس ذكية على المتجر' : 'Storefront AI Try-On & Signal',
          desc: isArabic
            ? 'المتسوق يرى القطعة عليه فوراً بضغطة زر داخل صفحة المنتج في Shopify.'
            : 'Shopper instantly previews the garment on their own photo via Shopify app block.',
          badge: isArabic ? 'تطبيق Shopify أصلي' : 'Native App Block',
          benefit: isArabic ? 'توليد فوري خلال ٣ ثوانٍ' : 'Sub-3s photorealistic preview',
          metric: isArabic ? 'تفاعل عالي وفوري' : '+48% engagement rate',
        },
        {
          num: '02',
          title: isArabic ? 'دردشة متجر فورية مدعومة ببياناتك' : 'Grounded Store Chat Context',
          desc: isArabic
            ? 'المساعد الذكي يجيب فوراً عن المقاسات وسياسة الشحن من كتالوجك مباشرة.'
            : 'AI assistant answers instantly about sizing and availability from store knowledge.',
          badge: isArabic ? 'إجابة فورية ٢٤/٧' : '24/7 Grounded AI',
          benefit: isArabic ? 'إجابة دقيقة بدون تخمين' : 'Catalog & stock synced in real time',
          metric: isArabic ? 'رد في أقل من ثانية' : '<1s response time',
        },
        {
          num: '03',
          title: isArabic ? 'ملف عميل مؤهل تلقائياً' : 'Automated Lead Capture & CRM',
          desc: isArabic
            ? 'تسجيل اسم العميل ورقم الواتساب والقطعة التي جربها في سجل موحد.'
            : 'Logs name, WhatsApp, email, and exact try-on interest into a unified profile.',
          badge: isArabic ? 'سجل عميل متكامل' : 'Unified Profile',
          benefit: isArabic ? 'حفظ كامل لسياق الطلب' : 'Rich intent & item history attached',
          metric: isArabic ? 'أتمتة بنسبة ١٠٠٪' : '100% automated intake',
        },
        {
          num: '04',
          title: isArabic ? 'تحويل ذكي ومتابعة عبر واتساب' : 'Smart Routing & WhatsApp Action',
          desc: isArabic
            ? 'تحويل الحالات الخاصة لفريق المبيعات مع ملاحظات داخلية، أو متابعة تلقائية.'
            : 'Assigns complex inquiries to team inbox, or sends instant personalized WhatsApp follow-up.',
          badge: isArabic ? 'واتساب وفريق المبيعات' : 'WhatsApp + Team Handoff',
          benefit: isArabic ? 'ملاحظات داخلية وقوالب جاهزة' : 'Seamless human escalation & templates',
          metric: isArabic ? 'سرعة إغلاق الصفقات' : 'Immediate conversion bridge',
        },
        {
          num: '05',
          title: isArabic ? 'تقارير أداء وعائد استثمار شفاف' : 'Closed-Loop Attribution & Reports',
          desc: isArabic
            ? 'لوحة تحكم توثق كل محادثة، ومعدل نجاح القياس، والطلبات المحققة.'
            : 'Executive dashboard tracking try-on usage, AI resolution rate, and orders.',
          badge: isArabic ? 'بيانات مؤكدة وشفافة' : 'Verified Telemetry',
          benefit: isArabic ? 'رؤية شاملة للعائد المادي' : 'Clear ROI and conversion attribution',
          metric: isArabic ? 'تحكم كامل' : '100% visible lifecycle',
        },
      ],
    },
  };

  const currentDataset = activeMode === 'connected' ? copy.connected : copy.fragmented;
  const currentStep = currentDataset.steps[selectedStepIndex] ?? currentDataset.steps[0];

  return (
    <section id="how" className="relative scroll-mt-20 overflow-hidden" aria-labelledby="journey-comparison-title">
      <div className="container max-w-[120rem] mx-auto px-4">
        <div className="border-x border-b border-border py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-card/10">
        
        {/* Section Header */}
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
          <Eyebrow locale={locale}>{copy.eyebrow}</Eyebrow>
          <h2
            id="journey-comparison-title"
            className="mt-3 text-[28px] font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[44px]"
          >
            {copy.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            {copy.subtitle}
          </p>

          {/* Interactive Mode Switcher */}
          <div className="mt-8 inline-flex rounded-full border border-border bg-card p-1 shadow-sm">
            <button
              type="button"
              onClick={() => {
                setActiveMode('connected');
                setSelectedStepIndex(0);
              }}
              className={cn(
                'flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-200 sm:text-sm',
                activeMode === 'connected'
                  ? 'bg-foreground text-background shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <Icon icon={CheckmarkCircle02Icon} className="size-4 text-emerald-400" />
              {copy.connectedTab}
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveMode('fragmented');
                setSelectedStepIndex(0);
              }}
              className={cn(
                'flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-200 sm:text-sm',
                activeMode === 'fragmented'
                  ? 'bg-destructive text-destructive-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <Icon icon={AlertCircleIcon} className="size-4" />
              {copy.fragmentedTab}
            </button>
          </div>
        </div>

        {/* Interactive Comparison Flow Board */}
        <div
          className={cn(
            'overflow-hidden rounded-3xl border p-6 transition-all duration-300 sm:p-8 lg:p-10',
            activeMode === 'connected'
              ? 'border-border/80 bg-gradient-to-b from-card to-background shadow-[0_1px_3px_rgb(0_0_0/0.05),0_20px_50px_-20px_rgb(0_0_0/0.15)]'
              : 'border-destructive/30 bg-destructive/5 shadow-inner',
          )}
        >
          {/* Board Title & Status Banner */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  'grid size-8 place-items-center rounded-full text-xs font-bold',
                  activeMode === 'connected'
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                    : 'bg-destructive/15 text-destructive',
                )}
              >
                {activeMode === 'connected' ? '✓' : '!'}
              </span>
              <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                {currentDataset.headline}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">
                {isArabic ? 'انقر على أي مرحلة لمعاينتها:' : 'Click any step to inspect:'}
              </span>
            </div>
          </div>

          {/* Flow Stepper Rail (Desktop 5-Columns, Mobile Scroll) */}
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {currentDataset.steps.map((step, idx) => {
              const isSelected = idx === selectedStepIndex;
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setSelectedStepIndex(idx)}
                  className={cn(
                    'group relative flex min-w-0 flex-col items-start rounded-2xl border p-4 text-start transition-all duration-200',
                    isSelected
                      ? activeMode === 'connected'
                        ? 'border-foreground bg-background shadow-md ring-1 ring-foreground/20'
                        : 'border-destructive bg-background shadow-md ring-1 ring-destructive/30'
                      : 'border-border/70 bg-card/60 hover:border-foreground/30 hover:bg-card',
                  )}
                >
                  <div className="mb-3 flex w-full items-center justify-between">
                    <span
                      className={cn(
                        'text-xs font-extrabold tabular-nums',
                        isSelected ? 'text-foreground' : 'text-muted-foreground',
                      )}
                    >
                      {step.num}
                    </span>
                    <span
                      className={cn(
                        'rounded-full px-2 py-0.5 text-[10px] font-bold',
                        activeMode === 'connected'
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                          : 'bg-destructive/10 text-destructive',
                      )}
                    >
                      {step.badge}
                    </span>
                  </div>

                  <h4 className="line-clamp-2 text-xs font-bold leading-snug text-foreground sm:text-sm">
                    {step.title}
                  </h4>

                  <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>

                  <div className="mt-4 flex w-full items-center justify-between border-t border-border/60 pt-2 text-[10px] font-semibold text-muted-foreground">
                    <span>{step.metric}</span>
                    <span className="rtl:-scale-x-100">→</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Inspection Card for Selected Step */}
          <div className="mt-8 rounded-2xl border border-border/80 bg-background p-6 shadow-sm sm:p-8">
            <div className="grid min-w-0 items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex min-w-0 flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary tabular-nums">
                    {isArabic ? `المرحلة ${currentStep.num}` : `Stage ${currentStep.num}`}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">•</span>
                  <span className="text-xs font-semibold text-foreground">{currentStep.badge}</span>
                </div>

                <h4 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {currentStep.title}
                </h4>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {currentStep.desc}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-medium">
                  {activeMode === 'connected' ? (
                    <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                      <Icon icon={CheckmarkCircle02Icon} className="size-4" />
                      <span>{('benefit' in currentStep ? currentStep.benefit : '') as string}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-destructive">
                      <Icon icon={Cancel01Icon} className="size-4" />
                      <span>{('friction' in currentStep ? currentStep.friction : '') as string}</span>
                    </div>
                  )}
                  <span className="text-muted-foreground">•</span>
                  <div className="text-foreground font-semibold">
                    {currentStep.metric}
                  </div>
                </div>
              </div>

              {/* Visual Mini Graphic for the Stage */}
              <div className="flex min-w-0 items-center justify-center rounded-xl border border-border/70 bg-muted/30 p-6 text-center">
                {activeMode === 'connected' ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div className="grid size-12 place-items-center rounded-2xl border border-border bg-card shadow-sm">
                        <ShopifyMark className="size-6 text-[#95BF47]" />
                      </div>
                      <span className="text-muted-foreground/50 rtl:-scale-x-100">→</span>
                      <div className="grid size-12 place-items-center rounded-2xl border border-border bg-card shadow-sm">
                        <WhatsAppMark className="size-6 text-[#25D366]" />
                      </div>
                      <span className="text-muted-foreground/50 rtl:-scale-x-100">→</span>
                      <div className="grid size-12 place-items-center rounded-2xl border border-border bg-primary text-primary-foreground shadow-sm font-bold text-xs">
                        CTRL
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                      {isArabic ? 'مسار تلقائي ومترابط بالكامل' : 'Fully Automated & Synced Workflow'}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-3 opacity-60">
                      <div className="grid size-11 place-items-center rounded-xl border border-destructive/40 bg-card line-through text-xs font-bold text-destructive">
                        IG DM
                      </div>
                      <span className="text-destructive font-bold">✕</span>
                      <div className="grid size-11 place-items-center rounded-xl border border-destructive/40 bg-card line-through text-xs font-bold text-destructive">
                        Sheet
                      </div>
                      <span className="text-destructive font-bold">✕</span>
                      <div className="grid size-11 place-items-center rounded-xl border border-destructive/40 bg-card line-through text-xs font-bold text-destructive">
                        Lost
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-destructive">
                      {isArabic ? 'فقدان سياق المحادثة وتأخر المتابعة' : 'Disconnected Tools & Lost Conversion'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
