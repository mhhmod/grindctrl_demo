'use client';

import React from 'react';
import { ShieldCheck, Timer } from 'lucide-react';
import {
  Database01Icon,
  CheckmarkCircle02Icon,
} from '@hugeicons/core-free-icons';
import { Icon } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import type { SiteLocale } from '@/lib/landing/landing-i18n';
import { Eyebrow } from '@/components/landing/eyebrow';
import { ShopifyMark } from '@/components/brand-marks';

interface TechnicalTrustProps {
  locale: SiteLocale;
}

export function TechnicalTrust({ locale }: TechnicalTrustProps) {
  const isArabic = locale === 'ar';

  const copy = {
    eyebrow: isArabic ? 'الإعداد والثقة التقنية' : 'Implementation & Technical Trust',
    title: isArabic
      ? 'تنفيذ مُدار بالكامل، وبنية تحتية موثوقة لأعلى المعايير.'
      : 'Fully managed onboarding with enterprise-grade safeguards.',
    subtitle: isArabic
      ? 'لا حاجة لتعديل كود القالب يدويًا أو توظيف خبراء ذكاء اصطناعي. فريقنا يجهّز المنصة بالكامل لمتجرك، مع ضمانات أمان وحفظ للخصوصية.'
      : 'Zero invasive code injection and no in-house AI team required. GrindCTRL is deployed and supervised by our team with strict privacy and security guardrails.',
    
    stepsTitle: isArabic ? 'مسار الإعداد السريع في ٣ خطوات:' : 'The 3-Step Managed Deployment Model:',
    steps: [
      {
        num: '01',
        title: isArabic ? 'التثبيت والربط في دقائق' : 'Install & Connect (Day 1)',
        desc: isArabic
          ? 'تثبيت تطبيق Shopify الأصلي ومزامنة الكتالوج بنقرة واحدة، بدون أي تعديل في ملفات Liquid أو شفرة القالب.'
          : 'One-click Shopify app block integration. Instantly syncs your product catalog with zero custom theme code edits.',
        badge: isArabic ? 'بدون تعديل كود' : 'Zero Theme Edits',
      },
      {
        num: '02',
        title: isArabic ? 'تغذية المعرفة وضبط القواعد' : 'Grounding & Guardrails (Days 2–3)',
        desc: isArabic
          ? 'تغذية المساعد الذكي بجداول المقاسات، وسياسات الشحن والاستبدال، وتحديد قواعد التحويل لموظفي المبيعات.'
          : 'Ingest store knowledge, sizing charts, and return rules. Define team assignment rules and escalation triggers.',
        badge: isArabic ? 'استناد لمعرفة المتجر' : 'Grounded Rules',
      },
      {
        num: '03',
        title: isArabic ? 'إطلاق المنظومة والإشراف المستمر' : 'Launch & Managed Operations (Day 4+)',
        desc: isArabic
          ? 'تفعيل التجربة الافتراضية ودردشة المتجر على مدار الساعة، مع مراقبة الأداء وتحديث النماذج بإشراف فريقنا.'
          : 'Activate 24/7 try-on and store chat with human escalation. Our team continuously monitors latency and accuracy.',
        badge: isArabic ? 'إدارة كاملة مستمرة' : 'Fully Supervised',
      },
    ],

    pillarsTitle: isArabic ? 'معايير الأمان والخصوصية الصارمة:' : 'Security & Privacy Guarantees:',
    pillars: [
      {
        icon: <ShieldCheck className="size-5 text-emerald-600 dark:text-emerald-400" />,
        title: isArabic ? 'حفظ مؤقت للصور (٣٠ دقيقة)' : 'Ephemeral Image Retention',
        desc: isArabic
          ? 'تُحذف صور المتسوقين والنتائج تلقائياً خلال نحو ٣٠ دقيقة. لا نقوم ببناء أي قاعدة بيانات بيومترية.'
          : 'Shopper photos and generated results are automatically purged after ~30 minutes. Zero biometric storage.',
      },
      {
        icon: <ShopifyMark className="size-5 text-[#95BF47]" />,
        title: isArabic ? 'بيئة شوبيفاي الآمنة المعتمدة' : 'Shopify App Sandbox Compliant',
        desc: isArabic
          ? 'المنصة تعمل بالكامل ضمن إطار تطبيقات شوبيفاي الرسمي، بدون برمجيات خبيثة أو تحميل بطيء.'
          : 'Runs strictly within Shopify app extension boundaries with zero external trackers or speed penalties.',
      },
      {
        icon: <Icon icon={Database01Icon} className="size-5 text-primary" />,
        title: isArabic ? 'حماية من الهلوسة والردود العشوائية' : 'Grounded Deterministic Guardrails',
        desc: isArabic
          ? 'المساعد الذكي مقيّد بمعلومات كتالوجك فقط ولا يجيب بمعلومات مضللة أو وعود أسعار غير معتمدة.'
          : 'Assistant responses are strictly bounded by verified store inventory and policies to eliminate hallucinations.',
      },
      {
        icon: <Timer className="size-5 text-primary" />,
        title: isArabic ? 'سرعة استجابة فائقة (أقل من ثانية)' : 'Sub-Second Response Latency',
        desc: isArabic
          ? 'بنية تحتية حديثة تضمن ظهور إجابات المحادثة في أجزاء من الثانية ومعالجة صور القياس في نحو ٣ ثوانٍ.'
          : 'High-performance model routing delivers chat replies in milliseconds and try-on visuals in ~3.2s.',
      },
    ],
  };

  return (
    <section id="trust" className="relative scroll-mt-20 overflow-hidden" aria-labelledby="technical-trust-title">
      <div className="container max-w-[120rem] mx-auto px-4">
        <div className="border-x border-b border-border py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-card/10">
        
        {/* Section Header */}
        <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center">
          <Eyebrow locale={locale}>{copy.eyebrow}</Eyebrow>
          <h2
            id="technical-trust-title"
            className="mt-3 text-[28px] font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[44px]"
          >
            {copy.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            {copy.subtitle}
          </p>
        </div>

        {/* 3-Step Deployment Journey */}
        <div className="mb-16">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">
            {copy.stepsTitle}
          </h3>
          <div className="grid min-w-0 gap-6 sm:grid-cols-3">
            {copy.steps.map((step) => (
              <div
                key={step.num}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-md sm:p-7"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="grid size-9 place-items-center rounded-xl bg-primary/10 text-sm font-extrabold text-primary tabular-nums">
                      {step.num}
                    </span>
                    <Badge variant="outline" className="text-[10px] font-bold">
                      {step.badge}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                    {step.title}
                  </h4>
                  <p className="mt-2.5 text-xs leading-[1.7] text-muted-foreground sm:text-sm">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <Icon icon={CheckmarkCircle02Icon} className="size-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{isArabic ? 'جاهز للاستخدام' : 'Guaranteed Rollout'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Security & Technical Safeguard Pillars */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">
            {copy.pillarsTitle}
          </h3>
          <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col rounded-2xl border border-border/70 bg-card/70 p-5 shadow-xs transition-colors hover:border-foreground/30 hover:bg-card sm:p-6"
              >
                <div className="mb-3.5 grid size-10 place-items-center rounded-xl border border-border/80 bg-background shadow-xs">
                  {pillar.icon}
                </div>
                <h4 className="text-sm font-bold leading-snug text-foreground sm:text-base">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
