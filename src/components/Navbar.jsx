export default function Navbar({
  sidebarOpen,
  setSidebarOpen,
  darkMode,
  setDarkMode,
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-3 transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white shadow">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden p-2"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-black dark:bg-white transition-transform duration-300 ${
              sidebarOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-black dark:bg-white transition-opacity duration-300 ${
              sidebarOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-black dark:bg-white transition-transform duration-300 ${
              sidebarOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </button>

      <h1 className="text-xl font-bold">IVAN S. BRILATA</h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full 
          transition-colors duration-200 ease-in-out focus:outline-none 
          ${darkMode ? "bg-blue-600" : "bg-gray-300"}
        `}
        role="switch"
        aria-checked={darkMode}
      >
        <span className="sr-only">Toggle dark mode</span>
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white 
            transition-transform duration-200 ease-in-out shadow-sm
            ${darkMode ? "translate-x-6" : "translate-x-1"}
          `}
        />
      </button>
    </nav>
  );
}
