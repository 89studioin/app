import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Pause, 
  Film, 
  Volume2, 
  Sparkles, 
  Tv, 
  Clapperboard, 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  CheckCircle2,
  Lock
} from 'lucide-react';

interface ReelItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  ratio: string;
  tagline: string;
  toolSet: string[];
  placeholderBg: string; // Golden ambient radial gradient or custom styled vectors
  previewImage: string;
}

export default function VideoShowcase() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  const reels: ReelItem[] = [
    {
      id: 'aethero',
      title: 'Aethero AI Cybernetic Launch Reel',
      category: 'Brand Kinetic Promo',
      duration: '0:45 Sec',
      ratio: 'Ultra-Wide 21:9',
      tagline: 'Synthesized cinematic streams utilizing Runway Gen-3 + Midjourney pipelines.',
      toolSet: ['Midjourney v6', 'Runway Gen-3 Alpha', 'Adobe Premiere Pro'],
      placeholderBg: 'bg-gradient-to-tr from-[#121217] via-[#241a0b] to-[#121217]',
      previewImage: '/src/assets/images/gourmet_dining_1779572430286.png'
    },
    {
      id: 'luna',
      title: 'Lunar Beauty Fluid Liquid Gold Product Reveal',
      category: 'Commercial Direct-To-Consumer',
      duration: '0:30 Sec',
      ratio: 'Cinematic 16:9',
      tagline: 'Simulated viscous flows and high-contrast ambient gold skin micro-vessels.',
      toolSet: ['Pika Labs', 'Stable Video Diffusion', 'Davinci Resolve'],
      placeholderBg: 'bg-gradient-to-br from-[#121217] via-[#35250a] to-[#121217]',
      previewImage: '/src/assets/images/luxury_jewelry_1779572449087.png'
    },
    {
      id: 'particle',
      title: 'Particle 89 Autonomous Hardware Tour',
      category: 'Product 3D Simulation',
      duration: '1:05 Min',
      ratio: 'Anamorphic Scope',
      tagline: 'Cyberpunk floating hardware chassis with custom particle trajectory tracers.',
      toolSet: ['Luma Dream Machine', 'Spline 3D', 'After Effects'],
      placeholderBg: 'bg-gradient-to-bl from-[#1c1c24] via-[#101015] to-[#1c1c24]',
      previewImage: '/src/assets/images/cinematic_hero_bg_1779572469012.png'
    }
  ];

  const activeReel = reels[activeReelIndex];

  // Exactly the columns represented in the reference mockup
  const studioCapabilities = [
    {
      id: "01",
      title: "Marketing & Sales Videos",
      subtitle: "BUILT TO CONVERT. ENGINEERED FOR ROI.",
      icon: Tv,
      bullets: [
        "Product showcase videos",
        "Explainer videos",
        "Ad creatives — Meta, YouTube, Shorts",
        "Landing page videos",
        "Promotional & flash sale videos",
        "Brand story videos"
      ]
    },
    {
      id: "02",
      title: "Social Media Content",
      subtitle: "STOP THE SCROLL. START THE TREND.",
      icon: Clapperboard,
      bullets: [
        "Instagram Reels & YouTube Shorts",
        "Viral trend videos",
        "Meme & culture-driven videos",
        "Influencer-style content",
        "UGC-style videos",
        "Story-based reels"
      ]
    },
    {
      id: "03",
      title: "Educational & Training",
      subtitle: "TEACH AT SCALE. WITHOUT A FILM CREW.",
      icon: GraduationCap,
      bullets: [
        "Online course videos",
        "Tutorial videos",
        "Screencast videos",
        "Corporate training content",
        "E-learning modules"
      ]
    },
    {
      id: "04",
      title: "Business & Corporate",
      subtitle: "POLISHED. PROFESSIONAL. ALWAYS ON-BRAND.",
      icon: Briefcase,
      bullets: [
        "Company profile videos",
        "Client testimonial videos",
        "Case study videos",
        "Presentation videos",
        "Internal training content"
      ]
    },
    {
      id: "05",
      title: "Advanced AI Video",
      subtitle: "THE NEXT FRONTIER OF MARKETING.",
      icon: Cpu,
      bullets: [
        "AI avatar videos",
        "Text-to-video generation",
        "Voice AI narration videos",
        "Personalized video campaigns",
        "Interactive & shoppable videos",
        "360° & immersive videos"
      ]
    },
    {
      id: "06",
      title: "Creative & Storytelling",
      subtitle: "CINEMA-GRADE NARRATIVE, AI-POWERED SPEED.",
      icon: Film,
      bullets: [
        "Brand storytelling campaigns",
        "Animated kids' stories",
        "YouTube storytelling series",
        "Short films using AI",
        "Long-form documentary cuts"
      ]
    }
  ];

  return (
    <section id="cyber-reels" className="relative py-28 md:py-36 bg-[#030304] overflow-hidden border-t border-[rgba(195,154,59,0.1)] scroll-mt-24">
      
      {/* Cinematic Background Image Underlay specific to this section */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-20 mix-blend-color-dodge bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("/src/assets/images/cinematic_hero_bg_1779572469012.png")' }}
      />
      
      {/* Ambient gold spotlights for cinematic visual layout */}
      <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-gold-500/10 to-transparent blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[20%] left-[10%] w-[450px] h-[450px] bg-gradient-to-br from-gold-600/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Grid Mesh */}
      <div className="absolute inset-0 grid-bg-mesh opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title head redesigned in pure cinematic luxury layout matching user screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20 text-left"
        >
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-400/90 font-semibold flex items-center gap-1.5">
              AI Content Studio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              Cinema-grade video, <br />
              <span className="gold-text-gradient italic font-light">at the speed of AI.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-8 flex flex-col space-y-6">
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed border-l-2 border-gold-500/30 pl-5">
              Faster than a production house. Cheaper than an agency. We script, generate, edit and publish high-converting video content using cutting-edge AI tooling — at the scale your brand demands.
            </p>
            
            {/* Playable reel selectors nested elegantly */}
            <div className="flex gap-2.5 flex-wrap pl-5">
              {reels.map((reel, idx) => (
                <button
                  key={reel.id}
                  onClick={() => {
                    setActiveReelIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`py-1.5 px-3 rounded-lg text-[10px] font-semibold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                    activeReelIndex === idx
                      ? 'border-gold-450 bg-gold-450/10 text-gold-300'
                      : 'border-[rgba(195,154,59,0.12)] text-gray-400 hover:border-gold-500/35 hover:text-white_90'
                  }`}
                >
                  /0{idx + 1} Reel
                </button>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Interactive Dramatic Cinematic Stage viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          
          {/* Main Visual Player Mockup */}
          <div className="lg:col-span-8 relative flex flex-col">
            <div className="aspect-[21/9] w-full rounded-[24px] border border-white/[0.05] shadow-[0_0_80px_rgba(0,0,0,0.8)] relative overflow-hidden group select-none flex items-center justify-center p-4 bg-black/40">
              
              {/* Dynamic Animated background */}
              <div className={`absolute inset-0 ${activeReel.placeholderBg} transition-all duration-700 opacity-90`} />
              
              {/* Premium image blending layer inside player */}
              <img 
                src={activeReel.previewImage}
                alt={activeReel.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-500 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 pointer-events-none group-hover:bg-black/20 transition-all duration-500" />
              
              {/* Ambient structures */}
              <div className="absolute inset-4 border border-gold-505/5 pointer-events-none rounded-xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] bg-radial from-gold-500/10 to-transparent blur-3xl pointer-events-none opacity-80" />

              <div className="absolute inset-0 scanline-ambient pointer-events-none opacity-20" />

              {/* Animated Cinematic spinning compass ring */}
              <motion.div
                animate={isPlaying ? {
                  scale: [1, 1.04, 0.96, 1],
                  rotate: [0, 90, 180, 360],
                  opacity: [0.35, 0.55, 0.35]
                } : {}}
                transition={{ repeat: Infinity, duration: 18 }}
                className="absolute w-72 h-72 rounded-full border border-dashed border-gold-400/10 flex items-center justify-center pointer-events-none"
              />

              {isPlaying ? (
                // Playing state
                <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                  <div 
                    className="w-16 h-16 rounded-full bg-black/70 border border-gold-400/40 flex items-center justify-center text-gold-450 animate-pulse cursor-pointer shadow-lg hover:shadow-gold-500/10 hover:border-gold-300 transition-all"
                    onClick={() => setIsPlaying(false)}
                  >
                    <Pause className="w-5 h-5 text-gold-300 fill-gold-300" />
                  </div>
                  <div className="text-center space-y-1">
                    <span className="inline-block px-2.5 py-1 text-[9px] font-mono font-bold uppercase rounded bg-gold-450/20 text-gold-350 border border-gold-450/30 animate-pulse">
                      STREAMING AI CORE ENGINE
                    </span>
                    <p className="text-xs text-gray-400 font-light italic">Synthesizing modern generative visuals in real-time...</p>
                  </div>

                  {/* Soundwave bounce metrics visualization */}
                  <div className="flex gap-1.5 h-10 items-end pt-2">
                    {[...Array(16)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={isPlaying ? {
                          height: [10, Math.random() * 30 + 8, Math.random() * 20 + 5, 10]
                        } : { height: 10 }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.035 }}
                        className="w-1 bg-gold-400/80 rounded-full"
                      />
                    ))}
                  </div>

                </div>
              ) : (
                // Play trigger
                <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(195,154,59,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 rounded-full bg-gold-500 text-black flex items-center justify-center shadow-xl cursor-pointer border border-[#faeb9a]"
                  >
                    <Play className="w-7 h-7 fill-black translate-x-0.5 text-black" />
                  </motion.button>
                  
                  <div className="text-center space-y-1.5">
                    <span className="text-[10px] tracking-widest font-mono uppercase text-gold-300 font-bold block">ENGAGE PLAYBACK CONTROLS</span>
                    <p className="text-xs text-gray-400 font-light">Interactive Digital Showcase ({activeReel.duration})</p>
                  </div>
                </div>
              )}

              {/* Bottom specification widgets */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between z-20 text-[10px] font-mono text-gray-400">
                <span className="flex items-center gap-1.5 text-gold-400 font-bold">
                  <Film className="w-3.5 h-3.5" /> {activeReel.ratio}
                </span>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 cursor-pointer hover:text-white" onClick={() => setSoundOn(!soundOn)}>
                    <Volume2 className={`w-3.5 h-3.5 ${soundOn ? 'text-gold-400' : 'text-gray-600 line-through'}`} /> {soundOn ? 'SOUND ACTIVE' : 'MUTED'}
                  </span>
                  <span>{activeReel.duration}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Reel specs details columns */}
          <div className="lg:col-span-4 text-left flex flex-col justify-between h-full space-y-6">
            
            <div className="space-y-6">
              <span className="text-[9px] uppercase font-mono text-gray-500 tracking-widest block font-bold">REEL GENERAL LEDGER</span>
              
              <div className="space-y-2.5">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-wide">
                  {activeReel.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  {activeReel.tagline}
                </p>
              </div>

              {/* Tools tags */}
              <div className="space-y-3 pt-5 border-t border-white/[0.04]">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold-300 font-bold block">INTEGRATED MODEL SUITE:</span>
                <div className="flex flex-wrap gap-2">
                  {activeReel.toolSet.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-lg border border-gold-500/10 bg-gold-500/5 text-[10px] font-mono text-gray-300 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-gold-400 shrink-0" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategy estimation */}
            <div className="p-6 rounded-2xl bg-[#09090c]/80 border border-white/[0.04] space-y-2.5 backdrop-blur-sm shadow-xl">
              <span className="text-[9px] uppercase font-mono text-gold-400 tracking-widest block font-bold">89 STUDIO ESTIMATE</span>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                By synthesizing custom cinematic content loops server-side, 89 Studio allows ambitious brands to run premium high-engagement advertisements 24/7.
              </p>
            </div>

          </div>

        </div>

        {/* Divider / Spacer */}
        <div className="my-28 border-t border-white/[0.04]" />

        {/* Cinematic Grid of Capabilities mapping exactly the user's reference mockup */}
        <div id="ai-content-studio-grid" className="space-y-16">
          <div className="text-left space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-gold-400/90 font-bold block">
              Capabilities Grid
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
              AI Asset Production Hierarchy
            </h3>
            <p className="max-w-xl text-xs sm:text-sm text-gray-455 font-light leading-relaxed border-l-2 border-gold-500/30 pl-5">
              Every content module utilizes specialized generative models paired with human oversight to guarantee cinematic compliance, high-resolution upscaling, and brand aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {studioCapabilities.map((cap, idx) => {
              const CapIcon = cap.icon;
              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="group relative p-8 rounded-xl bg-[#070709]/75 border border-white/[0.04] p-8 hover:border-gold-400/35 backdrop-blur-md hover:shadow-[0_0_50px_rgba(195,154,59,0.06)] hover:bg-[#070709] transition-all duration-300 text-left flex flex-col justify-between"
                >
                  {/* Subtle golden corner indicator dot */}
                  <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-gold-500/20 group-hover:bg-gold-400 group-hover:scale-125 transition-all duration-300" />
                  
                  <div className="space-y-6">
                    {/* Header: Icon box + Index number */}
                    <div className="flex items-center gap-4">
                      {/* Box styled exactly like screenshot */}
                      <div className="w-10 h-10 rounded-lg bg-gold-400/5 border border-gold-400/15 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300 shadow-sm">
                        <CapIcon className="w-4.5 h-4.5 text-gold-400 group-hover:text-black transition-colors" />
                      </div>
                      <span className="text-[11px] font-mono text-gray-500 tracking-widest font-semibold">
                        {cap.id}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-2">
                      <h4 className="font-serif text-lg text-white tracking-wide group-hover:text-gold-300 transition-colors">
                        {cap.title}
                      </h4>
                      <p className="text-[9px] uppercase font-mono tracking-widest text-gold-400 font-bold leading-normal">
                        {cap.subtitle}
                      </p>
                    </div>

                    {/* Bullet list styled exactly like screenshot (small square placeholder bullets) */}
                    <ul className="space-y-3 pt-4 border-t border-white/[0.03]">
                      {cap.bullets.map((bullet, bidx) => (
                        <li key={bidx} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed font-light font-sans">
                          <span className="text-gold-500 shrink-0 select-none text-[8px] mt-0.5">▪</span>
                          <span className="group-hover:text-gray-300 transition-colors">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
