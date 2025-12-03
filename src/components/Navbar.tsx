import type { FC } from "react";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "skills", label: "Skills" },
  { id: "contacto", label: "Contacto" },
];

export const Navbar: FC = () => {
  return (
    <header
      style={{
        position: "fixed",
        insetInline: 0,
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(18px)",
        background:
          "linear-gradient(to bottom, rgba(15,23,42,0.9), rgba(15,23,42,0.45), transparent)",
        borderBottom: "1px solid rgba(31,41,55,0.7)",
      }}
    >
      <nav
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 999,
              background:
                "radial-gradient(circle at 30% 0, #22c55e, #22c55e 40%, #0ea5e9 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 700,
              color: "#020617",
              boxShadow: "0 10px 25px rgba(34,197,94,0.55)",
            }}
          >
            J
          </div>
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 0.03,
              }}
            >
              Joel Chavarría
            </div>
            <div style={{ fontSize: 11, color: "#9ca3af" }}>DevOps 007</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            fontSize: 12,
          }}
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              style={{
                color: "#9ca3af",
                padding: "6px 8px",
                borderRadius: 999,
                transition: "background 120ms ease, color 120ms ease",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
