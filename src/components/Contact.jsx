import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/kalemahesh082003@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success)) {
        setShowToast(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Auto-hide toast
        setTimeout(() => setShowToast(false), 4000);
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Unable to send message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 bg-transparent">
      {/* Background radial spotlight */}
      <div className="absolute bottom-[10%] left-[-10%] spotlight bg-purple-900/5 w-[500px] h-[500px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          tag="Get In Touch"
          title="Contact Me"
          subtitle="Feel free to reach out for internship opportunities, full-time positions, or professional collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">

          {/* Contact Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Info Cards */}
            <div className="glass-card p-8 rounded-3xl border border-white/5 text-left flex gap-5 items-center">
              <div className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/25 flex items-center justify-center flex-shrink-0">
                <FiMail className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Email Me</span>
                <a href="mailto:kalemahesh082003@gmail.com" className="text-white hover:text-primary-400 transition-colors duration-300 font-bold text-sm md:text-base break-all">
                  kalemahesh082003@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/5 text-left flex gap-5 items-center">
              <div className="w-12 h-12 rounded-2xl bg-accent-500/10 border border-accent-500/25 flex items-center justify-center flex-shrink-0">
                <FiMapPin className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Location</span>
                <span className="text-white font-bold text-sm md:text-base">
                  Pune, Maharashtra, India
                </span>
              </div>
            </div>

            {/* Social Connect block */}
            <div className="glass-card p-8 rounded-3xl border border-white/5 text-left">
              <h3 className="text-base font-bold text-white mb-4">Connect Socially</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Connect with me on LinkedIn for professional network updates, or check out my open-source contributions on GitHub.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/kalemahesh345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-primary-500/15 border border-white/5 hover:border-primary-500/30 text-slate-300 hover:text-white flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                >
                  <FiGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/mahesh-kale-450149336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-accent-500/15 border border-white/5 hover:border-accent-500/30 text-slate-300 hover:text-white flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                >
                  <FiLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 flex flex-col gap-6 text-left"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} hover:border-white/20 focus:border-primary-500 focus:outline-none text-white text-sm transition-colors duration-300`}
                    />
                    {errors.name && (
                      <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-semibold">
                        <FiAlertCircle /> {errors.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} hover:border-white/20 focus:border-primary-500 focus:outline-none text-white text-sm transition-colors duration-300`}
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-semibold">
                        <FiAlertCircle /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Project Collaboration"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${errors.subject ? 'border-red-500/50' : 'border-white/10'} hover:border-white/20 focus:border-primary-500 focus:outline-none text-white text-sm transition-colors duration-300`}
                  />
                  {errors.subject && (
                    <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-semibold">
                      <FiAlertCircle /> {errors.subject}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} hover:border-white/20 focus:border-primary-500 focus:outline-none text-white text-sm transition-colors duration-300 resize-none`}
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-semibold">
                      <FiAlertCircle /> {errors.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-primary-950/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base border border-primary-500/20"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Success Toast Dialog */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 glass-card px-5 py-4 rounded-2xl border border-emerald-500/30 flex items-center gap-3 shadow-2xl bg-[#030712]/90 backdrop-blur-xl"
          >
            <FiCheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-sm font-bold text-white">Message Sent!</h4>
              <p className="text-xs text-slate-400">Thank you, I will get back to you shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
