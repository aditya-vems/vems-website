import { Section } from "@/sections/Section";
import { AccentTag } from "@/components/AccentTag";
import { Reveal } from "@/components/Reveal";
import { MEMBERS } from "./members";
import { MemberCard } from "./MemberCard";
import { JoinCard } from "./JoinCard";

export function Team() {
  return (
    <Section
      id="team"
      theme="light"
      containerClassName="flex flex-col gap-16"
    >
      <Reveal className="flex flex-col gap-6 max-w-3xl">
        <AccentTag content="People" />
        <h2 className="text-5xl font-bold text-foreground leading-[1.1]">
          Meet The <span className="text-primary">Team.</span>
        </h2>
        <p className="text-lg text-muted-foreground capitalize">
          A small team of energy and software specialists.
          No forms, no gatekeepers.
        </p>
      </Reveal>

      <ul className="grid grid-cols-6 gap-4">
        {MEMBERS.map((member, idx) => (
          <Reveal
            as="li"
            delay={idx * 80}
            key={member.email}
            className="group relative flex flex-col bg-background transition-colors duration-300"
          >
            <MemberCard member={member} />
          </Reveal>
        ))}

        <Reveal
          as="li"
          delay={MEMBERS.length * 80}
          className="relative flex flex-col"
        >
          <JoinCard />
          <div className="flex flex-col gap-1 pt-4">
            <span className="text-sm font-medium text-foreground leading-tight">
              Open Roles
            </span>
            <span className="text-sm text-muted-foreground">
              Join The Team
            </span>
          </div>
        </Reveal>
      </ul>
    </Section>
  );
}
