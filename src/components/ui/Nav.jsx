
import React, { useState, useEffect } from 'react';
import './Nav.css';

const PAGES = [
  ['home', 'Home'], ['about', 'About'], ['fights', 'Fights'],
  ['news', 'News'], ['merch', 'Merch'], ['contact', 'Contact'],
];

export default function Nav({ current, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <button className="nav__logo" onClick={() => navigate('home')}>
        Arman <span>Tsarukyan</span>
      </button>
      <ul className="nav__links">
        {PAGES.map(([key, label]) => (
          <li key={key}>
            <button
              className={current === key ? 'active' : ''}
              type="button"
              onClick={() => navigate(key)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
