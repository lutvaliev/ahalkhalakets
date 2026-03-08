import React, { useState } from 'react';
import './ContactPage.css';
import { PageHero, Reveal, QuoteSection, SiteFooter } from '../../ui/Shared';

const CONTACT_INFO = [
  ['Management', 'Zinedine MMA Management', 'For booking and business inquiries'],
  ['Bookings & Appearances', 'management@tsarukyan.com', 'Events, sponsorships, endorsements'],
  ['Media & Press', 'press@tsarukyan.com', 'Interview requests, media credentials']
];

const SOCIALS = ['Instagram', 'X · Twitter', 'YouTube', 'Telegram', 'TikTok', 'UFC Profile'];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = () => {
    if (sent) return;
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1200);
  };

  return (
    <>
      <PageHero eyebrow="Get In Touch" title="Contact &" accent="Social" />

      <div className="section-wrap" style={{ paddingBottom: 0 }}>
        <div className="contact-grid">
          <Reveal>
            <div>
              <p className="section-label">Contact Information</p>
              {CONTACT_INFO.map(([l, v, s]) => (
                <div key={l} className="ci-item">
                  <div className="ci-label">{l}</div>
                  <div className="ci-value">{v}</div>
                  <div className="ci-sub">{s}</div>
                </div>
              ))}
              <p className="section-label" style={{ marginTop: 36 }}>Follow The Armenian</p>
              <div className="social-links">
                {SOCIALS.map(s => <a key={s} className="soc-link" href="#">{s}</a>)}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="section-label">Send A Message</p>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-input" placeholder="Full name" />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" className="form-input" placeholder="e.g. Booking Inquiry" />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Write your message here..." />
              </div>
              <button className="form-submit" onClick={handleSubmit} disabled={sent}>
                {sent ? 'Sent ✦' : sending ? 'Sending...' : 'Send Message'}
              </button>
              {sent && <p className="form-success">✦ Message sent. We will be in touch.</p>}
            </div>
          </Reveal>
        </div>
      </div>

      <div style={{ marginTop: 80 }}>
        <QuoteSection
          text={"Everything I have, I give.\nThat is the Armenian way."}
          attr="— Arman Tsarukyan"
        />
      </div>

      <SiteFooter />
    </>
  );
}
