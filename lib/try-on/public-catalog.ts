/** Illustrative data for the standalone frontend. No database is contacted. */
export type PublicPlanCatalogItem = {
  planKey: string;
  name: string;
  description: string | null;
  priceMinor: number;
  currency: string;
  rendersIncluded: number;
  modelKey: string;
  isFree: boolean;
  sortOrder: number;
};

export type PublicCreditPackCatalogItem = {
  packKey: string;
  name: string;
  priceMinor: number;
  currency: string;
  renders: number;
  modelKey: string;
  validityDays: number;
  sortOrder: number;
};

export type PublicEntitlementCatalog = {
  plans: PublicPlanCatalogItem[];
  packs: PublicCreditPackCatalogItem[];
};

export const DEMO_CATALOG: PublicEntitlementCatalog = {
  plans: [
    { planKey: 'free-demo', name: 'Free', description: 'Illustrative demo tier', priceMinor: 0, currency: 'USD', rendersIncluded: 15, modelKey: 'demo', isFree: true, sortOrder: 10 },
    { planKey: 'launch-demo', name: 'Launch', description: 'Illustrative demo tier', priceMinor: 1500, currency: 'USD', rendersIncluded: 150, modelKey: 'demo', isFree: false, sortOrder: 20 },
    { planKey: 'launch-demo-egp', name: 'Launch', description: 'Illustrative demo tier', priceMinor: 75000, currency: 'EGP', rendersIncluded: 150, modelKey: 'demo', isFree: false, sortOrder: 20 },
    { planKey: 'dfy-demo', name: 'Managed', description: 'Illustrative demo tier', priceMinor: 4900, currency: 'USD', rendersIncluded: 650, modelKey: 'demo', isFree: false, sortOrder: 30 },
    { planKey: 'dfy-demo-egp', name: 'Managed', description: 'Illustrative demo tier', priceMinor: 245000, currency: 'EGP', rendersIncluded: 650, modelKey: 'demo', isFree: false, sortOrder: 30 },
  ],
  packs: [
    { packKey: 'pack-lite-demo', name: 'Boost 80', priceMinor: 500, currency: 'USD', renders: 80, modelKey: 'demo', validityDays: 30, sortOrder: 10 },
    { packKey: 'pack-flash-demo', name: 'Boost 75 Pro', priceMinor: 1000, currency: 'USD', renders: 75, modelKey: 'demo', validityDays: 30, sortOrder: 20 },
  ],
};
