import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Film, 
  Globe, 
  Award, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  MonitorPlay,
  Layout,
  Briefcase,
  Layers,
  Zap
} from 'lucide-react';
import PortfolioVideos from './PortfolioVideos';
import PortfolioWebsites from './PortfolioWebsites';
import PortfolioBrands from './PortfolioBrands';
import PortfolioAutomations from './PortfolioAutomations';

interface SelectedWorkProps {
  onOpenProposal: () => void;
}

export default function SelectedWork({ onOpenProposal }: SelectedWorkProps) {
  const [activeTab, setActiveTab] = useState<'video' | 'website' | 'brand' | 'automation'>('video');

  return (
    <section
      id="portfolio"
      className="relative py-28 md:py-36 bg-[#030304] overflow-hidden border-t border-[rgba(195,154,59,0.1)] scroll-mt-24"
    >
      {/* Background visual elements specifically designed for cinematic moodiness */}
      <div className="absolute inset-0 grid-bg-mesh opacity-20 pointer-events-none" />
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-tr from-gold-500/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[15%] right-[5%] w-[500px] h-[500px] bg-gradient-to-br from-gold-600/5 to-transparent blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Curated Master Portfolio Head */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24 pb-8 border-b border-white/[0.03]"
        >
          <div className="text-left space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block">
              Curated Masterpiece Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide">
              Selected <span className="gold-text-gradient italic font-light">Work Dossier</span>
            </h2>
            <p className="max-w-md text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Explore our real-world, high-converting digital assets across interactive interfaces, premium brandings, custom automation engines, and cinema-grade video.
            </p>
          </div>

          {/* Majestic Sliding Luxury Tab switcher */}
          <div className="flex flex-wrap gap-2 bg-[#09090c]/80 p-2 rounded-2xl border border-[rgba(195,154,59,0.12)] self-start lg:self-end backdrop-blur-md">
            {[
              { id: 'video', label: 'Cinema Video Video', icon: Film },
              { id: 'website', label: 'Sales Web Systems', icon: Globe },
              { id: 'brand', label: 'Identity Brand Kits', icon: Award },
              { id: 'automation', label: 'Autonomous AI Flow', icon: Cpu }
            ].map((tab) => {
              const active = activeTab === tab.id;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative px-4 py-3 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    active
                      ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  <TabIcon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                  
                  {active && (
                    <motion.div
                      layoutId="activePortfolioTabUnderlay"
                      className="absolute inset-0 rounded-xl bg-gold-400 -z-10 mix-blend-difference"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Target Rendering Canvas area with AnimatePresence */}
        <div id="portfolio-target-stage" className="min-h-[500px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {activeTab === 'video' && <PortfolioVideos />}
              {activeTab === 'website' && <PortfolioWebsites />}
              {activeTab === 'brand' && <PortfolioBrands />}
              {activeTab === 'automation' && <PortfolioAutomations />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Section footer with strategic Call To Action blueprint trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-24 pt-10 border-t border-white/[0.03] grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left"
        >
          <div className="md:col-span-8 space-y-2">
            <h4 className="font-serif text-xl text-white font-medium tracking-wide">
              Ready to command this grade of authority?
            </h4>
            <p className="text-xs sm:text-sm text-gray-405 font-light leading-relaxed max-w-2xl">
              Don't settle for template graphics or slow layout response layers. Let our team architect a robust, custom visual and automation system structured specifically for your high-ticket brand.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <button
              onClick={onOpenProposal}
              className="py-4 px-8 text-xs font-bold tracking-widest uppercase text-black bg-gradient-to-r from-gold-450 to-gold-600 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-gold-500/10 cursor-pointer flex items-center gap-2 group"
            >
              Draft Integration Proposal
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
