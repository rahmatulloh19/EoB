// Server Component — no "use client" needed
import React from 'react';

export const StarRating = ({ value = 5, size = 12, color = "var(--color-gold)" }: { value?: number, size?: number, color?: string }) => (
  <div style={{ display: "inline-flex", gap: 2, color }}>
    {[1,2,3,4,5].map(i => (
      <svg key={i} width={size} height={size} viewBox="0 0 16 16" fill={i <= value ? color : "transparent"} stroke={color} strokeWidth="1">
        <path d="M8 1.5 L10 6 L14.5 6.5 L11 9.5 L12 14 L8 11.5 L4 14 L5 9.5 L1.5 6.5 L6 6 Z" />
      </svg>
    ))}
  </div>
);
