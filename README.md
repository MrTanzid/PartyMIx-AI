# PartyMix AI 🎵

An AI-powered music recommendation app that creates personalized playlists based on your preferences.

## Requirements

- Node.js 18.x or higher
- npm 9.x or higher

## Setup Instructions

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your API keys:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

4. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons
- Google Gemini AI API

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_GEMINI_API_KEY` | Google Gemini API key for AI recommendations |

## Deployment

The app can be deployed to any static hosting service. We recommend using Netlify or Vercel for easy deployment.