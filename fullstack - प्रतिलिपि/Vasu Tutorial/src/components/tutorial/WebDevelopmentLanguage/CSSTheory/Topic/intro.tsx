import React from "react";

const CSSIntroduction: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Introduction</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">What is CSS?</h2>
      <p className="mt-2">
        CSS stands for <strong>Cascading Style Sheets</strong>. It is a stylesheet language used to describe
        the presentation of a document written in HTML or XML. CSS describes how elements should be rendered
        on screen, on paper, in speech, or on other media.
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li>CSS stands for Cascading Style Sheets</li>
        <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
        <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
        <li>External stylesheets are stored in CSS files</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Why Use CSS?</h2>
      <p className="mt-2">
        CSS is used to define styles for your web pages, including the design, layout, and variations in
        display for different devices and screen sizes.
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li><strong>Separation of Concerns:</strong> CSS separates content (HTML) from presentation (styling)</li>
        <li><strong>Consistency:</strong> Apply the same styles across multiple pages</li>
        <li><strong>Maintainability:</strong> Change the look of an entire website by editing one file</li>
        <li><strong>Accessibility:</strong> Different stylesheets can be applied for different devices</li>
        <li><strong>Page Load Speed:</strong> CSS files are cached by browsers, reducing load times</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">CSS Solved a Big Problem</h2>
      <p className="mt-2">
        HTML was NEVER intended to contain tags for formatting a web page! HTML was created to describe the
        content of a web page, like:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<h1>This is a heading</h1>
<p>This is a paragraph.</p>`}</code>
      </pre>

      <p className="mt-4">
        When tags like <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;font&gt;</code> and color attributes were added to
        HTML 3.2, it started a nightmare for web developers. Development of large websites became a long,
        expensive, and painful process. To solve this problem, the World Wide Web Consortium (W3C) created CSS.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">CSS Saves a Lot of Work!</h2>
      <p className="mt-2">
        The style definitions are normally saved in external <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">.css</code> files.
        With an external stylesheet file, you can change the look of an entire website by changing just one file!
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">A Simple Example</h2>
      <p className="mt-2">Here is a simple CSS example that styles all paragraph elements:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* This is a CSS comment */
p {
  color: blue;
  font-size: 16px;
  line-height: 1.5;
}

h1 {
  color: navy;
  margin-bottom: 20px;
  text-align: center;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">CSS Versions</h2>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>CSS1:</strong> Released in 1996 - Basic styling capabilities</li>
        <li><strong>CSS2:</strong> Released in 1998 - Added positioning, z-index, media types</li>
        <li><strong>CSS2.1:</strong> Released in 2011 - Fixed errors and aligned with browser implementations</li>
        <li><strong>CSS3:</strong> Released in modules starting 2011 - Added animations, flexbox, grid, and much more</li>
      </ul>

      <p className="mt-4">
        CSS3 is the latest evolution of CSS and is divided into modules. Each module adds new capabilities or
        extends features defined in CSS2. Some important CSS3 modules include Selectors, Box Model, Backgrounds
        and Borders, Text Effects, 2D/3D Transformations, Animations, Flexbox, and Grid Layout.
      </p>
    </div>
  );
};

export default CSSIntroduction;
