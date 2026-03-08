import React, { useState } from 'react';
import './FightsPage.css';
import { FIGHTS } from '../../../data';
import { PageHero, Reveal, SiteFooter } from '../../ui/Shared';

const FILTERS = [
  ['all', 'All Fights'], ['win', 'Wins Only'], ['loss', 'Losses Only'], ['ufc', 'UFC Only'],
];

export default function FightsPage() {
  const [filter, setFilter] = useState('all');

  const filtered = FIGHTS.filter(f => {
    if (filter === 'win')  return f.res === 'W';
    if (filter === 'loss') return f.res === 'L';
    if (filter === 'ufc')  return f.org === 'ufc';
    return true;
  });

  return (
    <>
      <PageHero eyebrow="Complete Professional Record" title="Fight" accent="Record" />

      <div className="section-wrap">
        <Reveal>
          <div className="fights-summary">
            {[['23','Wins'],['3','Losses'],['9','KO / TKO'],['6','Submissions']].map(([n, l]) => (
              <div key={l} className="stat-card" style={{ padding: '24px 40px' }}>
                <div className="stat-num">{n}</div>
                <div className="stat-desc">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="filter-row">
            {FILTERS.map(([key, label]) => (
              <button key={key} className={`filter-btn${filter === key ? ' active' : ''}`} onClick={() => setFilter(key)}>
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          {filtered.map(f => (
            <a
              href={f.link}
              key={f.n}
              className="fight-card"
              target="_blank"
              rel="noreferrer"
            >
              <div className="fight-card__num">#{f.n}</div>
              <div>
                <div className="fight-card__name">{f.opp}</div>
                <div className="fight-card__event">{f.event}</div>
              </div>
              <div className={`badge ${f.res === 'W' ? 'badge-w' : 'badge-l'}`}>{f.res}</div>
              <div className="fight-card__det">
                <div className="fight-card__method">{f.method}</div>
                <div className="fight-card__round">{f.round}</div>
              </div>
            </a>
          ))}
        </Reveal>
      </div>

      <SiteFooter sub="Ahalkalakets · UFC Lightweight · 23–3" />
    </>
  );
}
