'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTryOnLocale } from './locale-provider';

const looks = [
  { label: 'Linen shirt', labelAr: 'قميص كتان', src: '/landing/proof/tryon/result-woman-linen-shirt.webp' },
  { label: 'Abaya', labelAr: 'عباية', src: '/landing/proof/tryon/result-woman-abaya.webp' },
  { label: 'Denim overshirt', labelAr: 'قميص جينز', src: '/landing/proof/tryon/result-man-denim-overshirt.webp' },
  { label: 'Knit polo', labelAr: 'بولو محبوك', src: '/landing/proof/tryon/result-man-knit-polo.webp' },
] as const;

export function DemoGallery() {
  const { locale } = useTryOnLocale();
  const [selected, setSelected] = useState(0);
  const look = looks[selected];

  return (
    <section aria-label={locale === 'ar' ? 'معرض التجربة التوضيحية' : 'Illustrative try-on gallery'} className="mx-auto grid max-w-5xl gap-6 rounded-3xl border border-border bg-card p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
      <div className="relative aspect-[4/5] min-w-0 overflow-hidden rounded-2xl bg-muted">
        <Image src={look.src} alt={locale === 'ar' ? look.labelAr : look.label} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className="flex min-w-0 flex-col justify-center gap-5">
        <span className="w-fit rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
          {locale === 'ar' ? 'نتائج معدّة مسبقًا للديمو' : 'Pre-rendered demo results'}
        </span>
        <h2 className="text-2xl font-bold sm:text-3xl">
          {locale === 'ar' ? 'اختر إطلالة لاستكشاف الواجهة' : 'Choose a look to explore the interface'}
        </h2>
        <p className="text-sm leading-7 text-muted-foreground">
          {locale === 'ar' ? 'هذه الصور أمثلة توضيحية. لا يتم رفع صور أو تشغيل ذكاء اصطناعي أو الاتصال بخدمات الإنتاج.' : 'These are illustrative images. No photos are uploaded, no AI generation runs, and no production service is contacted.'}
        </p>
        <div className="grid grid-cols-2 gap-3" role="group" aria-label={locale === 'ar' ? 'الإطلالات' : 'Looks'}>
          {looks.map((item, index) => (
            <button key={item.src} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)} className={`min-h-11 rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${selected === index ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background hover:bg-muted'}`}>
              {locale === 'ar' ? item.labelAr : item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
