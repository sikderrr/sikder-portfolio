import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12 mt-12 relative z-10" data-purpose="site-footer">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
        <p>© 2026 Sikder</p>

        <div className="flex items-center flex-wrap gap-2">
          <a
            className="btn-motion inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#16181d] text-gray-300 font-semibold text-xs border border-white/10 hover:border-red-500/50 hover:text-white hover:bg-[#1f2229] transition duration-200"
            href="https://youtube.com/@sikder_in"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg className="w-3.5 h-3.5 fill-current text-[#FF0000]" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube
          </a>
          <a
            className="btn-motion inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#16181d] text-gray-300 font-semibold text-xs border border-white/10 hover:border-pink-500/50 hover:text-white hover:bg-[#1f2229] transition duration-200"
            href="https://www.instagram.com/sikder.in/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg className="w-3.5 h-3.5 fill-current text-[#E4405F]" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Instagram
          </a>
          <a
            className="btn-motion inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#16181d] text-gray-300 font-semibold text-xs border border-white/10 hover:border-red-400/50 hover:text-white hover:bg-[#1f2229] transition duration-200"
            href="mailto:sikderrakibulislam@gmail.com"
          >
            <svg className="w-3.5 h-3.5 fill-current text-[#EA4335]" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Mail
          </a>
        </div>
      </div>
    </footer>
  );
};
