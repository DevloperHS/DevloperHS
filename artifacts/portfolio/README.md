# Purnendu Shukla — Portfolio

A dark, moody, handcrafted personal portfolio website built with React + Vite. Features a zine-like aesthetic with seamless page transitions and optimized mobile experience.

**Live:** [devloper_hs.replit.dev](https://devloper_hs.replit.dev)

---

## 📖 Features

- **Home** — Hero introduction with call-to-action buttons
- **About** — Manifesto, bio, technical capabilities, academics, and community involvement
- **Work** — Curated selection of AI/ML projects with GitHub links and tech stacks
- **Blog** — "Transmissions" — Technical articles across three platforms:
  - Dev.to (featured posts with syntax-highlighted code)
  - Medium (long-form essays)
  - Analytics Vidhya (data science tutorials)
- **Contact** — Direct links to social profiles and email
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Dark Theme** — Off-white text on near-black backgrounds with subtle texture overlay
- **Smooth Animations** — Framer Motion page transitions

---

## 🛠 Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS (Tailwind v4), custom brutalist utilities
- **Routing:** Wouter (lightweight routing for SPA)
- **Content:** Markdown-driven blog with syntax highlighting
  - `react-markdown` for rendering
  - `react-syntax-highlighter` with oneDark theme
  - `remark-gfm` for GitHub-flavored markdown
- **Animations:** Framer Motion
- **UI Icons:** Lucide React

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
cd artifacts/portfolio
pnpm install
```

### Development

```bash
pnpm run dev
```

Opens on `http://localhost:5173` (or configured port)

### Build

```bash
pnpm run build
```

Outputs to `dist/`

### Serve Production Build

```bash
pnpm run serve
```

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.tsx           # Hero section
│   ├── About.tsx          # Bio, skills, education, community
│   ├── Work.tsx           # Project grid
│   ├── ProjectDetail.tsx  # Individual project page
│   ├── Blog.tsx           # Blog index with platform tabs
│   ├── BlogPost.tsx       # Markdown blog post renderer
│   ├── Contact.tsx        # Social links
│   └── not-found.tsx      # 404 page
├── components/
│   ├── Navbar.tsx         # Sticky header + mobile menu
│   ├── Layout.tsx         # Main layout wrapper
│   ├── PageTransition.tsx # Framer Motion wrapper
│   └── NoiseOverlay.tsx   # Texture background
├── lib/
│   ├── data.ts            # All portfolio content (projects, skills, socials)
│   ├── blogContent.ts     # Blog post imports
│   └── utils.ts           # Helper functions
├── content/
│   └── blog/              # Markdown files for blog posts
├── App.tsx                # Routes (Wouter)
├── index.css              # Global styles + custom utilities
└── main.tsx               # Entry point
```

---

## ✨ Key Features Explained

### Mobile-First Responsive Design
- Hamburger menu overlay on mobile (`< 768px`)
- Full horizontal navigation on desktop
- Full-width CTAs on mobile, inline on larger screens
- Touch targets minimum 44px × 44px
- Scrollable blog tabs with fade masks

### Blog Rendering
- Markdown files stored in `src/content/blog/`
- Imported via Vite's `?raw` import in `blogContent.ts`
- Custom syntax highlighting with language labels and line numbers
- Inline code renders with Medium-style dark pill styling

### Project Linking
All project links point to real GitHub repositories:
- Deep Researcher Agent
- VAE & RL Game Environment Generator
- Agentic CLI Tool

### Brutalist Design Language
- No rounded corners (radius: 0)
- Stark color contrast (near-black background, off-white foreground)
- Serif headings (Zilla Slab), monospace body (IBM Plex Mono)
- Subtle noise texture overlay
- Hover effects with subtle translate + shadow

---

## 📝 Content Management

### Adding a Blog Post

1. Create a markdown file in `src/content/blog/` (e.g., `my-post.md`)
2. Add post metadata to `src/lib/data.ts`:
   ```typescript
   {
     id: 5,
     slug: "my-post",
     platform: "devto", // or "medium" / "analyticsvidhya"
     title: "Post Title",
     date: "Mar 22, 2026",
     readingTime: "5 min",
     tags: ["ai", "tutorial"],
     excerpt: "Brief summary..."
   }
   ```
3. Import the markdown in `src/lib/blogContent.ts`:
   ```typescript
   import myPost from "@/content/blog/my-post.md?raw";
   ```

### Updating Projects

Edit `src/lib/data.ts` in the `projects` array. Include:
- Title, description, GitHub URL
- Technology stack
- Star count (optional)

---

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
- `--color-background` — Near-black (hsl(0, 0%, 4%))
- `--color-foreground` — Off-white (hsl(0, 0%, 90%))
- `--color-primary` — Muted parchment (hsl(40, 20%, 85%))

### Fonts
- Serif: Zilla Slab (imported from Google Fonts)
- Monospace: IBM Plex Mono

---

## 🔗 Connect

- **GitHub:** [22f2000147](https://github.com/22f2000147)
- **Twitter:** [@devloper_hs](https://x.com/devloper_hs)
- **LinkedIn:** [devloperhs](https://linkedin.com/in/devloperhs)
- **YouTube:** [Devloper Harsh](https://youtube.com/@DevloperHarsh) (6.6k subscribers)
- **Email:** [devloper.hs2015@gmail.com](mailto:devloper.hs2015@gmail.com)

---

## 📄 License

MIT — Feel free to use this as inspiration for your own portfolio.

---

Built with ❤️ by Purnendu Shukla. Last updated March 2026.
