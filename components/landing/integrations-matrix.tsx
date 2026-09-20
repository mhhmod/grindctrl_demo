'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/icons';
import type { SiteLocale } from '@/lib/landing/landing-i18n';
import { Eyebrow } from '@/components/landing/eyebrow';
import { IntegrationsDirectory } from '@/components/landing/proof/integrations-directory';
import { getProofCopy } from '@/components/landing/proof/proof-copy';
import { trackClick } from '@/lib/analytics';

interface IntegrationsMatrixProps {
  locale: SiteLocale;
}

export function IntegrationsMatrix({ locale }: IntegrationsMatrixProps) {
  const p = getProofCopy(locale);
  const isArabic = locale === 'ar';

  return (
    <section id="integrations" className="relative scroll-mt-20 overflow-hidden" aria-labelledby="integrations-title">
      <div className="container max-w-[120rem] mx-auto px-4">
        <div className="border-x border-b border-border py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-card/10">
        
        {/* Section Header with Link */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Eyebrow locale={locale}>{p.integrationsEyebrow}</Eyebrow>
            <h2
              id="integrations-title"
              className="mt-3 text-[28px] font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[44px]"
            >
              {p.integrationsTitle}
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-muted-foreground sm:text-lg">
              {p.integrationsBody}
            </p>
          </div>

          <Button asChild variant="outline" size="lg" className="h-11 rounded-full px-5 text-xs font-semibold sm:text-sm">
            <Link
              href="/integrations"
              onClick={() => trackClick('cta_clicked', { cta: 'view_all_integrations', section: 'integrations' })}
            >
              {p.integrationsLink}
              <span className="ms-1.5 inline-block rtl:-scale-x-100" aria-hidden="true">
                <Icon icon={ArrowRight02Icon} className="size-4" />
              </span>
            </Link>
          </Button>
        </div>

        {/* Full Official Integrations Directory Matrix */}
        <IntegrationsDirectory copy={p.integrations} />

        </div>
      </div>
    </section>
  );
}
