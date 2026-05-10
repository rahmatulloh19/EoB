/* Embassy of Burgers — Menu Page (Desktop, 1440 wide) */

const MenuDesktopNavbar = () => (
  <div style={{
    position: "sticky", top: 0, zIndex: 10,
    background: "rgba(13,13,13,0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid var(--hairline-soft)",
  }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 64px", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 48 }}>
      <EobLogo size={20} />
      <nav style={{ display: "flex", gap: 44, justifyContent: "center" }}>
        {["Menyu", "Filiallar", "Biz haqimizda"].map((item, i) => (
          <a key={item} href="#" style={{ fontFamily: "var(--sans)", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: i === 0 ? "var(--gold)" : "var(--silver)", textDecoration: "none", fontWeight: 500 }}>{item}</a>
        ))}
      </nav>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 24 }}>
        <a href="tel:+998712000000" style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--silver)", textDecoration: "none" }}>+998 71 200 00 00</a>
        <button className="eob-btn eob-btn--gold" style={{ padding: "12px 22px", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase" }}>Buyurtma qilish</button>
      </div>
    </div>
  </div>
);

const MenuDesktopHeader = () => (
  <section style={{ position: "relative", overflow: "hidden", padding: "80px 64px 60px", borderBottom: "1px solid var(--hairline-soft)" }}>
    <div style={{ position: "absolute", top: "-30%", right: "-15%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
    <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 60, alignItems: "flex-end" }}>
      <div>
        <div className="eob-label" style={{ marginBottom: 18, display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: 32, height: 1, background: "var(--gold)" }} />
          <span>Menu · 24 davlat · 32 burger</span>
        </div>
        <h1 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 88, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--white)", margin: 0 }}>
          To'liq <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Menyu</span>
        </h1>
        <p style={{ fontSize: 16, color: "var(--silver)", maxWidth: 520, marginTop: 24, lineHeight: 1.6 }}>
          Har bir burger boshqa mamlakatdan keladi. Quyidagi tanlangan klassik va mavsumiy retseptlar — sizning diplomatik missiyangiz.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "24px 28px", background: "var(--surface)", border: "1px solid var(--hairline-soft)" }}>
        <div className="eob-label">Bugungi maxsus</div>
        <div style={{ fontFamily: "var(--serif)", fontSize: 26, color: "var(--white)" }}>Wagyu Tokyo · -15%</div>
        <div style={{ fontSize: 13, color: "var(--silver)", lineHeight: 1.6 }}>
          Yaponiyadan import wagyu kotleti. Faqat 18:00 dan 22:00 gacha.
        </div>
        <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 4 }}>
          <span style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--gold)" }}>83 300</span>
          <span style={{ fontSize: 13, color: "var(--muted)", textDecoration: "line-through" }}>98 000</span>
          <span style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)" }}>Cheklangan</span>
        </div>
      </div>
    </div>
  </section>
);

const MenuDesktopFilters = () => (
  <div style={{ position: "sticky", top: 73, zIndex: 9, background: "rgba(13,13,13,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--hairline-soft)" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ display: "flex", gap: 0 }}>
        {[
          { k: "Burgerlar", c: 8, active: true },
          { k: "Setlar", c: 4 },
          { k: "Garnituralar", c: 4 },
          { k: "Ichimliklar", c: 4 },
        ].map(t => (
          <button key={t.k} style={{
            background: "transparent",
            border: "none",
            padding: "22px 26px",
            color: t.active ? "var(--gold)" : "var(--silver)",
            borderBottom: t.active ? "2px solid var(--gold)" : "2px solid transparent",
            fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500,
            cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10,
          }}>
            {t.k}
            <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)" }}>{String(t.c).padStart(2,"0")}</span>
          </button>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 11, color: "var(--muted)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
        <span>Saralash:</span>
        <span style={{ color: "var(--silver)" }}>Mashhur ↓</span>
        <span style={{ width: 1, height: 18, background: "var(--hairline-soft)" }} />
        <button style={{ background: "transparent", color: "var(--gold)", border: "1px solid var(--gold)", padding: "10px 16px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer" }}>
          Filtr
        </button>
      </div>
    </div>
  </div>
);

const MenuItemCard = ({ b }) => (
  <div className="eob-card" style={{ display: "flex", flexDirection: "column" }}>
    <ImagePlaceholder height={220} caption={b.name.toUpperCase()} flag={b.flag} country={b.country} iconSize={64} />
    <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--white)", fontWeight: 500, lineHeight: 1.15 }}>
        {b.name}
      </div>
      <div style={{ marginTop: 8, fontSize: 12.5, color: "var(--silver)", lineHeight: 1.55, flex: 1 }}>
        {b.desc}
      </div>
      <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--gold)" }}>
          {b.price} <span style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>so'm</span>
        </div>
        <button className="eob-btn eob-btn--red" style={{ padding: "10px 16px", fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Buyurtma
        </button>
      </div>
    </div>
  </div>
);

const MenuDesktopGrid = () => (
  <section style={{ padding: "60px 64px 100px" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
        <div>
          <SectionEyebrow>Section · 01</SectionEyebrow>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: 38, color: "var(--white)", fontWeight: 500, margin: 0 }}>
            Burgerlar <span style={{ color: "var(--muted)", fontSize: 18, fontFamily: "var(--mono)", marginLeft: 12 }}>· 8 ta</span>
          </h3>
        </div>
        <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.1em", maxWidth: 320, textAlign: "right" }}>
          Klassik retseptlar 8 ta davlatdan. Har biri o'z mamlakat tomonidan tasdiqlangan.
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {FULL_MENU.Burgerlar.map(b => <MenuItemCard key={b.name} b={b} />)}
      </div>

      <div style={{ marginTop: 80, marginBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <SectionEyebrow>Section · 02</SectionEyebrow>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: 38, color: "var(--white)", fontWeight: 500, margin: 0 }}>
            Setlar <span style={{ color: "var(--muted)", fontSize: 18, fontFamily: "var(--mono)", marginLeft: 12 }}>· 4 ta</span>
          </h3>
        </div>
        <div style={{ fontSize: 12, color: "var(--muted)" }}>Tejamkor kombinatsiyalar — to'liq missiyalar.</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {FULL_MENU.Setlar.map(b => <MenuItemCard key={b.name} b={b} />)}
      </div>

      <div style={{ marginTop: 80, marginBottom: 32 }}>
        <SectionEyebrow>Section · 03 + 04</SectionEyebrow>
        <h3 style={{ fontFamily: "var(--serif)", fontSize: 38, color: "var(--white)", fontWeight: 500, margin: 0 }}>
          Garnituralar &amp; Ichimliklar
        </h3>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {[...FULL_MENU.Garnituralar, ...FULL_MENU.Ichimliklar].slice(0,4).map(b => <MenuItemCard key={b.name} b={b} />)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: 20 }}>
        {[...FULL_MENU.Garnituralar, ...FULL_MENU.Ichimliklar].slice(4,8).map(b => <MenuItemCard key={b.name} b={b} />)}
      </div>
    </div>
  </section>
);

const MenuDesktop = () => (
  <div style={{ background: "var(--bg)", color: "var(--silver)", fontFamily: "var(--sans)" }}>
    <MenuDesktopNavbar />
    <MenuDesktopHeader />
    <MenuDesktopFilters />
    <MenuDesktopGrid />
    <LandingDesktopFooter />
  </div>
);

window.MenuDesktop = MenuDesktop;
