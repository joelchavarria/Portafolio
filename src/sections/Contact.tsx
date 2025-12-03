import type { FC, FormEvent } from "react";
import { Section } from "../components/Section";
import { contactData } from "../data/portfolioData";

export const Contact: FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te responderé pronto.");
  };

  return (
    <Section
      id="contacto"
      kicker="Contacto"
      title="Contacto"
      subtitle="Si hay match entre lo que necesitas y lo que sé hacer, conversemos."
    >
      <div
        style={{
          display: "grid",
          gap: 20,
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
        }}
      >
        <div>
          <h3 style={{ fontSize: 15, marginTop: 0 }}>
            {contactData.headline}
          </h3>
          <p
            style={{
              whiteSpace: "pre-line",
              fontSize: 14,
              color: "#9ca3af",
            }}
          >
            {contactData.text}
          </p>
          <p style={{ fontSize: 13, marginTop: 10 }}>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${contactData.email}`}
              style={{ color: "#38bdf8" }}
            >
              {contactData.email}
            </a>
            <br />
            <strong>Teléfono:</strong> {contactData.phone}
            <br />
            <strong>Ubicación:</strong> {contactData.location}
            <br />
            <strong>LinkedIn:</strong>{" "}
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#38bdf8" }}
            >
              Ver perfil →
            </a>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(15,23,42,0.9)",
            borderRadius: 18,
            padding: 16,
            border: "1px solid rgba(31,41,55,0.9)",
            boxShadow: "0 18px 45px rgba(0,0,0,0.7)",
          }}
        >
          <div style={{ marginBottom: 10 }}>
            <label
              style={{
                fontSize: 12,
                display: "block",
                marginBottom: 4,
              }}
            >
              Nombre
            </label>
            <input
              required
              type="text"
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: 10,
                border: "1px solid #1f2933",
                background: "#020617",
                color: "#e5e7eb",
                fontSize: 13,
              }}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label
              style={{
                fontSize: 12,
                display: "block",
                marginBottom: 4,
              }}
            >
              Email
            </label>
            <input
              required
              type="email"
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: 10,
                border: "1px solid #1f2933",
                background: "#020617",
                color: "#e5e7eb",
                fontSize: 13,
              }}
            />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label
              style={{
                fontSize: 12,
                display: "block",
                marginBottom: 4,
              }}
            >
              Mensaje
            </label>
            <textarea
              required
              rows={4}
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: 10,
                border: "1px solid #1f2933",
                background: "#020617",
                color: "#e5e7eb",
                fontSize: 13,
                resize: "vertical",
              }}
            />
          </div>
          <button type="submit" className="btn" style={{ width: "100%" }}>
            Enviar mensaje
          </button>
        </form>
      </div>
    </Section>
  );
};
