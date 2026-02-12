import type { FC } from "react";
import { Section } from "../components/Section";
import { educationData } from "../data/portfolioData";

export const Education: FC = () => {
  return (
    <Section
      id="educacion"
      kicker="Formación"
      title="Educación y certificaciones"
      subtitle="Base académica y formación complementaria enfocada en producto, infraestructura y seguridad."
    >
      <div
        style={{
          display: "grid",
          gap: 22,
          gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 1fr)",
          alignItems: "start",
        }}
      >
        {/* Card principal */}
        <div
          style={{
            background: "rgba(15,23,42,0.9)",
            borderRadius: 20,
            padding: 18,
            border: "1px solid rgba(148,163,184,0.15)",
            boxShadow: "0 18px 45px rgba(0,0,0,0.45)",
          }}
        >
          <div style={{ display: "grid", gap: 10 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
                color: "#94a3b8",
              }}
            >
              <span
                aria-hidden
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#22c55e",
                  boxShadow: "0 0 0 3px rgba(34,197,94,0.18)",
                }}
              />
              Formación académica
            </div>

            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#e5e7eb" }}>
              {educationData.degree}
            </h3>

            <p style={{ margin: 0, fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>
              <strong style={{ color: "#cbd5e1" }}>{educationData.institution}</strong>
              <br />
              {educationData.year}
            </p>

            <div
              style={{
                marginTop: 8,
                padding: "10px 12px",
                borderRadius: 14,
                background: "rgba(148,163,184,0.06)",
                border: "1px solid rgba(148,163,184,0.12)",
                fontSize: 13,
                color: "#cbd5e1",
                lineHeight: 1.55,
              }}
            >
              Enfocado en fortalecer bases de ingeniería y aplicar aprendizaje en entornos
              productivos (infraestructura, automatización y desarrollo).
            </div>
          </div>
        </div>

        {/* Certificaciones / cursos */}
        <div>
          <h4
            style={{
              margin: "0 0 10px",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: 1.2,
              color: "#a5b4fc",
              fontWeight: 800,
            }}
          >
            Cursos y certificaciones
          </h4>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {educationData.extras.map((item) => (
              <span
                key={item}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "9px 12px",
                  borderRadius: 999,
                  background: "rgba(2,6,23,0.55)",
                  border: "1px solid rgba(148,163,184,0.16)",
                  color: "#cbd5e1",
                  fontSize: 13,
                  lineHeight: 1,
                  transition: "transform 140ms ease, border-color 140ms ease",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 999,
                    background: "#38bdf8",
                    boxShadow: "0 0 0 3px rgba(56,189,248,0.14)",
                  }}
                />
                {item}
              </span>
            ))}
          </div>

          <div
            style={{
              marginTop: 14,
              fontSize: 13,
              color: "#94a3b8",
              lineHeight: 1.6,
            }}
          >
            Si querés validar rápidamente mi enfoque: priorizo seguridad, estabilidad operativa y
            entrega incremental (sin “magia”, solo ingeniería bien hecha).
          </div>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 860px) {
            #educacion > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </Section>
  );
};
