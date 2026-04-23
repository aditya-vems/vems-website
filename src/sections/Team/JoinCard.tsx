import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

export function JoinCard() {
  const [hover, setHover] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="relative flex aspect-[4/5] flex-col items-center justify-center gap-3 border border-dashed border-border bg-background transition-colors duration-300 hover:border-primary hover:bg-muted/40"
    >
      <div
        className="flex size-10 items-center justify-center rounded-full transition-all duration-300"
        style={{
          backgroundColor: hover ? "var(--primary)" : "var(--muted)",
          transform: hover ? "scale(1.1)" : "scale(1)",
        }}
      >
        <HugeiconsIcon
          icon={ArrowUpRight01Icon}
          size={16}
          strokeWidth={1.75}
          style={{
            color: hover ? "#fff" : "var(--muted-foreground)",
            transition: "color 300ms ease",
          }}
        />
      </div>
      <span className="text-sm font-medium text-foreground text-center px-3">
        This could be you.
      </span>
    </a>
  );
}
