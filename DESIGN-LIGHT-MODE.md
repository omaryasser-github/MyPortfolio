---
name: Precision Light
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001f26'
  on-tertiary-container: '#0090a9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is built on a foundation of **Corporate Modernism** with a focus on high-clarity technical interfaces. It targets professional environments—SaaS, FinTech, and Developer Tools—where information density and legibility are paramount. 

The aesthetic is crisp, "high-definition," and meticulously organized. By utilizing a pure white base with high-contrast navy typography, the UI evokes a sense of reliability and architectural precision. The technical highlights in emerald and cyan provide a "digital-first" energy without sacrificing the professional demeanor of the light-mode environment.

## Colors

The palette is anchored by a pure `#FFFFFF` surface to maximize the perceived brightness and "air" within the layout. 

*   **Primary Navy (#0F172A):** Used for primary actions and headings to ensure maximum WCAG contrast and an authoritative feel.
*   **Technical Accents:** Emerald and Cyan are reserved for data visualizations, success states, and interactive highlights, providing a vibrant counterpoint to the sober navy.
*   **Neutrals:** A scale of cool slates (`#F8FAFC` to `#475569`) is used for borders, secondary text, and background layering to maintain a clean, clinical appearance.

## Typography

The typography system uses a tri-font pairing to distinguish between narrative, utility, and data.

1.  **Hanken Grotesk (Headings):** Chosen for its sharp, contemporary geometry. It provides the "voice" of the brand.
2.  **Inter (Body):** The workhorse for readability. Used for all long-form content and UI instructions.
3.  **Geist (Labels/Code):** A technical, mono-spaced leaning font used for status chips, data points, and developer-facing strings to reinforce the technical nature of the product.

Hierarchy is enforced primarily through weight and contrast (Navy vs. Slate) rather than excessive size changes.

## Layout & Spacing

This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

*   **Rhythm:** An 8px linear scale is used for component-level spacing, with 4px increments used only for tight internal element alignment (e.g., icons inside buttons).
*   **Density:** The layout favors generous margins (`64px` on desktop) to allow the white space to act as a separator, reducing the need for heavy borders.
*   **Reflow:** On mobile, margins shrink to `16px` and gutters to `16px`. Complex data tables should transition to a card-based vertical list or a horizontal overflow container with a gradient hint.

## Elevation & Depth

In light mode, depth is communicated through **Tonal Layering** and **Subtle Shadows**. 

*   **The Floor:** The base surface is pure white (`#FFFFFF`). 
*   **Elevation 1:** Used for cards and tooltips. A very soft, diffused shadow: `0 4px 12px rgba(15, 23, 42, 0.05)` and a `1px` outline in `#E2E8F0`.
*   **Elevation 2:** Used for floating modals. `0 12px 32px rgba(15, 23, 42, 0.1)`.
*   **Layering:** Instead of shadows, use background color shifts for secondary regions (e.g., sidebars or headers using `#F8FAFC`). This keeps the UI looking flat and modern rather than cluttered.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding takes the "edge" off the high-contrast interface, making it feel modern and approachable without becoming "bubbly" or informal. 

*   **Standard Elements:** Buttons, Input fields, and Chips use `rounded` (4px).
*   **Containers:** Cards and large panels use `rounded-lg` (8px).
*   **Specialty:** Status dots and notification badges are fully circular (pill-shaped).

## Components

*   **Buttons:** Primary buttons use the Navy background with White text. Secondary buttons use a Slate-100 background or a simple outline. Ghost buttons use Emerald or Cyan text for technical actions.
*   **Input Fields:** Use a white background with a `#E2E8F0` border. On focus, the border transitions to Primary Navy or Cyan with a subtle outer glow.
*   **Chips/Tags:** Use `Geist` font in all-caps. High-contrast technical tags use a light Emerald tint (`#ECFDF5`) with dark Emerald text.
*   **Cards:** Pure white background, 1px border (`#E2E8F0`), and the Elevation 1 shadow. Headers within cards should have a subtle bottom border to separate them from the body content.
*   **Data Tables:** Use alternating row stripes in `#F8FAFC` (Surface-variant) for high-density readability. Header text should be `label-md` in Navy.