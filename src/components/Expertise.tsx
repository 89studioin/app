import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  Globe, 
  Cpu, 
  Instagram, 
  Target, 
  Database, 
  RefreshCw, 
  Smartphone, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  X,
  Sparkles
} from 'lucide-react';
import { ExpertiseItem } from '../types';

interface ExpertiseProps {
  onOpenProposal: () => void;
}

const getBannerImage = (id: string) => {
  switch (id) {
    case 'whatsapp-automation':
      return '/src/assets/images/gourmet_dining_1779572430286.png';
    case 'high-converting-websites':
      return '/src/assets/images/luxury_real_estate_1779572390757.png';
    case 'ai-chatbot-systems':
      return '/src/assets/images/futuristic_education_1779572410828.png';
    case 'performance-instagram-ads':
      return '/src/assets/images/luxury_jewelry_1779572449087.png';
    case 'click-to-whatsapp-funnels':
      return '/src/assets/images/cinematic_hero_bg_1779572469012.png';
    case 'whatsapp-crm-integration':
      return '/src/assets/images/gourmet_dining_1779572430286.png';
    case 'smart-follow-up-sequences':
      return '/src/assets/images/cinematic_hero_bg_1779572469012.png';
    case 'android-app-development':
      return '/src/assets/images/luxury_real_estate_1779572390757.png';
    case 'complete-business-kit':
      return '/src/assets/images/luxury_jewelry_1779572449087.png';
    default:
      return '/src/assets/images/cinematic_hero_bg_1779572469012.png';
  }
};

export default function Expertise({ onOpenProposal }: ExpertiseProps) {
  const [selectedTopic, setSelectedTopic] = useState<ExpertiseItem | null>(null);

  const expertiseData: ExpertiseItem[] = [
    {
      id: 'whatsapp-automation',
      title: 'WhatsApp Automation',
      description: 'Our hero offer. Auto-replies, follow-ups, chatbots, bulk messaging, and CRM integration via Official WhatsApp API.',
      longDescription: 'Turn WhatsApp into your most productive asset. Build compliant automated message protocols, smart conversational logic, interactive catalogs, and broadcast campaigns fully integrated with official Meta infrastructure.',
      bulletPoints: [
        'Official WhatsApp Cloud API & Template approval setup',
        'Interactive quick-replies, message-menus & button maps',
        'Instantaneous automated broadcasts & cold lead reactivation metrics',
        'Built-in Opt-in & compliance security layers'
      ],
      metrics: [
        { value: '98%', label: 'Average Broadcast Open Rate' },
        { value: '3.4x', label: 'Average Engagement Lift' }
      ]
    },
    {
      id: 'high-converting-websites',
      title: 'High-Converting Websites',
      description: 'Premium landing pages and websites designed to convert visitors into leads with zero friction.',
      longDescription: 'Every vector, line, and delay engineered strictly to capture focus. We synthesize contemporary arts with custom React architectures, setting you miles ahead of standard template designs.',
      bulletPoints: [
        'Next-generation React combined with Vite optimization',
        'Fluid custom layout animations with motion dynamics',
        'Top-tier Core Web Vitals and SEO audit scores',
        'Built-in modern CRM integrations & lead ingestion endpoints'
      ],
      metrics: [
        { value: '185%', label: 'Inbound Conversion Surge' },
        { value: '<0.3s', label: 'Median First Contentful Paint' }
      ]
    },
    {
      id: 'ai-chatbot-systems',
      title: 'AI Chatbot Systems',
      description: 'Intelligent virtual agents that qualify leads, answer FAQs, and book appointments 24/7.',
      longDescription: 'Uncompromised real-time response capability. Deploy semantic AI agents equipped with local business details and custom scheduling tools that nurture leads perfectly round-the-clock.',
      bulletPoints: [
        'Dynamic contextual knowledge database training',
        'Spontaneous multi-lingual voice & text handling',
        'Fluid automated scheduling & Google Calendar writebacks',
        'Zero-friction escalation triggers for human operators'
      ],
      metrics: [
        { value: '84%', label: 'Autonomous Lead Qualification' },
        { value: '24/7', label: 'Constant Client Ingestion' }
      ]
    },
    {
      id: 'performance-instagram-ads',
      title: 'Performance Instagram Ads',
      description: 'Data-driven ad campaigns (3 ads weekly) designed strictly for ROI, not vanity metrics.',
      longDescription: 'Reach the right audience with premium cinematic storytelling. Our targeted strategic formats capture attention directly in social dynamic feeds, driving conversion rather than empty likes.',
      bulletPoints: [
        '3 bespoke premium social video ads edited weekly',
        'High-converting hook writing and script iteration',
        'Detailed interest and behavior targeting strategies',
        'Rigorous testing of assets and direct pixel audits'
      ],
      metrics: [
        { value: '4.8x', label: 'Median Performance ROI' },
        { value: '-38%', label: 'Drop in Acquisition Spend' }
      ]
    },
    {
      id: 'click-to-whatsapp-funnels',
      title: 'Click-to-WhatsApp Ads Funnel',
      description: 'Turn paid ads into direct WhatsApp conversations. Skip the form, skip the drop-off — go straight to sales chat.',
      longDescription: 'Completely eliminate user-acquisition roadblocks. Route social feed interest straight into a direct contact conversation that maximizes conversion and ensures high-efficiency dialog.',
      bulletPoints: [
        'Custom prefilled response buttons for prompt action',
        'Automatic entry message sequences with state triggers',
        'Meta Conversions API tracker linking setups',
        'Direct tracking setup to trace click-to-client pipelines'
      ],
      metrics: [
        { value: '10x', label: 'Growth in Lead Conversions' },
        { value: '0s', label: 'Connection Stage Wait' }
      ]
    },
    {
      id: 'whatsapp-crm-integration',
      title: 'WhatsApp CRM Integration',
      description: 'Track every lead, manage every conversation, and never miss a follow-up. Your full pipeline in one dashboard.',
      longDescription: 'Turn loose message chains into unified client history trails. Connect client files, interest categories, progress status indicators, and contact timings in one beautifully synchronized command dashboard.',
      bulletPoints: [
        'Multi-agent messaging distribution & pipeline layout matrices',
        'Bespoke drag-and-drop opportunity phases',
        'Dynamic metadata tags and detailed activity histories',
        'Direct connection to spreadsheet or API database nodes'
      ],
      metrics: [
        { value: '100%', label: 'Opportunity Archival Assurance' },
        { value: '+42%', label: 'Administrative Speed boost' }
      ]
    },
    {
      id: 'smart-follow-up-sequences',
      title: 'Smart Follow-Up Sequences',
      description: 'Automated nurturing flows that turn cold leads into paying customers — without your team lifting a finger.',
      longDescription: 'Construct digital authority on autopilot. Design personalized sequence chains that feed customer prospects custom benefits, metrics, and special links over days or weeks.',
      bulletPoints: [
        'Multi-stage behavioral custom drip lines',
        'Branching dialogue triggers based on client interest profile',
        'Direct push metrics for custom content & promo links',
        'Automated re-engagement logic for ancient channels'
      ],
      metrics: [
        { value: '125%', label: 'Dormant Client Reclaiming' },
        { value: '0 hrs', label: 'Idle Employee Labor Required' }
      ]
    },
    {
      id: 'android-app-development',
      title: 'Android App Development',
      description: 'Custom mobile applications built for scale, speed, and exceptional user experience.',
      longDescription: 'Clean, native applications optimized for target speed, tactile responsiveness, and secure local data state. Build modular, scalable app architectures matching modern digital codes.',
      bulletPoints: [
        'Kotlin & Jetpack Compose native software development',
        'Smooth local caching & offline operations systems',
        'Intelligent real-time custom notification systems',
        'Top-flight Play Store deployment & audit assistance'
      ],
      metrics: [
        { value: '99.9%', label: 'Engineered Server Uptime' },
        { value: 'Native', label: 'Layout Refresh Speed' }
      ]
    },
    {
      id: 'complete-business-kit',
      title: 'Complete Business Kit',
      description: 'Logo, brand identity, and social media setup. Everything you need to look like a market leader.',
      longDescription: 'Instill instantaneous high-net-worth customer trust. A pristine system framework of design typography guidelines, modern business assets, high resolution assets, and social banners.',
      bulletPoints: [
        'Bespoke visual logo assets vector files package',
        'Custom font pairing, modern aesthetic style booklet',
        'Ready Social platform profile assets & frame layouts',
        'Professional business proposal and system card mockups'
      ],
      metrics: [
        { value: 'Elite', label: 'Market Trust Alignment' },
        { value: '100%', label: 'Sensory Brand Cohesion' }
      ]
    }
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case 'whatsapp-automation':
        return <MessageSquare className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />;
      case 'high-converting-websites':
        return <Globe className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />;
      case 'ai-chatbot-systems':
        return <Cpu className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />;
      case 'performance-instagram-ads':
        return <Instagram className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />;
      case 'click-to-whatsapp-funnels':
        return <Target className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />;
      case 'whatsapp-crm-integration':
        return <Database className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />;
      case 'smart-follow-up-sequences':
        return <RefreshCw className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />;
      case 'android-app-development':
        return <Smartphone className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />;
      case 'complete-business-kit':
        return <Briefcase className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />;
    }
  };

  return (
    <section
      id="expertise"
      className="relative py-28 md:py-36 bg-[#030304] overflow-hidden scroll-mt-24"
    >
      {/* Cinematic Background Image Underlay specific to this section */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-15 mix-blend-color-dodge bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("/src/assets/images/cinematic_hero_bg_1779572469012.png")' }}
      />
      
      {/* Ambient gold spotlights for cinematic visual layout */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gold-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gold-600/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Grid Mesh */}
      <div className="absolute inset-0 grid-bg-mesh opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block with exactly the screenshot design details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20 md:mb-28 text-left">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-400/90 font-semibold flex items-center gap-1.5">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              Technology that works <br />
              <span className="gold-text-gradient italic font-light">as hard as you do.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed border-l-2 border-gold-500/30 pl-5">
              We deliver sophisticated digital infrastructure for local businesses. No fluff, just scalable systems designed to generate revenue.
            </p>
          </div>

        </div>

        {/* 3x3 Grid responsive to desktop/mobile constraints */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {expertiseData.map((exp, idx) => {
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                onClick={() => setSelectedTopic(exp)}
                className="group relative p-8 rounded-xl bg-black/55 border border-white/[0.04] hover:border-gold-400/40 backdrop-blur-md hover:shadow-[0_0_40px_rgba(195,154,59,0.08)] hover:bg-[#070709] transition-all duration-300 text-left cursor-pointer flex flex-col justify-between min-h-[290px]"
              >
                {/* Visual indicator lines & background hover sheet */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl pointer-events-none" />
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-gold-500/30 group-hover:bg-gold-400 group-hover:scale-125 transition-all duration-300" />

                <div className="space-y-6">
                  {/* Icon box tailored with a luxurious modern border */}
                  <div className="w-11 h-11 rounded-lg bg-gold-400/5 border border-gold-400/15 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300 shadow-md">
                    {getIcon(exp.id)}
                  </div>

                  <div className="space-y-2.5">
                    <h3 className="font-serif text-lg md:text-xl text-white tracking-wide group-hover:text-gold-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.03] flex items-center justify-between">
                  {/* Interactive details cue */}
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400/80 font-bold group-hover:text-white transition-colors flex items-center gap-1.5 pt-0.5">
                    Explore Details
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                  
                  {/* Floating count index in JetBrains Mono */}
                  <span className="text-[11px] font-mono text-gray-650 tracking-wider">
                    /0{idx + 1}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Cinematic Slide Drawer Modal for specific discipline capabilities */}
      <AnimatePresence>
        {selectedTopic && (
          <div id="capabilities-drawer" className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Dark glass backdrop with blur to lock focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTopic(null)}
              className="absolute inset-0 bg-[#030304]/90 backdrop-blur-md"
            />

            {/* Sidebar drawer sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 190 }}
              className="relative w-full max-w-lg h-full bg-[#070709] border-l border-gold-950/40 p-8 md:p-12 overflow-y-auto z-10 flex flex-col justify-between shadow-[0_0_100px_rgba(0,0,0,0.8)]"
            >
              {/* Backing image and mesh */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-5 mix-blend-color-dodge bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/src/assets/images/cinematic_hero_bg_1779572469012.png")' }}
              />
              <div className="absolute inset-0 grid-bg-mesh opacity-15 pointer-events-none" />
              
              <div className="space-y-8 relative z-10">
                {/* Close handle button */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedTopic(null)}
                    className="p-2.5 rounded-full border border-white/[0.05] hover:border-gold-450/30 text-gray-400 hover:text-gold-400 hover:bg-white/[0.02] cursor-pointer transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">SYSTEM OVERVIEW</span>
                </div>

                {/* Stunning Cinematic Cover Banner card */}
                <div className="relative aspect-[16/9] w-full rounded-xl border border-white/[0.08] overflow-hidden shadow-lg shadow-black/50 select-none">
                  <img 
                    src={getBannerImage(selectedTopic.id)}
                    alt={selectedTopic.title}
                    className="w-full h-full object-cover scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/[0.06] text-[8.5px] font-mono font-bold text-gold-300 uppercase tracking-widest shadow">
                    <Sparkles className="w-3 h-3 text-gold-400" /> Cinema Spec System
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex py-1 px-3 rounded-full border border-gold-500/20 bg-gold-500/5 text-[10px] text-gold-300 font-mono uppercase tracking-widest">
                    Infrastructure & Capabilities
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                    {selectedTopic.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                    {selectedTopic.longDescription}
                  </p>
                </div>

                {/* Performance stats inside drawer */}
                <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-white/[0.04]">
                  {selectedTopic.metrics.map((m, i) => (
                    <div key={i} className="space-y-1.5">
                      <span className="block text-2xl sm:text-3xl font-serif tracking-tight text-gold-300 font-light">{m.value}</span>
                      <span className="block text-[8px] text-gray-400 uppercase font-mono tracking-widest leading-normal">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bullets mapping */}
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase font-mono tracking-widest text-gold-200/95 font-semibold">Scope of Delivery</h4>
                  <ul className="space-y-3.5">
                    {selectedTopic.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex gap-3 text-xs text-gray-350 leading-relaxed font-light">
                        <CheckCircle2 className="w-4.5 h-4.5 text-gold-500 shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Drawer footer CTA */}
              <div className="pt-8 mt-12 border-t border-white/[0.04] space-y-4 relative z-10">
                <p className="text-[11px] text-gray-500 leading-relaxed">Let us instantiate this high-performance system for your corporate brand pipeline.</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedTopic(null);
                      onOpenProposal();
                    }}
                    className="flex-1 py-3 text-center text-xs font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-gold-450 to-gold-600 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-gold-500/10 cursor-pointer"
                  >
                    Draft Integration Proposal
                  </button>
                  <button
                    onClick={() => setSelectedTopic(null)}
                    className="flex-1 py-3 text-center text-xs font-semibold tracking-wider uppercase border border-white/[0.05] hover:border-gold-500/30 text-gray-450 hover:text-white rounded-full transition-all hover:bg-white/[0.01] cursor-pointer"
                  >
                    Dismiss
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
