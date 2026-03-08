
import React from 'react';

export const BatSVG = () => (
  <svg viewBox="0 0 900 400" fill="none" style={{ width: '90vw', maxWidth: 900 }}>
    <path d="M450 200 C420 180 350 120 250 80 C180 50 80 60 20 90 C60 110 120 130 180 160 C240 190 300 200 340 195 C380 190 420 185 440 190 Z" fill="#8b0000"/>
    <path d="M450 200 C480 180 550 120 650 80 C720 50 820 60 880 90 C840 110 780 130 720 160 C660 190 600 200 560 195 C520 190 480 185 460 190 Z" fill="#8b0000"/>
    <ellipse cx="450" cy="195" rx="30" ry="25" fill="#8b0000"/>
    <path d="M435 175 L425 145 L445 170 Z" fill="#8b0000"/>
    <path d="M465 175 L475 145 L455 170 Z" fill="#8b0000"/>
    <path d="M440 192 C400 188 340 188 270 170 C220 156 160 130 80 100" stroke="#c0392b" strokeWidth="0.5" opacity="0.5" fill="none"/>
    <path d="M460 192 C500 188 560 188 630 170 C680 156 740 130 820 100" stroke="#c0392b" strokeWidth="0.5" opacity="0.5" fill="none"/>
  </svg>
);

export const KhachkarSVG = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="48" y="5" width="4" height="90" fill="#8b0000"/>
    <rect x="5" y="48" width="90" height="4" fill="#8b0000"/>
    <rect x="30" y="20" width="4" height="60" fill="#8b0000"/>
    <rect x="66" y="20" width="4" height="60" fill="#8b0000"/>
    <rect x="20" y="30" width="60" height="4" fill="#8b0000"/>
    <rect x="20" y="66" width="60" height="4" fill="#8b0000"/>
    <circle cx="50" cy="50" r="12" fill="none" stroke="#c0392b" strokeWidth="2"/>
    <circle cx="50" cy="50" r="4" fill="#8b0000"/>
  </svg>
);

export const ArmenianEmblem = () => (
  <svg width="50" height="60" viewBox="0 0 50 60" fill="none">
    <rect x="23" y="0" width="4" height="60" fill="#8b0000"/>
    <rect x="0" y="23" width="50" height="4" fill="#8b0000"/>
    <rect x="12" y="10" width="4" height="30" fill="#8b0000" opacity="0.5"/>
    <rect x="34" y="10" width="4" height="30" fill="#8b0000" opacity="0.5"/>
    <rect x="10" y="12" width="30" height="4" fill="#8b0000" opacity="0.5"/>
    <rect x="10" y="34" width="30" height="4" fill="#8b0000" opacity="0.5"/>
    <circle cx="25" cy="27" r="6" fill="none" stroke="#c0392b" strokeWidth="1.5"/>
  </svg>
);

export const EternitySVG = ({ size = 60 }) => (
  <svg width={size} height={size/2} viewBox="0 0 60 30" style={{ opacity: 0.5 }}>
    <path d="M5 15 C5 8 12 8 20 15 C28 22 35 22 43 15 C51 8 58 8 58 15 C58 22 51 22 43 15 C35 8 28 8 20 15 C12 22 5 22 5 15 Z" stroke="#8b0000" fill="none" strokeWidth="1.5"/>
  </svg>
);

export const FooterEternity = () => (
  <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
    <path d="M5 30 C5 18 15 18 28 30 C41 42 51 42 58 30 C51 18 41 18 28 30 C15 42 5 42 5 30 Z" stroke="#8b0000" fill="none" strokeWidth="2"/>
  </svg>
);
