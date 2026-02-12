import type { FC, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  centered?: boolean;
  fullWidth?: boolean;
}

const NAV_HEIGHT_PX = 64;

export const Section: FC<SectionProps> = ({
  id,
  kicker,
  title,
  subtitle,
  children,
  centered = false,
  fullWidth = false,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={`${id}-title`}
      style={{
        scrollMarginTop: NAV_HEIGHT_PX + 24,
        padding: "100px 16px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(20px)",
        transition: "opacity 600ms ease, transform 600ms ease",
      }}
    >
      <div
        style={{
          maxWidth: fullWidth ? "100%" : 1080,
          margin: "0 auto",
        }}
      >
        <header
          style={{
            marginBottom: 40,
            textAlign: centered ? "center" : "left",
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              color: "#22c55e",
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            {kicker}
          </div>

          <h2
            id={`${id}-title`}
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: 0,
              color: "#e5e7eb",
            }}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              style={{
                marginTop: 16,
                maxWidth: 720,
                fontSize: 16,
                color: "#94a3b8",
                lineHeight: 1.6,
                marginInline: centered ? "auto" : undefined,
              }}
            >
              {subtitle}
            </p>
          )}
        </header>

        <div>{children}</div>
      </div>
    </section>
  );
};
