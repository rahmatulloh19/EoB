const fs = require('fs');
let content = fs.readFileSync('designs/landing-desktop.jsx', 'utf-8');
content = content.replace(/window\.LandingDesktop = LandingDesktop;[\s\S]*/, 'export default LandingDesktop;');
content = content.replace(/window\.BRANCHES = BRANCHES;[\s\S]*/, '');
content = content.replace(/window\.REVIEWS = REVIEWS;[\s\S]*/, '');
const imports = `"use client";\nimport React from "react";\nimport { EobLogo, BurgerIcon, ImagePlaceholder, SectionEyebrow, SectionTitle, StarRating } from "./shared";\n`;
fs.writeFileSync('src/components/LandingDesktop.tsx', imports + content);
console.log('Done!');
