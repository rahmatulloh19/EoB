/* Embassy of Burgers — Menu Page (Mobile, 390 wide) */

const MenuMobileNavbar = () => (
  <div style={{
    position: "sticky", top: 0, zIndex: 10,
    background: "rgba(13,13,13,0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid var(--hairline-soft)",
    padding: "14px 20px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
  }}>
    <EobLogo size={14} />
    <button style={{ background: "transparent", border: "1px solid var(--hairline)", width: 36, height: 36, color: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6 H21 M3 12 H21 M3 18 H21"/></svg>
    </button>
  </div>
);

const MenuMobileHeader = () => (
  <section style={{ position: "relative", overflow: "hidden", padding: "32px 22px 28px" }}>
    <div style={{ position: "absolute", top: "-50%", right: "-30%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.14) 0%, transparent 60%)", pointerEvents: "none" }} />
    <div style={{ position: "relative" }}>
      <div className="eob-label" style={{ marginBottom: 14, fontSize: 9 }}>
        Menu · 24 davlat · 32 burger
      </div>
      <h1 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 50, lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--white)", margin: 0 }}>
        To'liq <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Menyu</span>
      </h1>
      <p style={{ fontSize: 13, color: "var(--silver)", marginTop: 14, lineHeight: 1.6 }}>
        Har bir burger boshqa mamlakatdan keladi. Sizning diplomatik missiyangiz.
      </p>
    </div>
  </section>
);

const MenuMobileFilters = () => (
  <div style={{ position: "sticky", top: 65, zIndex: 9, background: "rgba(13,13,13,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--hairline-soft)" }}>
    <div style={{ display: "flex", overflowX: "auto", gap: 0, padding: "0 22px" }}>
      {[
        { k: "Burgerlar", c: 8, active: true },
        { k: "Setlar", c: 4 },
        { k: "Garnitura", c: 4 },
        { k: "Ichimlik", c: 4 },
      ].map(t => (
        <button key={t.k} style={{
          background: "transparent", border: "none",
          padding: "16px 14px",
          color: t.active ? "var(--gold)" : "var(--silver)",
          borderBottom: t.active ? "2px solid var(--gold)" : "2px solid transparent",
          fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500,
          whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: 6,
        }}>
          {t.k}
          <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)" }}>{String(t.c).padStart(2,"0")}</span>
        </button>
      ))}
    </div>
  </div>
);

const MenuMobileItemCard = ({ b }) => (
  <div className="eob-card">
    <ImagePlaceholder height={200} caption={b.name.toUpperCase()} flag={b.flag} country={b.country} iconSize={56} />
    <div style={{ padding: "16px 18px 18px" }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--white)", fontWeight: 500 }}>{b.name}</div>
      <div style={{ marginTop: 6, fontSize: 12, color: "var(--silver)", lineHeight: 1.55 }}>{b.desc}</div>
      <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--gold)" }}>
          {b.price} <span style={{ fontSize: 10, color: "var(--muted)" }}>so'm</span>
        </div>
        <button className="eob-btn eob-btn--red" style={{ padding: "9px 12px", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase" }}>
          Buyurtma
        </button>
      </div>
    </div>
  </div>
);

const MenuMobileGrid = () => (
  <section style={{ padding: "32px 22px 120px" }}>
    <div style={{ marginBottom: 18 }}>
      <SectionEyebrow>Section · 01</SectionEyebrow>
      <h3 style={{ fontFamily: "var(--serif)", fontSize: 26, color: "var(--white)", fontWeight: 500, margin: 0 }}>
        Burgerlar <span style={{ color: "var(--muted)", fontSize: 14, fontFamily: "var(--mono)", marginLeft: 8 }}>· 8</span>
      </h3>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {FULL_MENU.Burgerlar.slice(0, 4).map(b => <MenuMobileItemCard key={b.name} b={b} />)}
    </div>
    <div style={{ marginTop: 36, marginBottom: 18 }}>
      <SectionEyebrow>Section · 02</SectionEyebrow>
      <h3 style={{ fontFamily: "var(--serif)", fontSize: 26, color: "var(--white)", fontWeight: 500, margin: 0 }}>
        Setlar <span style={{ color: "var(--muted)", fontSize: 14, fontFamily: "var(--mono)", marginLeft: 8 }}>· 4</span>
      </h3>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {FULL_MENU.Setlar.slice(0, 2).map(b => <MenuMobileItemCard key={b.name} b={b} />)}
    </div>
  </section>
);

const MenuMobileStickyCTA = () => (
  <div style={{
    position: "absolute", bottom: 0, left: 0, right: 0,
    padding: "14px 22px",
    background: "linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.95) 30%, rgba(13,13,13,1) 100%)",
    paddingTop: 28,
  }}>
    <button className="eob-btn eob-btn--gold" style={{ padding: "16px 22px", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", width: "100%", boxShadow: "0 8px 30px rgba(212,175,55,0.25)" }}>
      Buyurtma qilish · 0 ta · 0 so'm
    </button>
  </div>
);

const MenuMobile = () => (
  <div style={{ background: "var(--bg)", color: "var(--silver)", fontFamily: "var(--sans)", position: "relative", minHeight: "100%" }}>
    <MenuMobileNavbar />
    <MenuMobileHeader />
    <MenuMobileFilters />
    <MenuMobileGrid />
    <MenuMobileStickyCTA />
  </div>
);

window.MenuMobile = MenuMobile;
