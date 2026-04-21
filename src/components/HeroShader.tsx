import { MeshGradient } from "@paper-design/shaders-react";

// Diagonal band that fades both sides, combined with a vertical fade top/bottom,
// so the shader dissolves into the dark bg on every edge.
const DIAGONAL_MASK =
  "linear-gradient(115deg, transparent 5%, rgba(0,0,0,0.4) 30%, black 50%, rgba(0,0,0,0.4) 70%, transparent 95%)";
const VERTICAL_MASK =
  "linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)";

export function HeroShader({ className }: { className?: string }) {
  return (
    <div
      className={["pointer-events-none overflow-hidden", className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden
      style={{
        maskImage: `${DIAGONAL_MASK}, ${VERTICAL_MASK}`,
        WebkitMaskImage: `${DIAGONAL_MASK}, ${VERTICAL_MASK}`,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    >
      <MeshGradient
        style={{
          width: "100%",
          height: "100%",
          mixBlendMode: "screen",
          opacity: 0.55,
        }}
        colors={["#000000", "#1a2330", "#2196e8", "#e5e7eb", "#000000"]}
        distortion={0.9}
        swirl={0.3}
        speed={0.2}
        grainMixer={0.1}
        grainOverlay={0.03}
      />
    </div>
  );
}
