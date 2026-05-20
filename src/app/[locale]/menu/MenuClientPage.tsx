"use client";
import React from "react";
import { EobLogo, ImagePlaceholder, SectionTitle, SectionEyebrow } from "@/components/shared";
import { LandingDesktopNavbar, LandingDesktopFooter } from "@/components/LandingDesktop";
import { Link } from "@/navigation";
import menuData from "@/lib/data.json";

const MenuDesktopHeader = () => {
  const specialOffer = {
    label: "Bugungi maxsus",
    title: "4 за 44 000 EMB",
    description: "Maza qilib to'yish uchun ajoyib set! 4 ta mahsulot atigi 44 000 so'm. Faqat bugun, ulgurib qoling.",
    price: "44 000",
    oldPrice: "",
    tag: "Aksiya"
  };

  return (
    <section className="eob-menu-header">
      <div className="eob-menu-header-glow" />
      <div className="eob-container eob-menu-header-inner">
        <div>
          <div className="eob-menu-header-eyebrow eob-label">
            <span className="eob-menu-header-eyebrow-line" />
            <span>Menu · 24 davlat · 32 burger</span>
          </div>
          <h1 className="eob-menu-header-title">
            To'liq <span className="eob-menu-header-title-accent">Menyu</span>
          </h1>
          <p className="eob-menu-header-description">
            Har bir burger boshqa mamlakatdan keladi. Quyidagi tanlangan klassik va mavsumiy retseptlar — sizning diplomatik missiyangiz.
          </p>
        </div>
        <div className="eob-menu-promo-card">
          <div className="eob-label">{specialOffer.label}</div>
          <div className="eob-menu-promo-title">{specialOffer.title}</div>
          <div className="eob-menu-promo-desc">{specialOffer.description}</div>
          <div className="eob-menu-promo-meta">
            <span className="eob-menu-promo-price">{specialOffer.price}</span>
            {specialOffer.oldPrice && (
              <span className="eob-menu-promo-oldprice">{specialOffer.oldPrice}</span>
            )}
            <span className="eob-menu-promo-tag">{specialOffer.tag}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const SortDropdown = ({ selected, onSelect }: { selected: string, onSelect: (val: string) => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const options = ["Mashhur", "Arzonroq", "Qimmatroq", "A-Z (Alifbo)"];

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const getArrow = (opt: string) => {
    if (opt === "Arzonroq") return "↑";
    if (opt === "Qimmatroq") return "↓";
    if (opt === "A-Z (Alifbo)") return "→";
    return "↓";
  };

  return (
    <div ref={dropdownRef} style={{ position: "relative", minWidth: 125, textAlign: "left" }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-gold transition-colors" 
        style={{ background: "transparent", border: "none", color: "var(--silver)", cursor: "pointer", fontSize: "inherit", padding: 0, textTransform: "inherit", letterSpacing: "inherit", width: "100%", textAlign: "left", whiteSpace: "nowrap" }}
      >
        {selected} {getArrow(selected)}
      </button>
      {isOpen && (
        <div style={{ 
          position: "absolute", top: "100%", left: 0, marginTop: 12,
          background: "var(--surface)", border: "1px solid var(--hairline-soft)",
          padding: "8px 0", display: "flex", flexDirection: "column", gap: 4,
          minWidth: 140, zIndex: 20, boxShadow: "0 10px 30px rgba(0,0,0,0.8)"
        }}>
          {options.map(opt => (
            <button 
              key={opt}
              onClick={() => { onSelect(opt); setIsOpen(false); }}
              style={{
                background: "transparent", border: "none", color: selected === opt ? "var(--gold)" : "var(--silver)",
                padding: "8px 16px", textAlign: "left", fontSize: 11, letterSpacing: "0.16em",
                textTransform: "uppercase", cursor: "pointer", fontFamily: "var(--sans)"
              }}
              className="hover:bg-white/5 transition-colors"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const FilterDrawer = ({ isOpen, onClose, onApply, currentFilters }: { isOpen: boolean, onClose: () => void, onApply: (f: any) => void, currentFilters: any }) => {
  const [minPrice, setMinPrice] = React.useState(currentFilters.minPrice || "");
  const [maxPrice, setMaxPrice] = React.useState(currentFilters.maxPrice || "");
  const [checkedFilters, setCheckedFilters] = React.useState<string[]>(currentFilters.checkedFilters || []);

  React.useEffect(() => {
    if (isOpen) {
      setMinPrice(currentFilters.minPrice || "");
      setMaxPrice(currentFilters.maxPrice || "");
      setCheckedFilters(currentFilters.checkedFilters || []);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen, currentFilters]);

  const handleClear = () => {
    setMinPrice("");
    setMaxPrice("");
    setCheckedFilters([]);
    onApply({ minPrice: "", maxPrice: "", checkedFilters: [] });
  };

  const handleApply = () => {
    onApply({ minPrice, maxPrice, checkedFilters });
    onClose();
  };

  const handleToggle = (f: string) => {
    setCheckedFilters(prev => 
      prev.includes(f) ? prev.filter(item => item !== f) : [...prev, f]
    );
  };

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
        <div style={{ padding: "32px 40px", borderBottom: "1px solid #222", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0, fontFamily: "var(--serif)", fontSize: 28, color: "var(--gold)", fontWeight: 500 }}>Filtrlar</h3>
          <button onClick={onClose} className="hover:text-white transition-colors" style={{ background: "transparent", border: "none", color: "var(--silver)", cursor: "pointer", fontSize: 28, padding: 0, lineHeight: 1 }}>&times;</button>
        </div>
        
        <div className="hide-scroll" style={{ padding: "40px", flex: 1, overflowY: "auto", overflowX: "hidden", display: "flex", flexDirection: "column", gap: 40, boxSizing: "border-box" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 20 }}>Narx oralig'i (so'm)</div>
            <div style={{ display: "flex", gap: 16, alignItems: "center", boxSizing: "border-box" }}>
              <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} placeholder="Dan" style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid var(--hairline-soft)", padding: "14px 16px", color: "var(--white)", fontFamily: "var(--mono)", fontSize: 14, outline: "none", borderRadius: 0, boxSizing: "border-box", width: "100%" }} />
              <div style={{ width: 12, height: 1, background: "var(--hairline-soft)", flexShrink: 0 }} />
              <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} placeholder="Gacha" style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid var(--hairline-soft)", padding: "14px 16px", color: "var(--white)", fontFamily: "var(--mono)", fontSize: 14, outline: "none", borderRadius: 0, boxSizing: "border-box", width: "100%" }} />
            </div>
          </div>
          
          <div>
             <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 20 }}>Tarkibi va ta'mi</div>
             <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
               {["Achchiq (Spicy)", "Pishloqli", "Faqat Tovuq", "Yangi (New)"].map(f => (
                 <label key={f} className="hover:text-white transition-colors" style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer", fontSize: 15, color: "var(--silver)" }}>
                   <input type="checkbox" checked={checkedFilters.includes(f)} onChange={() => handleToggle(f)} style={{ accentColor: "var(--gold)", width: 20, height: 20, cursor: "pointer" }} />
                   {f}
                 </label>
               ))}
             </div>
          </div>
        </div>

        <div style={{ padding: "32px 40px", borderTop: "1px solid var(--hairline-soft)", display: "flex", gap: 16 }}>
          <button onClick={handleClear} className="hover:bg-white/5 transition-colors" style={{ flex: 1, padding: "16px", background: "transparent", border: "1px solid var(--hairline-soft)", color: "var(--silver)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer" }}>
            Tozalash
          </button>
          <button onClick={handleApply} className="hover:bg-gold hover:text-black transition-colors" style={{ flex: 1, padding: "16px", background: "rgba(212,175,55,0.1)", border: "1px solid var(--gold)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer", fontWeight: 600 }}>
            Qo'llash
          </button>
        </div>
      </div>
    </>
  );
};

const MenuDesktopFilters = ({ activeCategory, onSelect, categories, sortBy, setSortBy, onOpenFilter }: { activeCategory: string, onSelect: (cat: string) => void, categories: any[], sortBy: string, setSortBy: (val: string) => void, onOpenFilter: () => void }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = React.useState({ left: 0, width: 0 });

  React.useEffect(() => {
    if (!scrollRef.current) return;
    const activeButton = scrollRef.current.querySelector(`[data-cat-id="${activeCategory}"]`) as HTMLElement;
    if (activeButton) {
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth
      });
      
      const container = scrollRef.current;
      const scrollTarget = activeButton.offsetLeft - container.clientWidth / 2 + activeButton.offsetWidth / 2;
      container.scrollTo({ left: scrollTarget, behavior: 'smooth' });
    }
  }, [activeCategory]);

  return (
    <div className="eob-menu-filters-bar">
      <div className="eob-container eob-menu-filters-inner">
        <div className="eob-menu-categories-wrapper">
          <div ref={scrollRef} className="eob-menu-categories-scroll">
            <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>
            <div className="hide-scroll eob-menu-categories-list">
              {categories.map((cat) => (
                <button 
                  key={cat.id} 
                  data-cat-id={cat.id}
                  onClick={() => onSelect(cat.id)} 
                  className="eob-menu-category-btn hover:opacity-80" 
                  style={{
                    color: activeCategory === cat.id ? "var(--gold)" : "var(--silver)"
                  }}
                >
                  {cat.name}
                  <span className="eob-menu-category-count">{String(cat.products.length).padStart(2,"0")}</span>
                </button>
              ))}
              <div 
                className="eob-menu-categories-indicator" 
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width
                }} 
              />
            </div>
          </div>
        </div>

        <div className="eob-menu-filters-actions">
          <span>Saralash:</span>
          <SortDropdown selected={sortBy} onSelect={setSortBy} />
          <span className="eob-menu-filters-actions-divider" />
          <button onClick={onOpenFilter} className="eob-menu-filter-btn">
            Filtr
          </button>
        </div>
      </div>
    </div>
  );
};

const MenuItemCard = ({ b }: { b: any }) => {
  const priceFormatted = new Intl.NumberFormat("ru-RU").format(parseFloat(b.price || "0")).replace(",", " ");
  const [imgError, setImgError] = React.useState(false);
  
  return (
    <div className="eob-card" style={{ display: "flex", flexDirection: "column" }}>
      {b.image && !imgError ? (
        <div style={{ height: 220, width: "100%", background: "#111", overflow: "hidden", position: "relative" }}>
          <img src={b.image} alt={b.name} onError={() => setImgError(true)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ) : (
        <ImagePlaceholder height={220} caption={b.name.toUpperCase()} iconSize={64} />
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
            {priceFormatted} <span style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>so'm</span>
          </div>
          <a href="https://t.me/embassyburgers" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--red hover:opacity-90" style={{ padding: "10px 16px", fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
            Buyurtma
          </a>
        </div>
      </div>
    </div>
  );
};

const MenuContent = () => {
  const activeCategories = menuData.filter(cat => cat.products.length > 0);
  const firstCategoryId = activeCategories.length > 0 ? activeCategories[0].id : "";
  const [activeCategory, setActiveCategory] = React.useState(firstCategoryId);
  const [sortBy, setSortBy] = React.useState("Mashhur");
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [appliedFilters, setAppliedFilters] = React.useState({ minPrice: "", maxPrice: "", checkedFilters: [] as string[] });
  
  const isClickScrolling = React.useRef(false);
  const clickScrollTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const scrollToCategory = (categoryId: string) => {
    isClickScrolling.current = true;
    setActiveCategory(categoryId);
    
    if (clickScrollTimeout.current) clearTimeout(clickScrollTimeout.current);
    clickScrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);

    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      let current = activeCategory;
      for (const cat of activeCategories) {
        const el = document.getElementById(`category-${cat.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            current = cat.id;
          }
        }
      }
      if (current !== activeCategory) {
        setActiveCategory(current);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCategory, activeCategories]);

  const sortedCategories = React.useMemo(() => {
    return activeCategories.map(cat => {
      let filteredProducts = cat.products.filter(p => {
        const price = parseFloat(p.price || "0");
        if (appliedFilters.minPrice && price < parseFloat(appliedFilters.minPrice)) return false;
        if (appliedFilters.maxPrice && price > parseFloat(appliedFilters.maxPrice)) return false;
        
        if (appliedFilters.checkedFilters.length > 0) {
          const text = ((p.name || "") + " " + (p.description || "")).toLowerCase();
          for (const f of appliedFilters.checkedFilters) {
            if (f.includes("Achchiq") && !text.includes("achchiq") && !text.includes("spicy") && !text.includes("jalapeno") && !text.includes("qalampir") && !text.includes("остр")) return false;
            if (f.includes("Pishloq") && !text.includes("pishloq") && !text.includes("cheese") && !text.includes("сыр")) return false;
            if (f.includes("Tovuq") && !text.includes("tovuq") && !text.includes("chicken") && !text.includes("кури") && !text.includes("chiken")) return false;
            if (f.includes("Yangi") && !text.includes("new") && !text.includes("yangi")) return false;
          }
        }
        return true;
      });

      if (sortBy === "Arzonroq") {
        filteredProducts.sort((a, b) => parseFloat(a.price || "0") - parseFloat(b.price || "0"));
      } else if (sortBy === "Qimmatroq") {
        filteredProducts.sort((a, b) => parseFloat(b.price || "0") - parseFloat(a.price || "0"));
      } else if (sortBy === "A-Z (Alifbo)") {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      }
      return { ...cat, products: filteredProducts };
    }).filter(cat => cat.products.length > 0);
  }, [activeCategories, sortBy, appliedFilters]);

  return (
    <>
      <MenuDesktopFilters activeCategory={activeCategory} onSelect={scrollToCategory} categories={sortedCategories} sortBy={sortBy} setSortBy={setSortBy} onOpenFilter={() => setIsFilterOpen(true)} />
      <section className="eob-menu-content-section">
        <div className="eob-container" style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {sortedCategories.map((cat, index) => (
            <div key={cat.id} id={`category-${cat.id}`} className="eob-menu-category-block">
              <div className="eob-menu-category-header">
                <div>
                  <SectionEyebrow>Section · {String(index + 1).padStart(2, '0')}</SectionEyebrow>
                  <h3 className="eob-menu-category-title">
                    {cat.name} <span className="eob-menu-category-title-count">· {cat.products.length} ta</span>
                  </h3>
                </div>
              </div>
              <div className="eob-menu-products-grid">
                {cat.products.map(b => <MenuItemCard key={b.id} b={b} />)}
              </div>
            </div>
          ))}
        </div>
      </section>
      <FilterDrawer 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        onApply={setAppliedFilters}
        currentFilters={appliedFilters}
      />
    </>
  );
};

export default function MenuClientPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <LandingDesktopNavbar />
      <MenuDesktopHeader />
      <MenuContent />
      <LandingDesktopFooter />
    </div>
  );
}
