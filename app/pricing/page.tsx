import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { LandingLocaleProvider } from '@/components/landing/landing-locale';
import { PricingPageContent } from '@/components/pricing/pricing-page-content';
import { getRequestLocale } from '@/lib/landing/request-locale';
import { CURRENCY_COOKIE, plansForCurrency, resolveCurrency } from '@/lib/pricing/currency';
import { DEMO_CATALOG } from '@/lib/try-on/public-catalog';

export const metadata: Metadata = {
  title: 'GrindCTRL Demo Pricing',
  description: 'Illustrative pricing interface for the standalone developer demo.',
};

export default async function PricingPage() {
  const cookieStore = await cookies();
  const locale = await getRequestLocale();
  const currency = resolveCurrency({ cookie: cookieStore.get(CURRENCY_COOKIE)?.value ?? null, country: null });
  const catalog = {
    plans: plansForCurrency(DEMO_CATALOG.plans, currency),
    packs: plansForCurrency(DEMO_CATALOG.packs, currency),
  };
  return (
    <LandingLocaleProvider initialLocale={locale} className="gc-landing-root gc-animated min-h-dvh overflow-x-hidden bg-background text-foreground">
      <div className="border-b border-border bg-muted/60 px-4 py-2 text-center text-xs text-foreground" role="note">
        {locale === 'ar' ? 'أسعار توضيحية للديمو فقط — لا توجد خدمة شراء متصلة.' : 'Illustrative demo pricing only. No checkout is connected.'}
      </div>
      <PricingPageContent catalog={catalog} currency={currency} />
    </LandingLocaleProvider>
  );
}
