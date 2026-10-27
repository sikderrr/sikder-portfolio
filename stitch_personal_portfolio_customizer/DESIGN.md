---
name: Cut & Click Editorial
colors:
  surface: '#121314'
  surface-dim: '#121314'
  surface-bright: '#39393a'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1d'
  surface-container: '#1f2021'
  surface-container-high: '#292a2b'
  surface-container-highest: '#343536'
  on-surface: '#e3e2e3'
  on-surface-variant: '#d1c6ab'
  inverse-surface: '#e3e2e3'
  inverse-on-surface: '#303031'
  outline: '#9a9078'
  outline-variant: '#4d4632'
  surface-tint: '#eec200'
  primary: '#ffecb9'
  on-primary: '#3c2f00'
  primary-container: '#facc15'
  on-primary-container: '#6c5700'
  inverse-primary: '#735c00'
  secondary: '#ffca45'
  on-secondary: '#3f2e00'
  secondary-container: '#e4ae00'
  on-secondary-container: '#5b4400'
  tertiary: '#dbf0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#99d9ff'
  on-tertiary-container: '#006083'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe083'
  primary-fixed-dim: '#eec200'
  on-primary-fixed: '#231b00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffdf9a'
  secondary-fixed-dim: '#f7be1d'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5a4300'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#121314'
  on-background: '#e3e2e3'
  surface-variant: '#343536'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.05'
    letterSpacing: -0.04em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.15'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.06em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.12em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system is tailored for elite post-production specialists, video editors, motion artists, and high-CTR thumbnail designers. It bridges the discipline of precision digital video editing suites (NLEs like Premiere Pro, DaVinci Resolve, and Final Cut) with modern, aggressive digital editorial presentation.

The personality balances surgical technical precision with hyper-impactful content marketing energy. It avoids generic agency gloss, opting instead for a deliberate "control room" aesthetic: dark obsidian canvases, high-visibility warning-yellow callouts, monospaced metadata, and structural timeline interfaces that communicate technical competence before a single video is played.

Key aesthetic characteristics include:
- **High-Contrast Dark Aesthetic:** Deep carbon and obsidian backdrops create an immersive darkroom experience, allowing vibrant video thumbnails and portfolio artwork to punch forward without distraction.
- **Production Tooling Motifs:** Stylized NLE playheads, multi-track timeline blocks, waveform markers, timecodes, and aspect ratio tags (`1280x720`, `9:16`, `A-ROLL`) integrated directly as structural UI artifacts.
- **Decisive Color Hierarchy:** Unwavering black-and-white base typography paired with punchy canary yellow to capture attention at key conversion points—mirroring the psychology of the click.

## Colors

The palette is engineered around darkroom contrast and functional utility.

- **Primary (`#FACC15` / `#EAB308`):** Punchy canary yellow. Used strictly for prime conversion elements, playhead cursors, highlight phrases in hero typography, active filter states, and high-priority tags.
- **Secondary (`#EAB308`):** Warm amber gold. Reserved for focused interactive states, active borders, and hover feedback on yellow elements.
- **Tertiary (`#38BDF8`):** Electric cyan. Derived from audio waveforms and timeline video tracks (`A1`, `V1`), providing subtle technical accents without competing with yellow CTAs.
- **Neutral Palette:**
  - Background Base: `#0A0B0C` (True charcoal obsidian)
  - Card & Surface Fill: `#131517` (Deep slate surface)
  - Elevated Container / Track Lane: `#1A1D20`
  - Subtle Borders & Rules: `#26292E`
  - Text Primary: `#FFFFFF`
  - Text Secondary: `#94A3B8`
  - Text Muted / Monospace Track Metadata: `#64748B`

Yellow should never be used as a large-area background wash; it operates as an intense spotlight against obsidian depths.

## Typography

The typographic tension relies on pairing three distinct type engines:

1. **Display & Headings (Plus Jakarta Sans):** Heavy, tightly tracked weights (800) create muscular, headline-driven impact. Letterforms pack tightly to maximize density, echoing heavy YouTube title typography and bold creator identities.
2. **Body (Inter):** Highly legible, neutral, and utilitarian. It supports multi-sentence explanations and service breakdowns without competing with the headlines.
3. **Data, Timecode, & Tagging (JetBrains Mono):** Injects authentic post-production DNA into categories, aspect ratios, timestamps (`00:00:20:00`), track indicators (`V1`, `A1`), and technical specifications.

Subheadings and category markers utilize uppercase tracking (`label-caps` or `label-mono`) to establish precise visual dividers.

## Layout & Spacing

The layout operates on a 12-column responsive fluid grid with maximum width constraint of 1280px to preserve cinematic density and avoid awkward horizontal sprawling.

### Breakpoints & Adaptive Rules
- **Desktop (1024px+):** 12 columns, 24px gutters, 48px canvas margin. Portfolio showcases arrange cleanly into 3-column rows (aspect ratio 16:9 thumbnails or video preview cards).
- **Tablet (768px - 1023px):** 8 columns, 20px gutters, 32px canvas margin. Portfolio items reflow into a 2-column grid. Timeline widgets collapse non-essential preview channels.
- **Mobile (< 768px):** 4 columns, 16px gutters, 20px canvas margin. Layout switches to a single stacked stream. Timeline graphics switch to a simplified horizontal scroll or compact timecode indicator.

Vertical section rhythm uses generous spacing (`space-2xl` and `space-3xl`) to establish breathing room between the hero, timeline element, project grid, service breakdowns, and contact zone.

## Elevation & Depth

This system avoids soft fuzzy drop shadows in favor of crisp structural layer tiers and dark studio lighting:

1. **Surface Tier 0 (Base Canvas):** `#0A0B0C`. The floor of the interface.
2. **Surface Tier 1 (Cards & Modules):** `#131517` with a razor-thin border of `1px solid #23262B`. Provides immediate mechanical definition against the canvas.
3. **Surface Tier 2 (Interactive Tracks & Floats):** `#1B1E22`. Used for playhead heads-up displays, tag pills, and input controls.
4. **Timeline Glow / Active Focus:** Subtle ambient glows are reserved solely for interactive playback items or focused video cards: `box-shadow: 0 0 24px -4px rgba(250, 204, 21, 0.15)`.
5. **Backdrop Filtration:** Pinned header elements and floating control overlays utilize an ultra-frosted background blur: `background: rgba(10, 11, 12, 0.85); backdrop-filter: blur(12px); border-bottom: 1px solid #1E2126`.

## Shapes

The shape system adopts a hybrid approach balancing technical precision with tactile interaction:

- **Cards, Timeline Bins, and Media Containers:** Employ a controlled `8px` (`0.5rem`) corner radius. This keeps thumbnail artwork structured, sharp, and true to video frame conventions without looking overly brutalist.
- **Interactive Badges, Filter Chips, and Primary Buttons:** Utilize pill geometry (`rounded-full` / `9999px`) to create organic clickable targets that stand out against the rectilinear video cards.
- **Micro UI (Aspect Tags, Track IDs):** Styled with tight `4px` (`0.25rem`) corners to match timeline clip block styling.

## Components

### Buttons
- **Primary Action (Play / Contact / Primary CTA):**
  - Background: `#FACC15`
  - Text: `#0A0B0C`, weight 700
  - Shape: Pill (`rounded-full`)
  - Padding: `0.75rem 1.5rem`
  - Hover: Background `#EAB308`, slight forward transformation (`translateY(-1px)`)
- **Secondary / Ghost Action:**
  - Background: `#16181B`
  - Border: `1px solid #26292E`
  - Text: `#FFFFFF`, weight 600
  - Shape: Pill
  - Hover: Border color shifts to `#3F444D`, background shifts to `#1C1F24`

### Chips & Filter Pills
- Enclosed in pill shells (`rounded-full`), padded `0.4rem 1rem`.
- **Inactive:** `#131517` fill, `1px solid #26292E`, text `#94A3B8`.
- **Active:** `#FACC15` fill, text `#0A0B0C`, weight 700.

### Project & Thumbnail Cards
- Outer Container: `#131517` with `1px solid #202328`, `rounded-md` (8px).
- **Media Window:** Enclosed 16:9 or 9:16 aspect box. Top corner features an overlaid metadata pill (`label-mono`, e.g., `THUMBNAIL · 1280×720` or `LONG-FORM EDIT`). Bottom-right includes a circular play/preview button (`32px` diameter, `#0A0B0C` background with subtle white icon).
- **Meta Footer:** Direct typography stack below artwork. Project Title (`headline-sm`, `#FFFFFF`), followed by Client / Platform / Year (`body-sm`, `#94A3B8`).

### NLE Video Timeline Display
- A dedicated signature brand module resembling editing software timelines:
  - Top ruler with monospaced frame counter increments (`00:00`, `00:10`, `00:20`).
  - Playhead marker: Vertical `#FACC15` hairline with a badge showing active timecode (`00:00:20:08`).
  - Track lanes (`V2`, `V1`, `A1`) housing clipped segment blocks in lavender (`#6366F1`), slate blue (`#3B82F6`), teal (`#14B8A6`), and waveform graphics in bright cyan (`#38BDF8`).

### Inputs & Email Contact Fields
- Integrated email capture pill: Outer `#131517` container with `#26292E` border, hosting an inner text input and an attached inline primary yellow CTA button for friction-free booking and file-drop outreach.