import  { useState } from 'react';

interface TopicSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  subtopics: string[];
  color: string;
}

const SdePreparationPage = () => {
  const [darkMode,] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const topicSections: TopicSection[] = [
    {
      id: 'sde-prep',
      title: '🚀 SDE Preparation',
      icon: '🚀',
      description: 'Comprehensive preparation for Software Development Engineer interviews including coding, system design, and behavioral rounds',
      color: 'from-purple-500 to-pink-500',
      subtopics: [
        'Data Structures & Algorithms',
        'System Design',
        'Object-Oriented Design',
        'Behavioral Interviews',
        'Coding Patterns',
        'Problem Solving Techniques',
        'Interview Preparation Strategy'
      ]
    },
    {
      id: 'cs-core',
      title: 'Computer Science Core Subjects',
      icon: '📚',
      description: 'Fundamental computer science concepts that form the backbone of software engineering',
      color: 'from-blue-500 to-cyan-500',
      subtopics: [
        'Data Structures',
        'Algorithms',
        'Operating Systems',
        'Computer Networks',
        'Database Management Systems',
        'Computer Organization',
        'Theory of Computation'
      ]
    },
    {
      id: 'systems-networking',
      title: 'Systems & Networking',
      icon: '🔧',
      description: 'Deep dive into system architecture, networking protocols, and distributed systems',
      color: 'from-green-500 to-emerald-500',
      subtopics: [
        'Operating System Concepts',
        'Process Management',
        'Memory Management',
        'Network Protocols',
        'Distributed Systems',
        'Cloud Computing',
        'System Design Patterns'
      ]
    },
    {
      id: 'data-databases',
      title: 'Data & Databases',
      icon: '💾',
      description: 'Database systems, data modeling, and data management technologies',
      color: 'from-orange-500 to-red-500',
      subtopics: [
        'SQL Databases',
        'NoSQL Databases',
        'Database Design',
        'Query Optimization',
        'Transaction Management',
        'Data Warehousing',
        'Big Data Technologies'
      ]
    },
    {
      id: 'data-science',
      title: 'Data Science',
      icon: '📊',
      description: 'Statistical analysis, machine learning, and data-driven decision making',
      color: 'from-indigo-500 to-purple-500',
      subtopics: [
        'Machine Learning',
        'Statistical Analysis',
        'Data Visualization',
        'Data Mining',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Modeling'
      ]
    },
    {
      id: 'programming-dev',
      title: 'Programming & Development',
      icon: '💻',
      description: 'Software development practices, methodologies, and best practices',
      color: 'from-yellow-500 to-orange-500',
      subtopics: [
        'Software Engineering Principles',
        'Design Patterns',
        'Testing Methodologies',
        'Debugging Techniques',
        'Version Control',
        'CI/CD Pipelines',
        'Agile Development'
      ]
    },
    {
      id: 'programming-languages',
      title: 'Programming Languages',
      icon: '⌨️',
      description: 'Comprehensive coverage of various programming languages and their ecosystems',
      color: 'from-teal-500 to-blue-500',
      subtopics: [
        'Language Fundamentals',
        'Memory Management',
        'Concurrency',
        'Functional Programming',
        'Object-Oriented Programming',
        'Language Paradigms',
        'Language Comparison'
      ]
    },
    {
      id: 'web-dev',
      title: '🌐 Web Development Languages',
      icon: '🌐',
      description: 'Technologies and frameworks for modern web development',
      color: 'from-blue-400 to-cyan-400',
      subtopics: [
        'HTML/CSS/JavaScript',
        'Frontend Frameworks',
        'Backend Development',
        'Web APIs',
        'Progressive Web Apps',
        'Web Security',
        'Performance Optimization'
      ]
    },
    {
      id: 'mobile-dev',
      title: '📱 Mobile Development Languages',
      icon: '📱',
      description: 'Mobile application development for iOS and Android platforms',
      color: 'from-green-400 to-teal-400',
      subtopics: [
        'iOS Development',
        'Android Development',
        'Cross-Platform Development',
        'Mobile UI/UX',
        'Mobile Security',
        'App Store Deployment',
        'Mobile Testing'
      ]
    },
    {
      id: 'systems-lowlevel',
      title: '⚙️ Systems & Low-Level Programming',
      icon: '⚙️',
      description: 'Low-level programming, system programming, and performance optimization',
      color: 'from-gray-600 to-gray-800',
      subtopics: [
        'C/C++ Programming',
        'Memory Management',
        'System Calls',
        'Kernel Programming',
        'Embedded Systems',
        'Performance Optimization',
        'Hardware Interaction'
      ]
    },
    {
      id: 'data-science-ai',
      title: '🔬 Data Science, AI & Research Languages',
      icon: '🔬',
      description: 'Languages and tools for scientific computing, AI research, and data analysis',
      color: 'from-purple-400 to-pink-400',
      subtopics: [
        'Python for Data Science',
        'R Programming',
        'Statistical Computing',
        'Machine Learning Libraries',
        'Research Methodologies',
        'Data Analysis Tools',
        'Scientific Computing'
      ]
    },
    {
      id: 'game-dev',
      title: '🎮 Game Development Languages',
      icon: '🎮',
      description: 'Game development engines, graphics programming, and game design',
      color: 'from-red-500 to-pink-500',
      subtopics: [
        'Game Engines',
        'Graphics Programming',
        'Physics Engines',
        'Game AI',
        'Multiplayer Networking',
        'Game Design Patterns',
        'Performance Optimization'
      ]
    },
    {
      id: 'scripting-automation',
      title: '🧩 Scripting & Automation Languages',
      icon: '🧩',
      description: 'Scripting languages for automation, DevOps, and system administration',
      color: 'from-yellow-400 to-orange-400',
      subtopics: [
        'Shell Scripting',
        'Python Scripting',
        'Automation Tools',
        'DevOps Scripting',
        'System Administration',
        'Task Automation',
        'Workflow Automation'
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const TopicCard = ({ section }: { section: TopicSection }) => (
    <div className={`rounded-xl border transition-all duration-300 hover:shadow-lg ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
        : 'bg-white border-gray-200 hover:border-gray-300'
    }`}>
      {/* Header */}
      <div 
        className={`p-6 rounded-t-xl bg-gradient-to-r ${section.color} text-white cursor-pointer`}
        onClick={() => toggleSection(section.id)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{section.icon}</span>
            <h3 className="text-xl font-bold">{section.title}</h3>
          </div>
          <svg 
            className={`w-5 h-5 transform transition-transform duration-200 ${
              expandedSection === section.id ? 'rotate-180' : ''
            }`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p className="mt-2 text-white/90 text-sm">{section.description}</p>
      </div>

      {/* Expandable Content */}
      {expandedSection === section.id && (
        <div className={`p-6 border-t ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <h4 className={`font-semibold mb-4 ${
            darkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Key Topics:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {section.subtopics.map((subtopic, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors duration-150 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color}`}></div>
                <span className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {subtopic}
                </span>
              </div>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3 mt-6">
            <button className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors duration-150 ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}>
              View Resources
            </button>
            <button className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors duration-150 ${
              darkMode
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}>
              Start Learning
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Topics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {topicSections.map((section) => (
            <TopicCard key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SdePreparationPage;