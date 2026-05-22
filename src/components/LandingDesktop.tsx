// Server Component — no "use client" needed
// This is now a pure assembler. All interactivity lives in individual landing/ components.
import { Navbar } from './landing/Navbar';
import { Hero } from './landing/Hero';
import { Stats } from './landing/Stats';
import { TopBurgers } from './landing/TopBurgers';
import { WhyUs } from './landing/WhyUs';
import { Branches } from './landing/Branches';
import { Reviews } from './landing/Reviews';
import { About } from './landing/About';
import { FinalCTA } from './landing/FinalCTA';
import { Footer } from './landing/Footer';

export { Navbar as LandingDesktopNavbar };
export { Footer as LandingDesktopFooter };

export const LandingDesktop = () => (
  <div style={{ background: "var(--bg)", color: "var(--silver)", fontFamily: "var(--eob-sans), 'Inter', sans-serif" }}>
    <Navbar />
    <Hero />
    <Stats />
    <TopBurgers />
    <WhyUs />
    <Branches />
    <Reviews />
    <About />
    <FinalCTA />
    <Footer />
  </div>
);

export default LandingDesktop;