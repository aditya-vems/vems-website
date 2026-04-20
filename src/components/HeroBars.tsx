import { useLayoutEffect, useRef, useState } from "react";

const HEIGHTS = [2, 3, 1, 4, 3, 5, 2, 4, 1, 5, 4, 6];

// Toned down global scale: cut all opacities in half (approx) from previous edit
const OPACITIES = [
  [0.28, 0.19],
  [0.31, 0.15, 0.22, 0.35, 0.17],
  [0.3],
  [0.34, 0.23, 0.26, 0.19, 0.35, 0.21, 0.23, 0.16],
  [0.2, 0.31, 0.18],
  [0.35, 0.15, 0.28, 0.22, 0.34, 0.13, 0.25, 0.19, 0.33, 0.21, 0.16],
  [0.21, 0.33],
  [0.3, 0.18, 0.35, 0.23, 0.16, 0.27],
  [0.35],
  [0.26, 0.16, 0.33, 0.24, 0.31, 0.18, 0.35, 0.2, 0.13],
  [0.22, 0.34, 0.16, 0.28],
  [0.31, 0.21, 0.35, 0.24, 0.16, 0.27, 0.18],
];

export function HeroBars({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      setSize({ w: rect.width, h: rect.height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const units = 12;
  const inset = 0.1;
  const available = 100 - inset * 2;
  const outerGap = (available / units) * 0.25;
  const innerGap = (available - (units - 1) * outerGap) / units;

  const cellPx = (innerGap / 100) * size.w;

  return (
    <div
      ref={ref}
      className={["pointer-events-none", className].filter(Boolean).join(" ")}
      aria-hidden
    >
      {size.w > 0 && size.h > 0 && (
        <svg
          className="h-full w-full"
          viewBox={`0 0 ${size.w} ${size.h}`}
          preserveAspectRatio="none"
        >
          {HEIGHTS.map((h, col) => {
            const xPct = inset + col * (outerGap + innerGap);
            const x = (xPct / 100) * size.w;
            return Array.from({ length: h }).map((_, stack) => {
              const y = size.h - (stack + 1) * cellPx;
              const opacity =
                OPACITIES[col]?.[stack % OPACITIES[col].length] ?? 0.28;
              return (
                <rect
                  key={`${col}-${stack}`}
                  x={x}
                  y={y}
                  width={cellPx}
                  height={cellPx}
                  fill={`rgb(107 114 128 / ${Math.max(opacity * 0.45, 0.09)})`}
                  stroke={`rgb(107 114 128 / ${opacity})`}
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                />
              );
            });
          })}
        </svg>
      )}
    </div>
  );
}
