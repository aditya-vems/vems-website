import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@v-ems/element";

const sectionVariants = cva(
  "h-screen w-full flex flex-col justify-center px-6",
  {
    variants: {
      theme: {
        dark: "dark bg-card",
        light: "bg-background",
      },
    },
    defaultVariants: {
      theme: "light",
    },
  }
);

const titleVariants = cva(
  "mb-6 font-extrabold",
  {
    variants: {
      size: {
        default: "text-6xl",
      },
      theme: {
        dark: "text-card-foreground",
        light: "text-foreground",
      },
    },
    defaultVariants: {
      size: "default",
      theme: "light",
    },
  }
);

const descriptionVariants = cva(
  "text-xl max-w-2xl",
  {
    variants: {
      theme: {
        dark: "text-muted-foreground",
        light: "text-muted-foreground",
      },
    },
    defaultVariants: {
      theme: "light",
    },
  }
);

interface SectionProps extends VariantProps<typeof sectionVariants> {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function Section({
  theme = "light",
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section className={sectionVariants({ theme })}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className={titleVariants({ theme })}>
          {title}
        </h2>
        {description && (
          <p className={descriptionVariants({ theme })}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
