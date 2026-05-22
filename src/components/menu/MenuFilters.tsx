'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { SortDropdown } from './SortDropdown';

export const MenuFilters = ({ activeCategory, onSelect, categories, sortBy, setSortBy, onOpenFilter }: { activeCategory: string, onSelect: (cat: string) => void, categories: any[], sortBy: string, setSortBy: (val: string) => void, onOpenFilter: () => void }) => {
  const t = useTranslations("menu");
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = React.useState({ left: 0, width: 0 });

  const sortOptions = [
    { value: "popular", label: t("sort_popular") },
    { value: "cheapest", label: t("sort_cheapest") },
    { value: "priciest", label: t("sort_priciest") },
    { value: "az", label: t("sort_az") },
  ];

  React.useEffect(() => {
    if (!scrollRef.current) return;
    const updateIndicator = () => {
      const activeButton = scrollRef.current?.querySelector(`[data-cat-id="${activeCategory}"]`) as HTMLElement;
      if (activeButton) {
        setIndicatorStyle({ left: activeButton.offsetLeft, width: activeButton.offsetWidth });
      }
    };
    updateIndicator();
    const activeButton = scrollRef.current.querySelector(`[data-cat-id="${activeCategory}"]`) as HTMLElement;
    if (activeButton) {
      const container = scrollRef.current;
      const scrollTarget = activeButton.offsetLeft - container.clientWidth / 2 + activeButton.offsetWidth / 2;
      container.scrollTo({ left: scrollTarget, behavior: 'smooth' });
    }
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
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
                  style={{ color: activeCategory === cat.id ? "var(--gold)" : "var(--silver)" }}
                >
                  {cat.name}
                  <span className="eob-menu-category-count">{String(cat.products.length).padStart(2, "0")}</span>
                </button>
              ))}
              <div
                className="eob-menu-categories-indicator"
                style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
              />
            </div>
          </div>
        </div>

        <div className="eob-menu-filters-actions">
          <div className="eob-menu-sort-group">
            <span className="eob-menu-sort-label">{t("sort_label")}:</span>
            <SortDropdown selected={sortBy} onSelect={setSortBy} options={sortOptions} />
          </div>
          <span className="eob-menu-filters-actions-divider" />
          <button onClick={onOpenFilter} className="eob-menu-filter-btn">
            {t("filter_btn")}
          </button>
        </div>
      </div>
    </div>
  );
};
