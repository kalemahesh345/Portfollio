import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileImg from '../assets/mahesh.jpg';

const words = [
  'Full Stack Developer',
  'MERN Stack Specialist',
  'Web Developer',
  'AI Workflow Automation',
  'Creative Thinker',
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const activeWord = words[currentWordIndex];

    if (isDeleting) {
      // Speed up deleting
      setTypingSpeed(40);
      timer = setTimeout(() => {
        setDisplayedText(activeWord.substring(0, displayedText.length - 1));
      }, typingSpeed);
    } else {
      setTypingSpeed(100);
      timer = setTimeout(() => {
        setDisplayedText(activeWord.substring(0, displayedText.length + 1));
      }, typingSpeed);
    }

    // Handle pausing and switching states
    if (!isDeleting && displayedText === activeWord) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left side info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          {/* Greeting Badge */}
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-primary-400 bg-primary-500/10 border border-primary-500/20 mb-6 uppercase inline-block">
            Welcome to my universe
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-tight font-sans">
            Hi, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 drop-shadow-sm font-black">
              Mahesh Kale
            </span>
          </h1>

          {/* Typing Effect Container */}
          <div className="h-8 md:h-10 mb-6 flex items-center">
            <p className="text-lg md:text-xl font-medium text-slate-300">
              I'm a{' '}
              <span className="text-accent-400 font-semibold border-r-2 border-accent-400 pr-1 animate-pulse">
                {displayedText}
              </span>
            </p>
          </div>

          <p className="text-slate-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
            A passionate Full Stack Developer focused on building clean, high-performance full-stack applications. I design responsive interfaces and build robust APIs with modern technology stacks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <a
              href="Kale_Mahesh_Resume.pdf"
              download="Kale_Mahesh_Resume.pdf"
              className="px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white shadow-lg shadow-primary-950/40 text-center transition-all duration-300 hover:-translate-y-0.5 border border-primary-400/20 active:translate-y-0"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-3.5 rounded-xl font-semibold bg-slate-900/60 hover:bg-slate-800/80 text-white border border-white/10 hover:border-white/20 backdrop-blur-md text-center transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold tracking-wider text-slate-500 uppercase">
              Follow Me
            </span>
            <div className="w-12 h-px bg-slate-800"></div>
            <div className="flex gap-4">
              <a
                href="https://github.com/kalemahesh345"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white bg-slate-900/50 hover:bg-primary-500/20 border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/mahesh-kale-450149336"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white bg-slate-900/50 hover:bg-accent-500/20 border border-white/5 hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kalemahesh082003@gmail.com"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white bg-slate-900/50 hover:bg-secondary-500/20 border border-white/5 hover:border-secondary-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right side profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group">

            {/* Glowing neon background circles */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 opacity-60 blur-xl group-hover:opacity-85 transition-opacity duration-500 animate-pulse-slow"></div>

            {/* Outermost rotating styling frame */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-400/30 animate-[spin_60s_linear_infinite] pointer-events-none scale-105"></div>

            {/* Inner Profile container */}
            <div className="absolute inset-2 bg-[#080d1a] rounded-full overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
              <img
                src={profileImg}
                alt="Mahesh - Full Stack Developer"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Decorative floating dots/badges */}
            <div className="absolute -top-3 -right-3 px-4 py-2 glass-card rounded-2xl border border-primary-500/30 flex items-center gap-2 shadow-xl animate-float-slow">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">Available for work</span>
            </div>

            <div className="absolute -bottom-4 -left-4 px-4 py-2 glass-card rounded-2xl border border-accent-500/30 flex items-center gap-2 shadow-xl animate-float-medium">
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">Pune, India</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
