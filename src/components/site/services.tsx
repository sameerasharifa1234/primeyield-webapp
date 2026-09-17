import { Code2, Layers, Building2, Bot, Database, Wrench } from "lucide-react";

const SERVICES = [
  {
    icon: Code2,
    title: "Software Development",
    body: "Custom applications engineered around your workflows, from first prototype to production release.",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    body: "Modern web platforms with responsive interfaces, typed APIs and cloud-ready deployment pipelines.",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    body: "Internal tools, portals and integrations that connect existing systems and remove manual work.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    body: "Practical AI features and automated workflows embedded into the products your teams already use.",
  },
  {
    icon: Database,
    title: "Database & Architecture",
    body: "Data modelling, performance tuning and system architecture designed for growth and reliability.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    body: "Ongoing support, monitoring, security updates and incremental improvements after launch.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl">
            Engineering capabilities, end to end.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            One team across product thinking, architecture, delivery and long-term care of the
            software we ship.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, body }) => (
            <article key={title} className="surface-card group p-7">
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-gold/30 bg-gold-soft text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
