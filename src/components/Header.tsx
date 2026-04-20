import { forwardRef } from "react";
import { Button } from "@v-ems/element";
import { Navigation } from "./Navigation";
import { LogoLine } from "@v-ems/element/brand";

export type HeaderTheme = "dark" | "light";

export const Header = forwardRef<HTMLElement, { theme: HeaderTheme }>(
  function Header({ theme }, ref) {
    const className = [
      "px-38 py-4",
      "sticky top-0 z-40",
      "border-b border-border",
      "transition-colors duration-300",
      "flex items-center justify-between",
      theme === "dark" ? "dark bg-card" : "bg-background",
    ]
      .filter(Boolean)
      .join(" ");
    
    const buttonClassName = "rounded-full font-medium px-6 py-4 cursor-pointer";

    return (
      <header ref={ref} aria-hidden className={className}>
        <section className="flex items-center gap-24">
          <LogoLine className="shrink-0 h-7" />
          <Navigation />
        </section>
        <section className="flex items-center gap-2">
          <Button variant="secondary" className={buttonClassName}>
            Sign In
          </Button>
          <Button variant="default" className={buttonClassName}>
            Talk To An Expert
          </Button>
        </section>
      </header>
    );
  },
);
