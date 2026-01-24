import React from "react";

const CSSSyntax: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Syntax</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">CSS Rule Structure</h2>
      <p className="mt-2">
        A CSS rule consists of a selector and a declaration block. The selector points to the HTML element
        you want to style. The declaration block contains one or more declarations separated by semicolons.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`selector {
  property: value;
  property: value;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Understanding the Parts</h2>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Selector:</strong> The HTML element(s) you want to style (e.g., <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">h1</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">.class</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">#id</code>)</li>
        <li><strong>Declaration Block:</strong> Contains one or more declarations surrounded by curly braces</li>
        <li><strong>Property:</strong> The style attribute you want to change (e.g., <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">color</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">font-size</code>)</li>
        <li><strong>Value:</strong> The value assigned to the property (e.g., <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">red</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">16px</code>)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Example Explained</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`p {
  color: red;
  text-align: center;
}`}</code>
      </pre>

      <p className="mt-4">In this example:</p>
      <ul className="list-disc ml-6 mt-2">
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">p</code> is a selector (it selects all <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code> elements)</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">color</code> is a property, and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">red</code> is the property value</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">text-align</code> is a property, and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">center</code> is the property value</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Multiple Declarations</h2>
      <p className="mt-2">
        You can include multiple declarations within a single rule. Each declaration should end with a semicolon:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`h1 {
  color: navy;
  font-size: 24px;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Grouping Selectors</h2>
      <p className="mt-2">
        If you have multiple elements with the same style, you can group the selectors to minimize code:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Instead of writing: */
h1 {
  color: blue;
  text-align: center;
}
h2 {
  color: blue;
  text-align: center;
}
p {
  color: blue;
  text-align: center;
}

/* You can group selectors: */
h1, h2, p {
  color: blue;
  text-align: center;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">CSS Values</h2>
      <p className="mt-2">CSS values can be specified in various formats:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Keywords */
color: red;
display: block;
position: relative;

/* Numeric values with units */
width: 100px;
font-size: 1.5em;
margin: 10%;
line-height: 1.5;

/* Color values */
color: #ff0000;        /* Hexadecimal */
color: rgb(255, 0, 0); /* RGB */
color: rgba(255, 0, 0, 0.5); /* RGBA with transparency */
color: hsl(0, 100%, 50%);    /* HSL */

/* URL values */
background-image: url('image.jpg');

/* Multiple values */
margin: 10px 20px 15px 25px;
font-family: Arial, Helvetica, sans-serif;`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Always end declarations with a semicolon (even the last one)</li>
        <li>Use lowercase for property names and values</li>
        <li>Use consistent indentation (2 or 4 spaces)</li>
        <li>Put each declaration on its own line for readability</li>
        <li>Add a space after the colon in property-value pairs</li>
        <li>Use shorthand properties when possible to reduce code</li>
      </ul>
    </div>
  );
};

export default CSSSyntax;
