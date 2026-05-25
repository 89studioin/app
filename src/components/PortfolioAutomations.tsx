import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  MessageSquare, 
  Database, 
  ArrowRight, 
  Instagram, 
  Globe, 
  CheckCircle, 
  Smartphone, 
  Calendar, 
  Network,
  Clock,
  Sparkles,
  Zap,
  Cpu
} from 'lucide-react';

interface JourneyStep {
  id: number;
  title: string;
  triggerLabel: string;
  description: string;
  icon: React.ComponentType<any>;
  outcomeSpec: string;
}

export default function PortfolioAutomations() {
  const [activeJourneyStep, setActiveJourneyStep] = useState<number>(1);

  const automationsData = [
    {
      title: 'WhatsApp Automation',
      icon: MessageSquare,
      bullets: ['Auto replies', 'Lead qualification', 'Booking system', 'CRM syncing'],
      tagline: 'Scale conversation pools with Meta-certified cloud pipelines.'
    },
    {
      title: 'AI Chatbots',
      icon: Bot,
      bullets: ['FAQ automation', 'Smart responses', 'Sales qualification', 'Customer support'],
      tagline: 'Semantic contextual agents trained on internal company wikis.'
    },
    {
      title: 'CRM Dashboards',
      icon: Database,
      bullets: ['Lead tracking', 'Analytics', 'Automated follow-ups', 'Performance reports'],
      tagline: 'Visualize full visual pipeline coordinates and close rates.'
    }
  ];

  const journeySteps: JourneyStep[] = [
    {
      id: 1,
      title: 'Customer Clicks Instagram Ad',
      triggerLabel: 'STIMULATE ACQUISITION',
      description: 'Prospect scrolls dynamic media feed, experiences brand authority via premium cinematic video, and triggers click Action.',
      icon: Instagram,
      outcomeSpec: 'Trigger registered via Meta Pixel / Conversions API'
    },
    {
      id: 2,
      title: 'AI Landing Page Opens',
      triggerLabel: 'CONVERT INBOUNDS',
      description: 'Prospect lands on high-converting static React layout containing bespoke custom animations and lightning loading speeds (<0.3s).',
      icon: Globe,
      outcomeSpec: 'Core Web vitals audit passed: 100% Perf'
    },
    {
      id: 3,
      title: 'WhatsApp Chatbot Responds Instantly',
      triggerLabel: 'ENGAGE PIPELINES',
      description: 'Instant compliance welcome sequence is pushed straight into prospects device. No forms, no wait time, direct dialogue.',
      icon: MessageSquare,
      outcomeSpec: 'Official WhatsApp Cloud API Template Approve'
    },
    {
      id: 4,
      title: 'AI Qualifies Customer',
      triggerLabel: 'FILTER PROSPECTS',
      description: 'Conversational agent queries prospect about targeted budgets, business industry, timeline expectations, and core pain targets.',
      icon: Sparkles,
      outcomeSpec: '98% accuracy matching qualifying rules'
    },
    {
      id: 5,
      title: 'Booking Confirmed Automatically',
      triggerLabel: 'SECURE ENROLLMENTS',
      description: 'Self-governing scheduler proposes slots, writes booked event to Google/Outlook Calendar, and returns verified confirmation.',
      icon: Calendar,
      outcomeSpec: 'Calendar Event written // Meeting Lock'
    },
    {
      id: 6,
      title: 'CRM Updated',
      triggerLabel: 'SECURE ARCHIVAL',
      description: 'Full profile dossiers (Contact info, qualification metrics, metadata, booking times) are saved to CRM dashboard instantly.',
      icon: Database,
      outcomeSpec: 'Lead Dossier Sync: 100% Verified'
    },
    {
      id: 7,
      title: 'Automated Follow-Up Sequence Starts',
      triggerLabel: 'AUTHORITY NURTURING',
      description: 'Custom behavioral sequence drips tailored strategy proposals and testimonials to prospect over days, maintaining interest.',
      icon: Zap,
      outcomeSpec: 'Drip lines registered: Day 1, 3, 7 active'
    }
  ];

  return (
    <div className="space-y-20 py-12">
      
      {/* SECTION 1: AUTOMATIONS SECTION */}
      <div className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-400 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              AI Automation Section
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              AI systems working <br />
              <span className="gold-text-gradient italic font-light">while you sleep.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-8">
            <p className="text-xs sm:text-sm text-gray-405 leading-relaxed font-light">
              Don't lose qualified business due to human scheduling delays. We program fully autonomous pipelines that capture, qualify, catalog, and nurture prospects 24 hours a day.
            </p>
          </div>
        </div>

        {/* Bento Grid layout for automations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {automationsData.map((aut, idx) => {
            const Icon = aut.icon;
            return (
              <div
                key={aut.title}
                className="group relative p-8 rounded-xl bg-[#08080a]/75 border border-white/[0.04] p-8 hover:border-gold-400/35 backdrop-blur-md hover:shadow-[0_0_50px_rgba(195,154,59,0.06)] hover:bg-[#070709] transition-all duration-300 text-left flex flex-col justify-between min-h-[300px]"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-500/5 to-transparent blur-xl" />
                <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-gold-400/20 group-hover:bg-gold-400 Transition-all" />

                <div className="space-y-6">
                  {/* Icon wrap */}
                  <div className="w-10 h-10 rounded-lg bg-gold-400/5 border border-gold-400/15 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300 shadow-sm">
                    <Icon className="w-4.5 h-4.5 text-gold-400 group-hover:text-black" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg md:text-xl text-white tracking-wide group-hover:text-gold-300 transition-colors">
                      {aut.title}
                    </h3>
                    <p className="text-xs text-gray-450 leading-relaxed font-light font-mono text-[9px] uppercase tracking-wider">
                      {aut.tagline}
                    </p>
                  </div>

                  {/* Bullet specifics */}
                  <div className="grid grid-cols-2 gap-x-2 gap-y-3 pt-4 border-t border-white/[0.03]">
                    {aut.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-2 text-xs font-light text-gray-450">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400/70" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.03] text-[9px] font-mono text-gray-500 flex justify-between">
                  <span>DEPLOYED // INSTANCE-0{idx+1}</span>
                  <span className="text-gold-400/90 font-bold uppercase flex items-center gap-1 group-hover:text-white transition-colors">
                    ACTIVE <Cpu className="w-3.5 h-3.5 animate-spin-slow" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/[0.04] my-16" />

      {/* SECTION 2: CLIENT EXPERIENCE SECTION */}
      <div className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-400 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Client Experience Section
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              What clients <br />
              <span className="gold-text-gradient italic font-light">actually experience.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-8">
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
              This represents an absolute walk-through demonstrating the exact client touch checkpoints. Explore individual checkpoints to view automatic action logs.
            </p>
          </div>
        </div>

        {/* Dynamic Journey Stepper roadmap flow layout and Details Panel combo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block (7/12) - Vertical timeline roadmap */}
          <div className="lg:col-span-7 text-left space-y-3 relative pl-6 border-l border-white/[0.06]">
            
            {journeySteps.map((step) => {
              const StepIcon = step.icon;
              const isActive = activeJourneyStep === step.id;
              
              return (
                <div 
                  key={step.id}
                  onClick={() => setActiveJourneyStep(step.id)}
                  className={`relative pl-8 pb-5 group cursor-pointer select-none transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-45 hover:opacity-85'}`}
                >
                  
                  {/* Outer point wrapper */}
                  <div className="absolute -left-[37px] top-1.5 z-10 flex items-center justify-center">
                    <div className={`w-[22px] h-[22px] rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isActive 
                        ? 'bg-gold-500 border-gold-500 scale-110 shadow-lg shadow-gold-500/20' 
                        : 'bg-black border-white/[0.1] text-gray-500 group-hover:border-gold-500 group-hover:text-gold-400'
                    }`}>
                      {isActive ? (
                        <CheckCircle className="w-3.5 h-3.5 text-black" strokeWidth="2.5" />
                      ) : (
                        <span className="text-[10px] font-mono font-bold">{step.id}</span>
                      )}
                    </div>
                  </div>

                  {/* Bullet cards details */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[8px] font-mono tracking-widest text-gold-400 uppercase font-black">
                        STEP // 0{step.id}
                      </span>
                      {isActive && (
                        <span className="text-[7px] font-mono bg-gold-400/10 text-gold-300 px-1.5 py-0.5 rounded border border-gold-400/20 animate-pulse">
                          ACTIVE PROCESS POINT
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-serif text-base sm:text-lg text-white group-hover:text-gold-300 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                </div>
              );
            })}

          </div>

          {/* Right Block (5/12) - Cinematic Details log readout */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {(() => {
                const step = journeySteps.find(s => s.id === activeJourneyStep) || journeySteps[0];
                const ActiveIcon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="p-8 rounded-2xl bg-[#09090c]/80 border border-gold-500/15 text-left space-y-6 relative overflow-hidden backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.85)]"
                  >
                    {/* Glowing highlight under detail */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-500/10 to-transparent blur-2xl" />
                    
                    {/* Visual icon frame */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gold-400/5 border border-gold-400/25 flex items-center justify-center">
                        <ActiveIcon className="w-5 h-5 text-gold-300" />
                      </div>
                      <span className="text-[10px] font-mono text-gray-500">EXPERIENCE STACK</span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-gold-400 font-bold block">
                        {step.triggerLabel}
                      </span>
                      <h4 className="text-xl font-serif text-white tracking-wide">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light pt-2">
                        {step.description}
                      </p>
                    </div>

                    {/* Automation outcome log parameters */}
                    <div className="pt-6 border-t border-white/[0.04] space-y-2 font-mono text-[10px]">
                      <span className="block text-gray-500 font-semibold tracking-wider">SYSTEM EXECUTION RECORD</span>
                      <div className="p-3 bg-black/60 rounded border border-white/[0.03] space-y-1.5">
                        <div className="flex justify-between text-[11px] text-gold-300 leading-normal">
                          <span>✓ {step.outcomeSpec}</span>
                        </div>
                        <div className="flex justify-between text-gray-600 leading-normal">
                          <span>Latency Speed</span>
                          <span>&lt;150ms // Instantaneous</span>
                        </div>
                      </div>
                    </div>

                    {/* Indicator controls */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 pt-4 border-t border-white/[0.02]">
                      <span>Checkpoints 0{activeJourneyStep}/07</span>
                      <button 
                        onClick={() => setActiveJourneyStep(prev => (prev === 7 ? 1 : prev + 1))}
                        className="text-gold-400 font-bold hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        Advance Simulation
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

        </div>

      </div>

    </div>
  );
}
