// Server Component — no "use client" needed
import React from 'react';
import { BurgerIcon } from './BurgerIcon';

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
