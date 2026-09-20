'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { LandingLocaleToggle, useLandingLocale } from '@/components/landing/landing-locale';
import { cn } from '@/lib/utils';
import { ShopifyMark } from '@/components/brand-marks';

const DEMO_URL = '/try-on';

export function SiteFooter({
  withLauncherSpacing = false,
}: {
  withLauncherSpacing?: boolean;
}) {
  const { locale, t } = useLandingLocale();
  const isArabic = locale === 'ar';

  return (
    <footer
      className={cn(
        'transition-all duration-300 text-sm text-muted-foreground',
        withLauncherSpacing ? 'pb-24 pt-4' : 'py-4',
      )}
    >
      <div className="container max-w-[120rem] mx-auto px-4">
        <div className="border-x border-b border-border py-8 px-4 sm:px-8 lg:px-12 bg-card/20 flex flex-col gap-6">
          
          {/* Top Status & Brand Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/70 pb-6">
            <div className="flex items-center gap-4">
              <BrandLogo size="sm" textClassName="text-xs" />
              <div className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-2.5 py-1 text-xs text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[11px] font-medium">
                  {isArabic ? 'جميع الأنظمة تعمل بكفاءة' : 'All systems operational'}
                </span>
              </div>
            </div>

            {/* Shopify Plus Partner Note */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShopifyMark className="size-4 text-[#95BF47]" />
              <span>{isArabic ? 'تطبيق أصلي لـ Shopify Plus' : 'Built for Shopify Plus'}</span>
            </div>
          </div>

          {/* Nav Links & Controls */}
          <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground/80">{t.footerTagline}</p>
            
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
              <Link href="/" className="gc-tap transition-colors hover:text-foreground">
                {t.footerHome}
              </Link>
              <Link href={DEMO_URL} className="gc-tap transition-colors hover:text-foreground">
                {t.footerDemo}
              </Link>
              <Link href="/pricing" className="gc-tap transition-colors hover:text-foreground">
                {t.footerPricing}
              </Link>
              <Link href="/roi" className="gc-tap transition-colors hover:text-foreground">
                {t.footerRoi}
              </Link>
              <Link href="/security" className="gc-tap transition-colors hover:text-foreground">
                {t.footerSecurity}
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <LandingLocaleToggle />
              <ThemeToggle locale={locale} />
            </div>
          </div>

          {/* Copyright line */}
          <div className="border-t border-border/50 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-foreground/60">
            <span>© {new Date().getFullYear()} GrindCTRL Technologies. All rights reserved.</span>
            <span className="mt-2 sm:mt-0">Privacy-First AI Commerce • Zero Biometric Storage</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
