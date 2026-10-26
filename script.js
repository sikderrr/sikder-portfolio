/**
 * SIKDER RAKIBUL ISLAM — PORTFOLIO ENGINE
 * Design Reference: Home-html (Precision Visual Design Component)
 * Features:
 * - Dynamic work filter ('all', 'video', 'thumb')
 * - Responsive cards grid with real artwork
 * - Interactive Video Cinema Theater & Artwork Lightbox Modal
 * - Sticky navigation state
 * - Smooth anchor scrolling
 */

(function () {
  "use strict";

  /* ==========================================================================
     1. WORK DATA REPOSITORY
     ========================================================================== */
  const projects = [
    {
      id: "proj-voyager-1",
      type: "video",
      badge: "Long-form edit",
      title: "Voyager 1: Beyond Everything",
      meta: "Documentary Film · 2026",
      duration: "18:42",
      resolution: "4K DCI",
      category: "DOCUMENTARY · SPACE SCIENCE",
      description:
        "An interstellar documentary exploring humanity's farthest artificial emissary. Crafted with rhythmic timeline pacing, space telemetry HUDs, archival space restoration, and custom typography.",
      role: "Lead Video Editor, Motion Graphics Artist & Narrative Sequencing",
      tools: ["Premiere Pro", "After Effects", "Photoshop"],
      image: "assets/design/voyager-thumbnail-2.webp",
      videoUrl: "https://www.youtube.com/watch?v=mZSs4lW9-n8"
    },
    {
      id: "proj-voyager-thumb-2",
      type: "thumb",
      badge: "Thumbnail · 1280×720",
      title: "Beyond Everything Artwork",
      meta: "YouTube CTR Keyframe · 2026",
      category: "KEY VISUAL ARTWORK",
      description:
        "Designed to evoke deep existential awe. Features hyper-focused lighting on the spacecraft, cinematic cosmic dust, and typographic hierarchy calibrated for high click-through rate.",
      role: "Visual Composition & Matte Painting",
      tools: ["Photoshop", "Camera Raw"],
      image: "assets/design/voyager-thumbnail-2.webp"
    },
    {
      id: "proj-uttar-pradesh",
      type: "video",
      badge: "Long-form edit",
      title: "Uttar Pradesh: Governance & Reality",
      meta: "Visual Journalism · 2026",
      duration: "14:15",
      resolution: "4K UHD",
      category: "INVESTIGATIVE JOURNALISM",
      description:
        "A fast-paced, investigative documentary exploring administration, infrastructure development, and policy realities in Uttar Pradesh with cinematic tension and sharp editorial cutting.",
      role: "Timeline Assembly, Editorial Pacing & Archival Curation",
      tools: ["Premiere Pro", "After Effects", "Photoshop"],
      image: "assets/design/uttar-pradesh-thumbnail.webp",
      videoUrl: "https://www.youtube.com/watch?v=Ukf5jY53J3Y"
    },
    {
      id: "proj-up-thumb",
      type: "thumb",
      badge: "Thumbnail · 1280×720",
      title: "Reality of Yogi",
      meta: "Editorial Cover Design · 2026",
      category: "EDITORIAL PORTRAIT ART",
      description:
        "Documentary portrait grading with high micro-contrast, expressive facial contours, and provocative editorial question framing.",
      role: "Portrait Retouching & Typography",
      tools: ["Photoshop", "Lightroom"],
      image: "assets/design/uttar-pradesh-thumbnail.webp"
    },
    {
      id: "proj-india-needs-jobs",
      type: "video",
      badge: "Long-form edit",
      title: "India Needs Jobs: Economic Dilemma",
      meta: "Research Documentary · 2026",
      duration: "12:30",
      resolution: "4K UHD",
      category: "DATA MOTION DOCUMENTARY",
      description:
        "A data-backed analytical documentary breaking down national employment data, demographic challenges, and economic systems with custom animated charts and dynamic text callouts.",
      role: "Video Editing, Data Visualization & Motion Infographics",
      tools: ["Premiere Pro", "After Effects", "Photoshop"],
      image: "assets/design/india-needs-jobs-thumbnail.webp",
      videoUrl: "https://www.youtube.com/watch?v=wc0twYCiIvw"
    },
    {
      id: "proj-jobs-thumb",
      type: "thumb",
      badge: "Thumbnail · 1280×720",
      title: "Unemployment Crisis",
      meta: "High-CTR Visual Hook · 2026",
      category: "DATA INFOGRAPHIC ART",
      description:
        "Composed with emotional tension using color-separated yellow highlights to isolate the central economic struggle and guide viewer attention.",
      role: "Color Grading & Typographic Hook",
      tools: ["Photoshop", "Illustrator"],
      image: "assets/design/india-needs-jobs-thumbnail.webp"
    },
    {
      id: "proj-voyager-envoy",
      type: "video",
      badge: "Long-form edit",
      title: "Voyager 1: Farthest Human Object",
      meta: "Archival Science Cut · 2026",
      duration: "09:50",
      resolution: "4K DCI",
      category: "SPACE SCIENCE ARCHIVE",
      description:
        "A visual exploration into deep space telemetry, radio signals across billions of kilometers, and the engineering behind humanity's immortal probe.",
      role: "Visual Sequencing, Timeline Pacing & Motion Grading",
      tools: ["Premiere Pro", "After Effects"],
      image: "assets/design/voyager-thumbnail-1.webp",
      videoUrl: "https://www.youtube.com/watch?v=mZSs4lW9-n8"
    },
    {
      id: "proj-voyager-thumb-1",
      type: "thumb",
      badge: "Thumbnail · 1280×720",
      title: "Farthest Human Object",
      meta: "Concept Poster · 2026",
      category: "SPACE DOCUMENTARY POSTER",
      description:
        "Emphasizes scale and curiosity. High-impact text placement tested for mobile readability in YouTube recommendation feeds.",
      role: "Layout Design & Typographic Hierarchy",
      tools: ["Photoshop", "Illustrator"],
      image: "assets/design/voyager-thumbnail-1.webp"
    },
    {
      id: "proj-interstellar-drift",
      type: "video",
      badge: "Motion Graphics",
      title: "25.9 Billion KM: Interstellar Drift",
      meta: "Motion Design & Soundscape · 2026",
      duration: "07:20",
      resolution: "4K DCI",
      category: "MOTION GRAPHICS & SOUND",
      description:
        "An atmospheric exploration of interstellar silence, speed, and cosmic horizons featuring custom UI coordinates, screen telemetry, and audio wave design.",
      role: "Motion Graphics, UI Telemetry & Sound Design",
      tools: ["After Effects", "Premiere Pro", "Photoshop"],
      image: "assets/design/voyager-thumbnail-3.webp",
      videoUrl: "https://www.youtube.com/watch?v=mZSs4lW9-n8"
    },
    {
      id: "proj-voyager-thumb-3",
      type: "thumb",
      badge: "Thumbnail · 1280×720",
      title: "25,902,068,370 km Away",
      meta: "Telemetry & Data Artwork · 2026",
      category: "NUMERIC DATA ARTWORK",
      description:
        "A data-driven thumbnail featuring precise numeric coordinates and distance telemetry to stimulate instant curiosity and technical legitimacy.",
      role: "Telemetry Overlay & Graphic Assembly",
      tools: ["Photoshop", "After Effects"],
      image: "assets/design/voyager-thumbnail-3.webp"
    }
  ];

  /* Active filter state */
  let currentFilter = "all";

  /* Helper to escape HTML characters */
  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }

  /* Extract YouTube ID */
  function getYouTubeId(url) {
    if (!url) return null;
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtu.be")) {
        return parsed.pathname.slice(1);
      }
      return parsed.searchParams.get("v") || null;
    } catch (e) {
      return null;
    }
  }

  /* ==========================================================================
     2. WORK GRID RENDERER & FILTERS
     ========================================================================== */
  function renderWorkGrid(filter = "all") {
    const grid = document.getElementById("work-grid");
    if (!grid) return;

    const filtered = projects.filter((p) => {
      if (filter === "all") return true;
      return p.type === filter;
    });

    grid.innerHTML = filtered
      .map(
        (p) => `
      <article class="card" data-project-id="${escapeHTML(p.id)}">
        <div class="art-frame">
          <img class="art-img" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)}" loading="lazy">
          <span class="card-badge">${escapeHTML(p.badge)}</span>
          ${
            p.type === "video"
              ? `
            <span class="play-badge" aria-label="Play Video">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#F4F3FA" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"></path></svg>
            </span>
          `
              : ""
          }
        </div>
        <div class="card-info">
          <h3 class="card-title">${escapeHTML(p.title)}</h3>
          <span class="card-meta">${escapeHTML(p.meta)}</span>
        </div>
      </article>
    `
      )
      .join("");
  }

  function initFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        if (filter === currentFilter) return;

        currentFilter = filter;
        filterButtons.forEach((b) => {
          const isActive = b === btn;
          b.classList.toggle("active", isActive);
          b.setAttribute("aria-pressed", isActive ? "true" : "false");
        });

        renderWorkGrid(currentFilter);
      });
    });
  }

  /* ==========================================================================
     3. CINEMA THEATER & ARTWORK MODAL ENGINE
     ========================================================================== */
  const cinemaDialog = {
    dialog: null,
    currentProject: null,

    init() {
      this.dialog = document.getElementById("cinema-dialog");
      if (!this.dialog) return;

      this.dialog.querySelectorAll("[data-close-dialog]").forEach((el) => {
        el.addEventListener("click", () => this.close());
      });

      this.dialog.addEventListener("cancel", (e) => {
        e.preventDefault();
        this.close();
      });

      const playBtn = document.getElementById("dialog-theater-play");
      if (playBtn) {
        playBtn.addEventListener("click", () => this.startPlayback());
      }

      // Card click delegation
      document.addEventListener("click", (e) => {
        const card = e.target.closest("[data-project-id]");
        if (card) {
          e.preventDefault();
          const pId = card.getAttribute("data-project-id");
          const project = projects.find((p) => p.id === pId);
          if (project) {
            this.open(project);
          }
        }
      });
    },

    open(project) {
      this.currentProject = project;

      const numEl = document.getElementById("dialog-project-number");
      if (numEl) numEl.textContent = `PROJECT // ${project.type.toUpperCase()}`;

      const catEl = document.getElementById("dialog-project-category");
      if (catEl) catEl.textContent = project.category || "PROJECT";

      const titleEl = document.getElementById("dialog-project-title");
      if (titleEl) titleEl.textContent = project.title;

      const descEl = document.getElementById("dialog-project-desc");
      if (descEl) descEl.textContent = project.description;

      const roleEl = document.getElementById("dialog-project-role");
      if (roleEl) roleEl.textContent = project.role || "Video Editor & Designer";

      const toolsContainer = document.getElementById("dialog-project-tools");
      if (toolsContainer) {
        toolsContainer.innerHTML = project.tools
          .map((t) => `<span class="tool-tag">${escapeHTML(t)}</span>`)
          .join("");
      }

      const posterImg = document.getElementById("dialog-poster");
      if (posterImg) {
        posterImg.src = project.image;
        posterImg.alt = project.title;
      }

      const extBtn = document.getElementById("dialog-external-btn");
      const extText = document.getElementById("dialog-external-text");

      const playTrigger = document.getElementById("dialog-theater-play");
      const iframeBox = document.getElementById("dialog-iframe-container");
      const posterWrapper = document.getElementById("dialog-poster-wrapper");

      iframeBox.innerHTML = "";
      iframeBox.hidden = true;
      posterWrapper.hidden = false;

      if (project.type === "video" && project.videoUrl) {
        if (extBtn) {
          extBtn.href = project.videoUrl;
          extBtn.hidden = false;
        }
        if (extText) extText.textContent = "Watch on YouTube ↗";
        if (playTrigger) playTrigger.hidden = false;
      } else {
        if (extBtn) {
          extBtn.href = project.image;
          extBtn.hidden = false;
        }
        if (extText) extText.textContent = "View High-Res Image ↗";
        if (playTrigger) playTrigger.hidden = true;
      }

      this.dialog.showModal();
      document.body.style.overflow = "hidden";

      if (project.type === "video" && project.videoUrl) {
        this.startPlayback();
      }
    },

    startPlayback() {
      if (!this.currentProject || !this.currentProject.videoUrl) return;
      const videoId = getYouTubeId(this.currentProject.videoUrl);
      if (!videoId) return;

      const iframeBox = document.getElementById("dialog-iframe-container");
      const posterWrapper = document.getElementById("dialog-poster-wrapper");

      iframeBox.innerHTML = `
        <iframe 
          src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&modestbranding=1" 
          title="${escapeHTML(this.currentProject.title)}" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      `;
      iframeBox.hidden = false;
      posterWrapper.hidden = true;
    },

    close() {
      if (!this.dialog) return;
      const iframeBox = document.getElementById("dialog-iframe-container");
      iframeBox.innerHTML = "";
      iframeBox.hidden = true;

      this.dialog.close();
      document.body.style.overflow = "";
    }
  };

  /* ==========================================================================
     4. HEADER SCROLL EFFECT & SMOOTH SCROLLING
     ========================================================================== */
  function initHeader() {
    const header = document.getElementById("header");
    if (!header) return;

    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 20) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      },
      { passive: true }
    );

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#" || targetId === "") return;
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          const headerHeight = header.offsetHeight || 72;
          const targetPos = targetElem.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPos,
            behavior: "smooth"
          });
        }
      });
    });
  }

  /* ==========================================================================
     5. BOOTSTRAP ON DOM READY
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    renderWorkGrid("all");
    initFilters();
    cinemaDialog.init();
  });
})();
