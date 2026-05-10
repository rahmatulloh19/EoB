/* Hero variant components — Desktop + Mobile */

// ─── Shared content (label + headline + buttons + meta) ───
const HeroContent = ({ size = "desktop" }) => {
  const isMobile = size === "mobile";
  return (
    <div>
      <div className="eob-label" style={{ marginBottom: isMobile ? 18 : 28, display: "flex", alignItems: "center", gap: 14, fontSize: isMobile ? 9 : 11 }}>
        <span style={{ width: isMobile ? 22 : 32, height: 1, background: "var(--gold)" }} />
        <span>EST. 2019 · Toshkent · 12 Filial</span>
      </div>
      <h1 style={{
        fontFamily: "var(--serif)", fontWeight: 500,
        fontSize: isMobile ? 56 : 96, lineHeight: 0.97, letterSpacing: "-0.02em",
        color: "var(--white)", margin: 0,
      }}>
        {isMobile ? <>Dunyoni<br/><span style={{ fontStyle: "italic", color: "var(--gold)" }}>Tatib</span><br/>Ko'r</>
                 : <>Dunyoni<br/><span style={{ fontStyle: "italic", color: "var(--gold)" }}>Tatib</span> Ko'r</>}
      </h1>
      <p style={{
        fontFamily: "var(--sans)", fontSize: isMobile ? 13 : 17, lineHeight: 1.6,
        color: "var(--silver)", marginTop: isMobile ? 18 : 28, maxWidth: isMobile ? "100%" : 440,
      }}>
        Har bir burger — alohida mamlakatning ta'mi. Embassy of Burgers.
      </p>
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 10 : 14, marginTop: isMobile ? 22 : 36 }}>
        <button className="eob-btn eob-btn--gold" style={{ padding: isMobile ? "14px 18px" : "15px 26px", fontSize: isMobile ? 11 : 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Buyurtma qilish →
        </button>
        <button className="eob-btn eob-btn--outline" style={{ padding: isMobile ? "14px 18px" : "15px 26px", fontSize: isMobile ? 11 : 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Menyuni ko'r
        </button>
      </div>
    </div>
  );
};

const VariantStamp = ({ children, size = 70 }) => (
  <div style={{
    position: "absolute", top: 16, right: 16,
    width: size, height: size, borderRadius: "50%",
    border: "1px solid var(--gold)", color: "var(--gold)",
    fontFamily: "var(--serif)", fontStyle: "italic", fontSize: size * 0.16,
    display: "flex", alignItems: "center", justifyContent: "center",
    textAlign: "center", lineHeight: 1.1, transform: "rotate(8deg)",
    background: "rgba(13,13,13,0.7)", backdropFilter: "blur(4px)", zIndex: 3,
  }}>{children}</div>
);

// ═══ VARIANT 1: Video circle (current) ═══════════════════════════
const Hero_VideoCircle = ({ size = "desktop" }) => {
  const isMobile = size === "mobile";
  const plate = isMobile ? 220 : 360;
  const outer = isMobile ? 270 : 500;
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: isMobile ? "32px 22px 50px" : "80px 64px 80px", minHeight: isMobile ? "auto" : 620 }}>
      <div style={{ position: "absolute", top: "-20%", right: isMobile ? "-40%" : "-10%", width: isMobile ? 500 : 800, height: isMobile ? 500 : 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr", gap: isMobile ? 28 : 60, alignItems: "center" }}>
        <HeroContent size={size} />
        <div style={{ position: "relative", height: isMobile ? 280 : 480, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", width: outer, height: outer, borderRadius: "50%", border: "1px solid var(--hairline)" }} />
          <div style={{
            width: plate, height: plate, borderRadius: "50%", background: "#14110c",
            border: "1px solid var(--hairline)", overflow: "hidden", position: "relative",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}>
            <video src="assets/burger-hero.mp4" autoPlay loop muted playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", boxShadow: "inset 0 0 60px rgba(212,175,55,0.2), inset 0 0 0 1px rgba(212,175,55,0.3)", pointerEvents: "none" }} />
          </div>
          <VariantStamp size={isMobile ? 56 : 80}>Embassy<br/>Seal</VariantStamp>
        </div>
      </div>
    </section>
  );
};

// ═══ VARIANT 2: Animated mesh gradient ═══════════════════════════
const Hero_MeshGradient = ({ size = "desktop" }) => {
  const isMobile = size === "mobile";
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: isMobile ? "32px 22px 50px" : "80px 64px 80px", minHeight: isMobile ? "auto" : 620 }}>
      {/* animated mesh blobs */}
      <style>{`
        @keyframes eobMesh1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } }
        @keyframes eobMesh2 { 0%,100% { transform: translate(0,0) scale(1.1); } 50% { transform: translate(-30px,40px) scale(1); } }
        @keyframes eobMesh3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(50px,30px) scale(0.9); } }
      `}</style>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.45) 0%, transparent 60%)", filter: "blur(40px)", animation: "eobMesh1 14s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.30) 0%, transparent 60%)", filter: "blur(50px)", animation: "eobMesh2 18s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: "40%", right: "30%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,203,106,0.20) 0%, transparent 70%)", filter: "blur(60px)", animation: "eobMesh3 22s ease-in-out infinite" }} />
        {/* grain overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(212,175,55,0.025) 0 1px, transparent 1px 14px)", opacity: 0.6 }} />
      </div>
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr", gap: isMobile ? 28 : 60, alignItems: "center" }}>
        <HeroContent size={size} />
        <div style={{ position: "relative", height: isMobile ? 280 : 480, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Floating type composition over gradient */}
          <div style={{
            position: "relative", width: isMobile ? 240 : 380, padding: isMobile ? "40px 28px" : "64px 44px",
            border: "1px solid var(--hairline)",
            background: "rgba(13,13,13,0.4)", backdropFilter: "blur(20px)",
            textAlign: "center",
          }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: isMobile ? 9 : 10, color: "var(--gold)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>
              Diplomatic Pass
            </div>
            <div style={{ fontFamily: "var(--serif)", fontSize: isMobile ? 38 : 56, color: "var(--white)", lineHeight: 1, fontWeight: 500 }}>
              24
            </div>
            <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: isMobile ? 18 : 24, color: "var(--gold)", marginTop: 6 }}>
              davlat
            </div>
            <div style={{ height: 1, background: "var(--hairline)", margin: isMobile ? "18px 0" : "24px 0" }} />
            <div style={{ fontSize: isMobile ? 11 : 12, color: "var(--silver)", lineHeight: 1.6 }}>
              Har bir burger boshqa elchixonadan
            </div>
            <div style={{ marginTop: 14, fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", letterSpacing: "0.25em", textTransform: "uppercase" }}>
              № 001 · TASHKENT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ═══ VARIANT 3: Static seal (original) ═══════════════════════════
const Hero_StaticSeal = ({ size = "desktop" }) => {
  const isMobile = size === "mobile";
  const plate = isMobile ? 220 : 360;
  const outer = isMobile ? 270 : 500;
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: isMobile ? "32px 22px 50px" : "80px 64px 80px", minHeight: isMobile ? "auto" : 620 }}>
      <div style={{ position: "absolute", top: "-20%", right: isMobile ? "-40%" : "-10%", width: isMobile ? 500 : 800, height: isMobile ? 500 : 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(90deg, var(--hairline-soft) 1px, transparent 1px)", backgroundSize: "160px 100%", opacity: 0.4, pointerEvents: "none" }} />
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr", gap: isMobile ? 28 : 60, alignItems: "center" }}>
        <HeroContent size={size} />
        <div style={{ position: "relative", height: isMobile ? 280 : 480, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", width: outer, height: outer, borderRadius: "50%", border: "1px solid var(--hairline)" }} />
          <div style={{ position: "absolute", width: outer * 0.86, height: outer * 0.86, borderRadius: "50%", border: "1px dashed var(--hairline-soft)" }} />
          <div style={{
            width: plate, height: plate, borderRadius: "50%",
            background: "radial-gradient(circle at 35% 30%, #2a251a 0%, #14110c 100%)",
            border: "1px solid var(--hairline)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 30px 80px rgba(0,0,0,0.6), inset 0 0 60px rgba(212,175,55,0.06)",
          }}>
            <BurgerIcon size={plate * 0.55} color="rgba(212,175,55,0.55)" />
          </div>
          <VariantStamp size={isMobile ? 56 : 80}>Embassy<br/>Seal</VariantStamp>
        </div>
      </div>
    </section>
  );
};

// ═══ VARIANT 4: Full-bleed video ═════════════════════════════════
const Hero_FullBleedVideo = ({ size = "desktop" }) => {
  const isMobile = size === "mobile";
  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: isMobile ? 620 : 720, display: "flex" }}>
      <video src="assets/burger-hero.mp4" autoPlay loop muted playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
      {/* dark gradient overlay for legibility */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: isMobile
          ? "linear-gradient(180deg, rgba(13,13,13,0.4) 0%, rgba(13,13,13,0.85) 70%, rgba(13,13,13,0.95) 100%)"
          : "linear-gradient(90deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.75) 45%, rgba(13,13,13,0.2) 75%, rgba(13,13,13,0) 100%)",
        pointerEvents: "none",
      }} />
      {/* gold radial accent */}
      <div style={{
        position: "absolute", zIndex: 1, top: "-20%", right: "-10%",
        width: 800, height: 800, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 60%)",
        pointerEvents: "none", mixBlendMode: "screen",
      }} />
      <div style={{
        position: "relative", zIndex: 2, width: "100%",
        padding: isMobile ? "60px 22px 40px" : "120px 64px 60px",
        display: "flex", flexDirection: "column", justifyContent: isMobile ? "flex-end" : "center",
      }}>
        <div style={{ maxWidth: isMobile ? "100%" : 640 }}>
          <HeroContent size={size} />
        </div>
        {/* bottom corner tag */}
        <div style={{
          position: "absolute", bottom: isMobile ? 16 : 24, right: isMobile ? 22 : 64,
          fontFamily: "var(--mono)", fontSize: 9, color: "var(--gold)",
          letterSpacing: "0.3em", textTransform: "uppercase",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", animation: "pulse 2s ease-in-out infinite" }} />
          Live · № 001
        </div>
        <style>{`@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>
      </div>
    </section>
  );
};

Object.assign(window, {
  Hero_VideoCircle, Hero_MeshGradient, Hero_StaticSeal, Hero_FullBleedVideo,
});
