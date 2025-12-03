import type { FC } from "react";
import { Section } from "../components/Section";
import { educationData } from "../data/portfolioData";

export const Education: FC = () => {
  return (
    <Section
      id="educacion"
      kicker="Formación"
      title="Educación y certificaciones"
      subtitle="Base académica y formación complementaria que respaldan mi experiencia."
    >
      <div
        style={{
          display: "grid",
          gap: 18,
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
        }}
      >
        <div
          style={{
            background: "rgba(15,23,42,0.9)",
            borderRadius: 18,
            padding: 16,
            border: "1px solid rgba(31,41,55,0.9)",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            {educationData.degree}
          </h3>
          <p
            style={{
              margin: "4px 0 0",
              fontSize: 13,
              color: "#9ca3af",
            }}
          >
            {educationData.institution}
            <br />
            {educationData.year}
          </p>
        </div>

        <div>
          <h4
            style={{
              margin: "0 0 6px",
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: 0.12,
              color: "#a5b4fc",
            }}
          >
            Cursos y certificaciones
          </h4>
          <ul
            style={{
              margin: 0,
              paddingLeft: 16,
              fontSize: 13,
              color: "#9ca3af",
            }}
          >
            {educationData.extras.map((item) => (
              <li key={item} style={{ marginBottom: 4 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
