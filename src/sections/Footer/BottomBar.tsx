const LEGAL_LINKS = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "LinkedIn", href: "#", ariaLabel: "LinkedIn" },
];

export function BottomBar() {
  return (
    <div className="dark px-38 py-4 bg-card flex flex-col gap-4 border-t border-muted border-dashed pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <span>© 2026 VEMS. All rights reserved.</span>
        <span className="hidden sm:inline">·</span>
        <span>KVK 93517513</span>
        <span className="hidden sm:inline">·</span>
        <span>BTW NL866434422B01</span>
      </div>
      <div className="flex items-center gap-6">
        {LEGAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.ariaLabel}
            className="hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
