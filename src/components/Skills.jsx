import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaBrain, FaRobot
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, SiOpenai
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FiCpu } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const skillCategories = [
  {
    title: 'Frontend Development',
    accentColor: 'border-primary-500/20 hover:border-primary-500/40',
    iconColor: 'text-primary-400',
    skills: [
      { name: 'HTML5', level: 90, icon: <FaHtml5 className="w-5 h-5" /> },
      { name: 'CSS3', level: 90, icon: <FaCss3Alt className="w-5 h-5" /> },
      { name: 'JavaScript (ES6+)', level: 85, icon: <SiJavascript className="w-5 h-5" /> },
      { name: 'React.js', level: 80, icon: <FaReact className="w-5 h-5" /> },
      { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss className="w-5 h-5" /> },
    ]
  },
  {
    title: 'Backend Development',
    accentColor: 'border-accent-500/20 hover:border-accent-500/40',
    iconColor: 'text-accent-400',
    skills: [
      { name: 'Node.js', level: 80, icon: <FaNodeJs className="w-5 h-5" /> },
      { name: 'Express.js', level: 78, icon: <SiExpress className="w-5 h-5" /> },
      { name: 'Java', level: 60, icon: <FaJava className="w-5 h-5" /> }
    ]
  },
  {
    title: 'Database Systems',
    accentColor: 'border-secondary-500/20 hover:border-secondary-500/40',
    iconColor: 'text-secondary-400',
    skills: [
      { name: 'MongoDB', level: 70, icon: <SiMongodb className="w-5 h-5" /> },
      { name: 'MySQL', level: 75, icon: <SiMysql className="w-5 h-5" /> },
    ]
  },
  {
    title: 'AI & Automation',
    accentColor: 'border-indigo-500/20 hover:border-indigo-500/40',
    iconColor: 'text-indigo-400',
    skills: [
      { name: 'Gemini AI', level: 85, icon: <FaBrain className="w-5 h-5" /> },
      { name: 'OpenAI API', level: 80, icon: <SiOpenai className="w-5 h-5" /> },
      { name: 'n8n Automation', level: 85, icon: <FaRobot className="w-5 h-5" /> },
      { name: 'AI Workflow Design', level: 80, icon: <FiCpu className="w-5 h-5" /> },
    ]
  },
  {
    title: 'Tools & Utilities',
    accentColor: 'border-pink-500/20 hover:border-pink-500/40',
    iconColor: 'text-pink-400',
    skills: [
      { name: 'Git', level: 80, icon: <FaGitAlt className="w-5 h-5" /> },
      { name: 'GitHub', level: 82, icon: <FaGithub className="w-5 h-5" /> },
      { name: 'Postman', level: 75, icon: <SiPostman className="w-5 h-5" /> },
      { name: 'VS Code', level: 88, icon: <VscVscode className="w-5 h-5" /> },
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="skills" className="relative py-12 bg-transparent">
      {/* Glow spotlight */}
      <div className="absolute top-[30%] left-[-10%] spotlight bg-cyan-900/5 w-[500px] h-[500px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          tag="My Tech Stack"
          title="Skills & Expertise"
          subtitle="A comprehensive list of frontend, backend, database, and tool skills I leverage to build modern web solutions."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`glass-card p-8 rounded-3xl border transition-all duration-500 text-left flex flex-col justify-between ${category.accentColor} ${idx === skillCategories.length - 1 ? 'md:col-span-2' : ''
                }`}
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/5 pb-4 flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${category.iconColor.replace('text', 'bg')}`}></span>
                {category.title}
              </h3>

              <div className="flex flex-col gap-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2.5 text-slate-300 group-hover:text-white transition-colors duration-300">
                        <span className={`${category.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </span>
                        <span className="text-sm font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${idx === 0 ? 'from-primary-600 to-primary-400' :
                          idx === 1 ? 'from-accent-600 to-accent-400' :
                            idx === 2 ? 'from-secondary-600 to-secondary-400' :
                              idx === 3 ? 'from-indigo-600 to-purple-400' :
                                'from-pink-600 to-pink-400'
                          }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
