export function Grid() {
  const columns = 12;
  const columnWidth = 100 / columns;

  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      style={{
        paddingLeft: "1.5rem", // px-6
        paddingRight: "1.5rem",
      }}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="grid"
          x="0"
          y="0"
          width={columnWidth}
          height="100%"
          patternUnits="percentage"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2,2"
            className="text-muted-foreground opacity-20"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#grid)"
        className="text-muted-foreground"
      />
    </svg>
  );
}
