import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "./config";

const PRODUCTS = [
  {
    title: "Operations Intelligence Platform",
    body: "A modular analytics workspace that consolidates operational data into role-based dashboards and scheduled reporting.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Commerce Experience Suite",
    body: "A headless storefront and admin console with catalogue management, secure checkout and multi-channel inventory sync.",
    tech: ["Next.js", "Stripe", "Redis", "AWS"],
  },
  {
    title: "Automation & AI Engine",
    body: "A workflow engine that classifies documents, routes approvals and surfaces AI-assisted summaries inside existing tools.",
    tech: ["Python", "FastAPI", "LLM APIs", "Docker"],
  },
];

const PROJECT_TYPES = [
  "Software Development",
  "Full-Stack Development",
  "Enterprise Solutions",
  "AI & Automation",
  "Database & Architecture",
  "Maintenance & Support",
];

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus-visible:ring-2 focus-visible:ring-ring/40";
const labelClass = "mb-1.5 block text-xs font-semibold tracking-wide text-muted-foreground";

export function ShowcaseContact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="products" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Product showcase */}
          <div>
            <p className="eyebrow">Product Showcase</p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              Products we design, build and maintain.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              A look at the kinds of systems our engineering team delivers — the architecture,
              scope and technologies behind each build.
            </p>

            <div className="mt-10 space-y-5">
              {PRODUCTS.map((p) => (
                <article key={p.title} className="surface-card p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <li
                            key={t}
                            className="rounded-full border border-border px-3 py-1 text-[0.7rem] font-medium tracking-wide text-teal"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="scroll-mt-28">
            <div className="surface-card p-6 hover:translate-y-0 hover:border-border hover:shadow-[var(--shadow-soft)] sm:p-9">
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 font-display text-2xl leading-tight font-semibold sm:text-3xl">
                Tell us about your project.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Share a few details and our engineering team will respond with next steps. You can
                also reach us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>

              <form onSubmit={onSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="name">
                      Name
                    </label>
                    <input id="name" name="name" required className={fieldClass} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={fieldClass}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="company">
                      Company
                    </label>
                    <input id="company" name="company" className={fieldClass} placeholder="Company name" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="projectType">
                      Project Type
                    </label>
                    <select id="projectType" name="projectType" defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select a service
                      </option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={`${fieldClass} resize-y`}
                    placeholder="Briefly describe the product, timeline and goals."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Submit
                </button>

                <p aria-live="polite" className="min-h-5 text-sm text-teal">
                  {sent ? "Thank you — your message has been recorded. We'll be in touch shortly." : ""}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
