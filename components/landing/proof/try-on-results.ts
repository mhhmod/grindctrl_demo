import type { SiteLocale } from '@/lib/landing/landing-i18n';

/* Pre-rendered demo images. The generation pipeline and its manifest are not
   included in this public frontend repository. The shopper and garment inputs
   are synthetic images; keep that disclosure beside every placement. */

export type TryOnResult = {
  id: 'woman-linen-shirt' | 'woman-abaya' | 'man-denim-overshirt' | 'man-knit-polo';
  shopper: 'woman' | 'man';
  result: string;
  garment: string;
  shopperPhoto: string;
  name: Record<SiteLocale, string>;
};

const BASE = '/landing/proof/tryon';

export const TRY_ON_RESULTS: readonly TryOnResult[] = [
  {
    id: 'woman-linen-shirt',
    shopper: 'woman',
    result: `${BASE}/woman-linen-shirt.webp`,
    garment: `${BASE}/inputs/garment-linen-shirt.webp`,
    shopperPhoto: `${BASE}/inputs/shopper-woman.webp`,
    name: { en: 'Sage linen shirt', ar: 'قميص كتان أخضر' },
  },
  {
    id: 'woman-abaya',
    shopper: 'woman',
    result: `${BASE}/woman-abaya.webp`,
    garment: `${BASE}/inputs/garment-abaya.webp`,
    shopperPhoto: `${BASE}/inputs/shopper-woman.webp`,
    name: { en: 'Embroidered abaya', ar: 'عباية مطرزة' },
  },
  {
    id: 'man-denim-overshirt',
    shopper: 'man',
    result: `${BASE}/man-denim-overshirt.webp`,
    garment: `${BASE}/inputs/garment-denim-overshirt.webp`,
    shopperPhoto: `${BASE}/inputs/shopper-man.webp`,
    name: { en: 'Denim overshirt', ar: 'قميص جينز' },
  },
  {
    id: 'man-knit-polo',
    shopper: 'man',
    result: `${BASE}/man-knit-polo.webp`,
    garment: `${BASE}/inputs/garment-knit-polo.webp`,
    shopperPhoto: `${BASE}/inputs/shopper-man.webp`,
    name: { en: 'Knit polo', ar: 'بولو تريكو' },
  },
];

/* All generated images are 922x1152 and the inputs keep the same 4:5 frame. */
export const TRY_ON_IMAGE_SIZE = { width: 922, height: 1152 } as const;
