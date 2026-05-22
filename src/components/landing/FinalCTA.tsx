// Server Component
import React from 'react';
import { getTranslations } from 'next-intl/server';
import { SectionEyebrow } from '@/components/ui/SectionHeadings';

export const FinalCTA = async () => {
  const t = await getTranslations('sections');
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
