// --- CORE REACT & ROUTER IMPORTS (These fix your errors!) ---
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// --- COMPONENTS ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// --- PAGES ---
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MeetingScheduler from "./pages/MeetingScheduler";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/AdminDashboard";

// --- HOOKS (This fixes the usePageTitle error!) ---
import { usePageTitle } from "./hooks/usePageTitle";

// --- WRAPPER COMPONENT ---
const PageWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  usePageTitle(title);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

// --- MAIN APP ---
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/admin/*"
          element={
            <PageWrapper title="Admin Panel">
              <AdminDashboard />
            </PageWrapper>
          }
        />

        <Route
          path="*"
          element={
            <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 font-sans">
              <Navbar />
              <main className="grow">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <PageWrapper title="Home">
                        <Home />
                      </PageWrapper>
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <PageWrapper title="About Us">
                        <About />
                      </PageWrapper>
                    }
                  />
                  <Route
                    path="/services"
                    element={
                      <PageWrapper title="Our Services">
                        <Services />
                      </PageWrapper>
                    }
                  />
                  <Route
                    path="/portfolio"
                    element={
                      <PageWrapper title="Portfolio & Work">
                        <Portfolio />
                      </PageWrapper>
                    }
                  />
                  <Route
                    path="/blog"
                    element={
                      <PageWrapper title="Insights & News">
                        <Blog />
                      </PageWrapper>
                    }
                  />
                  <Route
                    path="/blog/:slug"
                    element={
                      <PageWrapper title="Read Article">
                        <BlogPost />
                      </PageWrapper>
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <PageWrapper title="Contact Us">
                        <Contact />
                      </PageWrapper>
                    }
                  />
                  <Route
                    path="/book"
                    element={
                      <PageWrapper title="Schedule a Call">
                        <MeetingScheduler />
                      </PageWrapper>
                    }
                  />
                  <Route
                    path="*"
                    element={
                      <PageWrapper title="Page Not Found">
                        <NotFound />
                      </PageWrapper>
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
