/* Embassy of Burgers — Landing Page (Desktop, 1440 wide) */

const LandingDesktopNavbar = () =>
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
      <EobLogo size={20} />
      <nav style={{ display: "flex", gap: 36, justifyContent: "center", flexWrap: "nowrap", margin: "0px", padding: "0px 0px 0px 38px" }}>
        {["Menyu", "Filiallar", "Biz haqimizda"].map((item, i) =>
      <a key={item} href="#" style={{
        fontFamily: "var(--sans)", fontSize: 12, letterSpacing: "0.22em",
        textTransform: "uppercase", color: i === 0 ? "var(--gold)" : "var(--silver)",
        textDecoration: "none", fontWeight: 500, whiteSpace: "nowrap"
      }}>{item}</a>
      )}
      </nav>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 20, flexWrap: "nowrap" }}>
        <a href="tel:+998712000000" style={{
        fontFamily: "var(--mono)", fontSize: 13, color: "var(--silver)",
        textDecoration: "none", letterSpacing: "0.05em", whiteSpace: "nowrap"
      }}>+998 71 200 00 00</a>
        <button className="eob-btn eob-btn--gold" style={{ padding: "12px 22px", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          Buyurtma qilish
        </button>
      </div>
    </div>
  </div>;


const LandingDesktopHero = () =>
<section style={{
  position: "relative", overflow: "hidden",
  background: "var(--bg)",
  minHeight: 820,
  display: "flex"
}}>
    {/* full-bleed video */}
    <video src="assets/burger-hero.mp4" autoPlay loop muted playsInline
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
          <button className="eob-btn eob-btn--gold" style={{ padding: "16px 28px", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Buyurtma qilish <span style={{ fontSize: 14 }}>→</span>
          </button>
          <button className="eob-btn eob-btn--outline" style={{ padding: "16px 28px", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Menyuni ko'r
          </button>
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

    {/* legacy column wrapper kept for stable downstream layout but unused */}
    <div style={{ display: "none" }}>
      <div>
        <div className="eob-label" style={{ marginBottom: 28, display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: 32, height: 1, background: "var(--gold)" }} />
          <span>EST. 2019 · Toshkent · 12 Filial</span>
        </div>
        <h1 style={{
          fontFamily: "var(--serif)", fontWeight: 500,
          fontSize: 108, lineHeight: 0.98, letterSpacing: "-0.02em",
          color: "var(--white)", margin: 0
        }}>
          Dunyoni<br />
          <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Tatib</span> Ko'r
        </h1>
        <p style={{
          fontFamily: "var(--sans)", fontSize: 18, lineHeight: 1.6,
          color: "var(--silver)", marginTop: 32, maxWidth: 460
        }}>
          Har bir burger — alohida mamlakatning ta'mi. Embassy of Burgers — bu oshxona elchixonasi, bu yerda har bir buyurtma diplomatik missiya.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 44 }}>
          <button className="eob-btn eob-btn--gold" style={{ padding: "16px 28px", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Buyurtma qilish
            <span style={{ fontSize: 14 }}>→</span>
          </button>
          <button className="eob-btn eob-btn--outline" style={{ padding: "16px 28px", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Menyuni ko'r
          </button>
        </div>
        {/* meta row */}
        <div style={{ display: "flex", gap: 36, marginTop: 56, paddingTop: 28, borderTop: "1px solid var(--hairline-soft)" }}>
          {[
          { k: "Yetkazib berish", v: "30–45 daqiqa" },
          { k: "Ish vaqti", v: "24/7" },
          { k: "Reyting", v: "4.7 / 5" }].
          map((i) =>
          <div key={i.k}>
              <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>{i.k}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--white)", marginTop: 6 }}>{i.v}</div>
            </div>
          )}
        </div>
      </div>

      {/* hidden legacy visual (replaced by full-bleed video above) */}
      <div style={{ display: "none" }}>
        <div style={{
          position: "absolute", width: 540, height: 540, borderRadius: "50%",
          border: "1px solid var(--hairline)"
        }} />
        <div style={{
          position: "absolute", width: 460, height: 460, borderRadius: "50%",
          border: "1px dashed var(--hairline-soft)",
          animation: "none"
        }} />
        <div style={{
          width: 380, height: 380, borderRadius: "50%",
          background: "#14110c",
          border: "1px solid var(--hairline)",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6), inset 0 0 60px rgba(212,175,55,0.06)",
          position: "relative"
        }}>
          <video
            src="assets/burger-hero.mp4"
            autoPlay loop muted playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          
          {/* gold rim tint */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            boxShadow: "inset 0 0 60px rgba(212,175,55,0.18), inset 0 0 0 1px rgba(212,175,55,0.25)",
            pointerEvents: "none"
          }} />
          {/* bottom vignette for caption */}
          <div style={{
            position: "absolute", left: 0, right: 0, bottom: 0, height: 90,
            background: "linear-gradient(180deg, transparent 0%, rgba(13,13,13,0.85) 100%)",
            pointerEvents: "none"
          }} />
          <div style={{
            position: "absolute", bottom: 18, left: 0, right: 0, textAlign: "center",
            fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.3em",
            color: "rgba(212,175,55,0.7)", textTransform: "uppercase"
          }}>
            № 001 · Live
          </div>
        </div>
        {/* corner stamps */}
        <div style={{
          position: "absolute", top: 20, right: 20,
          width: 90, height: 90, borderRadius: "50%",
          border: "1px solid var(--gold)", color: "var(--gold)",
          fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14,
          display: "flex", alignItems: "center", justifyContent: "center",
          textAlign: "center", lineHeight: 1.1, transform: "rotate(8deg)"
        }}>
          Embassy<br />Seal
        </div>
        <div style={{
          position: "absolute", bottom: 30, left: 0,
          fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)",
          letterSpacing: "0.2em", textTransform: "uppercase"
        }}>
          № 001 · Toshkent
        </div>
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


const TopBurgerCard = ({ b, featured = false }) =>
<div className="eob-card" style={{ padding: 0, display: "flex", flexDirection: "column" }}>
    <ImagePlaceholder height={240} caption={`${b.name.toUpperCase()} · 16:10`} flag={b.flag} country={b.country} iconSize={70} />
    <div style={{ padding: "22px 24px 24px" }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: 24, color: "var(--white)", fontWeight: 500, lineHeight: 1.1 }}>
        {b.name}
      </div>
      <div style={{ marginTop: 10, fontSize: 13, lineHeight: 1.55, color: "var(--silver)", minHeight: 40 }}>
        {b.desc}
      </div>
      <div style={{ marginTop: 22, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase" }}>Narxi</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--gold)", marginTop: 2 }}>
            {b.price} <span style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>so'm</span>
          </div>
        </div>
        <button className="eob-btn eob-btn--red" style={{ padding: "11px 18px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Buyurtma
        </button>
      </div>
    </div>
  </div>;


const LandingDesktopTopBurgers = () =>
<section style={{ background: "var(--bg)", padding: "120px 0" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56 }}>
        <div>
          <SectionEyebrow>Selection · 2026</SectionEyebrow>
          <SectionTitle accent="Burgerlar">Eng Sevimli</SectionTitle>
        </div>
        <div style={{ maxWidth: 360, fontSize: 14, color: "var(--silver)", lineHeight: 1.6 }}>
          To'rt davlatdan to'rt klassik. Har biri o'z mamlakatining oshxona qadriyatlarini hurmat qiladi.
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
        {TOP_BURGERS.map((b) => <TopBurgerCard key={b.name} b={b} />)}
      </div>
      <div style={{ marginTop: 56, textAlign: "center" }}>
        <button className="eob-btn eob-btn--outline" style={{ padding: "16px 36px", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Barchasini ko'r · 24 ta burger →
        </button>
      </div>
    </div>
  </section>;


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


const BRANCHES = [
{ name: "Yunusobod", addr: "Amir Temur ko'chasi 56", hours: "09:00 – 03:00", phone: "+998 71 200 00 01" },
{ name: "Mirzo Ulug'bek", addr: "Mustaqillik 42", hours: "24/7", phone: "+998 71 200 00 02" },
{ name: "Chilonzor", addr: "Bunyodkor 14", hours: "10:00 – 02:00", phone: "+998 71 200 00 03" },
{ name: "Shayxontohur", addr: "Navoi 78", hours: "24/7", phone: "+998 71 200 00 04" },
{ name: "Olmazor", addr: "Beruniy 22", hours: "10:00 – 24:00", phone: "+998 71 200 00 05" },
{ name: "Yakkasaroy", addr: "Nukus ko'chasi 5", hours: "11:00 – 03:00", phone: "+998 71 200 00 06" }];


const LandingDesktopBranches = () => {
  const [nearest, setNearest] = React.useState(null);
  const [status, setStatus] = React.useState("idle"); // idle | locating | done | error
  const [errorMsg, setErrorMsg] = React.useState("");

  // Approx lat/lng for each branch (Toshkent districts) — used for nearest calc.
  const BRANCH_COORDS = [
  [41.3656, 69.2876], // Yunusobod
  [41.3261, 69.3433], // Mirzo Ulug'bek
  [41.2755, 69.2055], // Chilonzor
  [41.3198, 69.2401], // Shayxontohur
  [41.3585, 69.2257], // Olmazor
  [41.2944, 69.2664] // Yakkasaroy
  ];

  const findNearest = () => {
    if (!navigator.geolocation) {
      setStatus("error");setErrorMsg("Geolokatsiya qo'llab-quvvatlanmaydi");return;
    }
    setStatus("locating");setErrorMsg("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        const dist = (a, b, c, d) => {
          const R = 6371,toRad = (x) => x * Math.PI / 180;
          const dLat = toRad(c - a),dLng = toRad(d - b);
          const x = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a)) * Math.cos(toRad(c)) * Math.sin(dLng / 2) ** 2;
          return 2 * R * Math.asin(Math.sqrt(x));
        };
        let best = 0,bestD = Infinity;
        BRANCH_COORDS.forEach(([la, ln], i) => {const d = dist(lat, lng, la, ln);if (d < bestD) {bestD = d;best = i;}});
        setNearest({ idx: best, km: bestD });
        setStatus("done");
        setTimeout(() => {
          const el = document.getElementById(`eob-branch-${best}`);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 80);
      },
      (err) => {
        setStatus("error");
        setErrorMsg(err.code === 1 ? "Lokatsiyaga ruxsat berilmadi" : "Lokatsiyani aniqlay olmadik");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  return (
    <section style={{ background: "var(--bg)", padding: "120px 0" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "flex-end", marginBottom: 56, gap: 40 }}>
        <div>
          <SectionEyebrow>12 ta filial · Toshkent</SectionEyebrow>
          <SectionTitle accent="Filial">Sizga Eng Yaqin</SectionTitle>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {status === "done" && nearest &&
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "right" }}>
              {BRANCHES[nearest.idx].name}<br />
              <span style={{ color: "var(--muted)" }}>{nearest.km.toFixed(1)} km</span>
            </div>
            }
          {status === "error" &&
            <div style={{ fontSize: 11, color: "var(--red)", letterSpacing: "0.12em", textTransform: "uppercase", maxWidth: 200, textAlign: "right" }}>{errorMsg}</div>
            }
          <button
              onClick={findNearest}
              disabled={status === "locating"}
              className="eob-btn eob-btn--gold"
              style={{ padding: "13px 20px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", opacity: status === "locating" ? 0.6 : 1, cursor: status === "locating" ? "wait" : "pointer" }}>
              
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22 C12 22 4 14 4 9 A8 8 0 0 1 20 9 C20 14 12 22 12 22 Z" /><circle cx="12" cy="9" r="2.5" /></svg>
            {status === "locating" ? "Aniqlanmoqda…" : "Eng yaqin filialni top"}
          </button>
          <button className="eob-btn eob-btn--outline-light" style={{ padding: "13px 18px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Xaritada
          </button>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {BRANCHES.map((b, i) => {
            const isNearest = nearest && nearest.idx === i;
            return (
              <div key={b.name} id={`eob-branch-${i}`} style={{
                background: isNearest ? "linear-gradient(180deg, rgba(212,175,55,0.10) 0%, var(--surface) 100%)" : "var(--surface)",
                border: isNearest ? "1px solid var(--gold)" : "1px solid var(--hairline-soft)",
                padding: "28px 28px 24px",
                position: "relative",
                transition: "all 280ms ease",
                boxShadow: isNearest ? "0 12px 40px rgba(212,175,55,0.18)" : "none"
              }}>
            {isNearest &&
                <div style={{ position: "absolute", top: -10, left: 24, background: "var(--gold)", color: "#1a1408", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", padding: "4px 10px", fontWeight: 600 }}>
                Eng yaqin · {nearest.km.toFixed(1)} km
              </div>
                }
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
              <div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.2em" }}>
                  № {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 26, color: "var(--white)", marginTop: 6, fontWeight: 500 }}>
                  {b.name}
                </div>
              </div>
              <span style={{
                    fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
                    color: b.hours === "24/7" ? "var(--gold)" : "var(--muted)",
                    border: `1px solid ${b.hours === "24/7" ? "var(--gold)" : "var(--hairline-soft)"}`,
                    padding: "4px 8px"
                  }}>
                {b.hours === "24/7" ? "24/7" : "Faol"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid var(--hairline-soft)", paddingTop: 16, fontSize: 13, color: "var(--silver)", lineHeight: 1.7 }}>
              <div>{b.addr}</div>
              <div style={{ color: "var(--muted)" }}>{b.hours} · {b.phone}</div>
            </div>
            <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <a href="#" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
                Xaritada ko'r →
              </a>
              <a href="#" style={{ fontSize: 11, color: "var(--muted)", textDecoration: "none" }}>Telegram</a>
            </div>
          </div>);

          })}
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
                Telegram · @embassyburgers
              </span>
              <span style={{ fontSize: 10, color: "var(--gold)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Tasdiqlangan
              </span>
            </div>
          </div>
      )}
      </div>
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <button className="eob-btn eob-btn--outline" style={{ padding: "14px 30px", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Izoh qoldirish · Telegram
        </button>
      </div>
    </div>
  </section>;


const LandingDesktopAbout = () =>
<section style={{ background: "var(--bg)", padding: "120px 0" }}>
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
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--gold)", textDecoration: "none", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
            Instagram
          </a>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--silver)", textDecoration: "none", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 4 L2 11 L9 14 L12 22 L21 4 Z" /></svg>
            Telegram
          </a>
        </div>
      </div>
      <div style={{ position: "relative", height: 540 }}>
        <ImagePlaceholder height={540} caption="EMBASSY ATMOSPHERE · 4:5" iconSize={120} />
        {/* stamp */}
        <div style={{
        position: "absolute", top: 30, right: 30,
        width: 130, height: 130, borderRadius: "50%",
        border: "1.5px solid var(--gold)", color: "var(--gold)",
        background: "rgba(13,13,13,0.7)",
        fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center", lineHeight: 1.2, transform: "rotate(-6deg)",
        backdropFilter: "blur(4px)"
      }}>
          <div style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--silver)" }}>Established</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 28, color: "var(--gold)", margin: "4px 0" }}>2019</div>
          <div style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--silver)" }}>Toshkent · UZ</div>
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
        <button className="eob-btn eob-btn--gold" style={{ padding: "18px 32px", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 4 L2 11 L9 14 L12 22 L21 4 Z" /></svg>
          Telegram bot
        </button>
        <button className="eob-btn eob-btn--outline" style={{ padding: "18px 32px", fontSize: 13, letterSpacing: "0.1em" }}>
          +998 71 200 00 00
        </button>
      </div>
    </div>
  </section>;


const LandingDesktopFooter = () =>
<footer style={{ background: "#080604", padding: "64px 0 36px", borderTop: "1px solid var(--hairline-soft)" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
        <div>
          <EobLogo size={20} />
          <div style={{ marginTop: 22, fontSize: 13, color: "var(--muted)", lineHeight: 1.7, maxWidth: 280 }}>
            Embassy of Burgers — Toshkentdagi 12 filial bilan dunyoni tatib ko'rishingiz uchun oshxona elchixonasi.
          </div>
        </div>
        {[
      { t: "Sayt", l: ["Bosh sahifa", "Menyu", "Filiallar", "Biz haqimizda"] },
      { t: "Aloqa", l: ["+998 71 200 00 00", "hello@embassy.uz", "Toshkent · UZ", "24/7 yetkazib berish"] },
      { t: "Ijtimoiy", l: ["Instagram", "Telegram bot", "TikTok", "YouTube"] }].
      map((c) =>
      <div key={c.t}>
            <div className="eob-label" style={{ marginBottom: 18 }}>{c.t}</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {c.l.map((i) => <li key={i} style={{ fontSize: 13, color: "var(--silver)" }}>{i}</li>)}
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


window.LandingDesktop = LandingDesktop;
window.BRANCHES = BRANCHES;
window.REVIEWS = REVIEWS;