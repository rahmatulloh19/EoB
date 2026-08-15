// Server Component
import React from 'react';
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';
import { EobLogo } from '@/components/ui/EobLogo';

export const Footer = async () => {
  const t = await getTranslations('footer');
  const tc = await getTranslations('common');
  return (
    <footer style={{ padding: "80px 0 40px", background: "#0D0D0D", borderTop: "1px solid var(--hairline-soft)" }}>
      <div className="eob-container">
        <div className="eob-footer-content" style={{ marginBottom: 60 }}>
          <div className="eob-footer-info">
            <EobLogo size={24} className="eob-footer-logo" />
            <div style={{ marginTop: 24, fontSize: 14, color: "var(--muted)", maxWidth: 300, lineHeight: 1.6 }} className="eob-footer-desc">
              {t('mission_desc')}
            </div>
          </div>
          <div className="eob-footer-links" style={{ flex: 1 }}>
            <div className="eob-footer-nav">
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--gold)", fontWeight: 600, marginBottom: 24, textTransform: "uppercase" }}>{tc('navigation')}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Link href="/" className="eob-footer-link" style={{ fontSize: 13 }}>{tc('home_short')}</Link>
                <Link href="/menu" className="eob-footer-link" style={{ fontSize: 13 }}>{tc('menu_short')}</Link>
                <Link href="/#branches" className="eob-footer-link" style={{ fontSize: 13 }}>{tc('branches_short')}</Link>
                <Link href="/#about" className="eob-footer-link" style={{ fontSize: 13 }}>{tc('about_short')}</Link>
              </div>
            </div>
            <div className="eob-footer-contact">
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--gold)", fontWeight: 600, marginBottom: 24, textTransform: "uppercase" }}>{tc('contact')}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <a href="tel:+998781130773" className="eob-footer-link" style={{ fontSize: 13 }}>+998 78 113 07 73</a>
                <a href="mailto:hello@embassy.uz" className="eob-footer-link" style={{ fontSize: 13 }}>hello@embassy.uz</a>
                <div style={{ color: "var(--white)", fontSize: 13 }}>Tashkent · UZ</div>
                <div style={{ color: "var(--white)", fontSize: 13 }}>24/7 {t('delivery_text')}</div>
              </div>
            </div>
            <div className="eob-footer-social">
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--gold)", fontWeight: 600, marginBottom: 24, textTransform: "uppercase" }}>{tc('social')}</div>
              <div className="eob-social-list" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <a href="https://www.instagram.com/burgerembassyuz/" className="eob-footer-link" style={{ fontSize: 13 }}>Instagram</a>
                <a href="https://t.me/burgerembassy_uzbot" className="eob-footer-link" style={{ fontSize: 13 }}>Telegram</a>
              </div>
            </div>
          </div>
        </div>
        <div className="eob-footer-bottom">
          <div className="eob-footer-bottom-text">
            <span>{t('rights')}</span>
            <span style={{ margin: "0 8px", opacity: 0.5 }}>·</span>
            <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>Developed by Rahmatulloh</span>
          </div>
          <div className="eob-footer-bottom-mission">
            {t('mission')}
          </div>
        </div>
      </div>
    </footer>
  );
};
