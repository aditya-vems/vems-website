import { Button } from "@v-ems/element";

export const Navigation = () => {
  const buttonClassName = "font-medium text-base cursor-pointer text-foreground/60 hover:text-foreground transition-colors !no-underline";
  return (
    <div className="flex items-center gap-2">
      <Button variant="link" className={buttonClassName}>Industries</Button>
      <Button variant="link" className={buttonClassName}>Partners</Button>
      <Button variant="link" className={buttonClassName}>Resources</Button>
      <Button variant="link" className={buttonClassName}>Company</Button>
    </div>
  );
};