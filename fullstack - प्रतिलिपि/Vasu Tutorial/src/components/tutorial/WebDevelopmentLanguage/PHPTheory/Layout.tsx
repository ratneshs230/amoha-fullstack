import React from 'react';
// Import the sidebar component from the sibling file, now including the file extension
import MCSSidebar from "./PhpSidebar.tsx"; 

interface LayoutProps {
  children: React.ReactNode;
  selected: string;
  onSelect: (component: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, selected, onSelect }) => (
  <div className="min-h-screen bg-gray-100">
    <MCSSidebar selected={selected} onSelect={onSelect} />
    {/* ml-72 offsets the 72-unit width of the fixed sidebar */}
    <main className="ml-72 flex-1 p-8">
      {children}
    </main>
  </div>
);

export default Layout;