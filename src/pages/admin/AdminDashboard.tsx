import { useState } from "react";
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
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [darkMode, setDarkMode] = useState(true); // Default to dark for admin

  // Mock data for the current logged-in admin
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
    // The 'dark' class here forces dark mode for the entire admin wrapper if toggled on
    <div
      className={`flex min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-950" : "bg-gray-50"}`}
    >
      {/* Sidebar */}
      <aside className="w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 fixed h-full z-20 flex flex-col transition-colors duration-300">
        <div className="p-8 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Admin<span className="text-blue-600">Hub</span>
          </h2>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <nav className="mt-4 px-4 grow space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
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

        {/* Profile Section at Bottom */}
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
      <main className="ml-72 grow p-10">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
              {activeTab}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Welcome back, {currentAdmin.name.split(" ")[0]}.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 dark:text-white transition-all w-64"
              />
            </div>
            {activeTab.includes("Manage") && (
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                <Plus size={18} /> Add New
              </button>
            )}
          </div>
        </header>

        {/* Content Section */}
        <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-200 dark:border-gray-800 min-h-\[600px\] p-10 shadow-sm transition-colors duration-300">
          {activeTab === "Overview" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

              {/* Activity Log - Tracking who did what */}
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
            <div className="flex flex-col items-center justify-center h-96 text-gray-400">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full mb-4">
                <UserIcon size={32} />
              </div>
              <p className="font-medium">
                Operations will be logged under:{" "}
                <span className="font-bold text-gray-900 dark:text-white">
                  {currentAdmin.name}
                </span>
              </p>
              <p className="text-xs mt-2 italic">
                Database connection required to perform real CRUD operations.
              </p>
            </div>
          )}
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
    <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
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
    <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-300">
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
      <span className="text-xs font-medium text-gray-400">{time}</span>
    </div>
  );
}
