# AI Forge Home

Act as a Principal Front-End & UI/UX Engineer specializing in React, Tailwind CSS, Framer Motion, and Lucide icons. Build a high-converting, modern, futuristic Home Page for "uncive.ai" — an AI Automation & Content Creation agency/portfolio.

---

### VISUAL & TECHNICAL AESTHETIC:

- Brand Name: uncive.ai

- Theme: Ultra-sleek Dark Mode (`#070A0F` background, cyan/neon blue `#38BDF8` & soft blue `#7CB8FF` glowing accents, crisp white headings, muted light-slate paragraph text).

- Interactive Background: Dynamic animated tech grid background (CSS/Canvas particle field or subtle floating light nodes + smooth pulsing mesh gradient animation in the background).

- Multi-Language System (i18n):

  * Dynamic Language Switcher in Header (Dropdown / Pills with options: 🇦🇪 AR [Arabic / Darija], 🇬🇧 EN [English], 🇫🇷 FR [French]).

  * RTL (Right-To-Left) dynamic layout support when Arabic is active; LTR (Left-To-Right) for EN & FR.

---

### PAGE STRUCTURE & SECTIONS (Home Page):

1. NAVIGATION BAR (Header):

   - Glassmorphism sticky header (`backdrop-blur-lg bg-black/40 border-b border-white/10`).

   - Left: Brand Logo/Name: "uncive.ai" with a glowing cyan dot icon.

   - Center Links: Home, About, Services, Projects, Contact.

   - Right Side:

     * Language Selector (AR / EN / FR toggle).

     * Primary CTA Button: "Book a Call" (Cyan glow button).

2. HERO SECTION (Split Two-Column Grid Layout):

   

   - LEFT COLUMN (Typography & Call to Action):

     * Badge: Glowing pill with text "• AI Automation & Content Creation Specialist".

     * Main Headline (AR default / dynamic):

       "خدماتك ديال المحتوى والأتمتة، فمكان واحد"

       (EN: "Your Content & Automation Services, All in One Place" | FR: "Vos services de contenu et d'automatisation, en un seul endroit")

     * Sub-headline Pills / Tags:

       `• AI Automation` `• Video Editing` `• AI-Generated Video`

     * Supporting Description:

       "I design high-performance AI workflows that run your operations on autopilot, edit short-form video built for high retention, and produce next-gen AI videos — helping your business ship faster with zero manual friction."

     * CTA Button Group:

       1. Primary Glow Button: "Book a Call" (with calendar icon).

       2. Secondary Outline/Glass Button: "View Projects →".

   - RIGHT COLUMN (Featured Profile Avatar Frame):

     * Modern rounded frame card (`border border-cyan-500/30 shadow-[0_0_50px_rgba(56,189,248,0.15)] bg-slate-900/40 backdrop-blur-xl`).

     * Image Placeholder (`/avatar-uncive.jpg`) with smooth hover tilt effect and subtle ambient glow behind the portrait.

     * Subtle Overlay Tag at bottom of image: "uncive.ai | Open for New Automation & AI Projects".

3. QUICK METRICS & STATS BAR:

   - 4-column glass card grid displaying key metrics:

     * "50,000+ Hours Saved" (Automated Workflow Operations)

     * "100+ Workflows Deployed" (n8n & AI Integration)

     * "500+ Short-Form Videos" (High-Retention Reels)

     * "99.9% System Uptime"

4. FEATURED PROJECTS SHOWCASE (Categorized Grid):

   - Title: "Featured Systems & Works"

   - Category 1: AI Automation & Systems

     * Card 1: "AI Agent for Dental Clinics" (Chatbot, Booking, Follow-up & CRM).

     * Card 2: "Automated CV Analysis Workflow" (Multi-agent resume parser & scorer).

     * Card 3: "Intelligent Data Scraping Pipeline" (Webhooks + Structured DB sync).

   - Category 2: Short-Form Video Editing

     * Showcase Card: Preview layout optimized for Reels/TikToks (1080x1920 style) showcasing high-retention editing for AI creators.

     * Action Link: "Explore Video Editing Projects →".

   - Category 3: AI Video Generation

     * Showcase Card: Synthetic media, prompt-to-video capabilities (Veo 3.1, Kling AI).

     * Action Link: "View AI Video Projects →".

5. TECH STACK SHOWCASE:

   - Infinite Marquee Carousel or Glass Badges:

     * Automation: n8n, Webhooks, Airtable, Notion, Google Sheets

     * AI Models: OpenAI API, Groq API, Claude, Google AI Studio

     * Communications: Twilio, Whapi.cloud

     * Media & GenAI: CapCut, Kling AI, Veo 3.1, ElevenLabs

6. FOOTER:

   - Clean dark footer with quick call to action, navigation links, social icons (LinkedIn, GitHub, X, Instagram), and "uncive.ai © All rights reserved".

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3c2d9cc8-ad39-4486-ae9d-9ce259f8671a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
