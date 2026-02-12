import type { FC, ReactElement } from "react";
import { Section } from "../components/Section";
import { skillsData } from "../data/portfolioData";
import { Tag } from "../components/Tag";

// ICONOS
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGraphql,
  SiMongodb,
  SiFirebase,
  SiSharp,
  SiNginx,
  SiRailway,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaLinux, FaDocker, FaAws, FaJava, FaDatabase } from "react-icons/fa";

type IconMap = Partial<Record<string, ReactElement>>;

export const Skills: FC = () => {
  const iconStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    opacity: 0.95,
  };

  const iconsMap: IconMap = {
    // Core
    TypeScript: <SiTypescript size={16} />,
    React: <SiReact size={16} />,
    "Next.js": <SiNextdotjs size={16} />,
    "Node.js": <SiNodedotjs size={16} />,
    GraphQL: <SiGraphql size={16} />,
    MongoDB: <SiMongodb size={16} />,
    Firebase: <SiFirebase size={16} />,
    "C#": <SiSharp size={16} />,
    Java: <FaJava size={16} />,
    "SQL Server": <FaDatabase size={16} />,

    // DevOps
    Linux: <FaLinux size={16} />,
    Docker: <FaDocker size={16} />,
    Nginx: <SiNginx size={16} />,
    "AWS S3": <FaAws size={16} />,
    Railway: <SiRailway size={16} />,
    Git: <SiGit size={16} />,
    GitHub: <SiGithub size={16} />,
  };

  const renderSkillTag = (skill: string) => {
    const icon = iconsMap[skill];

    return (
      <Tag key={skill}>
        {icon ? <span style={iconStyle}>{icon}</span> : null}
        {skill}
      </Tag>
    );
  };

  return (
    <Section
      id="skills"
      kicker="Skills"
      title="Stack y focos"
      subtitle="Tecnologías y habilidades aplicadas en desarrollo, infraestructura y automatización."
    >
      <div
        className="card-grid"
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        }}
      >
        <SkillCard title="Core Stack" items={skillsData.core} renderItem={renderSkillTag} />
        <SkillCard
          title="Infraestructura & DevOps"
          items={skillsData.devops}
          renderItem={renderSkillTag}
        />
        <SkillCard
          title="Plataformas & Herramientas"
          items={skillsData.tools}
          renderItem={renderSkillTag}
        />
        <SkillCard
          title="Habilidades Blandas"
          items={skillsData.soft}
          renderItem={(skill) => <Tag key={skill}>{skill}</Tag>}
        />
      </div>

      <style>
        {`
          @media (max-width: 860px) {
            #skills .card-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </Section>
  );
};

interface SkillCardProps {
  title: string;
  items: string[];
  renderItem: (skill: string) => ReactElement;
}

const SkillCard: FC<SkillCardProps> = ({ title, items, renderItem }) => {
  return (
    <article
      className="card"
      style={{
        borderRadius: 20,
        background: "rgba(15,23,42,0.9)",
        border: "1px solid rgba(148,163,184,0.15)",
        boxShadow: "0 18px 45px rgba(0,0,0,0.45)",
        padding: 18,
        display: "grid",
        gap: 12,
      }}
    >
      <h3
        className="card-title"
        style={{
          margin: 0,
          fontSize: 13,
          textTransform: "uppercase",
          letterSpacing: 1.2,
          color: "#a5b4fc",
          fontWeight: 900,
        }}
      >
        {title}
      </h3>

      <div
        className="tag-row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {items.map((skill) => renderItem(skill))}
      </div>
    </article>
  );
};
