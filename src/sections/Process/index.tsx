import { Section } from "@/sections/Section";
import { StepCard } from "@/components/StepCard";
import { AccentTag } from "@/components/AccentTag";
import { Reveal } from "@/components/Reveal";
import { STEPS } from "./steps";

export function Process() {
  return (
    <Section
      id="process"
      theme="light"
      containerClassName="flex flex-col gap-10"
    >
      <Reveal className="flex flex-col gap-6 max-w-3xl">
        <AccentTag content="Workflow" />
        <h2 className="text-5xl font-bold text-foreground leading-[1.1]">
          From Question To <span className="text-primary">Client-Ready</span><br />
          <span className="text-muted-foreground">Report In Three Steps.</span>
        </h2>
        <p className="text-lg text-muted-foreground capitalize">
          No spreadsheets, no stitched-together tools. Ask, visualize, share.
          That's the workflow.
        </p>
      </Reveal>

      <div className="grid grid-cols-3 gap-4">
        {STEPS.map((s, idx) => (
          <Reveal key={s.title} delay={idx * 120}>
            <StepCard
              step={idx}
              title={s.title}
              description={s.description}
              illustration={s.illustration}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
