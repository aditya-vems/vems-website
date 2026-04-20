export function Grid() {
  const columns = 12;
  const columnWidth = 100 / columns;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <svg width="100%" height="100%" className="text-muted-foreground opacity-15">
        <defs>
          <pattern
            id="grid"
            width={columnWidth}
            height="100%"
            patternUnits="percentageOfViewportWidth"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4,4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
