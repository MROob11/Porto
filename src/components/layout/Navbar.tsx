'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/#about' },
  { name: 'TECH', href: '/#tech' },
  { name: 'EXPERIENCE', href: '/#experience' },
  { name: 'MUSIC', href: '/#music' },
  { name: 'CONTACT', href: '/#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Transform navbar opacity based on scroll
  const navbarOpacity = useTransform(scrollY, [0, 100], [1, 0.7]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = navLinks.map(link => {
        const id = link.href === '/' ? 'home' : link.href.substring(2); // Remove '/#'
        return document.getElementById(id) || (link.href === '/' ? document.body : null);
      });

      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop || 0; // Body might not have offsetTop the way we want implies 0
          // Special handling for Home/Top
          if (i === 0 && window.scrollY < 100) {
             setActiveSection('home');
             break;
          }
          if (sectionTop <= scrollPosition) {
            const id = navLinks[i].href === '/' ? 'home' : navLinks[i].href.substring(2);
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') || href === '/') {
      e.preventDefault();
      
      // Close mobile menu when clicking a link
      setIsMobileMenuOpen(false);
      
      let targetId = '';
      if (href === '/') {
        targetId = 'home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
        return;
      } else {
        targetId = href.substring(2);
      }

      const element = document.getElementById(targetId);
      
      if (element) {
        const navbarHeight = 80; // Height of navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActiveSection(targetId);
      }
    }
  };

  return (
    <motion.nav
      style={{ 
        opacity: navbarOpacity,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/20 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-primary-teal font-bold text-lg tracking-wider cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('home');
                setIsMobileMenuOpen(false);
              }}
            >
              ARTHUR
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const sectionId = link.href === '/' ? 'home' : link.href.substring(2);
              const isActive = activeSection === sectionId;
              
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative group py-2" // Added padding for better aim
                  >
                    <span className={`text-sm font-medium tracking-wider transition-colors ${
                      isActive 
                        ? 'text-primary-teal' 
                        : 'text-text-secondary hover:text-white'
                    }`}>
                      {link.name}
                    </span>
                    
                    {/* Animated moving underline */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-teal to-primary-cyan"
                        transition={{ 
                          type: "spring", 
                          stiffness: 380, 
                          damping: 30 
                        }}
                      />
                    )}
                    
                    {/* Hover effect (faded underline) */}
                    {!isActive && (
                       <motion.div
                       className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-teal/50 to-primary-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity"
                     />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 relative z-50"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                // Close icon (X)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="container-custom py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const sectionId = link.href === '/' ? 'home' : link.href.substring(2);
                const isActive = activeSection === sectionId;
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`py-3 px-4 rounded-lg transition-all ${
                      isActive
                        ? 'bg-primary-teal/20 text-primary-teal border-l-4 border-primary-teal'
                        : 'text-text-secondary hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-base font-medium tracking-wider">
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* Animated gradient border on scroll */}
      {isScrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-teal/50 to-transparent"
        />
      )}
    </motion.nav>
  );
}
