import { Grid } from "@/components/Grid";

export type SectionTheme = "dark" | "light";
export type SectionHeight = "auto" | "screen";

export interface SectionProps {
  id?: string;
  title: string;
  className?: string;
  theme?: SectionTheme;
  height?: SectionHeight;
  containerClassName?: string;
}

export function Section({
  id,
  title,
  className,
  containerClassName,
  theme = "light",
}: SectionProps) {
  const sectionClassName = [
    "relative w-full overflow-hidden",
    theme === "dark" ? "dark bg-card" : "bg-background",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const containerClassNameMerged = [
    "relative mx-auto w-full max-w-6xl py-32",
    containerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClassName}>
      <div className={containerClassNameMerged}>
        <Grid className="absolute inset-0 z-0" />
        <h2 className="relative z-10 mt-0 w-full bg-primary text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
    </section>
  );
}