'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { SectionEyebrow } from '@/components/ui/SectionHeadings';
import { MenuFilters } from './MenuFilters';
import { MenuItemCard } from './MenuItemCard';
import { FilterDrawer } from './FilterDrawer';

interface MenuContentProps {
  initialData: any[];
}

export const MenuContent = ({ initialData }: MenuContentProps) => {
  const t = useTranslations("menu");
  const activeCategories = initialData.filter((cat: any) => cat.products.length > 0);
  const firstCategoryId = activeCategories.length > 0 ? activeCategories[0].id : "";
  const [activeCategory, setActiveCategory] = React.useState(firstCategoryId);
  const [sortBy, setSortBy] = React.useState("popular");
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
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCategory, activeCategories]);

  const spicyKey = t("filter_spicy");
  const cheeseKey = t("filter_cheese");
  const chickenKey = t("filter_chicken");
  const newKey = t("filter_new");

  const sortedCategories = React.useMemo(() => {
    return activeCategories.map(cat => {
      let filteredProducts = cat.products.filter(p => {
        const price = parseFloat(p.price || "0");
        if (appliedFilters.minPrice && price < parseFloat(appliedFilters.minPrice)) return false;
        if (appliedFilters.maxPrice && price > parseFloat(appliedFilters.maxPrice)) return false;
        if (appliedFilters.checkedFilters.length > 0) {
          const text = ((p.name || "") + " " + (p.description || "")).toLowerCase();
          for (const f of appliedFilters.checkedFilters) {
            if (f === spicyKey && !text.includes("achchiq") && !text.includes("spicy") && !text.includes("jalapeno") && !text.includes("qalampir") && !text.includes("остр")) return false;
            if (f === cheeseKey && !text.includes("pishloq") && !text.includes("cheese") && !text.includes("сыр")) return false;
            if (f === chickenKey && !text.includes("tovuq") && !text.includes("chicken") && !text.includes("кури") && !text.includes("chiken")) return false;
            if (f === newKey && !text.includes("new") && !text.includes("yangi")) return false;
          }
        }
        return true;
      });
      if (sortBy === "cheapest") filteredProducts.sort((a, b) => parseFloat(a.price || "0") - parseFloat(b.price || "0"));
      else if (sortBy === "priciest") filteredProducts.sort((a, b) => parseFloat(b.price || "0") - parseFloat(a.price || "0"));
      else if (sortBy === "az") filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      return { ...cat, products: filteredProducts };
    }).filter(cat => cat.products.length > 0);
  }, [activeCategories, sortBy, appliedFilters, spicyKey, cheeseKey, chickenKey, newKey]);

  return (
    <div>
      <MenuFilters
        activeCategory={activeCategory}
        onSelect={scrollToCategory}
        categories={sortedCategories}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onOpenFilter={() => setIsFilterOpen(true)}
      />
      <section className="eob-menu-content-section">
        <div className="eob-container" style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {sortedCategories.map((cat, index) => (
            <div key={cat.id} id={`category-${cat.id}`} className="eob-menu-category-block">
              <div className="eob-menu-category-header">
                <div>
                  <SectionEyebrow>{t("section_label")} · {String(index + 1).padStart(2, '0')}</SectionEyebrow>
                  <h3 className="eob-menu-category-title">
                    {cat.name} <span className="eob-menu-category-title-count">· {t("items_count", { count: cat.products.length })}</span>
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
    </div>
  );
};
