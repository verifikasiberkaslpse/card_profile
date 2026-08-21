---
name: Luminous Minimalism
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#464555'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#e0e3e5'
  on-secondary-container: '#626567'
  tertiary: '#3a495f'
  on-tertiary: '#ffffff'
  tertiary-container: '#516177'
  on-tertiary-container: '#ccdcf7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#e0e3e5'
  secondary-fixed-dim: '#c4c7c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  2xl: 3rem
  gutter: 1.5rem
  margin-mobile: 1rem
  max-width-card: 400px
---

## Brand & Style
This design system focuses on reduction and clarity, specifically tailored for profile-centric interfaces. The brand personality is calm, sophisticated, and intentional. It utilizes a **Minimalist** aesthetic with elements of **Tonal Layering** to create a sense of organized calm.

The goal is to eliminate visual noise, allowing the user's content and identity to remain the focal point. High-quality whitespace is treated as a functional element rather than empty space, guiding the eye through a disciplined typographic hierarchy. The emotional response should be one of professional ease and modern refinement.

## Colors
The palette is rooted in soft neutrals to provide a low-fatigue viewing experience. 

- **Primary (Indigo):** Used sparingly for primary actions, active states, and critical brand touchpoints.
- **Secondary (Off-white/Slate-50):** The foundational surface color, providing a soft alternative to pure white to reduce glare.
- **Tertiary (Slate-500):** Reserved for secondary metadata, helper text, and decorative borders.
- **Neutral (Slate-800):** Used for primary text and high-contrast elements to ensure accessibility and legibility.

Backgrounds should primarily use a subtle gradient from pure white to the secondary off-white color to add a sense of natural light.

## Typography
The system relies exclusively on **Inter** to maintain a systematic, utilitarian feel while offering excellent legibility at various scales. 

Hierarchy is established through weight and color rather than excessive size differences. For profile names, use `headline-md` or `headline-sm`. For biographical text, `body-md` provides the best balance of density and readability. Captions and metadata should use `label-sm` in the tertiary color.

## Layout & Spacing
The design system utilizes a **Fixed Grid** approach for profile components, centering them within a fluid container. 

- **Card Layout:** Profile cards have a maximum width of 400px to ensure the eye doesn't have to travel too far across the line. 
- **Internal Padding:** Use `xl` (2rem) for internal card padding to create the signature "airy" feel.
- **Rhythm:** An 8px linear scale (0.5rem) governs all spacing between elements. Group related items (like an avatar and a name) using `md` (1rem) and separate distinct sections (like profile info and action buttons) using `lg` (1.5rem).
- **Mobile:** On mobile devices, the margin reduces to 1rem, and the card expands to fill the width of the screen minus the margins.

## Elevation & Depth
Depth is created through **Ambient Shadows** and **Tonal Layers**. 

The base background is the secondary off-white. Cards and elevated elements are pure white. 
The shadow profile is extremely diffused: 
- Offset: 0px 4px
- Blur: 20px
- Color: `rgba(0, 0, 0, 0.04)` 

Avoid harsh borders. Instead, use a 1px solid border in the secondary color to define edges where contrast is low. This creates a soft, modern "floating" effect without the heaviness of traditional skeuomorphism.

## Shapes
The shape language is friendly and approachable, using **Rounded** corners across all containers. 

Profile cards should use `rounded-xl` (1.5rem) to emphasize the soft aesthetic. Standard buttons and input fields use `rounded-lg` (1rem). Avatars are the only exception—they should be circular (pill-shaped) to create a visual counterpoint to the rectangular cards.

## Components
- **Buttons:** Primary buttons use the primary indigo fill with white text. Secondary buttons are ghost-style with a 1px slate-200 border and slate-800 text.
- **Cards:** The core component. Must include 2rem padding, white background, and the defined ambient shadow.
- **Avatars:** Circular with a 2px white inner stroke and a subtle outer shadow to lift them off the card surface.
- **Input Fields:** Minimalist design—only a bottom border (2px) that transitions from slate-200 to primary indigo on focus, or a fully enclosed soft-gray field with `rounded-lg` corners.
- **Chips/Tags:** Used for "skills" or "interests." These should be `rounded-xl` with a secondary color background and `label-sm` typography.
- **Action Lists:** Use `body-md` for list items with plenty of vertical padding (12px-16px) and a subtle divider line in slate-50.