export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="hairline-x pointer-events-none absolute top-24 right-0 left-0 h-px opacity-60"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 pt-36 pb-24 text-center sm:px-8 sm:pt-44 sm:pb-32">
        <p className="rise eyebrow">Software • Engineering • Innovation</p>

        <span
          className="mt-7 block h-10 w-px bg-gradient-to-b from-transparent to-gold"
          aria-hidden="true"
        />

        <h1 className="rise mt-7 text-4xl leading-[1.08] font-semibold text-balance sm:text-6xl lg:text-7xl">
          Engineering Ideas Into{" "}
          <span className="text-gold-gradient">Digital&nbsp;Products.</span>
        </h1>

        <p className="rise mt-7 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          We design and build scalable software solutions that help businesses operate smarter, move
          faster, and grow with confidence.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
          >
            Let&apos;s Build <span aria-hidden="true">→</span>
          </a>
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-teal hover:text-teal sm:w-auto"
          >
            Explore Services
          </a>
        </div>

        <div className="mt-16 flex w-full max-w-2xl items-center gap-4" aria-hidden="true">
          <span className="hairline-x h-px flex-1" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="h-1.5 w-1.5 rotate-45 bg-teal" />
          <span className="hairline-x h-px flex-1" />
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs tracking-[0.18em] text-muted-foreground uppercase">
          <li>Product Engineering</li>
          <li>Cloud Native</li>
          <li>AI Systems</li>
          <li>Enterprise Platforms</li>
        </ul>
      </div>
    </section>
  );
}
