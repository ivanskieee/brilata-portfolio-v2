export default function Skills() {
 const skills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
    { name: 'Ruby on Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  ];

  return (
    <section id="skills" className="p-4 sm:p-4 px-0 sm:px-4 dark:text-white">
      <h2 className="text-xl font-bold mb-2 border-b border-gray-400 dark:border-gray-600 mx-4 sm:mx-0">
        Skills
      </h2>

      <ul className="list-disc list-inside mb-8 mx-4 sm:mx-0">
        <li>HTML, CSS, JavaScript</li>
        <li>React.js, Vite, Node.js</li>
        <li>PHP, CodeIgniter, Laravel, MySQL</li>
        <li>Ruby on Rails, PostgreSQL</li>
        <li>Tailwind CSS, Python</li>
        <li>Git & GitHub</li>
      </ul>

      <div className="relative overflow-hidden py-3">
        <div className="absolute left-0 top-0 w-12 h-full z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent"></div>
        </div>
        <div className="absolute right-0 top-0 w-12 h-full z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent"></div>
        </div>
        
        <div className="animate-slide-infinite flex items-center">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-1 sm:mx-3"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg px-2 py-1 shadow-sm border border-gray-200 dark:border-gray-700 flex items-center space-x-2">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-4 h-4 flex-shrink-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-infinite {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-slide-infinite {
          display: flex;
          width: max-content;
          animation: slide-infinite 60s linear infinite;
        }
        .animate-slide-infinite:hover {
          animation-play-state: paused;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-slide-infinite {
            animation-duration: 45s;
          }
        }
      `}</style>
    </section>
  );
}