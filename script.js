/**
 * SIKDER RAKIBUL ISLAM — HIGH-END CINEMATIC PORTFOLIO ENGINE
 * Features:
 * - Sketch-accurate "My work" Section with Videos & Thumbnail Tabs (6 rounded cards per view)
 * - Lenis Smooth Inertia Scrolling
 * - GSAP Motion & ScrollTrigger
 * - 3D Perspective Tilt Parallax
 * - Custom Magnetic Cursor
 * - Web Audio Synthesized UI Feedback
 * - Interactive Cinema Theater & Art Lightbox Modal
 */

(function () {
  "use strict";

  /* ==========================================================================
     1. WORK DATA REPOSITORY (VIDEOS & THUMBNAILS - 6 ITEMS EACH)
     ========================================================================== */
  const portfolioData = {
    videos: [
      {
        id: "video-voyager-1",
        number: "01",
        title: "Voyager 1: Beyond Everything",
        category: "Documentary · Motion Graphics",
        duration: "18:42",
        resolution: "4K DCI",
        description:
          "An interstellar documentary exploring humanity's farthest artificial emissary. Crafted with rhythmic timeline pacing, space telemetry HUDs, archival space restoration, and custom typography.",
        role: "Lead Video Editor, Motion Graphics Artist & Narrative Sequencing",
        tools: ["Premiere Pro", "After Effects", "Photoshop"],
        image: "assets/design/voyager-thumbnail-2.webp",
        videoUrl: "https://www.youtube.com/watch?v=mZSs4lW9-n8"
      },
      {
        id: "video-uttar-pradesh",
        number: "02",
        title: "Uttar Pradesh: Governance & Reality",
        category: "Documentary · Visual Journalism",
        duration: "14:15",
        resolution: "4K UHD",
        description:
          "A fast-paced, investigative documentary exploring administration, infrastructure development, and policy realities in Uttar Pradesh with cinematic tension and sharp editorial cutting.",
        role: "Timeline Assembly, Editorial Pacing & Archival Curation",
        tools: ["Premiere Pro", "After Effects", "Photoshop"],
        image: "assets/design/uttar-pradesh-thumbnail.webp",
        videoUrl: "https://www.youtube.com/watch?v=Ukf5jY53J3Y"
      },
      {
        id: "video-india-needs-jobs",
        number: "03",
        title: "India Needs Jobs: Economic Dilemma",
        category: "Research Documentary · Data Motion",
        duration: "12:30",
        resolution: "4K UHD",
        description:
          "A data-backed analytical documentary breaking down national employment data, demographic challenges, and economic systems with custom animated charts and dynamic text callouts.",
        role: "Video Editing, Data Visualization & Motion Infographics",
        tools: ["Premiere Pro", "After Effects", "Photoshop"],
        image: "assets/design/india-needs-jobs-thumbnail.webp",
        videoUrl: "https://www.youtube.com/watch?v=wc0twYCiIvw"
      },
      {
        id: "video-voyager-envoy",
        number: "04",
        title: "Voyager 1: Farthest Human Object",
        category: "Space Science · Archival Cut",
        duration: "09:50",
        resolution: "4K DCI",
        description:
          "A visual exploration into deep space telemetry, radio signals across billions of kilometers, and the engineering behind humanity's immortal probe.",
        role: "Visual Sequencing, Timeline Pacing & Motion Grading",
        tools: ["Premiere Pro", "After Effects"],
        image: "assets/design/voyager-thumbnail-1.webp",
        videoUrl: "https://www.youtube.com/watch?v=mZSs4lW9-n8"
      },
      {
        id: "video-interstellar-drift",
        number: "05",
        title: "25.9 Billion KM: Interstellar Drift",
        category: "Motion Graphics · Soundscape",
        duration: "07:20",
        resolution: "4K DCI",
        description:
          "An atmospheric exploration of interstellar silence, speed, and cosmic horizons featuring custom UI coordinates, screen telemetry, and audio wave design.",
        role: "Motion Graphics, UI Telemetry & Sound Design",
        tools: ["After Effects", "Premiere Pro", "Photoshop"],
        image: "assets/design/voyager-thumbnail-3.webp",
        videoUrl: "https://www.youtube.com/watch?v=mZSs4lW9-n8"
      },
      {
        id: "video-showreel-2026",
        number: "06",
        title: "Editing & Motion Showreel 2026",
        category: "Commercial & Documentary Reel",
        duration: "02:15",
        resolution: "4K DCI",
        description:
          "A fast-cut compilation demonstrating dynamic cut rhythms, kinetic typography, motion tracking, and color grading across selected documentary projects.",
        role: "Creative Direction, Editing & Sound Design",
        tools: ["Premiere Pro", "After Effects", "Photoshop", "Illustrator"],
        image: "assets/design/voyager-thumbnail-2.webp",
        videoUrl: "https://www.youtube.com/watch?v=mZSs4lW9-n8"
      }
    ],

    thumbnails: [
      {
        id: "thumb-voyager-2",
        number: "01",
        title: "Beyond Everything",
        subtitle: "Voyager 1 Primary Artwork",
        category: "Key Visual · YouTube CTR Design",
        specs: "High Contrast · Visual Depth",
        description:
          "Designed to evoke deep existential awe. Features hyper-focused lighting on the spacecraft, cinematic cosmic dust, and typographic hierarchy calibrated for high click-through rate.",
        tools: ["Photoshop", "Camera Raw"],
        image: "assets/design/voyager-thumbnail-2.webp"
      },
      {
        id: "thumb-voyager-1",
        number: "02",
        title: "Farthest Human Object",
        subtitle: "Voyager 1 Documentary Concept",
        category: "Graphic Design · Space Documentary",
        specs: "Bold Typographic Hook · 1080p",
        description:
          "Emphasizes scale and curiosity. High-impact text placement tested for mobile readability in YouTube recommendation feeds.",
        tools: ["Photoshop", "Illustrator"],
        image: "assets/design/voyager-thumbnail-1.webp"
      },
      {
        id: "thumb-voyager-3",
        number: "03",
        title: "25,902,068,370 km Away",
        subtitle: "Telemetry & Data Thumbnail",
        category: "Data Infographic · Thumbnail Art",
        specs: "Exact Metric Hook · Neon UI",
        description:
          "A data-driven thumbnail featuring precise numeric coordinates and distance telemetry to stimulate instant curiosity and technical legitimacy.",
        tools: ["Photoshop", "After Effects"],
        image: "assets/design/voyager-thumbnail-3.webp"
      },
      {
        id: "thumb-up",
        number: "04",
        title: "Reality of Yogi",
        subtitle: "Uttar Pradesh Governance Film",
        category: "Documentary Cover · Editorial Art",
        specs: "Dramatic Portrait Grade · High CTR",
        description:
          "Documentary portrait grading with high micro-contrast, expressive facial contours, and provocative editorial question framing.",
        tools: ["Photoshop", "Lightroom"],
        image: "assets/design/uttar-pradesh-thumbnail.webp"
      },
      {
        id: "thumb-jobs",
        number: "05",
        title: "Unemployment Crisis",
        subtitle: "India Needs Jobs Investigation",
        category: "Analytical Thumbnail · Visual Hook",
        specs: "Crowd Composition · Yellow Accents",
        description:
          "Composed with emotional tension using color-separated yellow highlights to isolate the central economic struggle and guide viewer attention.",
        tools: ["Photoshop", "Illustrator"],
        image: "assets/design/india-needs-jobs-thumbnail.webp"
      },
      {
        id: "thumb-voyager-alt",
        number: "06",
        title: "Deep Space Odyssey",
        subtitle: "Interstellar Journey Poster",
        category: "Cinematic Keyframe · Poster Art",
        specs: "Fine Grain · Film Grading",
        description:
          "Minimalist cosmic composition focusing on negative space, celestial lighting, and the solitude of interstellar flight.",
        tools: ["Photoshop", "Illustrator"],
        image: "assets/design/voyager-thumbnail-1.webp"
      }
    ]
  };

  /* Active Work Tab State */
  let currentWorkTab = "videos";

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
     2. LENIS SMOOTH SCROLL INITIALIZATION
     ========================================================================== */
  let lenis = null;
  function initLenis() {
    if (typeof Lenis !== "undefined") {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      if (typeof ScrollTrigger !== "undefined") {
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }
    }
  }

  /* ==========================================================================
     3. LIVE IST TIMECODE CLOCK
     ========================================================================== */
  function initLiveClock() {
    const clockEl = document.getElementById("live-time");
    if (!clockEl) return;

    function update() {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      const now = new Date();
      clockEl.textContent = new Intl.DateTimeFormat("en-US", options).format(now);
    }
    update();
    setInterval(update, 1000);
  }

  /* ==========================================================================
     4. SYNTHESIZED WEB AUDIO UI FEEDBACK
     ========================================================================== */
  const audioUI = {
    enabled: false,
    ctx: null,

    init() {
      const toggle = document.getElementById("sound-toggle");
      if (!toggle) return;

      toggle.addEventListener("click", () => {
        this.enabled = !this.enabled;
        toggle.classList.toggle("is-active", this.enabled);
        const label = toggle.querySelector(".sound-label");
        if (label) {
          label.textContent = this.enabled ? "AUDIO ON" : "AUDIO OFF";
        }

        if (this.enabled) {
          if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) this.ctx = new AudioContext();
          }
          if (this.ctx && this.ctx.state === "suspended") {
            this.ctx.resume();
          }
          this.playBeep(650, 0.08, "sine");
        }
      });
    },

    playBeep(freq = 440, duration = 0.05, type = "sine") {
      if (!this.enabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (err) {
        // Silent fail if audio policy blocked
      }
    },

    playClick() {
      this.playBeep(880, 0.04, "triangle");
    },

    playHover() {
      this.playBeep(340, 0.03, "sine");
    }
  };

  /* ==========================================================================
     5. CUSTOM MAGNETIC CURSOR & INTERACTIONS
     ========================================================================== */
  function initCustomCursor() {
    const dot = document.getElementById("cursor-dot");
    const follower = document.getElementById("cursor-follower");
    const cursorText = document.getElementById("cursor-text");

    if (!dot || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let isMoving = false;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      if (!isMoving) {
        isMoving = true;
        renderFollower();
      }
    });

    function renderFollower() {
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;

      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;

      if (Math.abs(mouseX - followerX) > 0.1 || Math.abs(mouseY - followerY) > 0.1) {
        requestAnimationFrame(renderFollower);
      } else {
        isMoving = false;
      }
    }

    document.addEventListener("mouseover", (e) => {
      const target = e.target.closest("a, button, [data-cursor], .sketch-card, .featured-card");
      if (!target) {
        follower.classList.remove("is-hovering", "is-badge");
        if (cursorText) cursorText.textContent = "";
        return;
      }

      const customBadge = target.getAttribute("data-cursor");
      if (customBadge) {
        follower.classList.add("is-badge");
        if (cursorText) cursorText.textContent = customBadge;
      } else {
        follower.classList.add("is-hovering");
      }

      audioUI.playHover();
    });

    document.addEventListener("mouseout", (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      if (target) {
        follower.classList.remove("is-hovering", "is-badge");
        if (cursorText) cursorText.textContent = "";
      }
    });

    // Magnetic Button Effect
    function bindMagnetics() {
      const magneticItems = document.querySelectorAll(".magnetic");
      magneticItems.forEach((btn) => {
        if (btn._hasMagnetic) return;
        btn._hasMagnetic = true;

        btn.addEventListener("mousemove", (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          btn.style.transform = `translate3d(${x * 0.28}px, ${y * 0.28}px, 0)`;
        });

        btn.addEventListener("mouseleave", () => {
          btn.style.transform = "translate3d(0px, 0px, 0)";
        });

        btn.addEventListener("click", () => {
          audioUI.playClick();
        });
      });
    }
    bindMagnetics();
    window._bindMagnetics = bindMagnetics;
  }

  /* ==========================================================================
     6. 3D INTERACTIVE TILT EFFECT
     ========================================================================== */
  function init3DTilt() {
    const tiltCards = document.querySelectorAll("[data-tilt]");
    tiltCards.forEach((card) => {
      if (card._hasTilt) return;
      card._hasTilt = true;

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        const rotateX = -deltaY * 7;
        const rotateY = deltaX * 7;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      });
    });
  }

  /* ==========================================================================
     7. SKETCH-ACCURATE "MY WORK" RENDERER (VIDEOS & THUMBNAIL)
     ========================================================================== */
  function renderSketchWorkGrid(tab = "videos") {
    const grid = document.getElementById("sketch-work-grid");
    if (!grid) return;

    grid.classList.add("is-transitioning");

    setTimeout(() => {
      if (tab === "videos") {
        grid.innerHTML = portfolioData.videos
          .map((video) => `
          <article class="sketch-card" data-tilt data-play-video="${escapeHTML(video.id)}" data-cursor="PLAY">
            <div class="sketch-card-visual">
              <img class="sketch-card-img" src="${escapeHTML(video.image)}" alt="${escapeHTML(video.title)} Video Preview" loading="lazy">
              <div class="sketch-card-overlay"></div>
              
              <div class="sketch-card-badges">
                <span class="sketch-badge-num">${escapeHTML(video.number)} / 06</span>
                <span class="sketch-badge-tag">${escapeHTML(video.duration)} · ${escapeHTML(video.resolution)}</span>
              </div>

              <div class="sketch-card-play" aria-label="Play video">▶</div>
            </div>

            <div class="sketch-card-body">
              <span class="sketch-card-category">${escapeHTML(video.category)}</span>
              <h3 class="sketch-card-title">${escapeHTML(video.title)}</h3>
              <p class="sketch-card-desc">${escapeHTML(video.description)}</p>

              <div class="sketch-card-footer">
                <div class="sketch-card-tools">
                  ${video.tools.map((t) => `<span class="sketch-tool-tag">${escapeHTML(t)}</span>`).join("")}
                </div>
                <button class="button button--nav" type="button" data-play-video="${escapeHTML(video.id)}">
                  <span>Watch ▶</span>
                </button>
              </div>
            </div>
          </article>
        `)
          .join("");
      } else {
        // Thumbnail Tab Render
        grid.innerHTML = portfolioData.thumbnails
          .map((thumb) => `
          <article class="sketch-card" data-tilt data-view-thumb="${escapeHTML(thumb.id)}" data-cursor="ZOOM">
            <div class="sketch-card-visual">
              <img class="sketch-card-img" src="${escapeHTML(thumb.image)}" alt="${escapeHTML(thumb.title)} Thumbnail Artwork" loading="lazy">
              <div class="sketch-card-overlay"></div>
              
              <div class="sketch-card-badges">
                <span class="sketch-badge-num">${escapeHTML(thumb.number)} / 06</span>
                <span class="sketch-badge-tag">${escapeHTML(thumb.specs)}</span>
              </div>

              <div class="sketch-card-zoom">
                <span>INSPECT ARTWORK ↗</span>
              </div>
            </div>

            <div class="sketch-card-body">
              <span class="sketch-card-category">${escapeHTML(thumb.category)}</span>
              <h3 class="sketch-card-title">${escapeHTML(thumb.title)}</h3>
              <p class="sketch-card-desc">${escapeHTML(thumb.description)}</p>

              <div class="sketch-card-footer">
                <div class="sketch-card-tools">
                  ${thumb.tools.map((t) => `<span class="sketch-tool-tag">${escapeHTML(t)}</span>`).join("")}
                </div>
                <button class="button button--nav" type="button" data-view-thumb="${escapeHTML(thumb.id)}">
                  <span>Zoom ✦</span>
                </button>
              </div>
            </div>
          </article>
        `)
          .join("");
      }

      grid.classList.remove("is-transitioning");
      init3DTilt();
      if (window._bindMagnetics) window._bindMagnetics();

      // GSAP entrance if available
      if (typeof gsap !== "undefined") {
        gsap.from(grid.querySelectorAll(".sketch-card"), {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out"
        });
      }
    }, 180);
  }

  /* Setup Tabs (Videos vs Thumbnail) matching user sketch */
  function initWorkTabs() {
    const tabVideos = document.getElementById("tab-videos");
    const tabThumbnails = document.getElementById("tab-thumbnails");

    if (!tabVideos || !tabThumbnails) return;

    tabVideos.addEventListener("click", () => {
      if (currentWorkTab === "videos") return;
      currentWorkTab = "videos";

      tabVideos.classList.add("active");
      tabVideos.setAttribute("aria-selected", "true");

      tabThumbnails.classList.remove("active");
      tabThumbnails.setAttribute("aria-selected", "false");

      renderSketchWorkGrid("videos");
      audioUI.playClick();
    });

    tabThumbnails.addEventListener("click", () => {
      if (currentWorkTab === "thumbnails") return;
      currentWorkTab = "thumbnails";

      tabThumbnails.classList.add("active");
      tabThumbnails.setAttribute("aria-selected", "true");

      tabVideos.classList.remove("active");
      tabVideos.setAttribute("aria-selected", "false");

      renderSketchWorkGrid("thumbnails");
      audioUI.playClick();
    });
  }

  /* ==========================================================================
     8. CINEMA THEATER & ARTWORK MODAL ENGINE
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

      // Delegate global project/video triggers
      document.addEventListener("click", (e) => {
        // Video trigger
        const videoTrigger = e.target.closest("[data-play-video]");
        if (videoTrigger) {
          e.preventDefault();
          const vId = videoTrigger.getAttribute("data-play-video");
          const video = portfolioData.videos.find((v) => v.id === vId);
          if (video) this.openVideo(video, true);
          return;
        }

        // Thumbnail inspect trigger
        const thumbTrigger = e.target.closest("[data-view-thumb]");
        if (thumbTrigger) {
          e.preventDefault();
          const tId = thumbTrigger.getAttribute("data-view-thumb");
          const thumb = portfolioData.thumbnails.find((t) => t.id === tId);
          if (thumb) this.openThumb(thumb);
          return;
        }

        // Featured section play trigger
        const featTrigger = e.target.closest("[data-play-project]");
        if (featTrigger) {
          e.preventDefault();
          const pId = featTrigger.getAttribute("data-play-project");
          const video = portfolioData.videos.find((v) => v.id.includes(pId)) || portfolioData.videos[0];
          if (video) this.openVideo(video, true);
          return;
        }
      });
    },

    openVideo(video, autoPlay = true) {
      this.currentProject = video;

      document.getElementById("dialog-project-number").textContent = `VIDEO // ${video.number}`;
      document.getElementById("dialog-project-category").textContent = video.category.toUpperCase();
      document.getElementById("dialog-project-title").textContent = video.title;
      document.getElementById("dialog-project-desc").textContent = video.description;
      document.getElementById("dialog-project-role").textContent = video.role;

      const toolsContainer = document.getElementById("dialog-project-tools");
      toolsContainer.innerHTML = video.tools.map((t) => `<span class="tool-tag">${escapeHTML(t)}</span>`).join("");

      const extBtn = document.getElementById("dialog-external-btn");
      extBtn.href = video.videoUrl;
      const extText = document.getElementById("dialog-external-text");
      if (extText) extText.textContent = "Watch on YouTube ↗";
      const extIcon = document.getElementById("dialog-external-icon");
      if (extIcon) {
        extIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
      }

      const posterImg = document.getElementById("dialog-poster");
      posterImg.src = video.image;
      posterImg.alt = video.title;

      const stripWrap = document.getElementById("dialog-thumbnails-strip");
      if (stripWrap) stripWrap.hidden = true;

      const playTrigger = document.getElementById("dialog-theater-play");
      if (playTrigger) playTrigger.hidden = false;

      const iframeBox = document.getElementById("dialog-iframe-container");
      iframeBox.innerHTML = "";
      iframeBox.hidden = true;
      document.getElementById("dialog-poster-wrapper").hidden = false;

      this.dialog.showModal();
      document.body.classList.add("modal-open");
      if (lenis) lenis.stop();

      audioUI.playClick();

      if (autoPlay) {
        this.startPlayback();
      }
    },

    openThumb(thumb) {
      this.currentProject = thumb;

      document.getElementById("dialog-project-number").textContent = `THUMBNAIL // ${thumb.number}`;
      document.getElementById("dialog-project-category").textContent = thumb.category.toUpperCase();
      document.getElementById("dialog-project-title").textContent = thumb.title;
      document.getElementById("dialog-project-desc").textContent = thumb.description;
      document.getElementById("dialog-project-role").textContent = thumb.specs;

      const toolsContainer = document.getElementById("dialog-project-tools");
      toolsContainer.innerHTML = thumb.tools.map((t) => `<span class="tool-tag">${escapeHTML(t)}</span>`).join("");

      const extBtn = document.getElementById("dialog-external-btn");
      extBtn.href = thumb.image;
      extBtn.target = "_blank";
      const extText = document.getElementById("dialog-external-text");
      if (extText) extText.textContent = "View High-Res Image ↗";
      const extIcon = document.getElementById("dialog-external-icon");
      if (extIcon) {
        extIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>`;
      }

      const posterImg = document.getElementById("dialog-poster");
      posterImg.src = thumb.image;
      posterImg.alt = thumb.title;

      const stripWrap = document.getElementById("dialog-thumbnails-strip");
      if (stripWrap) stripWrap.hidden = true;

      // In thumbnail inspect mode, hide the video play button
      const playTrigger = document.getElementById("dialog-theater-play");
      if (playTrigger) playTrigger.hidden = true;

      const iframeBox = document.getElementById("dialog-iframe-container");
      iframeBox.innerHTML = "";
      iframeBox.hidden = true;
      document.getElementById("dialog-poster-wrapper").hidden = false;

      this.dialog.showModal();
      document.body.classList.add("modal-open");
      if (lenis) lenis.stop();

      audioUI.playClick();
    },

    startPlayback() {
      if (!this.currentProject || !this.currentProject.videoUrl) return;
      const videoId = getYouTubeId(this.currentProject.videoUrl);
      if (!videoId) return;

      const iframeBox = document.getElementById("dialog-iframe-container");
      iframeBox.innerHTML = `
        <iframe 
          src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&modestbranding=1" 
          title="${escapeHTML(this.currentProject.title)}" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      `;
      iframeBox.hidden = false;
      document.getElementById("dialog-poster-wrapper").hidden = true;
    },

    close() {
      if (!this.dialog) return;
      const iframeBox = document.getElementById("dialog-iframe-container");
      iframeBox.innerHTML = "";
      iframeBox.hidden = true;

      this.dialog.close();
      document.body.classList.remove("modal-open");
      if (lenis) lenis.start();

      audioUI.playClick();
    }
  };

  /* ==========================================================================
     9. HEADER & NAVIGATION SCROLL STATE & MOBILE MENU
     ========================================================================== */
  function initHeader() {
    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 40) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      },
      { passive: true }
    );

    if (menuToggle && mobileNav) {
      menuToggle.addEventListener("click", () => {
        const isOpen = mobileNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.classList.toggle("is-active", isOpen);
        audioUI.playClick();
      });

      mobileNav.querySelectorAll(".mobile-nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          mobileNav.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
          menuToggle.classList.remove("is-active");
        });
      });
    }

    const backToTop = document.getElementById("back-to-top");
    if (backToTop) {
      backToTop.addEventListener("click", () => {
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.5 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        audioUI.playClick();
      });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#" || targetId === "") return;
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          if (lenis) {
            lenis.scrollTo(targetElem, { offset: -70 });
          } else {
            targetElem.scrollIntoView({ behavior: "smooth" });
          }
          audioUI.playClick();
        }
      });
    });
  }

  /* ==========================================================================
     10. GSAP ENTRANCE & SCROLL ANIMATIONS
     ========================================================================== */
  function initGSAPAnimations() {
    if (typeof gsap === "undefined") return;

    const heroItems = document.querySelectorAll(".hero-content .reveal-item");
    if (heroItems.length) {
      gsap.from(heroItems, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });
    }

    const heroVisual = document.querySelector(".hero-visual.reveal-item");
    if (heroVisual) {
      gsap.from(heroVisual, {
        opacity: 0,
        scale: 0.94,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.4
      });
    }

    if (typeof ScrollTrigger !== "undefined") {
      gsap.utils.toArray(".section").forEach((section) => {
        gsap.from(section.querySelectorAll(".section-badge-row, .section-title, .section-intro, .work-top-bar"), {
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          y: 35,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out"
        });
      });

      const featuredCard = document.querySelector(".featured-card");
      if (featuredCard) {
        gsap.from(featuredCard, {
          scrollTrigger: {
            trigger: featuredCard,
            start: "top 80%"
          },
          opacity: 0,
          y: 50,
          duration: 1.3,
          ease: "power3.out"
        });
      }

      const skillCards = document.querySelectorAll(".skill-card");
      if (skillCards.length) {
        gsap.from(skillCards, {
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%"
          },
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out"
        });
      }

      const processCards = document.querySelectorAll(".process-card");
      if (processCards.length) {
        gsap.from(processCards, {
          scrollTrigger: {
            trigger: ".process-timeline",
            start: "top 80%"
          },
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out"
        });
      }
    }
  }

  /* ==========================================================================
     BOOTSTRAP ON DOM READY
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    initLenis();
    initLiveClock();
    audioUI.init();
    initCustomCursor();
    initHeader();
    renderSketchWorkGrid("videos");
    initWorkTabs();
    cinemaDialog.init();
    init3DTilt();
    initGSAPAnimations();
  });
})();
