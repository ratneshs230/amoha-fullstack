import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

// Interface for the component's props
interface TutorialPageComponentProps {
  darkMode: boolean;
}

interface NavLink {
  name: string;
  url: string;
}

// --- Data for the Tech Links Bar ---
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
];

// Card interface
interface PracticeCard {
  title: string;
  description: string;
  problems: number;
  problemsText: string;
  level: "Beginner to Advanced";
  completed: boolean;
  icon: string;
  color: string;
  url: string;
}

const TutorialPageComponent: React.FC<TutorialPageComponentProps> = ({
  darkMode,
}) => {
  const [completedCourses] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const categoryCards: PracticeCard[] = [
    {
      title: "SDE Preparation",
      description:
        "Comprehensive preparation for Software Development Engineer interviews including coding, system design, and behavioral rounds",
      problems: 324,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "sde",
      color: "from-rose-400 to-rose-800",
      url: "/tutorial/sde-preparation",
    },
    {
      title: "Computer Science Core Subjects",
      description:
        "Fundamental computer science concepts that form the backbone of software engineering",
      problems: 287,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "cs",
      color: "from-emerald-300 to-emerald-950",
      url: "/tutorial/ComputerScienceCoreSubjects",
    },
    {
      title: "Programming Languages",
      description:
        "Comprehensive coverage of various programming languages and their ecosystems",
      problems: 412,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "languages",
      color: "from-sky-300 to-blue-900",
      url: "/tutorial/Programminglanguage",
    },
    {
      title: "Web Development Languages",
      description: "Technologies and frameworks for modern web development",
      problems: 389,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "web",
      color: "from-indigo-400 to-indigo-950",
      url: "/tutorial/WebDevLanguage",
    },
    {
      title: "Mobile Development Languages",
      description:
        "Mobile application development for iOS and Android platforms",
      problems: 167,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "mobile",
      color: "from-emerald-700 to-emerald-200",
      url: "/tutorial/MobileDevLanguage",
    },
    {
      title: "Systems & Low-Level Programming",
      description:
        "Low-level programming, system programming, and performance optimization",
      problems: 134,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "lowlevel",
      color: "from-indigo-400 to-indigo-900",
      url: "/tutorial/SystemProgramingPage",
    },
    {
      title: "Data Science, AI & Research Languages",
      description:
        "Languages and tools for scientific computing, AI research, and data analysis",
      problems: 178,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "ai",
      color: "from-cyan-700 to-cyan-400",
      url: "/tutorial/DatabaseLanguagePage",
    },
    {
      title: "Game Development Languages",
      description:
        "Game development engines, graphics programming, and game design",
      problems: 123,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "game",
      color: "from-slate-400 to-slate-700",
      url: "/tutorial/GameDevelopmentpage",
    },
    {
      title: "Scripting & Automation Languages",
      description:
        "Scripting languages for automation, DevOps, and system administration",
      problems: 156,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "scripting",
      color: "from-amber-700 to-amber-300",
      url: "/tutorial/ScriptingLanguagePage",
    },
    {
      title: "Trending Technologies",
      description:
        "Latest tools, frameworks, and technologies transforming development",
      problems: 156,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "trending",
      color: "from-teal-800 to-teal-400",
      url: "/tutorial/TrendingTechnologies",
    },
  ];

  const getIcon = (iconName: string) => {
    const base = "w-8 h-8 rounded-lg flex items-center justify-center";

    const darkBg =
      {
        sde: "bg-blue-600",
        cs: "bg-green-600",
        languages: "bg-red-600",
        web: "bg-cyan-600",
        mobile: "bg-pink-600",
        lowlevel: "bg-gray-600",
        ai: "bg-yellow-600",
        game: "bg-green-600",
        scripting: "bg-blue-600",
      }[iconName] || "bg-gray-700";

    const lightBg = darkBg.replace("600", "100");

    return (
      <div className={`${base} ${darkMode ? darkBg : lightBg}`}>
        <span className="text-sm">💻</span>
      </div>
    );
  };

  const PracticeCard = ({ card }: { card: PracticeCard }) => {
    const isCompleted = completedCourses.has(card.title);

    return (
      <div
        className={`p-6 rounded-lg border transition-all duration-200 hover:shadow-lg cursor-pointer bg-gradient-to-br ${card.color} h-80 flex flex-col justify-between ${
          darkMode
            ? "bg-gray-800 border-gray-700 hover:border-gray-600"
            : "bg-white border-gray-200 hover:border-gray-300"
        } ${isCompleted ? "ring-2 ring-green-500" : ""}`}
      >
        <div>
          <div className="flex items-center space-x-3 mb-3">
            {getIcon(card.icon)}
            <h3
              className={`text-lg font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {card.title}
            </h3>
          </div>

          <p
            className={`text-sm mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-200"
            }`}
          >
            {card.description}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-center">
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 ${
                darkMode ? "opacity-90" : ""
              }`}
            >
              {card.level} level
            </div>
          </div>

          <Link
            to={card.url}
            className="block w-full text-center py-2 rounded-md text-sm font-medium transition-colors duration-150 bg-[#6334B9] hover:bg-[#5529a3] text-white"
          >
            {isCompleted ? "Continue Learning" : "Start Learning"}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-25">

        {/* ✅ NEW W3SCHOOL NAVBAR WITH SCROLL BUTTONS */}
        <div className="bg-gray-700 font-sans -mt-10 -ml-115 -mr-115">
          <nav className="bg-[#282A35] text-white shadow-md sticky top-0 w-full z-50">
            <div className="bg-[#212529] hidden sm:flex items-center border-t border-gray-700 relative">

              {/* LEFT Scroll Button */}
              <button
                onClick={scrollLeft}
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                &lt;
              </button>

              {/* Horizontal Scroll Menu */}
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

              {/* RIGHT Scroll Button */}
              <button
                onClick={scrollRight}
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                &gt;
              </button>
            </div>
          </nav>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-8 mt-10">
          <div>
            <h1 className="text-3xl font-bold">🚀 All Categories</h1>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Explore all programming and development categories to enhance your
              skills
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryCards.map((card, i) => (
            <PracticeCard key={i} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialPageComponent;
