import { motion } from 'framer-motion';
import { FiBook, FiAward, FiTarget } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const educationData = [
  {
    category: 'Degree Program',
    title: 'Bachelor of Computer Science (BCS)',
    institution: 'Pune University (SPPU)',
    duration: '2022 - 2025',
    score: 'CGPA: 6.5 / 8.0',
    details: [
      'Studied core computer science subjects including Data Structures & Algorithms, Database Management Systems (DBMS), Web Technologies, Object-Oriented Programming (Java/C++), Operating Systems, and Software Engineering.',
      'Developed practical knowledge of full-stack web development concepts, database design, software development lifecycle, and problem-solving techniques.',
      'Completed a major academic project focused on E-Commerce application development, implementing frontend, backend, and database integration.',
      'Gained hands-on experience with programming, debugging, testing, and project documentation through academic coursework and team projects.',
      'Actively participated in college technical activities and sports events, enhancing teamwork and leadership skills.'
    ],
    icon: <FiBook className="w-5 h-5 text-primary-400" />,
    borderColor: 'hover:border-primary-500/30',
    glowColor: 'bg-primary-500/10'
  },
  {
    category: 'Training Program',
    title: 'Full Stack MERN Stack',
    institution: 'DreamsGuider.com',
    duration: '6 Months (2025)',
    score: 'Completed with A+ Grade',
    details: [
      'Hands-on training on React.js, Redux Toolkit, Context API.',
      'Constructed modular backend architectures utilizing Node.js, Express.js, and MongoDB schemas.',
      'Learned API lifecycle design (CRUD operations, middleware authentication, JWT security) and Postman request testing.'
    ],
    icon: <FiTarget className="w-5 h-5 text-accent-400" />,
    borderColor: 'hover:border-accent-500/30',
    glowColor: 'bg-accent-500/10'
  },
  {
    category: 'Certifications',
    title: 'Professional Certifications',
    institution: 'Dreams Guider.com',
    duration: '2025-2026',
    score: 'Verified Badges',
    details: [
      'Full Stack Web Development - Gained hands-on experience in React.js, Node.js, Express.js, MongoDB, MySQL, REST APIs, authentication, and modern web application architecture.',
      'Frontend Development - Built responsive and interactive user interfaces using HTML5, CSS3, JavaScript, React.js, Tailwind CSS, and component-based design principles.',
      'Backend Development - Developed scalable server-side applications, implemented CRUD operations, JWT authentication, API integrations, and database management.',
      'Version Control with Git & GitHub - Mastered branch management, pull requests, merge conflict resolution, and collaborative development workflows.',

    ],
    icon: <FiAward className="w-5 h-5 text-secondary-400" />,
    borderColor: 'hover:border-secondary-500/30',
    glowColor: 'bg-secondary-500/10'
  }
];

export default function Education() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
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
    <section id="education" className="relative py-12 bg-transparent">
      {/* Background glow spotlight */}
      <div className="absolute top-[30%] right-[-10%] spotlight bg-cyan-900/5 w-[500px] h-[500px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          tag="Academic Background"
          title="Education"
          subtitle="My formal academic degree, intensive developer bootcamps, and professional technical certifications."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`glass-card p-8 rounded-3xl border border-white/5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${item.borderColor}`}
            >
              <div>
                {/* Header Icon + Label */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 ${item.glowColor}`}>
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">
                      {item.category}
                    </span>
                    <span className="text-xs font-semibold text-accent-400">
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Degree Name */}
                <div className="text-left mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-400">
                    {item.institution} &bull; <span className="text-xs font-bold text-slate-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md inline-block mt-1">{item.score}</span>
                  </p>
                </div>

                {/* Highlights List */}
                <ul className="flex flex-col gap-3 text-left">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-2.5 text-sm text-slate-400 leading-relaxed">
                      <span className="text-accent-500 mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-500"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
