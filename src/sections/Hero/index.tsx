import { Button } from "@v-ems/element";
import { Section } from "@/sections/Section";
import { Reveal } from "@/components/Reveal";
import { HeroShader } from "@/components/HeroShader";
import { LogosMarquee } from "@/components/LogosMarquee";

export function Hero() {
  return (
    <Section
      id="hero"
      theme="light"
      backdrop={<HeroShader className="absolute inset-0" />}
      className="h-[calc(100dvh-var(--header-height,60px))]"
      containerClassName="relative flex h-full flex-col justify-between gap-16 pt-28 pb-10"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center">
          <Reveal delay={220}>
            <h1 className="text-center text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-primary">
              Bring Clarity.
            </h1>
          </Reveal>
          <Reveal delay={340}>
            <h1 className="text-center text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-foreground">
              Empower Energy Decisions.
            </h1>
          </Reveal>
        </div>

        <Reveal delay={460}>
          <p className="max-w-xl text-center text-lg leading-relaxed text-muted-foreground capitalize">
            Turn complex energy scenarios into client-ready business cases in
            minutes, not weeks.
          </p>
        </Reveal>

        <Reveal delay={580}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="group flex w-full max-w-xl items-center gap-1 rounded-full border border-white/70 bg-white/30 p-1 py-0.5 pl-6! shadow-[0_12px_40px_-12px_rgba(15,23,42,0.18)] backdrop-blur-2xl backdrop-saturate-150 transition-colors focus-within:border-primary"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 bg-transparent py-2 text-base text-foreground placeholder:text-muted-foreground outline-none"
            />
            <Button
              type="submit"
              variant="default"
              className="cursor-pointer shrink-0 rounded-full bg-foreground px-5 py-4 font-medium text-background transition-colors duration-200 ease-out hover:bg-neutral-700"
            >
              Talk To An Expert
            </Button>
          </form>
        </Reveal>
      </div>

      <Reveal delay={700} className="relative z-10 flex flex-col items-center gap-6">
        <span className="text-base capitalize text-muted-foreground font-medium">
          Trusted by teams shaping the energy transition
        </span>
        <div className="-mx-8 w-[calc(100%+4rem)] bg-white/75 backdrop-blur-lg">
          <LogosMarquee />
        </div>
      </Reveal>
    </Section>
  );
}
