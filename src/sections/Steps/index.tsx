import { Section } from "@/sections/Section";
import { StackCard } from "@/components/StackCard";
import { AccentTag } from "@/components/AccentTag";
import { GridIllustration } from "@/components/illustrations/GridIllustration";
import { EVChargerIllustration } from "@/components/illustrations/EVChargerIllustration";
import { BatteryIllustration } from "@/components/illustrations/BatteryIllustration";

export function Steps() {
  return (
    <Section
      id="steps"
      theme="dark"
      containerClassName="flex flex-col gap-20"
    >
      <div className="flex flex-col gap-6 max-w-3xl">
        <AccentTag content="Questions" />
        <h2 className="text-5xl font-bold text-foreground leading-[1.1]">
          Complex Energy Questions.<br />
          <span className="text-muted-foreground">Clear Convincing Answers.</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Your clients are asking urgent questions — and they expect clear,
          confident answers.
        </p>
      </div>

      <div className="flex gap-6">
        <StackCard
          accent="#ea580c"
          illustration={<GridIllustration />}
          title="Congestion"
          description="Facing bottlenecks and backlogs? Instantly pinpoint capacity issues, simulate big fixes, and discover paths to a greener, more resilient grid."
        />
        <StackCard
          accent="#2563eb"
          illustration={<EVChargerIllustration />}
          title="EV Confidence"
          description="Curious if your site is ready to ride the electric wave? Unlock instant insights on charging infrastructure, power needs, and more—no guesswork, just answers."
        />
        <StackCard
          accent="#00904d"
          illustration={<BatteryIllustration />}
          title="Battery Brilliance"
          description="Wondering if batteries are worth it? See projected savings, perfect system sizing, and ROI forecasts at-a-glance to energize your business case."
        />

      </div>
    </Section>
  );
}
