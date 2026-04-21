import type { ReactNode } from "react";
import { AccentTag } from "@/components/AccentTag";

const STEP_COLORS = ["#ea580c", "#2563eb", "#00904d"];

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  illustration: ReactNode;
}

export function StepCard({ step, title, description, illustration }: StepCardProps) {
  const stepColor = STEP_COLORS[step as keyof typeof STEP_COLORS];
  return (
    <div className="group relative flex flex-1 flex-col overflow-hidden bg-background transition-colors duration-300 border border-border">
      <div className="relative aspect-[5/2] overflow-hidden bg-background rounded-md m-4">
        {illustration}
      </div>
      <div className="flex flex-col gap-2 p-4">
        <AccentTag content={`Step ${step + 1}`} accent={stepColor} />
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
