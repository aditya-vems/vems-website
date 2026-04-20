export default function App() {
  return (
    <div className="w-full">
      {/* Hero - Dark */}
      <section className="dark bg-card h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-card-foreground">Hero</h1>
        </div>
      </section>

      {/* How It Works - Light */}
      <section style={{ backgroundColor: "var(--background)" }} className="h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground">How It Works</h2>
        </div>
      </section>

      {/* Steps - Dark */}
      <section style={{ backgroundColor: "var(--card)" }} className="dark h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-card-foreground">Steps</h2>
        </div>
      </section>

      {/* Team - Light */}
      <section style={{ backgroundColor: "var(--background)" }} className="h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground">Team</h2>
        </div>
      </section>

      {/* Footer - Dark */}
      <section style={{ backgroundColor: "var(--card)" }} className="dark h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-card-foreground">Footer</h2>
        </div>
      </section>
    </div>
  );
}
