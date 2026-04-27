import { motion, type Variants } from "framer-motion";
import {
  Code,
  Cpu,
  LineChart,
  Server,
  Smartphone,
  PenTool,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const pageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const detailedServices = [
    {
      icon: <Code size={40} />,
      title: "Custom Web Development",
      description:
        "We build scalable, high-performance web applications using modern frameworks like React, Next.js, and enterprise-grade backend architectures.",
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "Custom CMS Development",
        "API Development & Integration",
      ],
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile solutions designed for flawless user experiences across iOS and Android ecosystems.",
      features: [
        "React Native & Flutter",
        "iOS Native (Swift)",
        "Android Native (Kotlin)",
        "App Store Optimization",
      ],
    },
    {
      icon: <Cpu size={40} />,
      title: "AI & Automation Solutions",
      description:
        "Streamline your business operations with custom AI integrations, automated workflows, and intelligent content generation tools.",
      features: [
        "LLM Integration (OpenAI, Gemini)",
        "Automated Customer Support",
        "Data Scraping & Analysis",
        "Workflow Automation (Zapier/Make)",
      ],
    },
    {
      icon: <Server size={40} />,
      title: "SaaS Architecture",
      description:
        "End-to-end development for Software as a Service products. From multi-tenant database design to subscription management billing.",
      features: [
        "Multi-tenant Architecture",
        "Stripe/PayPal Integration",
        "Scalable Cloud Hosting (AWS/GCP)",
        "User Role Management",
      ],
    },
    {
      icon: <LineChart size={40} />,
      title: "Digital Marketing & SEO",
      description:
        "Data-driven strategies to increase your visibility, drive targeted traffic, and convert visitors into long-term customers.",
      features: [
        "Technical SEO Optimization",
        "Pay-Per-Click (PPC) Campaigns",
        "Conversion Rate Optimization",
        "Analytics & Reporting",
      ],
    },
    {
      icon: <PenTool size={40} />,
      title: "UI/UX & Post-Production",
      description:
        "Crafting visually stunning interfaces and providing post-production services that ensure your digital presence is polished and professional.",
      features: [
        "Wireframing & Prototyping",
        "Design Systems",
        "Video Editing & Animation",
        "Brand Identity Design",
      ],
    },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="pt-32 pb-24 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Comprehensive Digital{" "}
            <span className="text-blue-600 dark:text-blue-500">Services</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            From initial concept to final deployment, we provide end-to-end
            technology solutions tailored to scale your enterprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              // UPDATED: Added strong brand-colored shadows and enhanced vertical lift
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-24 text-center bg-blue-600 rounded-3xl p-12 shadow-2xl shadow-blue-600/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to scale your business?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Schedule a free technical consultation with our engineering team
            today. We'll discuss your goals and map out a custom architecture
            plan.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Book Your Free Consultation
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
