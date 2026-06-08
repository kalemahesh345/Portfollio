import { motion } from 'framer-motion';
import { FiGlobe, FiSmartphone, FiShoppingBag, FiCheck, FiArrowRight } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const services = [
  {
    icon: <FiGlobe className="w-6 h-6" />,
    title: 'Web Development',
    tagline: 'High-performance websites tailored to your business',
    desc: 'Building responsive, fast-loading, and modern web applications from scratch, optimized for performance and search engines.',
    features: [
      'Responsive Web Design (Mobile-First)',
      'Full-Stack MERN App Development',
      'SEO & Speed Optimization',
      'Custom Admin Dashboards & CMS',
      'Secure Restful API Integration'
    ],
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    accentColor: 'border-accent-500/20 hover:border-accent-500/40 hover:shadow-accent-950/20',
    iconBg: 'bg-accent-500/10 border-accent-500/20 text-accent-400',
    btnColor: 'text-accent-400 hover:text-accent-300',
    bulletColor: 'bg-accent-500/20 text-accent-400',
    spotlight: 'bg-cyan-500/5'
  },
  {
    icon: <FiSmartphone className="w-6 h-6" />,
    title: 'App Development',
    tagline: 'Cross-platform mobile apps with native feel',
    desc: 'Creating high-fidelity mobile applications for both iOS and Android platforms with intuitive designs and fluid performance.',
    features: [
      'iOS & Android Apps (React Native)',
      'Smooth & Interactive UI/UX Design',
      'Secure Authentication & Database Integration',
      'Push Notifications & Device API Features',
      'App Store & Play Store Submission'
    ],
    tech: ['React Native', 'Expo', 'Redux', 'Firebase', 'Node.js'],
    accentColor: 'border-primary-500/20 hover:border-primary-500/40 hover:shadow-primary-950/20',
    iconBg: 'bg-primary-500/10 border-primary-500/20 text-primary-400',
    btnColor: 'text-primary-400 hover:text-primary-300',
    bulletColor: 'bg-primary-500/20 text-primary-400',
    spotlight: 'bg-purple-500/5'
  },
  {
    icon: <FiShoppingBag className="w-6 h-6" />,
    title: 'E-commerce Services',
    tagline: 'Scalable online stores built to maximize conversions',
    desc: 'Developing fully functional e-commerce storefronts with optimized checkout experiences and secure payment flows.',
    features: [
      'Custom Shopping Cart & Checkout Logic',
      'Stripe & PayPal Payment Integrations',
      'Intuitive Product Management Panels',
      'Order Tracking & Customer Portal',
      'Marketing Tools & Analytics Insights'
    ],
    tech: ['Next.js', 'Stripe API', 'MySQL', 'Node.js', 'Tailwind CSS'],
    accentColor: 'border-secondary-500/20 hover:border-secondary-500/40 hover:shadow-secondary-950/20',
    iconBg: 'bg-secondary-500/10 border-secondary-500/20 text-secondary-400',
    btnColor: 'text-secondary-400 hover:text-secondary-300',
    bulletColor: 'bg-secondary-500/20 text-secondary-400',
    spotlight: 'bg-emerald-500/5'
  }
];

export default function Services() {
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
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-12 bg-transparent">
      {/* Background radial spotlight */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 spotlight bg-violet-900/5 w-[600px] h-[600px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          tag="What I Offer"
          title="Services I Provide"
          subtitle="Explore the tailored professional solutions I provide to turn your creative concepts into production-ready digital products."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`glass-card p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${service.accentColor} hover:shadow-xl`}
            >
              {/* Internal Spotlight Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-40 ${service.spotlight}`} />

              <div>
                {/* Header Icon */}
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${service.iconBg}`}>
                  {service.icon}
                </div>

                {/* Service Info */}
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-4 tracking-wide uppercase">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Bullet Deliverables */}
                <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-3 border-b border-white/5 pb-2">
                  What you get:
                </h4>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <span className={`p-0.5 rounded-full mt-0.5 shrink-0 ${service.bulletColor}`}>
                        <FiCheck className="w-3.5 h-3.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Badges and Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-white/5 border border-white/5 text-slate-400 uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:translate-x-1 ${service.btnColor}`}
                >
                  Discuss Project
                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
