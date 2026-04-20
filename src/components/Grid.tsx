export function Grid({ className }: { className?: string }) {
  const units = 12;
  const inset = 0.1;
  const available = 100 - inset * 2;
  const outerGap = (available / units) * 0.25;
  const innerGap = (available - (units - 1) * outerGap) / units;

  return (
    <div className={["pointer-events-none", className].filter(Boolean).join(" ")}>
      <svg
        className="h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {Array.from({ length: units }, (_, index) => {
          const x1 = inset + index * (outerGap + innerGap);
          const x2 = x1 + innerGap;

          return (
            <g key={index}>
              <line
                x1={x1}
                x2={x1}
                y1={0}
                y2={100}
                stroke="rgb(107 114 128 / 0.10)"
                strokeDasharray="3 4"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <line
                x1={x2}
                x2={x2}
                y1={0}
                y2={100}
                stroke="rgb(107 114 128 / 0.10)"
                strokeDasharray="3 4"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
