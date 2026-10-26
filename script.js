/* Keep project copy, video links, thumbnail paths, and tools together for easy editing. */
const portfolio = {
  channel: "https://youtube.com/@sikder_in",
  instagram: "https://www.instagram.com/sikder.in/",
  projects: [
    {
      id: "voyager-1",
      number: "01",
      title: "Voyager 1",
      category: "Documentary · Editing · Motion Graphics",
      description: "A visual journey exploring humanity's farthest spacecraft and its extraordinary journey beyond our solar system.",
      role: "Video editing, motion graphics, and visual storytelling.",
      tools: ["Premiere Pro", "After Effects", "Photoshop"],
      image: "assets/design/voyager-thumbnail-1.webp",
      video: "https://www.youtube.com/watch?v=mZSs4lW9-n8",
      thumbnails: [
        { title: "Farthest Human Object", image: "assets/design/voyager-thumbnail-1.webp", alt: "Farthest Human Object — Voyager 1 thumbnail" },
        { title: "Beyond Everything", image: "assets/design/voyager-thumbnail-2.webp", alt: "Beyond Everything — Voyager 1 thumbnail" },
        { title: "25,902,068,370 km Away", image: "assets/design/voyager-thumbnail-3.webp", alt: "25,902,068,370 km Away — Voyager 1 thumbnail" }
      ]
    },
    {
      id: "uttar-pradesh",
      number: "02",
      title: "Uttar Pradesh",
      category: "Documentary · Editing · Visual Storytelling",
      description: "A documentary-style exploration of politics, governance, and developments in Uttar Pradesh.",
      role: "Video editing and visual storytelling.",
      tools: ["Premiere Pro", "After Effects", "Photoshop"],
      image: "assets/design/uttar-pradesh-thumbnail.webp",
      video: "https://www.youtube.com/watch?v=Ukf5jY53J3Y",
      thumbnails: [{ title: "Reality of Yogi", image: "assets/design/uttar-pradesh-thumbnail.webp", alt: "Reality of Yogi — Uttar Pradesh documentary thumbnail" }]
    },
    {
      id: "india-needs-jobs",
      number: "03",
      title: "India Needs Jobs",
      category: "Research Documentary · Editing · Data Visualization",
      description: "A research-driven video exploring employment, economic challenges, and opportunities in India.",
      role: "Video editing and data visualization.",
      tools: ["Premiere Pro", "After Effects", "Photoshop"],
      image: "assets/design/india-needs-jobs-thumbnail.webp",
      video: "https://www.youtube.com/watch?v=wc0twYCiIvw",
      thumbnails: [{ title: "Unemployment Crisis", image: "assets/design/india-needs-jobs-thumbnail.webp", alt: "Unemployment Crisis — India Needs Jobs documentary thumbnail" }]
    }
  ]
};

const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "\"":"&quot;", "'":"&#39;" }[char]));
const projectList = document.querySelector("#project-list");

projectList.innerHTML = portfolio.projects.map(project => `
  <article class="project-card">
    <button class="project-visual" type="button" data-project="${escapeHTML(project.id)}" aria-label="Open ${escapeHTML(project.title)} project">
      <span class="project-art" style="background-image:url('${escapeHTML(project.image)}')" aria-hidden="true"></span>
      <span class="project-overlay"><span>${escapeHTML(project.number)} / 03</span><span>VIEW PROJECT ↗</span></span>
    </button>
    <div class="project-info">
      <div class="project-title-row"><h3>${escapeHTML(project.title)}</h3><span>${escapeHTML(project.number)}</span></div>
      <p class="project-meta">${escapeHTML(project.category)}</p>
      <p class="project-desc">${escapeHTML(project.description)}</p>
      <button class="project-open" type="button" data-project="${escapeHTML(project.id)}">View project <span aria-hidden="true">↗</span></button>
    </div>
  </article>`).join("");

const dialog = document.querySelector(".project-dialog");
const dialogContent = dialog.querySelector(".dialog-content");
function openProject(projectId) {
  const project = portfolio.projects.find(item => item.id === projectId);
  if (!project) return;
  const thumbnails = project.thumbnails || [{ title: project.title, image: project.image, alt: `${project.title} thumbnail` }];
  dialogContent.innerHTML = `
    <div class="dialog-player" data-dialog-player>
      <img data-player-poster src="${escapeHTML(thumbnails[0].image)}" alt="${escapeHTML(thumbnails[0].alt)}">
      <button class="dialog-play" type="button" data-play-project="${escapeHTML(project.id)}" aria-label="Play ${escapeHTML(project.title)}">▶</button>
    </div>
    <p class="dialog-kicker">PROJECT ${escapeHTML(project.number)} · ${escapeHTML(project.category.toUpperCase())}</p>
    <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
    <p class="dialog-description">${escapeHTML(project.description)}</p>
    ${thumbnails.length > 1 ? `<div class="dialog-thumbnails" aria-label="${escapeHTML(project.title)} thumbnail designs">${thumbnails.map((thumbnail,index) => `<button class="thumbnail-choice" type="button" data-poster="${index}" aria-pressed="${index===0}" aria-label="Show ${escapeHTML(thumbnail.title)} thumbnail"><img src="${escapeHTML(thumbnail.image)}" alt=""><span>${escapeHTML(thumbnail.title)}</span></button>`).join("")}</div>` : ""}
    <div class="dialog-columns"><div><h3>MY ROLE</h3><p>${escapeHTML(project.role)}</p></div><div><h3>SOFTWARE</h3><p>${project.tools.map(escapeHTML).join(" · ")}</p></div></div>
    <div class="dialog-actions"><a class="button button-light" href="${escapeHTML(project.video)}" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></div>`;
  dialog.dataset.projectId = project.id;
  dialog.showModal();
  document.body.classList.add("dialog-open");
  dialog.querySelector(".dialog-close").focus();
}

document.addEventListener("click", event => {
  const projectTrigger = event.target.closest("[data-project]");
  if (projectTrigger) {
    openProject(projectTrigger.dataset.project);
    return;
  }

  const playButton = event.target.closest("[data-play-project]");
  if (playButton) {
    const project = portfolio.projects.find(item => item.id === playButton.dataset.playProject);
    if (!project?.video) return;
    const videoId = new URL(project.video).searchParams.get("v");
    if (!videoId) return;
    dialog.querySelector("[data-dialog-player]").innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0" title="${escapeHTML(project.title)} video" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    return;
  }

  const posterChoice = event.target.closest("[data-poster]");
  if (posterChoice) {
    const project = portfolio.projects.find(item => item.id === dialog.dataset.projectId);
    const thumbnail = project?.thumbnails?.[Number(posterChoice.dataset.poster)];
    if (!thumbnail) return;
    const poster = dialog.querySelector("[data-player-poster]");
    if (poster) poster.src = thumbnail.image, poster.alt = thumbnail.alt;
    dialog.querySelectorAll("[data-poster]").forEach(button => button.setAttribute("aria-pressed", String(button === posterChoice)));
    return;
  }

  if (event.target.closest(".dialog-close")) dialog.close();
});

dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 12), { passive:true });
header.classList.toggle("scrolled", window.scrollY > 12);

const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  mobileMenu.hidden = !isOpen;
});
mobileMenu.addEventListener("click", event => {
  if (!event.target.closest("a")) return;
  mobileMenu.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !mobileMenu.hidden) {
    mobileMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
  }
});
document.querySelector("[data-year]").textContent = new Date().getFullYear();
