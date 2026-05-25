import React from 'react';
import { ArrowUp, CornerDownRight, Linkedin, Github, Compass } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="footer"
      className="relative bg-[#020203] border-t border-[rgba(195,154,59,0.15)] py-16 md:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-mesh opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Brand/Branding Column */}
          <div className="md:col-span-5 text-left space-y-4">
            <div className="flex items-center gap-1.5 animate-pulse-slow">
              <span className="font-sans text-xl font-black tracking-tight text-white uppercase">
                89STUDIO<span className="text-gold-300 font-serif lowercase italic text-lg hover:text-gold-400">.in</span>
              </span>
            </div>
            <p className="max-w-xs text-xs text-gray-400 leading-relaxed font-light">
              We design and compose premium visual systems. Empowering ambitious global enterprises with elite web engineering and strategic positioning.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1 md:col-start-7 md:col-span-2 text-left space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold-200">
              Disciplines
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#expertise"
                  onClick={(e) => handleLinkClick(e, '#expertise')}
                  className="text-xs text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-1.5 font-light"
                >
                  <CornerDownRight className="w-3 h-3 text-gold-500" />
                  Engineering
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  onClick={(e) => handleLinkClick(e, '#expertise')}
                  className="text-xs text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-1.5 font-light"
                >
                  <CornerDownRight className="w-3 h-3 text-gold-500" />
                  Visual Identity
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  onClick={(e) => handleLinkClick(e, '#expertise')}
                  className="text-xs text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-1.5 font-light"
                >
                  <CornerDownRight className="w-3 h-3 text-gold-500" />
                  SEO & growth
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="col-span-1 md:col-span-2 text-left space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold-200">
              Navigation
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#agency"
                  onClick={(e) => handleLinkClick(e, '#agency')}
                  className="text-xs text-gray-400 hover:text-gold-400 transition-colors font-light"
                >
                  The Agency
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleLinkClick(e, '#portfolio')}
                  className="text-xs text-gray-400 hover:text-gold-400 transition-colors font-light"
                >
                  Our Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleLinkClick(e, '#process')}
                  className="text-xs text-gray-400 hover:text-gold-400 transition-colors font-light"
                >
                  Methodology
                </a>
              </li>
            </ul>
          </div>

          {/* Social connections EXACT style (gold circles with customized labels as in screenshot) */}
          <div className="col-span-1 md:col-span-2 text-left space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold-200 block">
              Global Channels
            </span>
            <div className="flex gap-2.5 pt-1">
              {[
                { label: 'in', title: 'LinkedIn', href: 'https://linkedin.com/' },
                { label: 'ln', title: 'Instagram', href: 'https://instagram.com/' },
                { label: 'Bs', title: 'Behance', href: 'https://behance.net/' },
              ].map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  title={soc.title}
                  className="w-8 h-8 rounded-full border border-gold-400/35 flex items-center justify-center bg-black hover:bg-gold-400 hover:text-black hover:border-gold-400 text-gold-300 font-mono text-[11px] font-bold transition-all duration-300 select-none hover:scale-105"
                >
                  {soc.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Closing layout bottom */}
        <div className="pt-8 border-t border-[rgba(195,154,59,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 font-mono">
          <span>&copy; {currentYear} 89 Studio. Handcrafted visual excellence.</span>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-gold-400 hover:text-black hover:scale-103 transition-all cursor-pointer select-none"
          >
            Scroll to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
