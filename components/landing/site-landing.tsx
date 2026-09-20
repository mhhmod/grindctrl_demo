'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShopifyMark } from '@/components/brand-marks';
import { AmbientBackground } from '@/components/landing/ambient-background';
import { useLandingLocale } from '@/components/landing/landing-locale';
import { SiteFooter } from '@/components/landing/site-footer';
import { SiteHeader } from '@/components/landing/site-header';
import { HeroInteractiveStage } from '@/components/landing/hero-interactive-stage';
import { BrandMarquee } from '@/components/landing/brand-marquee';
import { ConversionEngine } from '@/components/landing/conversion-engine';
import { DashboardPreviewFrame } from '@/components/landing/dashboard-preview-frame';
import { FeaturesGrid } from '@/components/landing/features-grid';
import { JourneyComparison } from '@/components/landing/journey-comparison';
import { LookRail } from '@/components/landing/look-rail';
import { ProductUiShowcase } from '@/components/landing/product-ui-showcase';
import { IntegrationsMatrix } from '@/components/landing/integrations-matrix';
import { TechnicalTrust } from '@/components/landing/technical-trust';
import { PricingTeaser } from '@/components/landing/pricing-teaser';
import { trackClick } from '@/lib/analytics';
import { BOOKING_URL } from '@/lib/booking';

export function SiteLanding() {
  const { locale, t } = useLandingLocale();
  const isArabic = locale === 'ar';

  return (
    <>
      <AmbientBackground />

      <SiteHeader locale={locale} t={t} />

      <main className="gc-landing-root flex min-w-0 flex-col">
        {/* 1. Antla Exact 3-Column Tall Interactive Hero Stage */}
        <HeroInteractiveStage locale={locale} />

        {/* 2. Antla Exact Brand Marquee Bar */}
        <BrandMarquee locale={locale} />

        {/* 3. Antla Exact DataFlow Conversion Engine (Animated SVG Beams + 3 Metrics) */}
        <ConversionEngine locale={locale} />

        {/* 4. Antla Full-Width Bordered Dashboard Preview Frame */}
        <DashboardPreviewFrame locale={locale} />

        {/* 5. Antla Exact 2x2 Feature Grid (Try-On, Chat, Setup, CRM) */}
        <FeaturesGrid locale={locale} />

        {/* 6. Problem & Transformation Storytelling (OptiDress-inspired) */}
        <JourneyComparison locale={locale} />

        {/* 7. Genlook-style Look Rail (Same-Shopper Before/After Hover) */}
        <LookRail locale={locale} />

        {/* 8. Authentic Product UI Showcase (Try-On, Chat, Leads, Operations, Analytics) */}
        <span id="benefits" className="scroll-mt-24" aria-hidden="true" />
        <ProductUiShowcase locale={locale} />

        {/* 9. Native Integrations Matrix (Official SVG Geometry & Depth) */}
        <IntegrationsMatrix locale={locale} />

        {/* 10. Implementation & Technical Trust (3-Step Deployment & Safeguards) */}
        <TechnicalTrust locale={locale} />

        {/* 11. Transparent Pricing Teaser & Enterprise Bridge */}
        <PricingTeaser locale={locale} />

        {/* 12. Antla-Style Bordered Final CTA */}
        <section
          id="contact"
          className="relative overflow-hidden"
          aria-labelledby="final-cta-title"
        >
          <div className="container max-w-[120rem] mx-auto px-4">
            <div className="border-x border-b border-border bg-primary py-20 px-6 sm:px-12 lg:py-28 text-primary-foreground relative overflow-hidden">
              {/* Subtle Ambient Radial Backlight */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-25"
                style={{
                  background: 'radial-gradient(ellipse at center, oklch(0.55 0.05 75) 0%, transparent 70%)',
                }}
                aria-hidden="true"
              />

              <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                <span className="mb-4 rounded-full bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground/90">
                  {isArabic ? 'جاهز للانطلاق مع متجرك' : 'Deploy GrindCTRL'}
                </span>

                <h2
                  id="final-cta-title"
                  className="text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl"
                >
                  {t.ctaTitle}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-xl">
                  {t.ctaBody}
                </p>

                {/* Dual Pill Action Buttons */}
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="h-12 rounded-full px-8 text-sm font-semibold shadow-md transition-all hover:bg-secondary/90 gap-2.5"
                  >
                    <a
                      href="https://apps.shopify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackClick('cta_clicked', { cta: 'install_shopify', section: 'final_cta' })}
                    >
                      <ShopifyMark className="size-5 text-[#95BF47]" />
                      <span>{locale === 'ar' ? 'تثبيت عبر Shopify' : 'Install on Shopify'}</span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-full border-primary-foreground/30 bg-primary-foreground/10 px-7 text-sm font-semibold text-primary-foreground backdrop-blur transition-all hover:bg-primary-foreground/20 hover:text-primary-foreground gap-2.5"
                  >
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackClick('cta_clicked', { cta: 'book_call', section: 'final_cta' })}
                    >
                      <Calendar className="size-4.5" />
                      <span>{t.ctaButton}</span>
                    </a>
                  </Button>
                </div>

                {/* Bottom Guarantee Line */}
                <p className="mt-8 text-xs text-primary-foreground/60">
                  {isArabic
                    ? 'إعداد مُدار بالكامل بواسطة فريقنا • ضمان حماية البيانات والخصوصية • دعم فني مستمر'
                    : 'Fully managed setup by our engineering team • 30-day ephemeral image privacy • Dedicated support'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter withLauncherSpacing />
    </>
  );
}
