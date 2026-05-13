import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
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

export const metadata = {
  title: "Embassy of Burgers | Premium Burgers",
  description: "Premium burgers from around the world. 24/7 delivery in Tashkent.",
};

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
