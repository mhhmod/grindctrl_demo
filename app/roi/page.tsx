import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { LandingLocaleProvider } from '@/components/landing/landing-locale';
import { RoiPageContent } from '@/components/roi/roi-page-content';
import { getRequestLocale } from '@/lib/landing/request-locale';
import { CURRENCY_COOKIE, resolveCurrency } from '@/lib/pricing/currency';

export const metadata: Metadata = {
  title: 'GrindCTRL Demo ROI Calculator',
  description: 'Editable, illustrative ROI calculator for the frontend demo.',
};

export default async function RoiPage() {
  const cookieStore = await cookies();
  const locale = await getRequestLocale();
  const currency = resolveCurrency({ cookie: cookieStore.get(CURRENCY_COOKIE)?.value ?? null, country: null });
  return (
    <LandingLocaleProvider initialLocale={locale} className="gc-landing-root gc-animated min-h-dvh overflow-x-hidden bg-background text-foreground">
      <RoiPageContent initialCurrency={currency} />
    </LandingLocaleProvider>
  );
}
