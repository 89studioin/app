import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import VideoShowcase from './components/VideoShowcase';
import WhatsAppDemo from './components/WhatsAppDemo';
import SelectedWork from './components/SelectedWork';
import Process from './components/Process';
import PricingAndFAQ from './components/PricingAndFAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProposalModal from './components/ProposalModal';
import WhatsAppFloatingCTA from './components/WhatsAppFloatingCTA';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import SideStageIndicator from './components/SideStageIndicator';

export default function App() {
  const [proposalOpen, setProposalOpen] = useState(false);

  React.useEffect(() => {
    // Elegant system to automatically focus and smooth scroll to the target anchor on fresh page load or reload
    if (window.location.hash) {
      const hash = window.location.hash;
      const timer = setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, []);

  const handleOpenProposal = () => {
    setProposalOpen(true);
  };

  const handleCloseProposal = () => {
    setProposalOpen(false);
  };

  const handleViewWork = () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="studio-app" className="relative min-h-screen bg-[#030304] overflow-x-hidden selection:bg-gold-500/30 selection:text-white">
      {/* Luxury Cinematic Scrollytelling Global HUD elements */}
      <CursorGlow />
      <ScrollProgress />
      <SideStageIndicator />
      
      {/* High Rich Premium Background Image Backdrop underlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-20 mix-blend-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("/src/assets/images/cinematic_hero_bg_1779572469012.png")' }}
      />
      
      {/* Background Mesh Lines */}
      <div className="absolute inset-0 grid-bg-mesh opacity-35 pointer-events-none z-0" />

      {/* Luxury Ambience Spotlights */}
      <div className="absolute top-[5%] left-[20%] w-[600px] h-[600px] bg-gradient-to-br from-gold-500/5 to-transparent blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[45%] right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-gold-400/5 to-transparent blur-[120px] rounded-full pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-[10%] left-[15%] w-[550px] h-[550px] bg-gradient-to-tr from-gold-650/5 to-transparent blur-[130px] rounded-full pointer-events-none z-0" />

      {/* Floating Header */}
      <Navbar onOpenProposal={handleOpenProposal} />

      {/* Hero Content with sparkly animations */}
      <Hero onOpenProposal={handleOpenProposal} onViewWork={handleViewWork} />

      {/* Expert Disciplinary Columns */}
      <Expertise onOpenProposal={handleOpenProposal} />

      {/* Cinematic AI Video reel showcase */}
      <VideoShowcase />

      {/* Interactive WhatsApp Live qualifying demo */}
      <WhatsAppDemo />

      {/* Beautiful High Contrast Portfolios Grid */}
      <SelectedWork onOpenProposal={handleOpenProposal} />

      {/* Dynamic Process Stepper accordion */}
      <Process />

      {/* Strategic Pricing Tiers and FAQ inquiries accordion */}
      <PricingAndFAQ />

      {/* Contact Form with transaction local logger */}
      <ContactForm onOpenProposal={handleOpenProposal} />

      {/* Sleek luxury Footer segment */}
      <Footer />

      {/* Sticky Floating CTA widget */}
      <WhatsAppFloatingCTA />

      {/* Dynamic Stepper Strategy and Proposal Builder element */}
      <ProposalModal isOpen={proposalOpen} onClose={handleCloseProposal} />

    </div>
  );
}
