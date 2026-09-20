'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft02Icon, ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { Icon } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { SiteLocale } from '@/lib/landing/landing-i18n';
import { Eyebrow } from '@/components/landing/eyebrow';
import { TRY_ON_RESULTS, type TryOnResult } from './proof/try-on-results';

interface LookRailProps {
  locale: SiteLocale;
}

interface LookMetadata {
  category: Record<SiteLocale, string>;
  details: Record<SiteLocale, string>;
}

const LOOK_METADATA: Record<TryOnResult['id'], LookMetadata> = {
  'woman-linen-shirt': {
    category: { en: 'Relaxed Tailoring', ar: 'أزياء راقية' },
    details: { en: 'Linen Overshirt • Sage Green', ar: 'قميص كتان • أخضر ميرمية' },
  },
  'woman-abaya': {
    category: { en: 'Heritage Modern', ar: 'أزياء عربية' },
    details: { en: 'Embroidered Crepe Abaya', ar: 'عباية كريب مطرزة' },
  },
  'man-denim-overshirt': {
    category: { en: 'Everyday Outerwear', ar: 'أزياء رجالية' },
    details: { en: '12oz Washed Indigo Denim', ar: 'جينز أزرق مغسول ١٢ أونصة' },
  },
  'man-knit-polo': {
    category: { en: 'Milano Knitwear', ar: 'تريكو عصري' },
    details: { en: 'Textured Ribbed Collar Polo', ar: 'بولو ناعم بياقة محبوكة' },
  },
};

export function LookRail({ locale }: LookRailProps) {
  const [hoveredCardId, setHoveredCardId] = useState<TryOnResult['id'] | null>(null);
  const [mobileActiveBeforeId, setMobileActiveBeforeId] = useState<TryOnResult['id'] | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const isArabic = locale === 'ar';

  const copy = {
    eyebrow: isArabic ? 'تقنية المطابقة الدقيقة' : 'Visual Consistency Benchmark',
    title: isArabic
      ? 'نفس الشخص. نفس الإضاءة. فقط الملابس تتغير.'
      : 'Same person. Identical pose. Only the clothing changes.',
    subtitle: isArabic
      ? 'مرّر مؤشر الفأرة أو اضغط على أي بطاقة لرؤية الصورة الأصلية قبل التجربة. لاحظ ثبات الملامح، والخلفية، وتفاصيل القماش الواقعية.'
      : 'Hover or tap any card to reveal the original shopper photo before try-on. Notice how the face, camera angle, lighting, and posture stay completely fixed while the garment drapes naturally.',
    beforePill: isArabic ? 'الصورة الأصلية' : 'Original Photo',
    resultPill: isArabic ? 'نتيجة التجربة' : 'Try-On Result',
    instruction: isArabic ? 'مرّر للمقارنة' : 'Hover to see before',
    scrollLeft: isArabic ? 'السابق' : 'Previous look',
    scrollRight: isArabic ? 'التالي' : 'Next look',
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (!railRef.current) return;
    const scrollAmount = 380;
    const offset = direction === 'left' ? -scrollAmount : scrollAmount;
    railRef.current.scrollBy({ left: isArabic ? -offset : offset, behavior: 'smooth' });
  };

  return (
    <section id="looks" className="relative scroll-mt-20 overflow-hidden" aria-labelledby="look-rail-title">
      <span id="demo" className="absolute -top-24" aria-hidden="true" />
      <div className="container max-w-[120rem] mx-auto px-4">
        <div className="border-x border-b border-border py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-card/10">
        
        {/* Section Header with Carousel Nav Controls */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Eyebrow locale={locale}>{copy.eyebrow}</Eyebrow>
            <h2
              id="look-rail-title"
              className="mt-3 text-[28px] font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[44px]"
            >
              {copy.title}
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-muted-foreground sm:text-lg">
              {copy.subtitle}
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <Button
              variant="outline"
              size="icon"
              className="size-11 rounded-full border-border bg-card/80 backdrop-blur"
              onClick={() => handleScroll('left')}
              aria-label={copy.scrollLeft}
            >
              <Icon icon={ArrowLeft02Icon} className="size-5 rtl:-scale-x-100" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-11 rounded-full border-border bg-card/80 backdrop-blur"
              onClick={() => handleScroll('right')}
              aria-label={copy.scrollRight}
            >
              <Icon icon={ArrowRight02Icon} className="size-5 rtl:-scale-x-100" />
            </Button>
          </div>
        </div>

        {/* Look Rail Horizontal Snap Track */}
        <div
          ref={railRef}
          className="flex min-w-0 snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TRY_ON_RESULTS.map((item) => {
            const meta = LOOK_METADATA[item.id];
            const isHovered = hoveredCardId === item.id;
            const isMobileBefore = mobileActiveBeforeId === item.id;
            const showingOriginal = isHovered || isMobileBefore;

            return (
              <div
                key={item.id}
                tabIndex={0}
                role="region"
                aria-label={`${item.name[locale]} before and after look comparison`}
                onMouseEnter={() => setHoveredCardId(item.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onFocus={() => setHoveredCardId(item.id)}
                onBlur={() => setHoveredCardId(null)}
                onClick={() => {
                  // Toggle mobile tap state
                  setMobileActiveBeforeId((prev) => (prev === item.id ? null : item.id));
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setMobileActiveBeforeId((prev) => (prev === item.id ? null : item.id));
                  }
                }}
                className={cn(
                  'group relative aspect-[3/4] w-[84vw] shrink-0 snap-center cursor-pointer overflow-hidden rounded-3xl border border-border/90 bg-card shadow-[0_1px_3px_rgb(0_0_0/0.05),0_18px_48px_-20px_rgb(0_0_0/0.2)] sm:w-[360px] md:w-[380px] lg:w-[410px]',
                  'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                )}
              >
                {/* Image 1: Base Shopper Image (Shown on Hover / Tap) */}
                <Image
                  src={item.shopperPhoto}
                  alt={`Original photo before trying on ${item.name[locale]}`}
                  fill
                  sizes="(min-width: 1024px) 410px, 84vw"
                  className={cn(
                    'object-cover object-center transition-all duration-500 ease-out group-hover:scale-105',
                    showingOriginal ? 'opacity-100 z-10' : 'opacity-0 z-0',
                  )}
                />

                {/* Image 2: Pre-rendered Result Image (Default) */}
                <Image
                  src={item.result}
                  alt={`Photorealistic try-on result wearing ${item.name[locale]}`}
                  fill
                  sizes="(min-width: 1024px) 410px, 84vw"
                  priority
                  className={cn(
                    'object-cover object-center transition-all duration-500 ease-out group-hover:scale-105',
                    showingOriginal ? 'opacity-0 z-0 pointer-events-none' : 'opacity-100 z-10',
                  )}
                />

                {/* Top Status Pill (Indicates whether Viewing Result or Before) */}
                <div className="absolute top-4 start-4 z-20 flex items-center gap-1.5 rounded-full border border-white/40 bg-background/85 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur dark:border-white/10 dark:bg-card/85">
                  <span className={cn('size-1.5 rounded-full', showingOriginal ? 'bg-muted-foreground' : 'bg-emerald-500')} aria-hidden="true" />
                  <span>{showingOriginal ? copy.beforePill : copy.resultPill}</span>
                </div>

                {/* Interaction Hint (Top Right) */}
                <div className="absolute top-4 end-4 z-20 rounded-full border border-white/30 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
                  {copy.instruction}
                </div>

                {/* Bottom Overlay Gradient for Legibility */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-44 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  aria-hidden="true"
                />

                {/* Bottom-Left: Product Info & Category */}
                <div className="absolute bottom-4 start-4 z-30 max-w-[65%] text-white">
                  <Badge variant="secondary" className="mb-1.5 bg-white/20 text-white backdrop-blur hover:bg-white/30 text-[10px] font-bold">
                    {meta.category[locale]}
                  </Badge>
                  <h3 className="truncate text-base font-bold sm:text-lg">
                    {item.name[locale]}
                  </h3>
                  <p className="truncate text-xs text-white/80">
                    {meta.details[locale]}
                  </p>
                </div>

                {/* Bottom-Right: Inset Garment Thumbnail Plate */}
                <div className="absolute bottom-4 end-4 z-30 flex size-16 items-center justify-center rounded-2xl border border-white/40 bg-white p-1 shadow-lg dark:border-white/20">
                  <div className="relative size-full">
                    <Image
                      src={item.garment}
                      alt={`${item.name[locale]} product garment`}
                      fill
                      sizes="64px"
                      className="object-contain p-1"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Guidance Note */}
        <p className="mt-2 text-center text-xs text-muted-foreground sm:hidden">
          {isArabic ? 'اسحب أفقياً لتصفح الإطلالات • انقر على أي صورة لمعاينة الأصل' : 'Swipe horizontally to view looks • Tap to toggle original'}
        </p>

        </div>
      </div>
    </section>
  );
}
