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
        <div className="chip">
          <span className="chip-dot" />
          Disponible para roles de desarrollo y DevOps.
        </div>
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

      <div
        style={{
          justifySelf: "center",
          width: 220,
          height: 220,
          borderRadius: "30px",
          border: "1px solid rgba(148,163,184,0.4)",
          background:
            "radial-gradient(circle at 20% 0%, #22c55e 0, rgba(15,23,42,1) 55%, #020617 100%)",
          position: "relative",
          boxShadow: "0 25px 60px rgba(0,0,0,0.7)",
          padding: 18,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 11, color: "#9ca3af" }}>Status</div>
        <div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>Alias</div>
          <div style={{ fontSize: 16, fontWeight: 600 }}>DevOps 007</div>
        </div>
        <div style={{ fontSize: 11, color: "#9ca3af" }}>
          “Un solo shell para gobernarlos a todos.”
        </div>
      </div>
    </section>
  );
};
