import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Seminars from "./components/Seminars";
import Contact from "./components/Contact";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="flex h-screen overflow-hidden bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      </div>

      <div className="flex-1 overflow-y-auto px-4 md:px-12 py-6 mt-16 md:mt-0 scroll-smooth">
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main className="mt-10 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <About />
            <Skills />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Projects />
            <Seminars />
          </div>

          <div>
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
