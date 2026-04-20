export function EVChargerIllustration() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="w-24 h-24 text-blue-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Charger body */}
      <rect x="30" y="24" width="40" height="80" rx="4" />

      {/* Screen */}
      <rect x="36" y="32" width="28" height="20" rx="2" />

      {/* Screen content lines */}
      <path d="M 40 40 L 54 40" opacity="0.6" />
      <path d="M 40 46 L 50 46" opacity="0.5" />

      {/* Lightning bolt */}
      <path
        d="M 52 62 L 46 74 L 52 74 L 48 86 L 58 72 L 52 72 Z"
        fill="currentColor"
        fillOpacity="0.2"
      />

      {/* Button/indicator */}
      <circle cx="50" cy="94" r="3" />

      {/* Cable from charger */}
      <path d="M 70 52 Q 86 52 86 64 Q 86 76 78 80 Q 70 84 70 94" />

      {/* Plug */}
      <rect x="64" y="90" width="12" height="14" rx="2" />
      <path d="M 67 90 L 67 86" />
      <path d="M 73 90 L 73 86" />

      {/* Base/ground */}
      <path d="M 26 104 L 74 104" />

      {/* Subtle detail lines */}
      <path d="M 36 58 L 64 58" opacity="0.4" strokeDasharray="1 2" />
    </svg>
  );
}
