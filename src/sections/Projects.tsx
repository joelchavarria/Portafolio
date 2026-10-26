import type { FC } from "react";
import { Section } from "../components/Section";
import { Tag } from "../components/Tag";
import { buildWhatsAppUrl, projectsData } from "../data/portfolioData";

export const Projects: FC = () => {
  return (
    <Section
      id="proyectos"
      kicker="Proyectos"
      title="Trabajos destacados"
      subtitle="Una muestra representativa de lo que he construido."
    >
      <div
        className="card-grid"
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        }}
      >
        {projectsData.map((p) => (
          <article
            key={p.name}
            className="card"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 20,
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(148,163,184,0.15)",
              boxShadow: "0 18px 45px rgba(0,0,0,0.45)",
              padding: 18,
              transition: "transform 160ms ease, border-color 160ms ease",
              display: "grid",
              alignContent: "start",
              gap: 12,
            }}
          >
            {/* Accent */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                insetInline: 0,
                top: 0,
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(56,189,248,0.9), rgba(34,197,94,0.9), transparent)",
                opacity: 0.85,
              }}
            />

            <header style={{ display: "grid", gap: 8 }}>
              <h3
                className="card-title"
                style={{
                  margin: 0,
                  fontSize: 15,
                  fontWeight: 900,
                  color: "#e5e7eb",
                  lineHeight: 1.25,
                }}
              >
                {p.name}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: "#cbd5e1",
                  lineHeight: 1.6,
                }}
              >
                {p.description}
              </p>
            </header>

            <div className="card-body" style={{ display: "grid", gap: 12 }}>
              {/* Impact block */}
              <div
                style={{
                  padding: "12px 12px",
                  borderRadius: 14,
                  background: "rgba(148,163,184,0.06)",
                  border: "1px solid rgba(148,163,184,0.12)",
                  color: "#a5b4fc",
                  fontSize: 12,
                  lineHeight: 1.55,
                }}
              >
                <span style={{ color: "#e5e7eb", fontWeight: 900 }}>
                  Impacto:
                </span>{" "}
                {p.impact}
              </div>

              <div
                className="tag-row"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  paddingTop: 10,
                  borderTop: "1px solid rgba(148,163,184,0.10)",
                }}
              >
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>

              <div style={{ marginTop: 2 }}>
                <a
                  href={
                    p.link ||
                    buildWhatsAppUrl(
                      `Hola Joel, me gustaría conocer más sobre el proyecto: ${p.name}.`
                    )
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 12,
                    color: "#7dd3fc",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                    fontWeight: 700,
                  }}
                >
                  {p.link ? "Ver proyecto" : "Solicitar caso de estudio"} →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <style>
        {`
          @media (max-width: 860px) {
            #proyectos .card-grid {
              grid-template-columns: 1fr !important;
            }
          }

          #proyectos .card:hover {
            transform: translateY(-2px);
            border-color: rgba(56,189,248,0.35);
          }
        `}
      </style>
    </Section>
  );
};
