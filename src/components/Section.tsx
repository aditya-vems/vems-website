import { ReactNode } from "react";

interface SectionProps {
  bgToken: "background" | "card";
  children?: ReactNode;
  height?: string;
  id?: string;
}

export function Section({
  bgToken,
  children,
  height = "h-screen",
  id,
}: SectionProps) {
  const bgClass = bgToken === "background" ? "bg-background" : "bg-card";

  return (
    <section
      id={id}
      data-section-color={bgToken}
      className={`${bgClass} ${height} flex items-center justify-center transition-colors duration-300`}
    >
      {children}
    </section>
  );
}
