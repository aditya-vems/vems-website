import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Card } from "@v-ems/element";
import type { CSSProperties, ReactNode } from "react";

interface StackCardProps {
  illustration: ReactNode;
  title: string;
  description: string;
  accent: string;
}

export function StackCard({
  illustration,
  title,
  description,
  accent,
}: StackCardProps) {
  return (
    <Card
      style={{ "--accent": accent } as CSSProperties}
      className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-none border border-transparent p-8 ring-0 transition-all duration-300 ease-out motion-safe:hover:scale-[1.05] hover:border-[var(--accent)] bg-[#1a1a1a]"
    >
      {/* Hover gradient from bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(to top, color-mix(in oklch, var(--accent) 22%, transparent), transparent)",
        }}
      />

      {/* Top-right arrow */}
      <div
        aria-hidden
        className="absolute right-6 top-6 z-10 flex size-7 items-center justify-center rounded-full bg-muted transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[var(--accent)]"
      >
        <HugeiconsIcon
          icon={ArrowUpRight01Icon}
          size={14}
          strokeWidth={1.75}
          className="text-muted-foreground transition-colors duration-300 group-hover:text-white"
        />
      </div>

      {/* Illustration */}
      <div className="relative flex items-start">{illustration}</div>

      {/* Text */}
      <div className="relative flex flex-col gap-2">
        <h3 className="text-xl font-medium tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </Card>
  );
}
