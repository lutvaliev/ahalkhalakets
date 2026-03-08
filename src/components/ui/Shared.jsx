
import React from 'react';
import { useReveal } from '../../hooks';
import georgia from '../../imgs/georgia.png';
import { BatSVG, KhachkarSVG, FooterEternity } from './SVGs';

/* Reveal wrapper */
export const Reveal = ({ children, style, className = '' }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
};

/* Armenia Flag */
export const ArmFlag = ({ small }) => (
  <div className="flag-am" style={small ? { width: 30 } : {}}>
    <img src={georgia} alt="" />
  </div>
);

/* Page Hero */
export const PageHero = ({ eyebrow, title, accent }) => (
  <div className="page-hero">
    <div className="page-hero__bat"><BatSVG /></div>
    <div>
      <p className="page-eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title} <span>{accent}</span></h1>
    </div>
  </div>
);

/* Site Footer */
export const SiteFooter = ({ sub = 'Ahalkalakets · UFC Lightweight · Akhalkalaki, Georgia' }) => (
  <footer className="site-footer">
    <div>
      <div className="site-footer__name">Arman Tsarukyan</div>
      <div className="site-footer__tag">{sub}</div>
    </div>
    <div className="site-footer__emblems">
      <FooterEternity />
      <ArmFlag small />
      <svg width="24" height="24" viewBox="0 0 50 50" fill="none">
        <rect x="23" y="2" width="4" height="46" fill="#8b0000"/>
        <rect x="2" y="23" width="46" height="4" fill="#8b0000"/>
        <circle cx="25" cy="25" r="8" fill="none" stroke="#c0392b" strokeWidth="1.5"/>
      </svg>
    </div>
    <div className="site-footer__credit">
      ՅՌՅՌ · Fan Tribute<br />
      <span>✦ ARMENIAN PRIDE ✦</span>
    </div>
  </footer>
);

/* Stat Card with animated counter */
export const StatCard = ({ num, unit, desc, active, style }) => {
  const [val, setVal] = React.useState(0);
  const target = parseFloat(num);
  const isInt = Number.isInteger(target);

  React.useEffect(() => {
    if (!active) return;
    let cur = 0;
    const step = target / 40;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      setVal(isInt ? Math.round(cur) : parseFloat(cur.toFixed(1)));
    }, 30);
    return () => clearInterval(t);
  }, [target, active, isInt]);

  return (
    <div className="stat-card" style={style}>
      <div className="stat-num">
        {isInt ? val : val.toFixed(1)}
        {unit && <span className="stat-unit">{unit}</span>}
      </div>
      <div className="stat-desc">{desc}</div>
    </div>
  );
};

/* Fight row for timeline */
export const FightRow = ({ fight }) => (
  <div className="fight-row">
    <div>
      <div className="fight-opp">{fight.opp}</div>
      <div className="fight-meta">{fight.event}</div>
    </div>
    <div className={`fight-res ${fight.res === 'W' ? 'res-w' : 'res-l'}`}>{fight.res}</div>
    <div className="fight-method">
      <strong>{fight.method}</strong>
      <span>{fight.round}</span>
    </div>
  </div>
);

/* Quote section */
export const QuoteSection = ({ text, attr }) => (
  <div className="quote-wrap">
    <div className="divider" />
    <div className="khachkar-float" style={{ right: '5%', top: '20%' }}><KhachkarSVG size={120} /></div>
    <div className="khachkar-float" style={{ left: '3%', bottom: '20%', animationDelay: '-4s' }}><KhachkarSVG size={90} /></div>
    <Reveal>
      <div className="quote-section">
        <span className="quote-mark">"</span>
        <p className="quote-text">{text}</p>
        <p className="quote-attr">{attr}</p>
      </div>
    </Reveal>
    <div className="divider" />
  </div>
);
