'use client';
import React from 'react';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import { EobLogo } from '@/components/ui/EobLogo';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export const Navbar = () => {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: t('menu'), href: "/menu" },
    { name: t('branches'), href: "/#branches" },
    { name: t('about'), href: "/#about" }
  ];

  return (
    <>
      <div style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1100,
        background: "rgba(13,13,13,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--hairline-soft)"
      }}>
        <div className="eob-container eob-nav-inner eob-nav-container" style={{
          paddingTop: 16, paddingBottom: 16,
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <Link href="/" style={{ textDecoration: "none" }} className="hover:opacity-80 transition-opacity">
            <EobLogo size={18} />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="eob-nav-links desktop-only" style={{ display: "flex", gap: 36, margin: "0 auto", paddingLeft: 40 }}>
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (pathname === '/' && item.href === '/#menu');
              return (
                <Link key={item.name} href={item.href} className="eob-nav-link" style={{
                  fontSize: 12, fontWeight: 500, letterSpacing: "0.14em",
                  color: isActive ? "var(--gold)" : "var(--silver)",
                  textDecoration: "none", whiteSpace: "nowrap"
                }}>
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="eob-nav-tools" style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <LanguageSwitcher />
            
            <a href="tel:+998781130773" className="desktop-only" style={{
              fontFamily: "var(--eob-mono)", fontSize: 13, color: "var(--silver)",
              textDecoration: "none", letterSpacing: "0.05em"
            }}>+998 78 113 07 73</a>
            
            <a href="https://t.me/burgerembassy_uzbot" target="_blank" rel="noopener noreferrer" className="eob-btn eob-btn--gold hover:opacity-90" style={{ padding: "10px 20px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
              {t('order')}
            </a>

            {/* Hamburger Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="eob-hamburger-btn"
              aria-label="Toggle Menu"
              style={{
                background: "none", border: "none", cursor: "pointer", 
                padding: "8px 4px", flexDirection: "column", gap: 5, 
                zIndex: 1200, position: "relative"
              }}
            >
              <span style={{ width: 22, height: 1.5, background: "var(--gold)", transition: "0.3s", transform: isMenuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
              <span style={{ width: 14, height: 1.5, background: "var(--gold)", alignSelf: "flex-end", transition: "0.3s", opacity: isMenuOpen ? 0 : 1 }} />
              <span style={{ width: 22, height: 1.5, background: "var(--gold)", transition: "0.3s", transform: isMenuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        onClick={() => setIsMenuOpen(false)}
        style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", 
          backdropFilter: "blur(4px)", zIndex: 1050,
          opacity: isMenuOpen ? 1 : 0, visibility: isMenuOpen ? "visible" : "hidden",
          transition: "0.4s ease"
        }} 
      />
      
      {/* Mobile Drawer */}
      <div className="eob-mobile-drawer" style={{
        position: "fixed", top: 0, right: isMenuOpen ? 0 : "-100%", 
        width: "80%", maxWidth: 320, height: "100vh",
        background: "rgba(18,18,18,0.95)", backdropFilter: "blur(24px)",
        zIndex: 1060, boxShadow: "-10px 0 40px rgba(0,0,0,0.5)",
        padding: "100px 40px", display: "flex", flexDirection: "column", gap: 32,
        transition: "right 0.4s cubic-bezier(0.25, 1, 0.5, 1)"
      }}>
        <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase" }}>Navigation</div>
        {navLinks.map((item) => (
          <Link 
            key={item.name} 
            href={item.href} 
            onClick={() => setIsMenuOpen(false)}
            style={{
              fontSize: 22, fontFamily: "var(--eob-serif)", color: "var(--white)",
              textDecoration: "none", letterSpacing: "0.02em"
            }}
          >
            {item.name}
          </Link>
        ))}
        
        <div style={{ marginTop: "auto", borderTop: "1px solid var(--hairline-soft)", paddingTop: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 16 }}>Contact</div>
          <a href="tel:+998781130773" style={{
            fontFamily: "var(--eob-mono)", fontSize: 15, color: "var(--silver)",
            textDecoration: "none", display: "block", marginBottom: 12
          }}>+998 78 113 07 73</a>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>Tashkent, Uzbekistan</div>
        </div>
      </div>
    </>
  );
};
