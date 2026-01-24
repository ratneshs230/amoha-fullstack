import React, { useState } from 'react';
// Import Layout
import Layout from './Layout.tsx';
// Import sidebar data
import { sidebarItems } from './SidebarData.ts';

// Import topic components
import CSSHome from './Topic/cssHome.tsx';
import CSSIntroduction from './Topic/intro.tsx';
import CSSSyntax from './Topic/syntax.tsx';
import CSSSelectors from './Topic/selectors.tsx';
import CSSHowTo from './Topic/howto.tsx';
import CSSComments from './Topic/comments.tsx';
import CSSColors from './Topic/colors.tsx';
import CSSBackgrounds from './Topic/backgrounds.tsx';
import CSSBorders from './Topic/borders.tsx';
import CSSMargins from './Topic/margins.tsx';
import CSSPadding from './Topic/padding.tsx';
import CSSBoxModel from './Topic/boxModel.tsx';
import CSSText from './Topic/text.tsx';
import CSSFonts from './Topic/fonts.tsx';
import CSSLinks from './Topic/links.tsx';
import CSSDisplay from './Topic/display.tsx';
import CSSPosition from './Topic/position.tsx';
import CSSFlexbox from './Topic/flexbox.tsx';

// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  // CSS Basics
  'css-home': CSSHome,
  'intro': CSSIntroduction,
  'syntax': CSSSyntax,
  'selectors': CSSSelectors,
  'howto': CSSHowTo,
  'comments': CSSComments,
  'colors': CSSColors,
  'backgrounds': CSSBackgrounds,
  'borders': CSSBorders,
  'margins': CSSMargins,
  'padding': CSSPadding,
  'box-model': CSSBoxModel,
  'text': CSSText,
  'fonts': CSSFonts,
  'links': CSSLinks,
  'display': CSSDisplay,
  'position': CSSPosition,

  // CSS Layout (subtopics)
  'flexbox': CSSFlexbox,

  // Placeholders for topics not yet implemented
  // These will show "Topic content not found" until implemented
};

interface MainApplicationProps {
  darkMode?: boolean;
}

const MainApplication: React.FC<MainApplicationProps> = ({ darkMode: _darkMode }) => {
  // Initialize 'selected' with the first sidebar item's component key
  const [selectedTopic, setSelectedTopic] = useState<string>(
    sidebarItems[0]?.component || 'css-home'
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
