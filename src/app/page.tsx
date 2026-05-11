import LandingDesktop from "@/components/LandingDesktop";
import LandingMobile from "@/components/LandingMobile";

export default function Home() {
  return (
    <main>
      <div className="hidden md:block"><LandingDesktop /></div>
      <div className="block md:hidden"><LandingMobile /></div>
    </main>
  );
}
