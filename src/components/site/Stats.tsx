import { motion } from "motion/react";
import { useI18n } from "@/lib/i18n";

export function Stats() {
  const { t } = useI18n();
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 pb-20">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-5 transition-colors hover:border-primary/40"
          >
            <p className="text-3xl font-bold text-primary">{s.value}</p>
            <p className="mt-1 font-medium">{s.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
