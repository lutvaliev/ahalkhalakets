import { PARTNERS } from "../../../data";
import "./PartnersPage.css"
import { Reveal } from "../../ui/Shared";

export default function PartnersPage() {
  return (
    <section className="partners-section">
      <div className="section-wrap">

        <Reveal>
          <p className="section-label">Partnerships</p>
        </Reveal>

        <Reveal>
          <h2 className="section-title">
            Official <span style={{ color: "var(--crimson)" }}>Partners</span>
          </h2>
        </Reveal>

        <div className="partners-grid">
          {PARTNERS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="partner-card"
            >
              <img src={p.logo} alt={p.name} className="partner-img"/>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}