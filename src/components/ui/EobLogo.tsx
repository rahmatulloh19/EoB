// Server Component — no "use client" needed
import React from 'react';

export const EobLogo = ({ size = 24, align = "left", className = "" }: { size?: number, align?: "left" | "center", className?: string }) => (
  <div className={className} style={{ 
    display: "flex", 
    flexDirection: "column",
    alignItems: align === "center" ? "center" : "flex-start",
    gap: 8,
    width: align === "center" ? "100%" : "auto"
  }}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img 
      src="/assets/logo.png?v=3" 
      alt="Embassy of Burgers" 
      style={{ height: size * 2.5, width: "auto", objectFit: "contain" }} 
    />
  </div>
);
