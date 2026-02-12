import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Upload, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { supabase } from '@/lib/customSupabaseClient';
import { cn } from '@/lib/utils';

const Badge = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex justify-center mb-6"
  >
    <span className="px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm antialiased">
      {text}
    </span>
  </motion.div>
);

const Careers = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    current_position: '',
    years_experience: '',
    linkedin_profile: '',
    portfolio_website: '',
    cover_letter: '',
    interested_open_discussion: false
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: "File size must be less than 2MB" }));
        setResumeFile(null);
        return;
      }
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, resume: "Only .pdf, .doc, and .docx allowed" }));
        setResumeFile(null);
        return;
      }
      setErrors(prev => ({ ...prev, resume: null }));
      setResumeFile(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = "Full name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.current_position.trim()) newErrors.current_position = "Current position is required";
    if (!formData.years_experience) newErrors.years_experience = "Experience is required";
    if (!resumeFile) newErrors.resume = "Resume is required";
    return newErrors;
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
      // 1. Upload Resume
      const timestamp = new Date().getTime();
      const fileName = `${formData.email.replace(/[^a-zA-Z0-9]/g, '')}_${timestamp}_${resumeFile.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('career_resumes')
        .upload(fileName, resumeFile);

      if (uploadError) throw uploadError;

      // 2. Insert Application Data
      const { error: insertError } = await supabase
        .from('career_applications')
        .insert([{
          ...formData,
          years_experience: parseInt(formData.years_experience),
          resume_file_path: uploadData.path
        }]);

      if (insertError) throw insertError;

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        current_position: '',
        years_experience: '',
        linkedin_profile: '',
        portfolio_website: '',
        cover_letter: '',
        interested_open_discussion: false
      });
      setResumeFile(null);

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (err) {
      console.error('Error submitting application:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead {...(seoMetadata['/careers'] || {})} />
      <main className="bg-[#0E0F11] text-white min-h-screen pt-24 font-sans antialiased text-rendering-optimizeLegibility">
        
        {/* 1. Hero Section */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <Badge text="Careers" />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight antialiased"
            >
              Join Phenomeny
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed antialiased"
            >
              We're building the operating system for the AI-native enterprise. If you're obsessed with complex systems, autonomy, and good design, we want to hear from you.
            </motion.p>
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button onClick={scrollToForm} size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105 antialiased">
                Apply Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. Why build with us? */}
        <section className="py-24 px-6 bg-[#13151A]/30 border-t border-white/5">
           <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 antialiased">Why build with us?</h2>
               <p className="text-xl text-gray-400 max-w-2xl mx-auto antialiased">We aren't just shipping features; we're defining a new category of enterprise infrastructure.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Solve Real Problems", desc: "We don't do hype. We build tools that run critical operations for real businesses." },
                 { title: "Build with Intention", desc: "Every line of code matters. We prioritize reliability, security, and scalability over quick hacks." },
                 { title: "Work with Thoughtful People", desc: "Our team is low-ego, high-curiosity. We value clear thinking and honest feedback." }
               ].map((item, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/[0.07] hover:border-pink-500/20 transition-all duration-300 group"
                  >
                   <h3 className="text-xl font-bold text-white mb-4 antialiased group-hover:text-pink-400 transition-colors">{item.title}</h3>
                   <p className="text-gray-400 leading-relaxed antialiased font-light">{item.desc}</p>
                 </motion.div>
               ))}
             </div>
           </div>
        </section>

        {/* 3. Open Positions */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 antialiased">Open Positions</h2>
            <p className="text-xl text-gray-400 antialiased">
              We are always looking for exceptional talent in engineering, product, and sales.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-xl p-8 text-center backdrop-blur-sm">
             <p className="text-gray-300 text-lg antialiased">
               We operate with a general application model. If you believe you can contribute to our mission, tell us how below. We create roles for the right people.
             </p>
          </div>
        </section>

        {/* 4. Application Form */}
        <section ref={formRef} className="py-24 px-6 bg-[#13151A]/50 border-y border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 antialiased">Start your application</h2>
              <p className="text-gray-400 antialiased">Tell us about yourself and your work.</p>
            </div>

            <div className="bg-[#0E0F11] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
               
               <AnimatePresence mode="wait">
                 {submitStatus === 'success' ? (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     className="text-center py-20"
                   >
                     <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-6 border border-green-500/20 mx-auto">
                        <CheckCircle2 size={40} />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-3 antialiased">Application Received</h3>
                     <p className="text-gray-400 antialiased">Thanks for applying. We'll review your application and be in touch.</p>
                   </motion.div>
                 ) : (
                    <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                      {submitStatus === 'error' && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3 text-red-400 mb-6">
                          <AlertCircle size={20} />
                          <span className="text-sm">Something went wrong. Please try again.</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold antialiased">Full Name *</label>
                          <input 
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            className={cn("w-full bg-[#1A1C23] border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all antialiased", errors.full_name ? "border-red-500" : "border-white/10")}
                          />
                          {errors.full_name && <p className="text-red-400 text-xs antialiased">{errors.full_name}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold antialiased">Email *</label>
                          <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={cn("w-full bg-[#1A1C23] border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all antialiased", errors.email ? "border-red-500" : "border-white/10")}
                          />
                          {errors.email && <p className="text-red-400 text-xs antialiased">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold antialiased">Phone *</label>
                          <input 
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={cn("w-full bg-[#1A1C23] border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all antialiased", errors.phone ? "border-red-500" : "border-white/10")}
                          />
                          {errors.phone && <p className="text-red-400 text-xs antialiased">{errors.phone}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold antialiased">Current Position *</label>
                          <input 
                            type="text"
                            name="current_position"
                            value={formData.current_position}
                            onChange={handleChange}
                            className={cn("w-full bg-[#1A1C23] border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all antialiased", errors.current_position ? "border-red-500" : "border-white/10")}
                          />
                          {errors.current_position && <p className="text-red-400 text-xs antialiased">{errors.current_position}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold antialiased">Years of Experience *</label>
                         <input 
                            type="number"
                            name="years_experience"
                            min="0"
                            value={formData.years_experience}
                            onChange={handleChange}
                            className={cn("w-full bg-[#1A1C23] border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all antialiased", errors.years_experience ? "border-red-500" : "border-white/10")}
                          />
                         {errors.years_experience && <p className="text-red-400 text-xs antialiased">{errors.years_experience}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold antialiased">LinkedIn Profile</label>
                          <input 
                            type="text"
                            name="linkedin_profile"
                            value={formData.linkedin_profile}
                            onChange={handleChange}
                            className="w-full bg-[#1A1C23] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all antialiased"
                          />
                        </div>
                         <div className="space-y-2">
                          <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold antialiased">Portfolio / Website</label>
                          <input 
                            type="text"
                            name="portfolio_website"
                            value={formData.portfolio_website}
                            onChange={handleChange}
                            className="w-full bg-[#1A1C23] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all antialiased"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold antialiased">Cover Letter / Note (Optional)</label>
                        <textarea 
                          name="cover_letter"
                          rows="4"
                          value={formData.cover_letter}
                          onChange={handleChange}
                          className="w-full bg-[#1A1C23] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all resize-none antialiased"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold antialiased">Resume / CV *</label>
                        <div className={cn("border-2 border-dashed rounded-lg p-6 text-center transition-all cursor-pointer antialiased", errors.resume ? "border-red-500 bg-red-500/5" : "border-white/10 hover:border-pink-500/50 hover:bg-white/5")}>
                          <input 
                            type="file" 
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden" 
                            id="resume-upload"
                          />
                          <label htmlFor="resume-upload" className="cursor-pointer block">
                            <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                            {resumeFile ? (
                              <span className="text-pink-400 font-medium antialiased">{resumeFile.name}</span>
                            ) : (
                              <span className="text-gray-400 text-sm antialiased">Upload Resume (PDF, DOC, DOCX - Max 2MB)</span>
                            )}
                          </label>
                        </div>
                        {errors.resume && <p className="text-red-400 text-xs antialiased">{errors.resume}</p>}
                      </div>

                      <div className="pt-2">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="checkbox"
                            name="interested_open_discussion"
                            checked={formData.interested_open_discussion}
                            onChange={handleChange}
                            className="w-5 h-5 rounded border-white/20 bg-[#1A1C23] checked:bg-pink-500 transition-all"
                          />
                          <span className="text-sm text-gray-400 group-hover:text-gray-300 antialiased">
                            I'm open to a general discussion even if no specific role matches my skills yet.
                          </span>
                        </label>
                      </div>

                      <div className="pt-6">
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#EC4899] hover:bg-[#db2777] text-white font-bold h-12 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed antialiased"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <Loader2 size={18} className="animate-spin" /> Submitting...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Submit Application <ArrowRight size={18} />
                            </span>
                          )}
                        </Button>
                      </div>

                    </form>
                 )}
               </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 5. Careers at Phenomeny */}
        <section className="py-24 px-6 border-b border-white/5">
           <div className="max-w-4xl mx-auto">
             <div className="mb-12">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 antialiased">Careers at Phenomeny</h2>
               <p className="text-xl text-gray-400 font-light antialiased">Building the operating system for the AI-native enterprise.</p>
             </div>
             <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light antialiased">
               <p>
                 We are building the infrastructure that will allow enterprises to safely, reliably, and intelligently integrate AI into their core operations. This is not about simple chatbots or improved search; it is about fundamentally re-architecting how organizations sense, decide, and act.
               </p>
               <p>
                 To achieve this, we are assembling a team of individuals who are not just skilled, but deeply thoughtful about the implications of the systems they build. We value clarity over cleverness, durability over speed, and honest problem-solving over hype.
               </p>
             </div>
           </div>
        </section>

        {/* 6. Our Culture */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold text-white mb-6 antialiased">Our culture</h2>
             <p className="text-lg text-gray-300 mb-8 font-light antialiased">
               Culture is what happens when no one is watching. At Phenomeny, we cultivate an environment defined by:
             </p>
             <ul className="space-y-4 mb-8">
               {[
                 "Thoughtful problem-solving that digs to the root cause.",
                 "Respect for complexity—we don't pretend hard things are easy.",
                 "Long-term thinking over short-term optimization.",
                 "Clear ownership of work and the freedom to execute.",
                 "Direct communication that is kind but honest."
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-gray-300 font-light antialiased">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
             <p className="text-lg text-gray-300 font-light antialiased">
               We believe that the best work comes from people who are given the context, tools, and trust to solve hard problems in their own way.
             </p>
          </div>
        </section>

        {/* 7. How we work */}
        <section className="py-24 px-6 border-b border-white/5">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold text-white mb-6 antialiased">How we work</h2>
             <p className="text-lg text-gray-300 mb-8 font-light antialiased">
               Our work philosophy is grounded in engineering rigor and operational reality. We prioritize:
             </p>
             <ul className="space-y-4 mb-8">
               {[
                 "Understanding how businesses actually function before proposing change.",
                 "Designing solutions that work within constraints, not just in a vacuum.",
                 "Building with governance, auditability, and continuity in mind from day one.",
                 "Avoiding shortcuts that create future risk or technical debt."
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-gray-300 font-light antialiased">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
             <p className="text-lg text-gray-300 font-light antialiased">
               We treat our internal operations with the same care as our product. We document, we review, and we iterate.
             </p>
          </div>
        </section>

        {/* 8. What we value */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold text-white mb-6 antialiased">What we value</h2>
             <p className="text-lg text-gray-300 mb-8 font-light antialiased">
               We look for people who share our fundamental values:
             </p>
             <ul className="space-y-4 mb-8">
               {[
                 "Think in systems not silos—seeing the whole picture.",
                 "Comfortable with ambiguity and acting on incomplete information.",
                 "Prefer durable solutions over clever ones.",
                 "Care about the long-term impact of their work.",
                 "Can explain complex ideas clearly and calmly."
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-gray-300 font-light antialiased">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
             <p className="text-lg text-gray-300 font-light antialiased">
               If this resonates with you, we would love to have a conversation.
             </p>
          </div>
        </section>

        {/* 9. Opportunities & Contact */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 antialiased">Opportunities</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto antialiased font-light leading-relaxed">
              We are deliberate about our growth. We hire when we find the right person, not just to fill a seat. If you are interested in what we are building, please reach out.
            </p>
            <div className="inline-block p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-lg font-medium text-white mb-1 antialiased">Contact for Careers</p>
              <a href="mailto:deepak@pddt.in" className="text-pink-400 hover:text-pink-300 transition-colors text-xl font-bold antialiased">
                deepak@pddt.in
              </a>
            </div>
            
            <div className="mt-16 pt-16 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 antialiased">Not ready to apply?</h3>
              <p className="text-gray-400 mb-8 antialiased">Follow our work or reach out for a partnership instead.</p>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg antialiased">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Careers;