import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { Grid } from "@/components/Grid";

export default function App() {
  return (
    <div className="w-full">
      <Grid />
      <Navigation />

      <Section bgToken="card" id="hero">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Hero</h1>
          <p className="text-muted-foreground">Dark Section</p>
        </div>
      </Section>

      <Section bgToken="background" id="clients">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Clients</h2>
          <p className="text-muted-foreground">Light Section</p>
        </div>
      </Section>

      <Section bgToken="background" id="how-it-works">
        <div className="text-center">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-muted-foreground">Light Section</p>
        </div>
      </Section>

      <Section bgToken="card" id="steps">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Steps</h2>
          <p className="text-muted-foreground">Dark Section</p>
        </div>
      </Section>

      <Section bgToken="background" id="team">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Team</h2>
          <p className="text-muted-foreground">Light Section</p>
        </div>
      </Section>

      <Section bgToken="card" id="footer">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Footer</h2>
          <p className="text-muted-foreground">Dark Section</p>
        </div>
      </Section>
    </div>
  );
}
