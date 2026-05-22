// Server Component
import React from 'react';
import { getTranslations } from 'next-intl/server';
import { SectionEyebrow, SectionTitle } from '@/components/ui/SectionHeadings';

export const About = async () => {
  const t = await getTranslations('sections');
  return (
    <section id="about" className="eob-section-padding" style={{ background: "var(--bg)" }}>
      <div className="eob-container eob-about-inner">
        <div>
          <div className="eob-about-header">
            <SectionEyebrow>{t('about_eyebrow')}</SectionEyebrow>
            <SectionTitle accent={t('about_accent')}>{t('about_title')}</SectionTitle>
          </div>
          <div className="eob-about-content">
            <p style={{ margin: "0 0 18px" }}>{t('about_p1')}</p>
            <p style={{ margin: 0 }}>{t('about_p2')}</p>
          </div>
          <div className="eob-about-socials" style={{ marginTop: 32, display: "flex", gap: 32 }}>
            <a href="https://www.instagram.com/burgerembassyuz/" target="_blank" rel="noopener noreferrer" className="eob-about-social-link" style={{ color: "var(--gold)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
              <span style={{ fontSize: 11, letterSpacing: "0.15em" }}>INSTAGRAM</span>
            </a>
            <a href="https://t.me/burgerembassy_helpbot" target="_blank" rel="noopener noreferrer" className="eob-about-social-link" style={{ color: "var(--gold)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 4 L2 11 L9 14 L12 22 L21 4 Z" /></svg>
              <span style={{ fontSize: 11, letterSpacing: "0.15em" }}>TELEGRAM</span>
            </a>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          <div style={{ width: "100%", height: "100%", minHeight: "400px", position: "relative", overflow: "hidden", border: "1px solid var(--hairline-soft)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/about-restaurant.jpg" 
              alt="Embassy of Burgers Restaurant" 
              style={{ width: "100%", height: "100%", minHeight: "400px", objectFit: "cover", display: "block" }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
