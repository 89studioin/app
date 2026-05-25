import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Activity } from 'lucide-react';

interface Stage {
  id: string;
  name: string;
  href: string;
}

const STAGES: Stage[] = [
  { id: '01', name: 'AGENCY', href: '#agency' },
  { id: '02', name: 'SERVICES', href: '#expertise' },
  { id: '03', name: 'SHOWCASE', href: '#cyber-reels' },
  { id: '04', name: 'INTERACTIVE', href: '#automation-framer' },
  { id: '05', name: 'DOSSIER', href: '#portfolio' },
  { id: '06', name: 'METHODOLOGY', href: '#process' },
  { id: '07', name: 'VALUE TIERS', href: '#pricing-and-faq' },
  { id: '08', name: 'CONTACT', href: '#contact' },
];

export default function SideStageIndicator() {
  const [activeStage, setActiveStage] = useState('01');
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show only on desktop pointer hover interfaces
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    if (!mediaQuery.matches) return;
    setIsVisible(true);

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // trigger active states when scrolled into center viewport bounds
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          const stage = STAGES.find((s) => s.href === `#${id}`);
          if (stage) {
            setActiveStage(stage.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    STAGES.forEach((stage) => {
      const el = document.querySelector(stage.href);
      if (el) observer.observe(el);
    });

    return () => {
      STAGES.forEach((stage) => {
        const el = document.querySelector(stage.href);
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  const handleStageClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6 select-none pointer-events-none">
      
      {/* High-tech HUD telemetry header */}
      <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity duration-300">
        <Activity className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
        <span className="text-[7.5px] font-mono text-gray-500 tracking-[0.2em] vertical-text">
          STAGE HUD
        </span>
      </div>

      {/* Central linking guide vertical line */}
      <div className="relative flex flex-col items-center gap-4 py-4 pointer-events-auto">
        <div className="absolute top-0 bottom-0 w-[1px] bg-white/[0.04] -z-10" />
        <div 
          className="absolute w-[1.5px] bg-gradient-to-b from-gold-600 via-gold-300 to-amber-500 -z-10 transition-all duration-500 ease-out" 
          style={{
            top: `${(STAGES.findIndex(s => s.id === activeStage) / STAGES.length) * 100}%`,
            height: `${100 / STAGES.length}%`
          }}
        />

        {STAGES.map((stage) => {
          const isActive = activeStage === stage.id;
          const isHovered = hoveredStage === stage.id;

          return (
            <div
              key={stage.id}
              className="relative flex items-center justify-center h-7 w-7 group cursor-pointer"
              onMouseEnter={() => setHoveredStage(stage.id)}
              onMouseLeave={() => setHoveredStage(null)}
              onClick={(e) => handleStageClick(e, stage.href)}
              title={`Jump to ${stage.name}`}
            >
              {/* Inner active dot glow */}
              <motion.div
                animate={{
                  scale: isActive ? 1 : 0.8,
                  backgroundColor: isActive ? '#E2B841' : (isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.15)'),
                  boxShadow: isActive ? '0 0 10px rgba(226,184,65,0.8)' : 'none',
                }}
                transition={{ duration: 0.3 }}
                className="w-2.5 h-2.5 rounded-full z-10"
              />

              {/* Laser ring outer border on active */}
              {isActive && (
                <motion.div
                  layoutId="activeStageRing"
                  className="absolute -inset-0.5 rounded-full border border-gold-400/40 -z-10 shadow-[0_0_15px_rgba(226,184,65,0.1)]"
                  transition={{ type: 'spring', damping: 20, stiffness: 220 }}
                />
              )}

              {/* Floating Tooltip Label (HUD text style) */}
              <AnimatePresence>
                {(isHovered || isActive) && (
                  <motion.div
                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                    animate={{ opacity: 1, x: -16, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-full mr-2 px-3 py-1.5 rounded bg-black/85 border border-white/[0.06] backdrop-blur-md flex items-center gap-2 text-right shadow-[0_4px_20px_rgba(0,0,0,0.6)] whitespace-nowrap"
                  >
                    <span className="text-[8.5px] font-mono text-[#E2B841] tracking-wider bg-[#E2B841]/10 px-1 rounded border border-gold-500/25">
                      {stage.id}
                    </span>
                    <span className="text-[9.5px] font-mono font-bold text-white tracking-widest uppercase">
                      {stage.name}
                    </span>
                    <Sparkles className="w-2.5 h-2.5 text-gold-400 animate-pulse" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Down scroll progress HUD meter */}
      <div className="flex flex-col items-center opacity-30 text-[9px] font-mono text-gray-500 gap-1.5">
        <span className="text-[8.5px] font-bold text-gold-400">{activeStage}/08</span>
      </div>

    </div>
  );
}
