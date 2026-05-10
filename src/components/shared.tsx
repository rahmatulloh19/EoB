import React from 'react';

export const EobLogo = ({ size = 18, color = "var(--color-gold)" }: { size?: number, color?: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, color }}>
    <svg width={size * 1.15} height={size * 1.4} viewBox="0 0 23 28" fill="none" aria-hidden="true">
      <path d="M1.5 2 H21.5 V16 C21.5 22 16.5 26 11.5 27.5 C6.5 26 1.5 22 1.5 16 Z"
            stroke={color} strokeWidth="1.2" fill="none" />
      <path d="M5.5 7 V21 M5.5 7 H13 M5.5 14 H11 M5.5 21 H13"
            stroke={color} strokeWidth="1.2" />
      <path d="M14 14 C18 14 18 21 14 21" stroke={color} strokeWidth="1.2" fill="none" />
    </svg>
    <div style={{ fontFamily: "var(--font-serif)", fontSize: size, letterSpacing: "0.02em", lineHeight: 1, color }}>
      <div style={{ fontStyle: "italic", fontWeight: 500 }}>Embassy</div>
      <div style={{ fontSize: size * 0.55, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--color-silver)", marginTop: 2, fontFamily: "var(--font-sans)", fontWeight: 500 }}>
        of Burgers
      </div>
    </div>
  </div>
);

export const BurgerIcon = ({ size = 56, color = "rgba(212,175,55,0.55)" }: { size?: number, color?: string }) => (
  <svg width={size} height={size * 0.78} viewBox="0 0 80 62" fill="none" aria-hidden="true">
    <path d="M8 28 C8 14 22 6 40 6 C58 6 72 14 72 28 Z" stroke={color} strokeWidth="1.2" fill="none" />
    <circle cx="28" cy="18" r="1.2" fill={color} />
    <circle cx="40" cy="14" r="1.2" fill={color} />
    <circle cx="52" cy="18" r="1.2" fill={color} />
    <path d="M6 32 Q14 28 22 32 T38 32 T54 32 T74 32" stroke={color} strokeWidth="1.2" fill="none" />
    <rect x="8" y="36" width="64" height="6" stroke={color} strokeWidth="1.2" fill="none" />
    <path d="M8 46 Q14 44 22 46 T38 46 T54 46 T72 46" stroke={color} strokeWidth="1.2" fill="none" />
    <path d="M8 50 C8 56 22 58 40 58 C58 58 72 56 72 50 Z" stroke={color} strokeWidth="1.2" fill="none" />
  </svg>
);

export const ImagePlaceholder = ({ 
  height = 260, 
  caption = "BURGER PHOTO", 
  iconSize = 64, 
  flag, 
  country, 
  style = {} 
}: { 
  height?: number, caption?: string, iconSize?: number, flag?: string, country?: string, style?: React.CSSProperties 
}) => (
  <div className="eob-img" style={{ height, ...style }}>
    <div className="eob-img__icon">
      <BurgerIcon size={iconSize} />
    </div>
    <div className="eob-img__caption">{caption}</div>
    {flag && (
      <div style={{ position: "absolute", top: 14, left: 14 }}>
        <span className="eob-flag-chip">
          <span style={{ fontSize: 13 }}>{flag}</span>
          <span>{country}</span>
        </span>
      </div>
    )}
  </div>
);

export const SectionEyebrow = ({ children, align = "left" }: { children: React.ReactNode, align?: "left" | "center" | "right" }) => (
  <div className="eob-label" style={{ textAlign: align, marginBottom: 14 }}>
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <span style={{ width: 22, height: 1, background: "var(--color-gold)" }} />
      {children}
    </span>
  </div>
);

export const SectionTitle = ({ children, accent, align = "left", size = 56 }: { children: React.ReactNode, accent?: string, align?: "left" | "center" | "right", size?: number }) => (
  <h2 style={{
    fontFamily: "var(--font-serif)",
    fontWeight: 500,
    color: "var(--color-white, #FFF)",
    fontSize: size,
    lineHeight: 1.05,
    letterSpacing: "-0.01em",
    margin: 0,
    textAlign: align,
  }}>
    {children}
    {accent && <span className="eob-gold-word"> {accent}</span>}
  </h2>
);

export const StarRating = ({ value = 5, size = 12, color = "var(--color-gold)" }: { value?: number, size?: number, color?: string }) => (
  <div style={{ display: "inline-flex", gap: 2, color }}>
    {[1,2,3,4,5].map(i => (
      <svg key={i} width={size} height={size} viewBox="0 0 16 16" fill={i <= value ? color : "transparent"} stroke={color} strokeWidth="1">
        <path d="M8 1.5 L10 6 L14.5 6.5 L11 9.5 L12 14 L8 11.5 L4 14 L5 9.5 L1.5 6.5 L6 6 Z" />
      </svg>
    ))}
  </div>
);

export const TOP_BURGERS = [
  { name: "The Diplomat", country: "Amerika", flag: "🇺🇸", desc: "Mol go'shti, cheddar, karamellangan piyoz, brioche bulochka", price: "65 000" },
  { name: "Wagyu Tokyo", country: "Yaponiya", flag: "🇯🇵", desc: "Wagyu kotleti, teriyaki, wasabi mayonezi, nori chip", price: "98 000" },
  { name: "Toscana", country: "Italiya", flag: "🇮🇹", desc: "Prosciutto, mozzarella, rucola, baliziki sousi", price: "78 000" },
  { name: "Le Parisien", country: "Frantsiya", flag: "🇫🇷", desc: "Brie pishloq, qoramol go'shti, qora truffel mayonez", price: "85 000" },
];

export const FULL_MENU = {
  Burgerlar: [
    { name: "The Diplomat", country: "Amerika", flag: "🇺🇸", desc: "Mol go'shti 220g, cheddar, karamel piyoz, brioche", price: "65 000" },
    { name: "Wagyu Tokyo", country: "Yaponiya", flag: "🇯🇵", desc: "Wagyu kotleti, teriyaki, wasabi mayonez, nori chip", price: "98 000" },
    { name: "Toscana", country: "Italiya", flag: "🇮🇹", desc: "Prosciutto, mozzarella, rucola, baliziki", price: "78 000" },
    { name: "Le Parisien", country: "Frantsiya", flag: "🇫🇷", desc: "Brie pishloq, qoramol go'shti, qora truffel", price: "85 000" },
    { name: "El Matador", country: "Ispaniya", flag: "🇪🇸", desc: "Iberiko jambon, manchego, smoke paprika aioli", price: "82 000" },
    { name: "Maharaja", country: "Hindiston", flag: "🇮🇳", desc: "Tandoori tovuq, masala, qorin yogurti", price: "58 000" },
    { name: "The Berliner", country: "Germaniya", flag: "🇩🇪", desc: "Bratwurst kotlet, sauerkraut, gorchitsa", price: "62 000" },
    { name: "Seoul Heat", country: "Janubiy Koreya", flag: "🇰🇷", desc: "Bulgogi, kimchi, gochujang aioli, kunjut", price: "68 000" },
  ],
  Setlar: [
    { name: "Diplomat Set", country: "Aralash", flag: "🍔", desc: "Burger + qovurilgan kartoshka + ichimlik", price: "85 000" },
    { name: "Family Embassy", country: "4 kishilik", flag: "👥", desc: "4 burger + 4 garnitura + 4 ichimlik", price: "320 000" },
    { name: "Lunch Mission", country: "Tushlik", flag: "🕐", desc: "Burger + sho'rva + ichimlik · 12:00–16:00", price: "75 000" },
    { name: "Wagyu Premier", country: "Premium", flag: "⭐", desc: "Wagyu + truffle fries + import ichimlik", price: "145 000" },
  ],
  Garnituralar: [
    { name: "Embassy Fries", country: "Klassik", flag: "🍟", desc: "Qalin kesilgan, dengiz tuzi, rosemary", price: "28 000" },
    { name: "Truffle Parmesan", country: "Premium", flag: "🍄", desc: "Qora truffle moyi, parmezan", price: "42 000" },
    { name: "Onion Rings", country: "Klassik", flag: "🧅", desc: "Beer-batter, qaymoqli sous", price: "32 000" },
    { name: "Sweet Potato", country: "Mavsum", flag: "🍠", desc: "Shirin kartoshka, paprika tuzi", price: "36 000" },
  ],
  Ichimliklar: [
    { name: "Cherry Cola", country: "Klassik", flag: "🥤", desc: "Olchaning aromasi, 0.4L", price: "18 000" },
    { name: "Yuzu Lemonade", country: "Yaponiya", flag: "🇯🇵", desc: "Yuzu, asal, mineral suv, 0.4L", price: "26 000" },
    { name: "Embassy Iced Tea", country: "Maxsus", flag: "🍵", desc: "Yasmin, limon, bal, 0.5L", price: "22 000" },
    { name: "Espresso Tonik", country: "Italiya", flag: "🇮🇹", desc: "Espresso + tonik, muz, 0.3L", price: "24 000" },
  ],
};
