const PILLARS = [
  {
    title: "Vision",
    body: "To be the engineering partner behind software that quietly powers ambitious businesses — dependable, elegant and built to last.",
  },
  {
    title: "Mission",
    body: "Turn complex business problems into clear, maintainable systems through disciplined engineering and thoughtful product design.",
  },
  {
    title: "Values",
    body: "Craftsmanship over shortcuts, transparency in every sprint, ownership of outcomes, and long-term trust with every partner.",
  },
];

const APPROACH = [
  { step: "01", title: "Discover", body: "Understand the domain, constraints and success metrics before a line of code." },
  { step: "02", title: "Architect", body: "Design data models, services and interfaces that scale with the business." },
  { step: "03", title: "Build", body: "Iterative delivery with code review, automated testing and continuous integration." },
  { step: "04", title: "Evolve", body: "Monitor, refine and extend — software treated as a living product, not a handover." },
];

export function About() {
  return (
    <section id="about" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              A software studio built around engineering discipline.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Primeyield Ventures is a software development company working with founders and
              enterprise teams to design, build and maintain digital products. We operate as an
              embedded engineering partner — shaping architecture, writing production code and
              staying accountable for how the system performs after launch.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every engagement is grounded in clarity: a defined scope, a readable codebase and
              documentation your own team can pick up without friction.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {PILLARS.map((p) => (
              <article key={p.title} className="surface-card p-6">
                <h3 className="font-display text-lg font-semibold text-gold">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-display text-xl font-semibold">Our engineering approach</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((a) => (
              <div key={a.step} className="border-t border-border pt-5">
                <span className="font-display text-sm font-semibold text-teal">{a.step}</span>
                <h4 className="mt-2 text-base font-semibold">{a.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
