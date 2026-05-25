import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  Smartphone, 
  Check, 
  ChevronRight, 
  Sparkles, 
  ExternalLink,
  MessageSquare,
  Compass,
  ArrowUpRight,
  MousePointerClick
} from 'lucide-react';

interface WebsiteProject {
  id: string;
  title: string;
  description: string;
  niche: string;
  tagline: string;
  bgGradient: string;
  desktopBg: string; // Tailored styled abstract gradient matching modern aesthetics
  mobileBg: string;
  previewImage: string;
  includedFeatures: string[];
  mockStats: { value: string; label: string }[];
}

export default function PortfolioWebsites() {
  const [selectedSite, setSelectedSite] = useState<string>('real-estate');
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  const websiteProjects: WebsiteProject[] = [
    {
      id: 'real-estate',
      title: 'Aurelia Modern Luxury Estates',
      niche: 'Real Estate Website',
      description: 'Modern luxury UI with automated inquiry system, high resolution aerial imagery grids, and interactive vector maps.',
      tagline: 'High-end estates meets automated client classification pipelines.',
      bgGradient: 'from-[#121118] via-[#211a0c] to-[#040406]',
      desktopBg: 'bg-gradient-to-b from-[#1c1c1f] via-gold-950/20 to-[#0e0e11]',
      mobileBg: 'bg-gradient-to-b from-[#18181b] via-[#2b2413] to-[#0c0c0e]',
      previewImage: '/src/assets/images/luxury_real_estate_1779572390757.png',
      includedFeatures: [
        'Cinematic UI', 'Scroll Animations', 'AI Chatbot', 
        'WhatsApp API', 'Lead Funnel Integrations', 'CRM Integration', 
        'SEO Optimization', 'Fast Loading (<0.3s)', 'Conversion Tracking'
      ],
      mockStats: [
        { value: '4.8%', label: 'Lead Ingestion Rate' },
        { value: '78%', label: 'Qualified via Chatbot' }
      ]
    },
    {
      id: 'coaching',
      title: 'Apex Coaching Institute',
      niche: 'Coaching Institute Website',
      description: 'Admissions automation with built-in AI tutor chatbot, dynamic syllabus explore guides and booking widget integration.',
      tagline: 'Automate admissions and student inquiries 24/7.',
      bgGradient: 'from-[#060b0c] via-[#102327] to-[#040405]',
      desktopBg: 'bg-gradient-to-b from-[#091517] via-emerald-950/20 to-[#050b0c]',
      mobileBg: 'bg-gradient-to-b from-[#0e0e10] via-[#052d2f] to-[#040607]',
      previewImage: '/src/assets/images/futuristic_education_1779572410828.png',
      includedFeatures: [
        'AI Chatbot Admissions', 'Interactive Syllabus Maps', 'Scroll Animations', 
        'WhatsApp Calendar Integration', 'Instant Lead Funnels', 'Fast Loading', 
        'Conversion Tracking', 'SEO Optimization'
      ],
      mockStats: [
        { value: '+140%', label: 'Enrollment Conversion Growth' },
        { value: '3,200 hrs', label: 'Saved Admin Workloads' }
      ]
    },
    {
      id: 'restaurant',
      title: 'Estella Gastronomy & Mixology',
      niche: 'Restaurant Ordering Website',
      description: 'Ultra-luxurious dark menu navigation with automated ordering triggers and instant WhatsApp shopping cart checkout integration.',
      tagline: 'Menu automation + seamless WhatsApp direct orders.',
      bgGradient: 'from-[#121118] via-[#2d1111] to-[#040406]',
      desktopBg: 'bg-gradient-to-b from-[#1a1212] via-rose-950/20 to-[#0a0606]',
      mobileBg: 'bg-gradient-to-b from-[#0c0a0a] via-[#350f0f] to-[#040202]',
      previewImage: '/src/assets/images/gourmet_dining_1779572430286.png',
      includedFeatures: [
        'Cinematic Food Grid UI', 'WhatsApp Ordering Flow', 'Scroll Animations', 
        'Lead Funnels', 'Insta-Cart Checkout Routing', 'SEO Optimization', 
        'Fast Loading', 'CRM Integration'
      ],
      mockStats: [
        { value: '3.1x', label: 'Growth in Ordering Volumes' },
        { value: '2.5 min', label: 'Average Delivery Confirmation Time' }
      ]
    },
    {
      id: 'jewelry',
      title: 'Vesper Luxury Jewelry Brand',
      niche: 'Jewelry Brand Website',
      description: 'Ultra-high visual luxury showcase featuring before/after model highlights and direct WhatsApp custom concierge booking channels.',
      tagline: 'Crafting unforgettable premium branding and smooth sales.',
      bgGradient: 'from-[#121118] via-[#241a0d] to-[#040406]',
      desktopBg: 'bg-gradient-to-b from-[#1a1510] via-amber-950/20 to-[#0c0905]',
      mobileBg: 'bg-gradient-to-b from-[#0d0d0c] via-[#3a2c11] to-[#040403]',
      previewImage: '/src/assets/images/luxury_jewelry_1779572449087.png',
      includedFeatures: [
        'Cinematic UI Layouts', 'Scroll Animations', 'Concierge AI Chatbot', 
        'WhatsApp VIP Channel', 'Lead Funnels', 'CRM Pipeline Tracker', 
        'Fast Loading', 'SEO Optimization', 'Conversion Tracking'
      ],
      mockStats: [
        { value: '62%', label: 'Loyal VIP Client Retainership' },
        { value: 'Elite', label: 'Brand Prestige Index' }
      ]
    }
  ];

  const activeSite = websiteProjects.find(s => s.id === selectedSite) || websiteProjects[0];

  // Simulating automated layout scroll inside preview device
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isScrolling) {
      interval = setInterval(() => {
        setScrollOffset(prev => {
          if (prev >= 150) return 0;
          return prev + 1.2;
        });
      }, 35);
    } else {
      setScrollOffset(0);
    }
    return () => clearInterval(interval);
  }, [isScrolling]);

  return (
    <div className="space-y-16 py-12">
      {/* Header section with User specifications */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        <div className="lg:col-span-8 space-y-3">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-400 font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            Website Portfolio Section
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
            Websites that behave <br />
            <span className="gold-text-gradient italic font-light">like sales teams.</span>
          </h2>
          <p className="max-w-xl text-[10px] sm:text-xs uppercase font-mono text-gold-300 font-bold tracking-widest pl-5 border-l-2 border-gold-500/20">
            Luxury high-converting business websites built for maximum retention.
          </p>
        </div>
        <div className="lg:col-span-4 lg:pt-8">
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
            We bypass outdated standard formats. We design custom Web UI layouts that capture focus, qualify interest via automated chatbots, and write leads straight into WhatsApp pipelines.
          </p>
        </div>
      </div>

      {/* Grid containing Showcase Cards and interactive device previews */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column (4/12) - Interactive Featured Website Cards */}
        <div className="lg:col-span-4 text-left space-y-4">
          <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest block font-bold">
            Select Showcase Target
          </span>

          <div className="space-y-4">
            {websiteProjects.map((site) => {
              const active = selectedSite === site.id;
              return (
                <div
                  key={site.id}
                  onClick={() => {
                    setSelectedSite(site.id);
                    setScrollOffset(0);
                  }}
                  className={`group p-5 rounded-xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    active
                      ? 'border-gold-400 bg-gold-400/5 shadow-[0_0_25px_rgba(195,154,59,0.06)]'
                      : 'border-white/[0.04] bg-[#070709]/65 hover:border-gold-505/35'
                  }`}
                >
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-gold-500/5 to-transparent pointer-events-none" />
                  
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[9px] font-mono text-gold-400/90 font-bold uppercase tracking-wider block mb-1">
                        {site.niche}
                      </span>
                      <h4 className="font-serif text-base sm:text-lg text-white group-hover:text-gold-300 transition-colors">
                        {site.title}
                      </h4>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                      active ? 'bg-gold-500 border-gold-500 text-black' : 'border-white/[0.08] text-gray-500 group-hover:border-gold-500 group-hover:text-gold-400'
                    }`}>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                    {site.description}
                  </p>

                  {/* Active highlight metadata */}
                  {active && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-gold-500/10 grid grid-cols-2 gap-4"
                    >
                      {site.mockStats.map((stat, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <span className="block text-xl font-serif text-white font-mono tracking-tight">{stat.value}</span>
                          <span className="block text-[8px] text-gray-500 uppercase font-mono tracking-widest">{stat.label}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column (8/12) - High-Fidelity Device Chassis Mockups */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase block">
              Dual-Device Responsive Mockup Frame // {activeSite.title}
            </span>

            {/* Scroll simulation controls */}
            <button
              onClick={() => setIsScrolling(!isScrolling)}
              className={`flex items-center gap-1.5 py-1 px-3 rounded-md text-[10px] font-mono uppercase tracking-widest transition-all cursor-pointer border ${
                isScrolling 
                  ? 'border-gold-400 bg-gold-400/10 text-gold-300 animate-pulse' 
                  : 'border-white/[0.05] text-gray-400 hover:text-white'
              }`}
            >
              <MousePointerClick className="w-3.5 h-3.5" />
              {isScrolling ? 'SCROLL ACTIVE // CLICK OUT' : 'SIMULATE ACCENT SCROLL'}
            </button>
          </div>

          {/* Device Stage container */}
          <div className="relative aspect-[16/10] w-full bg-[#050507] rounded-3xl border border-white/[0.04] shadow-[0_0_80px_rgba(0,0,0,0.85)] p-4 sm:p-8 flex items-center justify-center overflow-hidden">
            
            {/* Soft Ambient spotlights underlay specific to background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-gold-500/5 to-transparent blur-[120px] rounded-full pointer-events-none transition-all duration-700" />

            {/* DESKTOP DEVICE CHASSIS (Takes center-left 70% width) */}
            <div className="absolute left-[3%] top-[8%] w-[72%] aspect-[16/10] bg-black rounded-2xl border border-white/[0.08] shadow-2xl overflow-hidden flex flex-col z-10 transition-all duration-500 group">
              {/* Browser Status Bar */}
              <div className="h-6 bg-[#0f0f12] border-b border-white/[0.04] px-4 flex items-center justify-between text-[10px] font-mono text-gray-500 relative">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/20" />
                </div>
                <div className="text-[8px] bg-black/45 px-6 rounded border border-white/[0.02] py-0.5">
                  https://{activeSite.id}.89studio.in
                </div>
                <div className="w-4" />
              </div>

              {/* Rendered Browser Page simulated canvas view */}
              <div className="flex-1 overflow-hidden relative p-4 flex flex-col justify-between">
                
                {/* Embedded scroll offset under simulated glass view */}
                <div 
                  className="absolute inset-x-0 top-0 transition-all duration-350 ease-out z-10 w-full"
                  style={{ transform: `translateY(-${scrollOffset}px)` }}
                >
                  <div className="relative min-h-[500px] w-full p-6 text-left flex flex-col justify-between">
                    <div className="absolute inset-0 bg-black/50 z-0" />
                    
                    <img 
                      src={activeSite.previewImage} 
                      alt={activeSite.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 z-[-1]"
                      referrerPolicy="no-referrer"
                    />

                    <div className="space-y-4 relative z-10">
                      <span className="text-[7px] tracking-widest text-[#faeb9a] font-mono font-bold uppercase p-1 rounded bg-[#faeb9a]/10 border border-[#faeb9a]/20 inline-block">
                        {activeSite.niche} • ACTIVE PREVIEW
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wide font-semibold leading-tight drop-shadow-md">
                        {activeSite.title}
                      </h3>
                      <p className="text-[10px] text-gray-250 leading-relaxed font-light max-w-sm drop-shadow">
                        {activeSite.tagline}
                      </p>

                      {/* Simple aesthetic grid inside page */}
                      <div className="grid grid-cols-2 gap-3 pt-2 max-w-xs">
                        <div className="p-2 border border-white/[0.08] rounded-lg bg-black/85 backdrop-blur-sm">
                          <span className="block text-xs font-mono font-bold text-gold-400">99.9% FCP</span>
                          <span className="block text-[7px] text-gray-405 font-mono">OPTIMAL PATH</span>
                        </div>
                        <div className="p-2 border border-white/[0.08] rounded-lg bg-black/85 backdrop-blur-sm">
                          <span className="block text-xs font-mono font-bold text-gold-400">0.25S ACCEL</span>
                          <span className="block text-[7px] text-gray-405 font-mono">CDN EDGE NODE</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-4 border-t border-white/[0.1] relative z-10 mt-12 bg-black/70 p-3 rounded-lg">
                      <h4 className="text-[10px] font-serif text-[#faeb9a] font-bold">Automated Client Funnel Integration</h4>
                      <p className="text-[8px] text-gray-300 leading-relaxed font-light">
                        Fully integrated with {activeSite.mockStats[0].label} ({activeSite.mockStats[0].value}) and calibrated to instantly guide high-ticket visitors.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Aesthetic Backdrop dynamic gradients inside browser */}
                <div className="absolute inset-0 z-0 bg-black pointer-events-none" />
                <div className="absolute inset-0 grid-bg-mesh opacity-20 pointer-events-none" />

                {/* Glowing lens mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-20" />

              </div>
            </div>

            {/* MOBILE DEVICE CHASSIS (Overlaps center-right 24% width) */}
            <div className="absolute right-[6%] bottom-[12%] w-[21%] aspect-[9/18] bg-black rounded-[24px] border border-white/[0.1] shadow-2xl overflow-hidden flex flex-col z-25 transition-all duration-500">
              
              {/* Speaker & camera bezel */}
              <div className="h-5 bg-black flex items-center justify-center relative">
                <div className="w-10 h-3 bg-white/5 rounded-full border border-white/[0.02]" />
                <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white/10" />
              </div>

              {/* Mobile screen canvas */}
              <div className="flex-1 overflow-hidden relative p-3 flex flex-col justify-between">
                
                {/* Simulated vertical offset */}
                <div 
                  className="absolute inset-[1px] transition-all duration-350 ease-out z-10 rounded-[20px] overflow-hidden"
                  style={{ transform: `translateY(-${scrollOffset * 1.5}px)` }}
                >
                  <div className="relative min-h-[350px] p-4 text-left flex flex-col justify-between">
                    <div className="absolute inset-0 bg-black/60 z-0" />
                    
                    <img 
                      src={activeSite.previewImage} 
                      alt={activeSite.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 z-[-1]"
                      referrerPolicy="no-referrer"
                    />

                    <div className="space-y-2 relative z-10">
                      <span className="text-[5px] tracking-widest text-[#faeb9a] font-mono uppercase block font-bold">{activeSite.niche}</span>
                      <h4 className="text-[10px] font-serif text-white font-medium leading-tight">{activeSite.title.split(' ')[0]} App</h4>
                      <p className="text-[7px] text-gray-300 leading-relaxed font-light">Adaptive layout built to force conversion and capture actions.</p>
                    </div>

                    <div className="p-1.5 border border-white/[0.1] bg-black/85 backdrop-blur-sm rounded text-[6px] text-left leading-normal text-gray-200 relative z-10">
                       ✨ Responsive metrics and custom booking triggers built directly in.
                    </div>
                  </div>
                </div>

                {/* Mobile screen backgrounds */}
                <div className="absolute inset-0 z-0 bg-black pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-20" />
                <div className="absolute inset-0 grid-bg-mesh opacity-15 pointer-events-none" />

                {/* Bottom home handle bar indicator */}
                <div className="h-1 w-12 bg-white/20 mx-auto rounded-full mt-auto relative z-25" />

              </div>
            </div>

          </div>

          {/* Included Features Grid list - perfectly matched to User criteria */}
          <div className="p-6 rounded-2xl bg-[#09090c]/70 border border-white/[0.04] space-y-4 text-left">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold-300 font-bold block">
              Essential Included Deliverables
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {activeSite.includedFeatures.map((feat) => (
                <div key={feat} className="flex gap-2 text-xs font-light text-gray-300 items-center">
                  <Check className="w-4 h-4 text-gold-400 shrink-0" strokeWidth="2.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
