import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
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
          padding: "16px 16px 24px",
          fontSize: 11,
          color: "#6b7280",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Joel Chavarría · DevOps 007 ·{" "}
        <span style={{ color: "#22c55e" }}>
          “Entrego valor, no solo commits.”
        </span>
        <div style={{ marginTop: 6 }}>
          <a
            href="https://www.linkedin.com/in/joel-chavarria-89422819a"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#38bdf8" }}
          >
            LinkedIn: Joel Chavarría →
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
