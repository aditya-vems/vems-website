const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Log In", href: "#" },
];

export function Navigate() {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Navigate
      </h4>
      <ul className="flex flex-col gap-3 text-base text-foreground">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
