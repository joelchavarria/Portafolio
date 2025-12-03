import type { FC, ReactNode } from "react";

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({
  id,
  kicker,
  title,
  subtitle,
  children,
}) => {
  return (
    <section id={id} className="section">
      <header className="section-header">
        <div className="section-kicker">{kicker}</div>
        <h2 className="section-title">{title}</h2>
        {subtitle ? (
          <p className="section-subtitle">{subtitle}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
};
