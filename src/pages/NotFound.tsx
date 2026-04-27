import { motion } from "framer-motion";
import { Terminal, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen mt-10 bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-6 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
          <Terminal size={48} />
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter">
          4<span className="text-blue-600 dark:text-blue-500">0</span>4
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          System Exception: Route Not Found
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          The requested endpoint does not exist in our current architecture. The
          page may have been moved, deleted, or you might have mistyped the URL.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 active:scale-95"
        >
          <ArrowLeft size={20} />
          Return to Dashboard
        </Link>
      </motion.div>
    </div>
  );
}
