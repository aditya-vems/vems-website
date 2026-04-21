import { forwardRef } from "react";
import { Button } from "@v-ems/element";
import { Navigation } from "./Navigation";
import { LogoLine } from "@v-ems/element/brand";
import { Reveal } from "./Reveal";

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
      <>
        <header
          ref={ref}
          aria-hidden
          className={className}
          style={{
            animation: "header-slide-down 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
          }}
        >
          <Reveal delay={650} className="flex items-center gap-24">
            <LogoLine className="shrink-0 h-7" />
            <Navigation />
          </Reveal>
          <Reveal delay={800} className="flex items-center gap-2">
            <Button variant="secondary" className={buttonClassName}>
              Sign In
            </Button>
            <Button variant="default" className={buttonClassName}>
              Talk To An Expert
            </Button>
          </Reveal>
        </header>
        <style>{`
          @keyframes header-slide-down {
            from { transform: translateY(-100%); opacity: 0; }
            to   { transform: translateY(0);     opacity: 1; }
          }
        `}</style>
      </>
    );
  },
);
