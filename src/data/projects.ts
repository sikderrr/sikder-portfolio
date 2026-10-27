export interface Project {
  id: string;
  type: 'video' | 'thumb';
  badge: string;
  title: string;
  meta: string;
  duration?: string;
  resolution?: string;
  category: string;
  description: string;
  role: string;
  tools: string[];
  image: string;
  videoUrl?: string;
}

export const projects: Project[] = [
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
    image: "/assets/design/voyager-thumbnail-2.webp",
    videoUrl: "https://www.youtube.com/watch?v=mZSs4lW9-n8"
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
    image: "/assets/design/uttar-pradesh-thumbnail.webp",
    videoUrl: "https://www.youtube.com/watch?v=Ukf5jY53J3Y"
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
    image: "/assets/design/india-needs-jobs-thumbnail.webp",
    videoUrl: "https://www.youtube.com/watch?v=wc0twYCiIvw"
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
    image: "/assets/design/voyager-thumbnail-2.webp"
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
    image: "/assets/design/uttar-pradesh-thumbnail.webp"
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
    image: "/assets/design/india-needs-jobs-thumbnail.webp"
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
    image: "/assets/design/voyager-thumbnail-1.webp",
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
    image: "/assets/design/voyager-thumbnail-1.webp"
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
    image: "/assets/design/voyager-thumbnail-3.webp",
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
    image: "/assets/design/voyager-thumbnail-3.webp"
  }
];
