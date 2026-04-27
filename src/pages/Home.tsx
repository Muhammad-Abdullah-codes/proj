import { motion, type Variants } from "framer-motion";
import { ArrowRight, Code, Cpu, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  // Explicitly type these as Framer Motion 'Variants' to satisfy TypeScript
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glow Effects (Updated to Tailwind v4 syntax) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-100 bg-blue-500/20 dark:bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Top Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide shadow-sm border border-blue-100 dark:border-blue-800/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Next-Gen Software Agency
            </span>
          </motion.div>

          {/* Main Headline (Updated gradient to Tailwind v4 syntax) */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-gray-900 dark:text-white leading-tight"
          >
            Transforming Ideas into{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Digital Reality
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            We build scalable software, intelligent AI solutions, and
            high-performance digital experiences that drive enterprise growth.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
            >
              Start a Project
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex justify-center items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Core Services Quick-Look */}
          <motion.div
            variants={itemVariants}
            className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-2xl mb-4 text-blue-600 dark:text-blue-400">
                <Code size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Web & Mobile App</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Custom SaaS and application development.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-cyan-50 dark:bg-gray-800 rounded-2xl mb-4 text-cyan-600 dark:text-cyan-400">
                <Cpu size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">AI & Automation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Intelligent workflows and content generation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-indigo-50 dark:bg-gray-800 rounded-2xl mb-4 text-indigo-600 dark:text-indigo-400">
                <LineChart size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Digital Marketing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Data-driven growth and SEO strategies.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
