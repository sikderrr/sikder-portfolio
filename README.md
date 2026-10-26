# Sikder Rakibul Islam — High-End Cinematic Portfolio

An award-winning, agency-grade creative portfolio crafted for **Sikder Rakibul Islam** (Video Editor, Motion Graphics Artist & Visual Storyteller).

Built with zero-build pure modern web standards (HTML5, modern CSS3 with custom properties, and vanilla ES6+ JavaScript), powered by **Lenis smooth scrolling** and **GSAP animation suite**.

---

## ✨ Features & Architecture

- **Cinematic Dark Luxury Aesthetic**: Deep obsidian obsidian (`#07070a`) palette, subtle radial light leaks, and glassmorphic micro-borders.
- **Lenis Inertia Smooth Scroll**: Silky 60fps/120fps physics-based momentum scrolling synchronized directly with GSAP ScrollTrigger.
- **Tactile 3D Tilt Parallax**: Interactive mouse-tracking perspective tilt across portrait frames, featured cinema displays, and skill cards (`[data-tilt]`).
- **Interactive Magnetic Cursor**: Fluid dual-ring mouse follower with dynamic badge morphing (`EXPLORE`, `PLAY`, `VIEW`) and magnetic button pull.
- **Synthesized Web Audio UI**: Built-in sound effects generated via native Web Audio API oscillators (no bulky audio assets) with an animated header equalizer toggle.
- **Live IST Timecode Badge**: Real-time Indian Standard Time (IST) clock with precision timecode readout.
- **Interactive Cinema Theater Modal**: On-demand, zero-lag YouTube player with multiple thumbnail version switchers (e.g. testing different thumbnail variants for *Voyager 1*).
- **Interactive Project Filtering**: Filter smoothly between Documentary and Motion & Data projects.
- **Zero Build Step Required**: Double-click `index.html` to run locally in any web browser, or deploy directly to **GitHub Pages**, **Vercel**, or **Netlify**.

---

## 🚀 How to Run Locally

1. Simply double-click `index.html` to open it in your default web browser (Edge, Chrome, Firefox, Safari).
2. Or use any local static server of your choice.

---

## 🎬 Editing Projects & Assets

To update or add new projects, edit `portfolioData.projects` in `script.js`:

```javascript
{
  id: "your-project-id",
  number: "04",
  title: "Your Project Title",
  category: "Documentary · Motion Graphics",
  filter: ["all", "documentary"],
  description: "Description of your documentary or edit...",
  role: "Lead Editor & Motion Designer",
  tools: ["Premiere Pro", "After Effects"],
  thumbnails: [
    { title: "Thumbnail A", image: "assets/design/your-thumb.webp", alt: "Preview" }
  ],
  videoUrl: "https://www.youtube.com/watch?v=..."
}
```

---

## 🌐 Deploy to GitHub Pages

1. Commit and push this directory to a GitHub repository.
2. In your repo, go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, set Branch to `main` (or `master`) and folder to `/ (root)`.
4. Click **Save**. Your portfolio is live immediately!
