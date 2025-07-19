import { useState } from 'react';
import { Mail, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Contact({ fullView = false }) {
  const [showSocials, setShowSocials] = useState(false);
  
  const socialLinks = [
    {
      name: "Gmail",
      icon: Mail,
      url: "mailto:ibrilata.dev@gmail.com",
      color: "hover:text-red-600",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-900",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/Brilata.Ivan",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/ChubbyxGwapo",
      color: "hover:text-sky-500",
      bgColor: "hover:bg-sky-50 dark:hover:bg-sky-900",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ivannskieee/",
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-50 dark:hover:bg-pink-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ivan-brilata-634a17373/",
      color: "hover:text-blue-700",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/ivanskieee",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
      bgColor: "hover:bg-gray-50 dark:hover:bg-gray-800",
    },
  ];

  if (fullView) {
    return (
      <div className="bg-white dark:bg-black rounded-lg shadow-lg p-8 transition-colors duration-300">
        <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
          Contact Me
        </h1>
        
        <div className="space-y-6">
          <div className="text-center py-6">
            <div className="inline-flex items-center bg-green-50 dark:bg-green-950 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-green-700 dark:text-green-300 font-medium">Available for Work</span>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-xl text-gray-800 dark:text-gray-200">
              Open for web development opportunities and freelance projects
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Full-stack development • Company positions • Freelance work • Remote collaboration
            </p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                Get in Touch
              </h2>
              
              <div className="inline-block">
                <a
                  href="mailto:ibrilata.dev@gmail.com"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  <Mail className="mr-2" size={18} />
                  ibrilata.dev@gmail.com
                </a>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                📍 Philippines • Response within 24 hours
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="text-center">
              <h3 className="text-lg font-medium text-black dark:text-white mb-4">
                Connect on Social
              </h3>
              <div className="flex justify-center flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-all duration-300 ${link.bgColor} ${link.color} text-gray-600 dark:text-gray-400 hover:scale-110`}
                      title={link.name}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="p-4 text-black dark:text-white">
      <h2 className="text-xl font-bold mb-2 border-b border-gray-400 dark:border-gray-600">
        Contact
      </h2>
      
      <div className="mt-4 flex items-center">
        <div className="flex items-center">
          <button
            onClick={() => setShowSocials(!showSocials)}
            className="flex items-center space-x-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-300"
          >
            <span>Connect with me</span>
          </button>
          
          <div
            className={`flex gap-2 ml-2 transition-all duration-500 ease-in-out ${
              showSocials ? 'max-w-xs opacity-100 translate-x-0' : 'max-w-0 opacity-0 translate-x-4'
            } overflow-hidden`}
          >
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-all duration-300 ${link.bgColor} ${link.color} text-gray-600 dark:text-gray-400 hover:scale-110 flex-shrink-0`}
                  title={link.name}
                >
                  <IconComponent size={16} />
                </a>
              );
            })}
          </div>
          
          <svg
            onClick={() => setShowSocials(!showSocials)}
            className={`w-4 h-4 ml-2 cursor-pointer transform transition-transform duration-500 ease-in-out ${
              showSocials ? 'translate-x-0' : 'translate-x-0'
            } text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
}