import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Users, Award, Zap } from "lucide-react";

export default function AboutSection() {
  // Explicitly typing as 'Variants' to satisfy strict mode
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
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={fadeUpVariant}
              className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-3"
            >
              About DevelopersHub
            </motion.h2>
            <motion.h3
              variants={fadeUpVariant}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Engineering the future of your digital business.
            </motion.h3>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              We are a team of passionate engineers, designers, and strategists
              dedicated to delivering high-performance software. By combining
              cutting-edge AI integrations with modern front-end architectures,
              we build solutions that don't just look great—they drive
              measurable growth.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
              {[
                "Production-ready scalable architectures",
                "Seamless AI & Automation integrations",
                "Conversion-focused UI/UX design",
                "24/7 technical support and maintenance",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeUpVariant}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium"
                >
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-6"
          >
            {/* Stat Box 1 */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <Users size={24} />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                250+
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Happy Clients
              </p>
            </motion.div>

            {/* Stat Box 2 */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow translate-y-0 md:translate-y-8"
            >
              <div className="w-12 h-12 bg-cyan-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-4 text-cyan-600 dark:text-cyan-400">
                <Zap size={24} />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                99.9%
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Uptime Delivered
              </p>
            </motion.div>

            {/* Stat Box 3 */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                <Award size={24} />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                15+
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Industry Awards
              </p>
            </motion.div>

            {/* Stat Box 4 */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow translate-y-0 md:translate-y-8"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                500+
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Projects Shipped
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
