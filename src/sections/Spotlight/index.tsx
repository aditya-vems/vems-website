import { HugeiconsIcon } from "@hugeicons/react";
import { Section } from "@/sections/Section";
import { AccentTag } from "@/components/AccentTag";
import { Reveal } from "@/components/Reveal";
import { FEATURES } from "./features";
import { SpotlightIllustration } from "./SpotlightIllustration";

export function Spotlight() {
  return (
    <Section
      id="spotlight"
      theme="dark"
      className="overflow-visible"
      containerClassName="relative flex gap-16 items-center"
    >
      <div className="flex flex-col gap-16">
        <Reveal className="flex flex-col gap-6 max-w-3xl">
          <AccentTag content="Company" />
          <h2 className="text-5xl font-bold leading-[1.1]">
            <span className="text-foreground">Speed & Clarity.</span>
            <br />
            <span className="text-muted-foreground">Results You Trust.</span>
          </h2>
          <p className="text-lg text-muted-foreground capitalize">
            Three things every advisor, engineer, and client needs. Reasons
            teams across the energy transition choose VEMS.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal delay={120} className="lg:col-span-5">
            <ul className="flex flex-col gap-4">
              {FEATURES.map((feature) => (
                <li key={feature.title} className="flex items-center gap-3">
                  <span className="flex shrink-0 items-center justify-center text-muted-foreground">
                    <HugeiconsIcon
                      icon={feature.icon}
                      size={24}
                      strokeWidth={1.8}
                      className="text-primary"
                    />
                  </span>
                  <span className="text-base font-normal text-foreground">
                    {feature.title}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
      <div className="relative flex-1 overflow-visible">
        <SpotlightIllustration />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[38%] bg-linear-to-l from-card via-card/90 to-transparent"
      />
    </Section>
  );
}
