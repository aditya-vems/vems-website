import type { ReactNode } from "react";
import { AccentTag } from "@/components/AccentTag";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  illustration: ReactNode;
}

export function StepCard({ step, title, description, illustration }: StepCardProps) {
  return (
    <div className="group relative flex flex-1 flex-col overflow-hidden bg-background transition-colors duration-300 border border-border">
      <div className="relative aspect-[5/2] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(ellipse 150% 115% at top left, black 70%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 150% 115% at top left, black 70%, transparent 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-muted/60 via-muted/15 to-transparent"
          />
          {illustration}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-6">
        <AccentTag content={`Step ${step + 1}`} />
        <h3 className="text-xl font-semibold text-foreground leading-tight">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
