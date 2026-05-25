import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown, 
  Award, 
  Users, 
  Star, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Cpu, 
  Sparkles, 
  Tv, 
  Activity, 
  Wifi, 
  Disc 
} from 'lucide-react';

interface HeroProps {
  onOpenProposal: () => void;
  onViewWork: () => void;
}

const AGENCY_STAGES = [
  {
    id: "01",
    streamName: "CINEMA_ADS_SYSTEM",
    badge: "REC [CINEMA VIDEO]",
    latency: "12ms",
    title: "Cinema-Grade Ad Campaigns",
    subTitle: "High-retention commercial assets designed to hijack viewer attention loops.",
    metric: "18.4% Avg Retention Lift",
    image: "/src/assets/images/cinematic_hero_bg_1779572469012.png",
    color: "#E2B841",
  },
  {
    id: "02",
    streamName: "WHATSAPP_CONVERSION_ENGINE",
    badge: "BOT [CHAT ONLINE]",
    latency: "34ms",
    title: "AI-Powered WhatsApp Funnels",
    subTitle: "Intelligent messaging scripts auto-qualifying leads and booking conversions.",
    metric: "94.3% Conversion Match Rate",
    image: "/src/assets/images/gourmet_dining_1779572430286.png",
    color: "#4ADE80",
  },
  {
    id: "03",
    streamName: "WEB_VELOCITY_CORE",
    badge: "SYS [AUTO-DEPLOYED]",
    latency: "06ms",
    title: "Framer-Grade Web Frontends",
    subTitle: "Handcrafted speed-optimized React codes designed ahead of block templates.",
    metric: "0.2s Global Velocity Response",
    image: "/src/assets/images/luxury_real_estate_1779572390757.png",
    color: "#3B82F6",
  }
];

export default function Hero({ onOpenProposal, onViewWork }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const lastScrollTime = useRef<number>(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTimeCode, setCurrentTimeCode] = useState('00:00:23');
  const [leadMeter, setLeadMeter] = useState(1842);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const stageTimer = setInterval(() => {
      setCurrentStageIndex(prev => (prev + 1) % AGENCY_STAGES.length);
    }, 4500);
    return () => clearInterval(stageTimer);
  }, [isPlaying]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleNativeWheel = (e: WheelEvent) => {
      // Only capture scrolling if the page scroll is near the top (so we are looking at the Hero section)
      const isAtTop = window.scrollY < 50;
      if (!isAtTop) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 900) {
        // Ignore rapid scroll ticks to ensure smooth and deliberate slide-like transitions
        e.preventDefault();
        return;
      }

      if (Math.abs(e.deltaY) > 15) {
        if (e.deltaY > 0) {
          // Scroll down -> next stage
          if (currentStageIndex < AGENCY_STAGES.length - 1) {
            e.preventDefault();
            lastScrollTime.current = now;
            setIsPlaying(false); // Pause auto-play so user has manual control
            setCurrentStageIndex(prev => prev + 1);
          }
          // If it's the last stage, let it naturally scroll down the page
        } else {
          // Scroll up -> previous stage
          if (currentStageIndex > 0) {
            e.preventDefault();
            lastScrollTime.current = now;
            setIsPlaying(false); // Pause auto-play so user has manual control
            setCurrentStageIndex(prev => prev - 1);
          }
          // If it's the first stage, let it naturally scroll up to the absolute top of the page
        }
      }
    };

    section.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => {
      section.removeEventListener('wheel', handleNativeWheel);
    };
  }, [currentStageIndex]);

  useEffect(() => {
    const clockTimer = setInterval(() => {
      const now = new Date();
      const hrs = String(now.getUTCHours()).padStart(2, '0');
      const mins = String(now.getUTCMinutes()).padStart(2, '0');
      const secs = String(now.getUTCSeconds()).padStart(2, '0');
      setCurrentTimeCode(`${hrs}:${mins}:${secs}`);
    }, 1000);

    const leadTimer = setInterval(() => {
      setLeadMeter(prev => prev + (Math.random() > 0.65 ? 1 : 0));
    }, 3800);

    return () => {
      clearInterval(clockTimer);
      clearInterval(leadTimer);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Seed interactive floating particles mimicking sparkly organic gold dust
    const createParticle = (x: number, y: number, isBurst = false) => {
      const size = Math.random() * 2 + 0.5;
      const speedX = (Math.random() - 0.5) * (isBurst ? 3 : 0.8);
      const speedY = (Math.random() - 0.8) * (isBurst ? 3 : 0.8) - 0.2;
      const life = 0;
      const maxLife = Math.random() * 100 + 80;
      
      const goldColors = [
        'rgba(253, 242, 205, ',
        'rgba(214, 158, 46, ',
        'rgba(181, 124, 30, ',
        'rgba(246, 216, 89, ',
      ];
      const color = goldColors[Math.floor(Math.random() * goldColors.length)];

      particles.push({
        x,
        y,
        size,
        speedX,
        speedY,
        opacity: Math.random() * 0.5 + 0.3,
        color,
        life,
        maxLife,
      });
    };

    // Populate initially
    for (let i = 0; i < 60; i++) {
      createParticle(Math.random() * width, Math.random() * height);
    }

    let mouse = { x: -100, y: -100 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      
      if (Math.random() < 0.3) {
        createParticle(mouse.x, mouse.y, true);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      // Robust auto-resize fallback for hidden page, embedded iframe refresh, or tab focus shifts
      if (canvas.offsetWidth !== width || canvas.offsetHeight !== height) {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
      }
      ctx.clearRect(0, 0, width, height);

      // Periodic natural spark creation in bottom bounds
      if (particles.length < 120 && Math.random() < 0.1) {
        createParticle(Math.random() * width, height - Math.random() * 40);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        p.x += p.speedX;
        p.y += p.speedY;

        // Attract toward mouse slightly
        if (mouse.x > 0) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            p.x += (dx / dist) * 0.15;
            p.y += (dy / dist) * 0.15;
          }
        }

        // Fade calculation
        const opacityRatio = 1 - p.life / p.maxLife;
        const currentOpacity = p.opacity * opacityRatio;

        ctx.fillStyle = p.color + currentOpacity + ')';
        ctx.beginPath();
        // Star particle draw or simple circular blur
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Remove dead sparks
        if (p.life >= p.maxLife || p.x < 0 || p.x > width || p.y < 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="agency"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden scroll-mt-24"
    >
      {/* Background Grid Accent overlay */}
      <div className="absolute inset-0 grid-bg-mesh opacity-40 pointer-events-none" />

      {/* Sci-Fi Cockpit Wireframe / High-Tech grid HUD background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none select-none">
        <svg className="w-full h-full text-gold-500/20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
          {/* Outer diagonal cockpit boundaries */}
          <path d="M 150 0 L 380 400 L 150 900" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,6" />
          <path d="M 1290 0 L 1060 400 L 1290 900" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,6" />
          
          {/* Inner focus brackets */}
          <line x1="280" y1="0" x2="430" y2="300" stroke="currentColor" strokeWidth="1" />
          <line x1="1160" y1="0" x2="1010" y2="300" stroke="currentColor" strokeWidth="1" />
          <line x1="430" y1="300" x2="1010" y2="300" stroke="currentColor" strokeWidth="1" strokeDasharray="12,12" />
          
          {/* Targeting crosses/dots as in screenshot HUD control panel interfaces */}
          <circle cx="430" cy="300" r="3.5" fill="rgba(214, 158, 46, 0.4)" stroke="currentColor" strokeWidth="1" />
          <circle cx="1010" cy="300" r="3.5" fill="rgba(214, 158, 46, 0.4)" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Extreme luxury golden layout ambient lamp flares */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gold-500/10 to-transparent blur-[130px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] bg-gradient-to-br from-gold-600/5 to-transparent blur-[110px] rounded-full pointer-events-none" />

      {/* Elegant faded glow and high rich generated background image behind the centered content overlay */}
      <div className="absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-full max-w-5xl opacity-25 pointer-events-none -z-10 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <img
            src="/src/assets/images/cinematic_hero_bg_1779572469012.png"
            alt="Futuristic Premium Agency Backdrop"
            className="w-full h-full object-cover filter blur-[2px] opacity-75 rounded-full mix-blend-screen scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-radial from-transparent via-black/80 to-black pointer-events-none" />
        </motion.div>
      </div>

      <div className="absolute top-[20%] bottom-[20%] left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-10 pointer-events-none -z-10 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative w-full h-full max-w-[500px] max-h-[500px]"
        >
          <img
            src="/src/assets/images/cinematic_hero_bg_1779572469012.png"
            alt="89 Studio Dust Particle Monogram Background"
            className="w-full h-full object-contain filter blur-[4px] drop-shadow-[0_0_60px_rgba(214,158,46,0.35)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Sparkle canvas interactive dust overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto z-10 opacity-70"
      />

      {/* Main Centered Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center relative z-20 flex flex-col items-center">
        
        {/* Subtitle / Category Label Header with Gold Lines */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-5 sm:mb-6"
        >
          <div className="w-8 sm:w-12 h-[1px] bg-gold-400/30" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-gold-300 uppercase font-bold">
            MUMBAI & TAMIL NADU'S PREMIER AI AGENCY
          </span>
          <div className="w-8 sm:w-12 h-[1px] bg-gold-400/30" />
        </motion.div>

        {/* Centered Keynote Headline */}
        <div className="space-y-4 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-serif text-white tracking-tight leading-[1.05]"
          >
            Raw Ambition Meets <br />
            <span className="italic font-normal text-gold-300 block mt-2 font-serif">
              Machine Intelligence
            </span>
          </motion.h1>
          
          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-2xl mx-auto text-sm sm:text-base md:text-[17px] text-gray-300 font-light leading-relaxed pt-3"
          >
            We don't just build websites — we build automated sales machines using AI & WhatsApp for businesses that hustle hard.
          </motion.p>
        </div>

        {/* Dynamic CTAs - Rectangular exact match layout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto"
        >
          <button
            onClick={onOpenProposal}
            className="w-full sm:w-auto px-8 py-4 bg-[#E2B841] hover:bg-gold-300 text-black font-bold text-[11px] tracking-[0.165em] uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-gold-500/10 hover:shadow-gold-520/20 active:scale-97 rounded-sm"
          >
            Book Free Consultation
          </button>
          
          <button
            onClick={onViewWork}
            className="w-full sm:w-auto px-8 py-4 border border-neutral-800 bg-neutral-900/30 hover:border-gold-300/60 text-white font-bold text-[11px] tracking-[0.165em] uppercase transition-all duration-300 cursor-pointer hover:bg-neutral-900/50 active:scale-97 rounded-sm"
          >
            Explore Capabilities
          </button>
        </motion.div>

        {/* Cinematic Front Stage Core Section Centerpiece */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
          className="mt-16 w-full max-w-4xl relative group"
        >
          {/* Neon bounding laser boxes */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500/10 via-amber-500/15 to-gold-500/10 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative rounded-2xl bg-[#070709]/90 border border-white/[0.08] p-1.5 overflow-hidden shadow-[0_0_80px_rgba(195,154,59,0.06)] backdrop-blur-md">
            
            {/* Corner Bracket Accents of a real focus camera stage view finder */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#d69e2e]/40 pointer-events-none" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#d69e2e]/40 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#d69e2e]/40 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#d69e2e]/40 pointer-events-none" />

            {/* Inner Interactive Playback Display Box */}
            <div className="aspect-[21/9] sm:aspect-[16/9] w-full rounded-xl overflow-hidden relative border border-white/[0.04] bg-[#030304] flex flex-col justify-between p-4 md:p-6 select-none">
              
              {/* Backing Cinema Scene Image Underlay */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <motion.img 
                  key={currentStageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.65, scale: isPlaying ? 1.05 : 1.00 }}
                  transition={{ duration: 0.8 }}
                  src={AGENCY_STAGES[currentStageIndex].image}
                  alt={AGENCY_STAGES[currentStageIndex].title}
                  className="w-full h-full object-cover mix-blend-screen saturate-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
              </div>

              {/* High-Tech Terminal Header Data lines inside camera view finder */}
              <div className="relative z-10 flex items-start justify-between text-[9px] font-mono text-gray-400 tracking-wider">
                <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md border border-white/[0.06] rounded px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                  <span>{AGENCY_STAGES[currentStageIndex].badge}</span>
                </div>
                
                <div className="hidden sm:flex items-center gap-4 bg-black/75 backdrop-blur-md border border-white/[0.06] rounded px-3 py-1">
                  <div className="flex items-center gap-1.5">
                    <Activity className={`w-3 h-3 text-gold-400 ${isPlaying ? 'animate-bounce' : ''}`} />
                    <span>LATENCY: {AGENCY_STAGES[currentStageIndex].latency}</span>
                  </div>
                  <div className="w-[1px] h-3 bg-white/[0.08]" />
                  <div className="flex items-center gap-1.5">
                    <Wifi className="w-3 h-3 text-gold-400" />
                    <span>{AGENCY_STAGES[currentStageIndex].streamName}</span>
                  </div>
                </div>

                <div className="bg-black/75 backdrop-blur-md border border-white/[0.06] rounded px-2.5 py-1 flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-gold-300" />
                  <span className="text-gold-300">{leadMeter} CONVERSIONS</span>
                </div>
              </div>

              {/* Central Controller & Dynamic Info Overlays */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-3">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/85 border border-gold-400/60 text-gold-300 flex items-center justify-center cursor-pointer shadow-[0_0_30px_rgba(226,184,65,0.15)] hover:border-gold-300 hover:text-white transition-all duration-300 relative group/btn"
                >
                  <div className="absolute inset-0 rounded-full border border-gold-400/20 group-hover/btn:scale-110 transition-transform duration-500" />
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-[#d69e2e] text-[#d69e2e] group-hover/btn:fill-white group-hover/btn:text-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-[#d69e2e] text-[#d69e2e] group-hover/btn:fill-white group-hover/btn:text-white translate-x-0.5" />
                  )}
                </motion.div>

                {/* Subtitle / Description text overlay inside active viewfinder stage */}
                <div className="text-center space-y-1 max-w-lg mx-auto bg-black/80 border border-white/[0.06] rounded-xl px-5 py-3 backdrop-blur-md">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-[8px] font-mono text-[#E2B841] tracking-widest uppercase font-bold bg-[#E2B841]/10 px-2 py-0.5 rounded border border-gold-500/20">
                      STAGE {AGENCY_STAGES[currentStageIndex].id} // {isPlaying ? 'STREAMING' : 'PAUSED'}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                      {AGENCY_STAGES[currentStageIndex].metric}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-sans font-semibold text-white tracking-wide uppercase transition-all duration-300">
                    {AGENCY_STAGES[currentStageIndex].title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-300 font-light leading-relaxed max-w-sm mx-auto">
                    {AGENCY_STAGES[currentStageIndex].subTitle}
                  </p>
                </div>

                {/* Touch indicator dots */}
                <div className="flex items-center justify-center gap-2 pt-1 z-20">
                  {AGENCY_STAGES.map((stage, idx) => (
                    <button
                      key={stage.id}
                      onClick={() => setCurrentStageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${currentStageIndex === idx ? 'w-8 bg-[#E2B841]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                      title={`Switch to stage ${stage.id}`}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Control Panel Overlay strip */}
              <div className="relative z-10 bg-black/75 backdrop-blur-md border border-white/[0.06] rounded-xl p-3 flex items-center justify-between gap-4">
                
                {/* Simulated Seek-Bar track */}
                <div className="flex-1 flex items-center gap-3">
                  <span className="text-[9px] font-mono text-[#f6d859]">CLK // {currentTimeCode}</span>
                  <div className="flex-1 h-1 bg-white/[0.08] rounded-full overflow-hidden relative">
                    <motion.div
                      animate={isPlaying ? { x: ['-100%', '100%'] } : {}}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f6d859] to-transparent h-full w-[30%]"
                    />
                    <div className="absolute left-0 top-0 bottom-0 bg-gold-500/30 w-[45%]" />
                  </div>
                  <span className="text-[9px] font-mono text-gray-500">LIVE FEED</span>
                </div>

                {/* Right side control tools */}
                <div className="flex items-center gap-3.5">
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-gold-400" />}
                  </button>
                  
                  <div className="hidden xs:flex items-center gap-1 text-[9px] font-mono text-gray-400">
                    <Disc className={`w-3 h-3 text-gold-500 ${isPlaying ? 'animate-spin' : ''}`} />
                    <span>89-STUDIO CORE</span>
                  </div>

                  <span className="text-[9px] font-mono bg-[#E2B841]/10 text-gold-300 border border-gold-500/25 px-1.5 py-0.5 rounded uppercase font-bold tracking-widest select-none">
                    4K HDR
                  </span>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

        {/* Elegant infinite-scrolling Credentials Ticker ("The Scroll Stage") */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mt-20 w-full overflow-hidden relative py-5 border-y border-white/[0.03] bg-gradient-to-r from-transparent via-black/55 to-transparent backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.4)] pointer-events-auto"
        >
          {/* Subtle gold spotlight highlights behind the text carousel */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-12 bg-gold-400/10 blur-xl rounded-full" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-12 bg-amber-500/10 blur-xl rounded-full" />
          
          {/* Main scroller frame */}
          <div className="flex select-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                ease: 'linear',
                duration: 35,
                repeat: Infinity,
              }}
              className="flex items-center gap-16 whitespace-nowrap md:gap-24 text-[10px] font-mono tracking-[0.2em] text-gray-400 shrink-0"
            >
              {[1, 2, 3, 4].map((i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-3">
                    <span className="text-[#E2B841] font-bold">[89 // DIGITAL MONOPOLY]</span>
                    <span className="text-white font-light">CINEMA-GRADE VIDEO ADS</span>
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-gold-400/50 animate-pulse shrink-0" />
                  <div className="flex items-center gap-3">
                    <span className="text-[#E2B841] font-bold">[89 // AUTO-ENGINES]</span>
                    <span className="text-white font-light">INTELLIGENT WHATSAPP CONVERSION FUNNELS</span>
                  </div>
                  <Star className="w-3.5 h-3.5 text-gold-400/50 fill-gold-400/10 shrink-0" />
                  <div className="flex items-center gap-3">
                    <span className="text-[#E2B841] font-bold">[89 // WEB-CORE]</span>
                    <span className="text-white font-light">HIGH-VELOCITY CUSTOM SALES SYSTEMS</span>
                  </div>
                  <Award className="w-3.5 h-3.5 text-gold-400/50 shrink-0" />
                  <div className="flex items-center gap-3">
                    <span className="text-[#E2B841] font-bold">[89 // CONCIERGE-AI]</span>
                    <span className="text-white font-light">AUTOMATED LEAD QUALIFICATION BOT CHANNELS</span>
                  </div>
                  <Cpu className="w-3.5 h-3.5 text-gold-400/50 shrink-0" />
                  <div className="flex items-center gap-3">
                    <span className="text-[#E2B841] font-bold">[89 // INFRA-MATRIX]</span>
                    <span className="text-white font-light">CROSS-CHANNEL REVENUE MONITORS</span>
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-gold-400/50 shrink-0" />
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Down Scroll line indicator */}
      <button 
        onClick={onViewWork}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 select-none hover:opacity-80 transition-opacity cursor-pointer focus:outline-none bg-transparent border-none p-0"
        title="Scroll down"
      >
        <span className="text-[9px] uppercase font-mono tracking-[0.3em] text-gray-400 font-bold transition-opacity">Scroll</span>
        <motion.div
          animate={{ height: [24, 48, 24], y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] bg-gradient-to-b from-gold-300 via-gold-400/40 to-transparent"
          style={{ height: '35px' }}
        />
      </button>

    </section>
  );
}
