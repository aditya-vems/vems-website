import { Section } from "@/sections/Section";
import { AccentTag } from "@/components/AccentTag";
import { Reveal } from "@/components/Reveal";

const LOGOS = [
  { src: "https://www.v-ems.com/images/Logo/Algemeen.webp", alt: "Algemeen" },
  { src: "https://www.v-ems.com/images/Logo/ProntoPower.webp", alt: "Pronto Power" },
  { src: "https://www.v-ems.com/images/Logo/edmij.webp", alt: "Edmij" },
  { src: "https://www.v-ems.com/images/Logo/withthegrid.webp", alt: "With The Grid" },
  { src: "https://www.v-ems.com/images/Logo/janszon.webp", alt: "Janszon" },
  { src: "https://www.v-ems.com/images/Logo/alius.webp", alt: "Alius" },
  { src: "https://www.v-ems.com/images/Logo/hogeschool.webp", alt: "Hogeschool" },
  { src: "https://www.v-ems.com/images/Logo/vdh.webp", alt: "VDH" },
  { src: "https://www.v-ems.com/images/Logo/deGroeneReusOm.webp", alt: "De Groene Reus" },
  { src: "https://www.v-ems.com/images/Logo/rexel.webp", alt: "Rexel" },
  { src: "https://www.v-ems.com/images/Logo/intercel.webp", alt: "Intercel" },
];

function LogoCell({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative flex h-24 w-48 shrink-0 items-center justify-center px-6">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-h-12 max-w-full object-contain opacity-60 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
      />
    </div>
  );
}

function MarqueeTrack() {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <div
      className="flex w-max items-stretch whitespace-nowrap divide-x divide-dashed divide-border"
      style={{ animation: "works-marquee 55s linear infinite" }}
    >
      {loop.map((logo, i) => (
        <LogoCell key={`${logo.alt}-${i}`} src={logo.src} alt={logo.alt} />
      ))}
    </div>
  );
}

export function Works() {
  return (
    <Section
      id="works"
      theme="light"
      containerClassName="flex flex-col gap-10 pt-20 pb-0"
    >
      <Reveal className="flex flex-col items-center gap-4 text-center">
        <AccentTag content="Trusted By" />
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Teams Shaping The Energy Transition.
        </h2>
      </Reveal>

      <Reveal
        delay={150}
        className="relative -mx-8 bg-muted"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        {/* Top & bottom rails fade with the mask since they live inside it */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border" />

        <div className="overflow-hidden">
          <MarqueeTrack />
        </div>
      </Reveal>

      <style>{`
        @keyframes works-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </Section>
  );
}
