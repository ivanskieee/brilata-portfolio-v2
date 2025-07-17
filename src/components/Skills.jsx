export default function Skills() {
  const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'CodeIgniter', icon: '/icons/codeigniter.svg' },
  { name: 'Ruby on Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
];

  return (
    <section id="skills" className="p-4 dark:text-white">
      <h2 className="text-xl font-bold mb-2 border-b border-gray-400 dark:border-gray-600">
        Skills
      </h2>

      <ul className="list-disc list-inside mb-8">
        <li>HTML, CSS, JavaScript</li>
        <li>React.js, Vite</li>
        <li>PHP, CodeIgniter 3</li>
        <li>Ruby on Rails (API)</li>
        <li>Tailwind CSS</li>
        <li>Git & GitHub</li>
      </ul>

      <div className="overflow-hidden h-13">
        <div className="w-max flex animate-slide-infinite">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 flex items-center justify-center"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 transition-transform duration-300 hover:scale-125"
              />
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
            transform: translateX(-50%);
          }
        }
        .animate-slide-infinite {
          display: flex;
          width: max-content;
          animation: slide-infinite 40s linear infinite;
        }
        .animate-slide-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
