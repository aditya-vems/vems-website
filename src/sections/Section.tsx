import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@v-ems/element";

const sectionVariants = cva(
  "w-full px-6",
  {
    variants: {
      height: {
        auto: "py-24",
        screen: "min-h-screen py-16",
      },
      theme: {
        dark: "dark bg-card",
        light: "bg-background",
      },
    },
    defaultVariants: {
      height: "screen",
      theme: "light",
    },
  }
);

const titleVariants = cva(
  "font-extrabold tracking-tight",
  {
    variants: {
      size: {
        lg: "text-4xl sm:text-5xl lg:text-6xl",
        md: "text-3xl sm:text-4xl",
      },
      theme: {
        dark: "text-card-foreground",
        light: "text-foreground",
      },
    },
    defaultVariants: {
      size: "lg",
      theme: "light",
    },
  }
);

const descriptionVariants = cva(
  "mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl",
  {
    variants: {
      theme: {
        dark: "",
        light: "",
      },
    },
    defaultVariants: {
      theme: "light",
    },
  }
);

const containerVariants = cva("mx-auto w-full max-w-6xl", {
  variants: {
    align: {
      center: "text-center",
      left: "text-left",
    },
  },
  defaultVariants: {
    align: "left",
  },
});

export interface SectionProps extends VariantProps<typeof sectionVariants> {
  id?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  align?: VariantProps<typeof containerVariants>["align"];
  titleSize?: VariantProps<typeof titleVariants>["size"];
}

export function Section({
  id,
  title,
  description,
  children,
  align,
  titleSize,
  className,
  containerClassName,
  height,
  theme,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(sectionVariants({ height, theme }), className)}
    >
      <div className={cn(containerVariants({ align }), containerClassName)}>
        <h2 className={cn("mt-0", titleVariants({ size: titleSize, theme }))}>
          {title}
        </h2>
        {description && <p className={descriptionVariants({ theme })}>{description}</p>}
        {children}
      </div>
    </section>
  );
}
