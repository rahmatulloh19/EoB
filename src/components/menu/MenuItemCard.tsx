'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

export const MenuItemCard = ({ b }: { b: any }) => {
  const t = useTranslations("menu");
  const priceFormatted = new Intl.NumberFormat("ru-RU").format(parseFloat(b.price || "0")).replace(",", " ");
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="eob-card" style={{ display: "flex", flexDirection: "column" }}>
      {b.image && !imgError ? (
        <div className="eob-card-image-wrap" style={{ width: "100%", background: "#111", overflow: "hidden", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.image} alt={b.name} onError={() => setImgError(true)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      ) : (
        <div className="eob-card-image-wrap">
          <ImagePlaceholder height={220} caption={b.name.toUpperCase()} iconSize={64} />
        </div>
      )}
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--white)", fontWeight: 500, lineHeight: 1.25 }}>
          {b.name}
        </div>
        <div style={{ marginTop: 8, fontSize: 12.5, color: "var(--silver)", lineHeight: 1.55, flex: 1 }}>
          {b.description || b.desc}
        </div>
        <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--gold)" }}>
            {priceFormatted} <span style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>so&apos;m</span>
          </div>
          <a href="https://t.me/embassyburgers" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--red hover:opacity-90" style={{ padding: "10px 16px", fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
            {t("order_btn")}
          </a>
        </div>
      </div>
    </div>
  );
};
