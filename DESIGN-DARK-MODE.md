---
name: Technical Precision System
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#44e2cd'
  on-secondary: '#003731'
  secondary-container: '#03c6b2'
  on-secondary-container: '#004d44'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#001a27'
  on-tertiary-container: '#008abb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  unit-1: 0.25rem
  unit-2: 0.5rem
  unit-4: 1rem
  unit-8: 2rem
  unit-12: 3rem
  unit-16: 4rem
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is engineered for a backend-focused full-stack developer portfolio, emphasizing technical rigor, structural integrity, and professional clarity. The target audience is technical recruiters and engineering managers who value efficiency, performance, and clean code.

The aesthetic follows a **Modern Corporate** style with a **Minimalist** ethos. It avoids decorative clutter in favor of high-density information presented through a systematic hierarchy. The UI should feel like a premium IDE or a high-end developer tool: stable, responsive, and data-driven. Visual interest is generated through precise alignment, intentional whitespace, and sharp typography rather than illustrative elements.

## Colors
The palette is optimized for long-form reading and professional "dark mode" environments. 

- **Primary (#0F172A):** A deep Slate/Blue used for the global background to provide a sense of stability and depth.
- **Accent (#2DD4BF):** A vibrant Emerald/Cyan used sparingly for high-impact CTAs, active states, and success indicators.
- **Tertiary (#38BDF8):** A bright Sky Blue used for links and secondary highlights to distinguish between different types of interactive elements.
- **Neutral High-Contrast (#F8FAFC):** Used for primary headings and critical text to ensure maximum readability.
- **Muted Grays (#94A3B8):** Used for body copy and secondary metadata to reduce visual noise and create clear hierarchy.

## Typography
This design system utilizes **Inter** for all UI and prose elements due to its exceptional legibility and neutral, professional character. To emphasize the technical nature of the work, **JetBrains Mono** is employed for labels, tech stack badges, and code snippets.

- **Headings:** Use tight letter-spacing and heavy weights to create a "blocky," structural feel.
- **Body:** Use the standard weight with a generous 1.6 line-height to ensure recruiters can scan long project descriptions without fatigue.
- **Monospace:** Reserved for "technical data points" like version numbers, terminal commands, and language tags.

## Layout & Spacing
The layout uses a **Fixed Grid** system centered on a 1200px max-width container for desktop. A strict 4px baseline grid ensures vertical rhythm.

- **Grid:** 12-column layout with 24px gutters.
- **Sectioning:** Large vertical gaps (unit-16) separate major content blocks (About, Projects, Experience) to provide breathing room.
- **Mobile Adaptivity:** At 768px (Tablet), margins reduce to 24px and the grid collapses to a single column for project cards. Typography scales down slightly for headlines (e.g., Headline-XL becomes 36px).

## Elevation & Depth
Depth is conveyed through **Tonal Layering** rather than heavy shadows. Since the background is a deep Slate (#0F172A), elevated surfaces use a slightly lighter fill (#1E293B).

- **Surface Levels:** 
    - Level 0: Background (#0F172A).
    - Level 1: Cards and Containers (#1E293B).
    - Level 2: Popovers or Hovered Cards (#334155).
- **Outlines:** Instead of ambient shadows, use a 1px solid border (#334155) for Level 1 surfaces. On hover, transition the border color to the Accent (#2DD4BF) or a brighter blue (#38BDF8) to indicate interactivity.

## Shapes
The shape language is **Soft**, utilizing small radii to maintain a crisp, professional appearance while feeling modern.

- **Components:** Standard buttons and cards use 0.25rem (4px).
- **Badges:** Use a "rounded-lg" (0.5rem) or full pill shape to distinguish them from structural blocks like cards.
- **Inputs:** Maintain the 0.25rem radius for consistency with buttons.

## Components
- **Project Cards:** Features a 1px border (#334155) and Level 1 surface fill. Titles are Headline-MD. Include a dedicated footer area for tech stack badges.
- **Tech Stack Badges:** Small, pill-shaped containers with a subtle background tint of the accent color (at 10% opacity) and the code-md font style.
- **Buttons:** 
    - **Primary:** Solid Accent fill (#2DD4BF) with dark text (#0F172A). 
    - **Secondary:** Outlined with a 1px border of the accent color and no fill.
    - **Hover State:** Add a subtle outer glow (0px 0px 12px) using the accent color's hex at 30% opacity.
- **Section Dividers:** Horizontal rules should be thin (1px) and use the border color (#334155), often accompanied by a small Monospaced label (Label-caps) indicating the section start.
- **Code Snippets:** Use a dedicated Level 2 surface with a left-accented border (2px) in the secondary color to highlight key logic or architecture diagrams.