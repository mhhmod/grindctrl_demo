import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource/ibm-plex-sans-arabic/400.css';
import '@fontsource/ibm-plex-sans-arabic/500.css';
import '@fontsource/ibm-plex-sans-arabic/600.css';
import '@fontsource/ibm-plex-sans-arabic/700.css';
import { ColorSchemeScript } from '@mantine/core';
import { getRequestLocale } from '@/lib/landing/request-locale';
import { getDir } from '@/lib/landing/landing-i18n';
import { ThemeProvider } from '@/components/theme-provider';
import { GcSpotlight } from '@/components/gc-spotlight';
import './globals.css';

export const metadata: Metadata = {
  title: 'GRINDCTRL — Developer demo',
  description: 'Standalone, frontend-only GrindCTRL website demo.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getRequestLocale();
  return (
    <html lang={locale} dir={getDir(locale)} data-mantine-color-scheme="light" suppressHydrationWarning>
      <head>
        <ColorSchemeScript localStorageKey="theme" defaultColorScheme="light" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div role="note" className="border-b border-border bg-muted px-4 py-2 text-center text-xs font-medium text-foreground">
            {locale === 'ar' ? 'ديمو للواجهة فقط — بدون حسابات أو خدمات إنتاج متصلة' : 'Frontend demo only — no accounts or production services connected'}
          </div>
          <GcSpotlight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
