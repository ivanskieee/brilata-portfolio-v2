export default function Contact({ fullView = false }) {
  if (fullView) {
    return (
      <div className="bg-white dark:bg-black rounded-lg shadow-lg p-8 transition-colors duration-300">
        <h1 className="text-3xl font-semibold mb-6 text-black dark:text-white">
          Contact Me
        </h1>
        
        <div className="space-y-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Let's connect and build something amazing together!
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              Get in Touch
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                I'm always excited to connect with fellow developers, potential clients, 
                and anyone interested in discussing web development projects. Whether you 
                have a project in mind, want to collaborate, or just want to chat about 
                technology, I'd love to hear from you.
              </p>
              <p>
                Feel free to reach out through any of the channels below. I typically 
                respond within 24 hours and look forward to starting a conversation 
                about your next project or idea.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-400 dark:border-blue-600 pl-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-r-lg">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  Email
                </h3>
                <a
                  href="mailto:ibrilata.dev@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300 font-medium text-lg"
                >
                  ibrilata.dev@gmail.com
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  Primary contact for business inquiries and collaborations
                </p>
              </div>

              <div className="border-l-4 border-green-400 dark:border-green-600 pl-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-r-lg">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  Location
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                  Philippines
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  Available for remote work and local collaborations
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              Let's Work Together
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
                <p className="font-medium">I'm currently available for:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Web development projects</li>
                  <li>Frontend and backend development</li>
                  <li>System development and optimization</li>
                  <li>Technical consulting</li>
                  <li>Code reviews and mentoring</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              Response Time
            </h2>
            <div className="border-l-4 border-gray-400 dark:border-gray-600 pl-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-r-lg">
              <p className="text-gray-700 dark:text-gray-300">
                I aim to respond to all inquiries within 24 hours. For urgent matters, 
                please mention it in your email subject line and I'll prioritize your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="p-4 dark:text-white">
      <h2 className="text-xl font-bold mb-2 border-b border-gray-400 dark:border-gray-600">
        Contact
      </h2>
      <p className="mb-2">Feel free to reach out to me via email:</p>
      <a
        href="mailto:ibrilata.dev@gmail.com"
        className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300 font-normal tracking-wide hover:tracking-wider"
      >
        ibrilata.dev@gmail.com
      </a>
    </section>
  );
}