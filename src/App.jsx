
import React, { useState, useEffect, useRef } from 'react';
import Nav from './components/ui/Nav';
import HomePage from './components/pages/Home/HomePage';
import AboutPage from './components/pages/About/AboutPage';
import FightsPage from './components/pages/FightsPage/FightsPage';
import NewsPage from './components/pages/News/NewsPage';
import MerchPage from './components/pages/Merch/MerchPage';
import ContactPage from './components/pages/Contact/ContactPage';

const PAGES = {
  home:    HomePage,
  about:   AboutPage,
  fights:  FightsPage,
  news:    NewsPage,
  merch:   MerchPage,
  contact: ContactPage,
};

export default function App() {
  const [page, setPage] = useState('home');
  const cursorRef = useRef(null);
  const flareRef = useRef(null);

  // Custom cursor
  useEffect(() => {
    const move = e => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      if (flareRef.current) {
        flareRef.current.style.left = e.clientX + 'px';
        flareRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, []);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  const PageComponent = PAGES[page];

  return (
    <>
      <div className="cursor-dot" ref={cursorRef} />
      <div className="cursor-flare" ref={flareRef} />
      <Nav current={page} navigate={navigate} />
      <div style={{ paddingTop: 64 }}>
        <PageComponent navigate={navigate} />
      </div>
    </>
  );
}
