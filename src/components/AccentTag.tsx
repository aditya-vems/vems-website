import { cn } from "@v-ems/element";
import type { CSSProperties, ReactNode } from "react";

export interface AccentTagProps {
  content: ReactNode;
  /** CSS color value (hex, oklch, var, etc.). Defaults to the design `--primary` token. */
  accent?: string;
  className?: string;
}

export function AccentTag({
  content,
  accent = "var(--primary)",
  className,
}: AccentTagProps) {
  return (
    <span
      style={
        {
          borderColor: accent,
          color: accent,
        } as CSSProperties
      }
      className={cn(
        "inline-flex w-fit font-mono items-center justify-center rounded-none border bg-transparent px-2 py-1.5 text-xs font-semibold uppercase",
        className,
      )}
    >
      {content}
    </span>
  );
}
