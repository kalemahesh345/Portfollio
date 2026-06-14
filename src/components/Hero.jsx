import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileImg from '../assets/mahesh.jpg';

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left side info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-accent-400 bg-accent-500/10 border border-accent-500/20 uppercase">
              Available for Internships & Projects
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-tight font-sans"
          >
            Hi, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 drop-shadow-sm font-black">
              Mahesh Kale
            </span>
          </motion.h1>

          {/* Subtitle / Focus statement */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-bold text-slate-200 mb-4 tracking-wide max-w-xl animate-none"
          >
            Full Stack Developer specializing in MERN stack & AI Workflow Automation.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed"
          >
            I build responsive web platforms using React and Node, configure database systems, and design custom automated workflows using tools like n8n and LLM APIs to streamline processes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="/Kale_Mahesh_Resume.pdf"
              download="/Kale_Mahesh_Resume.pdf"
              className="px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white shadow-lg shadow-primary-950/40 text-center transition-all duration-300 hover:-translate-y-0.5 border border-primary-400/20 active:translate-y-0 text-sm"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-3.5 rounded-xl font-semibold bg-slate-900/60 hover:bg-slate-800/80 text-white border border-white/10 hover:border-white/20 backdrop-blur-md text-center transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-sm"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
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
          </motion.div>
        </motion.div>

        {/* Right side profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group">

            {/* Glowing neon background circles */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500"></div>

            {/* Outermost rotating styling frame */}
            <div className="absolute inset-0 rounded-full border border-dashed border-accent-400/20 animate-[spin_80s_linear_infinite] pointer-events-none scale-105"></div>

            {/* Inner Profile container */}
            <div className="absolute inset-2 bg-[#080d1a] rounded-full overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
              <img
                src={profileImg}
                alt="Mahesh - Full Stack Developer"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
              />
            </div>

            {/* Decorative floating dots/badges */}
            <div className="absolute -top-3 -right-3 px-4 py-2 glass-card rounded-2xl border border-primary-500/20 flex items-center gap-2 shadow-xl hover:border-primary-500/40 transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">Available for work</span>
            </div>

            <div className="absolute -bottom-4 -left-4 px-4 py-2 glass-card rounded-2xl border border-accent-500/20 flex items-center gap-2 shadow-xl hover:border-accent-500/40 transition-colors duration-300">
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">Pune, India</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
