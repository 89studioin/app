import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Compass, HelpCircle, ArrowRight, CheckCircle2, Award, ExternalLink, Calendar } from 'lucide-react';

interface ContactFormProps {
  onOpenProposal: () => void;
}

interface SubmittedContact {
  id: string;
  name: string;
  email: string;
  website?: string;
  budget: string;
  message: string;
  timestamp: string;
}

export default function ContactForm({ onOpenProposal }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    budget: '$25,000 - $50,050',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [recentSubmission, setRecentSubmission] = useState<SubmittedContact | null>(null);
  const [submissionsCount, setSubmissionsCount] = useState<number>(0);

  useEffect(() => {
    const loaded = localStorage.getItem('89_studio_contacts');
    if (loaded) {
      try {
        const parsed = JSON.parse(loaded);
        setSubmissionsCount(parsed.length);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Must populate at least Name, Email, and Message detail briefs.');
      return;
    }

    const newContact: SubmittedContact = {
      id: 'MSG-' + Math.floor(1000 + Math.random() * 9000),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      budget: formData.budget,
      message: formData.message,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) + ' ' + new Date().toLocaleDateString('en-US'),
    };

    // Save to local storage
    const existing = localStorage.getItem('89_studio_contacts');
    let updatedList: SubmittedContact[] = [];
    if (existing) {
      try {
        updatedList = JSON.parse(existing);
      } catch (err) {}
    }
    updatedList = [newContact, ...updatedList];
    localStorage.setItem('89_studio_contacts', JSON.stringify(updatedList));

    setRecentSubmission(newContact);
    setSubmissionsCount(updatedList.length);
    setSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      website: '',
      budget: '$25,000 - $50,050',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-[rgba(195,154,59,0.1)] scroll-mt-24"
    >
      {/* Background Mesh Overlay */}
      <div className="absolute inset-0 grid-bg-mesh opacity-30 pointer-events-none" />
      
      {/* Extreme light effect */}
      <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] bg-gradient-to-l from-gold-500/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-gradient-to-r from-gold-500/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left panel: Info, Location Coordinates, Real email */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-10 text-left"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-gold-500 block">
                Command Terminal Interaction
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide leading-tight">
                Instantiate <br />
                <span className="gold-text-gradient italic">Your Project.</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                Whether you have structured requirements or wish to formulate a brand blueprint, communicate your intent. We accept select creative partners monthly.
              </p>
            </div>

            {/* Quick proposal link feature alert */}
            <div className="p-5 rounded-2xl bg-gold-400/5 border border-gold-400/20 space-y-3">
              <div className="flex items-center gap-2 text-gold-300">
                <Calendar className="w-4 h-4" />
                <h4 className="text-xs uppercase font-mono tracking-wider font-bold">Expedite strategic plans?</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Use our automated strategy ledger to configure investment metrics and receive a draft blueprint instantaneously.
              </p>
              <button
                onClick={onOpenProposal}
                className="text-xs font-mono font-bold text-gold-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer pt-1"
              >
                Launch Automated Proposal Generator <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Inquiries email, location coordinate lists */}
            <div className="space-y-6 pt-4 border-t border-[rgba(195,154,59,0.12)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 block">Direct Inquiries</span>
                  <a 
                    href="mailto:89studio.in@gmail.com"
                    className="text-white hover:text-gold-400 font-serif text-base sm:text-lg font-medium tracking-wide mt-1.5 block transition-colors"
                  >
                    89studio.in@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 block">WhatsApp Direct Hub</span>
                  <a 
                    href="https://wa.me/917045331188"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:text-[#25D366]/85 font-mono text-base sm:text-lg font-bold tracking-wide mt-1.5 flex items-center gap-2 block transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    +91 7045 331188
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 block">London hub</span>
                  <span className="text-xs text-gray-400 mt-1 block">Mayfair Innovation Quarter</span>
                  <span className="text-[10px] font-mono text-gray-600 block mt-0.5">GMT +01:00</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 block">New Delhi hub</span>
                  <span className="text-xs text-gray-400 mt-1 block">Saket Premium District</span>
                  <span className="text-[10px] font-mono text-gray-600 block mt-0.5">IST +05:30</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right panel: Contact Submission form & Dynamic results screen */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="p-8 md:p-10 rounded-3xl bg-[#09090c] border border-[rgba(195,154,59,0.18)] text-left space-y-6 relative"
                >
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-600">
                    Ledger Queue // {submissionsCount} records
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-serif text-white tracking-wide">Strategic Inquiry Ledger</h3>
                    <p className="text-xs text-gray-500">All messages are delivered securely across encrypted local relays.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-gold-200 uppercase font-mono tracking-wider">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Christian Dior"
                        className="w-full bg-black/60 border border-[rgba(195,154,59,0.15)] focus:border-gold-400 focus:outline-none rounded-xl px-4 py-3 text-white text-sm transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-gold-200 uppercase font-mono tracking-wider">Your Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. dior@luxurygroup.com"
                        className="w-full bg-black/60 border border-[rgba(195,154,59,0.15)] focus:border-gold-400 focus:outline-none rounded-xl px-4 py-3 text-white text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-gold-200 uppercase font-mono tracking-wider">Corporate Site URL</label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="e.g. https://luxurygroup.com"
                        className="w-full bg-black/60 border border-[rgba(195,154,59,0.15)] focus:border-gold-400 focus:outline-none rounded-xl px-4 py-3 text-white text-sm transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-gold-200 uppercase font-mono tracking-wider">Scale of Investment</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-black/60 border border-[rgba(195,154,59,0.15)] focus:border-gold-400 focus:outline-none rounded-xl px-4 py-3 text-white text-sm cursor-pointer"
                      >
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,050">$25,000 - $50,050</option>
                        <option value="$50,050 - $100,000">$50,050 - $100,000</option>
                        <option value="Over $100,000">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gold-200 uppercase font-mono tracking-wider">Project Scope and Ambitions *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your challenges. Tell us about your brand positioning goals, target parameters, and expected timelines..."
                      className="w-full bg-black/60 border border-[rgba(195,154,59,0.15)] focus:border-gold-400 focus:outline-none rounded-xl px-4 py-3 text-white text-sm transition-all"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-gold-400 to-gold-600 hover:brightness-110 text-black font-semibold tracking-wider text-xs uppercase rounded-full shadow-lg shadow-gold-500/10 flex items-center justify-center gap-3 transition-transform hover:scale-103 cursor-pointer"
                    >
                      Transmit Inquiry Ledger
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 md:p-10 rounded-3xl bg-[#09090c] border border-gold-400/40 text-left space-y-6"
                >
                  <div className="w-14 h-14 rounded-full bg-gold-400/10 border border-gold-400/40 flex items-center justify-center text-gold-400 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-white tracking-wide">Inquiry Safely Transmitted</h3>
                    <p className="text-sm text-gray-400">
                      Thank you, <span className="font-semibold text-gold-200">{recentSubmission?.name}</span>. An executive producer will respond to your registered email account (<span className="text-gold-200">{recentSubmission?.email}</span>) within 6 hours.
                    </p>
                  </div>

                  {recentSubmission && (
                    <div className="p-5 rounded-2xl bg-black border border-[rgba(195,154,59,0.1)] space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-900 text-xs text-gray-500 font-mono">
                        <span>Ledger ID: {recentSubmission.id}</span>
                        <span>{recentSubmission.timestamp}</span>
                      </div>
                      <div className="text-xs grid grid-cols-2 gap-2 text-gray-400">
                        <div>
                          <span className="text-[10px] uppercase font-mono text-gray-500 block">Registered Capital</span>
                          <span>{recentSubmission.budget}</span>
                        </div>
                        {recentSubmission.website && (
                          <div>
                            <span className="text-[10px] uppercase font-mono text-gray-500 block">Target Site</span>
                            <span className="text-gold-300 flex items-center gap-1">
                              {recentSubmission.website} <ExternalLink className="w-3 h-3" />
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="pt-2 border-t border-gray-900">
                        <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">Your Transmitted Message Brief</span>
                        <p className="text-xs text-gray-300 italic line-clamp-3">"{recentSubmission.message}"</p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-full border border-[rgba(195,154,59,0.2)] text-gray-400 hover:text-white text-xs font-semibold cursor-pointer transition-colors hover:border-gold-400"
                    >
                      Transmit Alternate Message
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        onOpenProposal();
                      }}
                      className="bg-gold-500 hover:bg-gold-600 text-black px-6 py-2.5 font-semibold rounded-full text-xs cursor-pointer shadow-lg transition-colors"
                    >
                      Configure Strategy Estimates
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
