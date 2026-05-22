// Server Component
import React from 'react';
import { getTranslations } from 'next-intl/server';
import { SectionEyebrow, SectionTitle } from '@/components/ui/SectionHeadings';
import { StarRating } from '@/components/ui/StarRating';

const REVIEWS = [
  { name: "Aziza K.", initials: "AK", date: "3 kun oldin", rating: 5, text: "Spain Jalapeno Burger — bu haqiqiy olovli lazzat! Achchiq jalapeno, qarsildoq dudlangan go'sht va salsa sousi sochnaya kotleta bilan juda zo'r mos tushgan." },
  { name: "Sardor M.", initials: "SM", date: "1 hafta oldin", rating: 5, text: "Burger Embassy mening eng sevimli burgerim bo'lib qoldi. Yumshoq bulochka va firmenniy sousning ta'mi og'izda eriydi. Haqiqiy premium klassika!" },
  { name: "Madina T.", initials: "MT", date: "2 hafta oldin", rating: 5, text: "Uzbekistan Burger-ni tatib ko'rdim, uzoq vaqt tomlangan mayin go'shti og'izda eriydi! Yangi sabzavotlar va o'ziga xos sous bilan ta'mi shunchaki mukammal." }
];

export const Reviews = async () => {
  const t = await getTranslations('sections');
  const tc = await getTranslations('common');
  return (
    <section className="eob-section-padding eob-reviews-section" style={{ background: "linear-gradient(180deg, #100E0A 0%, #0D0D0D 100%)", overflowX: "hidden" }}>
      <div className="eob-container">
        <div className="eob-reviews-header">
          <SectionEyebrow>{t('reviews_eyebrow')}</SectionEyebrow>
          <SectionTitle accent={t('reviews_accent')}>{t('reviews_title')}</SectionTitle>
        </div>
        <div className="eob-grid-3 eob-reviews-carousel">
          {REVIEWS.map((r) =>
            <div key={r.name} className="eob-card" style={{ padding: "28px 28px 24px", position: "relative", display: "flex", flexDirection: "column" }}>
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
                  color: "var(--gold)", fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 16, fontStyle: "italic"
                }}>{r.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "var(--white)", fontSize: 14, fontWeight: 500 }}>{r.name}</div>
                  <div style={{ color: "var(--muted)", fontSize: 11, marginTop: 2 }}>{r.date}</div>
                </div>
                <StarRating value={r.rating} size={11} />
              </div>
              <div style={{ fontSize: 14, color: "var(--silver)", lineHeight: 1.6, flex: 1, marginBottom: 20 }}>
                &ldquo;{r.text}&rdquo;
              </div>
              <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--hairline-soft)", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 8, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{tc('telegram').toUpperCase()}</span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.02em" }}>@burgerembassy_uzbot</span>
                </div>
                <span style={{ fontSize: 9, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                  {tc('confirmed')}
                </span>
              </div>
            </div>
          )}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="https://t.me/burgerembassy_helpbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--outline hover:text-gold" style={{ padding: "14px 30px", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", border: "1px solid var(--gold)" }}>
            {t('reviews_all')}
          </a>
        </div>
      </div>
    </section>
  );
};
