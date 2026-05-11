"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import branchesData from "@/lib/branches.json";
import { EobLogo, BurgerIcon, ImagePlaceholder, SectionEyebrow, SectionTitle, StarRating } from "./shared";
import menuData from "@/lib/data.json";
/* Embassy of Burgers — Landing Page (Desktop, 1440 wide) */

export const LandingDesktopNavbar = () => {
  const pathname = usePathname();
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 10,
      background: "rgba(13,13,13,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--hairline-soft)"
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "20px 64px",
        display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 40
      }}>
        <Link href="/" style={{ textDecoration: "none" }} className="hover:opacity-80 transition-opacity">
          <EobLogo size={20} />
        </Link>
        <nav style={{ display: "flex", gap: 36, justifyContent: "center", flexWrap: "nowrap", margin: "0px", padding: "0px 0px 0px 38px" }}>
          {[
            { name: "Menyu", href: "/menu" },
            { name: "Filiallar", href: "/#branches" },
            { name: "Biz haqimizda", href: "/#about" }
          ].map((item, i) => {
            const isActive = pathname === item.href || (item.href.startsWith('/#') && pathname === '/');
            return (
              <Link key={item.name} href={item.href} style={{
                fontFamily: "var(--sans)", fontSize: 12, letterSpacing: "0.22em",
                textTransform: "uppercase", color: isActive ? "var(--gold)" : "var(--silver)",
                textDecoration: "none", fontWeight: 500, whiteSpace: "nowrap"
              }} className="hover:text-gold transition-colors">{item.name}</Link>
            );
          })}
        </nav>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 20, flexWrap: "nowrap" }}>
          <a href="tel:+998781130773" style={{
            fontFamily: "var(--mono)", fontSize: 13, color: "var(--silver)",
            textDecoration: "none", letterSpacing: "0.05em", whiteSpace: "nowrap"
          }}>+998 78 113 07 73</a>
          <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--gold hover:opacity-90" style={{ padding: "12px 22px", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", whiteSpace: "nowrap", textDecoration: "none" }}>
            Buyurtma qilish
          </a>
        </div>
      </div>
    </div>
  );
};


const LandingDesktopHero = () =>
<section style={{
  position: "relative", overflow: "hidden",
  background: "var(--bg)",
  minHeight: 820,
  display: "flex"
}}>
    {/* full-bleed video */}
    <video src="/assets/burger-hero.mp4" autoPlay loop muted playsInline poster="/images/3d5e1945603872631c7747b99ad14380.WEBP"
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
    fontFamily: "var(--mono)", fontSize: 10, color: "var(--gold)",
    letterSpacing: "0.3em", textTransform: "uppercase",
    display: "flex", alignItems: "center", gap: 10
  }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--gold)", animation: "eobPulse 2s ease-in-out infinite" }} />
      Live · № 001 · Toshkent
    </div>
    <style>{`@keyframes eobPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>

    <div style={{
    position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto",
    padding: "140px 64px 100px", width: "100%",
    display: "flex", alignItems: "center"
  }}>
      <div style={{ maxWidth: 640 }}>
        <div className="eob-label" style={{ marginBottom: 28, display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: 32, height: 1, background: "var(--gold)" }} />
          <span>EST. 2019 · Toshkent · 12 Filial</span>
        </div>
        <h1 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 96, lineHeight: 0.98, letterSpacing: "-0.02em", color: "var(--white)", margin: 0 }}>
          Dunyoni<br />
          <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Tatib</span> Ko'r
        </h1>
        <p style={{ fontFamily: "var(--sans)", fontSize: 18, lineHeight: 1.6, color: "var(--silver)", marginTop: 28, maxWidth: 460 }}>
          Har bir burger — alohida mamlakatning ta'mi. Embassy of Burgers — bu oshxona elchixonasi, har bir buyurtma diplomatik missiya.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
          <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--gold hover:opacity-90" style={{ padding: "16px 28px", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
            Buyurtma qilish <span style={{ fontSize: 14 }}>→</span>
          </a>
          <Link href="/menu" className="eob-btn eob-btn--outline" style={{ padding: "16px 28px", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
            Menyuni ko'r
          </Link>
        </div>
        <div style={{ display: "flex", gap: 36, marginTop: 48, paddingTop: 28, borderTop: "1px solid var(--hairline-soft)" }}>
          {[{ k: "Yetkazib berish", v: "30–45 daqiqa" }, { k: "Ish vaqti", v: "24/7" }, { k: "Reyting", v: "4.7 / 5" }].map((i) =>
        <div key={i.k}>
              <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>{i.k}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--white)", marginTop: 6 }}>{i.v}</div>
            </div>
        )}
        </div>
      </div>

    </div>
  </section>;


const LandingDesktopStats = () =>
<section style={{ background: "var(--bg)", borderTop: "1px solid var(--hairline-soft)", borderBottom: "1px solid var(--hairline-soft)" }}>
    <div style={{
    maxWidth: 1280, margin: "0 auto",
    padding: "44px 64px",
    display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40
  }}>
      {[
    { n: "12", l: "Filial Toshkent bo'ylab" },
    { n: "24/7", l: "Yetkazib berish" },
    { n: "50K+", l: "Doimiy mijoz" },
    { n: "4.7", l: "O'rtacha reyting" }].
    map((s) =>
    <div key={s.n} className="eob-stat">
          <div style={{ fontFamily: "var(--serif)", fontSize: 44, color: "var(--white)", lineHeight: 1, fontWeight: 500 }}>
            {s.n}
          </div>
          <div style={{ marginTop: 8, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
            {s.l}
          </div>
        </div>
    )}
    </div>
  </section>;


const TopBurgerCard = ({ b, featured = false }: { b: any, featured?: boolean }) => {
  const priceFormatted = new Intl.NumberFormat("ru-RU").format(parseFloat(b.price || "0")).replace(",", " ");
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
        <div style={{ fontFamily: "var(--serif)", fontSize: 24, color: "var(--white)", fontWeight: 500, lineHeight: 1.1 }}>
          {b.name}
        </div>
        <div style={{ marginTop: 10, fontSize: 13, lineHeight: 1.55, color: "var(--silver)", minHeight: 40, flex: 1 }}>
          {b.description || b.desc}
        </div>
        <div style={{ marginTop: 22, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase" }}>Narxi</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--gold)", marginTop: 2 }}>
              {priceFormatted} <span style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>so'm</span>
            </div>
          </div>
          <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--red hover:opacity-90" style={{ padding: "11px 18px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
            Buyurtma
          </a>
        </div>
      </div>
    </div>
  );
};


const LandingDesktopTopBurgers = () => {
  const burgersCategory = menuData.find(cat => cat.name === "Бургеры");
  const topItems = burgersCategory ? burgersCategory.products.slice(0, 4) : menuData.flatMap(cat => cat.products).slice(0, 4);
  const totalItems = menuData.flatMap(cat => cat.products).length;

  return (
    <section id="menu" style={{ background: "var(--bg)", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56 }}>
          <div>
            <SectionEyebrow>Selection · 2026</SectionEyebrow>
            <SectionTitle accent="Burgerlar">Eng Sevimli</SectionTitle>
          </div>
          <div style={{ maxWidth: 360, fontSize: 14, color: "var(--silver)", lineHeight: 1.6 }}>
            Elchixona menyusidan eng mashhur takliflar. Mijozlarimiz tomonidan eng ko'p tanlanadiganlar.
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {topItems.map((b) => <TopBurgerCard key={b.id || b.name} b={b} />)}
        </div>
        <div style={{ marginTop: 56, textAlign: "center" }}>
          <Link href="/menu" className="eob-btn eob-btn--outline" style={{ padding: "16px 36px", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>
            Barchasini ko'r · {totalItems} ta mahsulot →
          </Link>
        </div>
      </div>
    </section>
  );
};


const FeatureBlock = ({ num, title, desc, icon }) =>
<div className="eob-card" style={{ padding: "36px 32px", position: "relative" }}>
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
      <div style={{
      width: 56, height: 56, borderRadius: "50%",
      border: "1px solid var(--gold)", color: "var(--gold)",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(212,175,55,0.04)"
    }}>
        {icon}
      </div>
      <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em" }}>
        {num}
      </div>
    </div>
    <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--white)", fontWeight: 500, lineHeight: 1.2 }}>
      {title}
    </div>
    <div style={{ marginTop: 14, fontSize: 13, lineHeight: 1.6, color: "var(--silver)" }}>
      {desc}
    </div>
  </div>;


const LandingDesktopWhy = () =>
<section style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #100E0A 100%)", padding: "120px 0" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px" }}>
      <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 64px" }}>
        <SectionEyebrow align="center">Bizning Standart</SectionEyebrow>
        <SectionTitle accent="Embassy?" align="center">Nima uchun</SectionTitle>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        <FeatureBlock num="01" title="Toza ingredientlar" desc="Mahalliy fermerlar bilan to'g'ridan-to'g'ri shartnoma. Konservantlar yo'q."
      icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 3 L18 7 V13 C18 17 15 20 12 21 C9 20 6 17 6 13 V7 Z" /><path d="M9 12 L11 14 L15 10" /></svg>} />
      
        <FeatureBlock num="02" title="Tezkor yetkazib berish" desc="O'rtacha 30–45 daqiqa. 12 filial — har bir tumandan yaqin."
      icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="9" /><path d="M12 7 V12 L15 14" /></svg>} />
      
        <FeatureBlock num="03" title="Kuni bilan tayyor non" desc="Brioche bulochkalari har kuni saharda o'z pekarlikimizda pishiriladi."
      icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 14 C4 9 8 6 12 6 C16 6 20 9 20 14 Z" /><path d="M4 14 H20 V18 H4 Z" /><path d="M8 10 L9 12 M12 9 L13 11 M16 10 L17 12" /></svg>} />
      
        <FeatureBlock num="04" title="12 qulay manzil" desc="Toshkentning har bir tumanida konsulligimiz bor. Sizga eng yaqinini toping."
      icon={<svg width="20" height="24" viewBox="0 0 20 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M10 22 C10 22 2 14 2 9 A8 8 0 0 1 18 9 C18 14 10 22 10 22 Z" /><circle cx="10" cy="9" r="2.5" /></svg>} />
      
      </div>
    </div>
  </section>;


const LandingDesktopBranches = () => {
  const [branches, setBranches] = React.useState<any[]>(branchesData);
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
        return { ...branch, km: d };
      });
      
      withDistance.sort((a, b) => a.km - b.km);
      
      setBranches(withDistance);
      setStatus("done");
    };

    if (!navigator.geolocation) {
      setStatus("error");
      setErrorMsg("Brauzeringiz geolokatsiyani qo'llab-quvvatlamaydi");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => processLocation(pos.coords.latitude, pos.coords.longitude),
      (err) => {
        setStatus("error");
        if (err.code === err.PERMISSION_DENIED) {
          setErrorMsg("Joylashuvga ruxsat berilmadi");
        } else if (err.code === err.TIMEOUT) {
          setErrorMsg("Vaqt tugadi, qayta urining");
        } else {
          setErrorMsg("Joylashuv aniqlanmadi");
        }
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  };

  return (
    <section id="branches" style={{ background: "var(--bg)", padding: "120px 0" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "flex-end", marginBottom: 56, gap: 40 }}>
        <div>
          <SectionEyebrow>{branchesData.length} ta filial · Toshkent</SectionEyebrow>
          <SectionTitle accent="Filial">Sizga Eng Yaqin</SectionTitle>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", position: "relative" }}>
          {status === "error" &&
            <div style={{ position: "absolute", top: "100%", right: 0, marginTop: 14, fontSize: 10, color: "var(--red)", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "right", whiteSpace: "nowrap" }}>{errorMsg}</div>
            }
          <button
              onClick={findNearest}
              disabled={status === "locating"}
              className="eob-btn eob-btn--gold"
              style={{ padding: "13px 20px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", opacity: status === "locating" ? 0.6 : 1, cursor: status === "locating" ? "wait" : "pointer" }}>
              
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22 C12 22 4 14 4 9 A8 8 0 0 1 20 9 C20 14 12 22 12 22 Z" /><circle cx="12" cy="9" r="2.5" /></svg>
            {status === "locating" ? "Aniqlanmoqda…" : "Eng yaqin filialni top"}
          </button>
          <a href="https://yandex.uz/maps/" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--outline-light hover:opacity-80" style={{ padding: "13px 18px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex" }}>
            Xaritada
          </a>
        </div>
      </div>
      <div style={{ 
        position: "relative", 
        overflow: "hidden", 
        maxHeight: showAll ? 4000 : 760, 
        transition: "max-height 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
        margin: "0 -8px", padding: "0 8px" // X tomondan qirqilmasligi uchun (masalan shadow)
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, paddingTop: 16, paddingBottom: showAll ? 0 : 40 }}>
          {(showAll ? branches : branches.slice(0, 6)).map((b, i) => {
            const isNearest = status === "done" && i === 0;
            const isTop3 = status === "done" && i > 0 && i < 3;
            
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
                {i === 0 ? "Eng yaqin" : `${i + 1}-yaqin`} · {b.km.toFixed(1)} km
              </div>
                }
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
              <div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.2em" }}>
                  {b.km !== undefined ? `${b.km.toFixed(1)} KM UZOQLIKDA` : `№ ${String(i + 1).padStart(2, "0")}`}
                </div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 26, color: "var(--white)", marginTop: 6, fontWeight: 500, lineHeight: 1.15 }}>
                  {b.name_uz}
                </div>
              </div>
              <span style={{
                    fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
                    color: b.is_open ? "var(--gold)" : "var(--red)",
                    border: `1px solid ${b.is_open ? "var(--gold)" : "var(--hairline-soft)"}`,
                    padding: "4px 8px",
                    alignSelf: "flex-start"
                  }}>
                {b.is_open ? "Ochiq" : "Yopiq"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid var(--hairline-soft)", paddingTop: 16, fontSize: 13, color: "var(--silver)", lineHeight: 1.7 }}>
              <div>{b.address_uz}</div>
              <div style={{ color: "var(--muted)" }}>{b.hours} · {b.phone}</div>
            </div>
            <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <a href={`https://yandex.uz/maps/?pt=${b.longitude},${b.latitude}&z=16`} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
                Xaritada ko'r →
              </a>
              <a href="https://t.me/burgerembassy_helpbot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ fontSize: 11, color: "var(--muted)", textDecoration: "none" }}>Telegram</a>
            </div>
          </div>);

          })}
        </div>
        
        {/* Gradient Overlay for hidden items */}
        {!showAll && branchesData.length > 6 && (
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 240,
            background: "linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.85) 40%, rgba(13,13,13,1) 100%)",
            display: "flex", alignItems: "flex-end", justifyContent: "center",
            paddingBottom: 24, zIndex: 10, pointerEvents: "none"
          }}>
            <button 
              onClick={() => setShowAll(true)}
              className="eob-btn eob-btn--outline bg-[#0D0D0D] hover:text-gold" 
              style={{ 
                padding: "16px 36px", fontSize: 12, letterSpacing: "0.2em", 
                textTransform: "uppercase", pointerEvents: "auto", 
                background: "#0D0D0D", boxShadow: "0 -10px 40px rgba(13,13,13,0.9)"
              }}>
              Barcha {branchesData.length} ta filialni ko'r ↓
            </button>
          </div>
        )}
      </div>
    </div>
  </section>);

};

const REVIEWS = [
{ name: "Aziza K.", initials: "AK", date: "3 kun oldin", rating: 5, text: "Wagyu Tokyo — bu sherinkalik. Yetkazib berish 28 daqiqada keldi, hali issiq. Brioche bulochka — paxta kabi yumshoq." },
{ name: "Sardor M.", initials: "SM", date: "1 hafta oldin", rating: 5, text: "Diplomat eng sevimli burgerim bo'lib qoldi. Karamellangan piyozning balansi mukammal. Bu yerda haqiqiy san'at." },
{ name: "Madina T.", initials: "MT", date: "2 hafta oldin", rating: 4, text: "Le Parisien-ni sinab ko'rdim — truffle aromasi ajoyib. Filial Yunusobodda juda zamonaviy va tinch muhit." }];


const LandingDesktopReviews = () =>
<section style={{ background: "linear-gradient(180deg, #100E0A 0%, #0D0D0D 100%)", padding: "120px 0" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <SectionEyebrow align="center">Mijozlardan</SectionEyebrow>
        <SectionTitle accent="Fikri" align="center">Mijozlar</SectionTitle>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {REVIEWS.map((r, i) =>
      <div key={r.name} className="eob-card" style={{ padding: "28px 28px 24px", position: "relative" }}>
            {/* Telegram-bubble corner */}
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
            color: "var(--gold)", fontFamily: "var(--serif)", fontSize: 16, fontStyle: "italic"
          }}>{r.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "var(--white)", fontSize: 14, fontWeight: 500 }}>{r.name}</div>
                <div style={{ color: "var(--muted)", fontSize: 11, marginTop: 2 }}>{r.date}</div>
              </div>
              <StarRating value={r.rating} size={11} />
            </div>
            <div style={{ fontSize: 14, color: "var(--silver)", lineHeight: 1.6 }}>
              "{r.text}"
            </div>
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--hairline-soft)", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Telegram · @burgerembassy_uzbot
              </span>
              <span style={{ fontSize: 10, color: "var(--gold)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Tasdiqlangan
              </span>
            </div>
          </div>
      )}
      </div>
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <a href="https://t.me/burgerembassy_helpbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--outline hover:text-gold" style={{ padding: "14px 30px", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex" }}>
          Izoh qoldirish · Telegram
        </a>
      </div>
    </div>
  </section>;


const LandingDesktopAbout = () =>
<section id="about" style={{ background: "var(--bg)", padding: "120px 0" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px",
    display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
      <div>
        <SectionEyebrow>Manifest · 2019</SectionEyebrow>
        <SectionTitle accent="Haqimizda">Biz</SectionTitle>
        <div style={{ marginTop: 32, fontSize: 16, lineHeight: 1.75, color: "var(--silver)" }}>
          <p style={{ margin: "0 0 18px" }}>
            Embassy of Burgers 2019 yilda bitta oddiy g'oyadan tug'ilgan: <em style={{ color: "var(--gold)" }}>burger — bu shunchaki ovqat emas, bu madaniy elchi</em>. Har bir burger Toshkentga boshqa mamlakatdan keladi va sizga o'z hikoyasini olib keladi.
          </p>
          <p style={{ margin: 0 }}>
            Bugun biz 12 ta filial, 24 xil burger va 50 mingdan ortiq doimiy mehmonlarga egamiz. Lekin missiya o'zgarmagan: dunyoning eng yaxshi ta'mlarini sizning shahringizga olib kelish.
          </p>
        </div>
        <div style={{ display: "flex", gap: 32, marginTop: 40 }}>
          <a href="https://www.instagram.com/burgerembassyuz/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--gold)", textDecoration: "none", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
            Instagram
          </a>
          <a href="https://t.me/burgerembassy_helpbot" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--silver)", textDecoration: "none", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 4 L2 11 L9 14 L12 22 L21 4 Z" /></svg>
            Telegram
          </a>
        </div>
      </div>
      <div style={{ position: "relative", height: 540 }}>
        <div style={{ height: 540, width: "100%", overflow: "hidden", position: "relative", border: "1px solid var(--hairline-soft)", background: "#111" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/3d5e1945603872631c7747b99ad14380.WEBP" alt="Embassy of Burgers" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        </div>
      </div>
    </div>
  </section>;


const LandingDesktopFinalCTA = () =>
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
  }}>
      <SectionEyebrow align="center">24/7 · Yetkazib berish · 30–45 daq</SectionEyebrow>
      <h2 style={{
      fontFamily: "var(--serif)", fontWeight: 500,
      fontSize: 96, lineHeight: 1, color: "var(--white)", margin: "10px 0 24px",
      letterSpacing: "-0.02em"
    }}>
        Hoziroq <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Buyurtma</span><br />Qiling
      </h2>
      <p style={{ fontSize: 17, color: "var(--silver)", maxWidth: 540, margin: "0 auto 44px", lineHeight: 1.6 }}>
        Yetkazib berish 30–45 daqiqa ichida. Bizning Telegram bot orqali tezkor buyurtma yoki bevosita qo'ng'iroq qiling.
      </p>
      <div style={{ display: "inline-flex", gap: 14 }}>
        <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--gold hover:opacity-90" style={{ padding: "18px 32px", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 4 L2 11 L9 14 L12 22 L21 4 Z" /></svg>
          Telegram bot
        </a>
        <a href="tel:+998781130773" className="eob-btn eob-btn--outline hover:bg-white/5" style={{ padding: "18px 32px", fontSize: 13, letterSpacing: "0.1em", textDecoration: "none" }}>
          +998 78 113 07 73
        </a>
      </div>
    </div>
  </section>;


export const LandingDesktopFooter = () =>
<footer style={{ background: "#080604", padding: "64px 0 36px", borderTop: "1px solid var(--hairline-soft)" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
        <div>
          <Link href="/" style={{ textDecoration: "none" }} className="hover:opacity-80 transition-opacity block w-fit">
            <EobLogo size={20} />
          </Link>
          <div style={{ marginTop: 22, fontSize: 13, color: "var(--muted)", lineHeight: 1.7, maxWidth: 280 }}>
            Embassy of Burgers — Toshkentdagi 12 filial bilan dunyoni tatib ko'rishingiz uchun oshxona elchixonasi.
          </div>
        </div>
        {[
      { t: "Sayt", l: [{ name: "Bosh sahifa", href: "/" }, { name: "Menyu", href: "/menu" }, { name: "Filiallar", href: "/#branches" }, { name: "Biz haqimizda", href: "/#about" }] },
      { t: "Aloqa", l: [{ name: "+998 78 113 07 73", href: "tel:+998781130773" }, { name: "hello@embassy.uz", href: "mailto:hello@embassy.uz" }, { name: "Toshkent · UZ", href: null }, { name: "24/7 yetkazib berish", href: null }] },
      { t: "Ijtimoiy", l: [{ name: "Instagram", href: "https://www.instagram.com/burgerembassyuz/" }, { name: "Telegram bot", href: "https://t.me/burgerembassy_uzbot" }, { name: "Yandex xaritalar", href: "https://yandex.uz/maps/" }, { name: "Support", href: "https://t.me/burgerembassy_helpbot" }] }].
      map((c) =>
      <div key={c.t}>
            <div className="eob-label" style={{ marginBottom: 18 }}>{c.t}</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {c.l.map((i, idx) => <li key={idx} style={{ fontSize: 13, color: "var(--silver)", transition: "color 160ms" }}>
                {i.href ? <a href={i.href} style={{ color: "inherit", textDecoration: "none" }} className="hover:text-gold">{i.name}</a> : i.name}
              </li>)}
            </ul>
          </div>
      )}
      </div>
      <div style={{ borderTop: "1px solid var(--hairline-soft)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>
          © 2026 Embassy of Burgers · All rights reserved
        </div>
        <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Mission № 001 · Toshkent · UZ
        </div>
      </div>
    </div>
  </footer>;


const LandingDesktop = () =>
<div style={{ background: "var(--bg)", color: "var(--silver)", fontFamily: "var(--sans)" }}>
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