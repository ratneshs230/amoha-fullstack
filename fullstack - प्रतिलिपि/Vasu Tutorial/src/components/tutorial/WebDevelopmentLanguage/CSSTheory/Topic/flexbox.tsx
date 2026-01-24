import React from "react";

const CSSFlexbox: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Flexbox</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Introduction to Flexbox</h2>
      <p className="mt-2">
        Flexbox (Flexible Box Layout) is a one-dimensional layout method designed for laying out items
        in rows or columns. It provides powerful alignment capabilities and distributes space among items
        in a container, even when their size is unknown or dynamic.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Flex Container</h2>
      <p className="mt-2">
        To create a flex container, set <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">display: flex</code> on the parent element.
        All direct children become flex items.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Creating a flex container */
.container {
  display: flex;
}

/* Inline flex container */
.inline-container {
  display: inline-flex;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Flex Direction</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">flex-direction</code> property defines the main axis direction.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Flex direction options */
.row {
  display: flex;
  flex-direction: row;         /* Left to right (default) */
}

.row-reverse {
  display: flex;
  flex-direction: row-reverse; /* Right to left */
}

.column {
  display: flex;
  flex-direction: column;      /* Top to bottom */
}

.column-reverse {
  display: flex;
  flex-direction: column-reverse; /* Bottom to top */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Flex Wrap</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">flex-wrap</code> property controls whether items wrap to new lines.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Flex wrap options */
.nowrap {
  display: flex;
  flex-wrap: nowrap;       /* All items on one line (default) */
}

.wrap {
  display: flex;
  flex-wrap: wrap;         /* Items wrap to next line */
}

.wrap-reverse {
  display: flex;
  flex-wrap: wrap-reverse; /* Items wrap in reverse */
}

/* Shorthand: flex-flow */
.container {
  display: flex;
  flex-flow: row wrap;     /* direction and wrap combined */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Justify Content (Main Axis)</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">justify-content</code> property aligns items along the main axis.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Justify content options */
.start {
  display: flex;
  justify-content: flex-start;    /* Items at start (default) */
}

.end {
  display: flex;
  justify-content: flex-end;      /* Items at end */
}

.center {
  display: flex;
  justify-content: center;        /* Items centered */
}

.space-between {
  display: flex;
  justify-content: space-between; /* First/last at edges, equal space between */
}

.space-around {
  display: flex;
  justify-content: space-around;  /* Equal space around each item */
}

.space-evenly {
  display: flex;
  justify-content: space-evenly;  /* Equal space between all */
}

/* Visual representation (row direction):
   flex-start:     |###  ###  ###          |
   flex-end:       |          ###  ###  ###|
   center:         |     ###  ###  ###     |
   space-between:  |###       ###       ###|
   space-around:   |  ###    ###    ###  |
   space-evenly:   |   ###   ###   ###   |
*/`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Align Items (Cross Axis)</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">align-items</code> property aligns items along the cross axis.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Align items options */
.stretch {
  display: flex;
  align-items: stretch;     /* Items stretch to fill (default) */
}

.start {
  display: flex;
  align-items: flex-start;  /* Items at cross-start */
}

.end {
  display: flex;
  align-items: flex-end;    /* Items at cross-end */
}

.center {
  display: flex;
  align-items: center;      /* Items centered on cross axis */
}

.baseline {
  display: flex;
  align-items: baseline;    /* Items aligned by text baseline */
}

/* Perfect centering */
.perfect-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Align Content (Multi-line)</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">align-content</code> property aligns flex lines when there's extra space on the cross axis.
        Only works with wrapped content (multiple lines).
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Align content options (for wrapped items) */
.container {
  display: flex;
  flex-wrap: wrap;
  height: 400px;

  /* Options similar to justify-content */
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: space-evenly;
  align-content: stretch;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Gap</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">gap</code> property adds spacing between flex items.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Gap between items */
.container {
  display: flex;
  gap: 20px;              /* Equal gap in both directions */
}

.container {
  display: flex;
  gap: 20px 10px;         /* Row gap | Column gap */
}

/* Individual gap properties */
.container {
  display: flex;
  row-gap: 20px;
  column-gap: 10px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Flex Item Properties</h2>
      <p className="mt-2">
        These properties are applied to flex items (children of flex container).
      </p>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Order</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Order controls visual order (not DOM order) */
.item-1 { order: 3; }  /* Appears third */
.item-2 { order: 1; }  /* Appears first */
.item-3 { order: 2; }  /* Appears second */

/* Default order is 0 */
/* Negative values allowed */
.first { order: -1; }  /* Moves to beginning */`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Flex Grow</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Flex grow - how much item grows relative to others */
.item {
  flex-grow: 0;    /* Don't grow (default) */
}

.grow {
  flex-grow: 1;    /* Grow to fill available space */
}

/* Proportional growing */
.item-1 { flex-grow: 1; }  /* Gets 1 part */
.item-2 { flex-grow: 2; }  /* Gets 2 parts */
.item-3 { flex-grow: 1; }  /* Gets 1 part */
/* Total: 4 parts, item-2 gets 50% of extra space */`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Flex Shrink</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Flex shrink - how much item shrinks when space is limited */
.item {
  flex-shrink: 1;   /* Can shrink (default) */
}

.no-shrink {
  flex-shrink: 0;   /* Won't shrink below basis */
}

/* Proportional shrinking */
.item-1 { flex-shrink: 1; }
.item-2 { flex-shrink: 2; }  /* Shrinks twice as much */`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Flex Basis</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Flex basis - initial size before growing/shrinking */
.item {
  flex-basis: auto;    /* Use content size (default) */
}

.fixed {
  flex-basis: 200px;   /* Start at 200px */
}

.percentage {
  flex-basis: 25%;     /* Start at 25% of container */
}

.zero {
  flex-basis: 0;       /* Ignore content size */
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Flex Shorthand</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* flex: grow shrink basis */
.item {
  flex: 0 1 auto;    /* Default */
}

/* Common patterns */
.equal-width {
  flex: 1;           /* Same as flex: 1 1 0 */
}

.no-flex {
  flex: none;        /* Same as flex: 0 0 auto */
}

.auto-flex {
  flex: auto;        /* Same as flex: 1 1 auto */
}

/* Fixed + flexible layout */
.sidebar {
  flex: 0 0 250px;   /* Fixed 250px, no grow/shrink */
}

.content {
  flex: 1;           /* Takes remaining space */
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Align Self</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Override align-items for individual items */
.container {
  display: flex;
  align-items: center;
}

.item {
  align-self: auto;        /* Use container's align-items */
  align-self: flex-start;  /* Align to start */
  align-self: flex-end;    /* Align to end */
  align-self: center;      /* Center on cross axis */
  align-self: stretch;     /* Stretch to fill */
  align-self: baseline;    /* Align to baseline */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Common Flexbox Patterns</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Navigation bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

/* Card layout */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px;  /* Grow, shrink, min 300px */
  max-width: 400px;
}

/* Holy grail layout */
.layout {
  display: flex;
  min-height: 100vh;
}

.sidebar-left {
  flex: 0 0 200px;
}

.main-content {
  flex: 1;
}

.sidebar-right {
  flex: 0 0 200px;
}

/* Sticky footer */
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;  /* Grows to push footer down */
}

/* Input with button */
.input-group {
  display: flex;
}

.input-group input {
  flex: 1;
}

.input-group button {
  flex: 0 0 auto;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">gap</code> instead of margins for spacing between items</li>
        <li>Prefer <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">flex: 1</code> shorthand over individual properties</li>
        <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">flex-wrap: wrap</code> for responsive layouts</li>
        <li>Combine with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">min-width</code> or <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">flex-basis</code> to control wrapping behavior</li>
        <li>Use CSS Grid for two-dimensional layouts instead of nested flexbox</li>
      </ul>
    </div>
  );
};

export default CSSFlexbox;
