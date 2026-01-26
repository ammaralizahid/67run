# 67run

A Next.js 15.3.3 project with React 19.0.0, TypeScript, Tailwind CSS, and ESLint.

## Tech Stack

- **Next.js**: 15.3.3
- **React**: 19.0.0
- **TypeScript**: Latest
- **Tailwind CSS**: Latest
- **ESLint**: Configured with Next.js rules
- **App Router**: Using the src directory structure

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
67run/
├── src/
│   ├── app/                    # App Router directory
│   │   ├── api/                # API routes
│   │   │   └── example/        # Example API route
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles with Tailwind
│   ├── components/             # React components
│   │   ├── ui/                 # UI components (buttons, cards, etc.)
│   │   └── Example.tsx         # Example component
│   ├── lib/                    # Library code
│   │   ├── api/                # API client and network utilities
│   │   │   └── client.ts       # API client configuration
│   │   └── utils.ts            # Utility functions (cn helper)
│   ├── hooks/                  # Custom React hooks
│   │   └── useExample.ts       # Example hook
│   ├── utils/                  # Utility functions
│   │   └── index.ts            # Common utilities
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts            # Shared types and interfaces
│   ├── constants/              # Application constants
│   │   └── index.ts            # App-wide constants
│   ├── styles/                 # Additional styles
│   └── store/                  # State management (if using Zustand/Redux)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── .eslintrc.json
└── next.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
