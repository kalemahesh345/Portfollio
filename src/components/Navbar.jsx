import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for navbar shrinking and glass backdrop amplification
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for highlighting active link based on scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is centered
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      setIsOpen(false);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-[#030712]/60 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/10' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo/Brand */}
        <a 
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="relative group text-xl font-bold tracking-wider text-white"
        >
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400">
            MAHESH
          </span>
          <span className="text-primary-500">.</span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 px-1.5 py-1 rounded-full glass-card border border-white/5 bg-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 text-slate-400">
          <a href="https://github.com/kalemahesh345" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors duration-300 text-lg">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/mahesh-kale-450149336" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors duration-300 text-lg">
            <FiLinkedin />
          </a>
          <a href="mailto:kalemahesh082003@gmail.com" className="hover:text-secondary-400 transition-colors duration-300 text-lg">
            <FiMail />
          </a>
        </div>

        {/* Mobile Menu Toggler */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors duration-300"
        >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden absolute top-full left-0 w-full glass-card border-b border-white/10 bg-[#030712]/95 backdrop-blur-xl py-6 px-8 flex flex-col gap-4 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`flex items-center px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'text-white bg-gradient-to-r from-primary-500/10 to-accent-500/10 border-l-4 border-primary-500 pl-3' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            
            <div className="h-px bg-white/5 my-2"></div>
            
            <div className="flex justify-center gap-6 text-slate-400 text-xl py-2">
              <a href="https://github.com/kalemahesh345" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors duration-300">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/mahesh-kale-450149336" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors duration-300">
                <FiLinkedin />
              </a>
              <a href="mailto:kalemahesh082003@gmail.com" className="hover:text-secondary-400 transition-colors duration-300">
                <FiMail />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
