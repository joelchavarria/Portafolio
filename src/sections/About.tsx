import type { FC } from "react";
import { Section } from "../components/Section";
import { aboutData } from "../data/portfolioData";

export const About: FC = () => {
  return (
    <Section
      id="sobre-mi"
      kicker="Perfil"
      title="Sobre mí"
      subtitle="Un ingeniero que disfruta tanto del backend como de la consola."
    >
      <div
        style={{
          display: "grid",
          gap: 18,
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
        }}
      >
        <p
          style={{
            whiteSpace: "pre-line",
            fontSize: 14,
            color: "#e5e7eb",
          }}
        >
          {aboutData.text}
        </p>
        <ul
          style={{
            margin: 0,
            paddingLeft: 16,
            fontSize: 13,
            color: "#9ca3af",
          }}
        >
          {aboutData.highlights.map((h) => (
            <li key={h} style={{ marginBottom: 6 }}>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
