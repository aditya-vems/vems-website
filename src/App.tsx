import { Hero, Steps, Process, Spotlight, Team, Footer } from "@/sections";
import { Header, type HeaderTheme } from "@/components/Header";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [theme, setTheme] = useState<HeaderTheme>("light");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-theme]")
    );

    if (sections.length === 0) return;

    let raf = 0;

    const measureHeader = () => {
      const h = headerRef.current?.getBoundingClientRect().height ?? 0;
      document.documentElement.style.setProperty(
        "--header-height",
        `${Math.round(h)}px`,
      );
      return h;
    };

    const updateTheme = () => {
      raf = 0;
      const headerHeight = measureHeader();
      const markerY = window.scrollY + headerHeight + 1;

      let current = sections[0];
      for (const section of sections) {
        if (markerY >= section.offsetTop) current = section;
      }

      const nextTheme = current.getAttribute("data-theme");
      if (nextTheme === "dark" || nextTheme === "light") {
        setTheme(nextTheme);
      }
    };

    const onScrollOrResize = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(updateTheme);
    };

    const headerResizeObserver =
      headerRef.current && "ResizeObserver" in window
        ? new ResizeObserver(measureHeader)
        : null;
    if (headerRef.current && headerResizeObserver) {
      headerResizeObserver.observe(headerRef.current);
    }

    measureHeader();
    updateTheme();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      headerResizeObserver?.disconnect();
    };
  }, []);

  return (
    <div className="w-full bg-background">
      <Header ref={headerRef} theme={theme} />
      <Hero />
      <Steps />
      <Process />
      <Spotlight />
      <Team />
      <Footer />
    </div>
  );
}
