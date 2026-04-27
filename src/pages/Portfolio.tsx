import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Custom SVG component to replace the removed Lucide Github icon
const GithubIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CATEGORIES = [
  "All",
  "Web Development",
  "Mobile Apps",
  "AI Solutions",
  "SaaS & Cloud",
  "UI/UX Design",
];

const PROJECTS_DATA = [
  // --- WEB DEVELOPMENT (6 Projects) ---
  {
    title: "Nexus E-Commerce",
    category: "Web Development",
    desc: "A high-conversion headless e-commerce storefront with sub-second page loads.",
    tech: ["Next.js", "Shopify API", "Tailwind"],
    grad: "from-blue-600 to-cyan-500",
  },
  {
    title: "Horizon Real Estate",
    category: "Web Development",
    desc: "Dynamic property listing platform with interactive map integration and 3D tours.",
    tech: ["React", "Mapbox", "Node.js"],
    grad: "from-emerald-500 to-teal-600",
  },
  {
    title: "EduTech Portal",
    category: "Web Development",
    desc: "Learning management system for university students featuring live video streaming.",
    tech: ["Vue.js", "WebRTC", "Firebase"],
    grad: "from-indigo-500 to-purple-600",
  },
  {
    title: "MediCare Booking",
    category: "Web Development",
    desc: "Secure patient portal and appointment scheduling system compliant with healthcare standards.",
    tech: ["React", "TypeScript", "PostgreSQL"],
    grad: "from-rose-500 to-pink-600",
  },
  {
    title: "Culinary Blog Hub",
    category: "Web Development",
    desc: "A lightning-fast, SEO-optimized content platform for international food critics.",
    tech: ["Astro", "Tailwind", "Sanity CMS"],
    grad: "from-orange-500 to-amber-500",
  },
  {
    title: "Corporate FinSite",
    category: "Web Development",
    desc: "High-end corporate website for an investment firm featuring live stock tickers.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    grad: "from-slate-700 to-gray-900",
  },

  // --- MOBILE APPS (6 Projects) ---
  {
    title: "FitSync Pro",
    category: "Mobile Apps",
    desc: "Health tracking mobile application utilizing native smartwatch biometric sensors.",
    tech: ["React Native", "HealthKit", "Redux"],
    grad: "from-green-500 to-emerald-600",
  },
  {
    title: "Volt EV Finder",
    category: "Mobile Apps",
    desc: "Cross-platform app helping electric vehicle owners find and reserve charging stations.",
    tech: ["Flutter", "Google Maps API", "Dart"],
    grad: "from-blue-500 to-indigo-600",
  },
  {
    title: "Gourmet Drop",
    category: "Mobile Apps",
    desc: "On-demand premium food delivery app with real-time driver tracking.",
    tech: ["React Native", "Socket.io", "Stripe"],
    grad: "from-red-500 to-rose-600",
  },
  {
    title: "Crypto Vault UI",
    category: "Mobile Apps",
    desc: "Secure mobile wallet for digital assets featuring biometric authentication.",
    tech: ["Swift", "CoreData", "Web3.js"],
    grad: "from-yellow-500 to-amber-600",
  },
  {
    title: "Social Sphere",
    category: "Mobile Apps",
    desc: "Audio-first social networking app supporting live community rooms.",
    tech: ["Kotlin", "Agora.io", "Firebase"],
    grad: "from-violet-500 to-purple-600",
  },
  {
    title: "Zenith Home",
    category: "Mobile Apps",
    desc: "Smart home IoT controller app interfacing with lighting and security hardware.",
    tech: ["Flutter", "MQTT", "Python"],
    grad: "from-cyan-500 to-blue-600",
  },

  // --- AI SOLUTIONS (6 Projects) ---
  {
    title: "AutoCopy AI",
    category: "AI Solutions",
    desc: "SaaS platform utilizing LLMs to generate SEO-optimized marketing copy.",
    tech: ["OpenAI API", "React", "Node.js"],
    grad: "from-fuchsia-500 to-pink-600",
  },
  {
    title: "Visionary Analytics",
    category: "AI Solutions",
    desc: "Computer vision dashboard for retail stores to analyze foot traffic patterns.",
    tech: ["Python", "TensorFlow", "React"],
    grad: "from-blue-600 to-indigo-700",
  },
  {
    title: "SupportBot Pro",
    category: "AI Solutions",
    desc: "Intelligent customer service chatbot trained on specific enterprise knowledge bases.",
    tech: ["LangChain", "Pinecone", "Next.js"],
    grad: "from-teal-500 to-emerald-600",
  },
  {
    title: "DocuExtract AI",
    category: "AI Solutions",
    desc: "Automated OCR system for extracting structured data from unstructured legal documents.",
    tech: ["Python", "PyTorch", "AWS Textract"],
    grad: "from-slate-600 to-gray-800",
  },
  {
    title: "VoiceGenius",
    category: "AI Solutions",
    desc: "Real-time voice cloning and translation tool for video post-production.",
    tech: ["ElevenLabs", "React", "WebAudio"],
    grad: "from-purple-500 to-indigo-600",
  },
  {
    title: "Predictive Ops",
    category: "AI Solutions",
    desc: "Machine learning model predicting supply chain disruptions using historical data.",
    tech: ["Scikit-Learn", "FastAPI", "Vue.js"],
    grad: "from-amber-500 to-orange-600",
  },

  // --- SAAS & CLOUD (6 Projects) ---
  {
    title: "TaskForge OS",
    category: "SaaS & Cloud",
    desc: "Enterprise project management workspace with real-time collaborative whiteboards.",
    tech: ["Vite", "React", "PostgreSQL"],
    grad: "from-cyan-500 to-teal-500",
  },
  {
    title: "HR Connect",
    category: "SaaS & Cloud",
    desc: "Cloud-based human resources platform for payroll, benefits, and onboarding.",
    tech: ["Next.js", "AWS", "Prisma"],
    grad: "from-blue-500 to-blue-700",
  },
  {
    title: "Inventory Master",
    category: "SaaS & Cloud",
    desc: "Multi-tenant inventory tracking system for global logistics companies.",
    tech: ["Vue", "Supabase", "Tailwind"],
    grad: "from-emerald-600 to-green-700",
  },
  {
    title: "SalesStream CRM",
    category: "SaaS & Cloud",
    desc: "Customizable CRM tool for sales teams featuring automated email pipelines.",
    tech: ["React", "Node", "MongoDB"],
    grad: "from-rose-500 to-red-600",
  },
  {
    title: "Finance Flow",
    category: "SaaS & Cloud",
    desc: "Personal finance and budget tracking dashboard with bank API integrations.",
    tech: ["React", "Plaid API", "Drizzle"],
    grad: "from-violet-600 to-purple-700",
  },
  {
    title: "Metric Dash",
    category: "SaaS & Cloud",
    desc: "Customizable analytics dashboard aggregating data from 20+ marketing platforms.",
    tech: ["React", "D3.js", "Express"],
    grad: "from-slate-800 to-black",
  },

  // --- UI/UX DESIGN (6 Projects) ---
  {
    title: "Neobank Redesign",
    category: "UI/UX Design",
    desc: "Complete visual overhaul and user experience optimization for a digital bank.",
    tech: ["Figma", "Prototyping", "User Testing"],
    grad: "from-indigo-400 to-blue-500",
  },
  {
    title: "Traveler Concept",
    category: "UI/UX Design",
    desc: "High-fidelity app concept for a luxury travel booking experience.",
    tech: ["Framer", "Motion Design", "UI Kit"],
    grad: "from-amber-400 to-orange-500",
  },
  {
    title: "Medical Dashboard UI",
    category: "UI/UX Design",
    desc: "Accessible and clean interface design for complex hospital management software.",
    tech: ["Figma", "Design System", "WCAG"],
    grad: "from-teal-400 to-emerald-500",
  },
  {
    title: "E-Comm Checkout Flow",
    category: "UI/UX Design",
    desc: "Frictionless checkout experience optimized for mobile conversion rates.",
    tech: ["Adobe XD", "A/B Testing", "UX Research"],
    grad: "from-pink-500 to-rose-500",
  },
  {
    title: "Agency Portfolio Theme",
    category: "UI/UX Design",
    desc: "Dark-mode focused design system created specifically for creative agencies.",
    tech: ["Figma", "Typography", "Branding"],
    grad: "from-gray-800 to-gray-900",
  },
  {
    title: "Smart TV Interface",
    category: "UI/UX Design",
    desc: "Navigation and content discovery UI designed for 10-foot television screens.",
    tech: ["Sketch", "Interaction Design"],
    grad: "from-purple-500 to-fuchsia-500",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const pageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
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
        <div className="max-w-3xl mb-12">
          <h2 className="text-sm font-extrabold text-blue-600 dark:text-blue-500 tracking-widest uppercase mb-4">
            Our Work
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            Featured Projects & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Technical Case Studies
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            Explore our latest shipped products. From AI integrations to
            full-stack web applications, we build software that performs at
            scale.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-nowrap overflow-x-auto pb-4 mb-10 gap-3 scrollbar-hide">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, _) => (
              <motion.div
                key={project.title} // Use unique title as key for proper animation
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="group flex flex-col bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                {/* Project Image Placeholder */}
                <div
                  className={`w-full h-52 bg-linear-to-br ${project.grad} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-2 bg-white/20 rounded-full blur-[1px]" />
                    <div className="w-6 h-2 bg-white/20 rounded-full blur-[1px]" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 flex flex-col grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed grow">
                    {project.desc}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2.5 py-1 text-[11px] font-bold bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-5 pt-5 border-t border-gray-100 dark:border-gray-800 mt-auto">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-xs font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <GithubIcon size={16} /> Source
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-xs font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Live Demo <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <div className="mt-20 flex flex-col items-center text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">
            Ready to build something incredible?
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-500/25"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
