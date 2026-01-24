import React, { useState } from 'react';
// Import Layout
import Layout from './Layout.tsx';
// Import sidebar data
import { sidebarItems } from './SidebarData.ts';

// Import topic components
import HTMLIntroduction from './Topic/intro.tsx';
import HTMLBasic from './Topic/basic.tsx';
import HTMLElements from './Topic/elements.tsx';
import HTMLAttributes from './Topic/attributes.tsx';
import HTMLHeadings from './Topic/headings.tsx';
import HTMLLinks from './Topic/links.tsx';
import HTMLImages from './Topic/images.tsx';
import HTMLTables from './Topic/tables.tsx';
import HTMLLists from './Topic/lists.tsx';
import HTMLForms from './Topic/forms.tsx';

// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  // Basic HTML Topics
  'html-home': HTMLIntroduction,
  'intro': HTMLIntroduction,
  'editors': HTMLBasic,
  'basic': HTMLBasic,
  'elements': HTMLElements,
  'attributes': HTMLAttributes,
  'headings': HTMLHeadings,
  'paragraphs': HTMLBasic,
  'styles': HTMLBasic,
  'formatting': HTMLBasic,
  'comments': HTMLBasic,
  'colors': HTMLBasic,
  'links': HTMLLinks,
  'images': HTMLImages,
  'tables': HTMLTables,
  'lists': HTMLLists,

  // HTML Forms
  'forms': HTMLForms,
  'form-elements': HTMLForms,
  'input-types': HTMLForms,
  'input-attributes': HTMLForms,

  // HTML5 Features
  'html5': HTMLElements,
  'semantic': HTMLElements,
  'html5-apis': HTMLElements,
  'media': HTMLElements,
};

interface MainApplicationProps {
  darkMode?: boolean;
}

const MainApplication: React.FC<MainApplicationProps> = ({ darkMode: _darkMode }) => {
  // Initialize 'selected' with the first sidebar item's component key
  const [selectedTopic, setSelectedTopic] = useState<string>(
    sidebarItems[0]?.component || 'html-home'
  );

  const handleSelectTopic = (componentKey: string) => {
    setSelectedTopic(componentKey);
  };

  // Dynamically get the selected Component
  const CurrentComponent = topicComponents[selectedTopic];

  return (
    <div className="MainApplication">
      <Layout selected={selectedTopic} onSelect={handleSelectTopic}>
        {CurrentComponent ? (
          <CurrentComponent />
        ) : (
          <div className="text-center p-10 text-xl text-red-500">
            Topic content not found for "{selectedTopic}".
          </div>
        )}
      </Layout>
    </div>
  );
};

export default MainApplication;
