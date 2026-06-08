import { motion } from 'framer-motion';
import { FiBriefcase, FiCode, FiAward } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const experiences = [
  {
    type: 'Internship',
    role: 'Full-Stack Developer Intern',
    company: 'DreamsGuider.com',
    location: ' Ahmednagar, Maharashtra, India',
    period: 'Aug 2025 - Feb 2026',
    icon: <FiBriefcase className="w-5 h-5" />,
    iconColor: 'bg-primary-500/20 text-primary-400 border-primary-500/30',
    details: [
      'Developed and maintained full-stack web applications using React.js, Node.js, Express.js, MongoDB, and MySQL.',
      'Built responsive user interfaces, integrated REST APIs, and implemented authentication and database management features.',
      'Worked on client projects, collaborated with team members using Git and GitHub, and followed Agile development practices.',
      'Participated in the development of educational platforms and placement-oriented applications for students and organizations.',
      'Gained hands-on experience in software development lifecycle, debugging, code optimization, and deployment processes.'
    ]
  },
  {
    type: 'Academic Project',
    role: 'Lead Developer (Major Project)',
    company: 'ResumeAI Platform',
    location: 'Pune, India',
    period: 'Nov 2025 - Feb 2026',
    icon: <FiCode className="w-5 h-5" />,
    iconColor: 'bg-accent-500/20 text-accent-400 border-accent-500/30',
    details: [
      'Configured secure session tokens using JSON Web Tokens (JWT) and encrypted passwords with bcrypt.',
      'Integrated Gemini API to analyze uploaded PDF resumes and compare them to custom target jobs.'
    ]
  },
  {
    type: 'Internship',
    role: 'Shopify Developer',
    company: 'Rukhamani Treasures Pvt. Ltd.',
    location: 'Pune, India',
    period: 'March 2026 - Present',
    icon: <FiAward className="w-5 h-5" />,
    iconColor: 'bg-secondary-500/20 text-secondary-400 border-secondary-500/30',
    details: [
      'Developed and customized Shopify themes using Liquid, HTML, CSS, JavaScript, and Shopify’s theme architecture.',
      'Built responsive e-commerce pages, product collections, and landing pages to enhance user experience across devices.',
      'Integrated third-party Shopify apps, payment gateways, and custom functionalities based on business requirements.',
      'Optimized website performance, improving page load speed, SEO, and overall store responsiveness.',
      'Collaborated with design and marketing teams to implement UI/UX improvements and conversion-focused features.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-12 bg-transparent">
      {/* Background glow spotlight */}
      <div className="absolute top-[25%] left-[-10%] spotlight bg-purple-900/5 w-[500px] h-[500px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          tag="My Journey"
          title="Experience"
          subtitle="A timeline of my hands-on internships, comprehensive academic milestones, and client freelance projects."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/80 via-accent-500/80 to-secondary-500/10 -translate-x-1/2 pointer-events-none"></div>

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-stretch w-full relative ${isEven ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Timeline Badge/Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border bg-[#080d1a] shadow-xl ${exp.iconColor.split(' ')[1]} ${exp.iconColor.split(' ')[2]}`}
                    >
                      {exp.icon}
                    </motion.div>
                  </div>

                  {/* Left Spacer / Card Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 relative group hover:border-white/10 transition-colors duration-300 text-left"
                    >
                      {/* Floating Category Tag */}
                      <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">
                        {exp.type}
                      </span>

                      {/* Header details */}
                      <div className="mb-4">
                        <span className="text-xs font-bold text-accent-400 block mb-1">
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-0.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-slate-400">
                          {exp.company} &bull; <span className="font-normal text-slate-500">{exp.location}</span>
                        </p>
                      </div>

                      {/* Description Bullet points */}
                      <ul className="flex flex-col gap-2.5">
                        {exp.details.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex gap-2.5 text-sm text-slate-400 leading-relaxed">
                            <span className="text-primary-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Side */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
