## Project Summary
A modern, high-performance portfolio website for Munta Sai Karthik, an AI Systems Engineer & Full-Stack Developer. The site features a fast, interactive code-based animated background that replaces heavy 3D Spline scenes, ensuring full optimization for both mobile and desktop. The design uses a premium aesthetic with glassmorphism, "Outfit" and "Syne" typography, and dynamic gradients.

## Tech Stack
- **Framework**: React + Vite (TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Minification**: Vite (esbuild)
- **Deployment**: Vercel ready

## Architecture
- `src/components`: Reusable UI components including the high-performance `AnimatedBackground.tsx`
- `src/pages`: Individual page components (Home, About, Experience, Skills, Services, Projects, Contact)
- `src/data`: Centralized `portfolioData.ts` for AI-focused content management
- `src/utils`: Helper functions and utilities

## User Preferences
- **Optimization**: Prioritize performance and smooth animations; use `esbuild` for fast builds and minification
- **Aesthetics**: Premium, modern UI with glassmorphism, neon accents, and clean AI-focused branding
- **Typography**: Prefers distinctive, elegant fonts like Outfit and Syne
- **Interactivity**: Lightweight code-based interactive backgrounds over heavy 3D assets

## Project Guidelines
- Keep components modular and reusable
- Maintain glassmorphism consistency using `.glass` and `.glass-card` classes
- Use `AnimatedBackground` with page-specific color schemes
- Ensure all sections are fully responsive for mobile and desktop views
- Build process should be optimized for modern browsers (esnext)

## Common Patterns
- **Gradients**: Use `gradient-text` for headings
- **Hover Effects**: All interactive elements should have smooth scale or shadow transitions
- **Page Transitions**: Smooth transitions between routes using `AnimatePresence` and `motion.div`
