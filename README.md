# Maria & Francisco - Wedding Website

My wedding website. Maria e Francisco <3 
Built with React and hosted on GitHub Pages at [maria-e-francisco.com](https://www.maria-e-francisco.com/), with a Squarespace domain.

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)
- React Router DOM (routing)
- Embla Carousel (photo gallery)

## Project Structure

```
src/
├── pages/          # Route pages (Index, NotFound)
├── components/     # Wedding sections (Hero, WhenWhere, DressCode, PhotoGallery, WeddingPresents, ThankYou)
│   └── ui/         # Reusable UI primitives (shadcn/ui)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── assets/         # Static assets
```

## Run it

Requires [Node.js](https://nodejs.org/) (v18+) and npm. 

To start developing locally: 
```sh
# Install dependencies
npm install

# Start dev server
npm run dev
```

To publish and deploy, just run:
```sh
npm run deploy
```

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Lint the codebase |
| `npm run deploy` | Build and deploy to GitHub Pages |
