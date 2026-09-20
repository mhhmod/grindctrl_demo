'use client';

import React from 'react';
import Image from 'next/image';
import { Shirt, MessageSquare, Zap, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SiteLocale } from '@/lib/landing/landing-i18n';

interface FeaturesGridProps {
  locale: SiteLocale;
}

export function FeaturesGrid({ locale }: FeaturesGridProps) {
  const isArabic = locale === 'ar';

  const features = [
    {
      id: 'try-on',
      eyebrow: isArabic ? 'تجربة القياس الافتراضية' : 'AI-Powered Try-On',
      icon: <Shirt className="size-4.5 text-blue-500" />,
      title: isArabic
        ? 'أظهر لعملائك كيف يبدو مظهرهم الحقيقي بكل أناقة.'
        : 'Show your customers how good they look.',
      desc: isArabic
        ? 'تعتمد GrindCTRL على أحدث نماذج التوليد العصبي لإظهار ملاءمة الملابس وتطابق مقاساتها على جسم المتسوق بدقة فائقة، مما يرفع التحويل ويقلل المرتجعات.'
        : 'GrindCTRL uses cutting-edge neural rendering to show shoppers realistic drape, fit, and proportions on their own bodies, driving conversion and cutting returns.',
      image: `/landing/proof/demo-ui-storefront-tryon-${locale}.webp`,
      imageAlt: 'AI Virtual Try-On storefront interface',
      badge: isArabic ? 'توليد فوري ٣.٢ث' : '3.2s Real-Time',
    },
    {
      id: 'conversations',
      eyebrow: isArabic ? 'محادثات المتجر الذكية' : 'Customer Conversations',
      icon: <MessageSquare className="size-4.5 text-emerald-500" />,
      title: isArabic
        ? 'حوّل استفسارات المتسوقين إلى طلبات مؤكدة.'
        : 'Turn questions into orders with Store Chat.',
      desc: isArabic
        ? 'مساعد دردشة مدعوم بكتالوج متجرك وقواعدك. يقدم استشارات فورية حول المقاسات والألوان وتوفر المخزون، مع إمكانية تحويل المحادثة لفريقك في أي لحظة.'
        : 'Grounded in your real Shopify catalog and policies. Answers sizing and fabric questions instantly with immediate human team takeover when requested.',
      image: `/landing/proof/demo-ui-shopper-chat-${locale}.webp`,
      imageAlt: 'Store Chat conversation interface',
      badge: isArabic ? 'عربي وإنجليزي' : 'Bilingual Native',
    },
    {
      id: 'setup',
      eyebrow: isArabic ? 'تثبيت فوري في ٥ دقائق' : '5-Minute Setup',
      icon: <Zap className="size-4.5 text-amber-500" />,
      title: isArabic
        ? 'يعمل مباشرة وبسلاسة مع متاجر Shopify.'
        : 'Works right out of the box with Shopify.',
      desc: isArabic
        ? 'تطبيق أصلي معتمد يعتمد على Theme App Extensions دون الحاجة لكتابة أي كود برمجي أو إعادة بناء المتجر بدون رأس (Headless).'
        : 'A native Shopify Plus application that installs in clicks via Theme App Extensions. No custom theme edits or headless migrations required.',
      image: `/landing/proof/demo-ui-team-inbox-${locale}.webp`,
      imageAlt: 'GrindCTRL team inbox and store management',
      badge: isArabic ? 'بدون كود' : 'Zero Code Required',
    },
    {
      id: 'crm',
      eyebrow: isArabic ? 'محرك تحويل وإدارة عملاء' : 'Conversion & CRM Engine',
      icon: <Users className="size-4.5 text-purple-500" />,
      title: isArabic
        ? 'كل تجربة قياس تبني ملف عميل قيّم للمستقبل.'
        : 'Every try-on becomes a customer you can reach again.',
      desc: isArabic
        ? 'التقاط ذكي لتفضيلات المقاس والموافقات، مع أتمتة رسائل المتابعة عبر WhatsApp، ومزامنة شرائح العملاء مع أدوات التسويق التي تعتمدها.'
        : 'Capture fit preferences and consent at peak intent. Automate personalized WhatsApp follow-ups and sync high-intent audiences to Klaviyo and n8n.',
      image: `/landing/proof/demo-ui-captured-leads-demo-data-en.webp`,
      imageAlt: 'Captured Leads and CRM Profiles',
      badge: isArabic ? 'أتمتة مبيعات' : 'Automated Routing',
    },
  ];

  return (
    <section className="relative overflow-hidden" aria-label="Feature Matrix">
      <div className="container max-w-[120rem] mx-auto px-4">
        <div className="border-x border-b border-border grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-border bg-card/20">
          
          {features.map((item) => (
            <div
              key={item.id}
              className="bordered-div-padding flex flex-col justify-between gap-6"
            >
              {/* Feature Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.icon}
                    <span>{item.eyebrow}</span>
                  </div>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground border border-border/70">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Feature UI Screenshot Card */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/90 bg-background shadow-md">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
