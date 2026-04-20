import { Section } from "@/sections/Section";

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
      containerClassName="flex flex-col gap-10"
    >
      <div className="flex flex-col gap-6 max-w-3xl">
        <h2 className="text-5xl font-bold text-foreground leading-[1.1]">
          Meet The Team.<br />
        </h2>
        <p className="text-lg text-muted-foreground">
          A small team of energy and software specialists. Reach out directly —
          no forms, no gatekeepers.
        </p>
      </div>

      <ul className="flex w-full gap-4">
        {members.map((member) => (
          <li
            key={member.email}
            className="relative flex flex-1 flex-col items-center gap-5 bg-card border border-border p-6 transition-colors duration-300 hover:bg-muted lg:border-border transform transition-transform motion-safe:hover:scale-[1.05]"
          >
            <div className="relative size-24 shrink-0 overflow-hidden bg-muted">
              <img
                src={member.image}
                alt={member.name}
                className="size-full object-cover object-top"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base font-medium text-foreground">
                {member.name}
              </span>
              <a
                href={`mailto:${member.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {member.email}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
