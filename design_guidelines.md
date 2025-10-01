# Ynteract Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Futuristic SaaS aesthetic inspired by cutting-edge product websites (Stripe, Linear, Vercel) with enhanced interactive elements that embody the brand's mission of analyzing human interaction.

## Brand Identity

### Color Palette
- **Primary Dark**: Deep Indigo `#1B1F3B` (27 31% 17%) - Trust, intelligence, main backgrounds
- **Primary Accent**: Electric Teal `#00C9B7` (174 100% 39%) - Innovation, energy, CTAs and highlights
- **Gradient System**: Smooth teal-to-indigo transitions for backgrounds and interactive elements
- **Dark Mode**: Default theme using deep indigo as base with teal accents

### Typography
- **Headers**: Bold, geometric sans-serif (consider: Space Grotesk, Orbitron, or Archivo Black)
- **Body Text**: Clean, modern sans-serif (Inter or DM Sans)
- **Font Weights**: Bold for headers (700-800), Regular for body (400-500)

### Layout System
Use Tailwind spacing: primarily `p-4, p-8, p-12, p-16, p-20, p-24` for consistent vertical rhythm

## Core Interactive Elements

### Animation Philosophy
Every interaction teaches users about communication analysis:
- **Scroll-Triggered Animations**: Content reveals with smooth easing as user scrolls
- **Hover Effects**: Glowing trails, card expansions, gradient shifts on hover states
- **Micro-interactions**: Animated tooltips on keywords, pulsing icons, morphing elements
- **3D Motion**: Subtle depth with connection lines, floating nodes, rotating data spheres
- **Performance**: Use lightweight SVG animations, optimize with CSS transforms

### Key Interactive Patterns
1. **Parallax Scrolling**: Multi-layer depth effect for data visualization sections
2. **Dynamic Gradients**: Background transitions from indigo to teal between sections
3. **Animated Overlays**: Gaze tracking, tone arcs, body language wireframes appear on hover
4. **Split-Screen Comparisons**: Before/after toggles, competitor vs ynteract visualizations
5. **Data Visualizations**: Animated charts, waveforms, connection networks, heat maps

## Multi-Page Structure

### Homepage (Immersive Entry Point)
- **Hero**: Full-viewport animated background with connecting lines/nodes between people, bold headline "See Beyond Words"
- **Interactive Demo**: Hoverable clip showing AI detection overlays (tone, gaze, gesture)
- **4-Step Process**: Scroll-triggered 3D animations revealing Capture → Analyze → Explain → Improve
- **Industry Cards**: 4 cards (Sales, Healthcare, Customer Service, Leadership) with expansion hover effects
- **Differentiation Split-Screen**: Left shows flat competitor graphs, right shows ynteract's 3D interactive maps
- **Layout**: Single column hero, then strategic 2-column splits for comparison, 4-column grid for industries

### About Us (Interactive Storytelling)
- **Mission Animation**: Text appears with waveform effect
- **Vision Section**: Gradient reveal animation
- **Interactive Timeline**: Horizontal scroll with morphing "Y" logo at milestones
- **Values Display**: 4 pulsing icon cards (Clarity, Empathy, Innovation, Integrity)

### Solutions (Scenario-Based Pages)
- **Use Case Pages**: Sales, Healthcare, Customer Service, Leadership
- **Visual Elements**: Animated scenario replays with data overlays (heatmaps, engagement scores, presence meters)
- **Before/After Toggle**: Interactive comparison showing outcomes with/without ynteract
- **Layout**: Full-width scenario visuals with side-by-side metric comparisons

### How It Works (Educational Parallax)
- **Parallax Layers**: Voice waveform → Word cloud → Tone spectrum → Eye/body wireframes
- **Animated Connections**: Arrows linking data points to insights with explanatory text
- **Multi-Column**: Stack layers vertically on mobile, 2-column on desktop

### Technology (Credibility Builder)
- **3D Engine Visualization**: Rotating sphere of multimodal data streams
- **Privacy Animation**: Morphing lock/shield icons
- **Integration Showcase**: Floating animated logos (Zoom, Teams, Salesforce)
- **Future Roadmap**: Hover-revealed glowing feature cards

### Case Studies (Data-Driven Results)
- **Flipbook Navigation**: Card-based interactive browsing
- **Animated Metrics**: Bar charts, line graphs that animate upward on scroll
- **Layout**: 2-3 column grid of case study cards

### Resources (Thought Leadership)
- **Blog Grid**: 3-column card layout with motion effects on hover
- **Whitepapers**: Futuristic document cards with download animations
- **Video Grid**: Scroll-triggered play button animations

### Careers (Culture Showcase)
- **Animated Word Cloud**: "Innovation," "Empathy," "Trust" floating and rearranging
- **Job Accordion**: Smooth expansion with glowing teal borders
- **Video Testimonials**: Bubble-style employee quotes

### Contact/Demo (Conversion Focused)
- **Form Design**: Neon teal glow on field focus, smooth validation feedback
- **Interactive Map**: Global points pulsing where ynteract operates
- **Final CTA**: "See the Why. Shape the Future." with animated gradient loop background

## Component Library

### Buttons
- **Primary**: Electric teal background with glow effect, hover trail animation
- **Secondary**: Outlined with indigo border, teal glow on hover
- **Outlined on Images**: Blurred background, no custom hover states

### Cards
- **Default**: Dark indigo background, subtle border, lift on hover
- **Expandable**: Grow animation revealing additional content
- **Industry Cards**: Icon + title + description with background gradient shift on hover

### Forms
- **Input Fields**: Dark background, teal border on focus, floating labels
- **Validation**: Smooth color transitions (red for error, teal for success)

### Navigation
- **Header**: Fixed position, glass-morphism effect with blur
- **Logo**: Minimalist wordmark with animated "Y" on page load
- **Links**: Underline animation from center on hover

## Images Strategy
- **Hero Section**: Use animated background illustration/video showing stylized conversation nodes and connecting lines (not static photo)
- **Solution Pages**: Scenario illustrations showing AI analysis overlays
- **Case Studies**: Client logos and result visualizations
- **About Timeline**: Milestone imagery or icon illustrations
- **No Generic Stock Photos**: Prefer custom illustrations, data visualizations, and animated graphics that align with futuristic aesthetic

## Critical Design Principles
1. **Motion as Communication**: Every animation should feel purposeful, teaching users about interaction analysis
2. **Futuristic but Accessible**: Bold visuals that remain usable and readable
3. **Data-Driven Aesthetic**: Visualizations aren't decoration—they demonstrate capability
4. **Immersive Experience**: Website itself embodies the mission of analyzing interaction depth
5. **Performance Balance**: Smooth 60fps animations without sacrificing load times