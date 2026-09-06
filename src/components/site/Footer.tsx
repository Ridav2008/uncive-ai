import { CalendarDays, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
  ];
  const socials = [
    { Icon: Linkedin, label: "LinkedIn" },
    { Icon: Github, label: "GitHub" },
    { Icon: Twitter, label: "X" },
    { Icon: Instagram, label: "Instagram" },
  ];

  return (
    <footer id="contact" className="border-t border-white/10 bg-black/40 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="glass rounded-3xl p-8 text-center shadow-[0_0_60px_oklch(0.78_0.135_226/0.12)]">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.footerTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">{t.footerDesc}</p>
          <a
            href="mailto:hello@uncive.ai"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_36px_oklch(0.78_0.135_226/0.45)] transition-transform hover:scale-[1.03]"
          >
            <CalendarDays className="size-4" />
            {t.bookCall}
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="size-2.5 rounded-full bg-primary shadow-[0_0_14px_4px_oklch(0.78_0.135_226/0.6)]" />
            <span className="font-semibold">uncive.ai</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">{t.rights}</p>
      </div>
    </footer>
  );
}
