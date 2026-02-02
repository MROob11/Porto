# 🚀 Modern Portfolio Website

A stunning, high-performance portfolio website built with Next.js 14, featuring smooth animations, music player, and responsive design.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Bundle Size](https://img.shields.io/badge/bundle-215kB-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## ✨ Features

- **🎨 Stunning Animations** - GSAP & Framer Motion powered smooth transitions
- **🎵 Music Player** - Fullscreen music player with particle effects
- **📱 Fully Responsive** - Beautiful on mobile, tablet, and desktop
- **⚡ Lightning Fast** - 215kB bundle, optimized for performance
- **🎯 SEO Optimized** - Meta tags, semantic HTML, great Lighthouse scores
- **🌙 Modern Design** - Glassmorphism, gradients, and premium aesthetics

## 🛠️ Tech Stack

### Core

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### Animation Libraries

- **GSAP** - Professional-grade animations
- **Framer Motion** - React animation library
- **Lenis** - Smooth scroll

### Performance

- **Next.js Image Optimization** - Automatic image optimization
- **Bundle Size: 215kB** - Highly optimized production build

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Clone & Install

\`\`\`bash

# Clone repository

git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Install dependencies

npm install

# Run development server

npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO_NAME)

**Or manually:**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! (zero configuration needed)

### Deploy to Netlify

\`\`\`bash

# Build for production

npm run build

# Deploy to Netlify

npm install -g netlify-cli
netlify deploy --prod
\`\`\`

### Deploy to Other Platforms

\`\`\`bash

# Build production bundle

npm run build

# Start production server (if self-hosting)

npm start
\`\`\`

## 📁 Project Structure

\`\`\`
Porto/
├── public/
│ ├── images/ # Image assets
│ ├── documents/ # PDF files
│ ├── music/ # Audio files & covers
│ └── tech-logos/ # Technology logos
├── src/
│ ├── app/ # Next.js App Router
│ ├── components/
│ │ ├── features/ # Feature components (Clean Architecture)
│ │ │ ├── hero/
│ │ │ ├── about/
│ │ │ ├── music/
│ │ │ ├── journey/
│ │ │ ├── tech/
│ │ │ └── contact/
│ │ └── ui/ # Reusable UI components
│ ├── data/ # Static data & configuration
│ ├── styles/ # Global styles
│ └── types/ # TypeScript type definitions
└── package.json
\`\`\`

## 🎨 Customization

### Update Personal Information

1. **Hero Section:** Edit `src/components/features/hero/HeroSequence.tsx`
2. **About Section:** Edit `src/components/features/about/AboutSection.tsx`
3. **Music Section:** Add songs to `src/data/songs.ts`
4. **Tech Stack:** Update `src/components/features/tech/TechStackSection.tsx`
5. **Journey/Projects:** Edit `src/components/features/journey/JourneySection.tsx`

### Add Your Music

Edit ` src/data/songs.ts`:

\`\`\`typescript
export const songs: Song[] = [
{
title: 'Your Song Title',
artist: 'Your Artist Name',
cover: '/music/foto/your-cover.jpg',
audio: '/music/music/your-song.mp3',
},
// Add more songs...
];
\`\`\`

### Update Colors

Edit `tailwind.config.ts` to customize the color scheme:

\`\`\`typescript
colors: {
primary: {
teal: '#14B8A6',
cyan: '#06B6D4',
// ... your colors
}
}
\`\`\`

## 📊 Performance

- **Bundle Size:** 215kB (gzipped ~60-70kB)
- **First Load JS:** 215kB
- **Lighthouse Score:** ~90+ Performance

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Mukhtar Fadhlurrohman (Arthur)**

- Portfolio: [Your deployed URL]
- GitHub: [@MROob11](https://github.com/MROob11)
- Email: [mukhtarfadhlurrohman111206@gmail.com]

---

⭐ **If you find this project helpful, please consider giving it a star!**
