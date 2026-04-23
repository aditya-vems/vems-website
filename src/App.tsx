import { useRef } from "react";
import { Hero, Steps, Process, Spotlight, Team, Footer } from "@/sections";
import { Header } from "@/components/Header";
import { useScrollTheme } from "@/hooks/useScrollTheme";

export default function App() {
  const headerRef = useRef<HTMLElement | null>(null);
  const theme = useScrollTheme(headerRef);

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
