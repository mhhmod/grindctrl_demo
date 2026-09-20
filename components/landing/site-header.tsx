'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { BrandLogo } from '@/components/brand-logo';
import { Icon } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { LandingLocaleToggle } from '@/components/landing/landing-locale';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { trackClick } from '@/lib/analytics';
import { BOOKING_URL } from '@/lib/booking';
import { ShopifyMark } from '@/components/brand-marks';
import type { LandingTranslator, SiteLocale } from '@/lib/landing/landing-i18n';

/* Anchors into homepage sections. Pricing is a ROUTE, not an anchor — it used
   to be '#pricing', which scrolled to a section of the landing page and never
   opened /pricing, so the pricing page was unreachable from the navigation on
   any device. Kept separate from navLinks below so the Product group can sit
   between them without splicing one array by index. */
const navLinks = [
  { href: '#how', key: 'navHow' },
  { href: '#demo', key: 'navDemo' },
  { href: '#benefits', key: 'navBenefits' },
] as const;

const productLinks = [
  { href: '/shopping', key: 'navProductShopping' },
  { href: '/conversations', key: 'navProductConversations' },
  { href: '/operations', key: 'navProductOperations' },
  { href: '/integrations', key: 'navProductIntegrations' },
] as const;

const pricingLink = { href: '/pricing', key: 'navPricing' } as const;

function isRoute(href: string) {
  return href.startsWith('/');
}

/* A homepage anchor only scrolls in place when the visitor is already on '/'.
   From every other page it has to become a route ('/#how') so Link actually
   navigates home before the browser jumps to the fragment. */
function resolveNavHref(href: string, onHome: boolean): string {
  return href.startsWith('#') && !onHome ? `/${href}` : href;
}

function NavItem({
  href,
  label,
  className,
  onSelect,
}: {
  href: string;
  label: string;
  className: string;
  onSelect?: () => void;
}) {
  return isRoute(href) ? (
    <Link href={href} onClick={onSelect} className={className}>
      {label}
    </Link>
  ) : (
    <a href={href} onClick={onSelect} className={className}>
      {label}
    </a>
  );
}

export function SiteHeader({ locale, t }: { locale: SiteLocale; t: LandingTranslator }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === '/';
  const desktopLinkClass = 'transition-colors hover:text-foreground';
  const mobileLinkClass =
    'flex min-h-11 items-center text-base text-muted-foreground transition-colors hover:text-foreground';

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur transition-all duration-300">
      <div className="container max-w-[120rem] mx-auto px-4">
        <div className="flex w-full items-center justify-between border-x border-border py-3 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            aria-label={t.brandHome}
            className="inline-flex min-h-10 min-w-0 items-center rounded-lg"
          >
            <BrandLogo className="max-w-full" />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                href={resolveNavHref(link.href, onHome)}
                label={t[link.key]}
                className={desktopLinkClass}
              />
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`group inline-flex items-center gap-1 outline-none ${desktopLinkClass} data-open:text-foreground`}
              >
                {t.navProductGroup}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                >
                  <Icon icon={ArrowDown01Icon} size={14} />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {productLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{t[link.key]}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavItem href={pricingLink.href} label={t[pricingLink.key]} className={desktopLinkClass} />
          </nav>

          {/* Antla-Style Right Action Group */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-9 rounded-full border-border bg-card px-4 text-xs font-semibold shadow-2xs hover:bg-accent"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('cta_clicked', { cta: 'book_demo', section: 'header' })}
              >
                {locale === 'ar' ? 'احجز عرضاً' : 'Book a Demo'}
              </a>
            </Button>

            <div className="flex items-center gap-1">
              <LandingLocaleToggle />
              <ThemeToggle locale={locale} />
            </div>

            <Button
              asChild
              size="sm"
              className="h-9 rounded-full bg-primary text-primary-foreground px-4 text-xs font-semibold shadow-sm hover:bg-primary/90 gap-1.5"
            >
              <a
                href="https://apps.shopify.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('cta_clicked', { cta: 'install_shopify', section: 'header' })}
              >
                <ShopifyMark className="size-4 text-[#95BF47]" />
                <span>{locale === 'ar' ? 'تثبيت على Shopify' : 'Install on Shopify'}</span>
              </a>
            </Button>
          </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={t.menu}
              className="size-11 rounded-full lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          {/* The sheet side is physical, so it has to follow the locale:
                `right` in Arabic would open on the start edge. */}
          <SheetContent
            side={locale === 'ar' ? 'left' : 'right'}
            aria-describedby={undefined}
            className="gap-0 p-6"
            /* The primitive's own close button is 32px and hardcoded to the
                 English "Close". Suppressed in favour of one that clears the
                 44px touch target and speaks the visitor's language. */
            showCloseButton={false}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <SheetTitle>{t.menu}</SheetTitle>
              <SheetClose asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  aria-label={t.closeMenu}
                  className="-me-2 size-11 rounded-full p-0"
                >
                  <X className="size-5" aria-hidden="true" />
                </Button>
              </SheetClose>
            </div>

            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <NavItem
                  key={link.href}
                  href={resolveNavHref(link.href, onHome)}
                  label={t[link.key]}
                  className={mobileLinkClass}
                  onSelect={() => setOpen(false)}
                />
              ))}
              {/* No nested accordion for 4 links — they sit flat in the same
                  list, between Benefits and Pricing, same as desktop's dropdown
                  position. */}
              {productLinks.map((link) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={t[link.key]}
                  className={mobileLinkClass}
                  onSelect={() => setOpen(false)}
                />
              ))}
              <NavItem
                href={pricingLink.href}
                label={t[pricingLink.key]}
                className={mobileLinkClass}
                onSelect={() => setOpen(false)}
              />
              <Link
                href="/try-on"
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center text-base font-semibold transition-colors hover:text-foreground"
              >
                {locale === 'ar' ? 'عرض الديمو' : 'View demo'}
              </Link>
            </nav>

            <Separator className="my-4" />

            {/* Both toggles are h-9 (36px) by default, which is under the
                  44px touch floor. They were incidental controls in a desktop
                  bar before; here they are primary menu items. */}
            <div className="flex items-center gap-2">
              <LandingLocaleToggle className="min-h-11" />
              <ThemeToggle className="min-h-11" locale={locale} />
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}
