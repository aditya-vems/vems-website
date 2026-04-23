export function Contact() {
  return (
    <div className="flex flex-col gap-4 text-base">
      <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Contact
      </h4>
      <ul className="flex flex-col gap-3">
        <li>
          <a
            href="mailto:service@v-ems.com"
            className="text-foreground hover:text-primary transition-colors"
          >
            service@v-ems.com
          </a>
        </li>
        <li className="text-muted-foreground leading-relaxed">
          Molengraaffsingel 12
          <br />
          2629 JD, Delft
        </li>
      </ul>
    </div>
  );
}
