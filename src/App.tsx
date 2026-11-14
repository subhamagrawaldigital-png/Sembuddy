import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TurnitinSection } from './components/TurnitinSection';
import { ComparisonSection } from './components/ComparisonSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { DocumentPreviewSection } from './components/DocumentPreviewSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import {
  AssignmentStudioModal,
  GroupPricingModal,
  PackCheckoutModal,
  TurnitinReportModal,
} from './components/InteractiveModals';
import type { PricingPack } from './data/landingContent';

export default function App() {
  const [studioOpen, setStudioOpen] = useState(false);
  const [reportType, setReportType] = useState<'ai' | 'similarity' | null>(null);
  const [selectedPack, setSelectedPack] = useState<PricingPack | null>(null);
  const [groupPricingOpen, setGroupPricingOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBF9] text-slate-900">
      <Navbar onStartAssignment={() => setStudioOpen(true)} />

      <main>
        {/* SECTION 1: HERO */}
        <HeroSection
          onStartAssignment={() => setStudioOpen(true)}
          onJumpToPreview={() => scrollToSection('document-preview')}
        />

        {/* SECTION 2: TURNITIN & ORIGINALITY */}
        <TurnitinSection onOpenReport={(type) => setReportType(type)} />

        {/* SECTION 3: ONE PLATFORM VS FIVE TOOLS */}
        <ComparisonSection onCreateAssignment={() => setStudioOpen(true)} />

        {/* SECTION 4: FOUR CORE BENEFITS */}
        <BenefitsSection />

        {/* SECTION 5: HOW IT WORKS */}
        <HowItWorksSection onStartAssignment={() => setStudioOpen(true)} />

        {/* SECTION 6: DOCUMENT PREVIEW */}
        <DocumentPreviewSection onPreviewAssignment={() => setStudioOpen(true)} />

        {/* SECTIONS 7, 8, 9: PRICING, HOW YOUR CREDITS WORK, TRUST & PRIVACY */}
        <PricingSection
          onSelectPack={(pack) => setSelectedPack(pack)}
          onOpenGroupPricing={() => setGroupPricingOpen(true)}
        />

        {/* SECTIONS 10, 11 & FOOTER: FAQs, FINAL CTA, FOOTER */}
        <FaqSection onStartAssignment={() => setStudioOpen(true)} />
      </main>

      {/* Interactive Workflows */}
      <AssignmentStudioModal
        open={studioOpen}
        onClose={() => setStudioOpen(false)}
        onOpenPricing={() => scrollToSection('pricing')}
      />

      <TurnitinReportModal
        reportType={reportType}
        onClose={() => setReportType(null)}
        onSwitchType={(type) => setReportType(type)}
      />

      <PackCheckoutModal
        pack={selectedPack}
        onClose={() => setSelectedPack(null)}
        onStartPreview={() => setStudioOpen(true)}
      />

      <GroupPricingModal
        open={groupPricingOpen}
        onClose={() => setGroupPricingOpen(false)}
      />
    </div>
  );
}
