import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, ArrowLeft, Sparkles, Building2, Coins, FileText, CheckCircle2, History } from 'lucide-react';
import { ProposalInput, SavedProposal } from '../types';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProposalModal({ isOpen, onClose }: ProposalModalProps) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<ProposalInput>({
    companyName: '',
    industry: '',
    services: [],
    budgetRange: '$25,000 - $50,000',
    timeline: '2-3 Months',
    goals: '',
    email: '',
  });

  const [generatedProposal, setGeneratedProposal] = useState<SavedProposal | null>(null);
  const [savedProposals, setSavedProposals] = useState<SavedProposal[]>([]);
  const [activeTab, setActiveTab] = useState<'create' | 'history'>('create');

  useEffect(() => {
    // Load previously generated proposals from local storage
    const loaded = localStorage.getItem('89_studio_proposals');
    if (loaded) {
      try {
        setSavedProposals(JSON.parse(loaded));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const handleNext = () => {
    if (step === 1 && (!formData.companyName || !formData.email)) {
      alert('Please fill out your Company Name and Email Address so we can send you the official draft.');
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.services.length === 0) {
      alert('Please select at least one of our modern disciplines (Web, Brand, Marketing).');
      return;
    }

    // Dynamic proposal estimation engine calculation based on services & budget
    const priceModifier = formData.budgetRange === '$10,000 - $25,000' ? 1 : 
                        formData.budgetRange === '$25,000 - $50,000' ? 1.8 : 
                        formData.budgetRange === '$50,000 - $100,000' ? 3.5 : 6;
                        
    const isHighScale = priceModifier >= 3.5;
    
    // Custom strategic steps calculated based on choice
    const suggestedSteps: string[] = [];
    if (formData.services.includes('Web Design & Dev')) {
      suggestedSteps.push(isHighScale ? 'Brake out custom React architectural system & state-driven interactive experience wireframes.' : 'Build elite Tailwind single-page app utilizing custom design framework & optimized assets.');
      suggestedSteps.push('Interactive component coding with strict SEO parameters and layout transitions using motion/react.');
    }
    if (formData.services.includes('Brand Strategy')) {
      suggestedSteps.push('Comprehensive landscape workshop: analysis of key competitors, visual moodboard draft sheets, and brand positioning book.');
      suggestedSteps.push('Bespoke custom asset packages containing tailored typographic alignments and high contrast color palette systems.');
    }
    if (formData.services.includes('Digital Marketing')) {
      suggestedSteps.push('Search engine dominance blueprint, modern targeted social media creative generation, and high ROI strategy map.');
      suggestedSteps.push('Dynamic engagement pipelines to nurture organic traffic & high-performing analytical campaign dashboards.');
    }
    if (suggestedSteps.length === 0) {
      suggestedSteps.push('Elite 360 overall review to plan, design, and deploy unique digital solutions tailored to your unique market vertical.');
    }

    const costEstimation = formData.budgetRange;

    const newProposal: SavedProposal = {
      ...formData,
      id: 'PRP-' + Math.floor(1000 + Math.random() * 9000),
      createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      estimatedCostRange: costEstimation,
      suggestedSteps,
    };

    const updated = [newProposal, ...savedProposals];
    setSavedProposals(updated);
    localStorage.setItem('89_studio_proposals', JSON.stringify(updated));

    setGeneratedProposal(newProposal);
    setStep(3);
  };

  const clearHistory = () => {
    localStorage.removeItem('89_studio_proposals');
    setSavedProposals([]);
  };

  if (!isOpen) return null;

  return (
    <div id="proposal-modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-[rgba(195,154,59,0.3)] bg-[#09090b] shadow-2xl z-10 flex flex-col max-h-[90vh]">
        
        {/* Border grid outline */}
        <div className="absolute inset-0 grid-bg-mesh opacity-20 pointer-events-none" />
        <div className="absolute -top-40 -left-4 w-96 h-96 gold-glow-radial opacity-60 pointer-events-none" />

        {/* Header */}
        <div className="relative flex items-center justify-between px-6 py-4 border-b border-[rgba(195,154,59,0.15)] z-10 bg-black/40">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-gold-400" />
            <h2 className="text-xl font-serif text-white tracking-wide">
              Commercial Proposal Generator
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full border border-[rgba(195,154,59,0.15)] hover:border-gold-400 hover:text-gold-400 transition-colors text-gray-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation */}
        <div className="relative z-10 flex border-b border-[rgba(195,154,59,0.1)] bg-[#0d0d11]">
          <button
            onClick={() => { setActiveTab('create'); setStep(1); setGeneratedProposal(null); }}
            className={`flex-1 py-3 text-center text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === 'create'
                ? 'text-gold-400 bg-black/40 border-b-2 border-gold-400'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Building2 className="w-4 h-4" /> Assemble Strategy Applet
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 text-center text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === 'history'
                ? 'text-gold-400 bg-black/40 border-b-2 border-gold-400'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <History className="w-4 h-4" /> Strategy Dossiers ({savedProposals.length})
          </button>
        </div>

        {/* Modal Content body */}
        <div className="relative flex-1 overflow-y-auto p-6 z-10">
          {activeTab === 'create' ? (
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white flex items-center gap-2">
                      <span className="text-xs text-gold-400 border border-gold-400 px-2 py-0.5 rounded font-mono">01</span>
                      Identify Your Organization
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Provide some foundational details. We customize alignment templates specifically matching your market vertical.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-gold-200 uppercase font-mono tracking-wider">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Paramount Industries"
                        className="w-full bg-black/60 border border-[rgba(195,154,59,0.2)] focus:border-gold-400 focus:outline-none rounded-xl px-4 py-3 text-white text-sm transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-gold-200 uppercase font-mono tracking-wider">Business Vertical</label>
                      <input
                        type="text"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        placeholder="e.g. Sustainable Fashion"
                        className="w-full bg-black/60 border border-[rgba(195,154,59,0.2)] focus:border-gold-400 focus:outline-none rounded-xl px-4 py-3 text-white text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gold-200 uppercase font-mono tracking-wider">Contact E-mail Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. executive@paramount.com"
                      className="w-full bg-black/60 border border-[rgba(195,154,59,0.2)] focus:border-gold-400 focus:outline-none rounded-xl px-4 py-3 text-white text-sm transition-all"
                    />
                    <span className="text-[10px] text-gray-500 font-mono">Rest assured, we never share or distribute design requests.</span>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={handleNext}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold text-sm hover:brightness-110 shadow-lg shadow-gold-500/10 flex items-center gap-2 cursor-pointer transition-all"
                    >
                      Discipline Specs <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white flex items-center gap-2">
                      <span className="text-xs text-gold-400 border border-gold-400 px-2 py-0.5 rounded font-mono">02</span>
                      Disciplinary Goals & Capital
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Select multiple capabilities we should allocate for your digital strategy parameters.
                    </p>
                  </div>

                  {/* Service selections */}
                  <div className="space-y-2">
                    <label className="text-xs text-gold-200 uppercase font-mono tracking-wider">Required Capabilities</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { title: 'Web Design & Dev', desc: 'React architectural UI & optimized code builds.' },
                        { title: 'Brand Strategy', desc: 'Brandbooks, premium typography & visual mockups.' },
                        { title: 'Digital Marketing', desc: 'Growth analytics, SEO maps & dynamic campaigns.' },
                      ].map((serv) => {
                        const isSelected = formData.services.includes(serv.title);
                        return (
                          <div
                            key={serv.title}
                            onClick={() => handleServiceToggle(serv.title)}
                            className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between text-left h-32 select-none ${
                              isSelected
                                ? 'bg-gold-500/10 border-gold-400 shadow-md shadow-gold-500/5'
                                : 'bg-black/40 border-[rgba(195,154,59,0.15)] hover:border-[rgba(195,154,59,0.4)]'
                            }`}
                          >
                            <div className="flex justify-between items-start">
                              <span className={`text-sm font-semibold ${isSelected ? 'text-gold-300' : 'text-white'}`}>
                                {serv.title}
                              </span>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-gold-400 bg-gold-400 text-black' : 'border-gray-600'}`}>
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed font-sans">{serv.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs text-gold-200 uppercase font-mono tracking-wider">Scale of Investment</label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full bg-black/60 border border-[rgba(195,154,59,0.2)] focus:border-gold-400 focus:outline-none rounded-xl px-4 py-3 text-white text-sm cursor-pointer"
                      >
                        <option value="$10,000 - $25,000">$10,000 - $25,000 (Creative MVP)</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000 (Growth scale)</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000 (Luxury custom rollout)</option>
                        <option value="Over $100,000">$100,000+ (Comprehensive enterprise asset)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-gold-200 uppercase font-mono tracking-wider">Desired Target Launch</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-black/60 border border-[rgba(195,154,59,0.2)] focus:border-gold-400 focus:outline-none rounded-xl px-4 py-3 text-white text-sm cursor-pointer"
                      >
                        <option value="4-6 Weeks">4-6 Weeks (Expedited sprint)</option>
                        <option value="2-3 Months">2-3 Months (Recommended cycle)</option>
                        <option value="4-6 Months">4-6 Months (Bespoke execution)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gold-200 uppercase font-mono tracking-wider">Critical Priorities / Brief description</label>
                    <textarea
                      rows={2}
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      placeholder="e.g. We wish to establish a strong presence, migrating old system workflows and creating a brand that speaks to generation-alpha high networth clients..."
                      className="w-full bg-black/60 border border-[rgba(195,154,59,0.2)] focus:border-gold-400 focus:outline-none rounded-xl px-4 py-3 text-white text-sm transition-all"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <button
                      onClick={handlePrev}
                      className="px-5 py-2.5 rounded-full border border-[rgba(195,154,59,0.2)] text-gray-300 font-medium text-xs hover:border-gold-400 hover:text-white flex items-center gap-2 cursor-pointer transition-all"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>

                    <button
                      onClick={handleSubmit}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold text-sm hover:brightness-110 shadow-lg shadow-gold-500/10 flex items-center gap-2 cursor-pointer transition-all"
                    >
                      Generate Strategy Blueprint <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && generatedProposal && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-left"
                >
                  <div className="border border-gold-400/40 bg-gold-400/5 rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-350">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-serif text-white font-medium text-lg">Digital Strategy Draft Instantiated!</h4>
                      <p className="text-xs text-gray-400">Our senior engineering partners will review and contact you within 6 business hours.</p>
                    </div>
                  </div>

                  <div className="p-6 bg-[#040405] border border-[rgba(195,154,59,0.15)] rounded-2xl space-y-4 shadow-inner relative">
                    <div className="absolute top-4 right-4 text-[10px] font-mono text-gold-400 bg-gold-400/10 px-2 py-0.5 rounded">
                      ID: {generatedProposal.id}
                    </div>

                    <h4 className="font-serif text-xl text-white tracking-wide border-b border-gray-800 pb-2">
                       {generatedProposal.companyName} Blueprint
                    </h4>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-gray-500 uppercase font-mono block">Chosen Capabilities</span>
                        <span className="font-medium text-gold-200 mt-1 block">
                          {generatedProposal.services.join(', ') || 'General Digital Consulting'}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 uppercase font-mono block">Estimated Budget Span</span>
                        <span className="font-medium text-gold-200 mt-1 block font-mono">
                          {generatedProposal.estimatedCostRange}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 uppercase font-mono block">Launch Target Parameter</span>
                        <span className="font-medium text-gold-200 mt-1 block">
                          {generatedProposal.timeline}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 uppercase font-mono block">Registered Address</span>
                        <span className="font-medium text-gold-200 mt-1 block font-mono">
                          {generatedProposal.email}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-gray-800">
                      <span className="text-xs text-gray-500 uppercase font-mono block">Custom Rollout Sequence</span>
                      <ul className="space-y-2 mt-2">
                        {generatedProposal.suggestedSteps.map((stp, idx) => (
                          <li key={idx} className="flex gap-2 text-xs text-gray-300 leading-relaxed">
                            <span className="text-gold-400 font-bold font-mono">0{idx + 1}.</span>
                            <span>{stp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button
                      onClick={() => { setStep(1); setGeneratedProposal(null); }}
                      className="px-5 py-2.5 rounded-full border border-[rgba(195,154,59,0.2)] text-gray-300 font-medium text-xs hover:border-gold-400 hover:text-white cursor-pointer transition-all"
                    >
                      Assemble Another Blueprint
                    </button>
                    <button
                      onClick={onClose}
                      className="bg-gold-400 hover:bg-gold-500 font-semibold text-black px-6 py-2.5 rounded-full text-xs shadow-lg shadow-gold-500/20 cursor-pointer transition-all"
                    >
                      Done & Dismiss
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base text-white font-serif">Strategy Archive Ledger</h3>
                {savedProposals.length > 0 && (
                  <button 
                    onClick={clearHistory}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors font-mono cursor-pointer"
                  >
                    Wipe Archive Records
                  </button>
                )}
              </div>

              {savedProposals.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-[rgba(195,154,59,0.15)] rounded-2xl">
                  <FileText className="w-8 h-8 mx-auto stroke-[1.5] text-gray-600 mb-2" />
                  <p className="text-sm text-gray-400">No previous blueprint proposals found on this terminal.</p>
                  <p className="text-xs text-gray-600 mt-1">Use the builder above to generate a strategy dossier.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
                  {savedProposals.map((prop) => (
                    <div 
                      key={prop.id}
                      className="p-4 bg-black/40 border border-[rgba(195,154,59,0.12)] rounded-xl relative hover:border-[rgba(195,154,59,0.3)] transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-gold-300 text-sm">{prop.companyName}</h4>
                          <span className="text-[10px] text-gray-500 block font-mono">{prop.industry || 'General Industry'} • Registered: {prop.email}</span>
                        </div>
                        <span className="text-[10px] text-gold-400 font-mono px-2 py-0.5 rounded border border-gold-400/25">
                          {prop.id}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 py-1 text-[11px] text-gray-400 border-t border-b border-gray-900 my-2">
                        <div>
                          <span className="text-gray-500 block text-[9px] uppercase font-mono">Disciplines</span>
                          <span>{prop.services.join(', ') || 'Strategic Consulting'}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block text-[9px] uppercase font-mono">Commitment</span>
                          <span className="font-mono text-gold-200">{prop.estimatedCostRange}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block text-[9px] uppercase font-mono">Target Span</span>
                          <span>{prop.timeline}</span>
                        </div>
                      </div>
                      <div className="text-[11px] text-gray-300 leading-relaxed pl-1 pt-1">
                        <span className="text-xs text-gold-400 tracking-wider font-mono block">Suggested Phase 01:</span>
                        <p className="italic text-gray-400">"{prop.suggestedSteps[0]}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
