import { useState, useEffect } from 'react';

export default function About({ fullView = false }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Hi, I'm Ivan S. Brilata, passionate about web development.";

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    
    const typeWriter = () => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(fullText.slice(0, currentIndex - 1));
        currentIndex--;
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setIsTyping(true);
      }
    };

    const typingInterval = setInterval(typeWriter, isDeleting ? 30 : 50);

    return () => clearInterval(typingInterval);
  }, []);

  if (fullView) {
    return (
      <div className="bg-white dark:bg-black rounded-lg shadow-lg p-8 transition-colors duration-300">
        <h1 className="text-3xl font-semibold mb-6 text-black dark:text-white">
          About Me
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600 shadow-lg mb-4">
              <img 
                src="graduation-photo.jpg" 
                alt="Ivan S. Brilata - Graduation Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Hi, I'm Ivan S. Brilata, passionate about web development.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              My Journey
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                I'm a dedicated Information Technology graduate with a passion for creating 
                innovative web solutions. My journey in web development started during my 
                college years, where I discovered the power of turning ideas into functional, 
                user-friendly applications.
              </p>
              <p>
                Throughout my academic and professional journey, I've focused on staying 
                current with modern web technologies and best practices. I believe in writing 
                clean, maintainable code and creating seamless user experiences.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to 
                open-source projects, and sharing knowledge with fellow developers. I'm 
                always eager to take on new challenges and learn from every project I work on.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              Education
            </h2>
            <div className="border-l-4 border-gray-400 dark:border-gray-600 pl-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-r-lg">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">2025</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-1">
                Cum Laude
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Specialized in web development, database management, and software engineering. 
                Maintained high academic standards while actively participating in programming 
                competitions and tech-related extracurricular activities.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              Work Experience
            </h2>
            <div className="border-l-4 border-gray-400 dark:border-gray-600 pl-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-r-lg">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Intern – Queueing System Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Management Information System
              </p>
              <div className="text-gray-700 dark:text-gray-300 mt-2 space-y-2">
                <p>
                  Developed and implemented a comprehensive queueing system to improve customer service efficiency.
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Designed user-friendly interfaces for both customers and staff</li>
                  <li>Implemented real-time queue monitoring and management features</li>
                  <li>Optimized system performance and reduced wait times</li>
                  <li>Collaborated with cross-functional teams to ensure seamless integration</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-black dark:text-white mb-2">Frontend</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• HTML, CSS, JavaScript</li>
                  <li>• React.js, Modern frameworks</li>
                  <li>• Responsive design principles</li>
                  <li>• UI/UX best practices</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-black dark:text-white mb-2">Backend</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Database management</li>
                  <li>• API development</li>
                  <li>• System architecture</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              Goals & Aspirations
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My goal is to continue growing as a full-stack developer while contributing 
                to meaningful projects that make a positive impact. I'm passionate about 
                learning new technologies, mentoring aspiring developers, and being part of 
                a collaborative team that values innovation and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="about" className="p-4 dark:text-white">
      <h2 className="text-xl font-bold mb-2 border-b border-gray-400 dark:border-gray-600">
        About
      </h2>

      <p className="mt-2 min-h-[1.5rem]">
        <span className="inline-block min-w-[1ch]">
          {displayedText || '\u00A0'}
        </span>
      </p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Education</h3>
        <ul className="list-disc list-inside">
          <li>Bachelor of Science in Information Technology, 2025</li>
          <h1 className="ml-[21px]">
            Cum Laude
          </h1>
        </ul>

        <h3 className="text-lg font-semibold mt-4">Work Experience</h3>
        <ul className="list-disc list-inside">
          <li>Intern – Queueing System Developer for Management Information System</li>
        </ul>
      </div>
    </section>
  );
}