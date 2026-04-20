export default function App() {
  return (
    <div className="w-full">
      {/* Hero - Dark */}
      <section className="h-screen bg-card flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-card-foreground">Hero</h1>
        </div>
      </section>

      {/* How It Works - Light */}
      <section className="h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground">How It Works</h2>
        </div>
      </section>

      {/* Steps - Dark */}
      <section className="h-screen bg-card flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-card-foreground">Steps</h2>
        </div>
      </section>

      {/* Team - Light */}
      <section className="h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground">Team</h2>
        </div>
      </section>

      {/* Footer - Dark */}
      <section className="h-screen bg-card flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-card-foreground">Footer</h2>
        </div>
      </section>
    </div>
  );
}
