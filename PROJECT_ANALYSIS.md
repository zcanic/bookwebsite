# Project Analysis

## 1. What Does This Project Do?

This is an **AI Translation Reader** web application designed for reading translated technical books. Specifically, it displays a Chinese translation of the book "Embedding Artificial Intelligence into ERP Software: A Conceptual View on Business AI with Examples from SAP S/4HANA" by Siar Sarferaz.

### Key Features:
- **Chapter Navigation**: Browse through 146 translated sections of the book (each covering 3 pages of the original)
- **Bilingual Reading**: Support for different reading modes (original, translation, side-by-side)
- **Annotation System**: Highlight and underline text passages with persistent storage
- **Customizable Reading Experience**:
  - Theme options (light, sepia, dark)
  - Font customization (serif/sans-serif, bold toggle, size adjustment)
  - Responsive design for mobile, tablet, and desktop
- **Progress Tracking**: Visual progress indicator showing reading completion

The book content is stored as markdown files in `backend/data/chapters/` with 146 parts covering pages 1-436 of the original PDF.

## 2. What is the Tech Stack?

### Frontend
- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.1.4
- **Styling**: Tailwind CSS 3.4.1 with PostCSS and Autoprefixer
- **State Management**: Zustand 4.5.0
- **Markdown Rendering**: react-markdown 9.0.1
- **Security**: DOMPurify 3.0.8 (HTML sanitization)
- **Icons**: Lucide React 0.330.0
- **Utilities**: clsx, tailwind-merge

### Backend
- **Runtime**: Node.js with ES Modules
- **Framework**: Express 4.18.2
- **Security**: Helmet 7.1.0
- **CORS**: cors 2.8.5
- **Logging**: Morgan 1.10.0, Winston 3.11.0
- **Environment**: dotenv 16.4.5
- **Dev Tools**: nodemon 3.1.0

### Architecture
- **Pattern**: Separate frontend/backend (not monolithic)
- **API**: RESTful API at `/api/chapters` and `/api/annotations`
- **Data Storage**: File-based (markdown files for chapters, likely JSON for annotations)
- **Deployment**: Backend serves static frontend files from `/public`

## 3. Is This a Next.js Project?

**No, this is NOT a Next.js project.**

### Evidence:
1. **Build Tool**: Uses **Vite** (not Next.js)
   - `vite.config.js` present in frontend
   - Package.json scripts use `vite` commands (`vite`, `vite build`, `vite preview`)

2. **Architecture**: Separate frontend and backend folders
   - `/frontend` - React app with Vite
   - `/backend` - Express.js API server
   - Next.js typically uses a unified structure with `/app` or `/pages` directories

3. **Routing**: Client-side routing (not Next.js file-based routing)
   - No Next.js routing files
   - No `/pages` or `/app` directory structure
   - Uses React components with programmatic navigation

4. **No Next.js Dependencies**:
   - No `next` package in package.json
   - No Next.js configuration files (`next.config.js`)

### Project Type:
This is a **React SPA (Single Page Application)** with a separate **Express.js backend**, using Vite as the modern build tool and development server.
