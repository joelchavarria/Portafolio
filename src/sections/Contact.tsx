import type { FC, FormEvent, ReactNode } from "react";
import { useState } from "react";
import { Section } from "../components/Section";
import { buildWhatsAppUrl, contactData } from "../data/portfolioData";

const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Joel, vi tu portafolio y me gustaría conversar contigo.";

export const Contact: FC = () => {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const whatsappMessage = [
      "Hola Joel, te contacto desde tu portafolio.",
      `Nombre: ${name}`,
      `Correo: ${email}`,
      "",
      "Mensaje:",
      message,
    ].join("\n");

    window.open(buildWhatsAppUrl(whatsappMessage), "_blank", "noopener,noreferrer");
    form.reset();
    setStatus("WhatsApp se abrió con tu mensaje listo para revisar y enviar.");
  };

  return (
    <Section
      id="contacto"
      kicker="Contacto"
      title="Hablemos"
      subtitle="Si hay match entre lo que necesitas y lo que sé hacer, conversemos."
    >
      <div className="contact-layout">
        <div>
          <h3 className="contact-heading">{contactData.headline}</h3>

          <p className="contact-copy">{contactData.text}</p>

          <div className="contact-details">
            <div>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
            </div>

            <div>
              <strong>WhatsApp:</strong>{" "}
              <a
                href={buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactData.phone}
              </a>
            </div>

            <div>
              <strong>Ubicación:</strong> {contactData.location}
            </div>

            <div>
              <strong>LinkedIn:</strong>{" "}
              <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer">
                Ver perfil
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <Field id="contact-name" label="Nombre">
            <input id="contact-name" name="name" required autoComplete="name" />
          </Field>

          <Field id="contact-email" label="Correo electrónico">
            <input
              id="contact-email"
              name="email"
              required
              type="email"
              autoComplete="email"
            />
          </Field>

          <Field id="contact-message" label="Mensaje">
            <textarea id="contact-message" name="message" required rows={5} />
          </Field>

          <button className="contact-submit" type="submit">
            Continuar en WhatsApp
          </button>

          <p className="contact-privacy">
            El sitio no almacena tus datos. Al continuar se abrirá WhatsApp con el mensaje listo
            para enviar.
          </p>

          <p className="contact-status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </Section>
  );
};

interface FieldProps {
  id: string;
  label: string;
  children: ReactNode;
}

const Field: FC<FieldProps> = ({ id, label, children }) => (
  <div className="contact-field">
    <label htmlFor={id}>{label}</label>
    {children}
  </div>
);
