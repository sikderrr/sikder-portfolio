import React, { useEffect, useState } from 'react';

export const AmbientSpotlight: React.FC = () => {
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 500, y: 300 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setCoords({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      id="ambient-spotlight"
      style={
        {
          '--mouse-x': `${coords.x}px`,
          '--mouse-y': `${coords.y}px`,
        } as React.CSSProperties
      }
    />
  );
};
