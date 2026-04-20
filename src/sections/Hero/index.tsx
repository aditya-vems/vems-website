import { Button } from "@v-ems/element";
import { Section } from "@/sections/Section";
import { DashboardIllustration } from "@/components/DashboardIllustration";

export function Hero() {
  return (
    <Section
      id="hero"
      theme="dark"
      containerClassName="relative h-[calc(100vh-60px)]"
    >
      <div className="relative z-10 flex flex-col gap-6 max-w-xl">
        <div>
          <h1 className="text-5xl font-bold text-foreground">Bring Clarity.</h1>
          <h1 className="text-5xl font-bold text-muted-foreground">
            Empower Energy Decisions.
          </h1>
        </div>

        <p className="text-xl font-medium text-foreground">
          Turn complex energy scenarios into clear, visual business cases in
          minutes.
        </p>
        <p className="text-lg text-muted-foreground max-w-lg">
          Origon builds and operates secure AI agents on private infrastructure
          — Origon Cloud, your VPC, or your premises.
        </p>
        <Button variant="secondary" className="rounded-full font-medium px-6 py-4 cursor-pointer w-fit">
          Talk To An Expert
        </Button>
      </div>
      <div className="absolute bottom-0 -right-40 w-[760px] h-[560px] overflow-hidden pointer-events-none">
        <div className="w-[1280px] h-[820px] rounded-2xl border border-border shadow-2xl bg-card overflow-hidden">
          <DashboardIllustration />
        </div>
      </div>
    </Section>
  );
}