
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import ProblemStatement from '@/components/ProblemStatement';
import TheShift from '@/components/TheShift';
import CapabilityMatrix from '@/components/CapabilityMatrix';
import AppBuilderSection from '@/components/AppBuilderSection';
import AIToolsSection from '@/components/AIToolsSection';
import AITeamSolutionsSection from '@/components/AITeamSolutionsSection';
import EnterpriseComplianceSection from '@/components/EnterpriseComplianceSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import FloatingContactWidget from '@/components/FloatingContactWidget';
import { Toaster } from '@/components/ui/toaster';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { redirects } from '@/config/redirects';

// Keep List Imports
import Platform from '@/pages/Platform';
import Capabilities from '@/pages/Capabilities';
import AIAssistants from '@/pages/AIAssistants';
import Enterprise from '@/pages/Enterprise';
import Contact from '@/pages/Contact';
import Manufacturing from '@/pages/Manufacturing';
import Education from '@/pages/Education';
import Careers from '@/pages/Careers';
import Resources from '@/pages/Resources';
import About from '@/pages/About';

// Mapped Imports (based on Keep List intent)
import HealthcareTransformation from '@/pages/HealthcareTransformation';
import ProfessionalServicesTransformation from '@/pages/ProfessionalServicesTransformation';
import EnterpriseOperationsTransformation from '@/pages/EnterpriseOperationsTransformation';

// Security / Legal Imports
import Legal from '@/pages/security/Legal';
import Security from '@/pages/security/Security';
import Privacy from '@/pages/security/Privacy';
import Terms from '@/pages/security/Terms';
import Compliance from '@/pages/security/Compliance';

// Home Component
const Home = () => (
  <>
    <SEOHead {...seoMetadata['/']} />
    <main>
      <Hero />
      <TrustedBy />
      <ProblemStatement />
      <TheShift />
      <CapabilityMatrix />
      <AppBuilderSection />
      <AIToolsSection />
      <AITeamSolutionsSection />
      <EnterpriseComplianceSection />
      <FinalCTASection />
    </main>
  </>
);

// Generic Page Placeholder
const GenericPage = ({ path }) => {
  const metadata = seoMetadata[path] || seoMetadata['/404'];
  return (
    <>
      <SEOHead {...metadata} />
      <main className="pt-32 pb-20 px-6 min-h-screen bg-[#0E0F11]">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {metadata.title?.split('|')[0] || "Page"}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {metadata.description}
            </p>
          </section>
          <div className="p-12 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm text-center">
             <p className="text-gray-300">
               This is a placeholder content area for <strong>{path}</strong>.
             </p>
          </div>
        </div>
      </main>
    </>
  );
};

// 404 Page
const NotFound = () => (
  <>
    <SEOHead {...seoMetadata['/404']} />
    <main className="pt-32 pb-20 px-6 min-h-screen bg-[#0E0F11] flex items-center justify-center">
       <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-8">Page not found.</p>
          <a href="/" className="px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition">
            Return Home
          </a>
       </div>
    </main>
  </>
);

// Redirect Middleware
const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectRule = redirects.find(r => r.source === location.pathname);
    if (redirectRule) {
      navigate(redirectRule.destination, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

function App() {
  return (
    <Router>
      <RedirectHandler />
      <Header />
      <FloatingContactWidget />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Core Pages from Keep List */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/ai-assistants" element={<AIAssistants />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/pricing" element={<GenericPage path="/pricing" />} />
        <Route path="/solutions" element={<GenericPage path="/solutions" />} />
        
        {/* Industries / Verticals */}
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/education" element={<Education />} />
        <Route path="/healthcare" element={<HealthcareTransformation />} />
        <Route path="/professional-services" element={<ProfessionalServicesTransformation />} />
        <Route path="/operations" element={<EnterpriseOperationsTransformation />} />
        
        {/* Company */}
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<GenericPage path="/blog" />} />
        
        {/* Legal & Security */}
        <Route path="/security" element={<Legal />} /> {/* Main Security/Legal landing often maps here in this template */}
        <Route path="/security/security" element={<Security />} />
        <Route path="/security/privacy" element={<Privacy />} />
        <Route path="/security/terms" element={<Terms />} />
        <Route path="/security/compliance" element={<Compliance />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
