import { motion } from "framer-motion";
import { Hexagon, Triangle, Circle, Square, Octagon } from "lucide-react";

export default function ClientLogos() {
  const clients = [
    { name: "Acme Corp", icon: <Hexagon size={28} /> },
    { name: "GlobalTech", icon: <Triangle size={28} /> },
    { name: "Nexus Ind.", icon: <Circle size={28} /> },
    { name: "Apex Fin", icon: <Square size={28} /> },
    { name: "Quantum", icon: <Octagon size={28} /> },
  ];

  // We duplicate the array so the scrolling loop is mathematically seamless
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-10 border-y border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 overflow-hidden flex flex-col">
      <div className="w-full">
        <p className="text-center text-sm font-bold text-gray-400 dark:text-gray-500 mb-8 uppercase tracking-widest px-6">
          Trusted by innovative teams worldwide
        </p>

        {/* The Marquee Container */}
        <div className="relative flex overflow-hidden w-full">
          {/* Subtle gradient overlays to fade the edges seamlessly */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex flex-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {duplicatedClients.map((client, idx) => (
              <div
                key={idx}
                // Added shrink-0 to prevent the container from squishing
                className="flex shrink-0 items-center gap-2 pr-12 md:pr-24 text-gray-500 dark:text-gray-400 opacity-60 grayscale hover:grayscale-0 hover:text-blue-600 dark:hover:text-blue-500 transition-all duration-300 cursor-pointer"
              >
                {client.icon}
                {/* Added whitespace-nowrap to prevent the text from breaking to a second line */}
                <span className="text-xl font-black tracking-tight whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
