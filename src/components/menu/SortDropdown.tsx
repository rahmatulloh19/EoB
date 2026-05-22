'use client';
import React from 'react';

export const SortDropdown = ({ selected, onSelect, options }: { selected: string, onSelect: (val: string) => void, options: { value: string; label: string }[] }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

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

  const getArrow = (val: string) => {
    if (val === "cheapest") return "↑";
    if (val === "priciest") return "↓";
    if (val === "az") return "→";
    return "↓";
  };

  const selectedLabel = options.find(o => o.value === selected)?.label ?? selected;

  return (
    <div ref={dropdownRef} style={{ position: "relative", minWidth: 125, textAlign: "left" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-gold transition-colors"
        style={{ background: "transparent", border: "none", color: "var(--silver)", cursor: "pointer", fontSize: "inherit", padding: 0, textTransform: "inherit", letterSpacing: "inherit", width: "100%", textAlign: "left", whiteSpace: "nowrap" }}
      >
        {selectedLabel} {getArrow(selected)}
      </button>
      {isOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, marginTop: 12,
          background: "var(--surface)", border: "1px solid var(--hairline-soft)",
          padding: "8px 0", display: "flex", flexDirection: "column", gap: 4,
          minWidth: 160, zIndex: 20, boxShadow: "0 10px 30px rgba(0,0,0,0.8)"
        }}>
          {options.map(opt => (
            <button
              key={opt.value}
              onClick={() => { onSelect(opt.value); setIsOpen(false); }}
              style={{
                background: "transparent", border: "none", color: selected === opt.value ? "var(--gold)" : "var(--silver)",
                padding: "8px 16px", textAlign: "left", fontSize: 11, letterSpacing: "0.16em",
                textTransform: "uppercase", cursor: "pointer", fontFamily: "var(--sans)"
              }}
              className="hover:bg-white/5 transition-colors"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
