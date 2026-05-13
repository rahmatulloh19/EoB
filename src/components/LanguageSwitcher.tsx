'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'ru', label: 'RU' },
    { code: 'uz', label: 'UZ' },
    { code: 'en', label: 'EN' },
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--silver)',
          fontFamily: "var(--eob-sans), 'Inter', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.1em',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '8px 12px',
          borderRadius: 4,
          transition: 'all 0.2s ease',
        }}
        className="hover:bg-white/5"
      >
        {locale.toUpperCase()}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            opacity: 0.6
          }}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            background: '#1A1814',
            border: '1px solid var(--hairline-soft)',
            borderRadius: 6,
            padding: '6px',
            minWidth: 80,
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            zIndex: 1001,
            animation: 'eob-fade-in 0.2s ease-out'
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '8px 12px',
                background: 'transparent',
                border: 'none',
                borderRadius: 4,
                color: locale === lang.code ? 'var(--gold)' : 'var(--silver)',
                fontFamily: "var(--eob-sans), 'Inter', sans-serif",
                fontSize: 11,
                fontWeight: locale === lang.code ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              className="hover:bg-white/5"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}

      <style jsx global>{`
        @keyframes eob-fade-in {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
