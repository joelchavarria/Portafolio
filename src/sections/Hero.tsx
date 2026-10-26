import type { FC } from "react";
import { buildWhatsAppUrl, heroData } from "../data/portfolioData";

export const Hero: FC = () => {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1
          id="hero-title"
          style={{
            margin: "18px 0 4px",
            fontSize: 30,
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          {heroData.name}
        </h1>
        <p
          style={{
            margin: "0 0 8px",
            fontSize: 14,
            color: "#a5b4fc",
            fontWeight: 500,
          }}
        >
          {heroData.role}
        </p>
        <p
          style={{
            margin: "0 0 12px",
            fontSize: 16,
            color: "#9ca3af",
          }}
        >
          {heroData.punchline}
        </p>
        <p
          style={{
            margin: "0 0 20px",
            fontSize: 14,
            color: "#9ca3af",
            maxWidth: 520,
          }}
        >
          {heroData.summary}
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="#proyectos" className="btn">
            {heroData.ctaPrimary}
          </a>
          <a
            href={buildWhatsAppUrl("Hola Joel, vi tu portafolio y me gustaría conversar contigo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            {heroData.ctaSecondary}
          </a>
          <a
            href="https://www.linkedin.com/in/joel-chavarria-89422819a"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
