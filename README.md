# ME THAI COFFEE Landing Page

A minimal, modern, and stylish landing page for ME THAI COFFEE café built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, premium design with lots of whitespace
- ☕ Animated floating coffee beans (CSS-only animations)
- 📱 Fully responsive (mobile-first design)
- ♿ Accessible (semantic HTML, focus states, alt text, reduced motion support)
- ⚡ Fast (no heavy animation libraries)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Required Images

Place the following images in the `/public` folder:

1. **`hero-cup.png`** - Main hero coffee cup image
   - Format: PNG with transparent background
   - Recommended size: 500x600px or larger
   - Content: ME THAI COFFEE branded cup

2. **`me-thai-poster.jpg`** - Brand poster for about section
   - Format: JPEG
   - Recommended size: 800x1000px (portrait orientation)
   - Content: Brand imagery showing coffee heritage

## Project Structure

```
coffee-methai/
├── app/
│   ├── globals.css      # Global styles & animations
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── Navbar.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with animated beans
│   ├── CoffeeBean.tsx   # Animated SVG bean component
│   ├── InfoStrip.tsx    # Quick info badges
│   ├── About.tsx        # About/story section
│   ├── Contact.tsx      # Location & contact info
│   ├── Reviews.tsx      # Customer testimonials
│   └── Footer.tsx       # Minimal footer
├── public/              # Static assets (add images here)
└── tailwind.config.ts   # Tailwind configuration
```

## Design System

### Colors

| Name          | Hex       | Usage                    |
|---------------|-----------|--------------------------|
| Coffee 600    | `#5A3B2E` | Primary accent, CTAs     |
| Coffee 700    | `#4A3125` | Hover states             |
| Coffee 500    | `#8B6B4A` | Secondary text           |
| Cream         | `#FAF8F5` | Background               |

### Typography

- **Headlines**: Georgia serif (font-display)
- **Body**: System UI sans-serif

### Animations

All animations are CSS-based and respect `prefers-reduced-motion`:

- `animate-float-slow` - 12s gentle vertical float
- `animate-float-slower` - 16s slower float
- `animate-drift` - 14s multi-directional drift
- `animate-float-gentle` - 10s subtle movement

## Deployment

### Build for production

```bash
npm run build
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/coffee-methai)

## License

© 2026 ME THAI COFFEE. All rights reserved.

# methaicoffee
