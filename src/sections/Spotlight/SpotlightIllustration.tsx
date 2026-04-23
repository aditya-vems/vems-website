import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  Mail01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

export function SpotlightIllustration() {
  return (
    <div
      className="relative w-full max-w-2xl"
      style={{
        transform: "perspective(1600px) rotateY(-14deg) rotateX(6deg)",
        transformOrigin: "center center",
      }}
    >
      <div className="relative z-10 w-[400px] h-[520px] overflow-hidden rounded-2xl border border-border/70 bg-[oklch(20%_0_0)] shadow-[0_40px_90px_-24px_rgba(0,0,0,0.85)]">
        <div className="flex items-center gap-3 border-b border-border/60 bg-[oklch(26%_0_0)]/90 px-5 py-3 backdrop-blur">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary shadow-[0_10px_24px_-18px_rgba(0,0,0,0.75)]">
            <HugeiconsIcon
              icon={Mail01Icon}
              size={16}
              strokeWidth={2.1}
              className="text-white"
            />
          </span>
          <span className="text-sm font-semibold text-foreground">
            Report Generation
          </span>
        </div>

        <div className="flex items-start gap-3 px-5 py-6">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=faces"
            alt=""
            className="size-9 shrink-0 rounded-full border border-border object-cover"
          />
          <div className="max-w-sm rounded-full border border-border/70 bg-[oklch(26%_0_0)]/90 px-5 py-3 text-sm text-foreground shadow-[0_16px_40px_-26px_rgba(0,0,0,0.85)]">
            Client-ready business case for Rotterdam.
          </div>
        </div>
      </div>

      <div className="absolute -left-10 right-4 top-[35%] z-40">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 rounded-2xl opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(60% 70% at 20% 30%, color-mix(in oklch, var(--primary) 32%, transparent), transparent 70%)",
          }}
        />
        <div
          className="min-h-[140px] rounded-2xl border-2 border-dashed bg-primary/18 p-6 shadow-[0_80px_160px_-48px_rgba(0,0,0,0.94)] backdrop-blur-xl"
          style={{
            borderColor: "color-mix(in oklch, var(--primary) 70%, transparent)",
            transform: "translateY(-16px) scale(1.02)",
          }}
        >
          <div className="flex items-center gap-2">
            <HugeiconsIcon
              icon={SparklesIcon}
              size={16}
              strokeWidth={2}
              className="text-(--primary)"
            />
            <span
              className="font-mono text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--primary)" }}
            >
              VEMS Analysis
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-white/90">
            Hub modelled in 42s — peak load 1.84 MW, payback in 4.2 years, 99.2%
            accuracy vs. baseline.
          </p>

          <div className="mt-5 space-y-3">
            <div
              className="flex items-center gap-3 rounded-md border border-primary/60 bg-primary/14 px-4 py-2 text-white shadow-[0_16px_40px_-26px_rgba(0,0,0,0.85)]"
              style={{
                borderColor:
                  "color-mix(in oklch, var(--primary) 72%, transparent)",
              }}
            >
              <span
                aria-hidden
                className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary"
              >
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={14}
                  strokeWidth={2}
                  className="text-white/90"
                />
              </span>
              <span className="text-sm font-medium">
                Generate client-ready report
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-md border border-border/60 bg-primary/6 px-4 py-2 text-white/55">
              <span
                aria-hidden
                className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/20"
              >
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={14}
                  strokeWidth={2}
                  className="text-white/50"
                />
              </span>
              <span className="text-sm font-medium">
                Share with engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
