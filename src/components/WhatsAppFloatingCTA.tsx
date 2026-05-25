import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ShieldCheck, X, Sparkles, Send } from 'lucide-react';

export default function WhatsAppFloatingCTA() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show premium automated message tooltip after 3.5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://wa.me/917045331188", "_blank", "noopener,noreferrer");
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Cinematic automatic greeting bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85 }}
            className="p-4 rounded-2xl bg-[#09090c] border border-gold-400/40 text-left shadow-2xl shadow-gold-500/10 max-w-[270px] relative shrink-0"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-white cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[10px] font-bold text-[#25D366] font-mono uppercase tracking-widest">AETHERO ROBOTICA ACTIVE</span>
            </div>
            <p className="text-[12px] text-gray-300 font-light leading-relaxed">
              "Hey there! Chat with our team or see how we automate high-ticket bookings."
            </p>
            <div className="flex flex-col gap-2 mt-3 select-none">
              <a
                href="https://wa.me/917045331188"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowTooltip(false)}
                className="text-[10px] font-bold uppercase tracking-widest text-[#25D366] flex items-center gap-1.5 hover:brightness-110 transition-all font-mono"
              >
                Chat on WhatsApp <Send className="w-3 h-3 text-[#25D366]" />
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#automation-framer');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                  setShowTooltip(false);
                }}
                className="text-[9px] font-medium uppercase tracking-widest text-gray-400 flex items-center gap-1.5 hover:text-white transition-colors text-left cursor-pointer"
              >
                Run Interactive Demo →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsating interactive Circle Trigger button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-lg shadow-[#25D366]/20 cursor-pointer group"
      >
        {/* Double Pulse ripples */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-60" />
        <span className="absolute -inset-1.5 rounded-full border-2 border-dashed border-[#25D366]/20 rounded-full animate-[spin_20s_linear_infinite]" />

        {/* Messaging Icon */}
        <MessageSquare className="w-6 h-6 text-black group-hover:scale-105 transition-transform" />

        {/* Small Active green glow pill */}
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black border border-[#25D366] flex items-center justify-center">
          <Sparkles className="w-2 h-2 text-gold-400" />
        </span>
      </motion.button>
      
    </div>
  );
}
