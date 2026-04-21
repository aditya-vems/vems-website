import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "span" | "li";
  /** Skip the IntersectionObserver and animate on mount (use for above-the-fold content). */
  immediate?: boolean;
  /** Distance in px the element travels up into place. */
  distance?: number;
  /** Duration in ms. */
  duration?: number;
}

export function Reveal({
  children,
  delay = 0,
  className,
  style: userStyle,
  as: Tag = "div",
  immediate = false,
  distance = 16,
  duration = 700,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);

  const style: CSSProperties = {
    transform: visible ? "translateY(0)" : `translateY(${distance}px)`,
    opacity: visible ? 1 : 0,
    filter: visible ? "blur(0)" : "blur(4px)",
    transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, opacity ${duration}ms ease-out ${delay}ms, filter ${duration}ms ease-out ${delay}ms`,
    willChange: "transform, opacity, filter",
    ...userStyle,
  };

  return (
    <Tag ref={ref as never} className={className} style={style}>
      {children}
    </Tag>
  );
}
