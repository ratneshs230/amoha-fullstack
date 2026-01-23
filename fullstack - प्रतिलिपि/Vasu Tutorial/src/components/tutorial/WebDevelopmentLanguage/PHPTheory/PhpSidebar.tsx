import React, { useState } from 'react';
import { sidebarItems } from "./SidebarData.ts";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SidebarProps {
  selected: string;
  onSelect: (component: string) => void;
}

const PhpSidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="w-72 h-screen bg-gray-900 text-gray-100 fixed top-0 left-0 overflow-y-auto z-10 shadow-2xl">
      <div className="p-5 border-b border-gray-700 bg-gray-800 sticky top-0">
        <h2 className="text-2xl font-bold text-blue-400">PHP Tutorial</h2>
        <p className="text-sm text-gray-400">Engineering Mathematics</p>
      </div>

      <ul className="p-3 space-y-1">
        {sidebarItems.map((item) => {
          const isOpen = openSections[item.title] || false;
          const hasSubtopics = item.subtopics && item.subtopics.length > 0;

          return (
            <li key={item.component}>
              {/* Main Item */}
              <button
                onClick={() => (hasSubtopics ? toggleSection(item.title) : onSelect(item.component))}
                className={`flex items-center justify-between w-full px-4 py-2 rounded-lg transition-all duration-200 ${
                  selected === item.component
                    ? "bg-blue-600 text-white shadow-md font-semibold"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <span>{item.title}</span>
                {hasSubtopics && (
                  <span>
                    {isOpen ? (
                      <ChevronDown size={18} className="text-gray-400" />
                    ) : (
                      <ChevronRight size={18} className="text-gray-400" />
                    )}
                  </span>
                )}
              </button>

              {/* Subtopics */}
              {hasSubtopics && isOpen && (
                <ul className="ml-6 mt-1 border-l border-gray-700 pl-3 space-y-1">
                  {item.subtopics?.map((sub) => (
                    <li key={sub.component}>
                      <button
                        onClick={() => onSelect(sub.component)}
                        className={`block w-full text-left px-3 py-1.5 rounded-md text-sm transition-all duration-150 ${
                          selected === sub.component
                            ? "bg-blue-500 text-white"
                            : "text-gray-400 hover:bg-gray-700 hover:text-white"
                        }`}
                      >
                        {sub.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PhpSidebar;
