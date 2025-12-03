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

export const Skills: FC = () => {
  const iconsMap: Record<string, ReactElement> = {
    // Core
    "TypeScript": <SiTypescript size={16} color="#3178C6" />,
    "React": <SiReact size={16} color="#61DAFB" />,
    "Next.js": <SiNextdotjs size={16} />,
    "Node.js": <SiNodedotjs size={16} color="#3C873A" />,
    "GraphQL": <SiGraphql size={16} color="#E10098" />,
    "MongoDB": <SiMongodb size={16} color="#4DB33D" />,
    "Firebase": <SiFirebase size={16} color="#FFA000" />,
    "C#": <SiSharp size={16} color="#178600" />,
    "Java": <FaJava size={16} color="#f89820" />,
    "SQL Server": <FaDatabase size={16} color="#CC2927" />,

    // DevOps
    "Linux": <FaLinux size={16} />,
    "Docker": <FaDocker size={16} />,
    "Nginx": <SiNginx size={16} color="#009639" />,
    "AWS S3": <FaAws size={16} color="#FF9900" />,
    "Railway": <SiRailway size={16} />,
    "Git": <SiGit size={16} color="#F05032" />,
    "GitHub": <SiGithub size={16} />,
  };

  const renderSkillTag = (skill: string) => (
    <Tag key={skill}>
      {iconsMap[skill] && (
        <span style={{ display: "inline-flex", marginRight: 6 }}>
          {iconsMap[skill]}
        </span>
      )}
      {skill}
    </Tag>
  );

  return (
    <Section
      id="skills"
      kicker="Skills"
      title="Stack y focos"
      subtitle="Tecnologías y habilidades utilizadas en desarrollo, DevOps e integraciones."
    >
      <div className="card-grid">
        {/* CORE STACK */}
        <article className="card">
          <h3 className="card-title">Core Stack</h3>
          <div className="tag-row">
            {skillsData.core.map((skill) => renderSkillTag(skill))}
          </div>
        </article>

        {/* INFRA / DEVOPS */}
        <article className="card">
          <h3 className="card-title">Infraestructura & DevOps</h3>
          <div className="tag-row">
            {skillsData.devops.map((skill) => renderSkillTag(skill))}
          </div>
        </article>

        {/* PLATAFORMAS */}
        <article className="card">
          <h3 className="card-title">Plataformas & Herramientas</h3>
          <div className="tag-row">
            {skillsData.tools.map((skill) => renderSkillTag(skill))}
          </div>
        </article>

        {/* SOFT SKILLS */}
        <article className="card">
          <h3 className="card-title">Habilidades Blandas</h3>
          <div className="tag-row">
            {skillsData.soft.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
};