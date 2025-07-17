import { useState, useEffect } from 'react';

export default function About() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Hi, I'm Ivan Brilata, passionate about web development.";

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