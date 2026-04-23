import type { ReactNode } from "react";
import { GridIllustration } from "@/components/illustrations/GridIllustration";
import { EVChargerIllustration } from "@/components/illustrations/EVChargerIllustration";
import { BatteryIllustration } from "@/components/illustrations/BatteryIllustration";

export interface Question {
  accent: string;
  illustration: ReactNode;
  title: string;
  description: string;
}

export const QUESTIONS: Question[] = [
  {
    accent: "#ea580c",
    illustration: <GridIllustration />,
    title: "Congestion",
    description:
      "Facing bottlenecks and backlogs? Instantly pinpoint capacity issues, simulate big fixes, and discover paths to a greener, more resilient grid.",
  },
  {
    accent: "#2563eb",
    illustration: <EVChargerIllustration />,
    title: "EV Confidence",
    description:
      "Curious if your site is ready to ride the electric wave? Unlock instant insights on charging infrastructure, power needs, and more. No guesswork, just answers.",
  },
  {
    accent: "#00904d",
    illustration: <BatteryIllustration />,
    title: "Battery Brilliance",
    description:
      "Wondering if batteries are worth it? See projected savings, perfect system sizing, and ROI forecasts at-a-glance to energize your business case.",
  },
];
