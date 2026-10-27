import React from 'react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 reveal-item revealed" id="hero">
      <div className="max-w-3xl">
        {/* Sub-kicker / Category Tag */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-widest font-semibold text-gray-400 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#F5C725] inline-block animate-pulse shadow-[0_0_8px_#F5C725]" />
          <span>VIDEO EDITOR / THUMBNAIL DESIGNER</span>
        </div>

        {/* Big Bold Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
          I cut the video.<br />
          I design <span className="text-[#F5C725] inline-block animate-glow-text">the click.</span>
        </h1>

        {/* Supporting Lead Text */}
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mb-9">
          I turn raw footage into videos people finish, and design the frame that makes them press play.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            className="btn-motion inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#F5C725] text-black font-bold text-sm hover:bg-[#e0b51f] transition duration-200 shadow-lg shadow-[#F5C725]/20 hover:shadow-[#F5C725]/35 cursor-pointer"
            href="#work"
            onClick={scrollTo('work')}
          >
            Browse projects →
          </a>
          <a
            className="btn-motion inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#16181d] text-gray-200 font-semibold text-sm border border-white/10 hover:border-white/20 hover:bg-[#1f2229] transition duration-200 shadow-md cursor-pointer"
            href="#about"
            onClick={scrollTo('about')}
          >
            About me
          </a>
        </div>
      </div>

      {/* Video Editing Timeline Mockup */}
      <div className="mt-16 w-full rounded-2xl bg-[#111317] border border-white/10 p-4 md:p-6 shadow-2xl relative overflow-hidden group hover:border-[#F5C725]/30 transition-all duration-500">
        {/* Ambient internal glow */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#F5C725]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#F5C725]/10 transition-all duration-700" />

        {/* Timeline Header Bar: Time Ruler */}
        <div className="relative w-full border-b border-white/10 pb-3 flex justify-between text-[11px] font-mono text-gray-500 select-none">
          <span className="w-12 text-left">00:00</span>
          <span className="w-12 text-center">00:10</span>
          <span className="w-12 text-center text-[#F5C725] font-bold drop-shadow-[0_0_6px_rgba(245,199,37,0.5)]">
            00:20
          </span>
          <span className="w-12 text-center">00:30</span>
          <span className="w-12 text-center">00:40</span>
          <span className="w-12 text-right">00:50</span>

          {/* Current Playhead Indicator Pin */}
          <div className="absolute left-[44%] -top-1 transform -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none">
            <span className="bg-[#F5C725] text-black text-[9px] font-bold px-1.5 py-0.5 rounded shadow-lg">
              00:20:08
            </span>
            <div className="w-[1.5px] h-32 md:h-36 bg-[#F5C725] playhead-glow" />
          </div>
        </div>

        {/* Tracks Container */}
        <div className="pt-4 space-y-2.5 text-xs font-mono select-none">
          {/* Track V2: Motion Graphics / Overlays */}
          <div className="flex items-center gap-3 group/track hover:bg-white/[0.02] rounded px-1 -mx-1 transition-colors">
            <span className="w-7 text-[10px] font-semibold text-gray-500 uppercase">V2</span>
            <div className="flex-1 h-7 rounded bg-[#171a22] flex items-center px-2 gap-2 relative overflow-hidden">
              <div className="w-1/4" />
              <div className="w-28 h-5 rounded bg-indigo-900/60 border border-indigo-500/40 text-indigo-200 text-[9px] flex items-center px-2 font-medium truncate hover:border-indigo-400 transition-colors">
                TITLE CARD
              </div>
              <div className="w-20" />
              <div className="w-36 h-5 rounded bg-indigo-900/60 border border-indigo-500/40 text-indigo-200 text-[9px] flex items-center px-2 font-medium truncate hover:border-indigo-400 transition-colors">
                LOWER THIRD
              </div>
            </div>
          </div>

          {/* Track V1: Main Video Clips */}
          <div className="flex items-center gap-3 group/track hover:bg-white/[0.02] rounded px-1 -mx-1 transition-colors">
            <span className="w-7 text-[10px] font-semibold text-gray-500 uppercase">V1</span>
            <div className="flex-1 h-8 rounded bg-[#171a22] flex items-center gap-1.5 p-1 relative overflow-hidden">
              <div className="w-[28%] h-full rounded bg-[#27356d] border border-blue-400/30 text-blue-200 text-[10px] font-semibold flex items-center px-2 hover:border-blue-400/60 transition-colors">
                A-ROLL
              </div>
              <div className="w-[18%] h-full rounded bg-[#1a4a4d] border border-teal-400/30 text-teal-200 text-[10px] font-semibold flex items-center px-2 hover:border-teal-400/60 transition-colors">
                B-ROLL
              </div>
              <div className="w-[22%] h-full rounded bg-[#27356d] border border-blue-400/30 text-blue-200 text-[10px] font-semibold flex items-center px-2 hover:border-blue-400/60 transition-colors">
                A-ROLL
              </div>
              <div className="w-[16%] h-full rounded bg-[#1a4a4d] border border-teal-400/30 text-teal-200 text-[10px] font-semibold flex items-center px-2 hover:border-teal-400/60 transition-colors">
                B-ROLL
              </div>
              <div className="flex-1 h-full rounded bg-[#27356d] border border-blue-400/30 text-blue-200 text-[10px] font-semibold flex items-center px-2 hover:border-blue-400/60 transition-colors">
                A-ROLL
              </div>
            </div>
          </div>

          {/* Track A1: Audio Waveform */}
          <div className="flex items-center gap-3 group/track hover:bg-white/[0.02] rounded px-1 -mx-1 transition-colors">
            <span className="w-7 text-[10px] font-semibold text-gray-500 uppercase">A1</span>
            <div className="flex-1 h-8 rounded bg-[#171a22] flex items-center px-2 overflow-hidden border border-emerald-950/40">
              <div className="flex items-center w-full justify-between h-4 opacity-80 overflow-hidden">
                {[0.1, 0.3, 0.5, 0.2, 0.4, 0.6, 0.15, 0.35, 0.25, 0.55, 0.45, 0.65, 0.2, 0.5, 0.1, 0.4, 0.3, 0.7, 0.25, 0.6, 0.15, 0.45, 0.35, 0.55, 0.2, 0.65, 0.1, 0.3, 0.5, 0.4, 0.25, 0.6, 0.15, 0.35, 0.55, 0.45, 0.2, 0.65, 0.1, 0.3, 0.5, 0.25, 0.4, 0.6, 0.35, 0.15, 0.55, 0.45, 0.2, 0.65].map((delay, idx) => (
                  <span
                    key={idx}
                    className={`waveform-bar h-${(idx % 4) + 1}`}
                    style={{ animationDelay: `${delay}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
