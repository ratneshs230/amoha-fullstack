import React from "react";

const CSSHome: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Tutorial</h1>

      <p className="mt-2 text-lg">
        Welcome to the CSS Tutorial! CSS (Cascading Style Sheets) is the language used to style
        and layout web pages. With CSS, you can control colors, fonts, spacing, positioning,
        animations, and much more.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">What You Will Learn</h2>
      <p className="mt-2">
        This tutorial covers CSS from the basics to advanced topics. By the end, you will be able to:
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li>Style HTML elements with colors, fonts, and spacing</li>
        <li>Create responsive layouts using Flexbox and Grid</li>
        <li>Position elements precisely on the page</li>
        <li>Add animations and transitions for interactivity</li>
        <li>Build modern, professional-looking websites</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Prerequisites</h2>
      <p className="mt-2">
        Before starting this CSS tutorial, you should have a basic understanding of:
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li>HTML fundamentals</li>
        <li>How web pages are structured</li>
        <li>Basic computer and file management skills</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Tutorial Contents</h2>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">CSS Basics</h3>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Introduction:</strong> What CSS is and why it matters</li>
        <li><strong>Syntax:</strong> How CSS rules are structured</li>
        <li><strong>Selectors:</strong> Targeting HTML elements</li>
        <li><strong>Colors:</strong> Working with color values</li>
        <li><strong>Backgrounds:</strong> Background colors, images, and patterns</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Box Model</h3>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Borders:</strong> Border styles, widths, and colors</li>
        <li><strong>Margins:</strong> Space outside elements</li>
        <li><strong>Padding:</strong> Space inside elements</li>
        <li><strong>Box Model:</strong> Understanding the complete box model</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Typography</h3>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Text:</strong> Text formatting and alignment</li>
        <li><strong>Fonts:</strong> Font families, sizes, and web fonts</li>
        <li><strong>Links:</strong> Styling hyperlinks and states</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Layout</h3>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Display:</strong> Block, inline, and other display types</li>
        <li><strong>Position:</strong> Static, relative, absolute, fixed, sticky</li>
        <li><strong>Flexbox:</strong> One-dimensional flexible layouts</li>
        <li><strong>Grid:</strong> Two-dimensional grid layouts</li>
        <li><strong>Float:</strong> Traditional floating layouts</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Advanced CSS</h3>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Transitions:</strong> Smooth property changes</li>
        <li><strong>Animations:</strong> Keyframe-based animations</li>
        <li><strong>Media Queries:</strong> Responsive design techniques</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Example: Your First CSS</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 20px;
    }

    h1 {
      color: #333;
      text-align: center;
    }

    p {
      color: #666;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <h1>Hello, CSS!</h1>
  <p>This is my first styled webpage.</p>
</body>
</html>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Ready to Start?</h2>
      <p className="mt-2">
        Use the sidebar to navigate through the topics. Start with "CSS Introduction" to learn
        the fundamentals, then progress through each section to build your CSS skills!
      </p>
    </div>
  );
};

export default CSSHome;
