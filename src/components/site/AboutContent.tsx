import { Award, GraduationCap, Terminal } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function AboutContent() {
  const { t } = useI18n();
  const about = t.about;

  return (
    <main className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-20 sm:pt-24 lg:pt-28">
      <section aria-labelledby="about-heading" className="max-w-4xl">
        <p className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold uppercase text-primary shadow-[0_0_24px_oklch(0.78_0.135_226/0.12)]">
          {about.badge}
        </p>
        <h1 id="about-heading" className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {about.headline}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
          {about.description}
        </p>
      </section>

      <section aria-label={about.educationTitle} className="mt-14 grid items-stretch gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <article className="glass rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="size-5 text-primary" aria-hidden />
            <h2 className="text-lg font-semibold">{about.educationTitle}</h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{about.educationSubtitle}</p>

          <ol className="relative mt-8 space-y-10 border-s border-primary/20 ps-6 sm:ps-8">
            {about.education.map((entry) => (
              <li key={entry.date} className="relative">
                <span className="absolute top-1 size-2.5 rounded-full bg-primary shadow-[0_0_14px_3px_oklch(0.78_0.135_226/0.48)] ltr:-left-[1.94rem] rtl:-right-[1.94rem] sm:ltr:-left-[2.44rem] sm:rtl:-right-[2.44rem]" />
                <p className="font-mono text-xs font-semibold text-primary" dir="ltr">
                  {entry.date}
                </p>
                <h3 className="mt-2 text-base font-semibold sm:text-lg">{entry.title}</h3>
                <p className="mt-1 text-sm font-medium text-foreground/80">{entry.institution}</p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{entry.details}</p>
              </li>
            ))}
          </ol>
        </article>

        <div className="grid gap-5">
          <div className="grid grid-cols-2 gap-4">
            {about.metrics.map((metric) => (
              <article key={metric.label} className="glass min-h-28 rounded-2xl p-5 sm:p-6">
                <p className="text-3xl font-bold text-primary sm:text-4xl" dir="ltr">
                  {metric.value}
                </p>
                <p className="mt-2 font-mono text-[0.65rem] font-semibold uppercase leading-4 text-muted-foreground sm:text-xs">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>

          <article className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <Award className="size-5 text-primary" aria-hidden />
              <h2 className="text-base font-semibold">{about.certificationsTitle}</h2>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {about.certifications.map((certification) => (
                <li
                  key={certification}
                  className="rounded-full border border-primary/35 bg-primary/5 px-3 py-1.5 text-xs font-medium leading-5 text-primary"
                >
                  {certification}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass rounded-2xl p-6 font-mono">
            <div className="flex items-center gap-3 text-sm">
              <Terminal className="size-5 shrink-0 text-primary" aria-hidden />
              <span className="text-primary">$</span>
              <span className="text-muted-foreground" dir="ltr">{about.philosophyCommand}</span>
            </div>
            <blockquote className="mt-4 border-s border-primary/30 ps-4 text-sm leading-7 text-muted-foreground">
              {about.philosophyQuote}
            </blockquote>
          </article>
        </div>
      </section>
    </main>
  );
}