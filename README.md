# News2World

> **From Headlines to Stories** — Turn any news topic into an interactive knowledge graph, AI summary, and TikTok-style video reel.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

<img width="1432" height="761" alt="Screenshot 2026-04-14 at 4 29 50 PM" src="https://github.com/user-attachments/assets/b8b32480-b3b1-47c3-96cd-d5cf2f1df48c" />

---

## Overview

News2World is a web application that transforms raw news topics or articles into rich, multi-format outputs:

1. **Knowledge Graph** — Interactive node-edge visualization of extracted entities (people, places, organizations, events) and their relationships.
2. **AI Summary** — Concise abstractive summary with a faithfulness score and bolded key highlights.
3. **Video Reel** — TikTok/Reels-style storyboard with scene cards, captions, timestamps, and imagery.

---

## Demo Topics

The app ships with 4 pre-loaded examples — no API required:

| Topic | Faithfulness | Entities | Scenes |
|-------|-------------|----------|--------|
| Gaza Ceasefire 2025 | 92% | 10 | 4 |
| Ukraine Peace Negotiations 2025 | 88% | 8 | 4 |
| GPT-5 Launch & AI Race 2025 | 95% | 8 | 4 |
| COP30 Climate Summit — Belém 2025 | 90% | 8 | 4 |

<img width="1422" height="769" alt="Screenshot 2026-04-14 at 4 30 09 PM" src="https://github.com/user-attachments/assets/8e3d3fa3-e86a-4700-bd27-ebb992613846" />

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript 5 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 + shadcn/ui |
| Graph Visualization | @xyflow/react (React Flow) |
| Animations | Framer Motion |
| Routing | React Router DOM |
| State Management | React Query + React hooks |

---

## Project Structure

```
news2world/
├── notebooks/                          # Jupyter notebooks (ML pipeline reference)
│   ├── 01_entity_extraction.ipynb      # NER with spaCy transformer model
│   ├── 02_knowledge_graph.ipynb        # Graph construction with NetworkX
│   ├── 03_summarization.ipynb          # BART summarization + faithfulness scoring
│   └── 04_video_reel_generation.ipynb  # Storyboard scene generation
│
├── public/                             # Static assets
│
├── src/
│   ├── assets/
│   │   └── demos/                      # Generated scene images per demo topic
│   │
│   ├── components/
│   │   ├── InputScreen.tsx             # Search bar + demo topic chips
│   │   ├── ProcessingScreen.tsx        # Animated step-by-step progress
│   │   ├── OutputScreen.tsx            # Three-panel results layout
│   │   ├── KnowledgeGraph.tsx          # Interactive React Flow graph
│   │   ├── SummaryCard.tsx             # Summary + faithfulness badge
│   │   ├── VideoReelPreview.tsx        # Phone-frame storyboard mockup
│   │   ├── Navbar.tsx                  # Top navigation bar
│   │   └── ui/                         # shadcn/ui primitives
│   │
│   ├── data/
│   │   └── demo-data.ts               # Pre-loaded demo results (4 topics)
│   │
│   ├── pages/
│   │   ├── Index.tsx                   # Main app page (state machine)
│   │   └── NotFound.tsx                # 404 page
│   │
│   ├── hooks/                          # Custom React hooks
│   ├── lib/                            # Utility functions
│   ├── index.css                       # Design system tokens (HSL)
│   └── main.tsx                        # App entry point
│
├── tailwind.config.ts                  # Tailwind configuration
├── vite.config.ts                      # Vite build configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd news2world

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Application Flow

```
┌─────────────┐     ┌──────────────────┐     ┌─────────────────────────┐
│ Input Screen │────▶│ Processing Screen│────▶│     Output Screen       │
│              │     │                  │     │                         │
│ • Search bar │     │ • Extract Entities│    │ ┌───────┬───────┬─────┐ │
│ • Demo chips │     │ • Build Graph    │     │ │ Graph │Summary│Reel │ │
│              │     │ • Gen Summary    │     │ │       │       │     │ │
│              │     │ • Create Reel    │     │ └───────┴───────┴─────┘ │
└─────────────┘     └──────────────────┘     └─────────────────────────┘
```

---

## Notebooks

The `notebooks/` directory contains reference Jupyter notebooks documenting the ML pipeline:

| Notebook | Description |
|----------|-------------|
| `01_entity_extraction.ipynb` | Named Entity Recognition using spaCy transformer models with deduplication and coreference resolution |
| `02_knowledge_graph.ipynb` | Directed graph construction with NetworkX, including betweenness centrality analysis |
| `03_summarization.ipynb` | Abstractive summarization with BART and faithfulness scoring via sentence embeddings |
| `04_video_reel_generation.ipynb` | Automated storyboard generation with scene breakdowns and image prompts |

> **Note:** These notebooks are reference implementations. The web app currently uses pre-loaded demo data.

---

## Design System

- **Primary:** Electric Blue `#2563EB` (HSL 221 83% 53%)
- **Background:** Pure White
- **Typography:** Inter (300–800 weights)
- **Border Radius:** `0.625rem`
- **Shadows:** Subtle elevation via `--shadow-card` tokens

All colors are HSL values consumed via Tailwind utility classes — no hardcoded colors in components.

---

## License

MIT
