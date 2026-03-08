import React, { useRef, useEffect, useState } from 'react';
import './HomePage.css';
import { FIGHTS } from '../../../data';
import { ArmenianEmblem, EternitySVG, BatSVG } from '../../ui/SVGs';
import { Reveal, ArmFlag, StatCard, FightRow, QuoteSection, SiteFooter } from '../../ui/Shared';
import PartnersPage from '../Partners/PartnersPage';
import { useSmoke } from '../../../hooks';

export default function HomePage({ navigate }) {
  const smokeRef = useRef(null);
  const { start, stop } = useSmoke(smokeRef);
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsActive(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Hero parallax
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) hero.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <div id="hero" className="hero">
        <div className="hero__emblem"><ArmenianEmblem /></div>
        <div className="hero__bat"><BatSVG /></div>
        <div className="hero__smoke" ref={smokeRef} />

        <p className="hero__eyebrow">UFC Lightweight Contender · Armenia</p>
        <h1 className="hero__name">
          <span className="first">Arman</span>
          <span className="last">Tsarukyan</span>
        </h1>
        <p className="hero__nickname">❖ &nbsp; Ahalkalakets &nbsp; ❖</p>

        <div className="hero__record">
          <div className="record-stat"><div className="record-num">23</div><div className="record-label">Wins</div></div>
          <div className="record-div" />
          <div className="record-stat"><div className="record-num">3</div><div className="record-label">Losses</div></div>
          <div className="record-div" />
          <div className="record-stat"><div className="record-num">#1</div><div className="record-label">UFC LW Rank</div></div>
        </div>

        <div className="hero__cta">
          <button className="btn-primary" onClick={() => navigate('fights')}>Fight Record</button>
          <button className="btn-ghost" onClick={() => navigate('about')}>The Story</button>
        </div>

        <div className="hero__scroll">
          <span>Descend</span>
          <div className="scroll-arrow" />
        </div>
      </div>

      <div className="divider" />

      {/* STATS */}
      <div className="stats-strip">
        <div className="section-wrap" ref={statsRef}>
          <Reveal><p className="section-label">Combat Statistics</p></Reveal>
          <Reveal>
            <div className="stats-grid">
              <StatCard num={77}  unit="%" desc="Finish Rate"         active={statsActive} />
              <StatCard num={6.8}        desc="Strikes / min"         active={statsActive} />
              <StatCard num={50}  unit="%" desc="Striking Accuracy"   active={statsActive} />
              <StatCard num={70}  unit="in" desc="Reach"             active={statsActive} />
              <StatCard num={9}          desc="KO / TKO Wins"         active={statsActive} />
              <StatCard num={6}          desc="Submission Wins"        active={statsActive} />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="divider" />

      {/* ABOUT TEASER */}
      <div className="home-about">
        <div className="about-text">
          <Reveal>
            <p className="section-label">Origin</p>
            <h2 className="section-title">
              Born in<br />
              <span style={{ color: 'var(--crimson)' }}>Akhalkalaki,<br />Georgia</span>
            </h2>
            <p>Born on <strong>April 28, 1996</strong> in Akhalkalaki, Georgia — a city forged by hardship and resilience. Arman Tsarukyan carries that iron in every exchange, in every fight.</p>
            <p>A decorated <strong>combat sambo</strong> and <strong>freestyle wrestling</strong> champion before entering the UFC, he brings a relentless pressure style that has dismantled former champions and elite contenders alike.</p>
            <p><span className="highlight">Ahalkalakets</span> is not just a nickname. It is a declaration of identity — of a warrior from a nation of warriors.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 30, alignItems: 'center' }}>
              <span className="arm-orn">✦</span>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.35em', color: 'var(--dim)' }}>AKHALKALAKI · GEORGIA · UFC</span>
              <span className="arm-orn">✦</span>
            </div>
            <button className="btn-ghost" style={{ marginTop: 28 }} onClick={() => navigate('about')}>Full Story</button>
          </Reveal>
        </div>

        <Reveal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="oct-container">
            <div className="oct-ring" style={{ animationDuration: '20s' }} />
            <div className="oct-ring" style={{ inset: 20, borderColor: 'var(--crimson)', animationDuration: '15s', animationDirection: 'reverse', opacity: 0.2 }} />
            <div className="oct-ring" style={{ inset: 40, borderStyle: 'dashed', animationDuration: '30s', opacity: 0.15 }} />
            <div className="oct-center">
              <ArmFlag />
              <div style={{ marginTop: 16, fontFamily: "'Cinzel',serif", fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--blood)', opacity: 0.8 }}>GEORGIA</div>
              <EternitySVG />
            </div>
          </div>
        </Reveal>
      </div>

      {/* QUOTE */}
      <QuoteSection
        text={"I don't come to survive. I come to destroy.\nEvery fight is a war, and I was born for war."}
        attr="— Arman Tsarukyan"
      />

      {/* RECENT FIGHTS */}
      <div className="fights-bg">
        <div className="section-wrap">
          <Reveal><p className="section-label">Fight Record — Recent</p></Reveal>
          <Reveal><h2 className="section-title">The <span style={{ color: 'var(--crimson)' }}>Path</span></h2></Reveal>
          <Reveal>
            <div className="timeline">
              {FIGHTS.slice(0, 5).map(f => <FightRow key={f.n} fight={f} />)}
            </div>
          </Reveal>
          <div style={{ marginTop: 40 }}>
            <button className="btn-ghost" onClick={() => navigate('fights')}>Full Fight Record</button>
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      <PartnersPage />

      <SiteFooter />
    </>
  );
}
