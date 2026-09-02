---
name: Kaze Precision
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d3c5ab'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9c8f78'
  outline-variant: '#4f4632'
  surface-tint: '#f7be00'
  primary: '#ffe6b3'
  on-primary: '#3f2e00'
  primary-container: '#ffc400'
  on-primary-container: '#6d5300'
  inverse-primary: '#775a00'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#474646'
  on-secondary-container: '#b7b4b4'
  tertiary: '#e9e9e9'
  on-tertiary: '#2f3131'
  tertiary-container: '#cdcdcd'
  on-tertiary-container: '#555757'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdf99'
  primary-fixed-dim: '#f7be00'
  on-primary-fixed: '#251a00'
  on-primary-fixed-variant: '#5a4300'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  surface-card: '#151515'
  border-muted: '#3A3A3A'
  accent-glow: rgba(255, 196, 0, 0.1)
  glass-bg: rgba(21, 21, 21, 0.7)
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Sora
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style
The brand identity is rooted in **Cinematic Modernism** and **Technical Luxury**, drawing heavy inspiration from JDM (Japanese Domestic Market) street culture and aerodynamic engineering. The aesthetic is aggressive yet refined, characterized by deep blacks, high-contrast yellow accents, and technical complexity.

The visual style utilizes a blend of **Minimalism** and **Glassmorphism**. It prioritizes high-fidelity imagery and structured layouts to evoke a sense of speed, precision, and exclusivity. The interface should feel like a high-end automotive dashboard: functional, dark-themed, and focused on mechanical excellence.

## Colors
The palette is dominated by a "Deep Night" black background, which provides a high-contrast foundation for "Kaze Yellow" functional accents. 

- **Primary (Kaze Yellow):** Used exclusively for calls to action, active indicators, and critical highlights. It represents energy and speed.
- **Secondary/Neutral:** Various shades of charcoal and obsidian create depth without distracting from the products.
- **Functional Accents:** Border colors are kept tight and muted (#3A3A3A) to simulate machined metal seams.
- **State Changes:** Hover states for primary elements should shift toward a deeper gold (#E5A900) to maintain visual weight.

## Typography
The typographic system uses a tri-font approach to balance impact, readability, and technical feel:

- **Sora (Headlines):** Used for bold, italicized display text. The italics are essential for conveying "forward motion."
- **Hanken Grotesk (Body):** A clean, contemporary sans-serif for descriptions, ensuring high legibility against dark backgrounds.
- **JetBrains Mono (Labels/UI):** Monospaced type used for technical data, prices, and small navigation labels, reinforcing the "precision engineering" theme.

## Layout & Spacing
The system utilizes a **Fixed Grid** philosophy for large screens (max-width 1536px) and transitions to a fluid, single-column layout on mobile.

- **Grid:** 12-column system with 24px gutters.
- **Rhythm:** An 8px linear scale (unit x 2) governs most vertical rhythm, though 4px increments are used for tight technical groupings (labels).
- **Margins:** Desktop views maintain a 32px safe-area margin. 
- **Sectioning:** Large vertical gaps (80px) are used between major content blocks to allow the "dark" atmosphere to breathe.

## Elevation & Depth
Depth is achieved through a hierarchy of darkness and tactical use of borders:

- **Base Layer:** Pure black (#050505) for the background.
- **Content Layer:** Cards and panels use #151515 with a sharp 1px border (#3A3A3A).
- **Glass Layers:** Modals and navigation overlays use a backdrop filter blur (10px) with 70% opacity to maintain context of the background imagery.
- **Accents:** Depth is further simulated with a "Glow Accent" — a radial gradient of Primary Yellow at 10% opacity behind key elements to create a subtle neon-underglow effect.

## Shapes
The shape language is primarily **Sharp (0px)**. This reinforces the "machined" and "precision-cut" aesthetic of automotive parts. 

- **Exceptions:** Very small functional elements (like the "live" status dot) use a 9999px (full) radius. 
- **Images:** All product and hero containers must have 0px corners, relying on internal padding and borders for structure.

## Components
- **Buttons (Primary):** Solid #FFC400 background, #050505 text, 0px radius. Text must be uppercase JetBrains Mono with tracking.
- **Buttons (Outline):** Transparent background, 1px #3A3A3A border, white or light gray text. Border color changes to #D9D9D9 or Primary Yellow on hover.
- **Cards:** Background #151515, 1px #3A3A3A border. Images inside cards should have a 50% desaturation by default, springing to 100% saturation and 1.05x scale on hover.
- **Badges/Tags:** Rectangular, sharp-edged. Backgrounds should be dark (#050505/90) with a 1px border.
- **Inputs:** Monospaced text, sharp corners, and a subtle "underglow" shadow when focused.
- **Navigation:** Top-docked, glassmorphic (blurred) background, with Primary Yellow used only for the current active page link.