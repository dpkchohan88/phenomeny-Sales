
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for navigation
import LiveActivityStrip from '@/components/LiveActivityStrip';
import AIBadge from '@/components/AIBadge';

const Hero = () => {
  const [index, setIndex] = useState(0);

  const rotatingTexts = [
    "Web apps",
    "Mobile apps",
    "Digital platforms",
    "Growth systems",
  ];

  const longestWord = "Digital platforms";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes magicGradientFade {
          0% {
            background-image: linear-gradient(90deg, #A855F7, #EC4899, #3B82F6, #F0ABFC);
            background-size: 300% 100%;
            background-position: 0% 50%;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          40% {
            background-image: linear-gradient(90deg, #A855F7, #EC4899, #3B82F6, #F0ABFC);
            background-size: 300% 100%;
            background-position: 100% 50%;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          100% {
            background-image: linear-gradient(90deg, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF);
            background-size: 100% 100%;
            background-position: 0% 50%;
            color: white;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: white;
          }
        }

        .magic-text {
          animation: magicGradientFade 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes residueFade {
          0% { opacity: 0; transform: scale(0.8); }
          20% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.1) translateY(-5px); }
        }

        @keyframes ribbonFlow {
          0% { stroke-dashoffset: 100; opacity: 0; }
          20% { opacity: 0.4; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }

        .magic-residue {
          position: absolute;
          pointer-events: none;
          z-index: -1;
        }

        .ribbon-svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 140%;
          pointer-events: none;
          overflow: visible;
        }

        .ribbon-path {
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          filter: blur(4px);
          stroke-dasharray: 100;
          animation: ribbonFlow 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      {/* Semantic Change: Use header for Hero section if it's the main introductory content, or section with h1 */}
      <section className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-[#0E0F11] to-[#121417] relative overflow-hidden" aria-labelledby="hero-heading">
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #B8B8B8 1px, transparent 1px),
                             linear-gradient(to bottom, #B8B8B8 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
          aria-hidden="true"
        />

        <div className="w-full max-w-[1200px] mx-auto z-10 flex flex-col items-center text-center">
          <div className="max-w-[900px] flex flex-col items-center">
            
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 md:mb-8"
            >
              <AIBadge />
            </motion.div>

            {/* Main Headline - H1 */}
            <motion.h1 
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="font-bold text-[#FFFFFF] leading-[1.15] tracking-tight font-sans flex flex-col md:flex-row flex-wrap justify-center items-center mb-6 md:mb-8 text-[32px] md:text-[48px] lg:text-7xl"
            >
              <span>Build. Launch. Grow.</span>
              <span className="hidden md:inline w-[0.25em]" aria-hidden="true"></span> 
              
              <span className="relative inline-flex justify-center md:justify-start items-center mt-1 md:mt-0">
                {/* Invisible text for width */}
                <span className="invisible opacity-0 h-0 md:h-auto" aria-hidden="true">{longestWord}.</span>
                
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    className="absolute inset-0 flex items-center justify-center md:justify-start left-0 magic-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    aria-label={`${rotatingTexts[index]}`}
                  >
                    {rotatingTexts[index]}.
                    
                    {/* Ribbon Accents */}
                    <div className="magic-residue w-full h-full inset-0" aria-hidden="true">
                      <svg className="ribbon-svg" viewBox="0 0 200 60" preserveAspectRatio="none">
                        <path d="M10,30 Q50,10 90,30 T190,30" stroke="#A855F7" className="ribbon-path" style={{ animationDelay: '0s' }} />
                        <path d="M10,35 Q60,55 110,35 T190,25" stroke="#3B82F6" className="ribbon-path" style={{ animationDelay: '0.1s' }} />
                        <path d="M20,25 Q70,5 120,25 T180,35" stroke="#EC4899" className="ribbon-path" style={{ animationDelay: '0.05s' }} />
                      </svg>
                    </div>

                    {/* Particle Accents */}
                    <span className="magic-residue w-1 h-1 bg-purple-400 rounded-full top-0 left-0 blur-[0.5px]" style={{ animation: 'residueFade 1.4s ease-out 0s forwards' }} />
                    <span className="magic-residue w-[3px] h-[3px] bg-blue-400 rounded-full top-1/2 -right-4 blur-[0.5px]" style={{ animation: 'residueFade 1.5s ease-out 0.1s forwards' }} />
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Live Activity Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="mb-6 md:mb-8 flex justify-center w-full max-w-[90vw]"
            >
              <LiveActivityStrip activeIndex={index} />
            </motion.div>

            {/* Sub-context label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="text-white/80 font-medium font-sans text-center tracking-normal mb-8 md:mb-10 text-[16px] md:text-xl lg:text-2xl px-4"
            >
              We build digital systems that actually work.<br className="hidden sm:block" />Websites. Apps. Growth. AI automation.
            </motion.p>

            {/* CTA Area */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center w-full"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 w-full sm:w-auto justify-center px-4 sm:px-0">
                {/* Primary CTA */}
                <Link
                  to="/contact" 
                  className="w-full sm:w-auto min-h-[44px] px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 rounded-xl bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] font-semibold text-white shadow-[0_0_20px_-5px_rgba(255,78,205,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,78,205,0.5)] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  Start Your Project
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </Link>

                {/* Secondary CTA */}
                <Link 
                  to="/how-it-works"
                  className="w-full sm:w-auto min-h-[44px] px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 rounded-xl bg-[#1A1D21] border border-white/10 font-medium text-white hover:bg-[#222529] hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  See Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
