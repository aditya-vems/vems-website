import { Input } from "@v-ems/element";
import { Section } from "@/sections/Section";
import { LogoLine } from "@v-ems/element/brand";
import { Reveal } from "@/components/Reveal";

export function Footer() {
  return (
    <>
      <Section
        id="footer"
        theme="dark"
        containerClassName="flex flex-col gap-16 pt-10 pb-6"
      >
        <Reveal className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col items-start gap-3">
            <LogoLine className="shrink-0 h-7" />
            <p className="text-base leading-relaxed text-muted-foreground">
              Virtual Energy Management System — Engineered in Delft, Deployed
              Across the Grid.
            </p>
          </div>

          <section className="flex justify-between">
            <section className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Navigate
                </h4>
                <ul className="flex flex-col gap-3 text-base text-foreground">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Log In
                    </a>
                  </li>
                </ul>
              </div>

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
            </section>

            <div className="flex flex-col gap-5">
              <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Stay Connected
              </h4>
              <Input
                type="email"
                placeholder="Email Address"
                className="rounded-none py-5 bg-transparent text-foreground border-border"
              />
              <p className="text-sm text-muted-foreground">
                By subscribing to our newsletter, you agree to our privacy
                policy.
              </p>
            </div>
          </section>
        </Reveal>
      </Section>
      <div className="dark px-38 py-4 bg-card flex flex-col gap-4 border-t border-muted border-dashed pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>© 2026 VEMS. All rights reserved.</span>
          <span className="hidden sm:inline">·</span>
          <span>KVK 93517513</span>
          <span className="hidden sm:inline">·</span>
          <span>BTW NL866434422B01</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
