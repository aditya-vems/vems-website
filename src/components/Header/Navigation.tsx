import { Button } from "@v-ems/element";

const LINKS = ["Industries", "Partners", "Resources", "Company"];

export function Navigation() {
  const buttonClassName =
    "font-medium text-base cursor-pointer text-foreground/60 hover:text-foreground transition-colors !no-underline";
  return (
    <div className="flex items-center gap-2">
      {LINKS.map((label) => (
        <Button key={label} variant="link" className={buttonClassName}>
          {label}
        </Button>
      ))}
    </div>
  );
}
