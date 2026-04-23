import { Section } from "@/sections/Section";
import { StackCard } from "@/components/StackCard";
import { AccentTag } from "@/components/AccentTag";
import { Reveal } from "@/components/Reveal";
import { QUESTIONS } from "./questions";

export function Steps() {
  return (
    <Section
      id="steps"
      theme="dark"
      containerClassName="flex flex-col gap-20"
    >
      <Reveal className="flex flex-col gap-6 max-w-3xl">
        <AccentTag content="Questions" />
        <h2 className="text-5xl font-bold text-foreground leading-[1.1]">
          Complex Energy Questions.<br />
          <span className="text-muted-foreground">
            Clear Convincing Answers.
          </span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Your clients are asking urgent questions and they expect clear,
          confident answers.
        </p>
      </Reveal>

      <div className="flex gap-6">
        {QUESTIONS.map((q, idx) => (
          <Reveal key={q.title} delay={idx * 120} className="flex-1">
            <StackCard
              accent={q.accent}
              illustration={q.illustration}
              title={q.title}
              description={q.description}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
