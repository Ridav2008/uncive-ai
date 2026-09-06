import { useI18n } from "@/lib/i18n";

const GROUPS = [
  { label: "Automation", items: ["n8n", "Webhooks", "Airtable", "Notion", "Google Sheets"] },
  { label: "AI Models", items: ["OpenAI API", "Groq API", "Claude", "Google AI Studio"] },
  { label: "Communications", items: ["Twilio", "Whapi.cloud"] },
  { label: "Media & GenAI", items: ["CapCut", "Kling AI", "Veo 3.1", "ElevenLabs"] },
];

const ALL = GROUPS.flatMap((g) => g.items);

export function TechStack() {
  const { t } = useI18n();
  return (
    <section id="services" className="pb-24">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.stackTitle}</h2>
        <p className="mt-3 text-muted-foreground">{t.stackSubtitle}</p>
      </div>

      <div
        className="relative mt-10 overflow-hidden py-2"
        style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
      >
        <div className="animate-marquee flex w-max gap-3" dir="ltr">
          {[...ALL, ...ALL].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="glass rounded-full px-5 py-2.5 text-sm whitespace-nowrap text-foreground/90"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((g) => (
          <div key={g.label} className="glass rounded-2xl p-5">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">{g.label}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
