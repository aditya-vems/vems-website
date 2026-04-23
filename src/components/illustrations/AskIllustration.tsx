export function AskIllustration() {
  const primary = "var(--primary)";
  const foreground = "var(--foreground)";
  const muted = "var(--muted-foreground)";
  const background = "var(--background)";
  const border = "var(--border)";

  return (
    <svg
      viewBox="0 0 400 160"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMinYMin slice"
      aria-hidden
    >
      {/* Oversized panel — anchored top-left, overflows right + bottom */}
      <rect
        x="18"
        y="18"
        width="520"
        height="320"
        rx="16"
        fill={background}
        stroke={border}
        strokeWidth="1"
      />

      {/* Header */}
      <rect
        x="32"
        y="30"
        width="28"
        height="28"
        rx="7"
        fill={primary}
        fillOpacity="0.14"
        stroke={primary}
        strokeWidth="1.2"
      />
      <text
        x="46"
        y="51"
        fontFamily="inherit"
        fontSize="17"
        fontWeight="700"
        fill={primary}
        textAnchor="middle"
      >
        ?
      </text>
      <text
        x="70"
        y="44"
        fontFamily="inherit"
        fontSize="14"
        fontWeight="600"
        fill={foreground}
        letterSpacing="-0.2"
      >
        Select your question
      </text>
      <text
        x="70"
        y="58"
        fontFamily="inherit"
        fontSize="11"
        fill={muted}
      >
        Choose the analysis that best fits your needs.
      </text>

      {/* Divider */}
      <line
        x1="32"
        y1="78"
        x2="470"
        y2="78"
        stroke={border}
        strokeWidth="1"
      />

      {/* Row 1 — selected */}
      <rect
        x="24"
        y="88"
        width="480"
        height="54"
        rx="10"
        fill={primary}
        fillOpacity="0.10"
      />
      <circle cx="52" cy="115" r="10" fill={background} stroke={primary} strokeWidth="2" />
      <circle cx="52" cy="115" r="5" fill={primary} />
      <text
        x="74"
        y="111"
        fontFamily="inherit"
        fontSize="13"
        fontWeight="600"
        fill={primary}
        letterSpacing="-0.2"
      >
        What is the impact of grid congestion?
      </text>
      <text
        x="74"
        y="128"
        fontFamily="inherit"
        fontSize="11"
        fill={muted}
      >
        Find peaks and analyze risks of limited grid connections.
      </text>

      {/* Row 2 — peeks underneath, will fade with the mask */}
      <circle cx="52" cy="168" r="10" fill={background} stroke={muted} strokeOpacity="0.55" strokeWidth="1.4" />
      <text
        x="74"
        y="164"
        fontFamily="inherit"
        fontSize="13"
        fontWeight="500"
        fill={foreground}
        fillOpacity="0.75"
        letterSpacing="-0.2"
      >
        What are the implications of installing EV chargers?
      </text>
      <text
        x="74"
        y="181"
        fontFamily="inherit"
        fontSize="11"
        fill={muted}
        fillOpacity="0.65"
      >
        Evaluate the impact of EV chargers on your site.
      </text>
    </svg>
  );
}
