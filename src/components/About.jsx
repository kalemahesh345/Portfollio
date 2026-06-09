import { motion } from 'framer-motion';
import { FiAward, FiMapPin, FiBookOpen, FiActivity } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const statCards = [
    {
      icon: <FiAward className="w-6 h-6 text-primary-400" />,
      title: 'Experience',
      value: 'Fresher',
      desc: 'Looking for full-time'
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-accent-400" />,
      title: 'Location',
      value: 'Pune, India',
      desc: 'Available for on-site, hybrid, or remote work'
    },
    {
      icon: <FiBookOpen className="w-6 h-6 text-secondary-400" />,
      title: 'Education',
      value: 'MCS (post-Graduate)',
      desc: 'Master of Computer Science (Pursuing 2025-2027)'
    },
    {
      icon: <FiActivity className="w-6 h-6 text-primary-400" />,
      title: 'Focus Area',
      value: 'Full Stack Developer',
      desc: 'MERN stack development, relational databases and AI Workflow Automation'
    }
  ];

  return (
    <section id="about" className="relative py-12 bg-transparent">
      {/* Background radial spotlight */}
      <div className="absolute top-[20%] right-[-10%] spotlight bg-primary-500/5 w-[400px] h-[400px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          tag="Who am I"
          title="About Me"
          subtitle="Get to know my career goals, technical background, and passion for software engineering."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Objective Statement & Biography */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 flex flex-col gap-6 text-left"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              {/* Highlight outline glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-500"></span>
                My Story & Focus
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                I am a Master of Computer Science (MCS) student based in Pune, dedicated to building responsive web applications and custom automation tools. My coding journey revolves around creating full-stack systems using the <strong className="text-primary-400">MERN stack</strong> and designing robust relational database systems.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Driven by curiosity, I enjoy finding creative solutions to manual work. I love integrating AI capabilities (like Gemini or OpenAI APIs) into web products and designing workflows in <strong className="text-accent-400">n8n</strong> to automate daily tasks. I'm always looking for opportunities to learn, write cleaner code, and collaborate on interesting projects.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden">
              <h3 className="text-lg font-semibold text-white mb-3">Quick Facts</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                  <span><strong>Name:</strong> Mahesh Kale</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                  <span><strong>Age:</strong> 22 Years</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                  <span><strong>Languages:</strong> English, Hindi, Marathi</span>
                </li>
                <li className="flex items-start gap-2.5 sm:col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                  <span><strong>Hobbies:</strong> Learning new technologies, exploring AI automation, building side projects, problem solving</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            {statCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, borderColor: 'rgba(139, 92, 246, 0.25)' }}
                className="glass-card p-6 rounded-3xl border border-white/5 text-left flex flex-col justify-between h-48 transition-all duration-300 hover:shadow-lg hover:shadow-primary-950/20"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase block mb-1">
                    {card.title}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {card.value}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
