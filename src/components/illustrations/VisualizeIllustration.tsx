export function VisualizeIllustration() {
  const primary = "var(--primary)";
  const foreground = "var(--foreground)";
  const muted = "var(--muted-foreground)";

  // Sankey flow structure (units):
  //   Grid    40  →  Building 30, EV 10
  //   Solar   30  →  Building 25, Export 5
  //   Battery 20  →  EV       15, Export 5
  //
  // Source right edge at x=68, destination left edge at x=300,
  // mid control at x=184 produces smooth S-curves.

  return (
    <svg
      viewBox="0 0 400 160"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMinYMin slice"
      aria-hidden
    >
      {/* Ribbons — drawn first so nodes sit on top */}
      {/* Grid → Building */}
      <path
        d="M 68 23 C 184 23, 184 23, 300 23 L 300 53 C 184 53, 184 53, 68 53 Z"
        fill={primary}
        fillOpacity="0.22"
      />
      {/* Grid → EV */}
      <path
        d="M 68 53 C 184 53, 184 88, 300 88 L 300 98 C 184 98, 184 63, 68 63 Z"
        fill={primary}
        fillOpacity="0.16"
      />
      {/* Solar → Building */}
      <path
        d="M 68 73 C 184 73, 184 53, 300 53 L 300 78 C 184 78, 184 98, 68 98 Z"
        fill={primary}
        fillOpacity="0.18"
      />
      {/* Solar → Export */}
      <path
        d="M 68 98 C 184 98, 184 123, 300 123 L 300 128 C 184 128, 184 103, 68 103 Z"
        fill={primary}
        fillOpacity="0.12"
      />
      {/* Battery → EV */}
      <path
        d="M 68 113 C 184 113, 184 98, 300 98 L 300 113 C 184 113, 184 128, 68 128 Z"
        fill={primary}
        fillOpacity="0.14"
      />
      {/* Battery → Export */}
      <path
        d="M 68 128 C 184 128, 184 128, 300 128 L 300 133 C 184 133, 184 133, 68 133 Z"
        fill={primary}
        fillOpacity="0.1"
      />

      {/* Source nodes */}
      <rect x="60" y="23" width="8" height="40" rx="2" fill={primary} fillOpacity="0.75" />
      <rect x="60" y="73" width="8" height="30" rx="2" fill={primary} fillOpacity="0.55" />
      <rect x="60" y="113" width="8" height="20" rx="2" fill={primary} fillOpacity="0.4" />

      {/* Destination nodes */}
      <rect x="300" y="23" width="8" height="55" rx="2" fill={primary} fillOpacity="0.75" />
      <rect x="300" y="88" width="8" height="25" rx="2" fill={primary} fillOpacity="0.55" />
      <rect x="300" y="123" width="8" height="10" rx="2" fill={primary} fillOpacity="0.4" />

      {/* Source labels — left of bars */}
      <text
        x="12"
        y="46"
        fontFamily="inherit"
        fontSize="11"
        fontWeight="600"
        fill={foreground}
        letterSpacing="-0.2"
      >
        Grid
      </text>
      <text x="12" y="58" fontFamily="inherit" fontSize="10" fill={muted}>
        42%
      </text>

      <text
        x="12"
        y="91"
        fontFamily="inherit"
        fontSize="11"
        fontWeight="600"
        fill={foreground}
        letterSpacing="-0.2"
      >
        Solar
      </text>
      <text x="12" y="103" fontFamily="inherit" fontSize="10" fill={muted}>
        31%
      </text>

      <text
        x="12"
        y="126"
        fontFamily="inherit"
        fontSize="11"
        fontWeight="600"
        fill={foreground}
        fillOpacity="0.8"
        letterSpacing="-0.2"
      >
        Battery
      </text>
      <text
        x="12"
        y="138"
        fontFamily="inherit"
        fontSize="10"
        fill={muted}
        fillOpacity="0.7"
      >
        18%
      </text>

      {/* Destination labels — right of bars (fade with the mask) */}
      <text
        x="314"
        y="48"
        fontFamily="inherit"
        fontSize="11"
        fontWeight="600"
        fill={foreground}
        letterSpacing="-0.2"
      >
        Building
      </text>
      <text
        x="314"
        y="103"
        fontFamily="inherit"
        fontSize="11"
        fontWeight="600"
        fill={foreground}
        letterSpacing="-0.2"
      >
        EV chargers
      </text>
      <text
        x="314"
        y="130"
        fontFamily="inherit"
        fontSize="11"
        fontWeight="600"
        fill={foreground}
        fillOpacity="0.75"
        letterSpacing="-0.2"
      >
        Export
      </text>
    </svg>
  );
}
