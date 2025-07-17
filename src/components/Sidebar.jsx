export default function Sidebar({ isOpen, setIsOpen }) {
  const navItems = ["about", "skills", "projects", "seminars", "contact"];

  return (
    <div
      className={`fixed md:relative top-14 left-0 z-40 w-60 h-[calc(100vh-3.5rem)]
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0 delay-0" : "-translate-x-full delay-100"}
        md:translate-x-0 md:delay-0
      `}
    >
      <div className="w-full h-full bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 ease-in-out">
        <ul className="space-y-4 mt-6 px-6">
          {/* {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="capitalize block hover:underline"
              >
                {item}
              </a>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
