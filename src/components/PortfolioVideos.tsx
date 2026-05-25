import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  Video, 
  Film, 
  Sparkles, 
  Clock, 
  Tv, 
  Clapperboard, 
  Smartphone, 
  Volume2, 
  VolumeX,
  Layers,
  MonitorPlay
} from 'lucide-react';

interface VideoReel {
  id: string;
  title: string;
  category: string;
  duration: string;
  tagline: string;
  sourceLabel: string;
  vibeText: string;
  previewImage: string;
  isFeatured?: boolean;
}

export default function PortfolioVideos() {
  const [activeTab, setActiveTab] = useState<'all' | 'ai-sales' | 'corporate' | 'social'>('all');
  const [selectedVideo, setSelectedVideo] = useState<string>('featured');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const videoCategories = [
    {
      id: 'ai-sales',
      title: 'AI Sales Videos',
      description: 'Product launch reels, AI spokesperson videos, Promo advertisements, WhatsApp ad creatives, Real estate walkthroughs.',
      badges: ['Launch Reels', 'AI Spokespersons', 'Promo Ads', 'WhatsApp Ad Cards', 'Real Estate Walks']
    },
    {
      id: 'corporate',
      title: 'Corporate Videos',
      description: 'Company introductions, Brand story films, Internal training videos, Event highlights.',
      badges: ['Introductions', 'Brand Stories', 'Internal Guides', 'Event Highlights']
    },
    {
      id: 'social',
      title: 'Social Media Content',
      description: 'Instagram reels, YouTube shorts, TikTok edits, Viral hooks, Motion graphics.',
      badges: ['Instagram Reels', 'YouTube Shorts', 'TikTok Edits', 'Viral Hooks', 'Motion Graphics']
    }
  ];

  const videos: VideoReel[] = [
    {
      id: 'featured',
      title: 'Autonomous Real Estate Walkthrough & Drone Intro',
      category: 'ai-sales',
      duration: '1:15 Sec',
      tagline: 'Premium drone footage blended with synthesized cinematic gold light trails & AI voiceovers.',
      sourceLabel: 'Featured Vision Blueprint',
      vibeText: 'Cinema-Grade AI Synthesis, Anamorphic Scope, 4K Upscaled',
      previewImage: '/src/assets/images/luxury_real_estate_1779572390757.png',
      isFeatured: true
    },
    {
      id: 'reel-1',
      title: 'Luxury Watch Brand Holographic Product Launch',
      category: 'ai-sales',
      duration: '0:30 Sec',
      tagline: 'Viscous gold flows, floating gears, and photorealistic studio rendering aesthetics.',
      sourceLabel: 'Reel 01 // Product Launch',
      vibeText: 'High Contrast Liquid Gold Simulation',
      previewImage: '/src/assets/images/luxury_jewelry_1779572449087.png'
    },
    {
      id: 'reel-2',
      title: 'AI Spokesperson Series - Conversational Lead Funnel',
      category: 'ai-sales',
      duration: '0:45 Sec',
      tagline: 'Natural lip-sync spokesperson presenting bespoke strategy blueprints.',
      sourceLabel: 'Reel 02 // Spirtual Lead Nurture',
      vibeText: 'Photorealistic Digital Twin Casting',
      previewImage: '/src/assets/images/cinematic_hero_bg_1779572469012.png'
    },
    {
      id: 'reel-3',
      title: 'Dynamic Click-to-WhatsApp Social Feed Creative',
      category: 'social',
      duration: '0:15 Sec',
      tagline: 'High kinetic typography paired with interactive text-bubble simulations to force conversions.',
      sourceLabel: 'Reel 03 // Social Funnel',
      vibeText: 'Aggressive Hook Frame Editing',
      previewImage: '/src/assets/images/gourmet_dining_1779572430286.png'
    },
    {
      id: 'corporate-1',
      title: 'Enterprise Cyber Security Brand Narrative',
      category: 'corporate',
      duration: '2:10 Min',
      tagline: 'Sophisticated corporate documentary utilizing geometric wireframe shaders.',
      sourceLabel: 'Corporate 01 // Branding',
      vibeText: 'Formal Minimalist Tech Atmosphere',
      previewImage: '/src/assets/images/futuristic_education_1779572410828.png'
    },
    {
      id: 'ai-ad-1',
      title: 'Fintech Mobile App UI Walkthrough Promo',
      category: 'ai-sales',
      duration: '0:45 Sec',
      tagline: 'App interactions combined with luxurious gold light leaks and 3D device tracking.',
      sourceLabel: 'AI Ad 01 // UI Motion',
      vibeText: 'Precision Layout Motion Graphics',
      previewImage: '/src/assets/images/luxury_real_estate_1779572390757.png'
    },
    {
      id: 'motion-1',
      title: 'Infinite Floating Monograms Loop',
      category: 'social',
      duration: '0:20 Sec',
      tagline: 'Elegant brand asset loop modeled with dark chrome and gold reflections.',
      sourceLabel: 'Motion Graphics 01 // Art',
      vibeText: 'Bespoke Ambient Background Loop',
      previewImage: '/src/assets/images/luxury_jewelry_1779572449087.png'
    }
  ];

  const filteredVideos = activeTab === 'all' 
    ? videos.filter(v => !v.isFeatured) 
    : videos.filter(v => v.category === activeTab && !v.isFeatured);

  const activeVideoDetails = videos.find(v => v.id === selectedVideo) || videos[0];

  return (
    <div className="space-y-16 py-12">
      {/* Header section with User specifications */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        <div className="lg:col-span-7 space-y-3">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-400 font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
            Video Portfolio Section
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
            Cinema-grade visuals. <br />
            <span className="gold-text-gradient italic font-light">Engineered for attention.</span>
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pt-6">
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
            We operate at the convergence of generative cinema models, high-octane drone cinematography, and automated voiceover suites to produce reels that disrupt scrolling behaviors instantly.
          </p>
        </div>
      </div>

      {/* Categories block showcasing all sub-elements beautifully */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videoCategories.map((cat, idx) => (
          <div 
            key={cat.id}
            className="p-6 rounded-xl bg-[#09090c]/70 border border-white/[0.03] text-left hover:border-gold-500/20 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-500/5 to-transparent blur-xl" />
            <span className="text-xs font-mono text-gold-400 font-bold">/0{idx + 1}</span>
            <h3 className="font-serif text-lg text-white mt-1.5 mb-2 group-hover:text-gold-300 transition-colors">
              {cat.title}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light min-h-[50px] mb-4">
              {cat.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cat.badges.map(badge => (
                <span key={badge} className="text-[9px] font-mono px-2 py-1 rounded bg-white/5 border border-white/[0.04] text-gray-300">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Layout Grid: Featured block and Sub-grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (8/12) - Cinematic Player stage */}
        <div className="lg:col-span-8 space-y-4">
          <span className="text-[9px] font-mono text-gray-400 tracking-wider flex items-center gap-2 select-none uppercase">
            <MonitorPlay className="w-4 h-4 text-gold-400" />
            Active Cinematic Playback Stage // {activeVideoDetails.sourceLabel}
          </span>
          
          <div className="aspect-[16/9] w-full rounded-2xl border border-white/[0.05] bg-[#07070a] relative overflow-hidden group select-none shadow-[0_0_80px_rgba(0,0,0,0.9)] flex items-center justify-center p-6">
            
            {/* Dynamic visual ambient mesh under player */}
            <div className="absolute inset-0 bg-radial from-transparent via-black/80 to-black z-10" />
            
            {/* Real high-fidelity video poster preview blending layer */}
            <img 
              src={activeVideoDetails.previewImage}
              alt={activeVideoDetails.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-500 scale-100 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050510]/90 via-black/40 to-[#0e0c03]/30 duration-500" />
            
            {/* Cinematic visual particles representing actual cinemagraph loops */}
            <div className="absolute inset-[15%] rounded-full border border-gold-500/5 pointer-events-none filter blur-xl scale-120 animate-infinite bg-gradient-to-tr from-gold-500/5 to-transparent opacity-80" />
            <div className="absolute inset-0 scanline-ambient pointer-events-none opacity-[0.12]" />

            {isPlaying ? (
              <div className="relative z-20 flex flex-col items-center justify-center space-y-6 text-center max-w-md p-4">
                <div 
                  onClick={() => setIsPlaying(false)}
                  className="w-16 h-16 rounded-full bg-black/80 border border-gold-400/55 flex items-center justify-center text-gold-400 animate-pulse cursor-pointer hover:scale-105 transition-all shadow-lg"
                >
                  <Pause className="w-5 h-5 fill-gold-400 text-gold-400" />
                </div>
                
                <div className="space-y-2">
                  <span className="inline-block px-2 py-0.5 rounded bg-gold-400/20 text-[9px] font-mono font-black text-gold-300 tracking-widest uppercase border border-gold-400/30">
                    STREAMING PRE-RENDER
                  </span>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    AI synthesizers simulating the visual atmosphere: {activeVideoDetails.vibeText}.
                  </p>
                </div>

                {/* Animated Audio Equalizer nodes */}
                <div className="flex gap-1 h-8 items-end justify-center opacity-80">
                  {[...Array(12)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{
                        height: [6, Math.random() * 24 + 6, Math.random() * 16 + 4, 6]
                      }}
                      transition={{
                        duration: 0.45,
                        repeat: Infinity,
                        delay: i * 0.05
                      }}
                      className="w-0.75 bg-gold-400 rounded-full"
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="relative z-20 flex flex-col items-center justify-center space-y-4 text-center">
                <motion.button
                  whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(195,154,59,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 rounded-full bg-gold-500 text-black flex items-center justify-center shadow-2xl cursor-pointer border border-[#fef08a]"
                >
                  <Play className="w-8 h-8 fill-black translate-x-0.5 text-black" />
                </motion.button>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-300 font-bold block">
                    CLICK TO STREAM SEED
                  </span>
                  <p className="text-xs text-gray-400 font-light px-6">
                    Launch high-fidelity interactive playback simulator ({activeVideoDetails.duration})
                  </p>
                </div>
              </div>
            )}

            {/* Bottom hud overlays */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between z-20 text-[9px] font-mono text-gray-400">
              <span className="flex items-center gap-1 text-gold-400 font-bold">
                <Film className="w-3.5 h-3.5" /> 4K STREAM SVD-V2
              </span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsMuted(!isMuted)} 
                  className="cursor-pointer hover:text-white flex items-center gap-1.5 uppercase"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-red-400" />
                      Muted
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-gold-400" />
                      Audio Active
                    </>
                  )}
                </button>
                <span>{activeVideoDetails.duration}</span>
              </div>
            </div>

          </div>

          <div className="p-6 rounded-xl bg-black/40 border border-white/[0.03] text-left space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gold-300 font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Sequence Narrative Directive
            </h4>
            <p className="text-xs leading-relaxed font-light text-gray-400">
              {activeVideoDetails.tagline}
            </p>
          </div>

        </div>

        {/* Right Column (4/12) - Playlist / Visual cards */}
        <div className="lg:col-span-4 text-left space-y-6">
          <div className="flex flex-col space-y-3">
            <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest block font-bold">
              Cinematic Asset Playlist
            </span>
            
            {/* Direct selector buttons */}
            <div className="flex gap-1.5 flex-wrap">
              {['all', 'ai-sales', 'corporate', 'social'].map(t => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t as any)}
                  className={`text-[9px] font-mono px-2 py-1 rounded tracking-wider uppercase border transition-all cursor-pointer ${
                    activeTab === t 
                      ? 'border-gold-450 bg-gold-450/10 text-gold-300' 
                      : 'border-white/[0.05] text-gray-400 hover:text-white hover:border-gold-550/30'
                  }`}
                >
                  {t.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
            
            {/* Permanent top placement for the Featured Video */}
            <div 
              onClick={() => {
                setSelectedVideo('featured');
                setIsPlaying(false);
              }}
              className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer text-left block relative ${
                selectedVideo === 'featured'
                  ? 'border-gold-400/40 bg-gold-400/5'
                  : 'border-white/[0.03] bg-[#07070a]/60 hover:bg-white/[0.02]/30 hover:border-gold-500/20'
              }`}
            >
              <div className="absolute top-2.5 right-3 px-1.5 py-0.5 rounded bg-gold-400 text-black text-[7px] font-mono font-black uppercase">
                FEATURED
              </div>
              <span className="text-[8px] font-mono text-gray-500 font-bold block mb-1">DRONE + AI VOICEOVER</span>
              <h4 className="font-serif text-sm text-white tracking-wide mb-1 leading-snug">
                Autonomous Real Estate Walkthrough
              </h4>
              <p className="text-[10px] text-gray-400 leading-relaxed line-clamp-1 font-light">
                Property drone intro with dynamic AI cinematic motion overlay.
              </p>
            </div>

            {/* Scrollable grid matching mockup [ Reel 1 ] [ Reel 2 ] [ Reel 3 ] [ Corporate ] [ AI Ad ] [ Motion Graphics ] */}
            {filteredVideos.map((reel) => (
              <div
                key={reel.id}
                onClick={() => {
                  setSelectedVideo(reel.id);
                  setIsPlaying(false);
                }}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer text-left block relative ${
                  selectedVideo === reel.id
                    ? 'border-gold-400/40 bg-gold-400/5'
                    : 'border-white/[0.03] bg-black/40 hover:bg-[#07070a] hover:border-gold-500/20'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[8px] font-mono text-gold-400 font-bold uppercase">
                    {reel.sourceLabel.split(' // ')[1] || 'Sequence Reel'}
                  </span>
                  <span className="text-[8px] font-mono text-gray-500">{reel.duration}</span>
                </div>
                <h4 className="font-serif text-sm text-white tracking-wide mb-1 leading-snug">
                  {reel.title}
                </h4>
                <p className="text-[10px] text-gray-400 leading-relaxed line-clamp-1 font-light">
                  {reel.tagline}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}
