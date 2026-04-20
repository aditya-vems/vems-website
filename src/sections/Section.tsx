interface SectionProps {
  isDark?: boolean;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function Section({ isDark = false, title, description, children }: SectionProps) {
  const darkClass = isDark ? "dark" : "";
  const bgClass = isDark ? "bg-card" : "bg-background";
  const textClass = isDark ? "text-card-foreground" : "text-foreground";

  return (
    <section className={`${darkClass} ${bgClass} h-screen flex flex-col justify-center px-6`}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className={`text-6xl font-bold ${textClass} mb-6`}>{title}</h2>
        {description && <p className="text-xl text-muted-foreground max-w-2xl">{description}</p>}
        {children}
      </div>
    </section>
  );
}
