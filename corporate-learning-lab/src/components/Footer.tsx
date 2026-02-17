import { Sparkles, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Portfolio",
    links: [
      { label: "Projects", href: "/experiments" },
      { label: "Prototypes", href: "/design-studio" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Resume", href: "/resume" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Toolkits", href: "/toolkits" },
      { label: "Roundtable", href: "/roundtable" },
      { label: "Reflections & Learnings", href: "/lab-notebook" },
      { label: "Campus → Corporate", href: "/campus-to-corporate" },
    ],
  },
  {
    title: "Engage",
    links: [
      { label: "Services", href: "/services" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/kothari-preksha/" },
      { label: "Email", href: "mailto:prekshakothari06@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight leading-none">
                  Learning That Moves
                </span>
                <span className="text-xs text-accent font-mono tracking-wider leading-none mt-0.5">
                  BEYOND CONTENT
                </span>
              </div>
            </div>
            <p className="text-xs text-muted leading-relaxed max-w-xs">
              Designing learning systems for workplaces, campuses, and career transitions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/kothari-preksha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:border-accent/50 hover:bg-accent/10 transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 text-muted" />
              </a>
              <a
                href="mailto:prekshakothari06@gmail.com"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:border-accent/50 hover:bg-accent/10 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-muted" />
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => {
                  const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto:");
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-xs text-muted hover:text-accent transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-xs text-muted hover:text-accent transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="glow-line mt-12 mb-6 opacity-20" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <MapPin className="h-3 w-3" />
            <span>Bangalore, India</span>
          </div>
          <p className="text-xs text-muted/60">
            © {new Date().getFullYear()} Preksha Kothari · Learning That Moves Beyond Content
          </p>
        </div>
      </div>
    </footer>
  );
}
