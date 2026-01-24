import React from "react";

const CSSPosition: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Position</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The Position Property</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">position</code> property specifies the type of positioning method
        used for an element. There are five different position values: static, relative, absolute,
        fixed, and sticky.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Position: Static</h2>
      <p className="mt-2">
        This is the default positioning. Elements are positioned according to the normal document flow.
        The top, right, bottom, left, and z-index properties have no effect.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Default positioning */
.static-element {
  position: static;
  /* top, right, bottom, left have no effect */
  /* z-index has no effect */
}

/* Elements flow normally in the document */
div {
  position: static;  /* This is the default */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Position: Relative</h2>
      <p className="mt-2">
        The element is positioned relative to its normal position. Using top, right, bottom, or left
        will offset the element from its normal position. Other elements are not affected.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Relative positioning */
.relative-element {
  position: relative;
  top: 20px;      /* Moves 20px down from normal position */
  left: 30px;     /* Moves 30px right from normal position */
}

/* Common use: Create positioning context for absolute children */
.parent {
  position: relative;  /* Creates positioning context */
}

.child {
  position: absolute;
  /* Now positioned relative to .parent, not the viewport */
}

/* Offset in different directions */
.up { position: relative; top: -10px; }
.down { position: relative; top: 10px; }
.left { position: relative; left: -10px; }
.right { position: relative; left: 10px; }

/* Z-index works with relative positioning */
.stacked {
  position: relative;
  z-index: 10;  /* Stacks above elements with lower z-index */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Position: Absolute</h2>
      <p className="mt-2">
        The element is removed from the normal document flow. It is positioned relative to its closest
        positioned ancestor (not static). If no positioned ancestor exists, it uses the document body.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Absolute positioning */
.absolute-element {
  position: absolute;
  top: 0;
  right: 0;
  /* Positioned at top-right of nearest positioned ancestor */
}

/* Pattern: Parent with relative, child with absolute */
.card {
  position: relative;
  padding: 20px;
}

.card-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  /* Positioned relative to .card */
}

/* Centering with absolute positioning */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Full-size overlay */
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* Or shorthand: inset: 0; */
  background: rgba(0, 0, 0, 0.5);
}

/* Positioning in corners */
.top-left { position: absolute; top: 0; left: 0; }
.top-right { position: absolute; top: 0; right: 0; }
.bottom-left { position: absolute; bottom: 0; left: 0; }
.bottom-right { position: absolute; bottom: 0; right: 0; }

/* Stretch to fill */
.fill {
  position: absolute;
  inset: 0;  /* Shorthand for top, right, bottom, left: 0 */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Position: Fixed</h2>
      <p className="mt-2">
        The element is removed from the document flow and positioned relative to the viewport. It stays
        in the same place even when the page is scrolled.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Fixed positioning */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  z-index: 1000;
  /* Stays at top when scrolling */
}

/* Fixed navigation bar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

/* Account for fixed header */
body {
  padding-top: 60px;  /* Height of fixed header */
}

/* Fixed sidebar */
.sidebar {
  position: fixed;
  top: 60px;       /* Below fixed header */
  left: 0;
  bottom: 0;
  width: 250px;
  overflow-y: auto;
}

/* Back to top button */
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
}

/* Cookie banner */
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: #333;
}

/* Modal overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Position: Sticky</h2>
      <p className="mt-2">
        The element is positioned based on the user's scroll position. It toggles between relative
        and fixed positioning depending on the scroll position.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Sticky positioning */
.sticky-header {
  position: sticky;
  top: 0;            /* Sticks when reaching top of viewport */
  background: white;
  z-index: 10;
}

/* Sticky navigation */
.nav {
  position: sticky;
  top: 0;
  /* Acts relative until scrolled to top, then fixed */
}

/* Sticky sidebar */
.sidebar {
  position: sticky;
  top: 80px;         /* Sticks 80px from top */
  height: fit-content;
}

/* Sticky table headers */
thead th {
  position: sticky;
  top: 0;
  background: white;
}

/* Sticky section headers */
.section-header {
  position: sticky;
  top: 60px;         /* Below fixed navbar */
  background: #f5f5f5;
  padding: 10px;
}

/* Note: Sticky requires a threshold (top, bottom, etc.)
   and won't work if any ancestor has overflow: hidden */

/* Sticky footer (sticks to bottom) */
.sticky-footer {
  position: sticky;
  bottom: 0;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Z-Index</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">z-index</code> property specifies the stack order of positioned elements.
        Higher values appear in front of lower values.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Z-index only works on positioned elements */
.box1 {
  position: relative;
  z-index: 1;
}

.box2 {
  position: relative;
  z-index: 2;  /* Appears above box1 */
}

/* Common z-index scale */
:root {
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
}

.dropdown {
  z-index: var(--z-dropdown);
}

.modal {
  z-index: var(--z-modal);
}

/* Stacking context */
.parent {
  position: relative;
  z-index: 1;
  /* Creates new stacking context */
}

.child {
  position: absolute;
  z-index: 999;
  /* Still behind elements outside parent with z-index > 1 */
}

/* Negative z-index */
.behind {
  position: relative;
  z-index: -1;  /* Behind non-positioned elements */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Inset Property</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">inset</code> property is a shorthand for top, right, bottom, and left.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Inset shorthand */
.overlay {
  position: absolute;
  inset: 0;  /* Same as top: 0; right: 0; bottom: 0; left: 0; */
}

/* With different values */
.element {
  position: absolute;
  inset: 10px;           /* All sides 10px */
  inset: 10px 20px;      /* Vertical | Horizontal */
  inset: 10px 20px 30px; /* Top | Horizontal | Bottom */
  inset: 10px 20px 30px 40px; /* Top | Right | Bottom | Left */
}

/* Individual inset properties */
.element {
  inset-block: 10px;     /* Top and bottom */
  inset-inline: 20px;    /* Left and right (in LTR) */
  inset-block-start: 10px;
  inset-block-end: 10px;
  inset-inline-start: 20px;
  inset-inline-end: 20px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Common Patterns</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Tooltip */
.tooltip-container {
  position: relative;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  background: #333;
  color: white;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

.tooltip-container:hover .tooltip {
  opacity: 1;
}

/* Dropdown menu */
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: none;
}

.dropdown:hover .dropdown-menu {
  display: block;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Position Values Summary</h2>
      <ul className="list-disc ml-6 mt-2">
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">static</code> - Default, normal flow, no positioning</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">relative</code> - Offset from normal position, creates context</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">absolute</code> - Removed from flow, relative to positioned ancestor</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">fixed</code> - Removed from flow, relative to viewport, stays on scroll</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">sticky</code> - Hybrid of relative and fixed based on scroll</li>
      </ul>
    </div>
  );
};

export default CSSPosition;
