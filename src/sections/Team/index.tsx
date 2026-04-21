import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Section } from "@/sections/Section";
import { AccentTag } from "@/components/AccentTag";
import { Reveal } from "@/components/Reveal";

interface Member {
  name: string;
  email: string;
  image: string;
}

const members: Member[] = [
  {
    name: "Dominique Balassi",
    email: "d.balassi@v-ems.com",
    image:
      "https://www.v-ems.com/images/OurTeam/white_bg/dominique-balassi-white.png",
  },
  {
    name: "Luca Agnese",
    email: "lucagne@v-ems.com",
    image: "https://www.v-ems.com/images/OurTeam/white_bg/luca-agnese-white.png",
  },
  {
    name: "Edwin van Aalten",
    email: "edwin@v-ems.com",
    image:
      "https://www.v-ems.com/images/OurTeam/white_bg/edwin-vanalten-white.png",
  },
  {
    name: "Carlo Foglia",
    email: "cm.foglia@v-ems.com",
    image: "https://www.v-ems.com/images/OurTeam/white_bg/carlo-foglia-white.png",
  },
  {
    name: "Vito Mola",
    email: "vito.mola@v-ems.com",
    image: "https://www.v-ems.com/images/OurTeam/white_bg/vito-mola-white.png",
  },
];

export function Team() {
  return (
    <Section
      id="team"
      theme="light"
      containerClassName="flex flex-col gap-16"
    >
      <Reveal className="flex flex-col gap-6 max-w-3xl">
        <AccentTag content="Team" />
        <h2 className="text-5xl font-bold text-foreground leading-[1.1]">
          Meet The Team.
        </h2>
        <p className="text-lg text-muted-foreground">
          A small team of energy and software specialists. Reach out directly —
          no forms, no gatekeepers.
        </p>
      </Reveal>

      <ul className="grid grid-cols-6 gap-4">
        {members.map((member, idx) => (
          <Reveal
            as="li"
            delay={idx * 80}
            key={member.email}
            className="group relative flex flex-col bg-background transition-colors duration-300"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={member.image}
                alt={member.name}
                className="size-full object-cover object-top scale-110 transition-all duration-500 ease-out grayscale contrast-[0.95] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105"
                decoding="async"
                loading="lazy"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 55%, color-mix(in oklch, var(--background) 80%, transparent) 85%, var(--background) 100%)",
                }}
              />
              <div
                aria-hidden
                className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-[width] duration-500 ease-out group-hover:w-full"
              />
            </div>

            <div className="flex flex-col gap-1 pt-4">
              <span className="text-sm font-medium text-foreground leading-tight">
                {member.name}
              </span>
              <a
                href={`mailto:${member.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary break-all"
              >
                {member.email}
              </a>
            </div>
          </Reveal>
        ))}

        {/* Join-us slot */}
        <Reveal as="li" delay={members.length * 80} className="group relative flex flex-col">
          <a
            href="#"
            className="group/card relative flex aspect-[4/5] flex-col items-center justify-center gap-3 border border-dashed border-border bg-background transition-colors duration-300 hover:border-primary hover:bg-muted/40"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-muted transition-all duration-300 group-hover/card:bg-primary group-hover/card:scale-110">
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={16}
                strokeWidth={1.75}
                className="text-muted-foreground transition-colors duration-300 group-hover/card:text-primary-foreground"
              />
            </div>
            <span className="text-sm font-medium text-foreground text-center px-3">
              This could be you.
            </span>
          </a>
          <div className="flex flex-col gap-1 pt-4">
            <span className="text-sm font-medium text-foreground leading-tight">
              Open roles
            </span>
            <span className="text-sm text-muted-foreground">
              Join the team
            </span>
          </div>
        </Reveal>
      </ul>
    </Section>
  );
}
