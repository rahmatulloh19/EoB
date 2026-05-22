// Server Component
import React from 'react';
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';

export const Hero = async () => {
  const t = await getTranslations('hero');
  return (
    <section className="eob-section-padding" style={{
      position: "relative", overflow: "hidden",
      background: "var(--bg)",
      minHeight: 820,
      display: "flex"
    }}>
      {/* full-bleed video */}
      <video src="/assets/burger-hero.mp4" autoPlay loop muted playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
      {/* legibility gradient */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: "linear-gradient(90deg, rgba(13,13,13,0.94) 0%, rgba(13,13,13,0.78) 40%, rgba(13,13,13,0.25) 75%, rgba(13,13,13,0) 100%)"
      }} />
      {/* gold accent radial */}
      <div style={{
        position: "absolute", zIndex: 1, top: "-20%", right: "-10%",
        width: 900, height: 900, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.22) 0%, transparent 60%)",
        mixBlendMode: "screen", pointerEvents: "none"
      }} />
      {/* bottom fade */}
      <div style={{
        position: "absolute", zIndex: 1, left: 0, right: 0, bottom: 0, height: 220,
        background: "linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.55) 45%, var(--bg) 100%)",
        pointerEvents: "none"
      }} />
      {/* live tag */}
      <div style={{
        position: "absolute", zIndex: 3, bottom: 28, right: 64,
        fontFamily: "var(--eob-mono)", fontSize: 10, color: "var(--gold)",
        letterSpacing: "0.3em", textTransform: "uppercase",
        display: "flex", alignItems: "center", gap: 10
      }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--gold)", animation: "eobPulse 2s ease-in-out infinite" }} />
        {t('live_tag')}
      </div>
      <style>{`@keyframes eobPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>

      <div className="eob-hero-inner" style={{
        position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto",
        width: "100%",
        display: "flex", alignItems: "center"
      }}>
        <div className="eob-hero-content" style={{ maxWidth: 640 }}>
          <div className="eob-label" style={{ marginBottom: 28, display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ width: 32, height: 1, background: "var(--gold)" }} />
            <span>{t('est')}</span>
          </div>
          <h1 className="eob-hero-title" style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontWeight: 500, lineHeight: 0.98, letterSpacing: "-0.02em", color: "var(--white)", margin: 0 }}>
            {t('title_part1')}<br />
            <span className="eob-gold-word">{t('title_accent')}</span> {t('title_part2')}
          </h1>
          <p className="eob-hero-subtitle" style={{ fontFamily: "var(--eob-sans), 'Inter', sans-serif", fontSize: 18, lineHeight: 1.6, color: "var(--silver)", marginTop: 28, maxWidth: 460 }}>
            {t('subtitle')}
          </p>
          <div className="eob-hero-actions" style={{ display: "flex", gap: 14, marginTop: 40 }}>
            <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--gold hover:opacity-90 eob-hero-btn" style={{ padding: "16px 28px", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
              {t('cta_order')} <span style={{ fontSize: 14 }}>→</span>
            </a>
            <Link href="/menu" className="eob-btn eob-btn--outline eob-hero-btn" style={{ padding: "16px 28px", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", border: "1px solid #D4AF37" }}>
              {t('cta_menu')}
            </Link>
          </div>
          <div style={{ display: "flex", gap: 36, marginTop: 48, paddingTop: 28, borderTop: "1px solid var(--hairline-soft)" }}>
            {[{ k: t('delivery'), v: t('delivery_time') }, { k: t('hours'), v: t('hours_val') }, { k: t('rating'), v: t('rating_val') }].map((i) =>
              <div key={i.k}>
                <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>{i.k}</div>
                <div style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 22, color: "var(--white)", marginTop: 6 }}>{i.v}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
