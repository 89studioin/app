import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  Compass, 
  Instagram, 
  CreditCard, 
  Package, 
  Bookmark,
  Shuffle
} from 'lucide-react';

interface BrandModule {
  id: string;
  name: string;
  industry: string;
  beforeLabel: string;
  beforeSub: string;
  afterLabel: string;
  afterStyle: {
    fontName: string;
    vibeText: string;
    colors: string[];
    colorsHex: string[];
  };
  typographyHeading: string;
  typographyBody: string;
}

export default function PortfolioBrands() {
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(0);
  const [isAfter, setIsAfter] = useState(true);

  const brandKits: BrandModule[] = [
    {
      id: 'aethel',
      name: 'Aurelia Organic Botanicals',
      industry: 'Niche Premium Skincare',
      beforeLabel: 'Aurelia Skin Lab',
      beforeSub: 'Stale generic medical-looking blue label in Calibri.',
      afterLabel: 'AURELIA',
      afterStyle: {
        fontName: 'Playfair Display [Serif]',
        vibeText: 'Organic luxury, ultra wide kerning paired with subtle italic guidelines',
        colors: [
          'bg-[#060608]', // Deep Obsidian
          'bg-[#c39a3b]', // Pure Gold
          'bg-[#e2cb92]', // Warm Champagne Gold
          'bg-[#191e1d]'  // Forest Pine Velvet
        ],
        colorsHex: ['#060608', '#C39A3B', '#E2CB92', '#191E1D']
      },
      typographyHeading: 'Playfair Display Gold Regular',
      typographyBody: 'Inter Air Light Letter spacing'
    },
    {
      id: 'apex',
      name: 'Apex Consultancies',
      industry: 'Private Off-market Investments',
      beforeLabel: 'Apex Wealth Partners Group',
      beforeSub: 'Standard stock icon representing standard bar-charts in flat blue.',
      afterLabel: 'Λ P E X',
      afterStyle: {
        fontName: 'Space Grotesk [Geometric]',
        vibeText: 'Symmetric glyph structure, heavy weight uppercase, razor-exact modern grids',
        colors: [
          'bg-[#030303]', // Pitch Carbon
          'bg-[#937532]', // Ancient Bronze Gold
          'bg-[#efdfbb]', // Pearl Gold Paper
          'bg-[#232d3a]'  // Deep Navy Velvet
        ],
        colorsHex: ['#030303', '#937532', '#EFDFBB', '#232D3A']
      },
      typographyHeading: 'Space Grotesk Black Bold',
      typographyBody: 'Fira Code Mono Regular'
    }
  ];

  const activeKit = brandKits[selectedBrandIndex];

  const deliverablesList = [
    'Logo Design Systems', 'Typography Foundations', 'Brand Color Palettes', 
    'Instagram Feeds Grid Templates', 'Elite Business Card Layouts', 'Packaging Symmetrical Mockups', 
    'Investor Pitch Presentation Decks', 'WhatsApp Channel Branding Headers', 'Comprehensive Brand Guidelines Handbook'
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Header section with User specifications */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left font-sans">
        <div className="lg:col-span-8 space-y-3">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-400 font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            Brand Kit Portfolio Section
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
            Brands designed <br />
            <span className="gold-text-gradient italic font-light">to look unforgettable.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:pt-8">
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
            An enterprise is only as expensive as its sensory brand consistency. We craft structural systems of color, geometry, and type pairing that command instantaneous high-net-worth authority.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left Column (5/12) - Included Deliverables & Color Palette bubbles */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          
          <div className="space-y-4">
            <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest block font-bold">
              Included in Elite Brand Kits
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {deliverablesList.map((item) => (
                <div key={item} className="flex gap-2.5 text-xs text-gray-350 leading-relaxed items-center font-light">
                  <Check className="w-4 h-4 text-gold-500 shrink-0" strokeWidth="2.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Color Palettes dynamic viewer block */}
          <div className="p-6 rounded-2xl bg-[#08080b]/75 border border-white/[0.04] space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-500/5 to-transparent blur-xl" />
            <div className="flex justify-between items-center whitespace-nowrap">
              <span className="text-[9px] font-mono uppercase text-gold-300 font-bold tracking-widest block">
                Live Color Spectrum Palette
              </span>
              <button 
                onClick={() => setSelectedBrandIndex(prev => (prev === 0 ? 1 : 0))}
                className="text-[9px] font-mono text-gray-400 flex items-center gap-1 hover:text-white cursor-pointer border border-white/[0.04] px-2 py-0.5 rounded bg-black"
              >
                <Shuffle className="w-3 h-3 text-gold-400" /> Toggle Brand Set
              </button>
            </div>
            
            <p className="text-[11px] text-gray-400 font-light italic">
              Hexadecimal ratios engineered strictly to complement deep pitch black high-end layouts:
            </p>

            <div className="grid grid-cols-4 gap-3 pt-2">
              {activeKit.afterStyle.colors.map((colorClass, idx) => (
                <div key={idx} className="space-y-1.5 text-center group">
                  <div className={`aspect-square w-full rounded-xl ${colorClass} border border-white/[0.08] shadow-md group-hover:scale-105 transition-all duration-300 relative`} />
                  <span className="block text-[10px] font-mono text-gold-400 font-bold">
                    {activeKit.afterStyle.colorsHex[idx]}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (7/12) - THE CORE BRANDING CANVAS Showcase Style (Before vs After, Typography Booklet) */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[9px] font-mono uppercase text-gray-400 tracking-wider flex items-center justify-between uppercase">
            <span>Visual Concept Booklet // {activeKit.name}</span>
            <button
              onClick={() => setIsAfter(!isAfter)}
              className="px-2.5 py-1 rounded bg-[#0f0f12] text-[9px] font-mono border border-gold-500/10 hover:border-gold-400 transition-colors cursor-pointer text-gold-300 uppercase shrink-0"
            >
              Simulate: {isAfter ? 'Show Raw Before' : 'Show Premium After'}
            </button>
          </span>

          {/* Interactive Comparison Board */}
          <div className="aspect-[16/9] w-full rounded-2xl border border-white/[0.04] bg-[#050507] relative overflow-hidden flex flex-col justify-between p-8 shadow-[0_0_85px_rgba(0,0,0,0.9)]">
            {/* Background grid */}
            <div className="absolute inset-0 grid-bg-mesh opacity-[0.2] pointer-events-none" />

            <div className="space-y-2 relative z-10 text-left">
              <span className="text-[9px] font-mono text-gold-500 tracking-widest font-black uppercase">
                {isAfter ? 'PREMIUM BRAND SPECIFICATION ' : 'RAW INCOMING CLIENT BRAND'}
              </span>
              <p className="text-[11px] text-gray-400 font-light">
                {isAfter ? activeKit.afterStyle.vibeText : activeKit.beforeSub}
              </p>
            </div>

            {/* Simulated Logo visual overlay */}
            <div className="flex-1 flex items-center justify-center relative z-10 py-4 select-none">
              {isAfter ? (
                // Beautiful luxury typography rendering logo
                <div className="text-center space-y-2">
                  <motion.h1 
                    initial={{ letterSpacing: '0.1em', opacity: 0.8 }}
                    animate={{ letterSpacing: '0.3em', opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="text-4xl sm:text-5xl font-serif text-white tracking-[0.3em] font-normal"
                  >
                    {activeKit.afterLabel}
                  </motion.h1>
                  <p className="text-[8px] tracking-[0.4em] uppercase text-gold-450 font-mono font-bold">
                    {activeKit.industry.split(' ')[0]} // COMPOSITIONS
                  </p>
                </div>
              ) : (
                // Cheap flat mockup placeholder representing raw branding before
                <div className="text-center select-none space-y-1">
                  <h1 className="text-xl font-sans text-gray-500 line-through font-bold">
                    {activeKit.beforeLabel}
                  </h1>
                  <span className="text-[10px] text-red-400 uppercase font-mono block">Rejected flat blue template placeholder</span>
                </div>
              )}
            </div>

            {/* Bottom style details */}
            <div className="flex justify-between items-end border-t border-white/[0.03] pt-4 relative z-10">
              <div className="space-y-1 text-left">
                <span className="block text-[8px] text-gray-500 uppercase font-mono tracking-widest">Type Pairing Guideline</span>
                <span className="block text-xs font-mono font-medium text-white">Heading: {isAfter ? activeKit.afterStyle.fontName : 'Calibri Standard'}</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono text-gray-650 tracking-wider">/SET-0{selectedBrandIndex + 1}</span>
              </div>
            </div>

            {/* Dynamic ambient spotlight backdrop */}
            <div className={`absolute inset-0 bg-gradient-to-tr from-black via-transparent ${isAfter ? 'to-gold-950/15' : 'to-red-950/5'} opacity-85 transition-colors duration-500`} />

          </div>

          {/* Sub Grid Mockups Showcase: Instagram grids, Credit Cards, Packaging details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Instagram Templates */}
            <div className="p-5 rounded-xl border border-white/[0.03] bg-[#07070a]/80 text-left space-y-4">
              <div className="flex items-center gap-2 text-gold-450">
                <Instagram className="w-4 h-4 shrink-0" />
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold">Instagram Preview</span>
              </div>
              <p className="text-[11px] text-gray-400 font-light leading-normal">
                Strict layout frames featuring beautiful margin typography and custom border lines to keep grid feeds elite.
              </p>
            </div>

            {/* Business Cards framework */}
            <div className="p-5 rounded-xl border border-white/[0.03] bg-[#07070a]/80 text-left space-y-4">
              <div className="flex items-center gap-2 text-gold-450">
                <CreditCard className="w-4 h-4 shrink-0" />
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold">Business Cards</span>
              </div>
              <p className="text-[11px] text-gray-400 font-light leading-normal">
                Symmetrical paper textures, matte back finishes option, double-sided spot UV vectors, and geometric monograms.
              </p>
            </div>

            {/* Packaging Visuals */}
            <div className="p-5 rounded-xl border border-white/[0.03] bg-[#07070a]/80 text-left space-y-4">
              <div className="flex items-center gap-2 text-gold-450">
                <Package className="w-4 h-4 shrink-0" />
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold">Packaging Visuals</span>
              </div>
              <p className="text-[11px] text-gray-400 font-light leading-normal">
                3D product rendering coordinates detailing luxury gold embosses, glass container shading, and black cardboard boxes.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
