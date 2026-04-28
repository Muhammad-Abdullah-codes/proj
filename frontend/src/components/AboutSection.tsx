import { motion, type Variants } from "framer-motion";
import { ArrowRight, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    // Added min-h-[calc(100vh-5rem)] and flex items-center to make it a perfect full-screen block
    <section className="min-h-[calc(100vh-5rem)] flex items-center py-20 bg-gray-50 dark:bg-gray-900/30 border-t border-gray-100 dark:border-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Condensed Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={fadeUpVariant}
              className="text-sm font-extrabold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4"
            >
              Who We Are
            </motion.h2>
            <motion.h3
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Engineering the future of digital business.
            </motion.h3>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              We are a dedicated team of engineers and strategists. We don't
              just build websites; we architect scalable solutions and AI
              integrations that drive measurable growth for our partners.
            </motion.p>

            <motion.div variants={fadeUpVariant}>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Learn more about our agency
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Simplified Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            <motion.div
              variants={fadeUpVariant}
              className="bg-white dark:bg-gray-800/80 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <Users size={28} />
              </div>
              <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                250+
              </h4>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Happy Clients
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="bg-white dark:bg-gray-800/80 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center translate-y-0 lg:translate-y-8 mt-4 lg:mt-0"
            >
              <div className="w-14 h-14 bg-cyan-50 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center mb-6 text-cyan-600 dark:text-cyan-400">
                <Zap size={28} />
              </div>
              <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                500+
              </h4>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Projects Shipped
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
