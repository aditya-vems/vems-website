interface SectionProps {
  isDark?: boolean;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function Section({ isDark = false, title, description, children }: SectionProps) {
  return (
    <section
      className={isDark ? "dark bg-card h-screen flex flex-col justify-center px-6" : "bg-background h-screen flex flex-col justify-center px-6"}
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2
          className={isDark ? "text-6xl font-extrabold text-card-foreground mb-6" : "text-6xl font-extrabold text-foreground mb-6"}
        >
          {title}
        </h2>
        {description && <p className="text-xl text-muted-foreground max-w-2xl">{description}</p>}
        {children}
      </div>
    </section>
  );
}
