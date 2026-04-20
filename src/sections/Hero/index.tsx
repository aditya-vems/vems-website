import { Button } from "@v-ems/element";
import { Section } from "@/sections/Section";

export function Hero() {
  return (
    <Section
      id="hero"
      theme="dark"
      containerClassName="flex items-center justify-between h-[calc(100vh-60px)]"
    >
      <section className="flex flex-col gap-6">
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
      </section>
      <section></section>
    </Section>
  );
}