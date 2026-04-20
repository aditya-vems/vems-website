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
    "relative w-full px-6 py-32 overflow-hidden",
    theme === "dark" ? "dark bg-card" : "bg-background",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const containerClassNameMerged = [
    "mx-auto w-full max-w-6xl",
    containerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClassName}>
      <Grid />
      <div className={`relative z-10 ${containerClassNameMerged}`}>
        <h2 className="mt-0 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      </div>
    </section>
  );
}