import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* We will add more routes here later */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
