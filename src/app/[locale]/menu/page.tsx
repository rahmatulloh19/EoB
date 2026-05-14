import {setRequestLocale} from 'next-intl/server';
import MenuClientPage from "./MenuClientPage";

export default async function MenuPage(props: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await props.params;
  setRequestLocale(locale);
  
  return <MenuClientPage />;
}
