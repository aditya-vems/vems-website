import type { Member } from "./members";

export function MemberCard({ member }: { member: Member }) {
  return (
    <>
      <div className="relative aspect-[4/5] overflow-hidden bg-muted border border-border">
        <img
          src={member.image}
          alt={member.name}
          className="size-full object-cover object-top scale-110 transition-transform duration-500 ease-out group-hover:scale-105"
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
    </>
  );
}
