'use client';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { SectionEyebrow, SectionTitle } from '@/components/ui/SectionHeadings';

const getBranchStatus = (b: any) => {
  if (b.hours === "24/7") return true;
  const now = new Date();
  const hour = now.getHours();
  const parts = b.hours.split("-").map((s: string) => s.trim());
  if (parts.length !== 2) return true;
  const startHour = parseInt(parts[0].split(":")[0]);
  const endHour = parseInt(parts[1].split(":")[0]);
  return endHour < startHour ? (hour >= startHour || hour < endHour) : (hour >= startHour && hour < endHour);
};

interface BranchesProps {
  initialData: any[];
}

export const Branches = ({ initialData }: BranchesProps) => {
  const t = useTranslations('sections');
  const tc = useTranslations('common');
  const locale = useLocale();

  const [branches, setBranches] = React.useState<any[]>(initialData.map(b => ({ ...b, is_actually_open: getBranchStatus(b) })));
  const [status, setStatus] = React.useState("idle");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [showAll, setShowAll] = React.useState(false);

  const findNearest = () => {
    setStatus("locating"); setErrorMsg("");
    
    const processLocation = (lat: number, lng: number) => {
      const dist = (a: number, b: number, c: number, d: number) => {
        const R = 6371, toRad = (x: number) => x * Math.PI / 180;
        const dLat = toRad(c - a), dLng = toRad(d - b);
        const x = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a)) * Math.cos(toRad(c)) * Math.sin(dLng / 2) ** 2;
        return 2 * R * Math.asin(Math.sqrt(x));
      };
      const withDistance = initialData.map(branch => {
        const d = dist(lat, lng, parseFloat(branch.latitude as unknown as string), parseFloat(branch.longitude as unknown as string));
        return { ...branch, km: d, is_actually_open: getBranchStatus(branch) };
      });
      withDistance.sort((a, b) => a.km - b.km);
      setBranches(withDistance);
      setStatus("done");
    };

    if (!navigator.geolocation) {
      setStatus("error");
      setErrorMsg(t('geo_not_supported'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => processLocation(pos.coords.latitude, pos.coords.longitude),
      (err) => {
        setStatus("error");
        setErrorMsg(err.code === 1 ? t('geo_denied') : t('geo_error'));
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  };

  return (
    <section id="branches" className="eob-section-padding" style={{ background: "var(--bg)" }}>
      <div className="eob-container">
        <div className="eob-branches-header">
          <div>
            <SectionEyebrow>{initialData.length} {t('branches_eyebrow')}</SectionEyebrow>
            <SectionTitle accent={t('branches_accent')}>{t('branches_title')}</SectionTitle>
          </div>
          <div className="eob-branches-tools">
            {status === "error" && <div className="eob-branches-error">{errorMsg}</div>}
            <button
              onClick={findNearest}
              disabled={status === "locating"}
              className="eob-btn eob-btn--gold eob-branch-btn"
              style={{ opacity: status === "locating" ? 0.6 : 1, cursor: status === "locating" ? "wait" : "pointer" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22 C12 22 4 14 4 9 A8 8 0 0 1 20 9 C20 14 12 22 12 22 Z" /><circle cx="12" cy="9" r="2.5" /></svg>
              {status === "locating" ? t('branches_locating') : t('branches_find')}
            </button>
            <a href="https://yandex.uz/maps/" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--outline-light eob-branch-btn hover:opacity-80">
              {t('branches_map')}
            </a>
          </div>
        </div>
        <div style={{ 
          position: "relative", overflow: "hidden", 
          maxHeight: showAll ? 4000 : 760, 
          transition: "max-height 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
          margin: "0 -8px", padding: "0 8px"
        }}>
          <div className="eob-grid-3" style={{ paddingTop: 16, paddingBottom: showAll ? 0 : 40 }}>
            {(showAll ? branches : branches.slice(0, 6)).map((b, i) => {
              const isNearest = status === "done" && i === 0;
              const isTop3 = status === "done" && i > 0 && i < 3;
              const isOpen = getBranchStatus(b);
              return (
                <div key={b.id || b.name_uz} id={`eob-branch-${i}`} style={{
                  background: isNearest ? "linear-gradient(180deg, rgba(212,175,55,0.10) 0%, var(--surface) 100%)" : "var(--surface)",
                  border: isNearest ? "1px solid var(--gold)" : isTop3 ? "1px solid rgba(212,175,55,0.25)" : "1px solid var(--hairline-soft)",
                  padding: "28px 28px 24px", position: "relative",
                  transition: "all 280ms ease",
                  boxShadow: isNearest ? "0 12px 40px rgba(212,175,55,0.18)" : "none",
                  display: "flex", flexDirection: "column"
                }}>
                  {b.km !== undefined && i < 3 &&
                    <div style={{ position: "absolute", top: -10, left: 24, background: isNearest ? "var(--gold)" : "var(--card)", color: isNearest ? "#1a1408" : "var(--gold)", border: isNearest ? "none" : "1px solid rgba(212,175,55,0.4)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", padding: "4px 10px", fontWeight: 600 }}>
                      {i === 0 ? t('nearest') : `${i + 1}-${t('near')}`} · {b.km.toFixed(1)} km
                    </div>
                  }
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20, flex: 1 }}>
                    <div>
                      <div style={{ fontFamily: "var(--eob-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.2em" }}>
                        {b.km !== undefined ? tc('distance', { km: b.km.toFixed(1) }) : `№ ${String(i + 1).padStart(2, "0")}`}
                      </div>
                      <div style={{ fontFamily: "var(--eob-serif), 'Playfair Display', serif", fontSize: 26, color: "var(--white)", marginTop: 6, fontWeight: 500, lineHeight: 1.15 }}>
                        {b[`name_${locale}`] || b.name_uz}
                      </div>
                    </div>
                    <span style={{
                      fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
                      color: isOpen ? "var(--gold)" : "var(--red)",
                      border: `1px solid ${isOpen ? "var(--gold)" : "var(--red)"}`,
                      padding: "4px 8px", alignSelf: "flex-start"
                    }}>
                      {isOpen ? t('open') : t('closed')}
                    </span>
                  </div>
                  <div style={{ borderTop: "1px solid var(--hairline-soft)", paddingTop: 16, fontSize: 13, color: "var(--silver)", lineHeight: 1.7 }}>
                    <div>{b[`address_${locale}`] || b.address_uz}</div>
                    <div style={{ color: "var(--muted)" }}>{b.hours} · {b.phone}</div>
                  </div>
                  <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <a href={`https://yandex.uz/maps/?pt=${b.longitude},${b.latitude}&z=16`} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>
                      {t('see_on_map')} →
                    </a>
                    <a href="https://t.me/burgerembassy_helpbot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ fontSize: 11, color: "var(--muted)", textDecoration: "none" }}>Telegram</a>
                  </div>
                </div>
              );
            })}
          </div>
          {!showAll && initialData.length > 6 && (
            <div className="eob-branches-overlay" style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: 240,
              background: "linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.85) 40%, rgba(13,13,13,1) 100%)",
              display: "flex", alignItems: "flex-end", justifyContent: "center",
              paddingBottom: 24, zIndex: 10, pointerEvents: "none"
            }}>
              <button 
                onClick={() => setShowAll(true)}
                className="eob-btn eob-btn--outline eob-show-all-btn" 
                style={{ padding: "16px 36px", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", pointerEvents: "auto", background: "#0D0D0D", boxShadow: "0 -10px 40px rgba(13,13,13,0.9)", border: "1px solid var(--gold)" }}>
                {t('show_all')} {initialData.length} {t('branches_label')} ↓
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
