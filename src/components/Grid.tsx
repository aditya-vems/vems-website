export function Grid() {
  const columns = 12;
  const columnWidth = 100 / columns;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent calc(${columnWidth}% - 0.5px),
            rgba(107, 114, 128, 0.2) calc(${columnWidth}% - 0.5px),
            rgba(107, 114, 128, 0.2) ${columnWidth}%
          )
        `,
        backgroundPositionX: "1.5rem",
        backgroundSize: "calc(100% - 3rem) 100%",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
