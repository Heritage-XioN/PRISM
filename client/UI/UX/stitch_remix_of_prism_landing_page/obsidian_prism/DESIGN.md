# Obsidian Prism Design System

### 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Architect"**
Obsidian Prism is a design system built for elite technical infrastructure and high-stakes enterprise environments. It rejects the friendly, rounded "SaaS-standard" aesthetic in favor of a cold, precise, and authoritative visual language. The system mimics the properties of volcanic glass and architectural blueprints—deep blacks, high-contrast typography, and atmospheric depth. It breaks the traditional grid through intentional asymmetry (e.g., heavy left-hand brand panels versus centered functional forms) and utilizes "Prism-light" (vibrant primary accents) to guide users through complex flows.

### 2. Colors
The palette is dominated by `Obsidian` (#0a0a0a) and `Charcoal` (#1f2937), creating a low-light environment where information is illuminated rather than displayed.

- **Primary Role:** The `#0da6f2` (Prism Blue) is used exclusively for functional "Node" points—active states, icons, and essential accents.
- **The "No-Line" Rule:** Sectioning is achieved through color blocks and 5% opacity white overlays rather than visible borders. 1px solid borders are strictly limited to the `outline_variant` (white/5%) for primary containers. 
- **Surface Hierarchy & Nesting:** 
  - `Surface Lowest`: Deep background (#050505).
  - `Surface Low`: Standard card background (#141414).
  - `Surface Bright`: Interactive inputs or hovered states (#1f2937).
- **The "Glass & Gradient" Rule:** Navigation and floating panels must use `backdrop-blur-md` with an 80% opacity fill to simulate layered glass.
- **Signature Textures:** Use the "Silver Gradient" (White to #94a3b8) for high-impact headlines to create a metallic, premium feel.

### 3. Typography
The system relies on a single, highly-flexible typeface: **Inter**. Identity is forged through extreme weight variance and letter spacing rather than multiple font families.

- **Display (3rem / 48px):** Weight 900 (Black). Used for Hero statements with tight tracking (-0.05em).
- **Headline (1.875rem / 30px):** Weight 700 (Bold). Primary page titles.
- **Title (1.25rem / 20px):** Weight 600. Section headers.
- **Body (1.125rem / 18px & 0.875rem / 14px):** Weight 400. High-readability scales.
- **Label/Caps (0.75rem / 12px & 10px):** Weight 600, Uppercase, Tracking 0.1em. Used for input labels and security badges to convey an "Engineering Log" aesthetic.

### 4. Elevation & Depth
Depth is conveyed through light-based layering rather than physical shadows where possible.

- **The Layering Principle:** Stack `surface_container_low` on top of `background`. Use `charcoal/50` for nested input fields to create a "recessed" effect.
- **Ambient Shadows:** 
  - `Shadow-2xl`: Used only for the main application container (deep, expansive blur).
  - `Shadow-lg`: Used for primary action buttons (e.g., "Initialize Node") to make them feel pressurized and clickable.
- **The "Ghost Border":** All primary containers must use a `1px border border-white/5` to define edges against the deep black background without adding visual clutter.
- **Glassmorphism:** Headers must use `bg-background-dark/80 backdrop-blur-md` to maintain a sense of the content passing beneath the interface.

### 5. Components
- **Buttons:**
  - *Primary (Initialize):* Solid White background with Black text. High contrast, sharp focus.
  - *Secondary (Sign In):* Ghost style, `white/10` background with `white/10` border.
- **Inputs:** Recessed `charcoal/50` fill with left-aligned Material Symbols. Focus state triggers a `Primary Blue` ring and border transition.
- **Badges:** Pill-shaped, `white/5` background with `white/10` border. Must include a pulsing status indicator for "Live" systems.
- **Security Tiers:** Use 40% opacity grayscale icons that transition to full color/100% opacity on hover to indicate "Verified" status.

### 6. Do's and Don'ts
- **Do:** Use uppercase tracking (0.1em) for all labels and small metadata.
- **Do:** Use gradients only for text (Silver) or background atmospheric overlays, never for buttons.
- **Don't:** Use rounded corners larger than `0.75rem` (12px) for cards or `full` for functional buttons; maintain a structural, architectural feel.
- **Don't:** Introduce secondary accent colors (Greens/Yellows) unless they are critical status indicators. The system should remain strictly Monochrome + Blue.
- **Do:** Ensure all interactive elements have a minimum transition time of 200ms for "smooth" enterprise feel.