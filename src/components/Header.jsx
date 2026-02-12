import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import PlatformMegaMenu from './PlatformMegaMenu';
import CapabilitiesMegaMenu from './CapabilitiesMegaMenu';
import TransformationsMegaMenu from './TransformationsMegaMenu';
import AIAssistantsMegaMenu from './AIAssistantsMegaMenu';
import MobileMenu from './MobileMenu';
import SecurityNotification from './SecurityNotification';

// Phenomeny logo image URL
const PHENOMENY_LOGO_URL = 'https://horizons-cdn.hostinger.com/92840ea4-5468-4ec2-9577-4edf101eba0b/a20ab92d8968ed9c2dd76f1cba1505cf.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSecurityNotification, setShowSecurityNotification] = useState(false);
  
  // activeMenu can be 'platform', 'capabilities', 'transformations', 'ai-assistants', or null
  const [activeMenu, setActiveMenu] = useState(null);
  const menuTimeoutRef = useRef(null);
  const notificationTimerRef = useRef(null);

  const { user } = useAuth();
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Return focus to menu button when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen && menuButtonRef.current) {
      // Small timeout to ensure the menu is fully unmounted/hidden before focusing
      setTimeout(() => {
        menuButtonRef.current?.focus();
      }, 50);
    }
  }, [mobileMenuOpen]);

  // Cleanup notification timer on unmount
  useEffect(() => {
    return () => {
      if (notificationTimerRef.current) {
        clearTimeout(notificationTimerRef.current);
      }
    };
  }, []);

  const handleMenuEnter = (menuType) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menuType);
  };

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (notificationTimerRef.current) {
      clearTimeout(notificationTimerRef.current);
    }

    setShowSecurityNotification(true);

    notificationTimerRef.current = setTimeout(() => {
      setShowSecurityNotification(false);
    }, 3500);
  };

  const navItems = [
    { label: "Industries", href: "/industries", hasDropdown: false },
    { label: "Services", href: "/services", hasDropdown: false },
    { label: "AI & Automation", href: "/ai-automation", hasDropdown: false },
    { label: "Insights", href: "/insights", hasDropdown: false },
    { label: "About", href: "/about", hasDropdown: false },
    { label: "Careers", href: "/careers", hasDropdown: false },
  ];

  return (
    <>
      <SecurityNotification isVisible={showSecurityNotification} />
      
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || activeMenu ? 'bg-[#0E0F11]/95 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
        style={{ height: '72px' }}
        onMouseLeave={handleMenuLeave}
        role="banner"
      >
        <div className="max-w-[1400px] mx-auto px-6 h-full relative">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo Section */}
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center group shrink-0" aria-label="Phenomeny Home">
                <img 
                  src={PHENOMENY_LOGO_URL} 
                  alt="Phenomeny Logo" 
                  className="h-[28px] md:h-[36px] object-contain group-hover:opacity-90 transition-opacity" 
                />
              </a>

              {/* Desktop & Tablet Navigation */}
              <nav className="hidden md:flex items-center gap-5 lg:gap-6" aria-label="Main Navigation">
                <ul className="flex items-center gap-5 lg:gap-6 m-0 p-0 list-none">
                  {navItems.map((item) => (
                    <li
                      key={item.label}
                      className="relative h-full flex items-center"
                      onMouseEnter={item.menuType ? () => handleMenuEnter(item.menuType) : undefined}
                      onMouseLeave={item.menuType ? handleMenuLeave : undefined}
                    >
                      <a 
                        href={item.href}
                        className={`flex items-center gap-1.5 text-[14px] lg:text-[15px] font-semibold transition-colors duration-200 py-6 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-sm ${
                          activeMenu === item.menuType ? 'text-white' : 'text-gray-200 hover:text-white'
                        }`}
                        aria-haspopup={item.hasDropdown}
                        aria-expanded={activeMenu === item.menuType}
                        onClick={(e) => {
                           if (item.menuType) {
                             e.preventDefault();
                             if (activeMenu === item.menuType) {
                               setActiveMenu(null);
                             } else {
                               setActiveMenu(item.menuType);
                             }
                           }
                        }}
                      >
                        {item.label}
                        {item.hasDropdown && (
                          <svg 
                            width="8" 
                            height="5" 
                            viewBox="0 0 10 6" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`opacity-70 mt-[2px] stroke-[2px] transition-transform duration-200 ${
                              activeMenu === item.menuType ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          >
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right Side Actions - Desktop & Tablet */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={handleLoginClick}
                className="rounded-lg font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 min-h-[44px]"
                aria-label="Login to platform"
              >
                Login
              </button>
              
              <Link 
                to="/contact-sales"
                className="font-bold rounded-lg bg-white text-black hover:bg-gray-100 transition-all duration-200 shadow-[0_0_15px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-purple-500 inline-flex items-center justify-center px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 min-h-[44px]"
                aria-label="Contact Sales Team"
              >
                Contact Sales
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              ref={menuButtonRef}
              className="md:hidden text-gray-300 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} />
              </motion.div>
            </button>
          </div>
          
          {/* Mega Menu Container */}
          <AnimatePresence>
            {activeMenu && (
              <div 
                className="hidden md:block absolute left-0 right-0 top-[72px] w-full"
                onMouseEnter={() => handleMenuEnter(activeMenu)}
                onMouseLeave={handleMenuLeave}
                role="region"
                aria-label={`${activeMenu} mega menu`}
              >
                 {activeMenu === 'platform' && <PlatformMegaMenu />}
                 {activeMenu === 'capabilities' && <CapabilitiesMegaMenu />}
                 {activeMenu === 'transformations' && <TransformationsMegaMenu />}
                 {activeMenu === 'ai-assistants' && <AIAssistantsMegaMenu />}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Navigation Menu Component */}
        <MobileMenu 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
        />
      </header>
    </>
  );
};

export default Header;