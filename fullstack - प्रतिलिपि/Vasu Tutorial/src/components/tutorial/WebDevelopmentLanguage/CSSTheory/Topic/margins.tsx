import React from "react";

const CSSMargins: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Margins</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">What is Margin?</h2>
      <p className="mt-2">
        Margins create space around elements, outside of any defined borders. They are completely
        transparent and push other elements away from the element.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Individual Margin Properties</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Individual sides */
.element {
  margin-top: 20px;
  margin-right: 30px;
  margin-bottom: 20px;
  margin-left: 30px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Margin Shorthand</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* All four sides */
.all-sides {
  margin: 20px;
}

/* Vertical | Horizontal */
.two-values {
  margin: 20px 30px;
}

/* Top | Horizontal | Bottom */
.three-values {
  margin: 10px 20px 15px;
}

/* Top | Right | Bottom | Left (clockwise) */
.four-values {
  margin: 10px 20px 15px 25px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Auto Margin</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">auto</code> value is used to center block elements horizontally.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Center a block element */
.centered {
  width: 500px;
  margin: 0 auto;
}

/* Push element to the right */
.push-right {
  margin-left: auto;
}

/* Push element to the left */
.push-left {
  margin-right: auto;
}

/* Center with flexbox alternative */
.flex-center {
  display: flex;
  justify-content: center;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Margin Collapse</h2>
      <p className="mt-2">
        Vertical margins of adjacent block elements collapse into a single margin equal to the
        larger of the two margins. This is an important concept to understand.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Margin collapse example */
.box1 {
  margin-bottom: 30px;
}

.box2 {
  margin-top: 20px;
}

/* Space between them is 30px, NOT 50px */
/* The larger margin "wins" */

/* Margin collapse also happens with parent-child */
.parent {
  margin-top: 0;
}

.first-child {
  margin-top: 30px;
  /* This margin may "escape" to the parent */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Preventing Margin Collapse</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Ways to prevent margin collapse */

/* 1. Add padding */
.parent {
  padding-top: 1px;
}

/* 2. Add border */
.parent {
  border-top: 1px solid transparent;
}

/* 3. Use overflow */
.parent {
  overflow: hidden;
  /* or overflow: auto */
}

/* 4. Use display: flow-root */
.parent {
  display: flow-root;
}

/* 5. Use flexbox or grid */
.parent {
  display: flex;
  flex-direction: column;
}

/* Margins don't collapse in these contexts:
   - Flex items
   - Grid items
   - Floated elements
   - Absolutely positioned elements
   - Elements with overflow (except visible)
*/`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Negative Margins</h2>
      <p className="mt-2">
        Margins can have negative values, which pulls elements closer together or overlaps them.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Pull element up */
.overlap-up {
  margin-top: -20px;
}

/* Pull element left */
.overlap-left {
  margin-left: -20px;
}

/* Expand beyond parent */
.full-bleed {
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  padding-right: 20px;
}

/* Overlap cards */
.card-stack .card {
  margin-top: -50px;
}

.card-stack .card:first-child {
  margin-top: 0;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Logical Margin Properties</h2>
      <p className="mt-2">
        Modern CSS provides logical properties for better internationalization support.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Physical properties (traditional) */
.physical {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}

/* Logical properties (recommended for i18n) */
.logical {
  margin-block-start: 10px;   /* Top in LTR */
  margin-inline-end: 20px;    /* Right in LTR */
  margin-block-end: 10px;     /* Bottom in LTR */
  margin-inline-start: 20px;  /* Left in LTR */
}

/* Shorthand logical properties */
.logical-shorthand {
  margin-block: 10px;         /* Top and bottom */
  margin-inline: 20px;        /* Left and right */
}

/* In RTL layout, inline-start becomes right
   and inline-end becomes left */`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Common Margin Patterns</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Reset margins */
* {
  margin: 0;
}

/* Typography spacing */
h1, h2, h3 {
  margin-top: 0;
  margin-bottom: 0.5em;
}

p {
  margin-top: 0;
  margin-bottom: 1em;
}

/* Card spacing */
.card {
  margin-bottom: 20px;
}

.card:last-child {
  margin-bottom: 0;
}

/* Or use gap with flex/grid */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;  /* No need for margins */
}

/* Section spacing */
section {
  margin-bottom: 60px;
}

/* List item spacing */
li + li {
  margin-top: 10px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Margin vs Padding</h2>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Margin:</strong> Space outside the element, transparent, collapses</li>
        <li><strong>Padding:</strong> Space inside the element, shows background color, no collapse</li>
        <li>Use margin for spacing between elements</li>
        <li>Use padding for spacing inside elements</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Use consistent margin values (consider a spacing scale)</li>
        <li>Prefer <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">margin-bottom</code> over <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">margin-top</code> for flow</li>
        <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">gap</code> instead of margins in flex/grid containers</li>
        <li>Be aware of margin collapse behavior</li>
        <li>Use logical properties for internationalization</li>
      </ul>
    </div>
  );
};

export default CSSMargins;
