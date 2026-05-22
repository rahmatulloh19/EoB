// Server Component
import React from 'react';
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';
import menuData from '@/lib/data.json';
import { TopBurgerCard } from './TopBurgerCard';

export const TopBurgers = async () => {
  const t = await getTranslations('sections');
  const topBurgers = menuData.flatMap(cat => cat.products).slice(0, 4);

  return (
    <section id="menu" className="eob-section-padding" style={{ background: "var(--bg)" }}>
      <div className="eob-container">
        <div className="eob-burgers-header">
          <div>
            <div className="eob-label" style={{ marginBottom: 14, display: "flex", justifyContent: "flex-start" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 22, height: 1, background: "var(--gold)" }} />
                {t('menu_eyebrow')}
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--eob-serif), 'Playfair Display', serif",
              fontWeight: 500, color: "var(--white)",
              fontSize: "clamp(24px, 8vw, 56px)", lineHeight: 1.05,
              letterSpacing: "-0.01em", margin: 0
            }}>
              {t('menu_title')}{" "}<span className="eob-gold-word">{t('menu_accent')}</span>
            </h2>
          </div>
          <Link href="/menu" className="eob-btn eob-btn--outline eob-branch-btn">
            {t('menu_cta')} →
          </Link>
        </div>
        <div className="eob-grid-burgers">
          {topBurgers.map((b) => <TopBurgerCard key={b.id || b.name} b={b} />)}
        </div>
      </div>
    </section>
  );
};
