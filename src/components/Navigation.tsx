import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function Navigation() {
  const [activeSectionColor, setActiveSectionColor] = useState("background");

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section-color]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const color = entry.target.getAttribute("data-section-color");
            if (color) setActiveSectionColor(color);
            break;
          }
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isDark = activeSectionColor === "card";

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 h-16 bg-transparent"
      animate={{
        color: isDark ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Logo height={32} />
          <span className="font-semibold text-sm">VEMS</span>
        </div>

        <div className="hidden md:flex gap-8">
          <button
            disabled
            className="text-sm opacity-40 cursor-not-allowed"
          >
            Industries
          </button>
          <button disabled className="text-sm opacity-40 cursor-not-allowed">
            Partners
          </button>
          <button disabled className="text-sm opacity-40 cursor-not-allowed">
            Resources
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm px-4 py-2 rounded border border-current opacity-70 hover:opacity-100 transition-opacity">
          Sign In
        </button>
        <button className="text-sm px-4 py-2 rounded bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
          Talk to an Expert
        </button>
      </div>
    </motion.nav>
  );
}
