import React from 'react';
import { Linkedin, Youtube, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const FooterColumn = ({ title, items }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-[12px] font-bold text-white tracking-[1px] uppercase mb-2">
      {title}
    </h3>
    <ul className="flex flex-col gap-3">
      {items.map((item, index) => (
        <li key={index}>
          <a 
            href={item.href || '#'} 
            className="text-[12px] md:text-[13px] text-[#E0E0E0] leading-[2.0] hover:text-[#FFFFFF] transition-colors duration-300 focus:outline-none focus:underline"
            aria-label={`Link to ${item.label}`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] border-t border-white/[0.04]" role="contentinfo">
      
      {/* PART 1 - Main Footer Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] py-[40px] md:py-[80px]">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-8">
          
          {/* Column 1 - Brand & Contact */}
          <div className="flex flex-col gap-4 md:col-span-3 lg:col-span-1 max-w-[300px]">
            <a href="/" className="block" aria-label="Phenomeny Home">
              <span className="text-[18px] md:text-[20px] font-bold text-white block">{siteConfig.siteName}</span>
            </a>
            <p className="text-[13px] md:text-[14px] text-[#E0E0E0] leading-[1.5]">
              AI-enabled operating layer for modern businesses.
            </p>
            
            <div className="mt-4 space-y-3">
              <address className="not-italic text-[12px] text-[#888] leading-relaxed">
                {siteConfig.contact.address.streetAddress}<br />
                {siteConfig.contact.address.addressLocality}, {siteConfig.contact.address.postalCode} {siteConfig.contact.address.addressCountry}
              </address>
              
              <div className="flex flex-col gap-1.5">
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-[12px] text-[#888] hover:text-white transition-colors">
                  <Mail size={12} /> {siteConfig.contact.email}
                </a>
                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 text-[12px] text-[#888] hover:text-white transition-colors">
                  <Phone size={12} /> {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Columns 2-5 - Links */}
          <nav aria-label="Footer Navigation" className="contents">
            <FooterColumn 
              title="Product" 
              items={[
                { label: 'Platform', href: '/platform' },
                { label: 'Capabilities', href: '/capabilities' },
                { label: 'AI Assistants', href: '/ai-assistants' },
                { label: 'Enterprise', href: '/enterprise' },
                { label: 'Pricing', href: '/contact' }
              ]} 
            />
            
            <FooterColumn 
              title="Solutions" 
              items={[
                { label: 'Operations', href: '/transformations/enterprise-operations' },
                { label: 'Healthcare', href: '/transformations/healthcare' },
                { label: 'Manufacturing', href: '/manufacturing' },
                { label: 'Education', href: '/education' },
                { label: 'Professional Services', href: '/transformations/professional-services' }
              ]} 
            />
            
            <FooterColumn 
              title="Company" 
              items={[
                { label: 'About Phenomeny', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/contact' },
                { label: 'Resources', href: '/resources' },
                { label: 'Blog', href: '/blog' }
              ]} 
            />
            
            <FooterColumn 
              title="Legal" 
              items={[
                { label: 'Legal', href: '/security' },
                { label: 'Security', href: '/security/security' },
                { label: 'Privacy', href: '/security/privacy' },
                { label: 'Terms', href: '/security/terms' },
                { label: 'Compliance', href: '/security/compliance' }
              ]} 
            />
          </nav>
        </div>
      </div>

      {/* PART 2 - Absolute Footer Bar */}
      <div className="bg-[#0A0A0A] border-t border-white/[0.04] py-4 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          
          {/* Left Section - Social Icons */}
          <div className="flex items-center gap-4 order-1 md:order-1">
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="text-[#C0C0C0] hover:text-[#FFFFFF] transition-colors duration-300">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel" className="text-[#C0C0C0] hover:text-[#FFFFFF] transition-colors duration-300">
              <Youtube size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* Center Section - Compliance Badges */}
          <div className="text-[10px] md:text-[11px] text-[#C0C0C0] text-center order-2 md:order-2 flex flex-wrap justify-center gap-x-1 gap-y-1 md:gap-y-0">
             <span className="whitespace-nowrap">SOC 2 Certified</span>
             <span className="mx-1" aria-hidden="true">·</span>
             <span className="whitespace-nowrap">ISO 27001 Certified</span>
             <span className="mx-1 hidden md:inline" aria-hidden="true">·</span>
             <span className="w-full md:w-auto hidden md:block lg:hidden"></span>
             <span className="whitespace-nowrap">GDPR Compliant</span>
             <span className="mx-1" aria-hidden="true">·</span>
             <span className="whitespace-nowrap">HIPAA Compliant</span>
          </div>

          {/* Bottom Line - Copyright & Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-[10px] md:text-[11px] text-[#B0B0B0] order-3 md:order-3">
            <span>© {currentYear} {siteConfig.siteName}</span>
            <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
              <a href="#" className="hover:text-[#FFFFFF] transition-colors duration-300">99.9% Uptime</a>
              <a href="/security/security" className="hover:text-[#FFFFFF] transition-colors duration-300">Security</a>
              <a href="/security/privacy" className="hover:text-[#FFFFFF] transition-colors duration-300">Privacy</a>
              <a href="/security/terms" className="hover:text-[#FFFFFF] transition-colors duration-300">Terms</a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;