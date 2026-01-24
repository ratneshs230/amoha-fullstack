import React from "react";

const CSSLinks: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Links</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Styling Links</h2>
      <p className="mt-2">
        Links can be styled differently depending on their state. CSS provides pseudo-classes to
        target each state of a link, allowing for interactive and accessible designs.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Link States</h2>
      <p className="mt-2">
        There are four link states that can be styled using pseudo-classes. The order in which
        you define them matters (LVHA order):
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* LVHA Order: Link, Visited, Hover, Active */

/* Unvisited link */
a:link {
  color: blue;
}

/* Visited link */
a:visited {
  color: purple;
}

/* Mouse over link */
a:hover {
  color: red;
}

/* Selected/clicked link */
a:active {
  color: orange;
}

/* Remember: "LoVe HAte" to remember the order! */`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Focus State</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">:focus</code> state is important for keyboard navigation and accessibility.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Focus state for keyboard navigation */
a:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Focus-visible (only shows for keyboard users) */
a:focus-visible {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Hide focus for mouse users but keep for keyboard */
a:focus:not(:focus-visible) {
  outline: none;
}

/* IMPORTANT: Never remove focus styles without providing an alternative */
/* BAD: a:focus { outline: none; } */

/* GOOD: Provide alternative focus indication */
a:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Basic Link Styling</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Simple link styling */
a {
  color: #007bff;
  text-decoration: underline;
}

a:hover {
  color: #0056b3;
  text-decoration: none;
}

/* Remove underline by default, show on hover */
a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Custom underline style */
a {
  color: #007bff;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}

a:hover {
  border-bottom-color: transparent;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Animated Link Underlines</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Animated underline using pseudo-element */
.animated-link {
  position: relative;
  color: #007bff;
  text-decoration: none;
}

.animated-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.animated-link:hover::after {
  width: 100%;
}

/* Underline from center */
.center-underline {
  position: relative;
  text-decoration: none;
}

.center-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: all 0.3s ease;
}

.center-underline:hover::after {
  left: 0;
  width: 100%;
}

/* Background highlight effect */
.highlight-link {
  color: #333;
  text-decoration: none;
  background: linear-gradient(to bottom, transparent 60%, yellow 60%);
  transition: background 0.3s ease;
}

.highlight-link:hover {
  background: linear-gradient(to bottom, transparent 0%, yellow 0%);
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Button-Style Links</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Link styled as button */
.btn-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.btn-link:hover {
  background-color: #0056b3;
  color: white;
}

.btn-link:active {
  background-color: #004494;
}

/* Outline button link */
.btn-outline-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  color: #007bff;
  text-decoration: none;
  border: 2px solid #007bff;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.btn-outline-link:hover {
  background-color: #007bff;
  color: white;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Navigation Links</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Horizontal navigation */
.nav {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 10px;
}

.nav a {
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav a:hover {
  background-color: #f0f0f0;
}

.nav a.active {
  background-color: #007bff;
  color: white;
}

/* Vertical sidebar navigation */
.sidebar-nav a {
  display: block;
  padding: 12px 20px;
  color: #666;
  text-decoration: none;
  border-left: 3px solid transparent;
  transition: all 0.2s;
}

.sidebar-nav a:hover {
  color: #333;
  background-color: #f5f5f5;
  border-left-color: #ddd;
}

.sidebar-nav a.active {
  color: #007bff;
  background-color: #e8f4fd;
  border-left-color: #007bff;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">External and Special Links</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* External link indicator */
a[href^="http"]:not([href*="yoursite.com"])::after {
  content: " \\2197";  /* Arrow icon */
  font-size: 0.8em;
}

/* Or with an icon */
a[target="_blank"]::after {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 4px;
  background-image: url('external-link.svg');
  background-size: contain;
}

/* PDF link */
a[href$=".pdf"]::after {
  content: " (PDF)";
  font-size: 0.8em;
  color: #666;
}

/* Email link */
a[href^="mailto:"]::before {
  content: "\\2709 ";  /* Envelope icon */
}

/* Phone link */
a[href^="tel:"]::before {
  content: "\\260E ";  /* Phone icon */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Accessibility Considerations</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Sufficient color contrast */
a {
  color: #0066cc;  /* At least 4.5:1 contrast ratio */
}

/* Don't rely on color alone */
a {
  color: #0066cc;
  text-decoration: underline;  /* Additional visual indicator */
}

/* Clear focus states */
a:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Skip link for keyboard users */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px;
  background: #000;
  color: #fff;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

/* Touch-friendly tap targets (minimum 44x44px) */
.mobile-link {
  display: inline-block;
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Follow LVHA order when defining link states</li>
        <li>Always provide visible focus states for keyboard users</li>
        <li>Ensure sufficient color contrast for accessibility</li>
        <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">cursor: pointer</code> only on interactive elements</li>
        <li>Don't remove the underline without providing another visual cue</li>
        <li>Make touch targets at least 44x44 pixels for mobile</li>
        <li>Consider indicating external links and file types</li>
      </ul>
    </div>
  );
};

export default CSSLinks;
