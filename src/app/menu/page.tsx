import React from "react";
import { EobLogo, ImagePlaceholder, SectionTitle, SectionEyebrow, FULL_MENU } from "@/components/shared";
import Link from "next/link";

const MenuCard = ({ item }: { item: any }) => (
  <div className="eob-card" style={{ padding: 0, display: "flex", flexDirection: "column", height: "100%" }}>
    <ImagePlaceholder height={220} caption={`${item.name.toUpperCase()}`} flag={item.flag} country={item.country} iconSize={60} />
    <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--white)", fontWeight: 500, lineHeight: 1.1 }}>
        {item.name}
      </div>
      <div style={{ marginTop: 10, fontSize: 13, lineHeight: 1.55, color: "var(--silver)", flex: 1 }}>
        {item.desc}
      </div>
      <div style={{ marginTop: 22, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase" }}>Narxi</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--gold)", marginTop: 2 }}>
            {item.price} <span style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>so'm</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function MenuPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Mini Navbar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 10,
        background: "rgba(13,13,13,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--hairline-soft)"
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "20px 64px",
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <EobLogo size={16} />
          </Link>
          <Link href="/" className="eob-btn eob-btn--outline-light" style={{ padding: "10px 18px", fontSize: 11 }}>
            ← Ortga
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 64px 120px" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <SectionEyebrow align="center">To'liq Menyu</SectionEyebrow>
          <SectionTitle accent="Embassy" align="center">Burgers of</SectionTitle>
          <p style={{ maxWidth: 500, margin: "24px auto 0", color: "var(--silver)", fontSize: 15, lineHeight: 1.6 }}>
            Dunyodagi har bir ta'm bir joyda jamlangan. 
            Siz qaysi elchixonaga tashrif buyurmoqchisiz?
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {Object.entries(FULL_MENU).map(([category, items]) => (
            <div key={category} id={category.toLowerCase()}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: 36, color: "var(--white)", margin: 0, fontWeight: 500 }}>
                  {category}
                </h3>
                <div style={{ flex: 1, height: 1, background: "var(--hairline-soft)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                {(items as any[]).map(item => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
