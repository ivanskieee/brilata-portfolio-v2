function FormalIBLogo({ darkMode }) {
  return (
    <div className="flex items-center md:ml-4">
      <div className="relative">
        <svg
          width="45"
          height="32"
          viewBox="0 0 45 32"
          className="transition-all duration-300"
        >
          <defs>
            <linearGradient id="formalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={darkMode ? "#E5E7EB" : "#1F2937"} />
              <stop offset="100%" stopColor={darkMode ? "#9CA3AF" : "#374151"} />
            </linearGradient>
            
            <filter id="textShadow">
              <feDropShadow dx="0" dy="1" stdDeviation="1" 
                           floodColor={darkMode ? "#00000060" : "#00000020"}/>
            </filter>
          </defs>
          
          <text
            x="15"
            y="21"
            fontSize="22"
            fontWeight="700"
            fontFamily="Times, serif"
            fill="url(#formalGradient)"
            textAnchor="middle"
            className="select-none"
            filter="url(#textShadow)"
          >
            I
          </text>
          
          <text
            x="30"
            y="21"
            fontSize="22"
            fontWeight="700"
            fontFamily="Times, serif"
            fill="url(#formalGradient)"
            textAnchor="middle"
            className="select-none"
            filter="url(#textShadow)"
          >
            B
          </text>
          
          <line
            x1="8"
            y1="26"
            x2="37"
            y2="26"
            stroke="url(#formalGradient)"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>
    </div>
  );
}

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

      <FormalIBLogo darkMode={darkMode} />

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