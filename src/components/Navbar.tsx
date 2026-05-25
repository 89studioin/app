import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenProposal: () => void;
}

export default function Navbar({ onOpenProposal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Agency', href: '#agency' },
    { name: 'Services', href: '#expertise' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Video', href: '#cyber-reels' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-[#030304]/90 backdrop-blur-md border-b border-[rgba(195,154,59,0.12)] shadow-xl'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Branding - gold text with yellow accents as per screenshot */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#')}
            className="group flex items-center gap-1 focus:outline-none"
          >
            <span className="font-sans text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-gold-250 transition-colors uppercase">
              89STUDIO<span className="text-gold-300 font-serif lowercase italic text-lg hover:text-gold-400">.in</span>
            </span>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-medium text-gray-350 hover:text-gold-300 transition-colors duration-200 py-2 px-1 tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action buttons as per screenshot: CHA ON WHATSAPP & GET DEMO */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917045331188"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex px-4 py-2 rounded border border-[#25D366]/40 bg-transparent text-[#25D366] hover:bg-[#25D366]/5 hover:border-[#25D366]/80 font-semibold text-[11px] tracking-wider uppercase transition-all duration-300 cursor-pointer"
            >
              Chat on WhatsApp
            </a>

            <button
              onClick={onOpenProposal}
              className="hidden sm:inline-flex px-5 py-2.5 rounded bg-gold-300 hover:bg-gold-400 text-black font-semibold text-[11px] tracking-wider uppercase transition-all duration-305 cursor-pointer shadow-lg shadow-gold-500/10 hover:scale-102"
            >
              Get Demo
            </button>

            {/* Mobile Burger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden border border-[rgba(195,154,59,0.2)] rounded-lg text-gray-300 hover:text-gold-400 hover:border-gold-400 transition-all focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-[#040405]/98 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            {/* Visual background element */}
            <div className="absolute inset-0 grid-bg-mesh opacity-25 pointer-events-none" />
            <div className="absolute -top-10 left-1/4 w-80 h-80 gold-glow-radial opacity-50 pointer-events-none" />

            <div className="space-y-8 flex flex-col text-left">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="font-serif text-3xl font-medium tracking-wide text-gray-200 hover:text-gold-400 transition-colors"
                >
                  <span className="text-sm font-mono text-gold-500 mr-4">0{idx + 1}.</span>
                  {link.name}
                </motion.a>
              ))}

              <motion.button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProposal();
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full py-4 text-center text-xs tracking-widest uppercase font-semibold text-black bg-gradient-to-r from-gold-400 to-gold-600 rounded-full tracking-wider mt-8 hover:brightness-110 shadow-lg shadow-gold-500/10 cursor-pointer"
              >
                Get a Proposal
              </motion.button>

              <motion.a
                href="https://wa.me/917045331188"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="w-full py-3.5 text-center text-xs tracking-widest uppercase font-semibold text-[#25D366] border border-[#25D366]/35 bg-transparent rounded-full tracking-wider hover:bg-[#25D366]/5 cursor-pointer block"
              >
                Chat on WhatsApp (+91 7045 331188)
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
