import type { FC, FormEvent } from "react";
import { useState } from "react";
import { Section } from "../components/Section";
import { contactData } from "../data/portfolioData";

export const Contact: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Simulación profesional (mientras no tengas backend)
    await new Promise((res) => setTimeout(res, 900));

    setLoading(false);
    setSuccess(true);
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
          gap: 28,
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
          alignItems: "start",
        }}
      >
        {/* Info lateral */}
        <div>
          <h3 style={{ fontSize: 16, marginTop: 0 }}>
            {contactData.headline}
          </h3>

          <p
            style={{
              whiteSpace: "pre-line",
              fontSize: 14,
              color: "#94a3b8",
              lineHeight: 1.6,
            }}
          >
            {contactData.text}
          </p>

          <div
            style={{
              marginTop: 18,
              fontSize: 13,
              display: "grid",
              gap: 6,
            }}
          >
            <div>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${contactData.email}`}
                style={{ color: "#38bdf8", textDecoration: "none" }}
              >
                {contactData.email}
              </a>
            </div>

            <div>
              <strong>Teléfono:</strong> {contactData.phone}
            </div>

            <div>
              <strong>Ubicación:</strong> {contactData.location}
            </div>

            <div>
              <strong>LinkedIn:</strong>{" "}
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#38bdf8", textDecoration: "none" }}
              >
                Ver perfil →
              </a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(15,23,42,0.9)",
            borderRadius: 20,
            padding: 20,
            border: "1px solid rgba(148,163,184,0.15)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.55)",
            display: "grid",
            gap: 14,
          }}
        >
          <Field label="Nombre">
            <input required type="text" />
          </Field>

          <Field label="Email">
            <input required type="email" />
          </Field>

          <Field label="Mensaje">
            <textarea required rows={4} />
          </Field>

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: 6,
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid rgba(34,197,94,0.5)",
              background: loading
                ? "rgba(34,197,94,0.5)"
                : "rgba(34,197,94,0.9)",
              color: "#0b1220",
              fontWeight: 800,
              fontSize: 13,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 160ms ease",
            }}
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {success && (
            <div
              style={{
                marginTop: 6,
                fontSize: 13,
                color: "#22c55e",
              }}
            >
              ✓ Mensaje enviado correctamente. Te responderé pronto.
            </div>
          )}
        </form>
      </div>

      <style>
        {`
          form input,
          form textarea {
            width: 100%;
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid rgba(148,163,184,0.15);
            background: #020617;
            color: #e5e7eb;
            font-size: 13px;
            transition: border 140ms ease, box-shadow 140ms ease;
          }

          form input:focus,
          form textarea:focus {
            outline: none;
            border-color: #22c55e;
            box-shadow: 0 0 0 2px rgba(34,197,94,0.25);
          }

          @media (max-width: 860px) {
            #contacto > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </Section>
  );
};

interface FieldProps {
  label: string;
  children: React.ReactNode;
}

const Field: FC<FieldProps> = ({ label, children }) => {
  return (
    <div style={{ display: "grid", gap: 4 }}>
      <label style={{ fontSize: 12, fontWeight: 600 }}>{label}</label>
      {children}
    </div>
  );
};
