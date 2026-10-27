import React, { useState } from 'react';
import { Project, projects } from '../data/projects';

interface WorkProps {
  onSelectProject: (project: Project) => void;
}

export const Work: React.FC<WorkProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'video' | 'thumb'>('video');

  const filteredProjects = projects.filter((p) => p.type === activeFilter);

  return (
    <section className="py-16 md:py-24 border-t border-white/5 reveal-item revealed" id="work">
      {/* Section Header with Category Badges and Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-widest font-mono font-bold text-[#F5C725]">
            <span className="w-2 h-2 rounded-full bg-[#F5C725] inline-block animate-pulse shadow-[0_0_8px_#F5C725]" />
            <span>// PORTFOLIO DIRECTORY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Selected work &amp; keyframes.
          </h2>
        </div>

        {/* Filter Toggle Buttons: Video edits & Thumbnails only */}
        <div className="flex items-center p-1 rounded-full bg-[#111317] border border-white/10 shrink-0 self-start md:self-auto select-none">
          <button
            onClick={() => setActiveFilter('video')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeFilter === 'video'
                ? 'bg-[#F5C725] text-black font-bold shadow-md shadow-[#F5C725]/20'
                : 'text-gray-400 font-medium hover:text-white'
            }`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.5 12.5v-5l4.5 2.5-4.5 2.5z" />
            </svg>
            Video edits
          </button>
          <button
            onClick={() => setActiveFilter('thumb')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeFilter === 'thumb'
                ? 'bg-[#F5C725] text-black font-bold shadow-md shadow-[#F5C725]/20'
                : 'text-gray-400 font-medium hover:text-white'
            }`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M21 3H3C1.9 3 1 3.9 1 5v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-8.5-4.5l-2.5 3.01L7.25 15l-3.25 4h16l-5.5-7.5z" />
              <circle cx="8.5" cy="9.5" r="1.5" />
            </svg>
            Thumbnails
          </button>
        </div>
      </div>

      {/* Dynamic Project Grid: Strictly filtered by type */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer"
          >
            <div className="card-motion relative aspect-video rounded-xl bg-[#121418] overflow-hidden border border-white/10 shadow-md group-hover:border-[#F5C725]/50 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#171a22]/40 to-[#0d0e11]/60 opacity-60 transition-opacity duration-300 group-hover:opacity-20" />

              {/* Play Overlay for Video or Zoom Icon for Thumbnail */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                {project.type === 'video' ? (
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#F5C725] group-hover:scale-115 group-hover:bg-[#F5C725] group-hover:text-black group-hover:border-[#F5C725] transition-all duration-300 shadow-lg group-hover:shadow-[#F5C725]/40">
                    <svg className="w-5 h-5 fill-current ml-0.5 group-hover:translate-x-0.5 transition-transform duration-200" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#F5C725] group-hover:scale-115 group-hover:bg-[#F5C725] group-hover:text-black group-hover:border-[#F5C725] transition-all duration-300 shadow-lg group-hover:shadow-[#F5C725]/40">
                    <svg className="w-5 h-5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Type Badge */}
              <span
                className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10 text-[9px] font-mono font-bold uppercase ${
                  project.type === 'video' ? 'text-[#F5C725]' : 'text-sky-400'
                }`}
              >
                {project.type === 'video' ? 'Video Edit' : 'Thumbnail'}
              </span>
            </div>

            {/* Title & Metadata Row */}
            <div className="mt-3.5 flex items-center justify-between gap-2">
              <h3 className="text-base font-bold text-white group-hover:text-[#F5C725] transition-colors duration-200 truncate">
                {project.title}
              </h3>
              <span className="text-[11px] font-mono text-gray-500 font-medium shrink-0">
                {project.type === 'video'
                  ? `${project.resolution ? `${project.resolution.split(' ')[0]} · ` : ''}${project.duration}`
                  : '1280×720'}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
