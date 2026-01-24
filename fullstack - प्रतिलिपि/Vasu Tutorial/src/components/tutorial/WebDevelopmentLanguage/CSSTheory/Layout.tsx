import React from 'react';
import CSSSidebar from "./CSSSidebar.tsx";

interface LayoutProps {
  children: React.ReactNode;
  selected: string;
  onSelect: (component: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, selected, onSelect }) => (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
    <CSSSidebar selected={selected} onSelect={onSelect} />
    <main className="ml-72 flex-1 p-8">
      {children}
    </main>
  </div>
);

export default Layout;
