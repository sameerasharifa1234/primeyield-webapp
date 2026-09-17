import { Linkedin, Github, Mail } from "lucide-react";
import { Logo } from "./logo";
import { NAV_ITEMS, CONTACT_EMAIL, WHATSAPP_LINK } from "./config";

const SERVICES = [
  "Software Development",
  "Full-Stack Development",
  "Enterprise Solutions",
  "AI & Automation",
  "Database & Architecture",
  "Maintenance",
];

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A software development company engineering scalable digital products for modern
              businesses.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-display text-sm font-semibold text-gold">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold text-gold">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-gold">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-gold">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "#contact" },
                { icon: Github, label: "GitHub", href: "#contact" },
                { icon: Mail, label: "Email", href: `mailto:${CONTACT_EMAIL}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Primeyield Ventures. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
