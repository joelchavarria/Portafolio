import type { FC, MouseEvent } from "react";
import { useEffect, useState } from "react";

type Section = {
  id: string;
  label: string;
};

const SECTIONS: readonly Section[] = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "skills", label: "Skills" },
  { id: "contacto", label: "Contacto" },
];

const NAV_HEIGHT_PX = 64;

interface NavigationLinksProps {
  activeId: string;
  onNavigate: (id: string, event: MouseEvent<HTMLAnchorElement>) => void;
}

const NavigationLinks: FC<NavigationLinksProps> = ({ activeId, onNavigate }) => (
  <>
    {SECTIONS.map((section) => (
      <a
        key={section.id}
        className="nav-link"
        href={`#${section.id}`}
        onClick={(event) => onNavigate(section.id, event)}
        aria-current={section.id === activeId ? "location" : undefined}
      >
        {section.label}
      </a>
    ))}
  </>
);

export const Navbar: FC = () => {
  const [activeId, setActiveId] = useState<string>("inicio");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const scrollToId = (id: string, event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    setIsMobileOpen(false);
    const top = element.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT_PX;
    window.scrollTo({ top, behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (element): element is HTMLElement => Boolean(element)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveId(visible.target.id);
      },
      {
        rootMargin: `-${NAV_HEIGHT_PX + 8}px 0px -65% 0px`,
        threshold: [0.08, 0.15, 0.25, 0.4],
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={`navbar${isScrolled ? " navbar-scrolled" : ""}`}>
      <nav className="navbar-inner" aria-label="Navegación principal">
        <a className="navbar-brand" href="#inicio" onClick={(event) => scrollToId("inicio", event)}>
          <span className="navbar-monogram" aria-hidden="true">
            J
          </span>
          <span>
            <span className="navbar-name">Joel Chavarría</span>
            <span className="navbar-role">Ingeniero de Software + Infraestructura</span>
          </span>
        </a>

        <div className="navbar-actions">
          <div className="navbar-desktop-links">
            <NavigationLinks activeId={activeId} onNavigate={scrollToId} />
            <a className="nav-contact" href="#contacto" onClick={(event) => scrollToId("contacto", event)}>
              Contactar
            </a>
          </div>

          <button
            className="navbar-toggle"
            type="button"
            onClick={() => setIsMobileOpen((isOpen) => !isOpen)}
            aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
          >
            <span aria-hidden="true">☰</span>
          </button>
        </div>
      </nav>

      {isMobileOpen && (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Navegación móvil">
          <NavigationLinks activeId={activeId} onNavigate={scrollToId} />
          <a className="nav-contact mobile-contact" href="#contacto" onClick={(event) => scrollToId("contacto", event)}>
            Contactar
          </a>
        </nav>
      )}
    </header>
  );
};
