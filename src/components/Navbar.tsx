import type { FC } from "react";
import { useEffect, useMemo, useState } from "react";

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
] as const;

const NAV_HEIGHT_PX = 64;

export const Navbar: FC = () => {
  const [activeId, setActiveId] = useState<string>("inicio");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const sectionIds = useMemo(() => SECTIONS.map((s) => s.id), []);

  const scrollToId = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    // Cierra el menú mobile al navegar
    setIsMobileOpen(false);

    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT_PX;
    window.scrollTo({ top: y, behavior: "smooth" });
    // Actualiza hash sin jump
    window.history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Tomamos el que esté más visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        // Ajuste para navbar fijo: “cuenta” visible un poquito abajo
        rootMargin: `-${NAV_HEIGHT_PX + 8}px 0px -65% 0px`,
        threshold: [0.08, 0.15, 0.25, 0.4],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  // Cierra mobile con ESC
  useEffect(() => {
    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setIsMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        insetInline: 0,
        top: 0,
        zIndex: 40,
        height: NAV_HEIGHT_PX,
        backdropFilter: "blur(18px)",
        background: isScrolled
          ? "linear-gradient(to bottom, rgba(2,6,23,0.92), rgba(2,6,23,0.72))"
          : "linear-gradient(to bottom, rgba(15,23,42,0.9), rgba(15,23,42,0.45), transparent)",
        borderBottom: isScrolled
          ? "1px solid rgba(31,41,55,0.8)"
          : "1px solid rgba(31,41,55,0.55)",
        transition: "background 180ms ease, border-color 180ms ease",
      }}
    >
      <nav
        aria-label="Navegación principal"
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          height: "100%",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Brand */}
        <a
          href="#inicio"
          onClick={scrollToId("inicio")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "inherit",
            outline: "none",
          }}
        >
          <div
            aria-hidden
            style={{
              width: 30,
              height: 30,
              borderRadius: 999,
              background:
                "radial-gradient(circle at 30% 0, #22c55e, #22c55e 40%, #0ea5e9 100%)",
              display: "grid",
              placeItems: "center",
              fontSize: 14,
              fontWeight: 800,
              color: "#020617",
              boxShadow: "0 10px 25px rgba(34,197,94,0.55)",
            }}
          >
            J
          </div>

          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 0.2 }}>
              Joel Chavarría
            </div>
            <div style={{ fontSize: 11, color: "#94a3b8" }}>
             Ingeniero de Software + Infraestructura
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              fontSize: 12,
            }}
          >
            {/* Links (desktop) */}
            <div
              style={{
                display: "flex",
                gap: 6,
                alignItems: "center",
              }}
            >
              {SECTIONS.map((s) => {
                const isActive = s.id === activeId;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={scrollToId(s.id)}
                    aria-current={isActive ? "page" : undefined}
                    style={{
                      color: isActive ? "#e5e7eb" : "#9ca3af",
                      padding: "7px 10px",
                      borderRadius: 999,
                      textDecoration: "none",
                      border: isActive
                        ? "1px solid rgba(148,163,184,0.35)"
                        : "1px solid transparent",
                      background: isActive
                        ? "rgba(148,163,184,0.12)"
                        : "transparent",
                      transition:
                        "background 140ms ease, color 140ms ease, border-color 140ms ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.label}
                  </a>
                );
              })}
            </div>

            {/* CTA (desktop) */}
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginLeft: 6 }}>
              <a
                href="/CV-Joel-Chavarria.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: 12,
                  textDecoration: "none",
                  color: "#0b1220",
                  background: "rgba(34,197,94,0.95)",
                  padding: "8px 12px",
                  borderRadius: 999,
                  fontWeight: 800,
                  boxShadow: "0 10px 25px rgba(34,197,94,0.35)",
                  border: "1px solid rgba(34,197,94,0.65)",
                }}
              >
                Descargar CV
              </a>

              <a
                href="#contacto"
                onClick={scrollToId("contacto")}
                style={{
                  fontSize: 12,
                  textDecoration: "none",
                  color: "#e5e7eb",
                  background: "rgba(148,163,184,0.10)",
                  padding: "8px 12px",
                  borderRadius: 999,
                  fontWeight: 700,
                  border: "1px solid rgba(148,163,184,0.22)",
                }}
              >
                Contactar
              </a>
            </div>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={isMobileOpen}
            style={{
              marginLeft: 8,
              width: 40,
              height: 36,
              borderRadius: 10,
              border: "1px solid rgba(148,163,184,0.22)",
              background: "rgba(2,6,23,0.35)",
              color: "#e5e7eb",
              display: "none",
              cursor: "pointer",
            }}
          >
            {/* Icono simple */}
            <span aria-hidden style={{ fontSize: 18, fontWeight: 900 }}>
              ☰
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div
          role="dialog"
          aria-label="Menú"
          style={{
            position: "absolute",
            top: NAV_HEIGHT_PX,
            insetInline: 0,
            background: "rgba(2,6,23,0.95)",
            borderBottom: "1px solid rgba(31,41,55,0.8)",
            padding: 14,
          }}
        >
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 4px" }}>
            <div style={{ display: "grid", gap: 8 }}>
              {SECTIONS.map((s) => {
                const isActive = s.id === activeId;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={scrollToId(s.id)}
                    aria-current={isActive ? "page" : undefined}
                    style={{
                      textDecoration: "none",
                      color: isActive ? "#e5e7eb" : "#cbd5e1",
                      padding: "10px 12px",
                      borderRadius: 12,
                      border: "1px solid rgba(148,163,184,0.16)",
                      background: isActive ? "rgba(148,163,184,0.12)" : "transparent",
                      fontWeight: 700,
                    }}
                  >
                    {s.label}
                  </a>
                );
              })}

              <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                <a
                  href="/CV-Joel-Chavarria.pdf"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    textDecoration: "none",
                    color: "#0b1220",
                    background: "rgba(34,197,94,0.95)",
                    padding: "10px 12px",
                    borderRadius: 12,
                    fontWeight: 900,
                    border: "1px solid rgba(34,197,94,0.65)",
                  }}
                >
                  Descargar CV
                </a>

                <a
                  href="#contacto"
                  onClick={scrollToId("contacto")}
                  style={{
                    flex: 1,
                    textAlign: "center",
                    textDecoration: "none",
                    color: "#e5e7eb",
                    background: "rgba(148,163,184,0.10)",
                    padding: "10px 12px",
                    borderRadius: 12,
                    fontWeight: 800,
                    border: "1px solid rgba(148,163,184,0.22)",
                  }}
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive without CSS file: hide desktop links on small screens */}
      <style>
        {`
          @media (max-width: 860px) {
            header nav > div:last-child > div {
              display: none !important;
            }
            header nav > div:last-child > button {
              display: inline-flex !important;
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </header>
  );
};
