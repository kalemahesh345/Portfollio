import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, tag }) {
  return (
    <div className="flex flex-col items-center text-center mb-16 relative z-10">
      {tag && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wider text-accent-400 bg-accent-500/10 border border-accent-500/20 uppercase mb-4"
        >
          {tag}
        </motion.span>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4"
      >
        {title}
      </motion.h2>

      {/* Decorative Line */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="h-1 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 mb-6"
      ></motion.div>

      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
