import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function BlogPost() {
  // In a real app, we would use this 'slug' to fetch the article from PostgreSQL
  const { slug } = useParams();

  // Format the slug back into a readable title for our dummy display
  const displayTitle = slug
    ? slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "The Future of Web Architecture";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Top Navigation */}
        <div className="mb-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={16} /> Back to all articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full uppercase tracking-wider">
              Engineering
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] mb-8 tracking-tight">
            {displayTitle}
          </h1>

          <div className="flex flex-wrap items-center gap-6 py-6 border-y border-gray-100 dark:border-gray-800 text-sm font-medium text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                SJ
              </div>
              <span className="text-gray-900 dark:text-white font-bold">
                Sarah Jenkins
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} /> April 24, 2026
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} /> 8 min read
            </div>

            <button className="ml-auto flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Share2 size={16} /> Share
            </button>
          </div>
        </header>

        {/* Article Content (Simulated) */}
        <article className="prose prose-lg dark:prose-invert prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:font-semibold prose-img:rounded-2xl">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            The landscape of enterprise software architecture is shifting. What
            worked in 2023 is no longer sufficient for the high-availability,
            low-latency demands of modern web applications. In this teardown, we
            explore the transition from traditional REST paradigms.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            The Problem with Over-fetching
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            One of the primary bottlenecks we encounter when auditing legacy
            systems is payload bloat. When a client requests user data but
            receives 40 unnecessary relational fields, mobile performance
            suffers drastically.
          </p>

          {/* Simulated Code Block */}
          <div className="my-8 rounded-2xl overflow-hidden bg-gray-900 dark:bg-black border border-gray-800 shadow-xl">
            <div className="flex items-center px-4 py-3 bg-gray-800/50 border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-xs font-mono text-gray-400">
                query.ts
              </span>
            </div>
            <pre className="p-6 text-sm font-mono text-gray-300 overflow-x-auto">
              <code className="block">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">GET_USER_DATA</span>{" "}
                <span className="text-purple-400">=</span> gql
                <span className="text-green-400">`</span>
                {"\n"}
                <span className="text-yellow-300">query</span> GetUser($id: ID!){" "}
                {"{"}
                {"\n"}
                user(id: $id) {"{"}
                {"\n"}
                id{"\n"}
                name{"\n"}
                email{"\n"}
                <span className="text-gray-500">
                  # Exactly what we need. Nothing more.
                </span>
                {"\n"}
                {"}"}
                {"\n"}
                {"}"}
                {"\n"}
                <span className="text-green-400">`</span>;
              </code>
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Implementing the Solution
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            By shifting to a graph-based approach, our engineering team reduced
            payload sizes by an average of 64% across enterprise client
            applications, directly resulting in higher Core Web Vitals scores
            and improved mobile conversion rates.
          </p>
        </article>

        {/* Footer CTA */}
        <div className="mt-16 p-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need help upgrading your architecture?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our lead engineers are available for technical consultations.
          </p>
          <Link
            to="/book"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
