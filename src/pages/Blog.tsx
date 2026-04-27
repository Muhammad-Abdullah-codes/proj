import { motion, type Variants } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BLOG_POSTS = [
  {
    title: "Migrating from REST to GraphQL: A 2026 Enterprise Guide",
    excerpt:
      "Why top-tier engineering teams are abandoning traditional REST endpoints for the flexibility and performance of GraphQL.",
    category: "Architecture",
    date: "April 24, 2026",
    readTime: "8 min read",
    grad: "from-blue-600 to-cyan-500",
  },
  {
    title: "Optimizing Next.js for Sub-Second Core Web Vitals",
    excerpt:
      "A deep dive into server components, edge caching, and bundle optimization to achieve a perfect 100 Lighthouse score.",
    category: "Performance",
    date: "April 18, 2026",
    readTime: "12 min read",
    grad: "from-purple-600 to-indigo-600",
  },
  {
    title: "The Reality of LLM Integration in SaaS Products",
    excerpt:
      "Beyond the hype: Practical strategies for embedding OpenAI and Gemini into your existing software architecture securely.",
    category: "AI Solutions",
    date: "April 10, 2026",
    readTime: "6 min read",
    grad: "from-emerald-500 to-teal-600",
  },
  {
    title: "Why PostgreSQL is Winning the Database Wars",
    excerpt:
      "Analyzing the shift away from NoSQL back to robust, relational databases powered by modern ORMs like Drizzle.",
    category: "Databases",
    date: "April 02, 2026",
    readTime: "9 min read",
    grad: "from-rose-500 to-orange-500",
  },
  {
    title: "Building Resilient IoT Dashboards with React",
    excerpt:
      "How to handle high-frequency WebSocket data from hardware sensors without crashing the browser's main thread.",
    category: "Hardware",
    date: "March 28, 2026",
    readTime: "15 min read",
    grad: "from-slate-700 to-gray-900",
  },
  {
    title: "Framer Motion vs. CSS Animations",
    excerpt:
      "When to use JavaScript-based animation libraries and when to rely on native browser rendering for complex UIs.",
    category: "Frontend",
    date: "March 15, 2026",
    readTime: "5 min read",
    grad: "from-amber-500 to-orange-600",
  },
];

export default function Blog() {
  const pageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
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
        <motion.div variants={itemVariants} className="max-w-3xl mb-16">
          <h2 className="text-sm font-extrabold text-blue-600 dark:text-blue-500 tracking-widest uppercase mb-4">
            Insights & Engineering
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            The DevelopersHub{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Technical Blog
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            Deep dives, architectural teardowns, and engineering best practices
            straight from our lead developers.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Placeholder (Gradient) */}
              <div
                className={`w-full h-48 bg-linear-to-br ${post.grad} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow">
                <div className="flex items-center gap-4 mb-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  <span className="text-blue-600 dark:text-blue-400">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800 mt-auto">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400">
                    <Calendar size={16} /> {post.date}
                  </span>
                  <Link
                    to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="flex items-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
                  >
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
