// Server Component
import React from 'react';
import { getTranslations } from 'next-intl/server';
import menuData from '@/lib/data.json';

export const MenuHeader = async () => {
  const t = await getTranslations('menu');

  const promoProduct = menuData
    .find(cat => cat.name === "Акции" || cat.name === "Aksiyalar")
    ?.products[0];

  const specialOffer = {
    label: t("promo_label"),
    title: promoProduct?.name ?? t("promo_title"),
    description: promoProduct?.description || t("promo_desc"),
    price: promoProduct
      ? new Intl.NumberFormat("ru-RU").format(parseFloat(promoProduct.price || "0"))
      : "44 000",
    tag: t("promo_tag")
  };

  return (
    <section className="eob-menu-header">
      <div className="eob-menu-header-glow" />
      <div className="eob-container eob-menu-header-inner">
        <div>
          <div className="eob-menu-header-eyebrow eob-label">
            <span className="eob-menu-header-eyebrow-line" />
            <span>{t("eyebrow")}</span>
          </div>
          <h1 className="eob-menu-header-title">
            {t("title_part1")} <span className="eob-menu-header-title-accent">{t("title_accent")}</span>
          </h1>
          <p className="eob-menu-header-description">{t("subtitle")}</p>
        </div>
        <div className="eob-menu-promo-card">
          <div className="eob-label">{specialOffer.label}</div>
          <div className="eob-menu-promo-title">{specialOffer.title}</div>
          <div className="eob-menu-promo-desc">{specialOffer.description}</div>
          <div className="eob-menu-promo-meta">
            <span className="eob-menu-promo-price">{specialOffer.price}</span>
            <span className="eob-menu-promo-tag">{specialOffer.tag}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
