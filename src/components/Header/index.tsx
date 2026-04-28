import { forwardRef } from "react";
import { Button } from "@v-ems/element";
import { LogoLine } from "@v-ems/element/brand";
import { Reveal } from "@/components/Reveal";
import { Navigation } from "./Navigation";

export type HeaderTheme = "dark" | "light";

const BUTTON_CLASS = "rounded-full font-medium px-6 py-4 cursor-pointer";

const APP_SIGN_IN_URL = "http://localhost:5174/sign-in";

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

    return (
      <>
        <header
          ref={ref}
          aria-hidden
          className={className}
          style={{
            animation:
              "header-slide-down 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
          }}
        >
          <Reveal delay={650} className="flex items-center gap-24">
            <LogoLine className="shrink-0 h-7" />
            <Navigation />
          </Reveal>
          <Reveal delay={800} className="flex items-center gap-2">
            <Button
              variant="secondary"
              className={BUTTON_CLASS}
              onClick={() => {
                window.location.href = APP_SIGN_IN_URL;
              }}
            >
              Sign In
            </Button>
            <Button variant="default" className={BUTTON_CLASS}>
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
