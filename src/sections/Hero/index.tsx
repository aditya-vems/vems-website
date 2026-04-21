import { Button } from "@v-ems/element";
import { Section } from "@/sections/Section";
import { HeroShader } from "@/components/HeroShader";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <Section
      id="hero"
      theme="dark"
      backdrop={<HeroShader className="absolute inset-0" />}
      // Center content both vertically and horizontally in the Section
      containerClassName="relative h-[calc(100vh-60px)] flex items-center justify-center"
    >
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl w-full">
        <div className="w-full flex flex-col items-center">
          <Reveal delay={200}>
            <h1 className="text-5xl font-bold text-foreground text-center">Bring <span className="text-primary">Clarity.</span></h1>
          </Reveal>
          <Reveal delay={350}>
            <h1 className="text-5xl font-bold text-muted-foreground text-center">
              Empower Energy Decisions.
            </h1>
          </Reveal>
        </div>

        <Reveal delay={450}>
          <p className="text-xl font-medium text-foreground text-center">
            Complex energy scenarios into visual business cases in
            minutes.
          </p>
        </Reveal>
        <Reveal delay={600}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="group flex w-full max-w-md items-center gap-1 rounded-full border border-border bg-background/40 p-1.5 pl-5 backdrop-blur transition-colors focus-within:border-primary"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground outline-none"
            />
            <Button
              type="submit"
              variant="default"
              className="rounded-full font-medium px-5 py-4 cursor-pointer shrink-0 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Talk To An Expert
            </Button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
