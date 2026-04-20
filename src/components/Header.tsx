import { forwardRef } from "react";

export type HeaderTheme = "dark" | "light";

export const Header = forwardRef<HTMLElement, { theme: HeaderTheme }>(
  function Header({ theme }, ref) {
  const className = [
    "sticky top-0 z-40",
    "px-6 py-4",
    "border-b border-border",
    "transition-colors duration-300",
    theme === "dark" ? "dark bg-card" : "bg-background",
  ]
    .filter(Boolean)
    .join(" ");

  return <header ref={ref} aria-hidden className={className} />;
});

