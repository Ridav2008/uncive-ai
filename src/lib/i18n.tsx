import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Lang = "ar" | "en" | "fr";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "ar", label: "AR", flag: "🇦🇪" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
];

type Dict = {
  nav: { home: string; about: string; services: string; projects: string; contact: string };
  bookCall: string;
  badge: string;
  headline: string;
  tags: string[];
  description: string;
  viewProjects: string;
  avatarTag: string;
  stats: { value: string; label: string; sub: string }[];
  projectsTitle: string;
  projectsSubtitle: string;
  catAutomation: string;
  catVideo: string;
  catGenAi: string;
  cards: { title: string; desc: string }[];
  videoCard: { title: string; desc: string; link: string };
  genAiCard: { title: string; desc: string; link: string };
  stackTitle: string;
  stackSubtitle: string;
  footerTitle: string;
  footerDesc: string;
  rights: string;
};

const en: Dict = {
  nav: { home: "Home", about: "About", services: "Services", projects: "Projects", contact: "Contact" },
  bookCall: "Book a Call",
  badge: "AI Automation & Content Creation Specialist",
  headline: "Your Content & Automation Services, All in One Place",
  tags: ["AI Automation", "Video Editing", "AI-Generated Video"],
  description:
    "I design high-performance AI workflows that run your operations on autopilot, edit short-form video built for high retention, and produce next-gen AI videos — helping your business ship faster with zero manual friction.",
  viewProjects: "View Projects",
  avatarTag: "uncive.ai | Open for New Automation & AI Projects",
  stats: [
    { value: "50,000+", label: "Hours Saved", sub: "Automated workflow operations" },
    { value: "100+", label: "Workflows Deployed", sub: "n8n & AI integration" },
    { value: "500+", label: "Short-Form Videos", sub: "High-retention reels" },
    { value: "99.9%", label: "System Uptime", sub: "Monitored & self-healing" },
  ],
  projectsTitle: "Featured Systems & Works",
  projectsSubtitle: "Automation systems, retention-first editing and synthetic media.",
  catAutomation: "AI Automation & Systems",
  catVideo: "Short-Form Video Editing",
  catGenAi: "AI Video Generation",
  cards: [
    { title: "AI Agent for Dental Clinics", desc: "Chatbot, booking, follow-up and CRM sync running 24/7." },
    { title: "Automated CV Analysis Workflow", desc: "Multi-agent resume parser and scorer with instant shortlists." },
    { title: "Intelligent Data Scraping Pipeline", desc: "Webhooks plus structured database sync, clean and deduplicated." },
  ],
  videoCard: {
    title: "High-Retention Reels for AI Creators",
    desc: "Vertical 1080x1920 edits engineered around hooks, pacing and pattern interrupts.",
    link: "Explore Video Editing Projects",
  },
  genAiCard: {
    title: "Prompt-to-Video Synthetic Media",
    desc: "Cinematic AI footage produced with Veo 3.1 and Kling AI, voiced with ElevenLabs.",
    link: "View AI Video Projects",
  },
  stackTitle: "Tech Stack",
  stackSubtitle: "The tools behind every system I ship.",
  footerTitle: "Ready to put your operations on autopilot?",
  footerDesc: "Let's map your workflows and ship the first automation this week.",
  rights: "uncive.ai © All rights reserved",
};

const fr: Dict = {
  nav: { home: "Accueil", about: "À propos", services: "Services", projects: "Projets", contact: "Contact" },
  bookCall: "Réserver un appel",
  badge: "Spécialiste en automatisation IA & création de contenu",
  headline: "Vos services de contenu et d'automatisation, en un seul endroit",
  tags: ["Automatisation IA", "Montage vidéo", "Vidéo générée par IA"],
  description:
    "Je conçois des workflows IA performants qui font tourner vos opérations en pilote automatique, je monte des vidéos courtes pensées pour la rétention et je produis des vidéos IA nouvelle génération — pour livrer plus vite, sans friction manuelle.",
  viewProjects: "Voir les projets",
  avatarTag: "uncive.ai | Disponible pour de nouveaux projets IA & automatisation",
  stats: [
    { value: "50 000+", label: "Heures économisées", sub: "Opérations automatisées" },
    { value: "100+", label: "Workflows déployés", sub: "n8n & intégration IA" },
    { value: "500+", label: "Vidéos courtes", sub: "Reels à forte rétention" },
    { value: "99,9%", label: "Disponibilité", sub: "Surveillé en continu" },
  ],
  projectsTitle: "Systèmes & réalisations",
  projectsSubtitle: "Systèmes d'automatisation, montage orienté rétention et médias synthétiques.",
  catAutomation: "Automatisation & systèmes IA",
  catVideo: "Montage vidéo court format",
  catGenAi: "Génération vidéo IA",
  cards: [
    { title: "Agent IA pour cliniques dentaires", desc: "Chatbot, réservation, relances et CRM actifs 24/7." },
    { title: "Analyse automatisée de CV", desc: "Parseur multi-agents qui note et classe les candidatures." },
    { title: "Pipeline de scraping intelligent", desc: "Webhooks et synchronisation structurée en base de données." },
  ],
  videoCard: {
    title: "Reels à forte rétention pour créateurs IA",
    desc: "Montages verticaux 1080x1920 construits autour des hooks et du rythme.",
    link: "Explorer les projets de montage",
  },
  genAiCard: {
    title: "Médias synthétiques prompt-to-video",
    desc: "Séquences IA cinématiques avec Veo 3.1, Kling AI et voix ElevenLabs.",
    link: "Voir les projets vidéo IA",
  },
  stackTitle: "Stack technique",
  stackSubtitle: "Les outils derrière chaque système livré.",
  footerTitle: "Prêt à mettre vos opérations en pilote automatique ?",
  footerDesc: "Cartographions vos workflows et livrons la première automatisation cette semaine.",
  rights: "uncive.ai © Tous droits réservés",
};

const ar: Dict = {
  nav: { home: "الرئيسية", about: "علي", services: "الخدمات", projects: "المشاريع", contact: "تواصل" },
  bookCall: "حجز مكالمة",
  badge: "متخصص فالأتمتة بالذكاء الاصطناعي وصناعة المحتوى",
  headline: "خدماتك ديال المحتوى والأتمتة، فمكان واحد",
  tags: ["أتمتة بالذكاء الاصطناعي", "مونتاج الفيديو", "فيديو بالذكاء الاصطناعي"],
  description:
    "كنصاوب أنظمة ذكية كتخدم العمليات ديالك بوحدها، كنمونطي فيديوهات قصيرة مصممة باش تشد المشاهد حتى للأخير، وكنّتج فيديوهات بالذكاء الاصطناعي من الجيل الجديد — باش البيزنس ديالك يمشي بزربة وبلا خدمة يدوية.",
  viewProjects: "شوف المشاريع",
  avatarTag: "uncive.ai | متاح لمشاريع جديدة فالأتمتة والذكاء الاصطناعي",
  stats: [
    { value: "+50,000", label: "ساعة موفّرة", sub: "عمليات مؤتمتة" },
    { value: "+100", label: "نظام مُشغّل", sub: "n8n ودمج الذكاء الاصطناعي" },
    { value: "+500", label: "فيديو قصير", sub: "ريلز بنسبة مشاهدة عالية" },
    { value: "99.9%", label: "استقرار الأنظمة", sub: "مراقبة مستمرة" },
  ],
  projectsTitle: "أنظمة وأعمال مختارة",
  projectsSubtitle: "أنظمة أتمتة، مونتاج مبني على الاحتفاظ، وميديا مولّدة بالذكاء الاصطناعي.",
  catAutomation: "الأتمتة والأنظمة الذكية",
  catVideo: "مونتاج الفيديو القصير",
  catGenAi: "توليد الفيديو بالذكاء الاصطناعي",
  cards: [
    { title: "وكيل ذكي لعيادات الأسنان", desc: "شات بوت، حجز المواعيد، المتابعة وربط مع CRM على مدار الساعة." },
    { title: "تحليل السير الذاتية أوتوماتيكياً", desc: "نظام متعدد الوكلاء كيقرا ويقيّم الترشيحات." },
    { title: "نظام استخراج البيانات الذكي", desc: "Webhooks مع مزامنة منظمة مع قاعدة البيانات." },
  ],
  videoCard: {
    title: "ريلز بنسبة احتفاظ عالية لصنّاع المحتوى",
    desc: "مونتاج عمودي 1080x1920 مبني على الهوك والإيقاع السريع.",
    link: "شوف مشاريع المونتاج",
  },
  genAiCard: {
    title: "من النص إلى الفيديو",
    desc: "لقطات سينمائية بالذكاء الاصطناعي عبر Veo 3.1 و Kling AI وصوت ElevenLabs.",
    link: "شوف مشاريع الفيديو الذكي",
  },
  stackTitle: "الأدوات",
  stackSubtitle: "الأدوات اللي كنبني بيها كل نظام.",
  footerTitle: "واجد باش تخلي العمليات ديالك تمشي بوحدها؟",
  footerDesc: "نرسمو الخريطة ديال الوركفلوز ونطلقو أول أتمتة هاد الأسبوع.",
  rights: "uncive.ai © جميع الحقوق محفوظة",
};

const DICTS: Record<Lang, Dict> = { ar, en, fr };

const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict; dir: "rtl" | "ltr" }>({
  lang: "ar",
  setLang: () => {},
  t: ar,
  dir: "rtl",
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  const value = useMemo(
    () => ({ lang, setLang, t: DICTS[lang], dir: (lang === "ar" ? "rtl" : "ltr") as "rtl" | "ltr" }),
    [lang],
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
