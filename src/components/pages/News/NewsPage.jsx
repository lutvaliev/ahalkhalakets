import React from 'react';
import './NewsPage.css';
import { NEWS } from '../../../data';
import news1 from "../../../imgs/news1.png"
import { PageHero, SiteFooter } from '../../ui/Shared';

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="Latest Updates & Media" title="News &" accent="Media" />
      <div className="section-wrap">
        <div className="news-grid">

          {/* Featured */}
            <div className="news-card news-featured">
              <div>
                <div className="news-tag">Featured</div>
                <div className="news-date">Feb 2026</div>
                <div className="news-headline">Arman Tsarukyan ignites massive brawl after punching Georgio Poullas at RAF 6</div>
                <div className="news-excerpt">The No. 2-ranked UFC lightweight contender triggered a massive brawl at RAF 6 at the end of his match against Georgio Poullas, shoving his opponent down after time expired and throwing punches. All hell immediately broke loose, with more than a dozen people flooding the mat to either break up the fight or start a new one.</div>
                <span className="news-more">Read Full Story →</span>
              </div>
              <div className="news-feat-img">
                <img src={news1} alt="" />
              </div>
            </div>

          {NEWS.map((n, i) => (
              <div className="news-card" key={i}>
                <div className="news-tag">{n.tag}</div>
                <div className="news-date">{n.date}</div>
                <div className="news-headline">{n.headline}</div>
                <div className="news-excerpt">{n.excerpt}</div>
                <span className="news-more">Read More →</span>
              </div>
          ))}
        </div>
      </div>
      <SiteFooter sub="Ahalkalakets · News & Media" />
    </>
  );
}
