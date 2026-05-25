import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, CheckCheck, Sparkles, Smartphone, Bot, ShieldCheck, UserCheck, Zap, ArrowRight, Play, RefreshCw } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

interface ChatPreset {
  name: string;
  industry: string;
  objective: string;
  initialMessages: Array<{ text: string; delay: number }>;
  userReplies: Array<{
    trigger: string;
    aiResponses: string[];
    leadStatus: string;
  }>;
}

export default function WhatsAppDemo() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [leadScore, setLeadScore] = useState(20);
  const [leadStatus, setLeadStatus] = useState('Nurturing');
  const [suggestedReplies, setSuggestedReplies] = useState<string[]>([]);
  const [replyHistoryIndex, setReplyHistoryIndex] = useState(0);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<any[]>([]);

  const presets: ChatPreset[] = [
    {
      name: 'High-Ticket SaaS Booking',
      industry: 'Enterprise Software',
      objective: 'Qualify & Book Demo',
      initialMessages: [
        { text: "Hello! Thank you for interest in Apex Analytics. I'm Apex AI. Are you looking to scale custom operational data queries today?", delay: 800 },
        { text: "To give you the most tailored pricing, do you currently generate more than 100k views monthly?", delay: 1800 }
      ],
      userReplies: [
        {
          trigger: "Yes, we are way past 100k views",
          aiResponses: [
            "Splendid! That qualifies you for our high-throughput Apex Ultra line.",
            "Would you like me to reserve a priority 1-on-1 blueprint briefing with our chief systems architect tomorrow at 3 PM or 5 PM EST?"
          ],
          leadStatus: "🔥 Fully Qualified Lead (95%)"
        },
        {
          trigger: "Not yet, we are currently smaller",
          aiResponses: [
            "No problem at all! We have a specialized Growth Sandbox Tier perfect for scaling brands.",
            "I've dispatched a high-growth resources handbook directly to your directory. Would you like a coupon for 30 days trial?"
          ],
          leadStatus: "✅ Warm Lead (65%)"
        }
      ]
    },
    {
      name: 'Luxury Real Estate Concierge',
      industry: 'Premium Properties',
      objective: 'Verify Budget & Schedule Tour',
      initialMessages: [
        { text: "Welcome to Aurelia Estates. I am your virtual estate concierge. I'll assist you in scheduling private viewings for our newly minted Glass Pavilion.", delay: 800 },
        { text: "Are you viewing as a personal residence project, or as part of a high-yield retail portfolio?", delay: 1800 }
      ],
      userReplies: [
        {
          trigger: "Looking for a luxury personal residence",
          aiResponses: [
            "An excellent choice. The Glass Pavilion offers 8,500 sq ft of seamless indoor-outdoor masterwork.",
            "May I confirm your preferred procurement time window is within the next 90 days?"
          ],
          leadStatus: "👑 High-Net-Worth VIP Lead (98%)"
        },
        {
          trigger: "Evaluating portfolio investment options",
          aiResponses: [
            "Understood. The projected annual cap yield on Aurelia properties is currently stabilized at 8.4%.",
            "I can instantly deliver the confidential prospective prospectus deck. Shall I dispatch it to your WhatsApp now?"
          ],
          leadStatus: "💎 Qualified Investor Lead (90%)"
        }
      ]
    },
    {
      name: 'E-commerce Checkout Recovery',
      industry: 'Direct-to-Consumer Glamour',
      objective: 'Rescue Abandoned Basket',
      initialMessages: [
        { text: "Hey! We noticed you left some exquisite items in your checkout basket at Lunar Beauty.", delay: 800 },
        { text: "I can instantly authorize a priority code: LUNA15 to shave 15% off your entire bag. Should I apply this code for you?", delay: 1600 }
      ],
      userReplies: [
        {
          trigger: "Yes, please apply the code!",
          aiResponses: [
            "Done! Your basket is now updated with LUNA15. Save is locked in.",
            "Click here to instantly finalize checkout with one-tap Google Pay! ⎯ [https://checkout.lunar.com/buy]"
          ],
          leadStatus: "💰 Abandoned Checkout Rescued (100%)"
        },
        {
          trigger: "No thanks, looking around first",
          aiResponses: [
            "Completely understand. Trends move fast, and stocks are limited to 50 batches per shade.",
            "Let me lock your wishlist from expiring for the next 48 hours so you don't lose them. Deal?"
          ],
          leadStatus: "🌱 Interested Retargeted Prospect (45%)"
        }
      ]
    }
  ];

  const activePreset = presets[activePresetIndex];

  // Load preset messages
  const startDemo = () => {
    // Clear any previous timeouts
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    setMessages([]);
    setIsTyping(false);
    setLeadScore(25);
    setLeadStatus('Awaiting Input');
    setReplyHistoryIndex(0);

    // Initial sequence
    activePreset.initialMessages.forEach((msg, i) => {
      const t1 = setTimeout(() => {
        setIsTyping(true);
        const t2 = setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => {
            const uniqueId = `${activePresetIndex}-init-${i}`;
            if (prev.some(m => m.id === uniqueId)) {
              return prev;
            }
            return [
              ...prev,
              {
                id: uniqueId,
                sender: 'ai',
                text: msg.text,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }
            ];
          });
          if (i === activePreset.initialMessages.length - 1) {
            // Offer replies
            setSuggestedReplies(activePreset.userReplies.map(r => r.trigger));
          }
        }, 1200);
        timeoutsRef.current.push(t2);
      }, msg.delay);
      timeoutsRef.current.push(t1);
    });
  };

  useEffect(() => {
    startDemo();
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [activePresetIndex]);

  // Scroll to bottom of chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleUserReply = (triggerText: string) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: triggerText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setSuggestedReplies([]);
    setIsTyping(true);

    const matchedReply = activePreset.userReplies.find(r => r.trigger === triggerText);

    const tUser = setTimeout(() => {
      setIsTyping(false);
      if (matchedReply) {
        setLeadStatus(matchedReply.leadStatus);
        setLeadScore(Math.min(100, Math.floor(Math.random() * 15 + 85)));

        // Feed system AI answers
        let delayOffset = 0;
        matchedReply.aiResponses.forEach((responseMsg, idx) => {
          const tAiStart = setTimeout(() => {
            setIsTyping(true);
            const tAiEnd = setTimeout(() => {
              setIsTyping(false);
              setMessages(prev => {
                const uniqueId = `ai-resp-${Date.now()}-${idx}`;
                if (prev.some(m => m.id === uniqueId)) {
                  return prev;
                }
                return [
                  ...prev,
                  {
                    id: uniqueId,
                    sender: 'ai',
                    text: responseMsg,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  }
                ];
              });
            }, 1100);
            timeoutsRef.current.push(tAiEnd);
          }, delayOffset);
          timeoutsRef.current.push(tAiStart);
          delayOffset += 2000;
        });
      }
    }, 1500);
    timeoutsRef.current.push(tUser);
  };

  return (
    <section id="automation-framer" className="relative py-24 md:py-32 bg-[#040406] overflow-hidden border-t border-[rgba(195,154,59,0.12)]">
      {/* Visual Ambient Spotlights */}
      <div className="absolute top-[20%] right-[15%] w-[450px] h-[450px] bg-gradient-to-tr from-[#25D366]/5 to-transparent blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-gold-500/5 to-transparent blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 text-xs text-gold-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              Live Funnel Simulation
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide leading-tight">
              Instant Conversational <br />
              <span className="gold-text-gradient italic font-semibold">WhatsApp Funnels</span>
            </h2>
            <p className="max-w-2xl text-gray-400 text-sm sm:text-base font-light leading-relaxed">
              We engineer intelligent, serverless chat agents running on high-scale WhatsApp Cloud APIs. Capture users from social ads, handle cold traffic qualifying filters on auto-pilot, and load live sales meetings into your calendar.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
            {presets.map((preset, idx) => (
              <button
                key={preset.name}
                onClick={() => setActivePresetIndex(idx)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg tracking-wider border cursor-pointer transition-all duration-300 ${
                  activePresetIndex === idx
                    ? 'border-gold-400 bg-gold-450/10 text-gold-300 shadow-md shadow-gold-550/5'
                    : 'border-[rgba(195,154,59,0.12)] text-gray-400 hover:border-gold-500/30 hover:text-white'
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        {/* Simulator Grid wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Enterprise Live Qualifier Panel Mock */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-[#09090c]/80 border border-[rgba(195,154,59,0.15)] text-left z-10 backdrop-blur-md">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono text-gray-500 tracking-widest">AETHERO CRM INGESTION</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                </span>
              </div>

              {/* CRM Lead Metrics Widget */}
              <div className="p-5 rounded-2xl bg-black/40 border border-[rgba(195,154,59,0.08)] space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-mono text-gray-400 block tracking-widest">PROSPECT IDENTIFIER</span>
                  <p className="text-sm font-semibold text-white mt-0.5">anonymous_client_WA+{Math.floor(Math.random() * 8000 + 1000)}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-400 block tracking-widest">CONVERSION QUALITY SCORE</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xl font-mono font-bold text-gold-400">{leadScore}%</span>
                      <div className="w-16 h-1.5 rounded-full bg-gray-800 overflow-hidden">
                        <motion.div
                          className="h-full bg-gold-400"
                          initial={{ width: '25%' }}
                          animate={{ width: `${leadScore}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-400 block tracking-widest">STATUS TAG</span>
                    <span className="inline-block px-2.5 py-1 text-[9px] font-mono font-bold uppercase rounded bg-gold-500/10 text-gold-300 border border-gold-500/20 mt-1">
                      {leadStatus}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[rgba(195,154,59,0.08)] grid grid-cols-2 gap-2 text-[11px]">
                  <span className="text-gray-550 flex items-center gap-1.5 font-light">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-500 shrink-0" /> TLS Encryption Active
                  </span>
                  <span className="text-gray-550 flex items-center gap-1.5 font-light">
                    <UserCheck className="w-3.5 h-3.5 text-gold-500 shrink-0" /> AI Agent Handshake
                  </span>
                </div>
              </div>

              {/* Automation details details */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs uppercase font-mono tracking-widest text-gold-200">How This Funnel Performs:</h4>
                
                <div className="space-y-3">
                  <div className="flex gap-3 text-xs text-gray-400 font-light">
                    <div className="w-5 h-5 rounded-md bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center shrink-0 text-[#25D366]">
                      <Zap className="w-3 h-3" />
                    </div>
                    <span><strong className="text-white">Instant Engagement:</strong> 0-second reply lag secures user momentum before browser drop-offs occur.</span>
                  </div>
                  <div className="flex gap-3 text-xs text-gray-400 font-light">
                    <div className="w-5 h-5 rounded-md bg-gold-450/10 border border-gold-450/20 flex items-center justify-center shrink-0 text-gold-400">
                      <Bot className="w-3 h-3" />
                    </div>
                    <span><strong className="text-white">Dynamic Qualification:</strong> Filters outbound sales calls, prioritizing warm prospects so human reps only take verified deals.</span>
                  </div>
                  <div className="flex gap-3 text-xs text-gray-400 font-light">
                    <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white">
                      <Send className="w-3 h-3" />
                    </div>
                    <span><strong className="text-white">Seamless Scheduling:</strong> Direct synchronization with Google Calendar, Cal.com, or custom CRMs.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[rgba(195,154,59,0.1)] space-y-3">
              <button
                onClick={startDemo}
                className="w-full py-3 px-4 rounded-xl border border-white/[0.08] hover:border-gold-500/30 text-gray-400 hover:text-white font-bold font-sans text-[10px] tracking-widest uppercase transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                Reset Simulated Flow
              </button>

              <a
                href="https://wa.me/917045331188"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:brightness-110 text-black font-bold font-sans text-[10px] tracking-widest uppercase transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
              >
                <MessageSquare className="w-3.5 h-3.5 text-black" />
                Go Live: +91 7045 331188
              </a>
            </div>

          </div>

          {/* Column 2: The Cinema Gold Glass Phone Screen Mock */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            
            {/* Ambient shadow backdrops */}
            <div className="absolute inset-x-0 top-1/4 bottom-1/4 bg-[#25D366]/4 blur-[100px] pointer-events-none rounded-full" />
            
            {/* The Smartphone container block */}
            <div className="w-full max-w-[420px] rounded-[42px] border-4 border-gray-800 bg-[#060608] shadow-2xl shadow-black relative overflow-hidden flex flex-col h-[580px]">
              
              {/* Phone ear-speaker Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-[#030304] z-30 flex justify-center items-center">
                <div className="w-18 h-3.5 rounded-full bg-black border border-gray-900 flex items-center justify-center">
                  <div className="w-6 h-1 rounded-full bg-neutral-800" />
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 ml-1.5" />
                </div>
              </div>

              {/* Simulated chat header */}
              <div className="pt-8 pb-3 px-4 bg-[#09090d] border-b border-[rgba(195,154,59,0.12)] flex items-center justify-between relative z-20">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gold-500 to-gold-300 flex items-center justify-center text-black font-bold text-xs">
                      AI
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#09090d]" />
                  </div>
                  <div className="text-left">
                    <h5 className="text-[12px] font-bold text-white tracking-wide">89 Studio Assistant</h5>
                    <span className="text-[10px] text-gray-400 flex items-center gap-1 font-mono">
                      <Sparkles className="w-2.5 h-2.5 text-gold-400 stroke-2" /> Live automation agent
                    </span>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded bg-[#25D366]/10 text-[#25D366] text-[9px] font-bold tracking-wider font-mono">
                  ACTIVE
                </div>
              </div>

              {/* Simulated Chat Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-gradient-to-b from-[#060608] to-[#040405] relative z-10 select-none flex flex-col justify-between">
                
                <div className="space-y-3.5 flex-1 max-h-[350px] overflow-y-auto pr-1">
                  
                  {/* Informative system info */}
                  <div className="text-center py-1">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#0d0d12] border border-gold-450/10 text-[9px] font-mono text-gray-500 tracking-wider">
                      Today • Encrypted by 89 Studio Agent
                    </span>
                  </div>

                  {messages.map((m) => {
                    const isAi = m.sender === 'ai';
                    return (
                      <motion.div
                        key={m.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`flex flex-col max-w-[85%] ${isAi ? 'self-start text-left' : 'self-end text-right ml-auto'}`}
                      >
                        <div className={`p-3 rounded-2xl text-[12.5px] leading-relaxed font-light ${
                          isAi
                            ? 'bg-[#0d0d12] text-white border border-[rgba(195,154,59,0.08)] rounded-tl-none'
                            : 'bg-gold-500 text-black font-medium tracking-wide rounded-tr-none'
                        }`}>
                          {m.text}
                          
                          <div className={`mt-1 text-[8.5px] flex items-center gap-1 ${isAi ? 'text-gray-500 justify-start' : 'text-neutral-900 justify-end'}`}>
                            <span>{m.timestamp}</span>
                            {!isAi && <CheckCheck className="w-3.5 h-3.5 text-neutral-900" />}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Typing State indicator */}
                  {isTyping && (
                    <div className="flex items-center gap-1 bg-[#0d0d12] border border-gold-450/5 p-3 rounded-2xl rounded-tl-none self-start max-w-[30%]">
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  )}

                  <div ref={chatEndRef} />
                </div>

                {/* Preset Interactive Options Area - Highly Engaging! */}
                <div className="space-y-2 pt-2 border-t border-[rgba(195,154,59,0.05)]">
                  {suggestedReplies.length > 0 ? (
                    <div className="space-y-1.5">
                      <span className="text-[10px] text-gray-500 font-mono tracking-widest block text-left uppercase mb-1">SELECT YOUR SIMULATED REPLY:</span>
                      <div className="flex flex-col gap-2">
                        {suggestedReplies.map((reply, i) => (
                          <motion.button
                            key={i}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleUserReply(reply)}
                            className="w-full text-left p-3 rounded-xl border border-gold-400/40 bg-gold-400/5 hover:bg-gold-400/10 text-gold-300 hover:text-white text-[12px] font-semibold tracking-wide transition-all duration-300 cursor-pointer flex justify-between items-center group/btn"
                          >
                            <span>{reply}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover/btn:translate-x-1 transition-transform" />
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    messages.length > 2 && !isTyping && (
                      <div className="p-3 text-center rounded-xl bg-gold-450/5 border border-gold-450/15 text-[11px] text-gold-250 font-light">
                        🎉 Simulated loop complete. Choose another preset above to try other live flows!
                      </div>
                    )
                  )}
                </div>

              </div>

              {/* Static Input Footer on Device */}
              <div className="p-3 bg-[#08080a] border-t border-[rgba(195,154,59,0.08)] flex items-center gap-2 relative z-10">
                <div className="flex-1 bg-black/50 border border-neutral-850 rounded-full px-4 py-2 text-[11px] text-gray-500 text-left">
                  Type a custom message...
                </div>
                <div className="w-8 h-8 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
                  <Play className="w-3 h-3 fill-gold-450/20" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
