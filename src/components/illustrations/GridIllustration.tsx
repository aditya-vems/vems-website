export function GridIllustration() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="w-24 h-24 text-orange-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Transmission tower base */}
      <path d="M 32 100 L 60 20 L 88 100" />
      <path d="M 40 76 L 80 76" />
      <path d="M 44 60 L 76 60" />
      <path d="M 48 44 L 72 44" />

      {/* Cross beams */}
      <path d="M 32 100 L 88 100" />
      <path d="M 36 88 L 84 88" />

      {/* Diagonal supports */}
      <path d="M 40 76 L 52 60" opacity="0.6" />
      <path d="M 80 76 L 68 60" opacity="0.6" />
      <path d="M 44 60 L 52 44" opacity="0.6" />
      <path d="M 76 60 L 68 44" opacity="0.6" />
      <path d="M 36 88 L 44 76" opacity="0.6" />
      <path d="M 84 88 L 76 76" opacity="0.6" />

      {/* Power lines */}
      <path d="M 20 52 Q 48 58 48 44" opacity="0.5" strokeDasharray="2 3" />
      <path d="M 100 52 Q 72 58 72 44" opacity="0.5" strokeDasharray="2 3" />

      {/* Connection nodes */}
      <circle cx="48" cy="44" r="2" fill="currentColor" />
      <circle cx="72" cy="44" r="2" fill="currentColor" />
      <circle cx="60" cy="28" r="2.5" fill="currentColor" />
    </svg>
  );
}
