'use client';

import React from 'react';
import Image from 'next/image';
import type { SiteLocale } from '@/lib/landing/landing-i18n';

interface DashboardPreviewFrameProps {
  locale: SiteLocale;
}

export function DashboardPreviewFrame({ locale }: DashboardPreviewFrameProps) {
  const isArabic = locale === 'ar';

  const copy = {
    title: isArabic
      ? 'لوحة تحكم GrindCTRL الموحدة • أداء التحويل المباشر'
      : 'GrindCTRL Unified Console • Real-Time Commerce Performance',
    status: isArabic ? 'متصل بـ Shopify Storefront' : 'Connected to Shopify Storefront',
    caption: isArabic
      ? 'تحليلات تفصيلية تربط كل تجربة قياس واستفسار بمبيعات المتجر الفعلية وحجم سلة الشراء • بيانات تجريبية معتمدة'
      : 'Comprehensive attribution connecting every try-on and chat session to net revenue and AOV • Demo Data',
  };

  return (
    <section className="relative overflow-hidden" aria-label="Dashboard Preview">
      <div className="container max-w-[120rem] mx-auto px-4">
        <div className="border-x border-b border-border bg-card/10">
          <div className="bordered-div-padding">
            {/* macOS / Chrome Window Frame */}
            <div className="overflow-hidden rounded-xl border border-border shadow-[0_1px_3px_rgb(0_0_0/0.05),0_24px_64px_-24px_rgb(30_20_10/0.25)] bg-background">
              
              {/* Window Header Bar */}
              <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-4 py-3">
                {/* 3 Window Control Dots */}
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-[#ef4444]/80 inline-block" />
                  <span className="size-3 rounded-full bg-[#eab308]/80 inline-block" />
                  <span className="size-3 rounded-full bg-[#22c55e]/80 inline-block" />
                </div>

                {/* Window Title */}
                <div className="text-xs font-semibold text-muted-foreground hidden sm:block truncate max-w-md">
                  {copy.title}
                </div>

                {/* Live Status Pill */}
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <span>{copy.status}</span>
                </div>
              </div>

              {/* Full-Width Dashboard Capture */}
              <div className="relative aspect-[16/9] w-full bg-muted/20">
                <Image
                  src="/landing/proof/demo-ui-analytics-preview-demo-data-en.webp"
                  alt="GrindCTRL Unified Analytics Dashboard"
                  fill
                  sizes="(min-width: 1280px) 1400px, 100vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Window Footer Caption */}
              <div className="border-t border-border/70 bg-muted/20 px-4 py-2 text-center text-xs text-muted-foreground">
                {copy.caption}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
