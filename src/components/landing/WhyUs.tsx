// Server Component
import React from 'react';
import { getTranslations } from 'next-intl/server';
import { SectionEyebrow, SectionTitle } from '@/components/ui/SectionHeadings';

const FeatureBlock = ({ num, title, desc, icon }: { num: string, title: string, desc: string, icon: React.ReactNode }) => (
  <div className="eob-card" style={{ padding: "36px 32px", position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
      <div style={{
        width: 52, height: 52, borderRadius: "50%",
        border: "1px solid var(--gold)", color: "var(--gold)",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(212,175,55,0.06)",
        transition: "all 300ms ease"
      }}>
        {icon}
      </div>
      <div style={{ fontFamily: "var(--eob-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.2em" }}>
        {num}
      </div>
    </div>
    <div style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 22, color: "var(--white)", fontWeight: 500, lineHeight: 1.2, marginBottom: 16 }}>
      {title}
    </div>
    <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--silver)", flex: 1 }}>
      {desc}
    </div>
  </div>
);

export const WhyUs = async () => {
  const t = await getTranslations('sections');
  return (
    <section className="eob-section-padding" style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #100E0A 100%)" }}>
      <div className="eob-container">
        <div className="eob-why-header">
          <SectionEyebrow>{t('why_eyebrow')}</SectionEyebrow>
          <SectionTitle accent={t('why_accent')}>{t('why_title')}</SectionTitle>
        </div>
        <div className="eob-grid-whyus">
          <FeatureBlock num="01" title={t('why_feat1_title')} desc={t('why_feat1_desc')}
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 3 L18 7 V13 C18 17 15 20 12 21 C9 20 6 17 6 13 V7 Z" /><path d="M9 12 L11 14 L15 10" /></svg>} />
          <FeatureBlock num="02" title={t('why_feat2_title')} desc={t('why_feat2_desc')}
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="9" /><path d="M12 7 V12 L15 14" /></svg>} />
          <FeatureBlock num="03" title={t('why_feat3_title')} desc={t('why_feat3_desc')}
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 14 C4 9 8 6 12 6 C16 6 20 9 20 14 Z" /><path d="M4 14 H20 V18 H4 Z" /><path d="M8 10 L9 12 M12 9 L13 11 M16 10 L17 12" /></svg>} />
          <FeatureBlock num="04" title={t('why_feat4_title')} desc={t('why_feat4_desc')}
            icon={<svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M10 22 C10 22 2 14 2 9 A8 8 0 0 1 18 9 C18 14 10 22 10 22 Z" /><circle cx="10" cy="9" r="2.5" /></svg>} />
        </div>
      </div>
    </section>
  );
};
