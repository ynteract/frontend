# ynteract - AI-Powered Sales Coaching Platform

## Overview

ynteract is an AI-powered coaching platform for live, face-to-face sales conversations. The application analyzes human interaction signals—facial expressions, eye movements, body posture, vocal tone, and word choice—to provide real-time behavioral guidance during sales meetings. The primary focus is automotive dealerships, with planned expansion into healthcare, consulting, and education.

The platform delivers subtle, real-time alerts during conversations (e.g., "customer leaned back, disengaged") and provides post-meeting performance replays showing exact moments when customer reactions shifted. This transforms abstract coaching into specific, teachable behaviors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React with TypeScript for type safety and component-based architecture
- Vite as the build tool for fast development and optimized production builds
- Wouter for lightweight client-side routing (home, about, solutions, how-it-works, contact pages)

**UI Component System**
- shadcn/ui component library (New York style) with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Dark mode as default theme with deep indigo (`#1B1F3B`) base and electric teal (`#00C9B7`) accents
- Custom color system using HSL with CSS variables for theming flexibility

**Animation & Interactivity**
- Framer Motion for scroll-triggered animations, parallax effects, and micro-interactions
- Embla Carousel for interactive content carousels
- Design philosophy emphasizes futuristic SaaS aesthetic inspired by Stripe, Linear, and Vercel
- Focus on multimodal data visualization: animated charts, waveforms, connection networks, heat maps

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- React Hook Form with Zod resolvers for form validation
- Custom hooks for mobile detection and toast notifications

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Hot module replacement via Vite middleware in development
- RESTful API design (routes prefixed with `/api`)
- Separation of concerns: routes, storage interface, and server setup

**Storage Layer**
- Abstracted storage interface (`IStorage`) with in-memory implementation (`MemStorage`)
- Designed for future database integration
- Current implementation includes user management (CRUD operations)
- UUID generation for entity IDs

**Development Features**
- Request/response logging with timing metrics
- Error handling middleware with proper HTTP status codes
- Environment-based configuration (development vs production)

### Database Schema

**ORM & Migrations**
- Drizzle ORM configured for PostgreSQL dialect
- Schema defined in shared directory for type sharing between client and server
- Migration files generated in `/migrations` directory
- Zod integration for runtime validation via drizzle-zod

**Current Schema**
- Users table with UUID primary keys, username (unique), and password fields
- Schema uses PostgreSQL-specific features (gen_random_uuid())
- Type-safe insert/select operations with TypeScript inference

### Authentication & Authorization

**Current State**
- Basic user schema in place with username/password fields
- Session-based approach configured (connect-pg-simple for PostgreSQL sessions)
- Credentials included in fetch requests for session management
- Query client configured with 401 handling options (returnNull or throw)

**Security Considerations**
- Password storage architecture present (implementation details to be added)
- Session configuration ready for PostgreSQL-backed session store
- CORS and credential handling in API requests

### Design System & Branding

**Color Palette**
- Primary Dark: Deep Indigo `hsl(228 31% 17%)` for backgrounds
- Primary Accent: Electric Teal `hsl(174 100% 39%)` for CTAs and highlights
- Gradient system for smooth teal-to-indigo transitions
- Comprehensive color tokens for cards, popovers, buttons (primary, secondary, muted, accent, destructive)

**Typography**
- Heading font: Space Grotesk (geometric sans-serif)
- Body font: DM Sans or Inter
- Font weights: 700-800 for headers, 400-500 for body
- Google Fonts integration for custom typography

**Layout System**
- Consistent spacing using Tailwind scale (4, 8, 12, 16, 20, 24)
- Responsive breakpoints for mobile, tablet, desktop
- Grid and flexbox layouts for multi-column designs
- Custom border radius tokens (sm: 3px, md: 6px, lg: 9px)

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Accessible component primitives (accordion, dialog, dropdown, popover, tabs, tooltip, etc.)
- **shadcn/ui**: Pre-built components with customizable variants
- **Lucide React**: Icon library for consistent iconography
- **cmdk**: Command palette component for keyboard navigation

### Animation & Interaction
- **Framer Motion**: Advanced animation library for scroll effects and transitions
- **Embla Carousel**: Touch-friendly carousel component
- **Vaul**: Drawer component for mobile interactions

### Form Management
- **React Hook Form**: Performant form handling with minimal re-renders
- **Zod**: Schema validation for forms and API data
- **@hookform/resolvers**: Zod integration with React Hook Form

### Data Fetching
- **TanStack Query**: Server state management, caching, and synchronization
- **Fetch API**: Native browser API for HTTP requests (credentials: "include" for sessions)

### Database & ORM
- **Drizzle ORM**: TypeScript-first ORM with PostgreSQL support
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-kit**: CLI tool for migrations and schema management
- **connect-pg-simple**: PostgreSQL session store for Express

### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast bundler for production server build
- **tsx**: TypeScript execution for development server
- **Replit plugins**: Runtime error overlay, cartographer, dev banner for Replit environment

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with Autoprefixer
- **class-variance-authority**: Type-safe variant management for components
- **clsx & tailwind-merge**: Utility for conditional className concatenation

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation for client-side entities
- **wouter**: Lightweight routing library (alternative to React Router)

### Assets & Images
- Static assets stored in `attached_assets` directory
- Generated images for comparison visualizations and multimodal analysis illustrations
- Configured Vite alias (`@assets`) for asset imports