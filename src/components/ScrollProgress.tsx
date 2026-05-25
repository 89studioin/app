import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial trigger
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2.5px] bg-white/[0.03] z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-gold-600 via-gold-300 to-gold-500 shadow-[0_0_10px_rgba(226,184,65,0.7)] transition-all duration-75 ease-out origin-left"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
