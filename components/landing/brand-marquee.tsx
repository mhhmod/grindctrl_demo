'use client';

import React from 'react';
import { BadgeCheck } from 'lucide-react';
import type { SiteLocale } from '@/lib/landing/landing-i18n';

interface BrandMarqueeProps {
  locale: SiteLocale;
}

const BRANDS = [
  { name: 'FILA', subtitle: 'Heritage Sportswear', lettermark: 'FILA' },
  { name: 'AX PARIS', subtitle: 'London Fashion', lettermark: 'AX PARIS' },
  { name: 'CLUB 21', subtitle: 'Luxury Multi-Brand', lettermark: 'CLUB 21' },
  { name: 'SHASA', subtitle: 'Contemporary Retail', lettermark: 'SHASA' },
  { name: 'SOLIVO', subtitle: 'Modern Apparel', lettermark: 'SOLIVO' },
  { name: 'BELVORA', subtitle: 'Tailored Essentials', lettermark: 'BELVORA' },
  { name: 'FRILIVIN', subtitle: 'Parisian Streetwear', lettermark: 'FRILIVIN' },
  { name: 'MILONGA', subtitle: 'Resort & Swim', lettermark: 'MILONGA' },
  { name: 'STRING & THREAD', subtitle: 'Boutique Couture', lettermark: 'STRING & THREAD' },
];

export function BrandMarquee({ locale }: BrandMarqueeProps) {
  const isArabic = locale === 'ar';
  const headerText = isArabic
    ? 'موثوق به من قِبل نخبة علامات الأزياء على Shopify'
    : 'Trusted by Premium Shopify Brands';

  return (
    <section className="relative overflow-hidden" aria-label={headerText}>
      <div className="container max-w-[120rem] mx-auto px-4">
        <div className="bordered-div-padding relative border-x border-b border-border bg-card/10">
          
          {/* Header with BadgeCheck */}
          <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
            <BadgeCheck className="size-5 text-emerald-500 shrink-0" />
            <span>{headerText}</span>
          </h2>

          {/* Marquee Scroller */}
          <div className="group flex [gap:var(--gap)] overflow-hidden p-2 flex-row mt-6 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 [--gap:2.5rem] md:[--gap:5rem] lg:[--gap:6rem] [--duration:32s]">
            {/* Track 1 */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {BRANDS.map((brand, i) => (
                <div
                  key={`track1-${brand.name}-${i}`}
                  className="flex items-center gap-3 py-2 px-3 text-muted-foreground/80 hover:text-foreground transition-colors cursor-default"
                >
                  <span className="text-lg md:text-xl font-bold tracking-widest font-mono uppercase">
                    {brand.lettermark}
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider text-muted-foreground/60 border-s border-border ps-2.5">
                    {brand.subtitle}
                  </span>
                </div>
              ))}
            </div>

            {/* Track 2 (Seamless loop) */}
            <div
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {BRANDS.map((brand, i) => (
                <div
                  key={`track2-${brand.name}-${i}`}
                  className="flex items-center gap-3 py-2 px-3 text-muted-foreground/80 hover:text-foreground transition-colors cursor-default"
                >
                  <span className="text-lg md:text-xl font-bold tracking-widest font-mono uppercase">
                    {brand.lettermark}
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider text-muted-foreground/60 border-s border-border ps-2.5">
                    {brand.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
