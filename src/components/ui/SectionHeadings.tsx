// Server Component — no "use client" needed
import React from 'react';

export const SectionEyebrow = ({ children, align = "left" }: { children: React.ReactNode, align?: "left" | "center" | "right" }) => (
  <div className="eob-label" style={{ textAlign: align, marginBottom: 14, display: "flex", justifyContent: align === "center" ? "center" : "flex-start" }}>
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <span style={{ width: 22, height: 1, background: "var(--gold)" }} />
      {children}
      {align === "center" && <span style={{ width: 22, height: 1, background: "var(--gold)" }} />}
    </span>
  </div>
);

export const SectionTitle = ({ children, accent, align = "left", size = 56 }: { children: React.ReactNode, accent?: string, align?: "left" | "center" | "right", size?: number }) => (
  <h2 style={{
    fontFamily: "var(--eob-serif), 'Playfair Display', serif",
    fontWeight: 500,
    color: "var(--white, #FFF)",
    fontSize: `clamp(24px, 8vw, ${size}px)`,
    lineHeight: 1.05,
    letterSpacing: "-0.01em",
    margin: 0,
    textAlign: align,
  }}>
    {children}{" "}{accent && <span className="eob-gold-word">{accent}</span>}
  </h2>
);
