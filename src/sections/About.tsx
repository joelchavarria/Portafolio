import type { FC } from "react";
import { Section } from "../components/Section";
import { aboutData } from "../data/portfolioData";

export const About: FC = () => {
  return (
    <Section
      id="sobre-mi"
      kicker="Perfil"
      title="Sobre mí"
      subtitle="Desarrollo, infraestructura y automatización en un mismo stack mental."
    >
      <div
        style={{
          display: "grid",
          gap: 32,
          gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)",
          alignItems: "start",
        }}
      >
        {/* Texto principal */}
        <div
          style={{
            fontSize: 15,
            color: "#e5e7eb",
            lineHeight: 1.7,
          }}
        >
          <p style={{ whiteSpace: "pre-line", margin: 0 }}>
            {aboutData.text}
          </p>
        </div>

        {/* Highlights en formato “cards” */}
        <div
          style={{
            display: "grid",
            gap: 14,
          }}
        >
          {aboutData.highlights.map((h) => (
            <div
              key={h}
              style={{
                padding: "14px 16px",
                borderRadius: 14,
                background: "rgba(148,163,184,0.06)",
                border: "1px solid rgba(148,163,184,0.15)",
                fontSize: 13,
                color: "#cbd5e1",
                lineHeight: 1.5,
                transition: "all 160ms ease",
              }}
            >
              <span
                style={{
                  color: "#22c55e",
                  fontWeight: 700,
                  marginRight: 6,
                }}
              >
                ▹
              </span>
              {h}
            </div>
          ))}
        </div>
      </div>

      {/* Responsive inline */}
      <style>
        {`
          @media (max-width: 860px) {
            #sobre-mi > div > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </Section>
  );
};
