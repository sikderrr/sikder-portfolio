import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-white/5 reveal-item revealed" id="contact">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-3 block">
          CONTACT
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
          Need the cut &amp; the click?<br />
          Let's make videos <span className="text-[#F5C725] inline-block animate-glow-text">that convert.</span>
        </h2>

        {/* Action / Email & Resume Group */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm mb-6">
          <a
            className="btn-motion inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#F5C725] text-black font-extrabold tracking-tight hover:bg-[#e0b51f] transition duration-200 shadow-lg shadow-[#F5C725]/20 hover:shadow-[#F5C725]/40"
            href="mailto:sikderrakibulislam@gmail.com"
          >
            sikderrakibulislam@gmail.com
          </a>
          <a
            id="resume-download"
            href="/assets/Resume.pdf"
            download="Sikder-Rakibul-Islam-Resume.pdf"
            className="btn-motion inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#16181d] text-gray-100 font-bold text-sm border border-white/15 hover:border-[#F5C725] hover:text-[#F5C725] transition duration-200"
          >
            Download résumé ↓
          </a>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
          From raw footage to high-CTR thumbnails — send your footage, script, or channel link and let's get started.
        </p>
      </div>
    </section>
  );
};
