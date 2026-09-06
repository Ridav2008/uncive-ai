import { CalendarDays, Menu } from "lucide-react";
import { useState } from "react";
import { LANGS, useI18n } from "@/lib/i18n";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-lg">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:grid-cols-[auto_1fr_auto]">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="relative grid size-2.5 shrink-0 place-items-center">
            <span className="absolute inset-0 rounded-full bg-primary shadow-[0_0_14px_4px_oklch(0.78_0.135_226/0.6)]" />
          </span>
          <span className="truncate text-lg font-semibold tracking-tight">uncive.ai</span>
        </a>

        <nav className="hidden justify-center gap-7 text-sm text-muted-foreground lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-1">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
                  lang === l.code
                    ? "bg-primary/20 text-primary shadow-[0_0_18px_oklch(0.78_0.135_226/0.35)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="me-1">{l.flag}</span>
                {l.label}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_oklch(0.78_0.135_226/0.45)] transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <CalendarDays className="size-4" />
            {t.bookCall}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-5 py-3 text-sm lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
