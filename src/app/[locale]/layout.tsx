import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale, getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';

const inter = Inter({
  variable: "--eob-sans",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--eob-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

import { Metadata } from 'next';

export async function generateMetadata(
  props: { params: Promise<{locale: string}> }
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({locale, namespace: 'seo'});
  
  const title = t('default_title');
  const description = t('default_desc');

  return {
    title: {
      template: '%s | Embassy of Burgers',
      default: title,
    },
    description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    openGraph: {
      title,
      description,
      siteName: 'Embassy of Burgers',
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await props.params;

  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Embassy of Burgers",
              "url": "https://embassyburgers.uz",
              "creator": {
                "@type": "Person",
                "name": "Rahmatulloh",
                "jobTitle": "Frontend Developer"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
