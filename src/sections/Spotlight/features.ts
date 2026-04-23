import {
  CenterFocusIcon,
  FlashIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

export interface Feature {
  title: string;
  icon: typeof SparklesIcon;
}

export const FEATURES: Feature[] = [
  { title: "Easy To Use", icon: SparklesIcon },
  { title: "Work 80% Faster", icon: FlashIcon },
  { title: "Accurate Results", icon: CenterFocusIcon },
];
