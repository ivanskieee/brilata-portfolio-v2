export default function Seminars({ fullView = false }) {
  const seminarsData = [
    {
      title: "Internet Of Things: The Future of Technology",
      year: "2025",
      description: "Explored the fundamentals of IoT technology, smart devices connectivity, and future applications in various industries.",
      certImage: "/iot-cert.jpg",
      skills: ["IoT Fundamentals", "Smart Devices", "Connectivity Protocols"]
    },
    {
      title: "On-the-Job Training (OJT) Completion",
      year: "2025",
      description: "Successfully completed comprehensive on-the-job training program, gaining practical experience in real-world IT environments.",
      certImage: "/ojtcert.png",
      skills: ["Practical Experience", "Workplace Skills", "Professional Development"]
    },
    {
      title: "Ctrl+Alt+Defend: Cybersecurity 101 for Students",
      year: "2024", 
      description: "Comprehensive introduction to cybersecurity principles, threat detection, and defense strategies for IT professionals.",
      certImage: "/ctrl-cyber.jpg",
      skills: ["Threat Detection", "Security Protocols", "Risk Assessment"]
    },
    {
      title: "iSITE's 1st National Conference themed, AI Tools in Education",
      year: "2023",
      description: "Participated in a national conference focusing on the integration of artificial intelligence tools in educational environments.",
      certImage: "isite-1st.jpg", 
      skills: ["AI in Education", "Educational Technology", "Digital Learning"]
    },
    {
      title: "3rd iSITE Conference Developing Industry Skills",
      year: "2023",
      description: "Attended conference sessions on developing essential industry skills and staying current with technology trends.",
      certImage: "isite-3rd.jpg",
      skills: ["Industry Skills", "Professional Development", "Technology Trends"]
    },
    {
      title: "Research E-Conference",
      year: "2022",
      description: "Participated in a virtual research conference exploring current trends and methodologies in academic and industry research.",
      certImage: "/researchcon.jpg",
      skills: ["Research Methodology", "Data Analysis", "Academic Writing"]
    },
  ];

  if (!fullView) {
    return (
      <section id="seminars" className="p-4 dark:text-white">
        <h2 className="text-xl font-bold mb-2 border-b border-gray-400 dark:border-gray-600">
          Seminars and Certifications
        </h2>
        <ul className="list-disc list-inside">
          <li>Internet Of Things: The Future of Technology – 2025</li>
          <li>Ctrl+Alt+Defend: Cybersecurity 101 for Students – 2024</li>
          <li>iSITE's 1st National Conference themed, AI Tools in Education – 2023</li>
          <li>3rd iSITE Conference Developing Industry Skills – 2023</li>
        </ul>
      </section>
    );
  }

  return (
    <div className="bg-white dark:bg-black rounded-lg shadow-lg p-8 transition-colors duration-300">
      <h1 className="text-3xl font-semibold mb-6 text-black dark:text-white">
        Seminars and Certifications
      </h1>
      
      <div className="space-y-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Professional development through seminars and certifications.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">
            Certifications Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seminarsData.map((seminar, index) => (
              <div key={index} className="border-l-4 border-gray-400 dark:border-gray-600 pl-6 pr-4 py-4 bg-gray-100 dark:bg-gray-800 rounded-r-lg">
                <div className="mb-4">
                  <div className="w-full h-48 rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600 shadow-md mb-4 mr-2">
                    <img 
                      src={seminar.certImage} 
                      alt={`${seminar.title} - Certification`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x300/6b7280/ffffff?text=Certificate";
                      }}
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  {seminar.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                  {seminar.year}
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {seminar.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-2">Key Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {seminar.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}