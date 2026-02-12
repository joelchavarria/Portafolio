import type { FC } from "react";
import { Section } from "../components/Section";
import { Tag } from "../components/Tag";
import { experienceData } from "../data/portfolioData";

export const Experience: FC = () => {
  return (
    <Section
      id="experiencia"
      kicker="Experiencia"
      title="Trayectoria profesional"
      subtitle="Roles donde he entregado valor real al negocio."
    >
      <div
        className="card-grid"
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        }}
      >
        {experienceData.map((exp) => (
          <article
            key={`${exp.company}-${exp.role}-${exp.period}`}
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
            }}
          >
            {/* Accent bar */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                insetInline: 0,
                top: 0,
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(34,197,94,0.9), rgba(56,189,248,0.9), transparent)",
                opacity: 0.8,
              }}
            />

            <header style={{ marginBottom: 12 }}>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <h3
                  className="card-title"
                  style={{
                    margin: 0,
                    fontSize: 15,
                    fontWeight: 900,
                    color: "#e5e7eb",
                    lineHeight: 1.2,
                  }}
                >
                  {exp.role}
                </h3>

                <span
                  style={{
                    fontSize: 11,
                    color: "#94a3b8",
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.period}
                </span>
              </div>

              <div
                className="card-meta"
                style={{
                  marginTop: 6,
                  fontSize: 12,
                  color: "#cbd5e1",
                }}
              >
                <span style={{ fontWeight: 800 }}>{exp.company}</span>
                <span style={{ color: "#94a3b8" }}> · {exp.location}</span>
              </div>
            </header>

            <div className="card-body" style={{ display: "grid", gap: 12 }}>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 16,
                  listStyle: "disc",
                  color: "#cbd5e1",
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                {exp.bullets.map((b) => (
                  <li key={b} style={{ marginBottom: 6 }}>
                    {b}
                  </li>
                ))}
              </ul>

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
                {exp.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <style>
        {`
          @media (max-width: 860px) {
            #experiencia .card-grid {
              grid-template-columns: 1fr !important;
            }
          }

          #experiencia .card:hover {
            transform: translateY(-2px);
            border-color: rgba(34,197,94,0.35);
          }
        `}
      </style>
    </Section>
  );
};
