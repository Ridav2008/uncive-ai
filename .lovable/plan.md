# Add the uncive.ai About page

## Build
- Add a dedicated `/about` page using the existing animated background, header, footer, spacing, glow, and glass styling so it feels native to the current site.
- Recreate the reference layout: localized introduction, large education timeline, four-stat grid, certifications, and terminal-style philosophy quote.
- Add English, French, and Arabic/Darija About-page copy to the existing language system, including RTL layout behavior.
- Update only the About links in the existing header and footer to point to `/about`; preserve all other Home page content and interactions.

## Technical details
- Create a new TanStack route with unique About-page metadata.
- Reuse the current shared components and semantic design tokens; use Lucide icons for the education, certification, terminal, and navigation details.
- Verify `/` remains unchanged, `/about` renders successfully, language switching works, and the layout fits desktop and mobile widths.
