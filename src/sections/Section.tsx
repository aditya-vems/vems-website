import { Grid } from "@/components/Grid";
import { ReactNode } from "react";

export type SectionTheme = "dark" | "light";

export interface SectionProps {
  id?: string;
  className?: string;
  theme?: SectionTheme;
  containerClassName?: string;
  children?: ReactNode;
}

export function Section({
  id,
  className,
  containerClassName,
  theme = "light",
  children,
}: SectionProps) {
  const sectionClassName = [
    "relative w-full overflow-hidden",
    theme === "dark" ? "dark bg-card" : "bg-background",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const containerClassNameMerged = [
    "relative z-10 mx-auto w-full max-w-6xl py-32",
    containerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      data-theme={theme}
      className={sectionClassName}
    >
      <div className={containerClassNameMerged}>
        <Grid className="absolute inset-0 z-0" />
        {children}
      </div>
    </section>
  );
}