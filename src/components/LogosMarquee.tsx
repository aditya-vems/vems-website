const LOGOS = [
  { src: "https://www.v-ems.com/images/Logo/Algemeen.webp", alt: "Algemeen" },
  { src: "https://www.v-ems.com/images/Logo/ProntoPower.webp", alt: "Pronto Power" },
  { src: "https://www.v-ems.com/images/Logo/edmij.webp", alt: "Edmij" },
  { src: "https://www.v-ems.com/images/Logo/withthegrid.webp", alt: "With The Grid" },
  { src: "https://www.v-ems.com/images/Logo/janszon.webp", alt: "Janszon" },
  { src: "https://www.v-ems.com/images/Logo/alius.webp", alt: "Alius" },
  { src: "https://www.v-ems.com/images/Logo/hogeschool.webp", alt: "Hogeschool" },
  { src: "https://www.v-ems.com/images/Logo/vdh.webp", alt: "VDH" },
  { src: "https://www.v-ems.com/images/Logo/deGroeneReusOm.webp", alt: "De Groene Reus" },
  { src: "https://www.v-ems.com/images/Logo/rexel.webp", alt: "Rexel" },
  { src: "https://www.v-ems.com/images/Logo/intercel.webp", alt: "Intercel" },
];

function LogoCell({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative flex h-20 w-44 shrink-0 items-center justify-center px-8">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-h-9 max-w-full object-contain opacity-55 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
      />
    </div>
  );
}

export function LogosMarquee({ className }: { className?: string }) {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <div
      className={["relative w-full border-y border-border", className]
        .filter(Boolean)
        .join(" ")}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div className="overflow-hidden">
        <div
          className="flex w-max items-stretch whitespace-nowrap divide-x divide-dashed divide-border"
          style={{ animation: "logos-marquee 55s linear infinite" }}
        >
          {loop.map((logo, i) => (
            <LogoCell key={`${logo.alt}-${i}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logos-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
