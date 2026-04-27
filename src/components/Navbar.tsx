import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  // Theme State
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

  // Mobile Menu State
  const [isOpen, setIsOpen] = useState(false);

  // Handle Theme Toggle
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scrolling is restored if the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight z-50">
          Dev<span className="text-blue-600">Hub</span>.
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="font-medium hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="font-medium hover:text-blue-600 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="font-medium hover:text-blue-600 transition-colors"
          >
            Portfolio
          </Link>

          {/* Desktop Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            to="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Book Meeting
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2 z-50">
          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Framer Motion Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-20 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 md:hidden shadow-2xl h-screen"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium hover:text-blue-600 transition-colors"
              >
                Portfolio
              </Link>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center w-full shadow-md"
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
