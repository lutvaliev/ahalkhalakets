import React from 'react';
import './MerchPage.css';
import { MERCH } from '../../../data';
import { PageHero, Reveal, SiteFooter } from '../../ui/Shared';

export default function MerchPage() {
  return (
    <>
      <PageHero eyebrow="Official Fighter Merchandise" title="The" accent="Collection" />
      <div className="section-wrap">
        <Reveal>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.25em', color: 'var(--dim)', marginBottom: 50 }}>
            ✦ &nbsp; All proceeds support The Armenian's team &nbsp; ✦ &nbsp; Free shipping on orders over $80 &nbsp; ✦
          </p>
        </Reveal>
        <div className="merch-grid">
          {MERCH.map((m, i) => (
            <Reveal key={i}>
              <div className="merch-card">
                <div className={`merch-img${m.gold ? ' gold' : ''}`}>
                  <img src={m.img} alt="" />
                  {m.badge && <div className="merch-badge">{m.badge}</div>}
                </div>
                <div className="merch-body">
                  <div className="merch-name">{m.name}</div>
                  <div className="merch-desc">{m.desc}</div>
                  <div className="merch-footer">
                    <div className="merch-price">{m.price}</div>
                    <button className="merch-btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <SiteFooter sub="Ahalkalakets · Official Merch Store" />
    </>
  );
}
