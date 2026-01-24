import React from "react";

const CSSPadding: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Padding</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">What is Padding?</h2>
      <p className="mt-2">
        Padding creates space around an element's content, inside any defined borders. Unlike margins,
        padding is affected by the element's background color and does not collapse.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Individual Padding Properties</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Individual sides */
.element {
  padding-top: 20px;
  padding-right: 30px;
  padding-bottom: 20px;
  padding-left: 30px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Padding Shorthand</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* All four sides */
.all-sides {
  padding: 20px;
}

/* Vertical | Horizontal */
.two-values {
  padding: 20px 30px;
}

/* Top | Horizontal | Bottom */
.three-values {
  padding: 10px 20px 15px;
}

/* Top | Right | Bottom | Left (clockwise) */
.four-values {
  padding: 10px 20px 15px 25px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Padding and Box Sizing</h2>
      <p className="mt-2">
        By default, padding is added to the element's width and height. Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">box-sizing</code> to change this behavior.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Default: content-box */
.content-box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  /* Total width = 200 + 20 + 20 = 240px */
}

/* Recommended: border-box */
.border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  /* Total width = 200px (content shrinks) */
}

/* Global reset */
*, *::before, *::after {
  box-sizing: border-box;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Padding Values</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Length values */
.pixels {
  padding: 20px;
}

.em-units {
  padding: 1em;    /* Relative to font size */
}

.rem-units {
  padding: 1rem;   /* Relative to root font size */
}

/* Percentage (relative to parent's width) */
.percentage {
  padding: 5%;     /* 5% of parent's width */
}

/* Note: Vertical padding % is also based on WIDTH, not height */
.aspect-ratio-hack {
  padding-top: 56.25%;  /* 16:9 aspect ratio */
  height: 0;
}

/* padding: auto is NOT valid! */
/* Unlike margin, padding cannot be auto */`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Logical Padding Properties</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Physical properties */
.physical {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}

/* Logical properties (better for i18n) */
.logical {
  padding-block-start: 10px;   /* Top in LTR */
  padding-inline-end: 20px;    /* Right in LTR */
  padding-block-end: 10px;     /* Bottom in LTR */
  padding-inline-start: 20px;  /* Left in LTR */
}

/* Shorthand logical properties */
.logical-shorthand {
  padding-block: 10px;         /* Top and bottom */
  padding-inline: 20px;        /* Left and right */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Common Padding Patterns</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Button padding */
.btn {
  padding: 10px 20px;  /* More horizontal than vertical */
}

.btn-large {
  padding: 15px 30px;
}

.btn-small {
  padding: 5px 10px;
}

/* Card padding */
.card {
  padding: 20px;
}

.card-body {
  padding: 15px 20px;
}

/* Input padding */
.input {
  padding: 8px 12px;
}

/* Container padding */
.container {
  padding-left: 20px;
  padding-right: 20px;
}

/* Section padding */
section {
  padding: 60px 0;  /* Vertical space, no horizontal */
}

/* List item padding */
li {
  padding: 10px 15px;
}

/* Table cell padding */
td, th {
  padding: 12px 16px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Padding for Clickable Areas</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Increase clickable area with padding */
.nav-link {
  display: inline-block;
  padding: 15px 20px;
  /* Makes entire padded area clickable */
}

/* Icon button */
.icon-btn {
  padding: 12px;
  /* Minimum 44px touch target (recommended) */
}

/* Checkbox/Radio labels */
.checkbox-label {
  padding: 10px;
  cursor: pointer;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Padding with Background</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Padding shows background color */
.highlight {
  background-color: yellow;
  padding: 5px 10px;
  /* Yellow extends through padding area */
}

/* Padding with background-clip */
.clip-content {
  padding: 20px;
  background: blue;
  background-clip: content-box;
  /* Background only in content area, not padding */
}

/* Gradient with padding */
.gradient-box {
  padding: 20px;
  background: linear-gradient(to right, red, blue);
  /* Gradient extends through padding */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Padding vs Margin</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Use padding for: */
.card {
  padding: 20px;           /* Space inside */
  background: white;       /* Background covers padding */
  border: 1px solid #ddd;  /* Border around padding */
}

/* Use margin for: */
.card {
  margin-bottom: 20px;     /* Space between cards */
}

/* Combined example */
.card {
  padding: 20px;           /* Internal spacing */
  margin: 15px;            /* External spacing */
  background: white;
  border-radius: 8px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">box-sizing: border-box</code> for predictable sizing</li>
        <li>Use consistent padding values (spacing scale)</li>
        <li>Generally use more horizontal padding than vertical for buttons and links</li>
        <li>Ensure adequate padding for touch targets (minimum 44px)</li>
        <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">em</code> units for padding that should scale with text size</li>
        <li>Use logical properties for international layouts</li>
      </ul>
    </div>
  );
};

export default CSSPadding;
