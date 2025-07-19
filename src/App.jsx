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
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingComplete(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 4500); 

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="max-w-4xl mx-auto">
            <About fullView={true} />
          </div>
        );
      case "skills":
        return (
          <div className="max-w-4xl mx-auto">
            <Skills fullView={true} />
          </div>
        );
      case "projects":
        return (
          <div className="max-w-4xl mx-auto">
            <Projects fullView={true} />
          </div>
        );
      case "seminars":
        return (
          <div className="max-w-4xl mx-auto">
            <Seminars fullView={true} />
          </div>
        );
      case "contact":
        return (
          <div className="max-w-4xl mx-auto">
            <Contact fullView={true} />
          </div>
        );
      default:
        return (
          <main className="space-y-10 min-h-[calc(100vh-140px)]">
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
        );
    }
  };

  if (isLoading) {
    return (
      <div className={`fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 flex items-center justify-center z-50 ${
        isLoadingComplete ? 'modern-fade-out' : ''
      }`}>
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="text-center relative z-10">
          <div className="subtitle-entrance mb-16">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light tracking-widest uppercase">
              IVAN S. BRILATA
            </p>
            <div className="w-24 h-px bg-gray-300 dark:bg-gray-600 mx-auto mt-6"></div>
          </div>
          
          <div className="loading-entrance">
            <div className="w-64 h-px bg-gray-200 dark:bg-gray-700 mx-auto overflow-hidden">
              <div className="modern-loading-bar h-full bg-gradient-to-r from-gray-400 via-gray-600 to-gray-500 dark:from-gray-500 dark:via-gray-300 dark:to-gray-400"></div>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-4 font-light tracking-wider">
              Loading Experience
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
        <Sidebar 
          isOpen={sidebarOpen} 
          setIsOpen={setSidebarOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      {/* Added scrollbar-gutter to reserve space and prevent layout shifts */}
      <div className="flex-1 overflow-y-auto px-4 md:px-12 py-6 mt-5 md:mt-0 scroll-smooth scrollbar-gutter-stable">
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div className="mt-10">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;