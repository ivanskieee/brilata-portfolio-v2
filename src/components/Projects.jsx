export default function Projects({ fullView = false }) {
  const projects = [
    {
      id: 1,
      title: "Queueing System",
      shortDescription: "Real-time LGU tracking system using CodeIgniter",
      fullDescription:
        "A comprehensive queueing management system developed for Local Government Unit operations. The system streamlines customer service by providing real-time queue tracking.",
      techStack: [
        "PHP",
        "CodeIgniter",
        "MySQL",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
      ],
      image: "/queueing-system.jpg",
      repoLink: "https://github.com/kevinbalocos/Queueing-system",
      liveLink: null,
      features: [
        "Real-time queue monitoring and management",
        "Digital display boards for queue status",
        "Multi-department queue handling",
        "Staff management and authentication",
      ],
    },
    {
      id: 2,
      title: "Chatbot AI",
      shortDescription: "Built with React and Ruby on Rails API",
      fullDescription:
        "An intelligent chatbot application featuring natural language processing capabilities. Built with a React frontend for seamless user interactions and a Ruby on Rails API backend for robust data processing.",
      techStack: [
        "React.js",
        "Ruby on Rails",
        "Node.js",
        "JavaScript",
        "CSS",
        "RESTful API",
      ],
      image: "chatbot-ai.jpg",
      repoLink: "https://github.com/ivanskieee/lantern",
      features: [
        "Natural language processing capabilities",
        "Context-aware conversation handling",
        "Real-time message processing",
        "Responsive chat interface",
      ],
    },
    {
      id: 3,
      title: "Portfolio Website",
      shortDescription: "This site you're viewing",
      fullDescription:
        "A modern, responsive portfolio website showcasing my skills, projects, and professional journey. Built with React and styled with Tailwind CSS, featuring dark mode support and smooth animations.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML",
        "CSS",
        "Vite",
      ],
      image: "portfolio-website.jpg",
      repoLink: "https://github.com/ivanskieee/brilata-portfolio-v2",
      features: [
        "Responsive design across all devices",
        "Dark mode toggle functionality",
        "Smooth animations and transitions",
        "Interactive typewriter effects",
      ],
    },
    {
      id: 4,
      title: "SPC Evaluation System",
      shortDescription:
        "Statistical Process Control evaluation and monitoring platform",
      fullDescription:
        "A comprehensive web-based system for statistical process control evaluation, quality monitoring, and performance analytics. Features real-time data collection, control chart generation, process capability analysis, and automated alerting for out-of-control conditions.",
      techStack: ["PHP", "JavaScript", "CSS", "Bootstrap", "MySQL", "Chart.js"],
      image: "evaluation-system.jpg",
      repoLink: "https://github.com/ivanskieee/capstone-project-eva-lution",
      features: [
        "Real-time data collection and monitoring",
        "Interactive control charts",
        "Statistical trend analysis and reporting",
        "Historical data archiving and retrieval",
      ],
    },
    {
      id: 5,
      title: "Inventory Management System Cake Shop",
      shortDescription:
        "Specialized inventory management solution for bakery operations",
      fullDescription:
        "A comprehensive inventory management system designed specifically for cake shops and bakeries. Manages ingredients, finished products, supplier relationships, and tracks expiration dates. Features automated low-stock alerts, recipe costing, and sales integration for optimal inventory control.",
      techStack: ["PHP", "JavaScript", "CSS"],
      image: "ims-cakeshop.jpg",
      repoLink:
        "https://github.com/ivanskieee/inventory-management-system-cake-shop",
      features: [
        "Ingredient and raw material inventory tracking",
        "Finished cake and pastry stock management",
        "Expiration date monitoring and alerts",
        "Recipe costing and profit margin calculations",
      ],
    },
    {
      id: 6,
      title: "Sales Dashboard",
      shortDescription:
        "Comprehensive sales analytics and performance tracking dashboard",
      fullDescription:
        "An interactive sales dashboard that provides performance analytics, and business intelligence insights. Features customizable visualizations, sales forecasting, and team performance tracking with responsive design for desktop.",
      techStack: [
        "React.js",
        "Ruby",
        "Chart.js",
        "Tailwind CSS",
        
      ],
      image: "sales-dashboard.jpg",
      repoLink: "https://github.com/ivanskieee/sales-dashboard",
      features: [
        "Interactive charts and data visualizations",
        "Automated alerts for sales targets and milestones",
        "Integration with CRM and sales tools",
      ],
    },
  ];

  if (fullView) {
    return (
      <div className="bg-white dark:bg-black rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 transition-colors duration-300">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-black dark:text-white">
          My Projects
        </h1>

        <div className="space-y-6 sm:space-y-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 sm:p-6">
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Here are some of the key projects I've worked on, showcasing my
              skills in web development, system design, and user experience.
              Each project represents a unique challenge and demonstrates
              different aspects of my technical expertise.
            </p>
          </div>

          {projects.map((project) => (
            <div
              key={project.id}
              className="border-l-4 border-gray-400 dark:border-gray-600 pl-4 sm:pl-6 py-4 sm:py-6 bg-gray-100 dark:bg-gray-800 rounded-r-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mr-2">
                <div className="order-2 lg:order-1">
                  <div className="w-full h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 shadow-lg bg-gray-200 dark:bg-gray-700">
                    <img
                      src={project.image}
                      alt={`${project.title} - Project Screenshot`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextElementSibling.style.display = "flex";
                      }}
                    />
                    <div className="w-full h-full hidden items-center justify-center text-gray-500 dark:text-gray-400">
                      <div className="text-center px-4">
                        <div className="text-3xl sm:text-4xl mb-2">📷</div>
                        <p className="text-sm sm:text-base">
                          Upload HD Project Image
                        </p>
                        <p className="text-xs sm:text-sm mt-1 break-all">
                          Replace: {project.image}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2 pr-0 lg:pr-6">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-black dark:text-white">
                    {project.title}
                  </h2>

                  <div className="mb-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base pr-0 sm:pr-4">
                      {project.fullDescription}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-2">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 dark:bg-gray-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors duration-200"
                    >
                      View Repository
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 dark:bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors duration-200"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-300 dark:border-gray-600 pr-0 lg:pr-6">
                <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pr-0 sm:pr-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                        •
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section id="projects" className="p-4 dark:text-white">
      <h2 className="text-xl font-bold mb-2 border-b border-gray-400 dark:border-gray-600">
        Projects
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <strong>Queueing System</strong> – Real-time LGU tracking system using
          CodeIgniter
        </li>
        <li>
          <strong>Chatbot AI</strong> – Built with React and Ruby on Rails API
        </li>
        <li>
          <strong>Portfolio</strong> – This site you're viewing
        </li>
      </ul>
    </section>
  );
}
