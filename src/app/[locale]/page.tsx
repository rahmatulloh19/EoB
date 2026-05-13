import {setRequestLocale} from 'next-intl/server';
import LandingDesktop from "@/components/LandingDesktop";

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
