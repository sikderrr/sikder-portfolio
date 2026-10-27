import React from 'react';

export const Skills: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-white/5 reveal-item revealed" id="skills">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-widest font-mono font-bold text-[#F5C725]">
          <span className="w-2 h-2 rounded-full bg-[#F5C725] inline-block animate-pulse shadow-[0_0_8px_#F5C725]" />
          <span>// CORE CRAFT &amp; SKILLS</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Built for retention. <span className="text-[#F5C725] inline-block animate-glow-text">Engineered for the click.</span>
        </h2>
      </div>

      {/* Two Software-Inspired Interactive Skill Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7">
        
        {/* Skill Card 1: Video Editing (NLE Software & Inspector Mockup) */}
        <div className="card-motion rounded-2xl bg-[#111317] border border-white/10 p-5 md:p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full group hover:border-[#F5C725]/40">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl bg-[#F5C725]/10 border border-[#F5C725]/40 flex items-center justify-center text-[#F5C725] shadow-inner shrink-0 group-hover:scale-110 group-hover:bg-[#F5C725]/20 transition-all duration-300"
                  title="Video Editing"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.5 12.5v-5l4.5 2.5-4.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-none group-hover:text-[#F5C725] transition-colors duration-300">
                    Video Editing
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 select-none shrink-0">
                <div className="btn-motion flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-[#16181d] border border-[#9999FF]/40 shadow-[0_0_12px_rgba(153,153,255,0.25)] hover:border-[#9999FF] hover:shadow-[0_0_18px_rgba(153,153,255,0.5)]">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-[#000080] to-[#00005b] border border-[#9999FF]/50 flex items-center justify-center text-[#9999FF] font-black text-xs shadow-[0_0_8px_rgba(153,153,255,0.5)]">
                    Pr
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white leading-tight">Premiere Pro</span>
                  </div>
                </div>
                <div className="btn-motion flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-[#16181d] border border-[#cf96fd]/40 shadow-[0_0_12px_rgba(207,150,253,0.25)] hover:border-[#cf96fd] hover:shadow-[0_0_18px_rgba(207,150,253,0.5)]">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-[#2d0047] to-[#16002b] border border-[#cf96fd]/50 flex items-center justify-center text-[#cf96fd] font-black text-xs shadow-[0_0_8px_rgba(207,150,253,0.5)]">
                    Ae
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white leading-tight">After Effects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Realistic Video Editing Suite Mockup */}
          <div className="rounded-xl bg-[#0d0e11] border border-white/10 overflow-hidden shadow-2xl select-none text-xs font-mono flex-1 flex flex-col justify-between group-hover:border-white/20 transition-colors">
            {/* Window Top Chrome */}
            <div className="bg-[#16181d] px-3 py-2 border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5C725]/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                <span className="ml-2 text-[10px] text-gray-400 font-sans tracking-wide">Final_Cut_Master_v4.prproj</span>
              </div>
              <div className="flex items-center gap-3 text-[10px] text-gray-400">
                <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[#F5C725] font-bold">4K · 60fps</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  REC 709
                </span>
              </div>
            </div>

            {/* Main Editor Interface Area: Sidebar Tools + Program Monitor */}
            <div className="flex border-b border-white/10 bg-[#121418] flex-1">
              {/* Micro Tool Palette */}
              <div className="w-9 py-2 px-1 border-r border-white/10 bg-[#16181d] flex flex-col items-center gap-2 text-gray-400 shrink-0">
                <button
                  className="w-6 h-6 rounded bg-[#F5C725]/15 text-[#F5C725] border border-[#F5C725]/30 flex items-center justify-center hover:scale-110 transition-transform"
                  title="Selection Tool (V)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 5.428z" />
                  </svg>
                </button>
                <button
                  className="w-6 h-6 rounded hover:bg-white/5 text-gray-400 hover:text-white flex items-center justify-center hover:scale-110 transition-transform"
                  title="Razor Blade (C)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64z" />
                  </svg>
                </button>
                <button
                  className="w-6 h-6 rounded hover:bg-white/5 text-gray-400 hover:text-white flex items-center justify-center hover:scale-110 transition-transform"
                  title="Ripple Edit (B)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm1 5h-4v3H3l5 5 5-5h-3v-3zm5-5v4h3v3l5-5-5-5v3h-3z" />
                  </svg>
                </button>
                <button
                  className="w-6 h-6 rounded hover:bg-white/5 text-gray-400 hover:text-white flex items-center justify-center hover:scale-110 transition-transform"
                  title="Slip Tool (Y)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 5h2v14H6zm10 0h2v14h-2zM9 13l3-3v2h2V8l3 3-3 3v-2h-2v2z" />
                  </svg>
                </button>
              </div>

              {/* Program Monitor */}
              <div className="flex-1 p-2.5 flex flex-col items-center justify-center bg-[#0a0b0d]">
                <div className="w-full aspect-[16/9] rounded bg-[#131722] border border-white/10 relative overflow-hidden flex items-center justify-center shadow-inner group/monitor">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1128] via-[#1a233e] to-[#2e153b] opacity-90" />
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-[#F5C725]/20 blur-xl group-hover/monitor:scale-125 transition-transform duration-700" />
                  <div className="absolute left-1/4 -top-8 w-28 h-28 rounded-full bg-indigo-500/20 blur-xl group-hover/monitor:scale-125 transition-transform duration-700" />

                  {/* Safe margin guides & rule-of-thirds grid */}
                  <div className="absolute inset-2 border border-white/10 border-dashed rounded pointer-events-none" />
                  <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-15">
                    <div className="border-r border-white" />
                    <div className="border-r border-white" />
                    <div />
                  </div>

                  {/* Subject Silhouette with Rim Lighting */}
                  <div className="relative z-10 flex flex-col items-center justify-center group-hover/monitor:scale-105 transition-transform duration-500">
                    <div className="w-14 h-14 rounded-full bg-[#1b2234] border-2 border-[#F5C725]/60 shadow-[0_0_15px_rgba(245,199,37,0.35)] flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#F5C725] fill-current" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="mt-1 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-[#F5C725]/30 text-[9px] font-mono text-[#F5C725]">
                      KEY SUBJECT · HOOK
                    </div>
                  </div>

                  {/* Monitor HUD Overlays */}
                  <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] text-gray-300 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>00:03:14:18</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded text-[9px] text-gray-400 border border-white/10">
                    FIT · 100%
                  </div>

                  {/* Transport Bar */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 text-gray-300 text-[10px]">
                    <span className="text-[9px] text-[#F5C725] font-bold">IN 00:00:00</span>
                    <div className="flex items-center gap-2.5 text-gray-300">
                      <span className="hover:text-white cursor-pointer"><svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" /></svg></span>
                      <span className="w-5 h-5 rounded-full bg-[#F5C725] text-black flex items-center justify-center font-bold shadow hover:scale-115 transition-transform cursor-pointer"><svg className="w-2.5 h-2.5 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span>
                      <span className="hover:text-white cursor-pointer"><svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" /></svg></span>
                    </div>
                    <span className="text-[9px] text-gray-400">OUT 00:08:42</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Precision Multi-Track Timeline */}
            <div className="p-3 bg-[#111317] space-y-1.5 relative overflow-hidden shrink-0">
              <div className="absolute left-[42%] top-0 bottom-0 w-[2px] bg-[#F5C725] playhead-glow z-30 pointer-events-none flex flex-col items-center">
                <div className="w-2.5 h-2.5 bg-[#F5C725] rotate-45 -mt-1 shadow" />
                <div className="mt-1 px-1 py-0.5 rounded bg-[#F5C725] text-black text-[8px] font-bold tracking-tight shadow">
                  00:03:14
                </div>
              </div>

              {/* Track V2 */}
              <div className="flex items-center gap-2">
                <span className="w-5 text-[9px] font-bold text-gray-500 text-right">V2</span>
                <div className="flex-1 h-5 rounded bg-[#171a22] flex items-center gap-1.5 px-1 overflow-hidden border border-white/5 relative hover:border-white/15 transition-colors">
                  <div className="w-[15%]" />
                  <div className="w-[28%] h-3.5 rounded bg-[#8b5cf6]/40 border border-[#cf96fd]/50 text-[#cf96fd] text-[8px] font-semibold flex items-center justify-between px-1.5 truncate">
                    <span>TITLE_HOOK</span>
                    <span className="text-[7px] opacity-70">FX</span>
                  </div>
                  <div className="w-[18%]" />
                  <div className="w-[24%] h-3.5 rounded bg-[#1a4a4d] border border-teal-400/40 text-teal-200 text-[8px] font-semibold flex items-center px-1.5 truncate">
                    <span>B-ROLL_4K</span>
                  </div>
                </div>
              </div>

              {/* Track V1 */}
              <div className="flex items-center gap-2">
                <span className="w-5 text-[9px] font-bold text-gray-500 text-right">V1</span>
                <div className="flex-1 h-6 rounded bg-[#171a22] flex items-center gap-0.5 p-0.5 overflow-hidden border border-white/5 relative hover:border-white/15 transition-colors">
                  <div className="w-[22%] h-full rounded bg-[#27356d] border border-blue-400/40 text-blue-200 text-[9px] font-semibold flex items-center px-1.5 justify-between">
                    <span className="truncate">A-ROLL_01</span>
                    <span className="w-1 h-1 bg-blue-300 rounded-full" />
                  </div>
                  <div className="w-[20%] h-full rounded bg-[#203254] border border-blue-400/40 text-blue-200 text-[9px] font-semibold flex items-center px-1.5 justify-between">
                    <span className="truncate">A-ROLL_02</span>
                    <span className="w-1 h-1 bg-[#F5C725] rounded-full" />
                  </div>
                  <div className="w-[26%] h-full rounded bg-[#27356d] border border-blue-400/40 text-blue-200 text-[9px] font-semibold flex items-center px-1.5 justify-between">
                    <span className="truncate">A-ROLL_03</span>
                    <span className="w-1 h-1 bg-blue-300 rounded-full" />
                  </div>
                  <div className="flex-1 h-full rounded bg-[#203254] border border-blue-400/40 text-blue-200 text-[9px] font-semibold flex items-center px-1.5 truncate">
                    <span>A-ROLL_04</span>
                  </div>
                </div>
              </div>

              {/* Track A1 */}
              <div className="flex items-center gap-2">
                <span className="w-5 text-[9px] font-bold text-gray-500 text-right">A1</span>
                <div className="flex-1 h-5 rounded bg-[#171a22] flex items-center px-1.5 overflow-hidden border border-emerald-950/40">
                  <div className="flex items-center w-full justify-between h-3 opacity-90">
                    {[0.1, 0.3, 0.5, 0.2, 0.4, 0.6, 0.15, 0.35, 0.25, 0.55, 0.45, 0.65, 0.2, 0.5, 0.1, 0.4, 0.25, 0.7, 0.25, 0.6, 0.15, 0.45, 0.35, 0.55, 0.2, 0.65, 0.1, 0.4].map((d, i) => (
                      <span key={i} className="waveform-bar h-2.5" style={{ animationDelay: `${d}s` }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Track A2 */}
              <div className="flex items-center gap-2">
                <span className="w-5 text-[9px] font-bold text-gray-500 text-right">A2</span>
                <div className="flex-1 h-4 rounded bg-[#171a22] flex items-center px-1 gap-1 overflow-hidden border border-white/5">
                  <div className="w-16 h-2.5 rounded bg-amber-500/20 border border-amber-500/30 text-[7px] text-amber-300 font-sans px-1 truncate flex items-center">
                    WHOOSH
                  </div>
                  <div className="w-8" />
                  <div className="w-20 h-2.5 rounded bg-amber-500/20 border border-amber-500/30 text-[7px] text-amber-300 font-sans px-1 truncate flex items-center">
                    RISER_SFX
                  </div>
                  <div className="flex-1 h-2 rounded bg-[#F5C725]/10 border border-[#F5C725]/20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Card 2: Thumbnail Design (Photoshop & High-CTR Canvas Mockup) */}
        <div className="card-motion rounded-2xl bg-[#111317] border border-white/10 p-5 md:p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full group hover:border-[#F5C725]/40">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl bg-[#F5C725]/10 border border-[#F5C725]/40 flex items-center justify-center text-[#F5C725] shadow-inner shrink-0 group-hover:scale-110 group-hover:bg-[#F5C725]/20 transition-all duration-300"
                  title="Thumbnail Design"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M21 3H3C1.9 3 1 3.9 1 5v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-8.5-4.5l-2.5 3.01L7.25 15l-3.25 4h16l-5.5-7.5z" />
                    <circle cx="8.5" cy="9.5" r="1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-none group-hover:text-[#F5C725] transition-colors duration-300">
                    Thumbnail Design
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 select-none shrink-0">
                <div className="btn-motion flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-[#16181d] border border-[#31A8FF]/40 shadow-[0_0_12px_rgba(49,168,255,0.25)] hover:border-[#31A8FF] hover:shadow-[0_0_18px_rgba(49,168,255,0.5)]">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-[#001d3d] to-[#000c1a] border border-[#31A8FF]/50 flex items-center justify-center text-[#31A8FF] font-black text-xs shadow-[0_0_8px_rgba(49,168,255,0.5)]">
                    Ps
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white leading-tight">Photoshop</span>
                  </div>
                </div>
                <div className="btn-motion flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-[#16181d] border border-[#FF9A00]/40 shadow-[0_0_12px_rgba(255,154,0,0.25)] hover:border-[#FF9A00] hover:shadow-[0_0_18px_rgba(255,154,0,0.5)]">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-[#331b00] to-[#1a0d00] border border-[#FF9A00]/50 flex items-center justify-center text-[#FF9A00] font-black text-xs shadow-[0_0_8px_rgba(255,154,0,0.5)]">
                    Ai
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white leading-tight">Illustrator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Realistic Photoshop/Canvas Artboard Workspace */}
          <div className="rounded-xl bg-[#0d0e11] border border-white/10 overflow-hidden shadow-2xl select-none text-xs font-mono flex-1 flex flex-col justify-between group-hover:border-white/20 transition-colors">
            {/* App Header & Workspace Breadcrumb */}
            <div className="bg-[#16181d] px-3 py-2 border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5C725]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                </div>
                <span className="text-[10px] text-gray-400 font-sans ml-1">High_CTR_Thumbnail_1280x720.psd</span>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="text-gray-400">Zoom: <strong className="text-white">66.7%</strong></span>
                <span className="px-1.5 py-0.5 rounded bg-[#F5C725]/10 border border-[#F5C725]/30 text-[#F5C725] font-bold">RGB · 8bit</span>
              </div>
            </div>

            {/* Main Canvas Area with Floating Tools & Layers Inspector */}
            <div className="relative p-2.5 bg-[#0a0b0d] flex items-center justify-center overflow-hidden flex-1 border-b border-white/10">
              {/* Photoshop Micro Toolbar */}
              <div className="absolute left-2.5 top-2.5 bottom-2.5 w-7 rounded-lg bg-[#16181d]/90 backdrop-blur-md border border-white/10 z-20 flex flex-col items-center py-1.5 gap-2 text-gray-400 shrink-0">
                <button className="w-5 h-5 rounded hover:bg-white/10 flex items-center justify-center text-[#F5C725] hover:scale-110 transition-transform" title="Move (V)">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm1 5h-4v3H3l5 5 5-5h-3v-3zm5-5v4h3v3l5-5-5-5v3h-3z" /></svg>
                </button>
                <button className="w-5 h-5 rounded bg-[#F5C725]/20 text-[#F5C725] border border-[#F5C725]/40 flex items-center justify-center hover:scale-110 transition-transform" title="Selection (M)">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M3 3h4v2H5v2H3V3zm14 0h4v4h-2V5h-2V3zM3 17h2v2h2v2H3v-4zm16 2h-2v2h4v-4h-2v2z" /></svg>
                </button>
                <button className="w-5 h-5 rounded hover:bg-white/10 flex items-center justify-center hover:scale-110 transition-transform" title="Pen Tool (P)">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                </button>
                <button className="w-5 h-5 rounded hover:bg-white/10 flex items-center justify-center hover:scale-110 transition-transform" title="Type Tool (T)">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M5 4v3h5.5v12h3V7H19V4z" /></svg>
                </button>
              </div>

              {/* 16:9 Thumbnail Canvas */}
              <div className="w-full aspect-[16/9] rounded-lg bg-[#07080a] border border-white/20 relative overflow-hidden shadow-2xl pl-6 group/canvas">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1b0928] via-[#0b1424] to-[#1e1302]" />
                <div className="absolute -left-4 -bottom-4 w-40 h-40 rounded-full bg-[#F5C725]/25 blur-2xl pointer-events-none group-hover/canvas:bg-[#F5C725]/35 transition-colors duration-500" />
                <div className="absolute -right-4 -top-4 w-36 h-36 rounded-full bg-[#8b5cf6]/30 blur-2xl pointer-events-none group-hover/canvas:bg-[#8b5cf6]/40 transition-colors duration-500" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-28 bg-red-500/10 blur-3xl pointer-events-none" />

                {/* YouTube Badge Floating in top right corner */}
                <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 bg-red-600/90 text-white px-1.5 py-0.5 rounded shadow border border-white/20 hover:scale-105 transition-transform">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  <span className="text-[8px] font-sans font-black tracking-tight">12% CTR</span>
                </div>

                {/* Left Cutout Subject: Mask with Outer Stroke / Neon Rim */}
                <div className="absolute left-8 bottom-0 z-10 flex flex-col items-center group-hover/canvas:translate-y-[-2px] transition-transform duration-300">
                  <div className="relative">
                    <div className="w-20 h-28 bg-[#181d29] rounded-t-2xl border-2 border-[#F5C725]/80 shadow-[0_0_20px_rgba(245,199,37,0.4)] flex flex-col items-center justify-end pb-1 border-t border-white/40">
                      <div className="w-10 h-10 rounded-full bg-[#202738] border border-[#F5C725]/40 flex items-center justify-center text-[#F5C725] mb-1 shadow-inner">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                      </div>
                      <span className="text-[8px] font-sans font-bold text-gray-300">CREATOR</span>
                    </div>
                    {/* Bounding Box selection around subject cutout */}
                    <div className="absolute -inset-1 border border-[#F5C725]/70 border-dashed rounded pointer-events-none">
                      <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#F5C725] border border-black" />
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#F5C725] border border-black" />
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#F5C725] border border-black" />
                      <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#F5C725] border border-black" />
                    </div>
                  </div>
                </div>

                {/* Center-Right Viral Punchy Text with active Transform Box & Rotation */}
                <div className="absolute right-8 top-1/3 -translate-y-1/2 z-20 group-hover/canvas:scale-105 transition-transform duration-300">
                  <div className="relative transform -rotate-6 select-none">
                    <div className="absolute -inset-2 border border-white/60 border-dashed rounded pointer-events-none">
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-black shadow" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-black shadow" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-black shadow" />
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-black shadow" />
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#F5C725] rounded-full border border-black" />
                      <div className="absolute -top-4 left-1/2 w-[1px] h-3 bg-white/60" />
                    </div>
                    <div className="bg-[#F5C725] text-black font-black text-base md:text-xl px-3 py-1 rounded shadow-[4px_4px_0_#000] tracking-tighter uppercase leading-none border-2 border-black">
                      10X VIEWS
                    </div>
                    <div className="bg-white text-black font-black text-xs md:text-sm px-2.5 py-0.5 rounded shadow-[3px_3px_0_#000] tracking-tight uppercase leading-none border-2 border-black mt-1 ml-2">
                      SECRET HOOK
                    </div>
                  </div>
                </div>

                {/* Glowing Viral Curved Pointer Graphic */}
                <div className="absolute right-20 bottom-3 z-15">
                  <svg className="w-12 h-9 text-[#F5C725] drop-shadow-[0_0_8px_rgba(245,199,37,0.7)] group-hover/canvas:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="6" viewBox="0 0 100 60">
                    <path d="M10 50 Q 55 55 75 25" />
                    <path d="M60 20 L 78 23 L 73 40" />
                  </svg>
                </div>

                {/* Floating Mini Layers Palette Pill */}
                <div className="absolute bottom-2 right-2 z-25 bg-[#121418]/90 backdrop-blur-md border border-white/10 rounded-lg p-1.5 shadow-xl text-[8px] space-y-1">
                  <div className="flex items-center gap-1.5 px-1 py-0.5 rounded bg-[#F5C725]/20 text-[#F5C725] font-bold">
                    <span className="text-[7px]">👁</span>
                    <span>T 10X VIEWS</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-1 text-gray-300">
                    <span className="text-[7px]">👁</span>
                    <span>FX Subject Cutout</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-1 text-gray-400">
                    <span className="text-[7px]">👁</span>
                    <span>☼ Neon Glow Rim</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Photoshop Layers & Asset Inspector Deck */}
            <div className="p-3 bg-[#111317] space-y-1.5 relative overflow-hidden shrink-0">
              <div className="flex items-center justify-between text-[10px] text-gray-400 pb-1 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#F5C725] uppercase tracking-wider text-[9px]">LAYERS &amp; ASSETS</span>
                  <span className="text-[8px] text-gray-500 font-mono">4 ACTIVE</span>
                </div>
                <div className="flex items-center gap-1.5 text-[8px]">
                  <span className="px-1.5 py-0.5 rounded bg-[#16181d] border border-white/10 text-gray-300">Pass: Normal</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#16181d] border border-white/10 text-gray-300">Opac: 100%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                <div className="h-5 rounded bg-[#171a22] border border-[#F5C725]/30 flex items-center justify-between px-2 text-[8px] text-[#F5C725] font-semibold truncate hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5C725] shrink-0" />
                    <span className="truncate">L4 · Typography (10x Views)</span>
                  </div>
                  <span className="text-[7px] text-gray-400 shrink-0 font-mono">TXT</span>
                </div>
                <div className="h-5 rounded bg-[#171a22] border border-[#cf96fd]/40 flex items-center justify-between px-2 text-[8px] text-[#cf96fd] font-semibold truncate hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] shrink-0" />
                    <span className="truncate">L3 · Subject Cutout (Creator)</span>
                  </div>
                  <span className="text-[7px] text-gray-400 shrink-0 font-mono">MSK</span>
                </div>
                <div className="h-5 rounded bg-[#171a22] border border-teal-400/30 flex items-center justify-between px-2 text-[8px] text-teal-200 font-semibold truncate hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35b5a2] shrink-0" />
                    <span className="truncate">L2 · Glow Blooms &amp; Rim FX</span>
                  </div>
                  <span className="text-[7px] text-gray-400 shrink-0 font-mono">FX</span>
                </div>
                <div className="h-5 rounded bg-[#171a22] border border-blue-400/30 flex items-center justify-between px-2 text-[8px] text-blue-200 font-semibold truncate hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27356d] shrink-0" />
                    <span className="truncate">L1 · High-Contrast Gradient</span>
                  </div>
                  <span className="text-[7px] text-gray-400 shrink-0 font-mono">BKG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
