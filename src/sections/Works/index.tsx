import { Section } from "@/sections/Section";
import { AccentTag } from "@/components/AccentTag";

const TERMS = [
  "Solar",
  "Wind",
  "Battery",
  "EV Charging",
  "Grid Congestion",
  "Tariffs",
  "Load Profiles",
  "CAPEX",
  "OPEX",
  "Peak Shaving",
  "Curtailment",
  "What-if Scenarios",
  "Self-Consumption",
  "ROI",
];

function Bolt() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-primary"
      fill="currentColor"
      aria-hidden
    >
      <path d="M13 2 3 14h7l-1 8 11-13h-7l1-7z" />
    </svg>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex w-max items-center gap-10 whitespace-nowrap py-4"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} 40s linear infinite`,
        }}
      >
        {loop.map((term, i) => (
          <div
            key={`${term}-${i}`}
            className="flex items-center gap-10 text-3xl font-semibold tracking-tight text-foreground/80"
          >
            <span>{term}</span>
            <Bolt />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Works() {
  return (
    <Section
      id="works"
      theme="light"
      containerClassName="flex flex-col gap-10 py-20"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <AccentTag content="Platform" />
        <h2 className="text-3xl font-bold text-foreground leading-[1.1]">
          One platform. Every layer of the grid.
        </h2>
      </div>

      <div
        className="relative -mx-8"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <MarqueeRow items={TERMS} />
        <MarqueeRow items={[...TERMS].reverse()} reverse />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </Section>
  );
}
