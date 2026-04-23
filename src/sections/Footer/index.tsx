import { LogoLine } from "@v-ems/element/brand";
import { Section } from "@/sections/Section";
import { Reveal } from "@/components/Reveal";
import { Navigate } from "./Navigate";
import { Contact } from "./Contact";
import { Newsletter } from "./Newsletter";
import { BottomBar } from "./BottomBar";

export function Footer() {
  return (
    <>
      <Section
        id="footer"
        theme="dark"
        containerClassName="flex flex-col gap-16 pt-10 pb-6"
      >
        <Reveal className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2.2fr]">
          <div className="flex flex-col items-start gap-3">
            <LogoLine className="shrink-0 h-7" />
            <p className="text-base leading-relaxed text-muted-foreground">
              Engineered in Delft, Deployed
              Across the Grid.
            </p>
          </div>

          <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-6">
              <Navigate />
              <Contact />
            </div>
            <Newsletter />
          </div>
        </Reveal>
      </Section>
      <BottomBar />
    </>
  );
}
