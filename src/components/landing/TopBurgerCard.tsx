'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

export const TopBurgerCard = ({ b }: { b: any }) => {
  const tc = useTranslations('common');
  const priceFormatted = Math.floor(b.price).toLocaleString("ru-RU").replace(/,/g, " ");
  const [imgError, setImgError] = React.useState(false);
  
  return (
    <div className="eob-card" style={{ padding: 0, display: "flex", flexDirection: "column", height: "100%" }}>
      {b.image && !imgError ? (
        <div style={{ height: 240, width: "100%", background: "#111", overflow: "hidden", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.image} alt={b.name} onError={() => setImgError(true)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ) : (
        <ImagePlaceholder height={240} caption={`${b.name.toUpperCase()}`} iconSize={70} />
      )}
      <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 24, color: "var(--white)", fontWeight: 500, lineHeight: 1.1 }}>
          {b.name}
        </div>
        <div style={{ marginTop: 10, fontSize: 13, lineHeight: 1.55, color: "var(--silver)", minHeight: 40, flex: 1 }}>
          {b.description || b.desc}
        </div>
        <div style={{ marginTop: 22, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 4 }}>{tc('price')}</div>
            <div style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 24, color: "var(--gold)", lineHeight: 1 }}>
              {priceFormatted} <span style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.05em", fontWeight: 400 }}>{tc('currency')}</span>
            </div>
          </div>
          <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--red hover:opacity-90" style={{ padding: "10px 16px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
            {tc('order_short')}
          </a>
        </div>
      </div>
    </div>
  );
};
