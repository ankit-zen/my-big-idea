# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm start` - Start production server

## Architecture Overview

This is a Next.js 15 application with Supabase authentication and shadcn/ui components. Key architectural patterns:

### Authentication System
- Supabase-based auth with server and client-side utilities in `src/utils/supabase/`
- Server actions for auth operations in `src/actions/auth.ts`
- Auth pages grouped under `src/app/(auth-pages)/`
- Protected routes under `src/app/protected/`

### Component Structure
- shadcn/ui components in `src/components/ui/` - these are auto-generated, edit with caution
- Custom components in `src/components/`
- Path aliases configured: `@/` maps to `src/`

### Styling & UI
- Tailwind CSS with shadcn/ui "new-york" style variant
- CSS variables for theming enabled
- Next.js themes provider for dark/light mode
- Global styles in `src/app/globals.css`

### Key Dependencies
- Next.js 15 with App Router
- Supabase for backend/auth
- shadcn/ui + Radix UI components
- React Hook Form + Zod for forms
- Tailwind CSS for styling
- Lucide icons

## Important Notes

- Environment variables required: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Auth flow uses email confirmation - check `src/utils/supabase/check-env-vars.ts`
- Components use forwardRef pattern typical of shadcn/ui
- TypeScript strict mode enabled