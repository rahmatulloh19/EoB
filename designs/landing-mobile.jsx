/* Embassy of Burgers — Landing Page (Mobile, 390 wide iPhone-ish) */

const LandingMobileNavbar = () => (
  <div style={{
    position: "sticky", top: 0, zIndex: 10,
    background: "rgba(13,13,13,0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid var(--hairline-soft)",
    padding: "14px 20px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
  }}>
    <EobLogo size={14} />
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <button className="eob-btn eob-btn--gold" style={{ padding: "9px 14px", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase" }}>
        Buyurtma
      </button>
      <button style={{
        background: "transparent", border: "1px solid var(--hairline)",
        width: 36, height: 36, color: "var(--gold)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6 H21 M3 12 H21 M3 18 H21"/></svg>
      </button>
    </div>
  </div>
);

const LandingMobileHero = () => (
  <section style={{ position: "relative", overflow: "hidden", minHeight: 620, display: "flex" }}>
    <video src="assets/burger-hero.mp4" autoPlay loop muted playsInline
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
    <div style={{
      position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
      background: "linear-gradient(180deg, rgba(13,13,13,0.45) 0%, rgba(13,13,13,0.7) 50%, rgba(13,13,13,0.95) 100%)",
    }} />
    <div style={{
      position: "absolute", zIndex: 1, top: "-20%", right: "-30%",
      width: 500, height: 500, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(212,175,55,0.22) 0%, transparent 60%)",
      mixBlendMode: "screen", pointerEvents: "none",
    }} />
    <div style={{
      position: "absolute", zIndex: 3, bottom: 16, right: 22,
      fontFamily: "var(--mono)", fontSize: 9, color: "var(--gold)",
      letterSpacing: "0.3em", textTransform: "uppercase",
      display: "flex", alignItems: "center", gap: 8,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", animation: "eobPulseM 2s ease-in-out infinite" }} />
      Live · № 001
    </div>
    <style>{`@keyframes eobPulseM { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>
    <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "120px 22px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      <div className="eob-label" style={{ fontSize: 9, marginBottom: 18 }}>
        EST. 2019 · Toshkent · 12 Filial
      </div>
      <h1 style={{
        fontFamily: "var(--serif)", fontWeight: 500,
        fontSize: 60, lineHeight: 0.95, letterSpacing: "-0.02em",
        color: "var(--white)", margin: 0,
      }}>
        Dunyoni<br/>
        <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Tatib</span><br/>Ko'r
      </h1>
      <p style={{ fontSize: 14, color: "var(--silver)", lineHeight: 1.6, marginTop: 22 }}>
        Har bir burger — alohida mamlakatning ta'mi. Embassy of Burgers — bu oshxona elchixonasi.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 28 }}>
        <button className="eob-btn eob-btn--gold" style={{ padding: "14px 18px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Buyurtma qilish →
        </button>
        <button className="eob-btn eob-btn--outline" style={{ padding: "14px 18px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Menyuni ko'r
        </button>
      </div>
    </div>
  </section>
);

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

const MobileBurgerCard = ({ b }) => (
  <div className="eob-card">
    <ImagePlaceholder height={210} caption={b.name.toUpperCase()} flag={b.flag} country={b.country} iconSize={56} />
    <div style={{ padding: "18px 20px 20px" }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--white)", fontWeight: 500 }}>{b.name}</div>
      <div style={{ marginTop: 8, fontSize: 12.5, color: "var(--silver)", lineHeight: 1.55 }}>{b.desc}</div>
      <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--gold)" }}>
          {b.price} <span style={{ fontSize: 10, color: "var(--muted)" }}>so'm</span>
        </div>
        <button className="eob-btn eob-btn--red" style={{ padding: "10px 14px", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase" }}>
          Buyurtma
        </button>
      </div>
    </div>
  </div>
);

const LandingMobileTopBurgers = () => (
  <section style={{ padding: "60px 22px" }}>
    <SectionEyebrow>Selection · 2026</SectionEyebrow>
    <SectionTitle accent="Burgerlar" size={36}>Eng Sevimli</SectionTitle>
    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 28 }}>
      {TOP_BURGERS.slice(0,3).map(b => <MobileBurgerCard key={b.name} b={b} />)}
    </div>
    <button className="eob-btn eob-btn--outline" style={{ marginTop: 24, padding: "14px 18px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", width: "100%" }}>
      Barchasini ko'r →
    </button>
  </section>
);

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
          <div style={{ marginTop: 22, fontFamily: "var(--serif)", fontSize: 16, color: "var(--white)", fontWeight: 500, lineHeight: 1.2 }}>{f.t}</div>
        </div>
      ))}
    </div>
  </section>
);

const LandingMobileBranches = () => (
  <section style={{ padding: "60px 22px" }}>
    <SectionEyebrow>12 Filial · Toshkent</SectionEyebrow>
    <SectionTitle accent="Filial" size={36}>Sizga Yaqin</SectionTitle>
    <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 28 }}>
      {window.BRANCHES.slice(0, 4).map((b, i) => (
        <div key={b.name} style={{ background: "var(--surface)", border: "1px solid var(--hairline-soft)", padding: "20px 18px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", letterSpacing: "0.2em" }}>№ {String(i+1).padStart(2,"0")}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--white)", marginTop: 4 }}>{b.name}</div>
            </div>
            <span style={{ fontSize: 9, color: b.hours === "24/7" ? "var(--gold)" : "var(--muted)", border: `1px solid ${b.hours === "24/7" ? "var(--gold)" : "var(--hairline-soft)"}`, padding: "3px 6px", letterSpacing: "0.16em" }}>
              {b.hours === "24/7" ? "24/7" : "Faol"}
            </span>
          </div>
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--hairline-soft)", fontSize: 12, color: "var(--silver)" }}>
            {b.addr}
            <div style={{ color: "var(--muted)", marginTop: 4 }}>{b.hours}</div>
          </div>
          <a href="#" style={{ display: "block", marginTop: 12, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
            Xaritada ko'r →
          </a>
        </div>
      ))}
    </div>
  </section>
);

const LandingMobileReviews = () => (
  <section style={{ padding: "60px 22px", background: "linear-gradient(180deg, #100E0A 0%, #0D0D0D 100%)" }}>
    <SectionEyebrow>Telegram</SectionEyebrow>
    <SectionTitle accent="Fikri" size={36}>Mijozlar</SectionTitle>
    <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
      {window.REVIEWS.slice(0, 2).map(r => (
        <div key={r.name} className="eob-card" style={{ padding: "20px 18px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #2a251a 0%, #14110c 100%)", border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold)", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 13 }}>{r.initials}</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "var(--white)", fontSize: 13 }}>{r.name}</div>
              <div style={{ color: "var(--muted)", fontSize: 10 }}>{r.date}</div>
            </div>
            <StarRating value={r.rating} size={10} />
          </div>
          <div style={{ fontSize: 12.5, color: "var(--silver)", lineHeight: 1.55 }}>"{r.text}"</div>
        </div>
      ))}
    </div>
    <button className="eob-btn eob-btn--outline" style={{ marginTop: 22, padding: "13px 18px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", width: "100%" }}>
      Izoh qoldirish · Telegram
    </button>
  </section>
);

const LandingMobileAbout = () => (
  <section style={{ padding: "60px 22px" }}>
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
    <div style={{ position: "relative", marginTop: 26 }}>
      <ImagePlaceholder height={280} caption="EMBASSY ATMOSPHERE" iconSize={70} />
      <div style={{ position: "absolute", top: 16, right: 16, width: 80, height: 80, borderRadius: "50%", border: "1px solid var(--gold)", color: "var(--gold)", background: "rgba(13,13,13,0.7)", fontFamily: "var(--serif)", fontStyle: "italic", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", lineHeight: 1.2, transform: "rotate(-6deg)" }}>
        <div style={{ fontSize: 7, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--silver)" }}>EST.</div>
        <div style={{ fontSize: 22, color: "var(--gold)" }}>2019</div>
      </div>
    </div>
    <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 22, color: "var(--gold)", textDecoration: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg>
      Instagram · @embassyburgers
    </a>
  </section>
);

const LandingMobileFinalCTA = () => (
  <section style={{ position: "relative", overflow: "hidden", padding: "80px 22px", borderTop: "1px solid var(--hairline-soft)", borderBottom: "1px solid var(--hairline-soft)", textAlign: "center" }}>
    <div style={{ position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.16) 0%, transparent 60%)", pointerEvents: "none" }} />
    <div style={{ position: "relative" }}>
      <SectionEyebrow align="center">24/7 · 30–45 daq</SectionEyebrow>
      <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 48, lineHeight: 1, color: "var(--white)", margin: "8px 0 18px", letterSpacing: "-0.02em" }}>
        Hoziroq <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Buyurtma</span><br/>Qiling
      </h2>
      <p style={{ fontSize: 13, color: "var(--silver)", lineHeight: 1.6, marginBottom: 28 }}>
        Yetkazib berish 30–45 daqiqa ichida · 24/7
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <button className="eob-btn eob-btn--gold" style={{ padding: "14px 20px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Telegram bot
        </button>
        <button className="eob-btn eob-btn--outline" style={{ padding: "14px 20px", fontSize: 12 }}>
          +998 71 200 00 00
        </button>
      </div>
    </div>
  </section>
);

const LandingMobileFooter = () => (
  <footer style={{ background: "#080604", padding: "40px 22px 28px", borderTop: "1px solid var(--hairline-soft)" }}>
    <EobLogo size={16} />
    <div style={{ marginTop: 18, fontSize: 12, color: "var(--muted)", lineHeight: 1.7 }}>
      Toshkentdagi 12 filial bilan oshxona elchixonasi.
    </div>
    <div style={{ display: "flex", gap: 14, marginTop: 20 }}>
      {["Instagram", "Telegram", "TikTok"].map(s => (
        <span key={s} style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>{s}</span>
      ))}
    </div>
    <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid var(--hairline-soft)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>
      © 2026 Embassy of Burgers
    </div>
  </footer>
);

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

window.LandingMobile = LandingMobile;
