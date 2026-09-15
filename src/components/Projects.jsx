import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiExternalLink, FiCode, FiServer, FiDatabase, FiX, FiZoomIn, FiImage } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const projectList = [
  {
    title: 'SILVEAR – Full-Stack Jewellery E-Commerce Platform',
    description: 'A full-stack jewellery e-commerce platform built with React.js, Node.js, Express.js, MySQL, Prisma ORM, and RESTful APIs. Features JWT auth, product catalog & filters, cart, wishlist, coupons, reviews, Razorpay payment gateway, Shiprocket shipping integration, automated PDF invoice generation, email notifications, and an admin management dashboard.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Prisma ORM', 'Razorpay', 'Shiprocket API', 'JWT'],
    github: 'https://github.com/kalemahesh345/Silvear-personal',
    demo: 'https://silvear.in/',
    gradient: 'from-primary-600/40 via-primary-700/10 to-transparent',
    borderColor: 'group-hover:border-primary-500/30',
    glowColor: 'rgba(197, 139, 73, 0.15)',
    category: 'Full Stack E-Commerce'
  },
  {
    title: 'AI LinkedIn & Telegram Automation Workflow',
    description: 'An intelligent automated system built using n8n that fetches daily news via RSS feeds & REST APIs, generates concise AI summaries and relevant hashtags using Google Gemini AI, and auto-posts updates to LinkedIn and Telegram channels for seamless social media consistency and engagement.',
    tags: ['n8n', 'Google Gemini AI', 'RSS Feeds', 'REST APIs', 'Telegram API', 'LinkedIn API', 'Workflow Automation'],
    github: 'https://github.com/kalemahesh345/N8N-Workflow/blob/main/telegram%20linkdin.json',
    demo: 'https://github.com/kalemahesh345/N8N-Workflow',
    workflowImage: 'src/assets/Telegram linkdin Auto post Agent.png',
    gradient: 'from-accent-600/40 via-accent-700/10 to-transparent',
    borderColor: 'group-hover:border-accent-500/30',
    glowColor: 'rgba(166, 131, 78, 0.15)',
    category: 'AI Automation'
  },
  {
    title: 'Resume-ATS Score',
    description: 'A web application that analyzes resumes and provides ATS-based scoring, keyword insights, and improvement recommendations to help users create recruiter-friendly resumes and increase interview opportunities.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API'],
    github: 'https://github.com/kalemahesh345/ResumeScore',
    demo: 'https://resume-score-git-main-mahesh08.vercel.app/',
    gradient: 'from-primary-600/40 via-primary-700/10 to-transparent',
    borderColor: 'group-hover:border-primary-500/30',
    glowColor: 'rgba(197, 139, 73, 0.15)',
    category: 'Full Stack + AI'
  },
  {
    title: 'SBurhade Saraf - Jewelry E-Commerce Store',
    description: 'Developed a custom Shopify-based jewelry e-commerce website for SBurhade Saraf. Implemented theme customization, product collections, responsive layouts, navigation menus, and optimized shopping experiences using Shopify Liquid, HTML, CSS, and JavaScript.',
    tags: ['Shopify', 'Liquid', 'HTML5', 'CSS3', 'JavaScript', 'E-Commerce'],
    github: 'https://github.com/kalemahesh345',
    demo: 'https://sburhadesaraf.com/',
    gradient: 'from-primary-600/40 via-primary-700/10 to-transparent',
    borderColor: 'group-hover:border-primary-500/30',
    glowColor: 'rgba(197, 139, 73, 0.15)',
    category: 'E-Commerce'
  },
  {
    title: 'Job Alert AI Agent',
    description: 'An automated web scraper and agent that monitors job boards, parses specifications based on qualifications, and pushes daily alerts to Discord/Email with matching listings.',
    tags: ['Node.js', 'Express.js', 'Puppeteer', 'Nodemailer', 'MongoDB', 'Cron Jobs'],
    github: 'https://github.com/kalemahesh345',
    demo: '',
    gradient: 'from-primary-600/40 via-primary-700/10 to-transparent',
    borderColor: 'group-hover:border-primary-500/30',
    glowColor: 'rgba(197, 139, 73, 0.15)',
    category: 'Automation Agent'
  },
  {
    title: 'Aptitude Test Platform',
    description: 'An interactive quiz examination platform equipped with test timers, automatic question shuffling, secure cheat-preventing tabs, and a graphical dashboard for analytical reports.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/kalemahesh345/apptitudePlatform',
    demo: 'https://apptitude-platform.vercel.app/',
    gradient: 'from-secondary-600/40 via-secondary-700/10 to-transparent',
    borderColor: 'group-hover:border-secondary-500/30',
    glowColor: 'rgba(152, 138, 117, 0.15)',
    category: 'EdTech Portal'
  },
  {
    title: 'E-Commerce Platform',
    description: 'A modern and responsive electric bike showcase website featuring product displays, interactive UI components, image assets, custom JavaScript functionality, and mobile-friendly design for promoting e-bike products and services.',
    tags: ['React.js', 'CSS3', 'JavaScript', 'HTML', 'Responsive Web Design'],
    github: 'https://github.com/kalemahesh345/ebikes',
    demo: 'https://github.com/kalemahesh345/ebikes',
    gradient: 'from-accent-600/40 via-accent-700/10 to-transparent',
    borderColor: 'group-hover:border-accent-500/30',
    glowColor: 'rgba(166, 131, 78, 0.15)',
    category: 'Business Website'
  },
  {
    title: 'AI-Powered WhatsApp Customer Support Agent',
    description: 'Developed a real-time AI-powered WhatsApp Customer Support Agent using n8n and Google Gemini. The agent interacts with customers through WhatsApp, understands their queries, generates intelligent responses in real time, and automatically replies to customers.',
    tags: ['n8n', 'Google Gemini', 'WhatsApp', 'Webhooks', 'Google Sheets', 'Ai Agent', 'Conversational Memory', 'API Integration'],
    github: 'https://github.com/kalemahesh345/N8N-Workflow/blob/main/Whatapp%20Agent.json',
    demo: 'http://localhost:5678/workflow/MxrrhOh9PcNqhz4y',
    workflowImage: 'C:\Users\Kale Mahesh\OneDrive\Desktop\mk-portfolio\src\assets\WhatsApp Agent.png',
    gradient: 'from-accent-600/40 via-accent-700/10 to-transparent',
    borderColor: 'group-hover:border-accent-500/30',
    glowColor: 'rgba(166, 131, 78, 0.15)',
    category: 'AI Agent'
  }
];

// Check if demo URL is localhost (not publicly accessible)
function isLocalhost(url) {
  return url && (url.includes('localhost') || url.includes('127.0.0.1'));
}

// Lightbox Modal Component
function WorkflowModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        style={{ background: 'rgba(3, 7, 18, 0.92)', backdropFilter: 'blur(16px)' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          style={{ background: 'rgba(10, 14, 26, 0.95)' }}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1 block">
                N8N Workflow
              </span>
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all duration-200"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>

          {/* Workflow Image */}
          <div className="relative bg-[#030712] flex items-center justify-center min-h-[300px] overflow-auto" style={{ maxHeight: '65vh' }}>
            {project.workflowImage ? (
              <img
                src={project.workflowImage}
                alt={`${project.title} workflow`}
                className="w-full h-auto object-contain"
              />
            ) : (
              <div className="flex flex-col items-center gap-3 py-20 text-slate-600">
                <FiImage className="w-16 h-16" />
                <p className="text-sm">Workflow image not added yet</p>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 font-semibold"
            >
              <FiGithub className="w-4 h-4" />
              View JSON Workflow
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all duration-200"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (idx) => {
    setImgErrors(prev => ({ ...prev, [idx]: true }));
  };
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <>
      <section id="projects" className="relative py-12 bg-transparent">
        {/* Background radial spotlight */}
        <div className="absolute top-[40%] right-[-10%] spotlight bg-primary-500/5 w-[500px] h-[500px]"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <SectionTitle
            tag="My Portfolio"
            title="Featured Projects"
            subtitle="A handpicked collection of applications showcasing my abilities in full stack architecture, database configuration, and AI integrations."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projectList.map((project, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`group relative glass-card rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-between min-h-[460px] h-full transition-all duration-500 hover:shadow-2xl`}
                style={{
                  '--glow-color': project.glowColor,
                }}
              >
                {/* Radial gradient background highlights on card hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none -z-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 10% 10%, ${project.glowColor}, transparent 50%)`
                  }}
                />

                {/* Card Top Banner - Workflow Image OR Icon Backdrop */}
                <div className="h-44 w-full relative border-b border-white/5 overflow-hidden flex items-center justify-center">
                  {project.workflowImage && !imgErrors[idx] ? (
                    <>
                      <img
                        src={project.workflowImage}
                        alt={`${project.title} workflow`}
                        onError={() => handleImgError(idx)}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-[#030712]/30" />
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="relative z-10 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20 text-white rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70"
                      >
                        <FiZoomIn className="w-3.5 h-3.5" />
                        View Workflow
                      </button>
                    </>
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient}`}>
                      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                      <div className="flex gap-4 items-center h-full justify-center scale-110 opacity-30 group-hover:opacity-50 group-hover:scale-125 transition-all duration-500">
                        <FiCode className="w-16 h-16 text-white" />
                        <FiServer className="w-12 h-12 text-white" />
                        <FiDatabase className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Floating Category Tag */}
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#030712]/80 backdrop-blur-md border border-white/10 text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>

                  {/* Workflow badge */}
                  {project.workflowImage && (
                    <span className="absolute top-4 right-4 z-10 px-2.5 py-1 bg-accent-600/30 backdrop-blur-md border border-accent-500/40 text-accent-300 rounded-full text-xs font-bold flex items-center gap-1.5">
                      <FiImage className="w-3 h-3" />
                      Workflow
                    </span>
                  )}
                </div>

                {/* Card Details */}
                <div className="p-6 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/5 text-slate-300 rounded-lg text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Divider line */}
                    <div className="h-px bg-white/5 w-full mb-4"></div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-300 font-semibold"
                      >
                        <FiGithub className="w-4 h-4" />
                        Source Code
                      </a>

                      <div className="flex items-center gap-2">
                        {project.workflowImage && (
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="flex items-center gap-2 px-4 py-2 bg-accent-600/20 hover:bg-accent-600/30 text-accent-300 rounded-xl border border-accent-500/30 hover:border-accent-500/50 transition-all duration-300 text-xs font-bold"
                          >
                            <FiImage className="w-3.5 h-3.5" />
                            View Workflow
                          </button>
                        )}

                        {project.demo && !isLocalhost(project.demo) && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 text-xs font-bold"
                          >
                            Live Demo
                            <FiExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow Lightbox Modal */}
      {selectedProject && (
        <WorkflowModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>

  );
}
