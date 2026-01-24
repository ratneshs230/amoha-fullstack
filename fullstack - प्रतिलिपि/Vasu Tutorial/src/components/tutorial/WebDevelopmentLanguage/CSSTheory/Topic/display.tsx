import React from "react";

const CSSDisplay: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Display</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The Display Property</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">display</code> property is one of the most important CSS properties
        for controlling layout. It specifies how an element is displayed and how it interacts with
        other elements.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Display: Block</h2>
      <p className="mt-2">
        Block-level elements start on a new line and take up the full width available.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Block elements */
div {
  display: block;
}

/* Common block elements by default:
   <div>, <p>, <h1>-<h6>, <ul>, <ol>, <li>,
   <header>, <footer>, <section>, <article>, <nav> */

/* Block element characteristics */
.block-element {
  display: block;
  width: 100%;          /* Takes full width by default */
  margin: 10px auto;    /* Can be centered with auto margins */
  padding: 20px;        /* Padding works on all sides */
}

/* Making inline element block */
span.block {
  display: block;       /* Now behaves like a div */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Display: Inline</h2>
      <p className="mt-2">
        Inline elements do not start on a new line and only take up as much width as necessary.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Inline elements */
span {
  display: inline;
}

/* Common inline elements by default:
   <span>, <a>, <strong>, <em>, <img>, <button>,
   <input>, <label>, <select>, <textarea> */

/* Inline element characteristics */
.inline-element {
  display: inline;
  /* width and height have NO effect */
  /* vertical margin/padding may not work as expected */
  padding: 0 10px;      /* Horizontal padding works */
  margin: 0 5px;        /* Horizontal margin works */
}

/* Making block element inline */
div.inline {
  display: inline;      /* Now flows with text */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Display: Inline-Block</h2>
      <p className="mt-2">
        Inline-block combines features of both inline and block elements. Elements flow inline but
        accept width, height, and vertical margin/padding.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Inline-block elements */
.inline-block {
  display: inline-block;
  width: 200px;         /* Width works */
  height: 100px;        /* Height works */
  margin: 10px;         /* All margins work */
  padding: 20px;        /* All padding works */
  vertical-align: top;  /* Alignment works */
}

/* Common use case: horizontal navigation */
nav ul li {
  display: inline-block;
  margin-right: 20px;
}

/* Grid of items */
.card {
  display: inline-block;
  width: 30%;
  margin: 1%;
  vertical-align: top;
}

/* Image with text alignment */
img {
  display: inline-block;
  vertical-align: middle;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Display: None</h2>
      <p className="mt-2">
        Completely removes the element from the document flow. The element is not rendered and
        takes up no space.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Hide element completely */
.hidden {
  display: none;
}

/* Show/hide with JavaScript */
.menu {
  display: none;
}

.menu.active {
  display: block;
}

/* Responsive hiding */
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}

/* Compare with visibility: hidden */
.invisible {
  visibility: hidden;  /* Hidden but takes space */
}

.removed {
  display: none;       /* Hidden and no space */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Display: Flex</h2>
      <p className="mt-2">
        Flexbox is a one-dimensional layout method for arranging items in rows or columns.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Flex container */
.flex-container {
  display: flex;
}

/* Inline flex container */
.inline-flex {
  display: inline-flex;
}

/* Basic flex layout */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Centering with flexbox */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Flex direction */
.row { flex-direction: row; }           /* Default */
.row-reverse { flex-direction: row-reverse; }
.column { flex-direction: column; }
.column-reverse { flex-direction: column-reverse; }

/* Flex wrap */
.wrap { flex-wrap: wrap; }
.nowrap { flex-wrap: nowrap; }          /* Default */

/* Shorthand */
.flex-row-wrap {
  display: flex;
  flex-flow: row wrap;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Display: Grid</h2>
      <p className="mt-2">
        CSS Grid is a two-dimensional layout system for complex layouts.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Grid container */
.grid-container {
  display: grid;
}

/* Inline grid container */
.inline-grid {
  display: inline-grid;
}

/* Basic grid layout */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}

/* Two-column layout */
.two-col {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
}

/* Card grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Display: Table</h2>
      <p className="mt-2">
        Table display values make elements behave like HTML table elements.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Table display values */
.table {
  display: table;
}

.table-row {
  display: table-row;
}

.table-cell {
  display: table-cell;
  vertical-align: middle;
  padding: 10px;
}

/* Vertical centering with table-cell */
.parent {
  display: table;
  width: 100%;
  height: 300px;
}

.child {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

/* Equal height columns */
.row {
  display: table;
  width: 100%;
}

.column {
  display: table-cell;
  width: 33.33%;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Display: Contents</h2>
      <p className="mt-2">
        Makes the element's children appear as direct children of the element's parent.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Display contents */
.wrapper {
  display: contents;
  /* The wrapper itself doesn't generate a box
     but its children do */
}

/* Use case: Semantic wrapper in grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.semantic-group {
  display: contents;
  /* Children become direct grid items */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Display: Flow-Root</h2>
      <p className="mt-2">
        Creates a new block formatting context, useful for containing floats.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Flow-root for clearing floats */
.container {
  display: flow-root;
  /* Contains floated children without clearfix */
}

/* Before flow-root (clearfix hack) */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* After flow-root (cleaner) */
.container {
  display: flow-root;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Common Use Cases</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Horizontal menu */
.menu ul {
  display: flex;
  list-style: none;
  gap: 20px;
}

/* Card layout */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

/* Modal overlay */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal.open {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Responsive sidebar */
.sidebar {
  display: block;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
  .sidebar.mobile-open {
    display: block;
  }
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Display Values Summary</h2>
      <ul className="list-disc ml-6 mt-2">
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">block</code> - Full width, new line</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">inline</code> - Flows with text, no width/height</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">inline-block</code> - Inline flow, accepts width/height</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">none</code> - Completely hidden</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">flex</code> - One-dimensional flexible layout</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">grid</code> - Two-dimensional grid layout</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">table</code> - Table-like behavior</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">contents</code> - Box disappears, children remain</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">flow-root</code> - New block formatting context</li>
      </ul>
    </div>
  );
};

export default CSSDisplay;
