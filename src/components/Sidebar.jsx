export default function Sidebar({
  isOpen,
  setIsOpen,
  activeSection,
  setActiveSection,
}) {
  const navItems = [
    { id: "home", label: "home" },
    { id: "about", label: "about" },
    { id: "skills", label: "skills" },
    { id: "projects", label: "projects" },
    { id: "seminars", label: "seminars" },
    { id: "contact", label: "contact" },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/brilata.pdf";
    link.download = "brilata.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed md:relative top-14 left-0 z-40 w-60 h-[calc(100vh-3.5rem)]
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0 delay-0" : "-translate-x-full delay-100"}
        md:translate-x-0 md:delay-0
      `}
    >
      <div className="w-full h-full bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 ease-in-out flex flex-col">
        <nav className="flex-1 mt-8 px-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`group flex items-center px-4 py-3 text-sm font-medium capitalize
                    rounded-lg w-full text-left
                    transition-colors duration-200
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    hover:text-blue-600 dark:hover:text-blue-400
                    transition-transform duration-200 ease-out
                    hover:translate-x-1 hover:shadow-sm
                    border-l-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400
                    relative overflow-hidden
                    ${
                      activeSection === item.id
                        ? "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400"
                        : ""
                    }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent 
                    dark:from-blue-950 dark:to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                handleDownloadCV();
                setIsOpen(false);
              }}
              className="group flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium
                bg-white hover:bg-gray-50 dark:bg-black dark:hover:bg-gray-900
                text-black dark:text-white
                border border-gray-300 dark:border-gray-600
                rounded-md
                transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </button>
          </div>
        </nav>
        
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            © Ivan Brilata 2025
          </p>
        </div>
      </div>
    </div>
  );
}