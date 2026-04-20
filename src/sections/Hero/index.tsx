import { Button } from "@v-ems/element";
import { Section } from "@/sections/Section";
import { HeroShader } from "@/components/HeroShader";

export function Hero() {
  return (
    <Section
      id="hero"
      theme="dark"
      backdrop={<HeroShader className="absolute inset-0" />}
      containerClassName="relative h-[calc(100vh-60px)] flex items-center"
    >
      <div className="relative z-10 flex flex-col gap-6 max-w-xl">
        <div>
          <h1 className="text-6xl font-bold text-foreground">Bring Clarity.</h1>
          <h1 className="text-6xl font-bold text-muted-foreground">
            Empower Energy Decisions.
          </h1>
        </div>

        <p className="text-xl font-medium text-foreground">
          Turn complex energy scenarios into clear, visual business cases in
          minutes.
        </p>
        <Button
          variant="secondary"
          className="rounded-full font-medium px-6 py-5 cursor-pointer w-fit"
        >
          Talk To An Expert
        </Button>
      </div>
    </Section>
  );
}
