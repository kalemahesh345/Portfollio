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
    accentColor: 'border-primary-500/20 hover:border-primary-500/40 hover:shadow-primary-950/10',
    iconColor: 'text-primary-400',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="w-5 h-5" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="w-5 h-5" /> },
      { name: 'JavaScript (ES6+)', icon: <SiJavascript className="w-5 h-5" /> },
      { name: 'React.js', icon: <FaReact className="w-5 h-5" /> },
      { name: 'React Native', icon: <FaReact className="w-5 h-5" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5" /> },
      { name: 'Redux', icon: <FaReact className="w-5 h-5" /> },
      { name: 'React Router', icon: <FaReact className="w-5 h-5" /> },
    ]
  },
  {
    title: 'Backend Development',
    accentColor: 'border-accent-500/20 hover:border-accent-500/40 hover:shadow-accent-950/10',
    iconColor: 'text-accent-400',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="w-5 h-5" /> },
      { name: 'Liquid', icon: <FaHtml5 className="w-5 h-5" /> },
      { name: 'Express.js', icon: <SiExpress className="w-5 h-5" /> },
      { name: 'Java', icon: <FaJava className="w-5 h-5" /> }
    ]
  },
  {
    title: 'Database Systems',
    accentColor: 'border-secondary-500/20 hover:border-secondary-500/40 hover:shadow-secondary-950/10',
    iconColor: 'text-secondary-400',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5" /> },
      { name: 'MySQL', icon: <SiMysql className="w-5 h-5" /> },
    ]
  },
  {
    title: 'AI & Automation',
    accentColor: 'border-primary-500/20 hover:border-primary-500/40 hover:shadow-primary-950/10',
    iconColor: 'text-primary-400',
    skills: [
      { name: 'Gemini AI', icon: <FaBrain className="w-5 h-5" /> },
      { name: 'OpenAI API', icon: <SiOpenai className="w-5 h-5" /> },
      { name: 'LLM', icon: <FaBrain className="w-5 h-5" /> },
      { name: 'LangChain', icon: <FaBrain className="w-5 h-5" /> },
      { name: 'RAG', icon: <FaBrain className="w-5 h-5" /> },
      { name: 'n8n Automation', icon: <FaRobot className="w-5 h-5" /> },
      { name: 'AI Agents', icon: <FaBrain className="w-5 h-5" /> },
      { name: 'AI Workflows', icon: <FiCpu className="w-5 h-5" /> },

    ]
  },
  {
    title: 'Tools & Utilities',
    accentColor: 'border-secondary-500/20 hover:border-secondary-500/40 hover:shadow-secondary-950/10',
    iconColor: 'text-secondary-400',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="w-5 h-5" /> },
      { name: 'GitHub', icon: <FaGithub className="w-5 h-5" /> },
      { name: 'Postman', icon: <SiPostman className="w-5 h-5" /> },
      { name: 'VS Code', icon: <VscVscode className="w-5 h-5" /> },
      { name: 'Vercel', icon: <VscVscode className="w-5 h-5" /> },
      { name: 'Github Actions', icon: <VscVscode className="w-5 h-5" /> },
      { name: 'Docker', icon: <VscVscode className="w-5 h-5" /> },
      { name: 'Firebase', icon: <VscVscode className="w-5 h-5" /> },
      { name: 'N8N', icon: <VscVscode className="w-5 h-5" /> },
      { name: 'Shopify', icon: <VscVscode className="w-5 h-5" /> },



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
    hidden: { opacity: 0, y: 20 },
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
      <div className="absolute top-[30%] left-[-10%] spotlight bg-accent-500/5 w-[500px] h-[500px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          tag="My Tech Stack"
          title="Skills & Expertise"
          subtitle="Tools, languages, and technologies I use to build full-stack web solutions and custom workflows."
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

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderColor: 'rgba(255, 255, 255, 0.15)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="flex items-center gap-2.5 px-4 py-3 bg-white/[0.015] border border-white/5 rounded-2xl text-slate-300 hover:text-white transition-all duration-300 cursor-default"
                  >
                    <span className={`${category.iconColor} text-lg shrink-0`}>
                      {skill.icon}
                    </span>
                    <span className="text-sm font-semibold">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
