'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ShopifyMark, WhatsAppMark, InstagramMark, N8nMark } from '@/components/brand-marks';
import { cn } from '@/lib/utils';
import type { SiteLocale } from '@/lib/landing/landing-i18n';

interface ConversionEngineProps {
  locale: SiteLocale;
}

type NodeKey = '01' | '02' | '03' | '04' | '05';

export function ConversionEngine({ locale }: ConversionEngineProps) {
  const [selectedNode, setSelectedNode] = useState<NodeKey>('01');
  const desktopWrapRef = useRef<HTMLDivElement>(null);
  const desktopCanvasRef = useRef<HTMLDivElement>(null);
  const mobileWrapRef = useRef<HTMLDivElement>(null);
  const mobileCanvasRef = useRef<HTMLDivElement>(null);

  const isArabic = locale === 'ar';

  // Responsive scale handler matching Antla's exact scale script
  useEffect(() => {
    function handleResize() {
      if (desktopWrapRef.current && desktopCanvasRef.current) {
        const wrap = desktopWrapRef.current;
        const canvas = desktopCanvasRef.current;
        const targetW = 1440;
        const targetH = 600;
        const availableW = wrap.clientWidth;
        if (availableW > 0) {
          const scale = Math.min(availableW / targetW, 1);
          canvas.style.transform = `scale(${scale})`;
          canvas.style.marginLeft = `${Math.max((availableW - targetW * scale) / 2, 0)}px`;
          wrap.style.height = `${targetH * scale}px`;
        }
      }

      if (mobileWrapRef.current && mobileCanvasRef.current) {
        const wrap = mobileWrapRef.current;
        const canvas = mobileCanvasRef.current;
        const targetW = 390;
        const targetH = 860;
        const availableW = wrap.clientWidth;
        if (availableW > 0) {
          const scale = Math.min(availableW / targetW, 1);
          canvas.style.transform = `scale(${scale})`;
          canvas.style.marginLeft = `${Math.max((availableW - targetW * scale) / 2, 0)}px`;
          wrap.style.height = `${targetH * scale}px`;
        }
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const copy = {
    eyebrow: isArabic ? 'محرك التحويل الذكي' : 'Conversion Engine',
    title: isArabic
      ? 'كل تجربة قياس تتحول إلى عميل حقيقي يمكنك التواصل معه مجدداً.'
      : 'Every try-on becomes a customer you can reach again.',
    subtitle: isArabic
      ? 'تُحوّل GrindCTRL تجربة قياس المتسوق إلى بيانات طرف أول قيّمة، ثم تضخها فوراً في القنوات التي تديرها بالفعل — ليكون التواصل التالي شخصياً وموجهاً بدقة.'
      : "GrindCTRL turns a shopper's try-on into first-party data, then pushes it into the channels you already run — so the next touch is personal, not generic.",
    metric1Num: '60%',
    metric1Label: isArabic
      ? 'زيادة في معدل النقر والتفاعل مقارنة بصفحات المنتجات العادية.'
      : 'Higher click-through and engagement vs static product pages.',
    metric2Num: '3x',
    metric2Label: isArabic
      ? 'مدة جلسات أطول بمجرد بدء المتسوقين في تجربة القطع.'
      : 'Longer sessions once shoppers try on outfits.',
    metric3Num: isArabic ? 'قنوات متعددة' : 'Unlimited',
    metric3Label: isArabic
      ? 'إعادة استهداف سلسة عبر جميع قنواتك انطلاقاً من تجربة قياس واحدة.'
      : 'Channels re-engaged from a single try-on interaction.',
    nodeProof: {
      '01': {
        title: isArabic ? '٠١ · الالتقاط: التجربة الافتراضية في المتجر' : '01 · Capture: Virtual Try-On',
        desc: isArabic
          ? 'المتسوق يرى نفسه مرتدياً القطعة مباشرة عبر صفحة المنتج في Shopify خلال ٣.٢ ثانية دون تخزين صور حيوية.'
          : 'Shoppers see themselves in your garments directly on your Shopify product page in 3.2 seconds.',
        image: `/landing/proof/demo-ui-storefront-tryon-${locale}.webp`,
        tag: isArabic ? 'واجهة المتجر' : 'Shopify Storefront Block',
      },
      '02': {
        title: isArabic ? '٠٢ · الموافقة: دردشة المتجر الذكية' : '02 · Consent: Store Chat & Sizing',
        desc: isArabic
          ? 'المساعد الذكي يجيب عن المقاسات والأقمشة بدقة، مع حفظ الإطلالة وموافقة العميل على المتابعة.'
          : 'Store Chat answers sizing and fabric questions, capturing consent and styling intent.',
        image: `/landing/proof/demo-ui-shopper-chat-${locale}.webp`,
        tag: isArabic ? 'دردشة المتجر' : 'Contextual Store Chat',
      },
      '03': {
        title: isArabic ? '٠٣ · التفعيل: قنوات التواصل والشرائح' : '03 · Activate: Segments & Channels',
        desc: isArabic
          ? 'ضخ فوري لبيانات المقاس والاهتمام في Shopify Segments، وWhatsApp، وInstagram، ومسارات n8n.'
          : 'Instant sync into Shopify customer segments, direct WhatsApp outreach, Instagram DMs, and n8n.',
        image: `/landing/proof/demo-ui-team-inbox-${locale}.webp`,
        tag: isArabic ? 'أتمتة القنوات' : 'Channel Integrations',
      },
      '04': {
        title: isArabic ? '٠٤ · إعادة التفاعل: ملف عميل موحد' : '04 · Re-engage: Customer Profile',
        desc: isArabic
          ? 'ملف متكامل يجمع تفضيلات المقاس وسجل التجارب والطلبات، مما يتيح رسائل مخصصة تحقق أعلى مبيعات.'
          : 'Unified customer profile with sizing history and try-on looks for highly personalized follow-ups.',
        image: `/landing/proof/demo-ui-captured-leads-demo-data-en.webp`,
        tag: isArabic ? 'إدارة العملاء CRM' : 'Unified CRM Record',
      },
      '05': {
        title: isArabic ? '٠٥ · العودة والتحويل: واجهة متجر مخصصة' : '05 · Return: Personalized Storefront',
        desc: isArabic
          ? 'عند عودة المتسوق، يتعرف المتجر على تفضيلاته وإطلالاته المحفوظة، ليتم الطلب بنقرة واحدة.'
          : 'When shoppers return, their saved fits and sizing context greet them for instant checkout.',
        image: `/landing/proof/demo-ui-analytics-preview-demo-data-en.webp`,
        tag: isArabic ? 'تحليلات وعوائد' : 'Attributed Checkout',
      },
    },
  };

  const activeProof = copy.nodeProof[selectedNode];

  return (
    <section id="see-it-working" className="dfs container max-w-[120rem] mx-auto px-4 scroll-mt-20">
      <div className="dfs-frame bg-card/20">
        
        {/* Section Header (Antla Exact) */}
        <div className="dfs-header">
          <div className="dfs-eyebrow">
            <span className="dfs-eyebrow-dot" />
            <span>{copy.eyebrow}</span>
          </div>
          <h2 className="dfs-title">{copy.title}</h2>
          <p className="dfs-sub">{copy.subtitle}</p>
        </div>

        {/* Desktop Diagram Container (1440x600) with Antla SVG Beams */}
        <div
          ref={desktopWrapRef}
          className="dfs-scale-wrap dfs-desktop"
          data-dfs-w="1440"
          data-dfs-h="600"
        >
          <div
            ref={desktopCanvasRef}
            className="dfs-canvas dfs-grid-desktop"
            style={{ width: 1440, height: 600 }}
          >
            {/* SVG Animated Beams Circuit */}
            <svg
              width="1440"
              height="600"
              viewBox="0 0 1440 600"
              fill="none"
              className="dfs-svg"
              aria-hidden="true"
            >
              <defs>
                {/* Blue Beam A: Node 01 to Node 02 */}
                <linearGradient id="dfsBeamA" gradientUnits="userSpaceOnUse" x1="84" y1="0" x2="244" y2="0">
                  <animate attributeName="x1" values="84;320" dur="2.72s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="244;480" dur="2.72s" begin="0s" repeatCount="indefinite" />
                  <stop offset="0" stopColor="#2D68FF" stopOpacity="0" />
                  <stop offset="0.38" stopColor="#2D68FF" stopOpacity="1" />
                  <stop offset="0.6" stopColor="#2D68FF" stopOpacity="1" />
                  <stop offset="1" stopColor="#2D68FF" stopOpacity="0" />
                </linearGradient>

                {/* Blue Beams B: Node 02 to Channels 1-4 */}
                <linearGradient id="dfsBeamB1" gradientUnits="userSpaceOnUse" x1="356" y1="0" x2="516" y2="0">
                  <animate attributeName="x1" values="356;610" dur="2.72s" begin="-0.2s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="516;770" dur="2.72s" begin="-0.2s" repeatCount="indefinite" />
                  <stop offset="0" stopColor="#2D68FF" stopOpacity="0" />
                  <stop offset="0.38" stopColor="#2D68FF" stopOpacity="1" />
                  <stop offset="0.6" stopColor="#2D68FF" stopOpacity="1" />
                  <stop offset="1" stopColor="#2D68FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="dfsBeamB2" gradientUnits="userSpaceOnUse" x1="356" y1="0" x2="516" y2="0">
                  <animate attributeName="x1" values="356;610" dur="2.72s" begin="-1.05s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="516;770" dur="2.72s" begin="-1.05s" repeatCount="indefinite" />
                  <stop offset="0" stopColor="#2D68FF" stopOpacity="0" />
                  <stop offset="0.38" stopColor="#2D68FF" stopOpacity="1" />
                  <stop offset="0.6" stopColor="#2D68FF" stopOpacity="1" />
                  <stop offset="1" stopColor="#2D68FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="dfsBeamB3" gradientUnits="userSpaceOnUse" x1="356" y1="0" x2="516" y2="0">
                  <animate attributeName="x1" values="356;610" dur="2.72s" begin="-1.9s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="516;770" dur="2.72s" begin="-1.9s" repeatCount="indefinite" />
                  <stop offset="0" stopColor="#2D68FF" stopOpacity="0" />
                  <stop offset="0.38" stopColor="#2D68FF" stopOpacity="1" />
                  <stop offset="0.6" stopColor="#2D68FF" stopOpacity="1" />
                  <stop offset="1" stopColor="#2D68FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="dfsBeamB4" gradientUnits="userSpaceOnUse" x1="356" y1="0" x2="516" y2="0">
                  <animate attributeName="x1" values="356;610" dur="2.72s" begin="-2.75s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="516;770" dur="2.72s" begin="-2.75s" repeatCount="indefinite" />
                  <stop offset="0" stopColor="#2D68FF" stopOpacity="0" />
                  <stop offset="0.38" stopColor="#2D68FF" stopOpacity="1" />
                  <stop offset="0.6" stopColor="#2D68FF" stopOpacity="1" />
                  <stop offset="1" stopColor="#2D68FF" stopOpacity="0" />
                </linearGradient>

                {/* Green Beams C: Channels to Node 04 Hub */}
                <linearGradient id="dfsBeamC1" gradientUnits="userSpaceOnUse" x1="660" y1="0" x2="820" y2="0">
                  <animate attributeName="x1" values="660;920" dur="2.72s" begin="-1.6s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="820;1080" dur="2.72s" begin="-1.6s" repeatCount="indefinite" />
                  <stop offset="0" stopColor="#00A656" stopOpacity="0" />
                  <stop offset="0.38" stopColor="#00A656" stopOpacity="1" />
                  <stop offset="0.6" stopColor="#00A656" stopOpacity="1" />
                  <stop offset="1" stopColor="#00A656" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="dfsBeamC2" gradientUnits="userSpaceOnUse" x1="660" y1="0" x2="820" y2="0">
                  <animate attributeName="x1" values="660;920" dur="2.72s" begin="-2.45s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="820;1080" dur="2.72s" begin="-2.45s" repeatCount="indefinite" />
                  <stop offset="0" stopColor="#00A656" stopOpacity="0" />
                  <stop offset="0.38" stopColor="#00A656" stopOpacity="1" />
                  <stop offset="0.6" stopColor="#00A656" stopOpacity="1" />
                  <stop offset="1" stopColor="#00A656" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="dfsBeamC3" gradientUnits="userSpaceOnUse" x1="660" y1="0" x2="820" y2="0">
                  <animate attributeName="x1" values="660;920" dur="2.72s" begin="-0.75s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="820;1080" dur="2.72s" begin="-0.75s" repeatCount="indefinite" />
                  <stop offset="0" stopColor="#00A656" stopOpacity="0" />
                  <stop offset="0.38" stopColor="#00A656" stopOpacity="1" />
                  <stop offset="0.6" stopColor="#00A656" stopOpacity="1" />
                  <stop offset="1" stopColor="#00A656" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="dfsBeamC4" gradientUnits="userSpaceOnUse" x1="660" y1="0" x2="820" y2="0">
                  <animate attributeName="x1" values="660;920" dur="2.72s" begin="-3.1s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="820;1080" dur="2.72s" begin="-3.1s" repeatCount="indefinite" />
                  <stop offset="0" stopColor="#00A656" stopOpacity="0" />
                  <stop offset="0.38" stopColor="#00A656" stopOpacity="1" />
                  <stop offset="0.6" stopColor="#00A656" stopOpacity="1" />
                  <stop offset="1" stopColor="#00A656" stopOpacity="0" />
                </linearGradient>

                {/* Green Beam D: Node 04 to Node 05 */}
                <linearGradient id="dfsBeamD" gradientUnits="userSpaceOnUse" x1="1036" y1="0" x2="1196" y2="0">
                  <animate attributeName="x1" values="1036;1196" dur="1.76s" begin="-0.4s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="1196;1356" dur="1.76s" begin="-0.4s" repeatCount="indefinite" />
                  <stop offset="0" stopColor="#00A656" stopOpacity="0" />
                  <stop offset="0.38" stopColor="#00A656" stopOpacity="1" />
                  <stop offset="0.6" stopColor="#00A656" stopOpacity="1" />
                  <stop offset="1" stopColor="#00A656" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Static Background Circuit Paths */}
              <g className="dfs-path" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 240 288 L 336 288" />
                <path d="M 528 288 L 576 288 L 576 168 L 624 168" />
                <path d="M 528 288 L 576 288 L 576 264 L 624 264" />
                <path d="M 528 288 L 576 288 L 576 360 L 624 360" />
                <path d="M 528 288 L 576 288 L 576 456 L 624 456" />
                <path d="M 864 168 L 912 168 L 912 288 L 960 288" />
                <path d="M 864 264 L 912 264 L 912 288 L 960 288" />
                <path d="M 864 360 L 912 360 L 912 288 L 960 288" />
                <path d="M 864 456 L 912 456 L 912 288 L 960 288" />
                <path d="M 1152 288 L 1200 288" />
              </g>

              {/* Glowing Animated Moving Beams */}
              <g strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 240 288 L 336 288" stroke="url(#dfsBeamA)" />
                <path d="M 528 288 L 576 288 L 576 168 L 624 168" stroke="url(#dfsBeamB1)" />
                <path d="M 528 288 L 576 288 L 576 264 L 624 264" stroke="url(#dfsBeamB2)" />
                <path d="M 528 288 L 576 288 L 576 360 L 624 360" stroke="url(#dfsBeamB3)" />
                <path d="M 528 288 L 576 288 L 576 456 L 624 456" stroke="url(#dfsBeamB4)" />
                <path d="M 864 168 L 912 168 L 912 288 L 960 288" stroke="url(#dfsBeamC1)" />
                <path d="M 864 264 L 912 264 L 912 288 L 960 288" stroke="url(#dfsBeamC2)" />
                <path d="M 864 360 L 912 360 L 912 288 L 960 288" stroke="url(#dfsBeamC3)" />
                <path d="M 864 456 L 912 456 L 912 288 L 960 288" stroke="url(#dfsBeamC4)" />
                <path d="M 1152 288 L 1200 288" stroke="url(#dfsBeamD)" />
              </g>
            </svg>

            {/* Node 01: Capture */}
            <button
              type="button"
              onClick={() => setSelectedNode('01')}
              className={cn(
                'dfs-node dfs-step cursor-pointer transition-all duration-200 text-start',
                selectedNode === '01' ? 'ring-2 ring-blue-500 shadow-md' : 'hover:border-foreground/40',
              )}
              style={{ left: 48, top: 240, width: 192, height: 96 }}
            >
              <span className="dfs-kicker dfs-blue">01 · Capture</span>
              <span className="dfs-node-title">Virtual Try-On</span>
              <span className="dfs-node-sub">Shopper sees themselves</span>
            </button>

            {/* Node 02: Consent */}
            <button
              type="button"
              onClick={() => setSelectedNode('02')}
              className={cn(
                'dfs-node dfs-step cursor-pointer transition-all duration-200 text-start',
                selectedNode === '02' ? 'ring-2 ring-blue-500 shadow-md' : 'hover:border-foreground/40',
              )}
              style={{ left: 336, top: 240, width: 192, height: 96 }}
            >
              <span className="dfs-kicker dfs-blue">02 · Consent</span>
              <span className="dfs-node-title">Store Chat</span>
              <span className="dfs-node-sub">Save look & sizing</span>
            </button>

            {/* Node 03: Activate Label */}
            <div className="dfs-kicker dfs-activate-label" style={{ left: 624, top: 96 }}>
              03 · Activate
            </div>

            {/* Channel 1: Shopify */}
            <button
              type="button"
              onClick={() => setSelectedNode('03')}
              className={cn(
                'dfs-node dfs-channel cursor-pointer transition-all duration-200 text-start',
                selectedNode === '03' ? 'ring-2 ring-blue-500 shadow-md' : 'hover:border-foreground/40',
              )}
              style={{ left: 624, top: 144, width: 240, height: 48 }}
            >
              <ShopifyMark className="size-5 text-[#95BF47] shrink-0" />
              <span className="dfs-channel-label">
                SEGMENTS<br />HIGH-INTENT AUDIENCE
              </span>
            </button>

            {/* Channel 2: WhatsApp */}
            <button
              type="button"
              onClick={() => setSelectedNode('03')}
              className={cn(
                'dfs-node dfs-channel cursor-pointer transition-all duration-200 text-start',
                selectedNode === '03' ? 'ring-2 ring-blue-500 shadow-md' : 'hover:border-foreground/40',
              )}
              style={{ left: 624, top: 240, width: 240, height: 48 }}
            >
              <WhatsAppMark className="size-5 text-[#25D366] shrink-0" />
              <span className="dfs-channel-label">
                WHATSAPP<br />DIRECT OUTREACH
              </span>
            </button>

            {/* Channel 3: Instagram */}
            <button
              type="button"
              onClick={() => setSelectedNode('03')}
              className={cn(
                'dfs-node dfs-channel cursor-pointer transition-all duration-200 text-start',
                selectedNode === '03' ? 'ring-2 ring-blue-500 shadow-md' : 'hover:border-foreground/40',
              )}
              style={{ left: 624, top: 336, width: 240, height: 48 }}
            >
              <InstagramMark className="size-5 text-[#E4405F] shrink-0" />
              <span className="dfs-channel-label">
                INSTAGRAM DMS<br />CURATED LOOKS
              </span>
            </button>

            {/* Channel 4: n8n / Automations */}
            <button
              type="button"
              onClick={() => setSelectedNode('03')}
              className={cn(
                'dfs-node dfs-channel cursor-pointer transition-all duration-200 text-start',
                selectedNode === '03' ? 'ring-2 ring-blue-500 shadow-md' : 'hover:border-foreground/40',
              )}
              style={{ left: 624, top: 432, width: 240, height: 48 }}
            >
              <N8nMark className="size-5 text-[#EA4B71] shrink-0" />
              <span className="dfs-channel-label">
                AUTOMATIONS<br />N8N & KLAVIYO FLOWS
              </span>
            </button>

            {/* Node 04: Re-engage Hub */}
            <button
              type="button"
              onClick={() => setSelectedNode('04')}
              className={cn(
                'dfs-node dfs-step dfs-hub cursor-pointer transition-all duration-200 text-start',
                selectedNode === '04' ? 'ring-2 ring-emerald-500 shadow-md' : 'hover:opacity-90',
              )}
              style={{ left: 960, top: 240, width: 192, height: 96 }}
            >
              <span className="dfs-kicker dfs-green">04 · Re-engage</span>
              <span className="dfs-node-title dfs-hub-ink">Personalized outreach</span>
              <span className="dfs-node-sub">For every customer</span>
            </button>

            {/* Node 05: Return */}
            <button
              type="button"
              onClick={() => setSelectedNode('05')}
              className={cn(
                'dfs-node dfs-step cursor-pointer transition-all duration-200 text-start',
                selectedNode === '05' ? 'ring-2 ring-emerald-500 shadow-md' : 'hover:border-foreground/40',
              )}
              style={{ left: 1200, top: 240, width: 192, height: 96 }}
            >
              <span className="dfs-kicker dfs-green">05 · Return</span>
              <span className="dfs-node-title">Your Storefront</span>
              <span className="dfs-node-sub">Personalized on arrival</span>
            </button>

          </div>
        </div>

        {/* Mobile Diagram Fallback (< 1024px) */}
        <div
          ref={mobileWrapRef}
          className="dfs-scale-wrap dfs-mobile"
          data-dfs-w="390"
          data-dfs-h="860"
        >
          <div
            ref={mobileCanvasRef}
            className="dfs-canvas dfs-grid-mobile"
            style={{ width: 390, height: 860 }}
          >
            {/* Mobile SVG */}
            <svg
              width="390"
              height="860"
              viewBox="0 0 390 860"
              fill="none"
              className="dfs-svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="dfsMTop" gradientUnits="userSpaceOnUse" x1="0" y1="-92" x2="0" y2="88">
                  <animate attributeName="y1" values="-92;132" dur="1.92s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="88;312" dur="1.92s" begin="0s" repeatCount="indefinite" />
                  <stop offset="0" stopColor="#2D68FF" stopOpacity="0" />
                  <stop offset="0.38" stopColor="#2D68FF" stopOpacity="1" />
                  <stop offset="0.6" stopColor="#2D68FF" stopOpacity="1" />
                  <stop offset="1" stopColor="#2D68FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g className="dfs-path" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 195 88 L 195 132" />
                <path d="M 195 204 L 195 232 L 24 232 L 24 297 L 52 297" />
                <path d="M 24 297 L 24 373 L 52 373" />
                <path d="M 24 373 L 24 449 L 52 449" />
                <path d="M 24 449 L 24 525 L 52 525" />
                <path d="M 338 297 L 366 297 L 366 604 L 195 604 L 195 640" />
                <path d="M 195 716 L 195 760" />
              </g>
              <g strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 195 88 L 195 132" stroke="url(#dfsMTop)" />
              </g>
            </svg>

            {/* Mobile Nodes */}
            <div
              onClick={() => setSelectedNode('01')}
              className="dfs-node dfs-step"
              style={{ left: 52, top: 16, width: 286, height: 72 }}
            >
              <span className="dfs-kicker dfs-blue">01 · Capture</span>
              <span className="dfs-node-title">Virtual Try-On</span>
              <span className="dfs-node-sub">Shopper sees themselves</span>
            </div>

            <div
              onClick={() => setSelectedNode('02')}
              className="dfs-node dfs-step"
              style={{ left: 52, top: 132, width: 286, height: 72 }}
            >
              <span className="dfs-kicker dfs-blue">02 · Consent</span>
              <span className="dfs-node-title">Store Chat</span>
              <span className="dfs-node-sub">Save look & sizing</span>
            </div>

            <div className="dfs-kicker dfs-activate-label" style={{ left: 52, top: 232 }}>
              03 · Activate
            </div>

            <div
              onClick={() => setSelectedNode('03')}
              className="dfs-node dfs-channel"
              style={{ left: 52, top: 268, width: 286, height: 58 }}
            >
              <ShopifyMark className="size-5 text-[#95BF47] shrink-0" />
              <span className="dfs-channel-label">SHOPIFY SEGMENTS</span>
            </div>

            <div
              onClick={() => setSelectedNode('03')}
              className="dfs-node dfs-channel"
              style={{ left: 52, top: 344, width: 286, height: 58 }}
            >
              <WhatsAppMark className="size-5 text-[#25D366] shrink-0" />
              <span className="dfs-channel-label">WHATSAPP DIRECT</span>
            </div>

            <div
              onClick={() => setSelectedNode('03')}
              className="dfs-node dfs-channel"
              style={{ left: 52, top: 420, width: 286, height: 58 }}
            >
              <InstagramMark className="size-5 text-[#E4405F] shrink-0" />
              <span className="dfs-channel-label">INSTAGRAM DMS</span>
            </div>

            <div
              onClick={() => setSelectedNode('03')}
              className="dfs-node dfs-channel"
              style={{ left: 52, top: 496, width: 286, height: 58 }}
            >
              <N8nMark className="size-5 text-[#EA4B71] shrink-0" />
              <span className="dfs-channel-label">N8N & AUTOMATIONS</span>
            </div>

            <div
              onClick={() => setSelectedNode('04')}
              className="dfs-node dfs-step dfs-hub"
              style={{ left: 52, top: 640, width: 286, height: 76 }}
            >
              <span className="dfs-kicker dfs-green">04 · Re-engage</span>
              <span className="dfs-node-title dfs-hub-ink">Personalized Outreach</span>
              <span className="dfs-node-sub">One customer profile</span>
            </div>

            <div
              onClick={() => setSelectedNode('05')}
              className="dfs-node dfs-step"
              style={{ left: 52, top: 760, width: 286, height: 72 }}
            >
              <span className="dfs-kicker dfs-green">05 · Return</span>
              <span className="dfs-node-title">Your Storefront</span>
              <span className="dfs-node-sub">Personalized on arrival</span>
            </div>
          </div>
        </div>

        {/* Real Verified Product Proof Inspector for the selected step */}
        <div className="border-t border-border p-6 md:p-8 bg-background/50">
          <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                  {activeProof.tag}
                </span>
                <span className="text-xs text-muted-foreground">• Demo Data Fixture</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1.5">
                {activeProof.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {activeProof.desc}
              </p>
            </div>
            <div className="relative w-full md:w-[320px] aspect-[16/10] overflow-hidden rounded-xl border border-border shadow-md bg-muted/40 shrink-0">
              <Image
                src={activeProof.image}
                alt={activeProof.title}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* 3 Antla Metric Cards Underneath */}
        <div className="dfs-metrics dfs-desktop-flex">
          <div className="dfs-metric">
            <span className="dfs-metric-num">{copy.metric1Num}</span>
            <span className="dfs-metric-label">{copy.metric1Label}</span>
          </div>
          <div className="dfs-metric">
            <span className="dfs-metric-num">{copy.metric2Num}</span>
            <span className="dfs-metric-label">{copy.metric2Label}</span>
          </div>
          <div className="dfs-metric dfs-metric-last">
            <span className="dfs-metric-num">{copy.metric3Num}</span>
            <span className="dfs-metric-label">{copy.metric3Label}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
