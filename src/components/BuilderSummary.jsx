import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Loader2, 
  Layout, 
  Settings, 
  Wrench, 
  TrendingUp,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { formatValue, formatArray, generateSummary } from '@/utils/builderSummaryFormatters';



const SummaryCard = ({ number, title, subtitle, icon: Icon, items }) => {
  if (!items || items.length === 0) return null;


  return (
    <div className="relative overflow-hidden rounded-xl bg-[#121821] backdrop-blur-md border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
      <div className="absolute top-0 left-0 h-full w-[4px] bg-[#7C3AED]" />
      
      <div className="p-7 md:p-8 pl-9 md:pl-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{subtitle}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 flex-shrink-0">
            <Icon size={20} />
          </div>
        </div>


        <div className="space-y-3 mt-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7C3AED] flex-shrink-0" />
              <span className="text-[15px] text-gray-200 leading-relaxed font-light">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const BuilderSummary = ({ formData, onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  // NEW: Contact information state
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: ''
  });



  const handleSubmit = async () => {
    // NEW: Validate contact info
    if (!contactInfo.fullName || !contactInfo.email) {
      setError("Please provide your name and email address");
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email to continue",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setError(null);


    try {
      const payload = {
        platform_type: formData.platform_type,
        access_model: formData.access_model,
        experience_type: formData.experience_type || [],
        commerce_features: formData.commerce_features || [],
        user_management_features: formData.user_management_features || [],
        operations_features: formData.operations_features || [],
        reporting_features: formData.reporting_features || [],
        admin_controls: formData.admin_controls || [],
        integrations: formData.integrations || [],
        automation_features: formData.automation_features || [],
        scale_level: formData.scale_level,
        growth_features: formData.growth_features || [],
        source_page: 'build_your_app_wizard',
        // NEW: Contact fields
        full_name: contactInfo.fullName,
        email: contactInfo.email,
        phone: contactInfo.phone,
        company_name: contactInfo.companyName
      };


      const { error: insertError } = await supabase
        .from('phenomeny_build_your_app')
        .insert([payload]);


      if (insertError) throw insertError;


      setIsSuccess(true);
      toast({
        title: "Thank You! 🎉",
        description: "Thanks for sharing your requirements! Our team will connect with you shortly to discuss your project.",
        className: "bg-green-600 border-none text-white",
      });


    } catch (err) {
      console.error('Submission error:', err);
      setError("Failed to submit configuration. Please check your connection and try again.");
      toast({
        title: "Submission Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };



  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl mx-auto text-center py-20"
      >
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 blur-[40px] opacity-20 rounded-full" />
            <div className="relative w-28 h-28 rounded-full bg-[#0B0F14] border-2 border-green-500/50 flex items-center justify-center shadow-2xl">
               <motion.div
                 initial={{ scale: 0, rotate: -90 }}
                 animate={{ scale: 1, rotate: 0 }}
                 transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
               >
                 <CheckCircle2 size={56} className="text-green-500" />
               </motion.div>
            </div>
          </div>
        </div>
        <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Blueprint Confirmed</h3>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
          We've received your architectural requirements. Our engineering team is reviewing your stack to prepare the implementation roadmap.
        </p>
        <Button 
          onClick={() => window.location.reload()}
          className="h-14 px-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all duration-300 hover:scale-105"
        >
          <RefreshCw className="mr-2 h-5 w-5" /> Start New Build
        </Button>
      </motion.div>
    );
  }


  const level1Items = [
    formData.platform_type ? `Platform Type: ${formatValue(formData.platform_type)}` : null,
    formData.access_model ? `Access Model: ${formatValue(formData.access_model)}` : null,
    ...formatArray(formData.experience_type).map(item => `Experience Type: ${item}`)
  ].filter(Boolean);


  const level2Items = [
    ...formatArray(formData.commerce_features).map(item => `Commerce: ${item}`),
    ...formatArray(formData.user_management_features).map(item => `User Management: ${item}`),
    ...formatArray(formData.operations_features).map(item => `Operations: ${item}`),
    ...formatArray(formData.reporting_features).map(item => `Reporting: ${item}`)
  ].filter(Boolean);
  const level2Unique = [...new Set(level2Items)];


  const level3Items = [
    ...formatArray(formData.admin_controls).map(item => `Admin Control: ${item}`),
    ...formatArray(formData.integrations).map(item => `Integration: ${item}`),
    ...formatArray(formData.automation_features).map(item => `Automation: ${item}`)
  ].filter(Boolean);
  const level3Unique = [...new Set(level3Items)];


  const level4Items = [
    formData.scale_level ? `Target Scale: ${formatValue(formData.scale_level)}` : null,
    ...formatArray(formData.growth_features).map(item => `Growth Feature: ${item}`)
  ].filter(Boolean);




  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <div className="text-center mb-8">
        <h2 className="text-[18px] md:text-[20px] font-bold text-white mb-8 leading-relaxed">
          Here's the blueprint for your digital system.
        </h2>
        <p className="text-base text-gray-400 font-normal italic max-w-3xl mx-auto mb-8">
          "{generateSummary(formData)}"
        </p>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <SummaryCard 
          number="1" 
          title="Interface & Experience" 
          subtitle="User Touchpoints & Access"
          icon={Layout}
          items={level1Items}
        />
        <SummaryCard 
          number="2" 
          title="Platform Logic" 
          subtitle="Core Functionality & Data"
          icon={Settings}
          items={level2Unique}
        />
        <SummaryCard 
          number="3" 
          title="Operations & Admin" 
          subtitle="Management & Integrations"
          icon={Wrench}
          items={level3Unique}
        />
        <SummaryCard 
          number="4" 
          title="Scale & Growth" 
          subtitle="Infrastructure & Future-Proofing"
          icon={TrendingUp}
          items={level4Items}
        />
      </div>


      {/* NEW: Contact Information Section */}
      <div className="mb-8 p-8 bg-[#121821] rounded-xl border border-white/10">
        <h3 className="text-xl font-bold text-white mb-2">Your Contact Information</h3>
        <p className="text-sm text-gray-400 mb-6">We'll use this to discuss your project</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name *"
            value={contactInfo.fullName}
            onChange={(e) => setContactInfo({...contactInfo, fullName: e.target.value})}
            required
            className="h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#7C3AED] transition-colors"
          />
          
          <input
            type="email"
            placeholder="Email Address *"
            value={contactInfo.email}
            onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
            required
            className="h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#7C3AED] transition-colors"
          />
          
          <input
            type="tel"
            placeholder="Phone Number"
            value={contactInfo.phone}
            onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
            className="h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#7C3AED] transition-colors"
          />
          
          <input
            type="text"
            placeholder="Company Name (Optional)"
            value={contactInfo.companyName}
            onChange={(e) => setContactInfo({...contactInfo, companyName: e.target.value})}
            className="h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#7C3AED] transition-colors"
          />
        </div>
      </div>


      {error && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-8"
        >
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl flex items-center justify-center gap-3">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        </motion.div>
      )}


      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button 
          onClick={onBack}
          variant="outline"
          className="w-full sm:w-auto h-14 px-8 bg-transparent border-white/10 text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/20 rounded-xl transition-all"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Edit
        </Button>
        
        <Button 
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full sm:w-auto h-14 px-12 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:from-[#6D28D9] hover:to-[#DB2777] text-white font-bold text-lg rounded-xl shadow-[0_0_25px_-5px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin h-5 w-5" /> Processing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Confirm & Submit <ArrowRight className="h-5 w-5" />
            </span>
          )}
        </Button>
      </div>
    </motion.div>
  );
};



export default BuilderSummary;
