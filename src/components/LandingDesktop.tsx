"use client";
import React from "react";
import { Link, usePathname } from "@/navigation";
import { useTranslations, useLocale } from "next-intl";
import branchesData from "@/lib/branches.json";
import { EobLogo, BurgerIcon, ImagePlaceholder, SectionEyebrow, SectionTitle, StarRating } from "./shared";
import menuData from "@/lib/data.json";
import LanguageSwitcher from "./LanguageSwitcher";
/* Embassy of Burgers — Landing Page (Desktop, 1440 wide) */

export const LandingDesktopNavbar = () => {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: t('menu'), href: "/menu" },
    { name: t('branches'), href: "/#branches" },
    { name: t('about'), href: "/#about" }
  ];

  return (
    <>
      <div style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1100,
        background: "rgba(13,13,13,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--hairline-soft)"
      }}>
        <div className="eob-container eob-nav-inner" style={{
          paddingTop: 16, paddingBottom: 16,
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <Link href="/" style={{ textDecoration: "none" }} className="hover:opacity-80 transition-opacity">
            <EobLogo size={18} />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="eob-nav-links desktop-only" style={{ display: "flex", gap: 36, margin: "0 auto", paddingLeft: 40 }}>
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (pathname === '/' && item.href === '/#menu');
              return (
                <Link key={item.name} href={item.href} className="eob-nav-link" style={{
                  fontSize: 12, fontWeight: 500, letterSpacing: "0.14em",
                  color: isActive ? "var(--gold)" : "var(--silver)",
                  textDecoration: "none", whiteSpace: "nowrap"
                }}>
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="eob-nav-tools" style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <LanguageSwitcher />
            
            <a href="tel:+998781130773" className="desktop-only" style={{
              fontFamily: "var(--eob-mono)", fontSize: 13, color: "var(--silver)",
              textDecoration: "none", letterSpacing: "0.05em"
            }}>+998 78 113 07 73</a>
            
            <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--gold hover:opacity-90" style={{ padding: "10px 20px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
              {t('order')}
            </a>

            {/* Hamburger Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="eob-hamburger-btn"
              aria-label="Toggle Menu"
              style={{
                background: "none", border: "none", cursor: "pointer", 
                padding: "8px 4px", flexDirection: "column", gap: 5, 
                zIndex: 1200, position: "relative"
              }}
            >
              <span style={{ width: 22, height: 1.5, background: "var(--gold)", transition: "0.3s", transform: isMenuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
              <span style={{ width: 14, height: 1.5, background: "var(--gold)", alignSelf: "flex-end", transition: "0.3s", opacity: isMenuOpen ? 0 : 1 }} />
              <span style={{ width: 22, height: 1.5, background: "var(--gold)", transition: "0.3s", transform: isMenuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-in Drawer */}
      <div 
        onClick={() => setIsMenuOpen(false)}
        style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", 
          backdropFilter: "blur(4px)", zIndex: 1050,
          opacity: isMenuOpen ? 1 : 0, visibility: isMenuOpen ? "visible" : "hidden",
          transition: "0.4s ease"
        }} 
      />
      
      <div className="eob-mobile-drawer" style={{
        position: "fixed", top: 0, right: isMenuOpen ? 0 : "-100%", 
        width: "80%", maxWidth: 320, height: "100vh",
        background: "rgba(18,18,18,0.95)", backdropFilter: "blur(24px)",
        zIndex: 1060, boxShadow: "-10px 0 40px rgba(0,0,0,0.5)",
        padding: "100px 40px", display: "flex", flexDirection: "column", gap: 32,
        transition: "right 0.4s cubic-bezier(0.25, 1, 0.5, 1)"
      }}>
        <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase" }}>Navigation</div>
        {navLinks.map((item) => (
          <Link 
            key={item.name} 
            href={item.href} 
            onClick={() => setIsMenuOpen(false)}
            style={{
              fontSize: 22, fontFamily: "var(--eob-serif)", color: "var(--white)",
              textDecoration: "none", letterSpacing: "0.02em"
            }}
          >
            {item.name}
          </Link>
        ))}
        
        <div style={{ marginTop: "auto", borderTop: "1px solid var(--hairline-soft)", paddingTop: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 16 }}>Contact</div>
          <a href="tel:+998781130773" style={{
            fontFamily: "var(--eob-mono)", fontSize: 15, color: "var(--silver)",
            textDecoration: "none", display: "block", marginBottom: 12
          }}>+998 78 113 07 73</a>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>Tashkent, Uzbekistan</div>
        </div>
      </div>
    </>
  );
};


const LandingDesktopHero = () => {
  const t = useTranslations('hero');
  return (
<section className="eob-section-padding" style={{
  position: "relative", overflow: "hidden",
  background: "var(--bg)",
  minHeight: 820,
  display: "flex"
}}>
    {/* full-bleed video */}
    <video src="/assets/burger-hero.mp4" autoPlay loop muted playsInline
  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
    {/* legibility gradient — strong on left, fading right */}
    <div style={{
    position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
    background: "linear-gradient(90deg, rgba(13,13,13,0.94) 0%, rgba(13,13,13,0.78) 40%, rgba(13,13,13,0.25) 75%, rgba(13,13,13,0) 100%)"
  }} />
    {/* gold accent radial, screen-blended */}
    <div style={{
    position: "absolute", zIndex: 1, top: "-20%", right: "-10%",
    width: 900, height: 900, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(212,175,55,0.22) 0%, transparent 60%)",
    mixBlendMode: "screen", pointerEvents: "none"
  }} />
    {/* bottom fade — smoothly blends video into page background */}
    <div style={{
    position: "absolute", zIndex: 1, left: 0, right: 0, bottom: 0, height: 220,
    background: "linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.55) 45%, var(--bg) 100%)",
    pointerEvents: "none"
  }} />
    {/* live tag */}
    <div style={{
    position: "absolute", zIndex: 3, bottom: 28, right: 64,
    fontFamily: "var(--eob-mono)", fontSize: 10, color: "var(--gold)",
    letterSpacing: "0.3em", textTransform: "uppercase",
    display: "flex", alignItems: "center", gap: 10
  }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--gold)", animation: "eobPulse 2s ease-in-out infinite" }} />
      {t('live_tag')}
    </div>
    <style>{`@keyframes eobPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>

    <div className="eob-hero-inner" style={{
    position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto",
    width: "100%",
    display: "flex", alignItems: "center"
  }}>
      <div className="eob-hero-content" style={{ maxWidth: 640 }}>
        <div className="eob-label" style={{ marginBottom: 28, display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: 32, height: 1, background: "var(--gold)" }} />
          <span>{t('est')}</span>
        </div>
        <h1 className="eob-hero-title" style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontWeight: 500, lineHeight: 0.98, letterSpacing: "-0.02em", color: "var(--white)", margin: 0 }}>
          {t('title_part1')}<br />
          <span className="eob-gold-word">{t('title_accent')}</span> {t('title_part2')}
        </h1>
        <p className="eob-hero-subtitle" style={{ fontFamily: "var(--eob-sans), 'Inter', sans-serif", fontSize: 18, lineHeight: 1.6, color: "var(--silver)", marginTop: 28, maxWidth: 460 }}>
          {t('subtitle')}
        </p>
        <div className="eob-hero-actions" style={{ display: "flex", gap: 14, marginTop: 40 }}>
          <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--gold hover:opacity-90 eob-hero-btn" style={{ padding: "16px 28px", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
            {t('cta_order')} <span style={{ fontSize: 14 }}>→</span>
          </a>
          <Link href="/menu" className="eob-btn eob-btn--outline eob-hero-btn" style={{ padding: "16px 28px", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", border: "1px solid #D4AF37" }}>
            {t('cta_menu')}
          </Link>
        </div>
        <div style={{ display: "flex", gap: 36, marginTop: 48, paddingTop: 28, borderTop: "1px solid var(--hairline-soft)" }}>
          {[{ k: t('delivery'), v: t('delivery_time') }, { k: t('hours'), v: t('hours_val') }, { k: t('rating'), v: t('rating_val') }].map((i) =>
        <div key={i.k}>
              <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>{i.k}</div>
              <div style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 22, color: "var(--white)", marginTop: 6 }}>{i.v}</div>
            </div>
        )}
        </div>
      </div>
    </div>
  </section>
);
};


const LandingDesktopStats = () => {
  const t = useTranslations('stats');
  return (
<section style={{ padding: "100px 0", background: "var(--bg)", borderBottom: "1px solid var(--hairline-soft)" }}>
    <div className="eob-container eob-stats-grid">
      {[
    { n: "12", l: t('branches') },
    { n: t('min_val'), l: t('delivery'), s: t('min') },
    { n: "24/7", l: t('support') },
    { n: "4.7", l: t('rating') }].
    map((s) =>
    <div key={s.n} className="eob-stat">
          <div style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 44, color: "var(--white)", lineHeight: 1, fontWeight: 500 }}>
            {s.n} {s.s && <span style={{ fontSize: 16, color: "var(--gold)", verticalAlign: "top", marginLeft: 4 }}>{s.s}</span>}
          </div>
          <div style={{ marginTop: 8, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
            {s.l}
          </div>
        </div>
    )}
    </div>
  </section>
);
};


const TopBurgerCard = ({ b, featured = false }: { b: any, featured?: boolean }) => {
  const tc = useTranslations('common');
  const priceFormatted = Math.floor(b.price).toLocaleString("ru-RU").replace(/,/g, " ");
  const [imgError, setImgError] = React.useState(false);
  
  return (
    <div className="eob-card" style={{ padding: 0, display: "flex", flexDirection: "column", height: "100%" }}>
      {b.image && !imgError ? (
        <div style={{ height: 240, width: "100%", background: "#111", overflow: "hidden", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.image} alt={b.name} onError={() => setImgError(true)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ) : (
        <ImagePlaceholder height={240} caption={`${b.name.toUpperCase()}`} iconSize={70} />
      )}
      <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 24, color: "var(--white)", fontWeight: 500, lineHeight: 1.1 }}>
          {b.name}
        </div>
        <div style={{ marginTop: 10, fontSize: 13, lineHeight: 1.55, color: "var(--silver)", minHeight: 40, flex: 1 }}>
          {b.description || b.desc}
        </div>
        <div style={{ marginTop: 22, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 4 }}>{tc('price')}</div>
            <div style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 24, color: "var(--gold)", lineHeight: 1 }}>
              {priceFormatted} <span style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.05em", fontWeight: 400 }}>{tc('currency')}</span>
            </div>
          </div>
          <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--red hover:opacity-90" style={{ padding: "10px 16px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
            {tc('order_short')}
          </a>
        </div>
      </div>
    </div>
  );
};


const LandingDesktopTopBurgers = () => {
  const t = useTranslations('sections');
  const tc = useTranslations('common');
  return (
<section id="menu" className="eob-section-padding" style={{ background: "var(--bg)" }}>
    <div className="eob-container">
      <div className="eob-burgers-header">
        <div>
          <SectionEyebrow>{t('menu_eyebrow')}</SectionEyebrow>
          <SectionTitle accent={t('menu_accent')}>{t('menu_title')}</SectionTitle>
        </div>
        <Link href="/menu" className="eob-btn eob-btn--outline eob-branch-btn">
          {t('menu_cta')} →
        </Link>
      </div>
      <div className="eob-grid-burgers">
        {menuData.flatMap(cat => cat.products).slice(0, 4).map((b) => <TopBurgerCard key={b.id || b.name} b={b} />)}
      </div>
    </div>
  </section>
);
};


const FeatureBlock = ({ num, title, desc, icon }: { num: string, title: string, desc: string, icon: React.ReactNode }) =>
<div className="eob-card" style={{ padding: "36px 32px", position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
      <div style={{
      width: 52, height: 52, borderRadius: "50%",
      border: "1px solid var(--gold)", color: "var(--gold)",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(212,175,55,0.06)",
      transition: "all 300ms ease"
    }}>
        {icon}
      </div>
      <div style={{ fontFamily: "var(--eob-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.2em" }}>
        {num}
      </div>
    </div>
    <div style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 22, color: "var(--white)", fontWeight: 500, lineHeight: 1.2, marginBottom: 16 }}>
      {title}
    </div>
    <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--silver)", flex: 1 }}>
      {desc}
    </div>
  </div>;


const LandingDesktopWhy = () => {
  const t = useTranslations('sections');
  return (
<section className="eob-section-padding" style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #100E0A 100%)" }}>
    <div className="eob-container">
      <div className="eob-why-header">
        <SectionEyebrow>{t('why_eyebrow')}</SectionEyebrow>
        <SectionTitle accent={t('why_accent')}>{t('why_title')}</SectionTitle>
      </div>
      <div className="eob-grid-whyus">
        <FeatureBlock num="01" title={t('why_feat1_title')} desc={t('why_feat1_desc')}
      icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 3 L18 7 V13 C18 17 15 20 12 21 C9 20 6 17 6 13 V7 Z" /><path d="M9 12 L11 14 L15 10" /></svg>} />
      
        <FeatureBlock num="02" title={t('why_feat2_title')} desc={t('why_feat2_desc')}
      icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="9" /><path d="M12 7 V12 L15 14" /></svg>} />
      
        <FeatureBlock num="03" title={t('why_feat3_title')} desc={t('why_feat3_desc')}
      icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 14 C4 9 8 6 12 6 C16 6 20 9 20 14 Z" /><path d="M4 14 H20 V18 H4 Z" /><path d="M8 10 L9 12 M12 9 L13 11 M16 10 L17 12" /></svg>} />
      
        <FeatureBlock num="04" title={t('why_feat4_title')} desc={t('why_feat4_desc')}
      icon={<svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M10 22 C10 22 2 14 2 9 A8 8 0 0 1 18 9 C18 14 10 22 10 22 Z" /><circle cx="10" cy="9" r="2.5" /></svg>} />
      
      </div>
    </div>
  </section>
);
};
 

const LandingDesktopBranches = () => {
  const t = useTranslations('sections');
  const tc = useTranslations('common');
  const locale = useLocale();
  const getBranchStatus = (b: any) => {
    if (b.hours === "24/7") return true;
    const now = new Date();
    const hour = now.getHours();
    const parts = b.hours.split("-").map((s: string) => s.trim());
    if (parts.length !== 2) return true;
    const startHour = parseInt(parts[0].split(":")[0]);
    const endHour = parseInt(parts[1].split(":")[0]);
    return endHour < startHour ? (hour >= startHour || hour < endHour) : (hour >= startHour && hour < endHour);
  };

  const [branches, setBranches] = React.useState<any[]>(branchesData.map(b => ({ ...b, is_actually_open: getBranchStatus(b) })));
  const [status, setStatus] = React.useState("idle"); // idle | locating | done | error
  const [errorMsg, setErrorMsg] = React.useState("");
  const [showAll, setShowAll] = React.useState(false);

  const findNearest = () => {
    setStatus("locating");setErrorMsg("");
    
    const processLocation = (lat: number, lng: number) => {
      const dist = (a: number, b: number, c: number, d: number) => {
        const R = 6371,toRad = (x: number) => x * Math.PI / 180;
        const dLat = toRad(c - a),dLng = toRad(d - b);
        const x = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a)) * Math.cos(toRad(c)) * Math.sin(dLng / 2) ** 2;
        return 2 * R * Math.asin(Math.sqrt(x));
      };

      const withDistance = branchesData.map(branch => {
        const d = dist(lat, lng, parseFloat(branch.latitude as unknown as string), parseFloat(branch.longitude as unknown as string));
        return { ...branch, km: d, is_actually_open: getBranchStatus(branch) };
      });
      
      withDistance.sort((a, b) => a.km - b.km);
      
      setBranches(withDistance);
      setStatus("done");
    };

    if (!navigator.geolocation) {
      setStatus("error");
      setErrorMsg(t('geo_not_supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => processLocation(pos.coords.latitude, pos.coords.longitude),
      (err) => {
        setStatus("error");
        setErrorMsg(err.code === 1 ? t('geo_denied') : t('geo_error'));
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  };

  return (
    <section id="branches" className="eob-section-padding" style={{ background: "var(--bg)" }}>
    <div className="eob-container">
      <div className="eob-branches-header">
        <div>
          <SectionEyebrow>{branchesData.length} {t('branches_eyebrow')}</SectionEyebrow>
          <SectionTitle accent={t('branches_accent')}>{t('branches_title')}</SectionTitle>
        </div>
        <div className="eob-branches-tools">
          {status === "error" &&
            <div className="eob-branches-error">{errorMsg}</div>
            }
          <button
              onClick={findNearest}
              disabled={status === "locating"}
              className="eob-btn eob-btn--gold eob-branch-btn"
              style={{ opacity: status === "locating" ? 0.6 : 1, cursor: status === "locating" ? "wait" : "pointer" }}>
              
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22 C12 22 4 14 4 9 A8 8 0 0 1 20 9 C20 14 12 22 12 22 Z" /><circle cx="12" cy="9" r="2.5" /></svg>
            {status === "locating" ? t('branches_locating') : t('branches_find')}
          </button>
          <a href="https://yandex.uz/maps/" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--outline-light eob-branch-btn hover:opacity-80">
            {t('branches_map')}
          </a>
        </div>
      </div>
      <div style={{ 
        position: "relative", 
        overflow: "hidden", 
        maxHeight: showAll ? 4000 : 760, 
        transition: "max-height 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
        margin: "0 -8px", padding: "0 8px"
      }}>
        <div className="eob-grid-3" style={{ paddingTop: 16, paddingBottom: showAll ? 0 : 40 }}>
          {(showAll ? branches : branches.slice(0, 6)).map((b, i) => {
            const isNearest = status === "done" && i === 0;
            const isTop3 = status === "done" && i > 0 && i < 3;
            const isOpen = getBranchStatus(b);
            
            return (
              <div key={b.id || b.name_uz} id={`eob-branch-${i}`} style={{
                background: isNearest ? "linear-gradient(180deg, rgba(212,175,55,0.10) 0%, var(--surface) 100%)" : "var(--surface)",
                border: isNearest ? "1px solid var(--gold)" : isTop3 ? "1px solid rgba(212,175,55,0.25)" : "1px solid var(--hairline-soft)",
                padding: "28px 28px 24px",
                position: "relative",
                transition: "all 280ms ease",
                boxShadow: isNearest ? "0 12px 40px rgba(212,175,55,0.18)" : "none"
              }}>
            {b.km !== undefined && i < 3 &&
                <div style={{ position: "absolute", top: -10, left: 24, background: isNearest ? "var(--gold)" : "var(--card)", color: isNearest ? "#1a1408" : "var(--gold)", border: isNearest ? "none" : "1px solid rgba(212,175,55,0.4)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", padding: "4px 10px", fontWeight: 600 }}>
                {i === 0 ? t('nearest') : `${i + 1}-${t('near')}`} · {b.km.toFixed(1)} km
              </div>
                }
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
              <div>
                <div style={{ fontFamily: "var(--eob-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.2em" }}>
                  {b.km !== undefined ? tc('distance', { km: b.km.toFixed(1) }) : `№ ${String(i + 1).padStart(2, "0")}`}
                </div>
                <div style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 26, color: "var(--white)", marginTop: 6, fontWeight: 500, lineHeight: 1.15 }}>
                  {b[`name_${locale}`] || b.name_uz}
                </div>
              </div>
              <span style={{
                    fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
                    color: isOpen ? "var(--gold)" : "var(--red)",
                    border: `1px solid ${isOpen ? "var(--gold)" : "var(--red)"}`,
                    padding: "4px 8px",
                    alignSelf: "flex-start"
                  }}>
                {isOpen ? t('open') : t('closed')}
              </span>
            </div>
            <div style={{ borderTop: "1px solid var(--hairline-soft)", paddingTop: 16, fontSize: 13, color: "var(--silver)", lineHeight: 1.7 }}>
              <div>{b[`address_${locale}`] || b.address_uz}</div>
              <div style={{ color: "var(--muted)" }}>{b.hours} · {b.phone}</div>
            </div>
            <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <a href={`https://yandex.uz/maps/?pt=${b.longitude},${b.latitude}&z=16`} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
                {t('see_on_map')} →
              </a>
              <a href="https://t.me/burgerembassy_helpbot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ fontSize: 11, color: "var(--muted)", textDecoration: "none" }}>Telegram</a>
            </div>
          </div>);

          })}
        </div>
        
        {/* Gradient Overlay for hidden items */}
        {!showAll && branchesData.length > 6 && (
          <div className="eob-branches-overlay" style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 240,
            background: "linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.85) 40%, rgba(13,13,13,1) 100%)",
            display: "flex", alignItems: "flex-end", justifyContent: "center",
            paddingBottom: 24, zIndex: 10, pointerEvents: "none"
          }}>
            <button 
              onClick={() => setShowAll(true)}
              className="eob-btn eob-btn--outline eob-show-all-btn" 
              style={{ 
                padding: "16px 36px", fontSize: 12, letterSpacing: "0.2em", 
                textTransform: "uppercase", pointerEvents: "auto", 
                background: "#0D0D0D", boxShadow: "0 -10px 40px rgba(13,13,13,0.9)",
                border: "1px solid var(--gold)"
              }}>
              {t('show_all')} {branchesData.length} {t('branches_label')} ↓
            </button>
          </div>
        )}
      </div>
    </div>
  </section>);

};

const REVIEWS = [
{ name: "Aziza K.", initials: "AK", date: "3 kun oldin", rating: 5, text: "Spain Jalapeno Burger — bu haqiqiy olovli lazzat! Achchiq jalapeno, qarsildoq dudlangan go'sht va salsa sousi sochnaya kotleta bilan juda zo'r mos tushgan." },
{ name: "Sardor M.", initials: "SM", date: "1 hafta oldin", rating: 5, text: "Burger Embassy mening eng sevimli burgerim bo'lib qoldi. Yumshoq bulochka va firmenniy sousning ta'mi og'izda eriydi. Haqiqiy premium klassika!" },
{ name: "Madina T.", initials: "MT", date: "2 hafta oldin", rating: 5, text: "Uzbekistan Burger-ni tatib ko'rdim, uzoq vaqt tomlangan mayin go'shti og'izda eriydi! Yangi sabzavotlar va o'ziga xos sous bilan ta'mi shunchaki mukammal." }];


const LandingDesktopReviews = () => {
  const t = useTranslations('sections');
  const tc = useTranslations('common');
  return (
<section className="eob-section-padding eob-reviews-section" style={{ background: "linear-gradient(180deg, #100E0A 0%, #0D0D0D 100%)", overflowX: "hidden" }}>
    <div className="eob-container">
      <div className="eob-reviews-header">
        <SectionEyebrow>{t('reviews_eyebrow')}</SectionEyebrow>
        <SectionTitle accent={t('reviews_accent')}>{t('reviews_title')}</SectionTitle>
      </div>
      <div className="eob-grid-3 eob-reviews-carousel">
        {REVIEWS.map((r, i) =>
      <div key={r.name} className="eob-card" style={{ padding: "28px 28px 24px", position: "relative", display: "flex", flexDirection: "column" }}>
            <div style={{
          position: "absolute", top: -8, left: 32,
          width: 16, height: 16, background: "var(--card)",
          transform: "rotate(45deg)",
          borderTop: "1px solid var(--hairline-soft)",
          borderLeft: "1px solid var(--hairline-soft)"
        }} />
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "linear-gradient(135deg, #2a251a 0%, #14110c 100%)",
            border: "1px solid var(--gold)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--gold)", fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 16, fontStyle: "italic"
          }}>{r.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "var(--white)", fontSize: 14, fontWeight: 500 }}>{r.name}</div>
                <div style={{ color: "var(--muted)", fontSize: 11, marginTop: 2 }}>{r.date}</div>
              </div>
              <StarRating value={r.rating} size={11} />
            </div>
            <div style={{ fontSize: 14, color: "var(--silver)", lineHeight: 1.6, flex: 1, marginBottom: 20 }}>
              "{r.text}"
            </div>
            <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--hairline-soft)", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 8, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{tc('telegram').toUpperCase()}</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.02em" }}>@burgerembassy_uzbot</span>
              </div>
              <span style={{ fontSize: 9, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                {tc('confirmed')}
              </span>
            </div>
          </div>
      )}
      </div>
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <a href="https://t.me/burgerembassy_helpbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--outline hover:text-gold" style={{ padding: "14px 30px", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", border: "1px solid var(--gold)" }}>
          {t('reviews_all')}
        </a>
      </div>
    </div>
  </section>);
};


const LandingDesktopAbout = () => {
  const t = useTranslations('sections');
  return (
<section id="about" className="eob-section-padding" style={{ background: "var(--bg)" }}>
    <div className="eob-container eob-about-inner">
      <div>
        <div className="eob-about-header">
          <SectionEyebrow>{t('about_eyebrow')}</SectionEyebrow>
          <SectionTitle accent={t('about_accent')}>{t('about_title')}</SectionTitle>
        </div>
        <div className="eob-about-content">
          <p style={{ margin: "0 0 18px" }}>
            {t('about_p1')}
          </p>
          <p style={{ margin: 0 }}>
            {t('about_p2')}
          </p>
        </div>
        <div className="eob-about-socials" style={{ marginTop: 32, display: "flex", gap: 32 }}>
          <a href="https://www.instagram.com/burgerembassyuz/" target="_blank" rel="noopener noreferrer" className="eob-about-social-link" style={{ color: "var(--gold)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
            <span style={{ fontSize: 11, letterSpacing: "0.15em" }}>INSTAGRAM</span>
          </a>
          <a href="https://t.me/burgerembassy_helpbot" target="_blank" rel="noopener noreferrer" className="eob-about-social-link" style={{ color: "var(--gold)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 4 L2 11 L9 14 L12 22 L21 4 Z" /></svg>
            <span style={{ fontSize: 11, letterSpacing: "0.15em" }}>TELEGRAM</span>
          </a>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <div style={{ 
          width: "100%", 
          height: "100%", 
          minHeight: "400px", 
          position: "relative", 
          overflow: "hidden", 
          border: "1px solid var(--hairline-soft)"
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/assets/about-restaurant.jpg" 
            alt="Embassy of Burgers Restaurant" 
            style={{ width: "100%", height: "100%", minHeight: "400px", objectFit: "cover", display: "block" }} 
          />
        </div>
      </div>
    </div>
  </section>);
};


const LandingDesktopFinalCTA = () => {
  const t = useTranslations('sections');
  return (
<section style={{
  position: "relative", overflow: "hidden",
  background: "var(--bg)",
  borderTop: "1px solid var(--hairline-soft)",
  borderBottom: "1px solid var(--hairline-soft)"
}}>
    <div style={{
    position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)",
    width: 1200, height: 1200, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(212,175,55,0.16) 0%, transparent 50%)",
    pointerEvents: "none"
  }} />
    <div style={{
    position: "relative", maxWidth: 1000, margin: "0 auto",
    padding: "140px 64px", textAlign: "center"
  }} className="eob-section-padding">
      <SectionEyebrow align="center">{t('cta_eyebrow')}</SectionEyebrow>
      <h2 className="eob-cta-title" style={{
      fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontWeight: 500,
      fontSize: 96, lineHeight: 1, color: "var(--white)", margin: "10px 0 24px",
      letterSpacing: "-0.02em"
    }}>
        {t('cta_title_part1')} <br /> <span style={{ fontStyle: "italic", color: "var(--gold)" }}>{t('cta_title_accent')}</span>
      </h2>
      <p style={{ fontSize: 17, color: "var(--silver)", maxWidth: 540, margin: "0 auto 44px", lineHeight: 1.6 }}>
        {t('cta_subtitle')}
      </p>
      <div className="eob-cta-actions" style={{ display: "inline-flex", gap: 14 }}>
        <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--gold hover:opacity-90" style={{ padding: "18px 32px", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 4 L2 11 L9 14 L12 22 L21 4 Z" /></svg>
          {t('cta_bot')}
        </a>
        <a href="tel:+998781130773" className="eob-btn eob-btn--outline hover:bg-white/5" style={{ padding: "18px 32px", fontSize: 13, letterSpacing: "0.1em", textDecoration: "none", border: "1px solid var(--gold)" }}>
          +998 78 113 07 73
        </a>
      </div>
    </div>
  </section>
);
};


export const LandingDesktopFooter = () => {
  const t = useTranslations('footer');
  const tc = useTranslations('common');
  return (
<footer style={{ padding: "80px 0 40px", background: "#0D0D0D", borderTop: "1px solid var(--hairline-soft)" }}>
    <div className="eob-container">
      <div className="eob-footer-content" style={{ marginBottom: 60 }}>
        <div className="eob-footer-info">
          <EobLogo size={24} className="eob-footer-logo" />
          <div style={{ marginTop: 24, fontSize: 14, color: "var(--muted)", maxWidth: 300, lineHeight: 1.6 }} className="eob-footer-desc">
            {t('mission_desc')}
          </div>
        </div>
        <div className="eob-footer-links" style={{ flex: 1 }}>
          <div className="eob-footer-nav">
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--gold)", fontWeight: 600, marginBottom: 24, textTransform: "uppercase" }}>{tc('navigation')}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Link href="/" className="eob-footer-link" style={{ fontSize: 13 }}>{tc('home_short')}</Link>
              <Link href="/menu" className="eob-footer-link" style={{ fontSize: 13 }}>{tc('menu_short')}</Link>
              <Link href="/#branches" className="eob-footer-link" style={{ fontSize: 13 }}>{tc('branches_short')}</Link>
              <Link href="/#about" className="eob-footer-link" style={{ fontSize: 13 }}>{tc('about_short')}</Link>
            </div>
          </div>
          <div className="eob-footer-contact">
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--gold)", fontWeight: 600, marginBottom: 24, textTransform: "uppercase" }}>{tc('contact')}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="tel:+998781130773" className="eob-footer-link" style={{ fontSize: 13 }}>+998 78 113 07 73</a>
              <a href="mailto:hello@embassy.uz" className="eob-footer-link" style={{ fontSize: 13 }}>hello@embassy.uz</a>
              <div style={{ color: "var(--white)", fontSize: 13 }}>Tashkent · UZ</div>
              <div style={{ color: "var(--white)", fontSize: 13 }}>24/7 {t('delivery_text')}</div>
            </div>
          </div>
          <div className="eob-footer-social">
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--gold)", fontWeight: 600, marginBottom: 24, textTransform: "uppercase" }} className="desktop-only">{tc('social')}</div>
            <div className="eob-social-list" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="https://instagram.com/burgerembassy" className="eob-footer-link" style={{ fontSize: 13 }}>Instagram</a>
              <a href="https://t.me/burgerembassy_uzbot" className="eob-footer-link" style={{ fontSize: 13 }}>Telegram</a>
              <a href="https://youtube.com/@embassyburgers" className="eob-footer-link" style={{ fontSize: 13 }}>YouTube</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 40, borderTop: "1px solid var(--hairline-soft)" }}>
        <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>
          {t('rights')}
        </div>
        <div style={{ fontFamily: "var(--eob-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
          {t('mission')}
        </div>
      </div>
    </div>
  </footer>
);
};


export const LandingDesktop = () =>
<div style={{ background: "var(--bg)", color: "var(--silver)", fontFamily: "var(--eob-sans), 'Inter', sans-serif" }}>
    <LandingDesktopNavbar />
    <LandingDesktopHero />
    <LandingDesktopStats />
    <LandingDesktopTopBurgers />
    <LandingDesktopWhy />
    <LandingDesktopBranches />
    <LandingDesktopReviews />
    <LandingDesktopAbout />
    <LandingDesktopFinalCTA />
    <LandingDesktopFooter />
  </div>;


export default LandingDesktop;