export function ShareIllustration() {
  const primary = "var(--primary)";
  const foreground = "var(--foreground)";
  const muted = "var(--muted-foreground)";

  // Monthly cash-flow comparison, 6 months each.
  //   Scenario A = winning scenario (left, emphasized, primary fill)
  //   Scenario B = baseline (right, muted, fades with the mask)
  const scenarioA = [22, 32, 42, 56, 68, 82];
  const scenarioB = [15, 22, 28, 34, 40, 48];
  const baseY = 140;
  const barWidth = 12;
  const barGap = 8;
  const leftStart = 20;
  const rightStart = 200;

  return (
    <svg
      viewBox="0 0 400 160"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMinYMin slice"
      aria-hidden
    >
      {/* Zero baseline (dashed) */}
      <line
        x1="16"
        y1={baseY}
        x2="320"
        y2={baseY}
        stroke={muted}
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* ——— Scenario A (winner) ——— */}
      <text
        x="20"
        y="22"
        fontFamily="inherit"
        fontSize="11"
        fontWeight="600"
        fill={primary}
        letterSpacing="-0.2"
      >
        Scenario A
      </text>
      <text
        x="20"
        y="42"
        fontFamily="inherit"
        fontSize="18"
        fontWeight="700"
        fill={foreground}
        letterSpacing="-0.4"
      >
        €312k
      </text>

      {/* Delta chip: + €128k vs baseline */}
      <rect
        x="80"
        y="28"
        width="62"
        height="18"
        rx="9"
        fill={primary}
        fillOpacity="0.14"
      />
      {/* Tiny upward triangle */}
      <path
        d="M 88 40 L 91 34 L 94 40 Z"
        fill={primary}
      />
      <text
        x="98"
        y="41"
        fontFamily="inherit"
        fontSize="10"
        fontWeight="600"
        fill={primary}
        letterSpacing="-0.1"
      >
        €128k
      </text>

      {/* Scenario A bars */}
      {scenarioA.map((h, i) => (
        <rect
          key={`a-${i}`}
          x={leftStart + i * (barWidth + barGap)}
          y={baseY - h}
          width={barWidth}
          height={h}
          rx="2"
          fill={primary}
          fillOpacity="0.55"
        />
      ))}

      {/* ——— Scenario B (baseline, fades right) ——— */}
      <text
        x="200"
        y="22"
        fontFamily="inherit"
        fontSize="11"
        fontWeight="500"
        fill={muted}
        letterSpacing="-0.2"
      >
        Scenario B
      </text>
      <text
        x="200"
        y="42"
        fontFamily="inherit"
        fontSize="18"
        fontWeight="700"
        fill={foreground}
        fillOpacity="0.7"
        letterSpacing="-0.4"
      >
        €184k
      </text>

      {/* Scenario B bars */}
      {scenarioB.map((h, i) => (
        <rect
          key={`b-${i}`}
          x={rightStart + i * (barWidth + barGap)}
          y={baseY - h}
          width={barWidth}
          height={h}
          rx="2"
          fill={primary}
          fillOpacity="0.2"
        />
      ))}
    </svg>
  );
}
