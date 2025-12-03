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
      <div className="card-grid">
        {experienceData.map((exp) => (
          <article
            key={`${exp.company}-${exp.role}-${exp.period}`}
            className="card"
          >
            <header>
              <h3 className="card-title">{exp.role}</h3>
              <div className="card-meta">
                {exp.company} · {exp.location}
              </div>
              <div
                className="card-meta"
                style={{ marginTop: 2, fontSize: 11 }}
              >
                {exp.period}
              </div>
            </header>
            <div className="card-body">
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 16,
                  listStyle: "disc",
                }}
              >
                {exp.bullets.map((b) => (
                  <li key={b} style={{ marginBottom: 4 }}>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="tag-row">
                {exp.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
