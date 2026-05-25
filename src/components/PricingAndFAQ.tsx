import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Check, Sparkles, Cpu, Zap } from 'lucide-react';

interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  priceLabel?: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  bannerImage: string;
  specCode: string;
  accentColor: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

export default function PricingAndFAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter Pass',
      tagline: 'Instant infrastructure to launch and capture fast-growth leads.',
      price: '₹1,000',
      originalPrice: '₹3,000',
      bannerImage: '/assets/images/luna_beauty_card_1779220091290.png',
      specCode: 'ST-01 // COLD TUNNEL CORE',
      accentColor: 'border-yellow-500/25 text-yellow-400',
      features: [
        'WhatsApp chatbot setup',
        'Basic automation flow',
        'Lead capture landing page',
        'Google Business setup',
        'Brand identity & logo',
        'Social media setup'
      ],
      ctaText: 'ACQUIRE STARTER CORE'
    },
    {
      name: 'Growth Nexus',
      tagline: 'The supreme automated sales machine designed for total market capture.',
      price: '₹2,000',
      originalPrice: '₹3,000',
      isPopular: true,
      bannerImage: '/assets/images/velocity_global_card_1779220129933.png',
      specCode: 'GR-02 // HIGH VELOCITY ENGINE',
      accentColor: 'border-gold-500/40 text-gold-400',
      features: [
        'Everything inside Starter',
        'Chatbot + smart follow-ups',
        'WhatsApp CRM setup',
        'Click-to-WhatsApp ads funnel',
        '3 Instagram ads weekly',
        'Monthly performance report'
      ],
      ctaText: 'LAUNCH GROWTH NEXUS'
    },
    {
      name: 'Pro Sovereign',
      tagline: 'Absolute enterprise monopoly. Completely custom system scope.',
      price: '₹3,000+',
      priceLabel: 'CUSTOM VALUE BASE',
      bannerImage: '/assets/images/premium_dark_gold_bg_1779221804869.png',
      specCode: 'PR-03 // ENTERPRISE MONOPOLY',
      accentColor: 'border-amber-500/30 text-amber-500',
      features: [
        'Everything inside Growth',
        'Full AI automation system',
        'Sales funnel setup',
        'Advanced AI agent training',
        'Custom Android app',
        'Dedicated account manager',
        'Priority support (24/7)'
      ],
      ctaText: 'COMMISSION ARCHITECT'
    }
  ];

  const faqs: FaqItem[] = [
    {
      question: "Why is 89 Studio pricing strategy-first rather than hour-based?",
      answer: "Hourly rates punish efficiency and encourage unnecessary bloat. By pricing transparently on an upfront value-and-deliverables foundation, we align our success directly with yours. You know exactly what you pays, when it lands, and the quality to anticipate."
    },
    {
      question: "Do you deliver custom code or use templates?",
      answer: "Every single page of 89 Studio's creations is generated from absolute scratch using raw high-performance React, Tailwind CSS, and optimized TypeScript engines. We completely avoid sluggish page builders or heavy WordPress themes that cause layout shifts and drag down performance metrics."
    },
    {
      question: "How do the WhatsApp AI agents behave – do they need supervision?",
      answer: "Our WhatsApp agents utilize serverless endpoints and highly optimized prompting. They are fully autonomous: greeting cold ad contacts, filtering qualified customer targets, and booking meetings without needing human interventions. If a user raises an irregular question, the AI flags it instantly to your staff's dashboard."
    },
    {
      question: "What represents the average delivery timeline?",
      answer: "A standard Starter Blueprint typically takes 2 to 3 weeks from workspace kick-off to handoff deployment. High-tier automated sales systems, including bespoke training, generally align in the 5 to 7 weeks timeframe, followed by constant pipeline integration guides."
    },
    {
      question: "Can we integrate our existing CRM platforms?",
      answer: "ABSOLUTELY. Through robust webhooks, server proxies, and API middlewares, we direct your lead flows, WhatsApp qualification logs, and calendar agendas seamlessly into HubSpot, Salesforce, Notion, or custom relational database systems."
    }
  ];

  return (
    <section id="pricing-and-faq" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-[rgba(195,154,59,0.1)]">
      {/* Mesh overlays and gradients */}
      <div className="absolute inset-0 grid-bg-mesh opacity-30 pointer-events-none" />
      <div className="absolute top-[30%] left-[5%] w-[450px] h-[450px] bg-gradient-to-tr from-gold-500/5 to-transparent blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-gold-600/5 to-transparent blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header content */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20 md:mb-24"
        >
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-400 font-bold block">
            TRANSPARENT VALUE ENGINE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide leading-tight">
            Flexible Strategic Investment
          </h2>
          <div className="text-lg sm:text-xl font-serif italic text-gold-300 font-light tracking-wide -mt-2">
            Serious returns.
          </div>
          <p className="text-gray-400 text-xs sm:text-sm font-light max-w-2xl mx-auto leading-relaxed pt-2">
            Assemble high-contrast luxury digital assets that capture sales, convert prospects, and automate operations. Every plan includes onboarding, setup, and dedicated support. Custom pricing available for enterprise clients.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12 relative pt-4">
          {pricingTiers.map((tier, idx) => {
            const isFeatured = tier.isPopular;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                className={`group flex flex-col justify-between p-6 rounded-2xl bg-[#070709]/85 border text-left relative transition-all duration-500 select-none hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(195,154,59,0.08)] ${
                  isFeatured
                    ? 'border-gold-500 shadow-2xl shadow-gold-500/5 ring-1 ring-[#faeb9a]/20'
                    : 'border-white/[0.05] hover:border-gold-500/35'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 w-full text-center">
                    <span className="bg-gradient-to-r from-gold-400 to-gold-600 text-black text-[9px] font-mono tracking-widest font-black uppercase py-1.5 px-4 rounded-full shadow-lg border border-gold-300 inline-flex items-center gap-1.5 animate-pulse">
                      <Sparkles className="w-3 h-3 text-black animate-spin" /> RECOMMENDED SYSTEM
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Cinematic Banner Header inside card representing physical access passes */}
                  <div className="relative h-32 w-full rounded-xl overflow-hidden border border-white/[0.06] select-none">
                    <img 
                      src={tier.bannerImage}
                      alt={tier.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106 opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-65"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/15 to-transparent pointer-events-none" />
                    
                    {/* Metallic glow strip */}
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
                    
                    {/* Unique design spec numbers */}
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md border border-white/[0.06] px-2 py-1 rounded font-mono text-[8.5px] text-gray-400 tracking-wider font-bold">
                      {tier.specCode}
                    </div>
                    
                    {/* Secondary system state label */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/65 backdrop-blur-md px-2 py-1 rounded border border-white/[0.05] text-[8px] font-mono text-gold-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" /> 89-SYSTEM
                    </div>
                  </div>

                  {/* Card Header & Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl text-white tracking-wide font-semibold group-hover:text-gold-300 transition-colors">
                      {tier.name}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-light min-h-[36px]">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Horizontal Line separating system code from value block */}
                  <div className="border-t border-white/[0.06]" />

                  {/* Value Pricing Frame */}
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-mono font-bold text-white tracking-tight group-hover:text-gold-100 transition-colors">
                        {tier.price}
                      </span>
                      {tier.originalPrice && (
                        <span className="text-xs font-mono text-gray-500/80 line-through">
                          - {tier.originalPrice}
                        </span>
                      )}
                      {tier.priceLabel && (
                        <span className="text-[9px] font-mono text-gray-400 bg-white/[0.04] p-1 rounded uppercase tracking-widest ml-1 inline-block border border-white/[0.03]">
                          {tier.priceLabel}
                        </span>
                      )}
                    </div>
                    
                    {/* Custom cinematic specs terminal readout line matching instructions */}
                    <div className="pt-2 flex items-center justify-between text-[9px] font-mono text-gray-500 border-t border-white/[0.04]">
                      <span className="tracking-widest">CYCLE: RECURRING</span>
                      <span className="text-gold-500/80">LATENCY // STANDARD</span>
                    </div>
                  </div>

                  {/* Scope of delivery features list */}
                  <ul className="space-y-3 pt-1">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex gap-2.5 text-xs text-gray-300 leading-relaxed font-light items-start">
                        <span className="w-4 h-4 rounded-full bg-gold-500/5 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Check className="w-2.5 h-2.5 text-gold-400" strokeWidth="3" />
                        </span>
                        <span className="group-hover:text-gray-100 transition-colors">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tactical Dynamic CTAs */}
                <div className="pt-8">
                  <a
                    href="#contact"
                    className={`block w-full py-3.5 text-center text-[10px] font-bold tracking-widest uppercase rounded-xl transition-all cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-black hover:brightness-110 active:scale-98 font-bold border border-gold-300 shadow-xl shadow-gold-500/15'
                        : 'border border-white/[0.1] hover:border-gold-400/40 text-gray-300 hover:text-white bg-white/[0.01] hover:bg-white/[0.03] active:scale-98'
                    }`}
                  >
                    {tier.ctaText}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GST Exclusion tagline matched from layout */}
        <div className="text-center text-xs text-gray-500 font-light mt-8 tracking-wide space-y-2">
          <div>All prices exclude GST. Custom enterprise packages available on request.</div>
          <div className="text-[11px]">Need a customized system scope? Chat directly with us on <a href="https://wa.me/917045331188" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-mono font-bold">+91 7045 331188</a>.</div>
        </div>

        {/* FAQ ACCORDION SECTION - Cinematic drop down */}
        <div className="max-w-3xl mx-auto pt-24">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold-500 font-bold block">MITIGATING OBJECTIONS</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
              Frequently Audited <span className="gold-text-gradient italic font-light">Inquiries</span>
            </h3>
          </div>

          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#09090c]/40 border border-[#c39a3b]/10 hover:border-gold-400/30 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left cursor-pointer select-none gap-4"
                  >
                    <span className="font-serif text-sm sm:text-base text-white hover:text-gold-300 transition-colors tracking-wide flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-gold-400 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-[rgba(195,154,59,0.05)] text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
