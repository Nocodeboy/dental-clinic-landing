# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a SvelteKit landing page for a dental clinic built with shadcn/ui components, TypeScript, and Tailwind CSS. The template has been adapted from a generic business template to specifically serve a dental clinic's needs, featuring sections for dental services, patient testimonials, pricing plans, and professional team information.

## Development Commands

### Core Development
- `npm run dev` or `bun dev` - Start development server on http://localhost:5173
- `npm run build` or `bun run build` - Build for production
- `npm run preview` or `bun run preview` - Preview production build

### Quality Assurance
- `npm run check` - Run Svelte type checking and syntax validation
- `npm run check:watch` - Run type checking in watch mode
- `npm test` - Run tests with Vitest

## Architecture

### Project Structure
- **src/lib/components/** - Main landing page components (Hero, Features, Pricing, etc.)
- **src/lib/components/ui/** - Reusable shadcn/ui components with TypeScript
- **src/routes/** - SvelteKit file-based routing
- **src/lib/__tests__/** - Test files using Vitest and Testing Library

### Key Technologies
- **SvelteKit 5** with TypeScript and static adapter for deployment
- **shadcn/ui** components via shadcn-svelte (config in components.json)
- **Tailwind CSS** with plugins for forms, typography, and animations
- **Vitest** for testing with jsdom environment
- **Mode Watcher** for dark mode functionality
- **Embla Carousel** for image carousels

### Component Architecture
Landing page sections are modular components adapted for dental clinic:
- Navbar with mobile sidebar and clinic branding
- Hero section promoting dental care with appointment CTA
- Sponsors/Partners, Benefits (clinic advantages), Features (dental technology)
- Services (dental treatments), HowItWorks (treatment process), Testimonials (patient reviews)
- Pricing (dental service plans), FAQ (dental questions), Team (dental specialists)
- Community, Contact (clinic information), Footer

### Content Localization
All content has been localized to Spanish and adapted for dental clinic context:
- Service descriptions for dental treatments (ortodoncia, implantes, estética dental)
- Professional team featuring dental specialists
- Pricing plans tailored for dental services
- FAQ section with common dental patient questions
- Contact information with clinic-specific details

### Testing Setup
- Tests configured with Vitest and @testing-library/svelte
- Test environment uses jsdom with jest-dom matchers
- Test files follow `*.test.ts` naming convention

### Styling Approach
Uses Tailwind CSS with:
- Custom component variants via tailwind-variants
- Animation utilities from tailwindcss-animate
- Responsive design patterns throughout
- Dark mode support via mode-watcher

### Package Manager
Project uses both npm and Bun - prefer Bun commands when available as they're faster.

## Important Instructions
- Siempre que realizes cambios importantes en el proyecto, actualiza el archivo CLAUDE.md