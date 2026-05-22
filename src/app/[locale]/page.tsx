import {setRequestLocale, getTranslations} from 'next-intl/server';
import { Metadata } from 'next';
import LandingDesktop from "@/components/LandingDesktop";

export async function generateMetadata(
  props: { params: Promise<{locale: string}> }
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({locale, namespace: 'seo'});
  return {
    title: t('home_title'),
  };
}

export default async function Home(props: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await props.params;
  setRequestLocale(locale);
  
  return (
    <main>
      <LandingDesktop />
    </main>
  );
}
