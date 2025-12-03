import type { FC } from "react";
import { Section } from "../components/Section";
import { Tag } from "../components/Tag";
import { projectsData } from "../data/portfolioData";

export const Projects: FC = () => {
  return (
    <Section
      id="proyectos"
      kicker="Proyectos"
      title="Trabajos destacados"
      subtitle="Una muestra representativa de lo que he construido."
    >
      <div className="card-grid">
        {projectsData.map((p) => (
          <article key={p.name} className="card">
            <header>
              <h3 className="card-title">{p.name}</h3>
            </header>
            <div className="card-body">
              <p style={{ marginBottom: 6 }}>{p.description}</p>
              <p
                style={{
                  marginTop: 0,
                  marginBottom: 8,
                  fontSize: 12,
                  color: "#a5b4fc",
                }}
              >
                Impacto: {p.impact}
              </p>
              <div className="tag-row">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              {p.link && p.link !== "#" ? (
                <div style={{ marginTop: 10 }}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: 12, color: "#38bdf8" }}
                  >
                    Ver más →
                  </a>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
