export function ShareIllustration() {
  const accent = "var(--primary)";
  return (
    <svg
      viewBox="0 0 400 160"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {/* Source document */}
      <rect
        x="60"
        y="40"
        width="100"
        height="80"
        rx="8"
        fill="var(--background)"
        stroke={accent}
        strokeWidth="1.5"
      />
      <line x1="76" y1="62" x2="144" y2="62" stroke={accent} strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="76" y1="78" x2="128" y2="78" stroke={accent} strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="76" y1="94" x2="138" y2="94" stroke={accent} strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />

      {/* Recipient chips */}
      {[
        { y: 40, delay: 0 },
        { y: 70, delay: 1 },
        { y: 100, delay: 2 },
      ].map(({ y }) => (
        <rect
          key={y}
          x="280"
          y={y}
          width="60"
          height="22"
          rx="11"
          fill="var(--background)"
          stroke={accent}
          strokeOpacity="0.6"
        />
      ))}

      {/* Person dots inside chips */}
      <circle cx="295" cy="51" r="3" fill={accent} />
      <circle cx="295" cy="81" r="3" fill={accent} fillOpacity="0.7" />
      <circle cx="295" cy="111" r="3" fill={accent} fillOpacity="0.5" />

      {/* Dotted connector lines */}
      <path
        d="M 160 80 Q 220 51, 280 51"
        fill="none"
        stroke={accent}
        strokeOpacity="0.5"
        strokeDasharray="3 4"
      />
      <path
        d="M 160 80 L 280 81"
        fill="none"
        stroke={accent}
        strokeOpacity="0.5"
        strokeDasharray="3 4"
      />
      <path
        d="M 160 80 Q 220 111, 280 111"
        fill="none"
        stroke={accent}
        strokeOpacity="0.5"
        strokeDasharray="3 4"
      />
    </svg>
  );
}
