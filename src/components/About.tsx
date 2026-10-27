import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-white/5 reveal-item revealed" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Executive Portrait Card & Bio Meta */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="card-motion relative rounded-2xl bg-[#16181d] border border-white/10 overflow-hidden shadow-2xl p-3 group hover:border-[#F5C725]/30">
            {/* Portrait Image with Ambient Glow & Badges */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#111317]">
              <img
                alt="Sikder - Video Editor &amp; Thumbnail Designer"
                className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                src="./assets/profile/sikder-rakibul-islam-editorial.png"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = './assets/profile/sikder-rakibul-islam.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e]/90 via-transparent to-transparent pointer-events-none" />

              {/* Profile Lower Overlay Card Info */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col gap-1.5 group-hover:border-[#F5C725]/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-extrabold text-white tracking-tight leading-none">Sikder</h3>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5C725] animate-pulse shrink-0" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      Available for Projects
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <p className="text-xs font-medium text-gray-300 tracking-wide">
                      Video Editor &amp; Visual Storyteller
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metadata Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-[#121418] border border-white/5 hover:border-white/15 transition-colors">
              <span className="text-[10px] font-mono uppercase text-gray-500 block mb-1 tracking-wider font-semibold">
                EXPERIENCE
              </span>
              <span className="text-base sm:text-lg font-extrabold text-white tracking-tight flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 fill-current text-[#FF0000] shrink-0" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Creator &amp; Editor
              </span>
              <p className="text-xs text-gray-400 mt-0.5 truncate">YouTube &amp; Post-Production</p>
            </div>
            <div className="p-4 rounded-xl bg-[#121418] border border-white/5 hover:border-white/15 transition-colors">
              <span className="text-[10px] font-mono uppercase text-gray-500 block mb-1 tracking-wider font-semibold">
                LOCATION
              </span>
              <span className="text-base sm:text-lg font-extrabold text-white tracking-tight">Remote Worldwide</span>
              <p className="text-xs text-gray-400 mt-0.5">Available Anywhere (Remote Only)</p>
            </div>
          </div>
        </div>

        {/* Right Column: Story, Creative Suite, Academic Credentials, Disciplines */}
        <div className="lg:col-span-7 space-y-9 text-gray-300">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F5C725] font-bold">
                // ABOUT SIKDER
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Crafting stories that retain.<br />
              Designing visuals that <span className="text-[#F5C725] inline-block animate-glow-text">convert</span>.
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal pt-1">
              I enjoy transforming raw ideas into high-retention stories and designing click-worthy thumbnails that genuinely connect with audiences and keep viewers hooked from the first second.
            </p>
          </div>

          {/* Creative Software Suite */}
          <div className="pt-2">
            <span className="text-xs font-mono text-gray-400 block mb-3 uppercase tracking-wider font-semibold">
              PRIMARY CREATIVE SUITE
            </span>
            <div className="flex flex-wrap items-center gap-2.5 select-none">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
                {/* Premiere Pro */}
                <div className="btn-motion flex items-center gap-3 p-3 rounded-xl bg-[#16181d] border border-[#9999FF]/40 shadow-[0_0_12px_rgba(153,153,255,0.25)] hover:border-[#9999FF] hover:shadow-[0_0_18px_rgba(153,153,255,0.45)] transition-all group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#000080] to-[#00005b] border border-[#9999FF]/50 flex items-center justify-center text-[#9999FF] font-black text-base shrink-0 shadow-[0_0_12px_rgba(153,153,255,0.5)] group-hover:scale-105 transition-transform">
                    Pr
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-white tracking-tight group-hover:text-[#9999FF] transition-colors truncate">
                      Premiere Pro
                    </span>
                  </div>
                </div>

                {/* After Effects */}
                <div className="btn-motion flex items-center gap-3 p-3 rounded-xl bg-[#16181d] border border-[#cf96fd]/40 shadow-[0_0_12px_rgba(207,150,253,0.25)] hover:border-[#cf96fd] hover:shadow-[0_0_18px_rgba(207,150,253,0.45)] transition-all group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2d0047] to-[#16002b] border border-[#cf96fd]/50 flex items-center justify-center text-[#cf96fd] font-black text-base shrink-0 shadow-[0_0_12px_rgba(207,150,253,0.5)] group-hover:scale-105 transition-transform">
                    Ae
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-white tracking-tight group-hover:text-[#cf96fd] transition-colors truncate">
                      After Effects
                    </span>
                  </div>
                </div>

                {/* Photoshop */}
                <div className="btn-motion flex items-center gap-3 p-3 rounded-xl bg-[#16181d] border border-[#31A8FF]/40 shadow-[0_0_12px_rgba(49,168,255,0.25)] hover:border-[#31A8FF] hover:shadow-[0_0_18px_rgba(49,168,255,0.45)] transition-all group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#001d3d] to-[#000c1a] border border-[#31A8FF]/50 flex items-center justify-center text-[#31A8FF] font-black text-base shrink-0 shadow-[0_0_12px_rgba(49,168,255,0.5)] group-hover:scale-105 transition-transform">
                    Ps
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-white tracking-tight group-hover:text-[#31A8FF] transition-colors truncate">
                      Photoshop
                    </span>
                  </div>
                </div>

                {/* Illustrator */}
                <div className="btn-motion flex items-center gap-3 p-3 rounded-xl bg-[#16181d] border border-[#FF9A00]/40 shadow-[0_0_12px_rgba(255,154,0,0.25)] hover:border-[#FF9A00] hover:shadow-[0_0_18px_rgba(255,154,0,0.45)] transition-all group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#331b00] to-[#1a0d00] border border-[#FF9A00]/50 flex items-center justify-center text-[#FF9A00] font-black text-base shrink-0 shadow-[0_0_12px_rgba(255,154,0,0.5)] group-hover:scale-105 transition-transform">
                    Ai
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-white tracking-tight group-hover:text-[#FF9A00] transition-colors truncate">
                      Illustrator
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic & Education Credentials Block */}
          <div className="p-5 rounded-2xl bg-[#121418] border border-white/10 shadow-lg space-y-3 hover:border-white/20 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5C725] inline-block animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-gray-300">
                  ACADEMIC &amp; EDUCATION
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium text-[#F5C725] bg-[#F5C725]/10 border border-[#F5C725]/30 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5C725] animate-pulse shrink-0" />
                Pursuing · Sem 5
              </span>
            </div>
            <div>
              <h4 className="text-base font-bold text-white tracking-tight">
                Bachelor of Vocation in Multimedia and Animation
              </h4>
              <p className="text-xs font-mono text-[#F5C725] font-medium mt-0.5 tracking-wide">
                Bharathiar University
              </p>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Currently pursuing (5th Semester Undergraduate) · Focusing on post-production workflows, high-retention video storytelling, and motion design.
              </p>
            </div>
          </div>

          {/* Service Breakdown Cards */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-xl bg-[#121418] border border-white/5 hover:border-white/15 transition-colors">
              <span className="text-[10px] font-mono uppercase text-gray-500 block mb-1 tracking-wider font-semibold">
                SERVICE
              </span>
              <span className="text-base sm:text-lg font-extrabold text-white tracking-tight flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 fill-current text-[#F5C725] shrink-0" viewBox="0 0 24 24">
                  <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.5 12.5v-5l4.5 2.5-4.5 2.5z" />
                </svg>
                Full Edits
              </span>
              <p className="text-xs text-gray-400 mt-0.5 truncate">Short-form Reels, Shorts &amp; long-form YouTube cuts</p>
            </div>
            <div className="p-4 rounded-xl bg-[#121418] border border-white/5 hover:border-white/15 transition-colors">
              <span className="text-[10px] font-mono uppercase text-gray-500 block mb-1 tracking-wider font-semibold">
                DELIVERABLE
              </span>
              <span className="text-base sm:text-lg font-extrabold text-white tracking-tight flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 fill-current text-[#F5C725] shrink-0" viewBox="0 0 24 24">
                  <path d="M21 3H3C1.9 3 1 3.9 1 5v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-8.5-4.5l-2.5 3.01L7.25 15l-3.25 4h16l-5.5-7.5z" />
                  <circle cx="8.5" cy="9.5" r="1.5" />
                </svg>
                Thumbnail Design
              </span>
              <p className="text-xs text-gray-400 mt-0.5 truncate">High-CTR clickable cover art &amp; titles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
