import type { FC, ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  icon?: ReactNode;
}

export const Tag: FC<TagProps> = ({ children, icon }) => {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 1,
        background: "rgba(148,163,184,0.08)",
        border: "1px solid rgba(148,163,184,0.18)",
        color: "#e5e7eb",
        backdropFilter: "blur(6px)",
        transition: "transform 140ms ease, border-color 140ms ease",
        whiteSpace: "nowrap",
      }}
    >
      {icon && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            opacity: 0.9,
          }}
        >
          {icon}
        </span>
      )}
      {children}
    </span>
  );
};
