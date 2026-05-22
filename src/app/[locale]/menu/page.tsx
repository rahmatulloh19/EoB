import {setRequestLocale, getTranslations} from 'next-intl/server';
import { Metadata } from 'next';
import MenuClientPage from "./MenuClientPage";

export async function generateMetadata(
  props: { params: Promise<{locale: string}> }
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({locale, namespace: 'seo'});
  return {
    title: t('menu_title'),
  };
}

export default async function MenuPage(props: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await props.params;
  setRequestLocale(locale);
  
  return <MenuClientPage />;
}
