import { motion, type Variants } from "framer-motion";
import { Code, Cpu, LineChart } from "lucide-react";

export default function HomeServices() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const services = [
    {
      icon: <Code size={32} />,
      title: "Web & Mobile Apps",
      desc: "Custom SaaS and enterprise application development.",
      colors: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
      border: "hover:border-blue-200 dark:hover:border-blue-800",
    },
    {
      icon: <Cpu size={32} />,
      title: "AI & Automation",
      desc: "Intelligent workflows and custom AI content generation.",
      colors:
        "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20",
      border: "hover:border-indigo-200 dark:hover:border-indigo-800",
    },
    {
      icon: <LineChart size={32} />,
      title: "Digital Marketing",
      desc: "Data-driven growth, SEO, and post-production services.",
      colors: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20",
      border: "hover:border-cyan-200 dark:hover:border-cyan-800",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950 relative z-20 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 group ${srv.border}`}
            >
              <div
                className={`p-5 rounded-2xl mb-6 transition-transform group-hover:scale-110 duration-300 ${srv.colors}`}
              >
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {srv.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {srv.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
