import { motion } from "motion/react";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import avatar from "@/assets/avatar-uncive.png.asset.json";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t, dir } = useI18n();

  return (
    <section id="home" className="relative mx-auto max-w-7xl px-5 pt-16 pb-20 lg:pt-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="min-w-0"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary shadow-[0_0_26px_oklch(0.78_0.135_226/0.25)]">
            <Sparkles className="size-3.5" />
            {t.badge}
          </span>

          <h1 className="text-gradient mt-6 text-4xl leading-[1.15] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t.headline}
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground"
              >
                • {tag}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{t.description}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_36px_oklch(0.78_0.135_226/0.5)] transition-transform hover:scale-[1.03]"
            >
              <CalendarDays className="size-4" />
              {t.bookCall}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-md transition-colors hover:border-primary/40 hover:text-primary"
            >
              {t.viewProjects}
              <ArrowRight className={`size-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          whileHover={{ rotateX: -4, rotateY: dir === "rtl" ? -6 : 6 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="animate-float-slow absolute -inset-8 rounded-[3rem] bg-primary/20 blur-[70px]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-slate-900/40 p-3 shadow-[0_0_50px_rgba(56,189,248,0.15)] backdrop-blur-xl">
            <img
              src={avatar.url}
              alt="uncive.ai founder portrait"
              className="w-full rounded-[1.5rem] object-cover"
              width={800}
              height={800}
            />
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-md">
              <p className="truncate text-xs text-foreground/90">
                <span className="me-2 inline-block size-2 rounded-full bg-primary align-middle shadow-[0_0_10px_3px_oklch(0.78_0.135_226/0.6)]" />
                {t.avatarTag}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
