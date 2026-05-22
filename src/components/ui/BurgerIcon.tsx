// Server Component — no "use client" needed
import React from 'react';

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
