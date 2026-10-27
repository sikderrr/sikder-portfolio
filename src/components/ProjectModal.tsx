import React, { useEffect, useCallback } from 'react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function extractYouTubeId(url?: string): string | null {
  if (!url) return null;
  try {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=[&]?|v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  } catch {
    return null;
  }
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const youtubeId = extractYouTubeId(project.videoUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="rounded-2xl bg-[#111317] border border-white/15 text-white max-w-3xl w-full p-0 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#16181d]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5C725] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#F5C725] uppercase">
              {project.category || 'PROJECT'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition cursor-pointer"
            type="button"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Media Area: Video or Image */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {project.type === 'video' && youtubeId ? (
            <iframe
              className="w-full h-full border-0"
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              className="w-full h-full object-contain"
              src={project.image}
              alt={project.title}
            />
          )}
        </div>

        {/* Details Info Bar */}
        <div className="p-6 space-y-3 bg-[#111317]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            {project.type === 'video' && project.videoUrl ? (
              <a
                className="btn-motion inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F5C725] text-black font-bold text-xs hover:bg-[#e0b51f] transition shadow"
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Watch on YouTube</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <a
                className="btn-motion inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F5C725] text-black font-bold text-xs hover:bg-[#e0b51f] transition shadow"
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Open Full Artwork</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            {project.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-gray-400 border-t border-white/5">
            <span className="text-[#F5C725]">
              Role: {project.role}
            </span>
            <span className="text-gray-600">·</span>
            <span>
              Tools: {project.tools.join(', ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
