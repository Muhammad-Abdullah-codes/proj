import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ClientLogos from "../components/ClientLogos";
import HomeServices from "../components/HomeServices";
import AboutSection from "../components/AboutSection";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
    <>
      {/* 100vh exact fit minus navbar height */}
      <section className="relative min-h-[calc(100vh-5rem)] mt-20 flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 px-6 py-12">
        {/* Optimized Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-200 h-100 bg-blue-500/15 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold tracking-wide shadow-sm border border-blue-100/50 dark:border-blue-800/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Next-Gen Software Agency
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-gray-900 dark:text-white leading-[1.1]"
          >
            Transforming Ideas into{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Digital Reality
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            We build scalable software, intelligent AI solutions, and
            high-performance digital experiences that drive enterprise growth.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 active:translate-y-0"
            >
              Start a Project
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex justify-center items-center gap-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Inserted the Client Logos component right below the Hero */}
      <ClientLogos />

      <HomeServices />
      <AboutSection />
    </>
  );
}
