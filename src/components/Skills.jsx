import { useState } from 'react';

export default function Skills({ fullView = false }) {
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

  const skillCategories = {
    "Frontend Development": [
      { name: 'HTML', description: 'Semantic markup and modern HTML5 features' },
      { name: 'CSS', description: 'Responsive design, Flexbox, Grid, and modern CSS techniques' },
      { name: 'JavaScript', description: 'ES6+, DOM manipulation, asynchronous programming' },
      { name: 'React.js', description: 'Component-based architecture, hooks, state management' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development' },
      { name: 'Vite', description: 'Modern build tool for faster development experience' }
    ],
    "Backend Development": [
      { name: 'Node.js', description: 'Server-side JavaScript runtime for scalable applications' },
      { name: 'PHP', description: 'Server-side scripting and web application development' },
      { name: 'CodeIgniter', description: 'Lightweight PHP framework for rapid development' },
      { name: 'Laravel', description: 'Elegant PHP framework with built-in features' },
      { name: 'Ruby on Rails', description: 'Full-stack web application framework' }
    ],
    "Database Management": [
      { name: 'MySQL', description: 'Relational database design and optimization' },
      { name: 'PostgreSQL', description: 'Advanced relational database with JSON support' }
    ],
    "Development Tools & Others": [
      { name: 'Git & GitHub', description: 'Version control and collaborative development' },
      { name: 'Python', description: 'Scripting, automation, and general programming' }
    ]
  };

  if (fullView) {
    return (
      <div className="bg-white dark:bg-black rounded-lg shadow-lg p-8 transition-colors duration-300">
        <h1 className="text-3xl font-semibold mb-6 text-black dark:text-white">
          Technical Skills
        </h1>
        
        <div className="space-y-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              As a passionate web developer, I've cultivated a diverse set of technical skills 
              spanning frontend and backend development, database management, and modern development tools. 
              I believe in continuous learning and staying current with industry best practices.
            </p>
          </div>

          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="border-l-4 border-gray-400 dark:border-gray-600 pl-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              Development Philosophy
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                <p>
                  I approach development with a focus on writing clean, maintainable code 
                  that follows industry best practices. My experience spans both frontend 
                  and backend technologies, allowing me to work effectively across the 
                  entire web development stack.
                </p>
                <p>
                  I'm particularly passionate about creating responsive, user-friendly 
                  interfaces while ensuring robust backend functionality. Whether it's 
                  building dynamic React applications or developing scalable server-side 
                  solutions, I strive for excellence in every project.
                </p>
                <p>
                  Continuous learning is at the core of my development journey. I stay 
                  updated with emerging technologies and frameworks, always looking for 
                  opportunities to improve my skills and adopt new tools that can enhance 
                  productivity and code quality.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              Project Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
                  Frontend Focus
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I prioritize creating intuitive user experiences with responsive design, 
                  accessibility considerations, and performance optimization. Modern frameworks 
                  like React help me build component-based, scalable applications.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
                  Backend Excellence
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  My backend development focuses on creating robust APIs, efficient database 
                  designs, and secure server-side logic. I work with various frameworks to 
                  deliver reliable and scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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