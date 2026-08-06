# Dual-Mode Personal Portfolio

A comprehensive portfolio website featuring a unique viewing experience between two modes: **Creative (Interactive)** and **Professional (Formal)**.

This project merges high-end visual animations with professional structure to showcase both technical skills and career history.

## 🚀 Tech Stack & Libraries

This portfolio is built using modern web technologies:

* **React 19 + TypeScript + Vite**: Built with modern React architecture, React Router DOM, dynamic data layer, and Vite fast bundler.
* **Tailwind CSS v4**: Styling and responsive design system.
* **HTML5 & CSS3**: Core web layout and custom animations.
* **JavaScript (ES6+)**: Logic for navigation, APIs, and dynamic state management.
* **GitHub REST API**: Auto-syncing live repositories directly to the Projects page with Client-side Caching.
* **GSAP (GreenSock Animation Platform)**: The core engine used for high-performance animations (Creative Mode).
* **GSAP ScrollTrigger**: Used for the "Zoom-through-window" effect and Horizontal Scrolling.
* **Font Awesome & Lucide Icons**: Used for modern vector icons.

## ✨ Key Features

* **Direct Professional Profile Entry**: Launches straight into a clean, modern React-powered formal profile.
* **Mode Switching**: Seamlessly toggle between "Creative" and "Formal" modes from any page via floating switch button.
* **Auto-Sync GitHub Projects**: Projects section automatically fetches and syncs live public repositories from GitHub with pagination.
* **Immersive Intro (Creative)**: Scroll-triggered zoom effect transitioning from a video background.
* **Horizontal Scrolling (Creative)**: A unique layout for Projects and Contact sections.
* **Clean Layout (Formal)**: A structured, easy-to-read React SPA format optimized for recruiters.

## 🌐 How to Deploy (Vercel & GitHub Pages)

### Deploying on Vercel (Recommended)

1. Push all code to your GitHub repository.
2. Go to [Vercel](https://vercel.com) and import your repository.
3. Vercel automatically detects Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy! The included `vercel.json` ensures smooth Client-side SPA routing and static assets.

## 🔧 Local Installation

To run this project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/AuDuongTai27/AuDuongTai27.github.io.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

## 🏆 Project Source & Credits

This project integrates two distinct open-source designs to create a complete personal brand ecosystem:

### 1. The Professional Mode (Formal)
* **Source:** [DoNguyenAnhTuan](https://github.com/DoNguyenAnhTuan/AnhTuan-Portfolio)
* **Description:** This section utilizes a clean, minimal, and structured layout. It is designed to function as a digital Resume/CV, allowing recruiters to quickly access education, work experience, and certifications.
* **Note:** The original formal layout by **DoNguyenAnhTuan** has been refactored and converted into **React + TypeScript + Tailwind CSS** with modular component structure, routes, and auto-syncing GitHub API integration by **Au Duong Tai**.

### 2. The Creative Mode (Interactive)
* **Source:** [Taliqa123/3d-Animated-Portfolio-Website](https://github.com/Taliqa123/3d-Animated-Portfolio-Website)
* **Description:** This section powers the interactive experience. It features advanced GSAP animations, horizontal scrolling, and cinematic visual effects to demonstrate frontend development skills and creativity.

---
Integrated, customized, and enhanced by **Au Duong Tai**.

Try my portfolio here: https://auduongtai27.github.io/
