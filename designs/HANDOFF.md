# Embassy of Burgers — Antigravity Handoff

## Loyiha haqida
Toshkentdagi premium burger tarmog'i uchun web-sayt dizayni. **Embassy of Burgers** — har bir burger boshqa mamlakatdan keladi ("oshxona elchixonasi") konseptida. 12 ta filial, 24/7 yetkazib berish.

## Fayllar tuzilishi

```
/
├── Bosh sahifa.html      ← Desktop landing (asosiy)
├── Menyu.html            ← Desktop menyu sahifasi
├── Mobil.html            ← Mobil ko'rinish (iPhone frame ichida, landing + menyu)
├── Embassy of Burgers.html ← Design canvas (4 artboard, taqqoslash uchun)
│
├── tokens.css            ← Dizayn tizimi: ranglar, fontlar, atomar CSS
├── shared.jsx            ← Umumiy komponentlar: logo, ikonalar, ma'lumotlar
├── landing-desktop.jsx   ← Desktop landing sektsiyalari (~700 qator)
├── landing-mobile.jsx    ← Mobil landing sektsiyalari
├── menu-desktop.jsx      ← Desktop menyu (filter + grid)
├── menu-mobile.jsx       ← Mobil menyu (sticky CTA bilan)
└── assets/
    └── burger-hero.mp4   ← Hero video (full-bleed)
```

## Dizayn tizimi (tokens.css)

### Ranglar
| Token | Qiymat | Vazifa |
|-------|--------|--------|
| `--bg` | `#0D0D0D` | Asosiy fon (Midnight Black) |
| `--card` | `#1A1814` | Kartochkalar |
| `--surface` | `#252118` | Yuqori darajadagi yuza |
| `--gold` | `#D4AF37` | Embassy Gold — aksent, narxlar, hairline |
| `--red` | `#C8102E` | Embassy Red — CTA tugmalar |
| `--white` | `#FFFFFF` | Sarlavhalar |
| `--silver` | `#D1D5DB` | Body matn |
| `--muted` | `#7A7670` | Metadata, ikkilamchi matn |
| `--hairline` | `rgba(212,175,55,0.18)` | Oltin chegaralar |

### Fontlar
- **Playfair Display** — sarlavhalar (`var(--serif)`), italik aksent so'zlar
- **Inter** — body, UI (`var(--sans)`)
- **JetBrains Mono** — metadata, raqamlar, "Live" yorliqlari (`var(--mono)`)

### Atomar CSS klasslari
- `.eob-btn` + `.eob-btn--gold` / `.eob-btn--red` / `.eob-btn--outline` / `.eob-btn--outline-light`
- `.eob-card` — standart kartochka
- `.eob-label` — uppercase eyebrow label
- `.eob-divider` — gradient hairline
- `.eob-img` — to'q rangli rasm placeholder (burger silueti + hatching pattern bilan)
- `.eob-flag-chip` — davlat bayrog'i chip
- `.eob-stat` — oltin chap chegarali statistika
- `.eob-gold-word` — italik oltin so'z

## Landing sahifa sektsiyalari (chap → o'ng pastga)

1. **Navbar** — sticky, logo + nav (Menyu / Filiallar / Biz haqimizda) + telefon + CTA. `whiteSpace: nowrap` bilan singan emas, grid: `auto 1fr auto`.
2. **Hero** — full-bleed video (`assets/burger-hero.mp4`), chap tomonda matn (qora gradient orqali o'qiladigan), pastida silliq fade sayt foniga, o'ng pastda "Live · № 001 · Toshkent" pulsatsion indikator.
3. **Stats bar** — 4 ta statistika oltin chap chegara bilan (12 filial, 24/7, 50K+ mijoz, 4.7 reyting).
4. **Top burgerlar** — 4 ta klassik (Diplomat 🇺🇸, Wagyu Tokyo 🇯🇵, Toscana 🇮🇹, Le Parisien 🇫🇷), bayroq chip bilan rasm placeholder + narx + "Buyurtma" CTA.
5. **Nima uchun Embassy?** — 4 ta xususiyat blok (01-04 nomerlangan, oltin doiraviy ikona).
6. **Filiallar** — 6 ta filial kartochkasi, **"Eng yaqin filialni top"** tugmasi (geolokatsiya so'raydi, Haversine bilan hisoblaydi, eng yaqinini oltin ramka + nur + masofa yorlig'i bilan ajratadi va o'sha kartochkaga avto-scroll qiladi). Koordinatalar `BRANCH_COORDS` massivida.
7. **Mijoz fikrlari** — Telegram-bubble uslubidagi 3 ta sharh, avatar + reyting yulduzlari.
8. **Biz haqimizda** — 2-kolonkali blok, o'ngda "EST. 2019" muhri.
9. **Final CTA** — markazlashtirilgan, radial oltin nur, "Hoziroq Buyurtma" + Telegram bot + telefon.
10. **Footer** — 4-kolonkali, logo + sayt linklari + aloqa + ijtimoiy tarmoqlar.

## Sahifalarni ko'rish

- **Bosh sahifa.html** — desktop'da to'liq landing
- **Menyu.html** — desktop'da to'liq menyu
- **Mobil.html** — desktop'da iPhone frame ichida, mobil qurilmada full-bleed. Yuqori-o'ngda Bosh ↔ Menyu o'tish tugmasi
- **Embassy of Burgers.html** — 4 ta artboard yonma-yon (taqqoslash)

Hammasida pastda suzuvchi pill-navigatsiya bor — sahifalar oralig'ida o'tish uchun.

## Texnik eslatmalar

- React 18 + Babel inline (CDN, ishlab chiqishga qulay; production'da pre-compile qilish kerak)
- Komponentlar `window` orqali baham ko'riladi (Babel sandbox'lari uchun) — har bir JSX fayl oxirida `window.X = X`
- Style obyektlari inline — global `styles` obyekt yo'q (nom konflikti oldini olish uchun)
- Hero video: `autoplay loop muted playsInline` — barcha brauzerlarda muammosiz ishlaydi
- Geolokatsiya: `navigator.geolocation.getCurrentPosition` + Haversine formulasi, xato holatlarini boshqaradi (ruxsat berilmagan / timeout / qo'llab-quvvatlanmagan)

## Antigravity uchun keyingi qadamlar

1. **Backend** — buyurtma, savatcha, foydalanuvchi profilini API'ga bog'lash
2. **CMS** — burgerlar, filiallar, mavsumiy takliflar (hozir `shared.jsx` ichida hardcoded)
3. **Xarita integratsiyasi** — filiallar uchun haqiqiy Yandex/Google Maps (hozir faqat ro'yxat + geolokatsiya)
4. **Telegram bot deep-link** — "Buyurtma" tugmalarini real botga ulash
5. **Rasmlar** — placeholder'larni haqiqiy burger fotosessiyalari bilan almashtirish
6. **i18n** — UZ / RU / EN tillar (hozir faqat UZ)
7. **Performance** — JSX pre-compile, font subset, video lazy-load
8. **A11y audit** — kontrast, klaviatura navigatsiyasi, screen-reader yorliqlari
