import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Calendar,
  MessageSquare,
  LogOut,
  Plus,
  Search,
  Moon,
  Sun,
  User as UserIcon,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Changed to false initially

  // THE FIX: Read from localStorage on page reload just like the Navbar
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const currentAdmin = {
    name: "Sarah Jenkins",
    role: "Super Admin",
    initials: "SJ",
  };

  const sidebarItems = [
    { name: "Overview", icon: <LayoutDashboard size={20} /> },
    { name: "Meetings", icon: <Calendar size={20} /> },
    { name: "Leads", icon: <MessageSquare size={20} /> },
    { name: "Manage Blog", icon: <FileText size={20} /> },
    { name: "Manage Portfolio", icon: <Briefcase size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Mobile Overlay Background */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-30 flex flex-col transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-8 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Admin<span className="text-blue-600">Hub</span>
          </h2>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="lg:hidden p-2 text-gray-500"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <nav className="mt-4 px-4 grow space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === item.name
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 mb-4 border border-gray-100 dark:border-gray-700/50">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              {currentAdmin.initials}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                {currentAdmin.name}
              </p>
              <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {currentAdmin.role}
              </p>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 lg:ml-72 p-6 lg:p-10">
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-12">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                {activeTab}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Welcome back, {currentAdmin.name.split(" ")[0]}.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="relative grow sm:grow-0">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full sm:w-64 pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 dark:text-white transition-all"
              />
            </div>
            {activeTab.includes("Manage") && (
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95 shrink-0">
                <Plus size={18} />{" "}
                <span className="hidden sm:inline">Add New</span>
              </button>
            )}
          </div>
        </header>

        <div className="flex-1 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-200 dark:border-gray-800 p-6 sm:p-10 shadow-sm relative overflow-hidden min-h-150">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {activeTab === "Overview" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    <StatCard
                      title="Total Meetings"
                      value="12"
                      change="+3 this week"
                    />
                    <StatCard
                      title="New Leads"
                      value="48"
                      change="+12% from last month"
                    />
                    <StatCard
                      title="Published Posts"
                      value="24"
                      change="Next scheduled: Tomorrow"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    <ActivityRow
                      user="Sarah J."
                      action="published a blog post"
                      target="Optimizing Next.js"
                      time="2 hours ago"
                    />
                    <ActivityRow
                      user="David C."
                      action="updated portfolio"
                      target="Nexus E-Commerce"
                      time="5 hours ago"
                    />
                    <ActivityRow
                      user="Sarah J."
                      action="deleted draft"
                      target="Old Marketing Tips"
                      time="Yesterday"
                    />
                  </div>
                </>
              )}

              {activeTab.includes("Manage") && (
                <div className="flex flex-col items-center justify-center h-full min-h-100 text-gray-400">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full mb-4">
                    <UserIcon size={32} />
                  </div>
                  <p className="font-medium text-center">
                    Operations will be logged under:{" "}
                    <span className="font-bold text-gray-900 dark:text-white block sm:inline">
                      {currentAdmin.name}
                    </span>
                  </p>
                  <p className="text-xs mt-2 italic text-center max-w-sm">
                    Database connection required to perform real CRUD
                    operations.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
}: {
  title: string;
  value: string;
  change: string;
}) {
  return (
    <div className="p-6 lg:p-8 rounded-3xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
      <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
        {title}
      </p>
      <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-3">
        {value}
      </h4>
      <p className="text-xs text-blue-600 dark:text-blue-400 font-bold">
        {change}
      </p>
    </div>
  );
}

function ActivityRow({
  user,
  action,
  target,
  time,
}: {
  user: string;
  action: string;
  target: string;
  time: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors gap-2">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-700 flex shrink-0 items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-300">
          {user
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-bold text-gray-900 dark:text-white">
            {user}
          </span>{" "}
          {action}{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            {target}
          </span>
        </p>
      </div>
      <span className="text-xs font-medium text-gray-400 sm:ml-auto ml-12">
        {time}
      </span>
    </div>
  );
}
