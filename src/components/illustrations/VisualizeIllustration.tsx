export function VisualizeIllustration() {
  const accent = "var(--primary)";
  return (
    <svg
      viewBox="0 0 400 160"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {/* Chart frame */}
      <rect
        x="90"
        y="30"
        width="220"
        height="100"
        rx="10"
        fill="var(--background)"
        stroke={accent}
        strokeWidth="1.5"
      />

      {/* Axis baseline */}
      <line
        x1="108"
        y1="110"
        x2="292"
        y2="110"
        stroke={accent}
        strokeOpacity="0.25"
        strokeDasharray="2 4"
      />

      {/* Simple bars */}
      {[
        { x: 118, h: 28 },
        { x: 148, h: 44 },
        { x: 178, h: 36 },
        { x: 208, h: 58 },
        { x: 238, h: 50 },
        { x: 268, h: 72 },
      ].map((bar) => (
        <rect
          key={bar.x}
          x={bar.x}
          y={110 - bar.h}
          width="14"
          height={bar.h}
          rx="2"
          fill={accent}
          fillOpacity="0.18"
          stroke={accent}
          strokeOpacity="0.5"
        />
      ))}

      {/* Rising trend line over the bars */}
      <path
        d="M 125 92 L 155 76 L 185 84 L 215 62 L 245 68 L 275 46"
        fill="none"
        stroke={accent}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="275" cy="46" r="4" fill={accent} />
    </svg>
  );
}
