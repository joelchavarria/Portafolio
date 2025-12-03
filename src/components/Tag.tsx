import type { FC, ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  icon?: ReactNode;
}

export const Tag: FC<TagProps> = ({ children, icon }) => {
  return (
    <span
      className="tag"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {icon}
      {children}
    </span>
  );
};
