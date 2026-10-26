import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { contactData } from "./data/portfolioData";

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Ir al contenido principal
      </a>
      <Navbar />

      <main id="main-content" className="app-main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-copyright">
            © {year} <strong>Joel Chavarría</strong> <span aria-hidden="true">·</span> Software ·
            Infra · Automatización
          </div>

          <div className="footer-links">
            <a href="#inicio">Volver arriba</a>
            <a
              href="https://www.linkedin.com/in/joel-chavarria-89422819a"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={`mailto:${contactData.email}`}>Email</a>
          </div>

          <div className="footer-tech">Hecho con React + TypeScript · Deploy en Vercel</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
