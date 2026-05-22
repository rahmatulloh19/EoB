'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

export const FilterDrawer = ({ isOpen, onClose, onApply, currentFilters }: { isOpen: boolean, onClose: () => void, onApply: (f: any) => void, currentFilters: any }) => {
  const t = useTranslations("menu");
  const [minPrice, setMinPrice] = React.useState(currentFilters.minPrice || "");
  const [maxPrice, setMaxPrice] = React.useState(currentFilters.maxPrice || "");
  const [checkedFilters, setCheckedFilters] = React.useState<string[]>(currentFilters.checkedFilters || []);

  React.useEffect(() => {
    if (isOpen) {
      setMinPrice(currentFilters.minPrice || "");
      setMaxPrice(currentFilters.maxPrice || "");
      setCheckedFilters(currentFilters.checkedFilters || []);
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
    return () => { document.body.style.overflowY = ''; };
  }, [isOpen, currentFilters]);

  const handleClear = () => {
    setMinPrice(""); setMaxPrice(""); setCheckedFilters([]);
    onApply({ minPrice: "", maxPrice: "", checkedFilters: [] });
  };

  const handleApply = () => {
    onApply({ minPrice, maxPrice, checkedFilters });
    onClose();
  };

  const handleToggle = (f: string) => {
    setCheckedFilters(prev => prev.includes(f) ? prev.filter(item => item !== f) : [...prev, f]);
  };

  const tasteFilters = [t("filter_spicy"), t("filter_cheese"), t("filter_chicken"), t("filter_new")];

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)",
          zIndex: 9999, opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.4s ease"
        }}
      />
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, width: 420, maxWidth: "100%",
        background: "#0a0a0a", borderLeft: "1px solid #222", zIndex: 10000,
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
        display: "flex", flexDirection: "column", boxShadow: "-20px 0 60px rgba(0,0,0,0.8)"
      }}>
        <div className="eob-filter-drawer-header" style={{ padding: "32px 40px", borderBottom: "1px solid #222", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0, fontFamily: "var(--serif)", fontSize: 28, color: "var(--gold)", fontWeight: 500 }}>{t("filter_title")}</h3>
          <button onClick={onClose} className="hover:text-white transition-colors" style={{ background: "transparent", border: "none", color: "var(--silver)", cursor: "pointer", fontSize: 28, padding: 0, lineHeight: 1 }}>&times;</button>
        </div>

        <div className="hide-scroll eob-filter-drawer-body" style={{ padding: "40px", flex: 1, overflowY: "auto", overflowX: "hidden", display: "flex", flexDirection: "column", gap: 40, boxSizing: "border-box" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 20 }}>{t("filter_price_label")}</div>
            <div style={{ display: "flex", gap: 16, alignItems: "center", boxSizing: "border-box" }}>
              <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} placeholder={t("filter_price_from")} style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid var(--hairline-soft)", padding: "14px 16px", color: "var(--white)", fontFamily: "var(--mono)", fontSize: 14, outline: "none", borderRadius: 0, boxSizing: "border-box", width: "100%" }} />
              <div style={{ width: 12, height: 1, background: "var(--hairline-soft)", flexShrink: 0 }} />
              <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} placeholder={t("filter_price_to")} style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid var(--hairline-soft)", padding: "14px 16px", color: "var(--white)", fontFamily: "var(--mono)", fontSize: 14, outline: "none", borderRadius: 0, boxSizing: "border-box", width: "100%" }} />
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 20 }}>{t("filter_taste_label")}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {tasteFilters.map(f => (
                <label key={f} className="hover:text-white transition-colors" style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer", fontSize: 15, color: "var(--silver)" }}>
                  <input type="checkbox" checked={checkedFilters.includes(f)} onChange={() => handleToggle(f)} style={{ accentColor: "var(--gold)", width: 20, height: 20, cursor: "pointer" }} />
                  {f}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="eob-filter-drawer-footer" style={{ padding: "32px 40px", borderTop: "1px solid var(--hairline-soft)", display: "flex", gap: 16 }}>
          <button onClick={handleClear} className="hover:bg-white/5 transition-colors" style={{ flex: 1, padding: "16px", background: "transparent", border: "1px solid var(--hairline-soft)", color: "var(--silver)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer" }}>
            {t("filter_clear")}
          </button>
          <button onClick={handleApply} className="hover:bg-gold hover:text-black transition-colors" style={{ flex: 1, padding: "16px", background: "rgba(212,175,55,0.1)", border: "1px solid var(--gold)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer", fontWeight: 600 }}>
            {t("filter_apply")}
          </button>
        </div>
      </div>
    </>
  );
};
