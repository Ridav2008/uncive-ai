import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { AboutContent } from "@/components/site/AboutContent";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { TechBackground } from "@/components/site/TechBackground";
import { I18nProvider, useI18n } from "@/lib/i18n";

const title = "About uncive.ai — AI Automation Engineer";
const description =
  "Meet the engineering student and automation architect behind uncive.ai, building reliable AI workflows and production-ready systems.";

export const Route = createFileRoute("/about")({
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
  component: AboutRoute,
});

function AboutPage() {
  const { dir, lang } = useI18n();

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [dir, lang]);

  return (
    <div dir={dir} className="min-h-screen text-foreground">
      <TechBackground />
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
}

function AboutRoute() {
  return (
    <I18nProvider>
      <AboutPage />
    </I18nProvider>
  );
}