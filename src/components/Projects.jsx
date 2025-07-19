export default function Projects({ fullView = false }) {
  const projects = [
    {
      id: 1,
      title: "Queueing System",
      shortDescription: "Real-time LGU tracking system using CodeIgniter",
      fullDescription: "A comprehensive queueing management system developed for Local Government Unit operations. The system streamlines customer service by providing real-time queue tracking.",
      techStack: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      image: "/queueing-system.jpg",
      repoLink: "https://github.com/yourusername/queueing-system",
      liveLink: null,
      features: [
        "Real-time queue monitoring and management",
        "Digital display boards for queue status",
        "SMS notifications for customers",
        "Analytics and reporting dashboard",
        "Multi-department queue handling",
        "Staff management and authentication"
      ]
    },
    {
      id: 2,
      title: "Chatbot AI",
      shortDescription: "Built with React and Ruby on Rails API",
      fullDescription: "An intelligent chatbot application featuring natural language processing capabilities. Built with a React frontend for seamless user interactions and a Ruby on Rails API backend for robust data processing.",
      techStack: ["React.js", "Ruby on Rails", "PostgreSQL", "JavaScript", "CSS", "RESTful API"],
      image: "chatbot-ai.jpg",
      repoLink: "https://github.com/yourusername/chatbot-ai",
      liveLink: "https://your-chatbot-demo.com",
      features: [
        "Natural language processing capabilities",
        "Context-aware conversation handling",
        "Real-time message processing",
        "Responsive chat interface",
        "Multi-topic query support",
        "Conversation history management"
      ]
    },
    {
      id: 3,
      title: "Portfolio Website",
      shortDescription: "This site you're viewing",
      fullDescription: "A modern, responsive portfolio website showcasing my skills, projects, and professional journey. Built with React and styled with Tailwind CSS, featuring dark mode support and smooth animations.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Vite"],
      image: "portfolio-website.jpg",
      repoLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://your-portfolio.com",
      features: [
        "Responsive design across all devices",
        "Dark mode toggle functionality",
        "Smooth animations and transitions",
        "Interactive typewriter effects",
        "Modern component architecture",
        "Optimized performance and SEO"
      ]
    },
    {
      id: 4,
      title: "E-commerce Platform",
      shortDescription: "Full-stack online shopping platform",
      fullDescription: "A comprehensive e-commerce solution with user authentication, product catalog, shopping cart functionality, and secure payment processing. Features administrative dashboard for inventory management.",
      techStack: ["Node.js", "Express.js", "MongoDB", "React.js", "Stripe API", "JWT"],
      image: "ecommerce-platform.jpg",
      repoLink: "https://github.com/yourusername/ecommerce-platform",
      liveLink: "https://your-ecommerce-demo.com",
      features: [
        "User registration and authentication",
        "Product catalog with search and filters",
        "Shopping cart and wishlist functionality",
        "Secure payment integration with Stripe",
        "Order tracking and history",
        "Admin dashboard for inventory management"
      ]
    },
    {
      id: 5,
      title: "Task Management System",
      shortDescription: "Collaborative project management tool",
      fullDescription: "A comprehensive task management application that enables teams to organize projects, assign tasks, track progress, and collaborate effectively. Features real-time updates and deadline management.",
      techStack: ["Vue.js", "Laravel", "MySQL", "Socket.io", "Bootstrap", "Chart.js"],
      image: "task-management.jpg",
      repoLink: "https://github.com/yourusername/task-management",
      liveLink: "https://your-taskmanager-demo.com",
      features: [
        "Project creation and team collaboration",
        "Task assignment and priority management",
        "Real-time notifications and updates",
        "Progress tracking with visual charts",
        "Deadline reminders and calendar integration",
        "File sharing and comment system"
      ]
    },
    {
      id: 6,
      title: "Weather Dashboard",
      shortDescription: "Real-time weather tracking application",
      fullDescription: "An interactive weather dashboard that provides current weather conditions, forecasts, and weather alerts for multiple locations. Features beautiful visualizations and responsive design.",
      techStack: ["React.js", "OpenWeather API", "Chart.js", "Tailwind CSS", "Axios", "Geolocation API"],
      image: "weather-dashboard.jpg",
      repoLink: "https://github.com/yourusername/weather-dashboard",
      liveLink: "https://your-weather-demo.com",
      features: [
        "Current weather conditions display",
        "7-day weather forecast",
        "Multiple location tracking",
        "Interactive weather charts",
        "Severe weather alerts",
        "Geolocation-based weather detection"
      ]
    },
    {
      id: 7,
      title: "Learning Management System",
      shortDescription: "Educational platform for online courses",
      fullDescription: "A comprehensive LMS platform enabling educators to create courses, manage students, and track learning progress. Includes video streaming, quizzes, and certification features.",
      techStack: ["Django", "Python", "PostgreSQL", "HTML/CSS", "JavaScript", "FFmpeg"],
      image: "lms-platform.jpg",
      repoLink: "https://github.com/yourusername/lms-platform",
      liveLink: null,
      features: [
        "Course creation and management",
        "Video streaming and playback controls",
        "Interactive quizzes and assessments",
        "Student progress tracking",
        "Certificate generation",
        "Discussion forums and messaging"
      ]
    },
    {
      id: 8,
      title: "Restaurant POS System",
      shortDescription: "Point of sale system for restaurants",
      fullDescription: "A complete point-of-sale system designed for restaurants with order management, inventory tracking, and sales analytics. Features touch-friendly interface and receipt printing.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Electron", "Thermal Printer API"],
      image: "restaurant-pos.jpg",
      repoLink: "https://github.com/yourusername/restaurant-pos",
      liveLink: null,
      features: [
        "Touch-friendly order interface",
        "Menu management and customization",
        "Inventory tracking and alerts",
        "Sales reporting and analytics",
        "Receipt printing integration",
        "Multi-user role management"
      ]
    }
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
              Here are some of the key projects I've worked on, showcasing my skills in 
              web development, system design, and user experience. Each project represents 
              a unique challenge and demonstrates different aspects of my technical expertise.
            </p>
          </div>

          {projects.map((project) => (
            <div key={project.id} className="border-l-4 border-gray-400 dark:border-gray-600 pl-4 sm:pl-6 py-4 sm:py-6 bg-gray-100 dark:bg-gray-800 rounded-r-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Project Image */}
                <div className="order-2 lg:order-1">
                  <div className="w-full h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 shadow-lg bg-gray-200 dark:bg-gray-700">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - Project Screenshot`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full hidden items-center justify-center text-gray-500 dark:text-gray-400">
                      <div className="text-center px-4">
                        <div className="text-3xl sm:text-4xl mb-2">📷</div>
                        <p className="text-sm sm:text-base">Upload HD Project Image</p>
                        <p className="text-xs sm:text-sm mt-1 break-all">Replace: {project.image}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="order-1 lg:order-2 pr-0 lg:pr-6">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-black dark:text-white">
                    {project.title}
                  </h2>
                  
                  <div className="mb-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base pr-0 sm:pr-4">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
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

                  {/* Links */}
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

              {/* Key Features */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-300 dark:border-gray-600 pr-0 lg:pr-6">
                <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pr-0 sm:pr-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-gray-600 dark:text-gray-400 mt-1 text-sm">•</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{feature}</span>
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
      <h2 className="text-xl font-bold mb-2 border-b border-gray-400 dark:border-gray-600">Projects</h2>
      <ul className="list-disc list-inside">
        <li><strong>Queueing System</strong> – Real-time LGU tracking system using CodeIgniter</li>
        <li><strong>Chatbot AI</strong> – Built with React and Ruby on Rails API</li>
        <li><strong>Portfolio</strong> – This site you're viewing</li>
      </ul>
    </section>
  );
}