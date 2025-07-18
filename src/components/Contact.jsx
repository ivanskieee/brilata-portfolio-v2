export default function Contact() {
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
