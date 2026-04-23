import type { ReactNode } from "react";
import { AskIllustration } from "@/components/illustrations/AskIllustration";
import { VisualizeIllustration } from "@/components/illustrations/VisualizeIllustration";
import { ShareIllustration } from "@/components/illustrations/ShareIllustration";

export interface ProcessStep {
  title: string;
  description: string;
  illustration: ReactNode;
}

export const STEPS: ProcessStep[] = [
  {
    title: "Ask A Question.",
    description:
      "Choose the location and upload your quarterly site data (or create it from scratch). Set your grid limits and select the question you want to answer.",
    illustration: <AskIllustration />,
  },
  {
    title: "Visualize The Answer.",
    description:
      "Instantly spot congestion, flexibility, and upgrade opportunities. Explore unlimited what-if scenarios. Add solar, batteries, tariffs and smart control strategies.",
    illustration: <VisualizeIllustration />,
  },
  {
    title: "Share The Results.",
    description:
      "Compare savings, payback, CAPEX, OPEX and energy impact side by side. Export automatic white-labeled reports with one click.",
    illustration: <ShareIllustration />,
  },
];
