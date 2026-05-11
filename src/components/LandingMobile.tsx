"use client";
import React from "react";
import Link from "next/link";
import branchesData from "@/lib/branches.json";
import menuData from "@/lib/data.json";
import { EobLogo, SectionEyebrow, SectionTitle, StarRating } from "./shared";

const REVIEWS = [
  { name: "Aziza K.", initials: "AK", date: "3 kun oldin", rating: 5, text: "Wagyu Tokyo — bu sherinkalik. Yetkazib berish 28 daqiqada keldi, hali issiq. Brioche bulochka — paxta kabi yumshoq." },
  { name: "Sardor M.", initials: "SM", date: "1 hafta oldin", rating: 5, text: "Diplomat eng sevimli burgerim bo'lib qoldi. Karamellangan piyozning balansi mukammal. Bu yerda haqiqiy san'at." },
];

/* ── Navbar ── */
const LandingMobileNavbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(13,13,13,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--hairline-soft)", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none" }}><EobLogo size={14} /></Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--gold" style={{ padding: "9px 14px", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none" }}>
            Buyurtma
          </a>
          <button onClick={() => setOpen(true)} style={{ background: "transparent", border: "1px solid var(--hairline)", width: 36, height: 36, color: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6 H21 M3 12 H21 M3 18 H21" /></svg>
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", zIndex: 100, opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity 0.3s ease" }} />

      {/* Drawer */}
      <div style={{ position: "fixed", top: 0, left: 0, bottom: 0, width: 280, background: "#080604", borderRight: "1px solid var(--hairline-soft)", zIndex: 101, transform: open ? "translateX(0)" : "translateX(-100%)", transition: "transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)", display: "flex", flexDirection: "column", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36 }}>
          <EobLogo size={14} />
          <button onClick={() => setOpen(false)} style={{ background: "transparent", border: "none", color: "var(--silver)", cursor: "pointer", fontSize: 26, lineHeight: 1, padding: 0 }}>×</button>
        </div>
        <nav style={{ display: "flex", flexDirection: "column" }}>
          {[
            { name: "Bosh sahifa", href: "/" },
            { name: "Menyu", href: "/menu" },
            { name: "Filiallar", href: "/#branches" },
            { name: "Biz haqimizda", href: "/#about" },
          ].map(item => (
            <Link key={item.name} href={item.href} onClick={() => setOpen(false)} style={{ fontFamily: "var(--sans)", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--silver)", textDecoration: "none", padding: "18px 0", borderBottom: "1px solid var(--hairline-soft)", display: "block" }}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: "auto", paddingTop: 24 }}>
          <a href="tel:+998781130773" style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--silver)", textDecoration: "none", letterSpacing: "0.05em" }}>+998 78 113 07 73</a>
        </div>
      </div>
    </>
  );
};

/* ── Hero ── */
const LandingMobileHero = () => (
  <section style={{ position: "relative", overflow: "hidden", minHeight: 620, display: "flex" }}>
    <video src="/assets/burger-hero.mp4" autoPlay loop muted playsInline poster="/images/3d5e1945603872631c7747b99ad14380.WEBP"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
    <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", background: "linear-gradient(180deg, rgba(13,13,13,0.45) 0%, rgba(13,13,13,0.7) 50%, rgba(13,13,13,0.95) 100%)" }} />
    <div style={{ position: "absolute", zIndex: 1, top: "-20%", right: "-30%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.22) 0%, transparent 60%)", mixBlendMode: "screen", pointerEvents: "none" }} />
    <div style={{ position: "absolute", zIndex: 3, bottom: 16, right: 22, fontFamily: "var(--mono)", fontSize: 9, color: "var(--gold)", letterSpacing: "0.3em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", animation: "eobPulseM 2s ease-in-out infinite" }} />
      Live · № 001
    </div>
    <style>{`@keyframes eobPulseM { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "120px 22px 44px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      <div className="eob-label" style={{ fontSize: 9, marginBottom: 18 }}>EST. 2019 · Toshkent · 12 Filial</div>
      <h1 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 60, lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--white)", margin: 0 }}>
        Dunyoni<br />
        <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Tatib</span><br />Ko'r
      </h1>
      <p style={{ fontSize: 14, color: "var(--silver)", lineHeight: 1.6, marginTop: 22 }}>
        Har bir burger — alohida mamlakatning ta'mi. Embassy of Burgers — bu oshxona elchixonasi.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 28 }}>
        <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--gold" style={{ padding: "14px 18px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", justifyContent: "center" }}>
          Buyurtma qilish →
        </a>
        <Link href="/menu" className="eob-btn eob-btn--outline" style={{ padding: "14px 18px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", justifyContent: "center" }}>
          Menyuni ko'r
        </Link>
      </div>
    </div>
  </section>
);

/* ── Stats ── */
const LandingMobileStats = () => (
  <section style={{ borderTop: "1px solid var(--hairline-soft)", borderBottom: "1px solid var(--hairline-soft)", padding: "24px 22px" }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
      {[
        { n: "12", l: "Filial" },
        { n: "24/7", l: "Yetkazib berish" },
        { n: "50K+", l: "Muxlis" },
        { n: "4.7", l: "Reyting" },
      ].map(s => (
        <div key={s.n} className="eob-stat" style={{ paddingLeft: 12 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 30, color: "var(--white)", lineHeight: 1 }}>{s.n}</div>
          <div style={{ marginTop: 6, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);

/* ── Top Burgers ── */
const MobileBurgerCard = ({ b }: { b: any }) => {
  const priceFormatted = new Intl.NumberFormat("ru-RU").format(parseFloat(b.price || "0")).replace(",", " ");
  const [imgError, setImgError] = React.useState(false);
  return (
    <div className="eob-card" style={{ display: "flex", flexDirection: "column" }}>
      {b.image && !imgError ? (
        <div style={{ height: 210, overflow: "hidden", background: "#111", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.image} alt={b.name} onError={() => setImgError(true)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ) : (
        <div style={{ height: 210, background: "#111" }} />
      )}
      <div style={{ padding: "18px 20px 20px" }}>
        <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--white)", fontWeight: 500 }}>{b.name}</div>
        <div style={{ marginTop: 8, fontSize: 12.5, color: "var(--silver)", lineHeight: 1.55 }}>{b.description}</div>
        <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--gold)" }}>
            {priceFormatted} <span style={{ fontSize: 10, color: "var(--muted)" }}>so'm</span>
          </div>
          <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--red" style={{ padding: "10px 14px", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none" }}>
            Buyurtma
          </a>
        </div>
      </div>
    </div>
  );
};

const LandingMobileTopBurgers = () => {
  const burgersCategory = menuData.find(cat => cat.name === "Бургеры");
  const topItems = burgersCategory ? burgersCategory.products.slice(0, 3) : [];
  return (
    <section style={{ padding: "60px 22px" }}>
      <SectionEyebrow>Selection · 2026</SectionEyebrow>
      <SectionTitle accent="Burgerlar" size={36}>Eng Sevimli</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 28 }}>
        {topItems.map(b => <MobileBurgerCard key={b.id} b={b} />)}
      </div>
      <Link href="/menu" className="eob-btn eob-btn--outline" style={{ marginTop: 24, padding: "14px 18px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", display: "flex", justifyContent: "center" }}>
        Barchasini ko'r →
      </Link>
    </section>
  );
};

/* ── Why ── */
const LandingMobileWhy = () => (
  <section style={{ padding: "60px 22px", background: "linear-gradient(180deg, #0D0D0D 0%, #100E0A 100%)" }}>
    <SectionEyebrow>Standart</SectionEyebrow>
    <SectionTitle accent="Embassy?" size={36}>Nima uchun</SectionTitle>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 28 }}>
      {[
        { n: "01", t: "Toza ingredientlar" },
        { n: "02", t: "Tezkor yetkazish" },
        { n: "03", t: "Kunlik non" },
        { n: "04", t: "12 manzil" },
      ].map(f => (
        <div key={f.n} className="eob-card" style={{ padding: "20px 16px" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--gold)", letterSpacing: "0.2em" }}>{f.n}</div>
          <div style={{ marginTop: 14, fontFamily: "var(--serif)", fontSize: 16, color: "var(--white)", fontWeight: 500, lineHeight: 1.2 }}>{f.t}</div>
        </div>
      ))}
    </div>
  </section>
);

/* ── Branches ── */
const LandingMobileBranches = () => {
  const [branches, setBranches] = React.useState<any[]>(branchesData);
  const [status, setStatus] = React.useState("idle");
  const [errorMsg, setErrorMsg] = React.useState("");

  const findNearest = () => {
    setStatus("locating");
    setErrorMsg("");
    const processLocation = (lat: number, lng: number) => {
      const dist = (a: number, b: number, c: number, d: number) => {
        const R = 6371, toRad = (x: number) => x * Math.PI / 180;
        const dLat = toRad(c - a), dLng = toRad(d - b);
        const x = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a)) * Math.cos(toRad(c)) * Math.sin(dLng / 2) ** 2;
        return 2 * R * Math.asin(Math.sqrt(x));
      };
      const sorted = branchesData.map(br => ({ ...br, km: dist(lat, lng, parseFloat(br.latitude as unknown as string), parseFloat(br.longitude as unknown as string)) }));
      sorted.sort((a, b) => a.km - b.km);
      setBranches(sorted);
      setStatus("done");
    };
    if (!navigator.geolocation) {
      setStatus("error"); setErrorMsg("Brauzeringiz geolokatsiyani qo'llab-quvvatlamaydi"); return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => processLocation(pos.coords.latitude, pos.coords.longitude),
      err => {
        setStatus("error");
        if (err.code === err.PERMISSION_DENIED) setErrorMsg("Joylashuvga ruxsat berilmadi");
        else if (err.code === err.TIMEOUT) setErrorMsg("Vaqt tugadi, qayta urining");
        else setErrorMsg("Joylashuv aniqlanmadi");
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  };

  return (
    <section id="branches" style={{ padding: "60px 22px" }}>
      <SectionEyebrow>{branchesData.length} ta filial · Toshkent</SectionEyebrow>
      <SectionTitle accent="Filial" size={36}>Sizga Yaqin</SectionTitle>
      <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
        <button onClick={findNearest} disabled={status === "locating"} className="eob-btn eob-btn--gold" style={{ padding: "13px 20px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", opacity: status === "locating" ? 0.6 : 1, cursor: status === "locating" ? "wait" : "pointer", justifyContent: "center" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22 C12 22 4 14 4 9 A8 8 0 0 1 20 9 C20 14 12 22 12 22 Z" /><circle cx="12" cy="9" r="2.5" /></svg>
          {status === "locating" ? "Aniqlanmoqda…" : "Eng yaqin filialni top"}
        </button>
        {status === "error" && <div style={{ fontSize: 10, color: "var(--red)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{errorMsg}</div>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
        {branches.slice(0, 4).map((b, i) => {
          const isNearest = status === "done" && i === 0;
          return (
            <div key={b.id || b.name_uz} style={{ background: isNearest ? "linear-gradient(180deg, rgba(212,175,55,0.10) 0%, var(--surface) 100%)" : "var(--surface)", border: isNearest ? "1px solid var(--gold)" : "1px solid var(--hairline-soft)", padding: "20px 18px", position: "relative", transition: "all 280ms ease", boxShadow: isNearest ? "0 8px 30px rgba(212,175,55,0.15)" : "none" }}>
              {b.km !== undefined && i === 0 && (
                <div style={{ position: "absolute", top: -10, left: 16, background: "var(--gold)", color: "#1a1408", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", padding: "4px 10px", fontWeight: 600 }}>
                  Eng yaqin · {b.km.toFixed(1)} km
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", letterSpacing: "0.2em" }}>
                    {b.km !== undefined ? `${b.km.toFixed(1)} KM` : `№ ${String(i + 1).padStart(2, "0")}`}
                  </div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--white)", marginTop: 4, fontWeight: 500 }}>{b.name_uz}</div>
                </div>
                <span style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: b.is_open ? "var(--gold)" : "var(--red)", border: `1px solid ${b.is_open ? "var(--gold)" : "var(--hairline-soft)"}`, padding: "3px 7px", flexShrink: 0 }}>
                  {b.is_open ? "Ochiq" : "Yopiq"}
                </span>
              </div>
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--hairline-soft)", fontSize: 12, color: "var(--silver)", lineHeight: 1.6 }}>
                {b.address_uz}
                <div style={{ color: "var(--muted)", marginTop: 2 }}>{b.hours} · {b.phone}</div>
              </div>
              <a href={`https://yandex.uz/maps/?pt=${b.longitude},${b.latitude}&z=16`} target="_blank" rel="noopener noreferrer" style={{ display: "block", marginTop: 12, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
                Xaritada ko'r →
              </a>
            </div>
          );
        })}
      </div>
      {branchesData.length > 4 && (
        <a href="https://yandex.uz/maps/" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--outline" style={{ marginTop: 20, padding: "13px 18px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", display: "flex", justifyContent: "center" }}>
          Barcha {branchesData.length} ta filial ↓
        </a>
      )}
    </section>
  );
};

/* ── Reviews ── */
const LandingMobileReviews = () => (
  <section style={{ padding: "60px 22px", background: "linear-gradient(180deg, #100E0A 0%, #0D0D0D 100%)" }}>
    <SectionEyebrow>Telegram</SectionEyebrow>
    <SectionTitle accent="Fikri" size={36}>Mijozlar</SectionTitle>
    <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
      {REVIEWS.map(r => (
        <div key={r.name} className="eob-card" style={{ padding: "20px 18px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #2a251a 0%, #14110c 100%)", border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold)", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 13 }}>{r.initials}</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "var(--white)", fontSize: 13, fontWeight: 500 }}>{r.name}</div>
              <div style={{ color: "var(--muted)", fontSize: 10, marginTop: 2 }}>{r.date}</div>
            </div>
            <StarRating value={r.rating} size={10} />
          </div>
          <div style={{ fontSize: 12.5, color: "var(--silver)", lineHeight: 1.55 }}>"{r.text}"</div>
        </div>
      ))}
    </div>
    <a href="https://t.me/burgerembassy_helpbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--outline" style={{ marginTop: 22, padding: "13px 18px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", display: "flex", justifyContent: "center" }}>
      Izoh qoldirish · Telegram
    </a>
  </section>
);

/* ── About ── */
const LandingMobileAbout = () => (
  <section id="about" style={{ padding: "60px 22px" }}>
    <SectionEyebrow>Manifest · 2019</SectionEyebrow>
    <SectionTitle accent="Haqimizda" size={36}>Biz</SectionTitle>
    <div style={{ marginTop: 22, fontSize: 14, color: "var(--silver)", lineHeight: 1.7 }}>
      <p style={{ margin: "0 0 14px" }}>
        Embassy of Burgers 2019 yilda bitta g'oyadan tug'ilgan: <em style={{ color: "var(--gold)" }}>burger — bu madaniy elchi</em>.
      </p>
      <p style={{ margin: 0 }}>
        Bugun 12 ta filial, 24 xil burger va 50 mingdan ortiq mehmonlar bilan biz dunyoning ta'mlarini Toshkentga olib kelamiz.
      </p>
    </div>
    <div style={{ display: "flex", gap: 24, marginTop: 20 }}>
      <a href="https://www.instagram.com/burgerembassyuz/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--gold)", textDecoration: "none", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
        Instagram
      </a>
      <a href="https://t.me/burgerembassy_helpbot" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--silver)", textDecoration: "none", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 4 L2 11 L9 14 L12 22 L21 4 Z" /></svg>
        Telegram
      </a>
    </div>
    <div style={{ position: "relative", marginTop: 26, height: 280, overflow: "hidden", border: "1px solid var(--hairline-soft)", background: "#111" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/3d5e1945603872631c7747b99ad14380.WEBP" alt="Embassy of Burgers" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  </section>
);

/* ── Final CTA ── */
const LandingMobileFinalCTA = () => (
  <section style={{ position: "relative", overflow: "hidden", padding: "80px 22px", borderTop: "1px solid var(--hairline-soft)", borderBottom: "1px solid var(--hairline-soft)", textAlign: "center" }}>
    <div style={{ position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.16) 0%, transparent 60%)", pointerEvents: "none" }} />
    <div style={{ position: "relative" }}>
      <SectionEyebrow align="center">24/7 · 30–45 daq</SectionEyebrow>
      <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 48, lineHeight: 1, color: "var(--white)", margin: "8px 0 18px", letterSpacing: "-0.02em" }}>
        Hoziroq <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Buyurtma</span><br />Qiling
      </h2>
      <p style={{ fontSize: 13, color: "var(--silver)", lineHeight: 1.6, marginBottom: 28 }}>
        Yetkazib berish 30–45 daqiqa ichida · 24/7
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--gold" style={{ padding: "14px 20px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", justifyContent: "center" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 4 L2 11 L9 14 L12 22 L21 4 Z" /></svg>
          Telegram bot
        </a>
        <a href="tel:+998781130773" className="eob-btn eob-btn--outline" style={{ padding: "14px 20px", fontSize: 12, textDecoration: "none", justifyContent: "center" }}>
          +998 78 113 07 73
        </a>
      </div>
    </div>
  </section>
);

/* ── Footer ── */
const LandingMobileFooter = () => (
  <footer style={{ background: "#080604", padding: "40px 22px 28px", borderTop: "1px solid var(--hairline-soft)" }}>
    <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}><EobLogo size={16} /></Link>
    <div style={{ marginTop: 18, fontSize: 12, color: "var(--muted)", lineHeight: 1.7 }}>
      Toshkentdagi 12 filial bilan oshxona elchixonasi.
    </div>
    <div style={{ display: "flex", gap: 20, marginTop: 20, flexWrap: "wrap" }}>
      {[
        { name: "Instagram", href: "https://www.instagram.com/burgerembassyuz/" },
        { name: "Telegram", href: "https://t.me/burgerembassy_uzbot" },
        { name: "Xarita", href: "https://yandex.uz/maps/" },
      ].map(s => (
        <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>{s.name}</a>
      ))}
    </div>
    <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid var(--hairline-soft)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>
      © 2026 Embassy of Burgers · All rights reserved
    </div>
  </footer>
);

/* ── Root ── */
const LandingMobile = () => (
  <div style={{ background: "var(--bg)", color: "var(--silver)", fontFamily: "var(--sans)" }}>
    <LandingMobileNavbar />
    <LandingMobileHero />
    <LandingMobileStats />
    <LandingMobileTopBurgers />
    <LandingMobileWhy />
    <LandingMobileBranches />
    <LandingMobileReviews />
    <LandingMobileAbout />
    <LandingMobileFinalCTA />
    <LandingMobileFooter />
  </div>
);

export default LandingMobile;
