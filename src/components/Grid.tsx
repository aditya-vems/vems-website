export function Grid() {
  const columns = 12;
  const step = 100 / columns;

  return (
    <div className="pointer-events-none absolute inset-0 px-6">
      <svg
        className="h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {Array.from({ length: columns - 1 }, (_, index) => {
          const x = step * (index + 1);

          return (
            <line
              key={x}
              x1={x}
              x2={x}
              y1={0}
              y2={100}
              stroke="rgb(107 114 128 / 0.10)"
              strokeDasharray="3 4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>
    </div>
  );
}
