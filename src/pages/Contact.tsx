import { motion, type Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const pageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="pt-32 pb-24 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-sm font-extrabold text-blue-600 dark:text-blue-500 tracking-widest uppercase mb-4">
            Get in Touch
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              great together.
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Whether you have a strict RFP or just a napkin sketch, our
            engineering team is ready to help you scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Contact Information (Left Column) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-1">
                      Email Us
                    </p>
                    <a
                      href="mailto:hello@developershub.com"
                      className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      hello@developershub.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-1">
                      Call Us
                    </p>
                    <a
                      href="tel:+15551234567"
                      className="text-lg font-medium text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-1">
                      Visit Us
                    </p>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      123 Innovation Drive
                      <br />
                      Tech District, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form UI (Right Column) */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-200 dark:border-gray-800 shadow-xl shadow-blue-500/5">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-bold text-gray-700 dark:text-gray-300"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-bold text-gray-700 dark:text-gray-300"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-gray-700 dark:text-gray-300"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-bold text-gray-700 dark:text-gray-300"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ai">AI Solutions</option>
                    <option value="marketing">Digital Marketing</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-gray-700 dark:text-gray-300"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your timeline and goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 active:scale-95"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
