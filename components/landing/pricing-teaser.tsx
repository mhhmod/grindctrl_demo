'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight02Icon, CheckmarkCircle02Icon } from '@hugeicons/core-free-icons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/icons';
import type { SiteLocale } from '@/lib/landing/landing-i18n';
import { Eyebrow } from '@/components/landing/eyebrow';
import { trackClick } from '@/lib/analytics';
import { BOOKING_URL } from '@/lib/booking';

interface PricingTeaserProps {
  locale: SiteLocale;
}

export function PricingTeaser({ locale }: PricingTeaserProps) {
  const isArabic = locale === 'ar';

  const copy = {
    eyebrow: isArabic ? 'الباقات والاستثمار' : 'Transparent Investment',
    title: isArabic
      ? 'ابدأ بما يناسب حجم متجرك، وتوسع مع نمو المبيعات.'
      : 'Start with what fits your store, scale as sales grow.',
    subtitle: isArabic
      ? 'باقات واضحة تشمل رصيد التوليد الشهري والمساعد الذكي، مع خيار الإدارة الكاملة والإشراف المستمر من فريقنا.'
      : 'Transparent plans including monthly try-on allowances, store chat, and CRM sync, with managed setup and ongoing optimization.',
    viewPricing: isArabic ? 'عرض جدول الأسعار الكامل' : 'View full plan comparison',
    customEnterprise: isArabic ? 'هل تحتاج متطلبات خاصة أو كتالوجاً ضخماً؟' : 'Need custom enterprise volume or high SKU coverage?',
    bookCall: isArabic ? 'تحدث مع فريقنا' : 'Speak with our team',
    plans: [
      {
        id: 'starter',
        name: isArabic ? 'البداية التجريبية' : 'Starter Pilot',
        badge: isArabic ? 'للمتاجر الصاعدة' : 'For Growing Stores',
        renders: isArabic ? '٥٠ عملية قياس شهرياً' : '50 Try-On Renders / mo',
        features: [
          isArabic ? 'تطبيق Shopify الأصلي' : 'Native Shopify App Block',
          isArabic ? 'مساعد المتجر الذكي (عربي وإنجليزي)' : 'Store Chat Assistant (EN & AR)',
          isArabic ? 'سجل العملاء المحتملين الأساسي' : 'Basic Lead Capture Inbox',
          isArabic ? 'حماية الرصيد عند فشل التوليد' : 'Credit safeguard on render fails',
        ],
      },
      {
        id: 'growth',
        name: isArabic ? 'الانطلاق والنمو' : 'Growth Commercial',
        badge: isArabic ? 'الأكثر طلباً' : 'Most Popular',
        popular: true,
        renders: isArabic ? '٥٠٠ عملية قياس شهرياً' : '500 Try-On Renders / mo',
        features: [
          isArabic ? 'جميع مزايا البداية' : 'All Starter features included',
          isArabic ? 'أولوية معالجة الصور فائقة السرعة' : 'Priority generation routing (~3.2s)',
          isArabic ? 'ربط محادثات واتساب المباشرة' : 'WhatsApp follow-up triggers',
          isArabic ? 'لوحة تحليلات وتقارير متقدمة' : 'Advanced executive analytics',
        ],
      },
      {
        id: 'managed',
        name: isArabic ? 'الإدارة المتكاملة (Done-For-You)' : 'Fully Managed (DFY)',
        badge: isArabic ? 'إدارة شاملة' : 'White Glove Service',
        renders: isArabic ? 'رصيد مخصص + إشراف كامل' : 'Custom Volume + Dedicated Support',
        features: [
          isArabic ? 'إعداد وإدارة كاملة من فريقنا' : 'Full setup & catalog training by our team',
          isArabic ? 'تخصيص قواعد الأتمتة والتحويل' : 'Custom routing & CRM automations',
          isArabic ? 'مراجعة أسبوعية للأداء والتحويل' : 'Weekly conversion & latency tuning',
          isArabic ? 'دعم فني مخصص عبر مدير حساب' : 'Dedicated enterprise account manager',
        ],
      },
    ],
  };

  return (
    <section id="pricing" className="relative scroll-mt-20 overflow-hidden" aria-labelledby="pricing-teaser-title">
      <div className="container max-w-[120rem] mx-auto px-4">
        <div className="border-x border-b border-border py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-card/10">
        
        {/* Section Header */}
        <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center">
          <Eyebrow locale={locale}>{copy.eyebrow}</Eyebrow>
          <h2
            id="pricing-teaser-title"
            className="mt-3 text-[28px] font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[44px]"
          >
            {copy.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            {copy.subtitle}
          </p>
        </div>

        {/* 3 Pricing Teaser Cards */}
        <div className="grid min-w-0 gap-6 lg:grid-cols-3">
          {copy.plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col justify-between rounded-3xl border p-7 transition-all duration-200 ${
                plan.popular
                  ? 'relative border-foreground bg-card shadow-lg ring-1 ring-foreground/20'
                  : 'border-border/80 bg-card/60 hover:border-foreground/30 hover:bg-card'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {plan.name}
                  </span>
                  <Badge variant={plan.popular ? 'default' : 'outline'} className="text-[11px] font-bold">
                    {plan.badge}
                  </Badge>
                </div>

                <div className="mt-5 border-b border-border/80 pb-5">
                  <p className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {plan.renders}
                  </p>
                </div>

                <ul className="mt-6 flex flex-col gap-3 text-xs text-foreground/90 sm:text-sm">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Icon icon={CheckmarkCircle02Icon} className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-border/60 pt-5">
                <Button
                  asChild
                  variant={plan.popular ? 'default' : 'outline'}
                  className="h-11 w-full rounded-full text-xs font-semibold sm:text-sm"
                >
                  <Link
                    href="/pricing"
                    onClick={() => trackClick('cta_clicked', { cta: 'view_pricing', section: plan.id })}
                  >
                    {copy.viewPricing}
                    <span className="ms-1.5 inline-block rtl:-scale-x-100">
                      <Icon icon={ArrowRight02Icon} className="size-4" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Bottom Banner */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/80 bg-muted/30 p-5 sm:flex-row sm:px-7">
          <p className="text-xs font-semibold text-foreground sm:text-sm">
            {copy.customEnterprise}
          </p>
          <Button asChild variant="ghost" size="sm" className="h-9 rounded-full px-4 text-xs font-bold">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('cta_clicked', { cta: 'book_enterprise_call', section: 'pricing_banner' })}
            >
              {copy.bookCall}
              <span className="ms-1 inline-block rtl:-scale-x-100">
                <Icon icon={ArrowRight02Icon} className="size-3.5" />
              </span>
            </a>
          </Button>
        </div>

        </div>
      </div>
    </section>
  );
}
