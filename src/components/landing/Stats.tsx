// Server Component
import React from 'react';
import { getTranslations } from 'next-intl/server';

export const Stats = async () => {
  const t = await getTranslations('stats');
  return (
    <section style={{ padding: "100px 0", background: "var(--bg)", borderBottom: "1px solid var(--hairline-soft)" }}>
      <div className="eob-container eob-stats-grid">
        {[
          { n: "12", l: t('branches') },
          { n: t('min_val'), l: t('delivery'), s: t('min') },
          { n: "24/7", l: t('support') },
          { n: "4.7", l: t('rating') }
        ].map((s) =>
          <div key={s.n} className="eob-stat">
            <div style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 44, color: "var(--white)", lineHeight: 1, fontWeight: 500 }}>
              {s.n} {s.s && <span style={{ fontSize: 16, color: "var(--gold)", verticalAlign: "top", marginLeft: 4 }}>{s.s}</span>}
            </div>
            <div style={{ marginTop: 8, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
              {s.l}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
