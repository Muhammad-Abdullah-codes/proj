import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return true;
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Reusable Link component for the animated underline effect
  const NavLink = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => (
    <Link
      to={to}
      className="relative font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group py-2"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
    </Link>
  );

  return (
    <nav className="fixed w-full z-50 bg-white/85 dark:bg-gray-950/85 backdrop-blur-lg border-b border-gray-200/80 dark:border-gray-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <Link to="/" className="text-2xl font-extrabold tracking-tight z-50">
          Dev<span className="text-blue-600 dark:text-blue-500">Hub</span>.
        </Link>

        <div className="hidden md:flex space-x-10 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>

          <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/book"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-95"
          >
            Book Meeting
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3 z-50">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-gray-600 dark:text-gray-300"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-900 dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 md:hidden shadow-2xl h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-8 space-y-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-lg font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-lg font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-lg font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                Portfolio
              </Link>
              <div className="pt-6 mt-4 border-t border-gray-100 dark:border-gray-800">
                <Link
                  to="/book"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-blue-600 text-white px-5 py-4 rounded-xl font-semibold text-center shadow-md active:scale-95 transition-all"
                >
                  Book a Meeting
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
