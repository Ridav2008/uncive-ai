import { motion } from "motion/react";
import { ArrowRight, Bot, Database, FileSearch, Film, Clapperboard } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [Bot, FileSearch, Database];

export function Projects() {
  const { t, dir } = useI18n();
  const Arrow = () => <ArrowRight className={`size-4 ${dir === "rtl" ? "rotate-180" : ""}`} />;

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 pb-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.projectsTitle}</h2>
        <p className="mt-3 text-muted-foreground">{t.projectsSubtitle}</p>
      </div>

      <p className="mt-12 mb-5 text-sm font-semibold tracking-widest text-primary uppercase">
        {t.catAutomation}
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {t.cards.map((c, i) => {
          const Icon = icons[i] ?? Bot;
          return (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_oklch(0.78_0.135_226/0.18)]"
            >
              <span className="grid size-11 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-6"
        >
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">{t.catVideo}</p>
          <div className="mt-5 flex gap-3 overflow-hidden">
            {[0, 1, 2].map((n) => (
              <div
                key={n}
                className="relative aspect-[9/16] w-1/3 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-primary/20 via-slate-900/60 to-black/70"
              >
                <span className="absolute top-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] text-muted-foreground">
                  1080×1920
                </span>
                <Film className="absolute inset-0 m-auto size-7 text-primary/70" />
              </div>
            ))}
          </div>
          <h3 className="mt-5 text-lg font-semibold">{t.videoCard.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{t.videoCard.desc}</p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            {t.videoCard.link}
            <Arrow />
          </a>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-3xl p-6"
        >
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">{t.catGenAi}</p>
          <div className="mt-5 grid aspect-[16/9] place-items-center rounded-2xl border border-white/10 bg-[radial-gradient(60%_60%_at_50%_40%,oklch(0.78_0.135_226/0.25),transparent_70%)]">
            <Clapperboard className="size-10 text-primary/80" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Veo 3.1", "Kling AI", "ElevenLabs"].map((x) => (
              <span
                key={x}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
              >
                {x}
              </span>
            ))}
          </div>
          <h3 className="mt-5 text-lg font-semibold">{t.genAiCard.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{t.genAiCard.desc}</p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            {t.genAiCard.link}
            <Arrow />
          </a>
        </motion.article>
      </div>
    </section>
  );
}
