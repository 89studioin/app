import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Code, Compass, Zap, Check } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: 'Landscape & Sensory Workshop',
      tag: 'Phase 01',
      desc: 'We map the visual landscape. Through deliberate color contrast pairings, typographical auditing, and brand book alignment, we trace the precise stylistic position necessary to command market authority.',
      details: [
        'Establish direct user demographics metrics',
        'Inspect structural content hierarchy constraints',
        'Propose 3 refined typographic/layout configurations'
      ]
    },
    {
      title: 'High Contrast Design Sprints',
      tag: 'Phase 02',
      desc: 'We construct clean, ultra-responsive design blueprints. Avoiding purple-blue boilerplate gradients and generic grid elements, we craft custom SVG monograms, glassmorphism card layouts, and layout rhythm.',
      details: [
        'Detail high-fidelity layout assets in dark/gold theme configs',
        'Verify user flows and fluid interactive responsive targets',
        'Complete asset compression passes for instantaneous loadtimes'
      ]
    },
    {
      title: 'Interactive React Engineering',
      tag: 'Phase 03',
      desc: 'Our engineers transform ideas into production-level TypeScript files. Utilizing Vite for optimal compilation structures and Tailwind CSS for atomic layouts, we write highly semantic, dry, and modular modules.',
      details: [
        'Implement responsive, type-supported React hooks',
        'Wire fluid state managers & custom local transaction records',
        'Integrate motion/react engines on page transitions'
      ]
    },
    {
      title: 'Core-Web-Vital Auditing',
      tag: 'Phase 04',
      desc: 'A beautiful app is worthless if it lags. We perform intense core-web-vital audits, optimizing image render policies, blocking infinite rendering loops in lazy loaders, and ensuring perfect lighthouse compliance.',
      details: [
        'Secure 99+ Speed metrics on mobile client layouts',
        'Setup automated SEO tag injections & meta-structures',
        'Orchestrate instantaneous deployment pipelines'
      ]
    }
  ];

  return (
    <section
      id="process"
      className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-[rgba(195,154,59,0.1)]"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 grid-bg-mesh opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[350px] h-[350px] gold-glow-radial opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-left max-w-xl space-y-4 mb-16 md:mb-24"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest text-gold-500">
            Systematic Delivery Flow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide">
            Our Digital <span className="gold-text-gradient italic">Methodology</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
            Every pixel, timeline, and asset drop is systematically coordinated. We refuse templates — constructing tailored, scalable strategies for premium outcomes.
          </p>
        </motion.div>

        {/* Dynamic Split Step Controller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: List triggers */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((st, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={st.tag}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative group select-none ${
                    isActive
                      ? 'bg-[#0b0b0f] border-gold-450 shadow-md shadow-gold-500/5'
                      : 'bg-transparent border-transparent hover:border-[rgba(195,154,59,0.15)] hover:bg-[#060608]/50'
                  }`}
                >
                  {/* Left line activation indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-6 bottom-6 w-1 bg-gold-400 rounded-r-md" />
                  )}

                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? 'text-gold-400' : 'text-gray-500 group-hover:text-gold-400/60'}`}>
                      {st.tag}
                    </span>
                    <h3 className={`font-serif text-lg tracking-wide ${isActive ? 'text-white font-medium' : 'text-gray-400 group-hover:text-white'}`}>
                      {st.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right panel: Active view description box */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-10 rounded-3xl bg-[#09090c] border border-[rgba(195,154,59,0.2)] text-left relative min-h-[380px] flex flex-col justify-between"
              >
                {/* Micro ornamentations */}
                <div className="absolute top-6 right-6 text-xs text-gold-400 font-mono tracking-widest font-bold">
                  LEDGER {steps[activeStep].tag}
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400">
                      {activeStep === 0 && <Compass className="w-4.5 h-4.5" />}
                      {activeStep === 1 && <Eye className="w-4.5 h-4.5" />}
                      {activeStep === 2 && <Code className="w-4.5 h-4.5" />}
                      {activeStep === 3 && <Zap className="w-4.5 h-4.5" />}
                    </div>
                    <h4 className="font-serif text-2xl text-white font-medium tracking-wide">
                      {steps[activeStep].title}
                    </h4>
                  </div>

                  <p className="text-gray-350 text-sm font-light leading-relaxed font-sans">
                    {steps[activeStep].desc}
                  </p>
                </div>

                {/* Bullets lists */}
                <div className="space-y-3 pt-6 mt-6 border-t border-[rgba(195,154,59,0.08)]">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold-200 block">Deliverables / Auditable Assets</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {steps[activeStep].details.map((dt, i) => (
                      <div key={i} className="flex gap-2 text-xs text-gray-400 align-top font-light">
                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                        <span>{dt}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
