import {type FC, useRef } from "react";

interface NavLink {
  name: string;
  url: string;
}

const techNavLinks: NavLink[] = [
  { name: "HTML", url: "/launchingsoon" },
  { name: "CSS", url: "/launchingsoon" },
  { name: "JAVASCRIPT", url: "/launchingsoon" },
  { name: "SQL", url: "/launchingsoon" },
  { name: "PYTHON", url: "/launchingsoon" },
  { name: "JAVA", url: "/launchingsoon" },
  { name: "PHP", url: "/launchingsoon" },
  { name: "HOW TO", url: "/launchingsoon" },
  { name: "W3.CSS", url: "/launchingsoon" },
  { name: "C", url: "/launchingsoon" },
  { name: "C++", url: "/launchingsoon" },
  { name: "C#", url: "/launchingsoon" },
  { name: "BOOTSTRAP", url: "/launchingsoon" },
  { name: "REACT", url: "/launchingsoon" },
  { name: "MYSQL", url: "/launchingsoon" },
  { name: "JQUERY", url: "/launchingsoon" },
  { name: "EXCEL", url: "/launchingsoon" },
  { name: "CSS", url: "/launchingsoon" },
  { name: "JAVASCRIPT", url: "/launchingsoon" },
  { name: "SQL", url: "/launchingsoon" },
  { name: "PYTHON", url: "/launchingsoon" },
  { name: "JAVA", url: "/launchingsoon" },
  { name: "PHP", url: "/launchingsoon" },
  { name: "HOW TO", url: "/launchingsoon" },
  { name: "W3.CSS", url: "/launchingsoon" },
  { name: "C", url: "/launchingsoon" },
  { name: "C++", url: "/launchingsoon" },
  { name: "C#", url: "/launchingsoon" },
  { name: "BOOTSTRAP", url: "/launchingsoon" },
  { name: "REACT", url: "/launchingsoon" },
  { name: "MYSQL", url: "/launchingsoon" },
  { name: "JQUERY", url: "/launchingsoon" },
  { name: "EXCEL", url: "/launchingsoon" }
];

const App: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans mt-15">
      <nav className="bg-[#282A35] text-white shadow-md sticky top-0 w-full z-50">
        <div className="bg-[#212529] hidden sm:flex items-center border-t border-gray-700 relative">
          
          {/* LEFT button */}
          <button
            onClick={scrollLeft}
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            &lt;
          </button>

          {/* Scrollable menu */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto whitespace-nowrap scrollbar-hide py-2 flex-1"
          >
            {techNavLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 flex-shrink-0 ${
                  index === 0
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* RIGHT button */}
          <button
            onClick={scrollRight}
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            &gt;
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;
