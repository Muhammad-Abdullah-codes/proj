import { motion, type Variants } from "framer-motion";
import {
  Target,
  Shield,
  Zap,
  Globe,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const pageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.15 },
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

  const coreValues = [
    {
      icon: <Target size={24} />,
      title: "Precision Engineering",
      desc: "We don't cut corners. Every line of code is optimized for performance and scalability.",
    },
    {
      icon: <Shield size={24} />,
      title: "Uncompromising Security",
      desc: "Enterprise-grade security protocols are baked into our architecture from day one.",
    },
    {
      icon: <Zap size={24} />,
      title: "Agile Execution",
      desc: "We deploy fast and iterate quickly, ensuring your product gets to market ahead of the competition.",
    },
    {
      icon: <Globe size={24} />,
      title: "Global Perspective",
      desc: "Building inclusive, accessible, and globally distributed systems for international users.",
    },
  ];

  const team = [
    {
      name: "Sarah Jenkins",
      role: "Chief Executive Officer",
      initials: "SJ",
      color: "bg-blue-600",
    },
    {
      name: "David Chen",
      role: "CTO & Lead Architect",
      initials: "DC",
      color: "bg-indigo-600",
    },
    {
      name: "Marcus Thorne",
      role: "Head of AI Integration",
      initials: "MT",
      color: "bg-cyan-600",
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Digital Strategy",
      initials: "ER",
      color: "bg-emerald-600",
    },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="pt-32 pb-24 min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header / Hero */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-sm font-extrabold text-blue-600 dark:text-blue-500 tracking-widest uppercase mb-4">
            Our Story
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            We build the software that{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              powers tomorrow.
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            DevelopersHub was founded on a simple principle: businesses
            shouldn't have to choose between cutting-edge innovation and
            rock-solid reliability.
          </p>
        </motion.div>

        {/* The Mission Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Beyond just coding.
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We started as a small collective of senior engineers frustrated by
              the bloated, slow-moving nature of traditional IT agencies. We
              wanted to create a streamlined hub where technical excellence
              meets business strategy.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Today, DevelopersHub partners with Fortune 500s and ambitious
              startups alike to architect bespoke web platforms, integrate
              proprietary AI models, and engineer high-availability cloud
              infrastructure.
            </p>
            <div className="pt-4 flex gap-8">
              <div>
                <p className="text-4xl font-black text-gray-900 dark:text-white mb-1">
                  10+
                </p>
                <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
                  Years Active
                </p>
              </div>
              <div>
                <p className="text-4xl font-black text-gray-900 dark:text-white mb-1">
                  50M+
                </p>
                <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
                  Users Reached
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-square md:aspect-\[4\/3\] rounded-3xl bg-gray-100 dark:bg-gray-900 overflow-hidden border border-gray-200 dark:border-gray-800 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5" />
              <div className="text-center z-10">
                <Users
                  size={64}
                  className="mx-auto text-gray-300 dark:text-gray-700 mb-4"
                />
                <p className="font-bold text-gray-400 dark:text-gray-600">
                  Agency Team Photo
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center">
                  <Award size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    Top Rated
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Enterprise Agency 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <motion.div variants={itemVariants} className="mb-32">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div variants={itemVariants} className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Leadership Team
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                The experienced minds driving our technical vision and corporate
                strategy forward.
              </p>
            </div>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Join our team <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Avatar Placeholder */}
                <div
                  className={`h-64 ${member.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="text-5xl font-black text-white/50 tracking-tighter relative z-10">
                    {member.initials}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
