export function BatteryIllustration() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="w-24 h-24 text-green-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Battery terminal */}
      <rect x="48" y="18" width="24" height="6" rx="1" />

      {/* Battery body */}
      <rect x="34" y="24" width="52" height="84" rx="6" />

      {/* Charge level segments (full) */}
      <rect x="40" y="34" width="40" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
      <rect x="40" y="50" width="40" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
      <rect x="40" y="66" width="40" height="12" rx="2" fill="currentColor" fillOpacity="0.15" />
      <rect x="40" y="82" width="40" height="12" rx="2" opacity="0.5" />

      {/* Lightning bolt overlay */}
      <path
        d="M 62 42 L 54 60 L 62 60 L 58 78 L 68 58 L 60 58 Z"
        fill="currentColor"
        fillOpacity="0.35"
        stroke="none"
      />

      {/* Side detail / connection */}
      <path d="M 30 54 L 34 54" />
      <path d="M 30 66 L 34 66" />
      <path d="M 86 54 L 90 54" />
      <path d="M 86 66 L 90 66" />

      {/* Status dot */}
      <circle cx="76" cy="30" r="1.5" fill="currentColor" />
    </svg>
  );
}
