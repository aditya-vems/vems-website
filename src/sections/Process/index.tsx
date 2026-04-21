import { Section } from "@/sections/Section";
import { StepCard } from "@/components/StepCard";
import { AccentTag } from "@/components/AccentTag";
import { AskIllustration } from "@/components/illustrations/AskIllustration";
import { VisualizeIllustration } from "@/components/illustrations/VisualizeIllustration";
import { ShareIllustration } from "@/components/illustrations/ShareIllustration";

export function Process() {
  return (
    <Section
      id="process"
      theme="light"
      containerClassName="flex flex-col gap-10"
    >
      <div className="flex flex-col gap-6 max-w-3xl">
        <AccentTag content="Workflow" />
        <h2 className="text-5xl font-bold text-foreground leading-[1.1]">
          From Question To Client-Ready<br />
          <span className="text-muted-foreground">Report In Three Steps.</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          No spreadsheets, no stitched-together tools. Ask, visualize, share —
          that's the workflow.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StepCard
          step={0}
          title="Ask A Question."
          description="Choose the location and upload your quarterly site data (or create it from scratch). Set your grid limits and select the question you want to answer."
          illustration={<AskIllustration />}
        />
        <StepCard
          step={1}
          title="Visualize The Answer."
          description="Instantly spot congestion, flexibility, and upgrade opportunities. Explore unlimited what-if scenarios — add solar, batteries, tariffs and smart control strategies."
          illustration={<VisualizeIllustration />}
        />
        <StepCard
          step={2}
          title="Share The Results."
          description="Compare savings, payback, CAPEX, OPEX and energy impact side by side. Export automatic, white-labeled reports with one click."
          illustration={<ShareIllustration />}
        />
      </div>
    </Section>
  );
}
