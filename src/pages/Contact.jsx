import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/customSupabaseClient';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Loader2, 
  Building2, 
  Users, 
  Globe, 
  Cpu, 
  Briefcase 
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    companySize: '',
    industry: '',
    systems: '',
    challenge: '',
    modernizationFocus: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid work email";
    }
    if (!formData.companyName.trim() || formData.companyName.length < 2) {
      newErrors.companyName = "Company name is required";
    }
    if (!formData.companySize) {
      newErrors.companySize = "Please select company size";
    }
    if (!formData.industry) {
      newErrors.industry = "Please select an industry";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { error } = await supabase
        .from('contact_leads')
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          company_name: formData.companyName,
          company_size: formData.companySize,
          industry: formData.industry,
          systems: formData.systems,
          challenge: formData.challenge,
          modernization_focus: formData.modernizationFocus
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        companySize: '',
        industry: '',
        systems: '',
        challenge: '',
        modernizationFocus: false
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = ["Healthcare", "Professional Services", "Service Businesses", "Manufacturing", "Other"];
  const sizes = ["10–50", "50–200", "200–1000", "1000+"];

  return (
    <>
      <SEOHead {...(seoMetadata['/contact'] || {})} />
      <main className="min-h-screen bg-[#0E0F11] text-white pt-24 pb-20 px-6 font-sans">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Context & Information */}
          <div className="space-y-10 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Let's discuss your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  operational context
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                We work with enterprises ready to move beyond basic automation. 
                Tell us about your current stack and challenges, and we'll help you design a path to autonomy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 border border-pink-500/20">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Enterprise Ready</h3>
                  <p className="text-sm text-gray-400">Built for scale, security, and complex workflows.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">AI-Native</h3>
                  <p className="text-sm text-gray-400">Not just a wrapper. Deep integration into your stack.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Expert Support</h3>
                  <p className="text-sm text-gray-400">Direct access to implementation engineers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Qualification Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#13151A] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Background Noise/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-6 border border-green-500/20">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Request Received</h3>
                  <p className="text-gray-400 max-w-sm">
                    Thanks. We'll review your context and reach out if there's a fit.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3 text-red-400">
                      <AlertCircle size={20} />
                      <span className="text-sm">Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white border-b border-white/5 pb-2">About You</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Full Name *</label>
                        <input 
                          type="text" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={cn(
                            "w-full bg-[#0E0F11] border rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all",
                            errors.fullName ? "border-red-500" : "border-white/10 focus:border-pink-500"
                          )}
                          placeholder="Jane Doe"
                        />
                        {errors.fullName && <p className="text-red-400 text-xs">{errors.fullName}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Work Email *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={cn(
                            "w-full bg-[#0E0F11] border rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all",
                            errors.email ? "border-red-500" : "border-white/10 focus:border-pink-500"
                          )}
                          placeholder="jane@company.com"
                        />
                        {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white border-b border-white/5 pb-2 pt-2">Company Details</h3>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Company Name *</label>
                      <input 
                        type="text" 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={cn(
                          "w-full bg-[#0E0F11] border rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all",
                          errors.companyName ? "border-red-500" : "border-white/10 focus:border-pink-500"
                        )}
                        placeholder="Acme Corp"
                      />
                      {errors.companyName && <p className="text-red-400 text-xs">{errors.companyName}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Size *</label>
                        <select 
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          className={cn(
                            "w-full bg-[#0E0F11] border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all appearance-none",
                            errors.companySize ? "border-red-500" : "border-white/10 focus:border-pink-500",
                            !formData.companySize && "text-gray-500"
                          )}
                        >
                          <option value="" disabled>Select size</option>
                          {sizes.map(s => <option key={s} value={s} className="text-white bg-[#0E0F11]">{s} employees</option>)}
                        </select>
                        {errors.companySize && <p className="text-red-400 text-xs">{errors.companySize}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Industry *</label>
                        <select 
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className={cn(
                            "w-full bg-[#0E0F11] border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all appearance-none",
                            errors.industry ? "border-red-500" : "border-white/10 focus:border-pink-500",
                            !formData.industry && "text-gray-500"
                          )}
                        >
                          <option value="" disabled>Select industry</option>
                          {industries.map(i => <option key={i} value={i} className="text-white bg-[#0E0F11]">{i}</option>)}
                        </select>
                        {errors.industry && <p className="text-red-400 text-xs">{errors.industry}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white border-b border-white/5 pb-2 pt-2">Context</h3>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Current Systems (Optional)</label>
                      <textarea 
                        name="systems"
                        value={formData.systems}
                        onChange={handleChange}
                        maxLength={500}
                        rows={2}
                        className="w-full bg-[#0E0F11] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all resize-none"
                        placeholder="ERP, CRM, internal tools..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Primary Operational Challenge (Optional)</label>
                      <textarea 
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        maxLength={1000}
                        rows={4}
                        className="w-full bg-[#0E0F11] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all resize-none"
                        placeholder="What is the main friction point you want to solve?"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input 
                          type="checkbox"
                          name="modernizationFocus"
                          checked={formData.modernizationFocus}
                          onChange={handleChange}
                          className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-white/20 bg-[#0E0F11] checked:border-pink-500 checked:bg-pink-500 transition-all"
                        />
                        <CheckCircle2 size={14} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                      </div>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors select-none">
                        Our primary focus is modernization and moving off legacy systems.
                      </span>
                    </label>
                  </div>

                  <div className="pt-6">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#EC4899] hover:bg-[#db2777] text-white font-bold h-12 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 size={18} className="animate-spin" /> Processing...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Discuss my business setup <Send size={18} />
                        </span>
                      )}
                    </Button>
                    <p className="text-center text-xs text-gray-500 mt-4">
                      Your information is secure. We respect your inbox and privacy.
                    </p>
                  </div>

                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Contact;