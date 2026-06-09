import { FiGithub, FiLinkedin, FiMail, FiChevronsUp } from 'react-icons/fi';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050c]/90 border-t border-white/5 pt-12 pb-8 overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full border border-white/10 hover:border-primary-500/50 bg-slate-900/50 hover:bg-primary-500/10 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 -translate-y-16 hover:-translate-y-[70px] shadow-lg shadow-black/40 group absolute"
        >
          <FiChevronsUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mb-2 mt-2 text-center md:text-left">
          {/* Logo & short description */}
          <div>
            <h3 className="text-lg font-bold text-white tracking-wider mb-2">
              MAHESH KALE<span className="text-primary-500">.</span>
            </h3>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed mx-auto md:mx-0">
              A passionate Full Stack Developer building premium, responsive, and performance-focused web solutions.
            </p>
          </div>

          {/* Quick Navigation Shortcuts */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-md">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-slate-400 hover:text-white transition-colors duration-300 font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-white/5 mb-6"></div>

        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          {/* Copyright notice */}
          <span className="text-[11px] text-slate-500">
            &copy; {new Date().getFullYear()} Mahesh kale. All rights reserved.
          </span>

          {/* Social connections */}
          <div className="flex gap-4">
            <a
              href="https://github.com/kalemahesh345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-300 text-base"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/mahesh-kale-450149336"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-300 text-base"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:kalemahesh082003@gmail.com"
              className="text-slate-500 hover:text-white transition-colors duration-300 text-base"
            >
              <FiMail />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
