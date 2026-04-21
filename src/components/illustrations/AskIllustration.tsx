export function AskIllustration() {
  const accent = "var(--primary)";
  return (
    <svg
      viewBox="0 0 400 160"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {/* Dotted orbit rings */}
      <ellipse
        cx="200"
        cy="80"
        rx="130"
        ry="55"
        fill="none"
        stroke={accent}
        strokeOpacity="0.25"
        strokeDasharray="2 4"
      />
      <ellipse
        cx="200"
        cy="80"
        rx="90"
        ry="38"
        fill="none"
        stroke={accent}
        strokeOpacity="0.35"
        strokeDasharray="2 4"
      />

      {/* Satellite dots on the orbits */}
      <circle cx="70" cy="80" r="5" fill="var(--background)" stroke={accent} strokeOpacity="0.5" />
      <circle cx="330" cy="80" r="5" fill="var(--background)" stroke={accent} strokeOpacity="0.5" />
      <circle cx="110" cy="118" r="4" fill="var(--background)" stroke={accent} strokeOpacity="0.4" />
      <circle cx="290" cy="42" r="4" fill="var(--background)" stroke={accent} strokeOpacity="0.4" />

      {/* Central input pill */}
      <rect
        x="130"
        y="62"
        width="140"
        height="36"
        rx="18"
        fill="var(--background)"
        stroke={accent}
        strokeWidth="1.5"
      />
      {/* Search icon */}
      <circle cx="148" cy="80" r="5" fill="none" stroke={accent} strokeWidth="1.5" />
      <line x1="152" y1="84" x2="157" y2="89" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
      {/* Placeholder line */}
      <line
        x1="165"
        y1="80"
        x2="255"
        y2="80"
        stroke={accent}
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 4"
      />
    </svg>
  );
}
