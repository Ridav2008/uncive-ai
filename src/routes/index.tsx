import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { TechBackground } from "@/components/site/TechBackground";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Projects } from "@/components/site/Projects";
import { TechStack } from "@/components/site/TechStack";
import { Footer } from "@/components/site/Footer";

const title = "uncive.ai — AI Automation & Content Creation";
const description =
  "AI automation systems, high-retention short-form video editing and next-gen AI video production for businesses that want to ship faster.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Page() {
  const { dir, lang } = useI18n();

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [dir, lang]);

  return (
    <div dir={dir} className="min-h-screen text-foreground">
      <TechBackground />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}

function Index() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  );
}
