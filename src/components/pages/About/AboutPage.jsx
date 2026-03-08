
import React from 'react';
import logo from "../../../imgs/logo.avif"
import './AboutPage.css';
import { TIMELINE } from '../../../data';
import { PageHero } from '../../ui/Shared';
import { Reveal, SiteFooter } from '../../ui/Shared';

const PROFILE = [
  ['Full Name', 'Arman Tsarukyan'], ['Nickname', 'Ahalkalakets'],
  ['Born', 'April 28, 1996'], ['Birthplace', 'Akhalkalaki, Armenia'],
  ['Nationality', 'Armenian'], ['Height', "5'9\" / 175 cm"],
  ['Reach', '70 in / 178 cm'], ['Weight Class', 'Lightweight (155 lbs)'],
  ['Pro Record', '23 – 3 – 0'], ['UFC Ranking', '#1 Lightweight'],
  ['Team', 'Zinedine MMA'], ['Style', 'Wrestling · Sambo · Striking'],
  ['UFC Debut', 'April 20, 2019'], ['Finish Rate', '77%'],
];

export default function AboutPage() {
  return (
    <>
      <div className="about-hero">
        <PageHero eyebrow="The Story Behind The Fighter" title="AHAL" accent="KALAKETS" />
        <img className="about-img" src={logo} alt="Arman Tsarukyan emblem" />
      </div>
      <div className="about-grid">
        <div className="about-bio">
          <Reveal>
            <p className="section-label">Biography</p>
            <p>Born on <strong>April 28, 1996</strong> in <span className="highlight">Akhalkalaki, Georgia</span> — the second-largest city in Armenia, a place shaped by earthquake, resilience, and fierce national pride.</p>
            <p>By his teens he was competing at national level in <strong>freestyle wrestling</strong> and <strong>combat sambo</strong>, disciplines that would form the backbone of his devastating MMA style. He compiled an elite amateur record before signing with the UFC in 2019.</p>
            <p>His UFC debut — a competitive loss to the man who would later become lightweight champion, <span className="highlight">Islam Makhachev</span> — immediately established him as a name to watch. From that moment, Arman embarked on one of the most impressive win streaks in the division.</p>
            <p>He knocked out former champions, submitted dangerous grapplers, and out-pointed elite strikers on the way to earning a <strong>title shot at UFC 302</strong>. Five rounds. Full circle. The loss only adds to the legend.</p>
            <p>Today, <span className="highlight">Arman Tsarukyan</span> stands as the #1 ranked lightweight in the UFC — a complete fighter, a quiet warrior, and a living symbol of Armenian greatness.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 30, alignItems: 'center' }}>
              <span className="arm-orn">✦</span>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.35em', color: 'var(--dim)' }}>Akhalkalaki · GEORGIA · UFC LW #1</span>
              <span className="arm-orn">✦</span>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="section-label">Fighter Profile</p>
          <table className="info-table">
            <tbody>
              {PROFILE.map(([k, v]) => (
                <tr key={k}><td>{k}</td><td>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>

      <div className="divider" />

      <div className="tl-section">
        <div className="section-wrap">
          <Reveal><p className="section-label">Career Timeline</p></Reveal>
          <Reveal><h2 className="section-title">The <span style={{ color: 'var(--crimson)' }}>Journey</span></h2></Reveal>
          <div className="tl-tree">
            {TIMELINE.map((t, i) => (
              <Reveal key={i}>
                <div className={`tl-row ${i % 2 === 0 ? "left" : "right"}`}>

                  <div className="tl-node">
                    <div className="tl-dot"></div>
                    <div className="tl-branch"></div>
                  </div>

                  <div className="tl-card">
                    <div className="tl-img">
                      <img src={t.img} alt={t.title} />
                    </div>

                    <div>
                      <div className="tl-year">{t.year}</div>
                      <div className="tl-title">{t.title}</div>
                      <div className="tl-desc">{t.desc}</div>
                    </div>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
