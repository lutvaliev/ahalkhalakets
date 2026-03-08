
import React, { useState, useEffect } from 'react';
import './Nav.css';

const PAGES = [
  ['home', 'Home'], ['about', 'About'], ['fights', 'Fights'],
  ['news', 'News'], ['merch', 'Merch'], ['contact', 'Contact'],
];

export default function Nav({ current, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const handleNavigate = (key) => {
    navigate(key);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <button className="nav__logo" onClick={() => navigate('home')}>
        Arman <span>Tsarukyan</span>
      </button>
      <button
        type="button"
        className={`nav__toggle${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
      </button>
      <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
        {PAGES.map(([key, label]) => (
          <li key={key}>
            <button
              className={current === key ? 'active' : ''}
              type="button"
              onClick={() => handleNavigate(key)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
