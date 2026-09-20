'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, MousePointerClick, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ShopifyMark } from '@/components/brand-marks';
import { cn } from '@/lib/utils';
import { trackClick } from '@/lib/analytics';
import { BOOKING_URL } from '@/lib/booking';
import type { SiteLocale } from '@/lib/landing/landing-i18n';
import { TRY_ON_RESULTS, type TryOnResult } from './proof/try-on-results';

interface HeroInteractiveStageProps {
  locale: SiteLocale;
}

export function HeroInteractiveStage({ locale }: HeroInteractiveStageProps) {
  const [activeLookId, setActiveLookId] = useState<TryOnResult['id']>('woman-linen-shirt');
  const [showOriginal, setShowOriginal] = useState(false);

  const activeLook = TRY_ON_RESULTS.find((item) => item.id === activeLookId) ?? TRY_ON_RESULTS[0];
  const isArabic = locale === 'ar';

  const copy = {
    badge: isArabic ? 'موثوق به من قِبل أكثر من ١٠٠ علامة أزياء على Shopify' : 'Trusted by 100+ Shopify fashion brands',
    titleLine1: isArabic ? 'التجربة الافتراضية الذكية،' : 'AI Virtual Try-On,',
    titleLine2: isArabic ? 'مصممة خصيصاً لـ Shopify Plus.' : 'built for Shopify Plus.',
    subtitle: isArabic
      ? 'تُمكّن GrindCTRL عملاءك من رؤية مظهرهم الحقيقي وهم يرتدون منتجاتك بدقة فائقة. زيادة ٣٥٪ في التحويل، تفاعل أطول بثلاثة أضعاف، وانخفاض ملموس في المرتجعات.'
      : 'GrindCTRL shows your customers how good they look wearing your products. 35% higher conversions, 3x site engagement, and fewer returns.',
    primaryCta: isArabic ? 'تثبيت عبر Shopify' : 'Install On Shopify',
    secondaryCta: isArabic ? 'احجز عرضاً توضيحياً' : 'Book a Demo',
    clickToTryOn: isArabic ? 'اضغط للتجربة' : 'Click to try on',
    tapToTryOn: isArabic ? 'المس أي قطعة لتجربتها' : 'Tap any item to try it on',
    resultToggle: isArabic ? 'عرض النتيجة' : 'Try-On Result',
    originalToggle: isArabic ? 'الصورة الأصلية' : 'Original Shopper',
    telemetryLive: isArabic ? 'توليد ذكي • ٣.٢ ثانية' : 'AI Generation • 3.2s',
    telemetryNative: isArabic ? 'تطبيق أصلي للمتجر' : 'Shopify Storefront Native',
    ratingScore: '4.9/5',
    ratingText: isArabic ? 'تقييم Shopify Plus' : 'Shopify Plus rating',
    uptimeText: isArabic ? '٩٩.٩٪ جاهزية موثوقة' : '99.9% Uptime SLA',
    bilingualTag: isArabic ? 'عربي وإنجليزي أصيل (RTL)' : 'Bilingual Native (EN / AR)',
    garmentDetails: {
      'woman-linen-shirt': {
        name: isArabic ? 'قميص كتان أخضر هادئ' : 'Sage Linen Oversized Shirt',
        category: isArabic ? 'أزياء راقية' : 'Relaxed Tailoring',
        price: 'USD $89',
        fit: isArabic ? 'قصة واسعة مريحة • قطن طبيعي ١٠٠٪' : 'Relaxed Fit • 100% Organic Linen',
      },
      'woman-abaya': {
        name: isArabic ? 'عباية مطرزة فاخرة' : 'Embroidered Premium Abaya',
        category: isArabic ? 'أزياء عربية' : 'Heritage Collection',
        price: 'USD $210',
        fit: isArabic ? 'تطريز يدوي متقن • كريب أسود فاخر' : 'Artisanal Embroidery • Premium Crepe',
      },
      'man-denim-overshirt': {
        name: isArabic ? 'قميص جينز خارجي كلاسيكي' : 'Classic Denim Overshirt',
        category: isArabic ? 'أزياء رجالية' : 'Everyday Layering',
        price: 'USD $115',
        fit: isArabic ? 'قماش دينيم ١٢ أونصة متين' : '12oz Rigid Denim • Washed Indigo',
      },
      'man-knit-polo': {
        name: isArabic ? 'قميص بولو تريكو فاخر' : 'Fine-Knit Textured Polo',
        category: isArabic ? 'ملابس عصرية' : 'Modern Essentials',
        price: 'USD $95',
        fit: isArabic ? 'غزل ميلانو ناعم • ياقة كلاسيكية' : 'Milano Knit Cotton • Ribbed Collar',
      },
    },
  };

  const currentDetails = copy.garmentDetails[activeLook.id];

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="container max-w-[120rem] mx-auto px-4">
        <div className="relative border-x border-b border-border">
          <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-start lg:gap-0">
            
            {/* Column 1: Left Value Proposition, CTAs, & Proof */}
            <div className="bordered-div-padding flex flex-col justify-center gap-5 text-center sm:gap-6 md:min-h-[700px] md:gap-8 lg:gap-10 lg:pr-10 lg:text-left rtl:lg:text-right rtl:lg:pl-10 rtl:lg:pr-0 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-border">
              
              {/* Eyebrow Badge (Antla Style) */}
              <a
                href="#see-it-working"
                className="relative -mt-1.5 inline-flex w-fit items-center self-center overflow-hidden rounded-full p-[1px] lg:self-start rtl:lg:self-start"
              >
                <div className="inline-flex items-center cursor-pointer justify-center tracking-normal whitespace-nowrap text-xs font-medium transition-all border border-border bg-card hover:bg-accent hover:text-accent-foreground h-8 rounded-full gap-2 px-3.5 shadow-2xs">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <span>{copy.badge}</span>
                  <ArrowRight className="size-3.5 ml-1 rtl:-scale-x-100" />
                </div>
              </a>

              {/* H1 Heading */}
              <h1
                id="hero-title"
                className="text-3xl leading-[1.12] tracking-tight font-normal sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[60px]"
              >
                {copy.titleLine1}{' '}
                <span className="block font-medium text-foreground">{copy.titleLine2}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-muted-foreground max-w-[650px] text-xs leading-relaxed sm:text-sm md:text-base lg:text-lg">
                {copy.subtitle}
              </p>

              {/* Dual Pill Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:justify-start rtl:lg:justify-start">
                <a
                  href="https://apps.shopify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick('cta_clicked', { cta: 'install_shopify', section: 'hero' })}
                  className="inline-flex items-center cursor-pointer justify-center font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-11 md:h-12 px-6 md:px-7 rounded-full gap-3 text-sm md:text-base shadow-sm"
                >
                  <ShopifyMark className="size-5 text-[#95BF47]" />
                  <span>{copy.primaryCta}</span>
                </a>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick('cta_clicked', { cta: 'book_demo', section: 'hero' })}
                  className="inline-flex items-center cursor-pointer justify-center font-medium transition-all border border-border bg-card hover:bg-accent text-foreground h-11 md:h-12 px-6 md:px-7 rounded-full gap-2.5 text-sm md:text-base"
                >
                  <Calendar className="size-4.5 text-muted-foreground" />
                  <span>{copy.secondaryCta}</span>
                </a>
              </div>

              {/* Trust & Proof Markers Row */}
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2 text-xs font-medium text-muted-foreground lg:justify-start rtl:lg:justify-start">
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-500 tracking-tight">★★★★★</span>
                  <span className="font-semibold text-foreground">{copy.ratingScore}</span>
                  <span>{copy.ratingText}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  <span>{copy.uptimeText}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="size-3.5 text-foreground/60" />
                  <span>{copy.bilingualTag}</span>
                </div>
              </div>
            </div>

            {/* Column 2: Center 700px Tall Model Viewport (Antla Exact Dimensions) */}
            <div className="relative mx-auto h-[380px] w-[290px] cursor-pointer overflow-hidden sm:h-[450px] sm:w-[340px] md:h-[650px] md:w-[480px] lg:mx-0 lg:h-[700px] lg:w-[500px] bg-muted/20">
              
              {/* Base Shopper Images (Woman & Man) */}
              <Image
                src="/landing/proof/tryon/inputs/shopper-woman.webp"
                alt="Model baseline"
                fill
                sizes="(min-width: 1024px) 500px, 90vw"
                priority
                className={cn(
                  'absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 ease-out',
                  showOriginal && activeLook.shopper === 'woman' ? 'opacity-100 z-10' : 'opacity-0 z-0',
                )}
              />
              <Image
                src="/landing/proof/tryon/inputs/shopper-man.webp"
                alt="Model baseline"
                fill
                sizes="(min-width: 1024px) 500px, 90vw"
                priority
                className={cn(
                  'absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 ease-out',
                  showOriginal && activeLook.shopper === 'man' ? 'opacity-100 z-10' : 'opacity-0 z-0',
                )}
              />

              {/* Pre-rendered Result Images (All 4 Outfits) */}
              {TRY_ON_RESULTS.map((item) => {
                const isCurrent = item.id === activeLook.id && !showOriginal;
                return (
                  <Image
                    key={item.id}
                    src={item.result}
                    alt={`${item.name[locale]} try-on`}
                    fill
                    sizes="(min-width: 1024px) 500px, 90vw"
                    priority
                    className={cn(
                      'absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 ease-out',
                      isCurrent ? 'opacity-100 z-20' : 'opacity-0 pointer-events-none',
                    )}
                  />
                );
              })}

              {/* Top Floating Controls Bar */}
              <div className="absolute top-4 inset-x-4 z-30 flex items-center justify-between pointer-events-auto">
                {/* Live Status Pill */}
                <div className="flex items-center gap-2 rounded-full border border-white/40 bg-background/85 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-card/85">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <span>{copy.telemetryLive}</span>
                </div>

                {/* Compare Toggle Pill: Result vs Base Shopper */}
                <div className="flex rounded-full border border-white/40 bg-background/85 p-0.5 text-xs font-medium shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-card/85">
                  <button
                    type="button"
                    onClick={() => setShowOriginal(false)}
                    className={cn(
                      'rounded-full px-2.5 py-1 transition-all duration-150',
                      !showOriginal
                        ? 'bg-foreground text-background font-semibold shadow-xs'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {copy.resultToggle}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowOriginal(true)}
                    className={cn(
                      'rounded-full px-2.5 py-1 transition-all duration-150',
                      showOriginal
                        ? 'bg-foreground text-background font-semibold shadow-xs'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {copy.originalToggle}
                  </button>
                </div>
              </div>

              {/* Overlaid Garment Spec Pill (Bottom Left) */}
              <div className="absolute bottom-4 start-4 end-4 z-30 rounded-2xl border border-white/40 bg-background/85 p-3.5 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-card/85">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                    {currentDetails.category}
                  </span>
                  <span className="text-[11px] font-semibold text-foreground">
                    {currentDetails.price}
                  </span>
                </div>
                <p className="mt-1 truncate text-xs font-bold text-foreground sm:text-sm">
                  {currentDetails.name}
                </p>
                <p className="truncate text-[11px] text-muted-foreground">
                  {currentDetails.fit}
                </p>
              </div>
            </div>

            {/* Column 3: Right Vertical Rail (Antla Exact Layout) */}
            <div className="hidden h-[700px] overflow-hidden border-l rtl:border-l-0 rtl:border-r border-border lg:flex lg:flex-col w-[190px] xl:w-[210px] bg-card/20">
              {/* Header Bar */}
              <div className="text-muted-foreground flex items-center gap-2 border-b border-border px-3.5 py-2.5 text-xs font-medium">
                <MousePointerClick className="size-3.5 text-primary" />
                <span>{copy.clickToTryOn}</span>
              </div>

              {/* Vertical List of Outfits */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {TRY_ON_RESULTS.map((item) => {
                  const isSelected = item.id === activeLook.id;
                  const itemDetail = copy.garmentDetails[item.id];
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveLookId(item.id);
                        setShowOriginal(false);
                      }}
                      className={cn(
                        'w-full cursor-pointer transition-all duration-200 text-start rounded-xl border p-2',
                        isSelected
                          ? 'border-foreground bg-background shadow-md ring-1 ring-foreground/20'
                          : 'border-border/80 bg-background/60 hover:border-foreground/40 hover:bg-background opacity-85 hover:opacity-100',
                      )}
                    >
                      <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-white shadow-xs">
                        <Image
                          src={item.garment}
                          alt={item.name[locale]}
                          width={200}
                          height={250}
                          className="h-full w-full object-contain p-1.5"
                        />
                      </div>
                      <div className="mt-2 px-1">
                        <p className="truncate text-xs font-semibold text-foreground">
                          {item.name[locale]}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {itemDetail.price}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Mobile Garment Rail (Visible on < lg) */}
          <div className="mt-4 sm:mt-6 lg:hidden border-t border-border p-3.5 bg-card/10">
            <div className="text-muted-foreground mb-2.5 flex items-center gap-2 px-1 text-xs font-medium">
              <MousePointerClick className="size-3.5 text-primary" />
              <span>{copy.tapToTryOn}</span>
            </div>
            <div className="flex gap-2.5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {TRY_ON_RESULTS.map((item) => {
                const isSelected = item.id === activeLook.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveLookId(item.id);
                      setShowOriginal(false);
                    }}
                    className={cn(
                      'block w-28 shrink-0 cursor-pointer rounded-xl border p-1.5 transition-all text-start',
                      isSelected
                        ? 'border-foreground bg-background shadow-md'
                        : 'border-border bg-card/80 opacity-75 hover:opacity-100',
                    )}
                  >
                    <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-white">
                      <Image
                        src={item.garment}
                        alt={item.name[locale]}
                        width={200}
                        height={250}
                        className="h-full w-full object-contain p-1"
                      />
                    </div>
                    <p className="mt-1.5 truncate text-[11px] font-semibold text-foreground">
                      {item.name[locale]}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
