import type { FC } from "react";
import { heroData } from "../data/portfolioData";

export const Hero: FC = () => {
  return (
    <section
      id="inicio"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)",
        gap: 24,
        alignItems: "center",
        marginBottom: 56,
      }}
    >
      <div>
        <h1
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
          <a href="#contacto" className="btn btn-outline">
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

     
      
        {/* <div style={{ fontSize: 11, color: "#9ca3af" }}>Status</div>
        <div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>Disponible</div>
          <div style={{ fontSize: 16, fontWeight: 600 }}>Joel Chavarría</div>
        </div>
        <div style={{ fontSize: 11, color: "#9ca3af" }}>
          “Un solo shell para gobernarlos a todos.”
        </div> */}
    

    </section>
  );
};
