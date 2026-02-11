# BookWebsite 📚

A modern, dual-mode e-book reader built with React and Node.js. Designed for language learners and immersive reading experiences.

## ✨ Key Features

- **Dual Reading Modes**:
  - **Bilingual Mode**: Displays original text and translation side-by-side. Best for understanding context. (Note: Annotations are disabled in this mode for a clean reading experience).
  - **Translation Only (Pure) Mode**: Focus purely on the translated text. **Annotations (Highlights & Underlines) are exclusively available in this mode.**
- **Smart Annotation System**:
  - Highlights and Underlines support.
  - Annotations are indexed by *rendered paragraph order* to ensure stability even when raw markdown line numbers change.
  - Persistent storage (local & backend).
- **Responsive Design**: Built with Tailwind CSS for a seamless experience on desktop and mobile.
- **Chapter Navigation**: Easy switching between chapters.

## 🛠 Tech Stack

- **Frontend**:
  - React 18
  - Vite
  - Tailwind CSS
  - Zustand (State Management)
  - React Markdown (Rendering)
- **Backend**:
  - Node.js
  - Express
  - File-system based storage (JSON)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zcanic/bookwebsite.git
   cd bookwebsite
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   npm start
   # Server runs on http://localhost:3000
   ```

3. **Setup Frontend** (Open a new terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   # App runs on http://localhost:5173
   ```

## 📖 Usage Guide

1. Open `http://localhost:5173`.
2. Select a book/chapter from the sidebar.
3. Toggle between **Bilingual** and **Translation Only** modes using the top bar.
4. In **Translation Only** mode:
   - Select text to see the annotation toolbar.
   - Click the "Pen" icon to Highlight.
   - Click the "Underline" icon to Underline.
   - Click an existing mark to remove it.

## 🧹 Maintenance

If you encounter issues with old annotations (e.g., from previous versions), you can clear them using the built-in utility:
1. Ensure the frontend server is running.
2. Visit `http://localhost:5173/clear-annotations.html`.
3. Follow the instructions to wipe local storage.

## 📄 License

MIT
