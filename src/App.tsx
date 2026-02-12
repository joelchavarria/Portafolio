import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Contact } from "./sections/Contact";

const NAV_HEIGHT_PX = 64;

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="app-shell">
      <Navbar />

      <main
        className="app-main"
        style={{
          paddingTop: NAV_HEIGHT_PX + 8,
        }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer
        style={{
          padding: "22px 16px 26px",
          borderTop: "1px solid rgba(148,163,184,0.12)",
          background: "rgba(2,6,23,0.55)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            display: "grid",
            gap: 10,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 12, color: "#94a3b8" }}>
            © {year} <span style={{ color: "#e5e7eb", fontWeight: 800 }}>Joel Chavarría</span>
            <span style={{ color: "#64748b" }}> · </span>
            Software · Infra · Automatización
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              fontSize: 12,
            }}
          >
            <a
              href="#inicio"
              style={{
                color: "#38bdf8",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Volver arriba ↑
            </a>

            <span style={{ color: "#334155" }}>•</span>

            <a
              href="https://www.linkedin.com/in/joel-chavarria-89422819a"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#38bdf8",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              LinkedIn →
            </a>

            <span style={{ color: "#334155" }}>•</span>

            <a
              href="mailto:joelchavarria308@gmail.com"
              style={{
                color: "#38bdf8",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Email →
            </a>
          </div>

          <div style={{ fontSize: 11, color: "#64748b" }}>
            Hecho con React + TypeScript · Deploy en Vercel
          </div>
        </div>
      </footer>

      {/* Global: asegura que los anchors no queden debajo del navbar */}
      <style>
        {`
          html {
            scroll-padding-top: ${NAV_HEIGHT_PX + 20}px;
          }
        `}
      </style>
    </div>
  );
}

export default App;
