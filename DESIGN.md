# Design Brief — SearchLift Technologies

| Property                    | Value                                                                           |
| --------------------------- | ------------------------------------------------------------------------------- |
| **Tone & Aesthetic**        | Premium tech, conversion-focused, sophisticated but approachable               |
| **Primary Theme**           | Light (user-facing marketing site)                                             |
| **Color Direction**         | Blue-gradient (deep #20417B → bright #1E90FF), clean neutrals, premium depth   |
| **Typography**              | Inter (display & body), Geist Mono (code)                                       |
| **Shape Language**           | 12–16px rounded corners, soft edges, no sharp angles                            |
| **Motion Tempo**            | 0.3s smooth cubic-bezier transitions, floating animations on hero              |
| **Differentiation**         | Glassmorphism cards, gradient text/buttons, smooth hover lifts, premium shadows |

## Palette

| Token                | OKLCH (L, C, H)           | Purpose                      |
| -------------------- | ------------------------- | ---------------------------- |
| `--primary`          | 0.48 0.22 258             | Deep-to-bright blue gradient |
| `--accent`           | 0.62 0.25 252             | Bright cyan-blue CTAs        |
| `--secondary`        | 0.92 0.05 260             | Light blue background        |
| `--muted`            | 0.93 0.02 240             | Neutral gray                 |
| `--foreground`       | 0.18 0 0                  | Text color (high contrast)   |
| `--background`       | 0.99 0 0                  | Clean white                  |
| `--border`           | 0.92 0.03 260             | Subtle blue-tinted border    |
| `--destructive`      | 0.55 0.22 25              | Error/red actions            |

## Structural Zones

| Zone           | Surface Treatment                                                    |
| -------------- | -------------------------------------------------------------------- |
| **Navigation** | Sticky header: `bg-background` with soft underline, no shadow base   |
| **Hero**       | `--gradient-primary` background with animated floating shapes        |
| **Content**    | Alternating white and `secondary` (light blue-gray) sections         |
| **Cards**      | `.glass` utility: backdrop-blur + semi-transparent + subtle border   |
| **CTA Areas**  | Gradient-filled buttons, `--gradient-primary` with smooth hover      |
| **Footer**     | `bg-secondary/50` with `border-t`                                    |

## Component Patterns

- **Buttons:** Primary (gradient), Secondary (outline), Tertiary (ghost) with 8px radius
- **Cards:** Glass-morphism with hover lift (+8px transform, elevated shadow)
- **Forms:** `bg-input` backgrounds, `ring` on focus, label above pattern
- **Links:** Underline on hover, color: `--accent`
- **Icons:** Lucide React, 20–24px, inherit color from context

## Motion & Interaction

| Trigger       | Animation                                                    |
| ------------- | ------------------------------------------------------------ |
| **Hover**     | `.hover-lift` — translateY(-8px) + elevated shadow           |
| **Scroll**    | Fade-in via Intersection Observer (target: 0.2 opacity)      |
| **Nav Link**  | Underline slide-in on active state (0.3s smooth)             |
| **Hero**      | Floating geometric shapes with `@keyframes` (3–5s infinite)  |
| **Transitions** | All interactive elements use smooth cubic-bezier (0.4, 0, 0.2, 1) |

## Constraints

- No raw hex or rgb colors — use OKLCH tokens only
- No glow or neon shadows — soft, layered elevation only
- No bouncy animations — cubic-bezier easing for premium feel
- No more than 2 font families (Inter + Geist Mono)
- Mobile-first responsive design (`sm`, `md`, `lg` breakpoints)

## Signature Detail

**Gradient Text Headers** — `.text-gradient` utility applies `--gradient-primary` to h1/h2 hero text, blending deep blue into bright cyan. Combined with `.glass` cards and smooth `.hover-lift` interactions, creates a cohesive premium-tech identity distinct from generic agency sites.
