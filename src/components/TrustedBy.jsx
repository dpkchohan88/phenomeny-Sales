import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  {
    name: 'Max Petz Specialists',
    url: 'https://maxpetzspecialists.com/',
    logo: 'https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/7d094e668cfeb1046518ed8a848556d1.webp',
  },
  {
    name: 'Benlycos',
    url: 'https://benlycos.com/',
    logo: 'https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/e068825639083cce4730e6a95b7898ec.webp',
  },
  {
    name: 'Otohom',
    url: 'https://otohom.com/',
    logo: 'https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/3a4d462690e0e8926b822740a6cec226.png',
  },
  {
    name: 'Shanta Karam',
    url: 'https://shantakaram.com/',
    logo: 'https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/f50174feefffaa30c5a0f92b8164b21a.webp',
  }
];

const TrustedBy = () => {
  return (
    <section className="py-8 md:py-16 lg:py-20 px-4 md:px-6 bg-[#121417] border-t border-white/5">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[14px] md:text-lg lg:text-xl font-medium text-white/90 font-sans text-center max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 px-2"
        >
          Trusted healthcare, professional services, manufacturing, education, and service-led enterprises.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24"
        >
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center transition-all duration-300 transform hover:scale-105 w-[40%] md:w-auto"
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="h-6 md:h-10 w-auto object-contain opacity-50 group-hover:opacity-100 transition-all duration-300 brightness-0 invert"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;