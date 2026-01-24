import React from "react";

const CSSComments: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Comments</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">What are CSS Comments?</h2>
      <p className="mt-2">
        CSS comments are used to explain your code and are ignored by browsers. They help make your
        stylesheets more readable and maintainable, especially when working in teams or returning to
        code after some time.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Comment Syntax</h2>
      <p className="mt-2">
        CSS comments start with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">/*</code> and end with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">*/</code>.
        Comments can span single or multiple lines.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* This is a single-line comment */
p {
  color: blue;
}

/*
  This is a multi-line comment.
  It can span multiple lines.
  Useful for longer explanations.
*/
h1 {
  font-size: 24px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Inline Comments</h2>
      <p className="mt-2">
        You can add comments on the same line as CSS rules to explain specific properties:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`.button {
  background-color: #007bff; /* Primary blue color */
  padding: 10px 20px;        /* Vertical | Horizontal */
  border: none;              /* Remove default border */
  border-radius: 4px;        /* Rounded corners */
  cursor: pointer;           /* Show clickable cursor */
}

.card {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Subtle shadow */
  transition: transform 0.2s; /* Smooth hover effect */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Section Headers</h2>
      <p className="mt-2">
        Use comments to organize your CSS into logical sections:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* ==========================================================================
   Base Styles
   ========================================================================== */

html {
  font-size: 16px;
  line-height: 1.5;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* ==========================================================================
   Typography
   ========================================================================== */

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  font-weight: 600;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

/* ==========================================================================
   Layout
   ========================================================================== */

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ==========================================================================
   Components
   ========================================================================== */

/* --------------------------------------------------------------------------
   Buttons
   -------------------------------------------------------------------------- */

.btn {
  display: inline-block;
  padding: 10px 20px;
}

/* --------------------------------------------------------------------------
   Cards
   -------------------------------------------------------------------------- */

.card {
  background: white;
  border-radius: 8px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Documentation Comments</h2>
      <p className="mt-2">
        Add detailed documentation for complex components or utilities:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/**
 * Modal Component
 *
 * A centered overlay modal dialog.
 *
 * Usage:
 *   <div class="modal">
 *     <div class="modal-content">
 *       <h2>Title</h2>
 *       <p>Content</p>
 *     </div>
 *   </div>
 *
 * Modifiers:
 *   .modal--large   - Wider modal (800px)
 *   .modal--small   - Narrower modal (300px)
 *
 * JavaScript:
 *   Add .modal--active class to show the modal
 */
.modal {
  position: fixed;
  inset: 0;
  display: none;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}

.modal--active {
  display: flex;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">TODO and FIXME Comments</h2>
      <p className="mt-2">
        Use special keywords to mark areas that need attention:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* TODO: Add responsive breakpoints for mobile */
.sidebar {
  width: 250px;
}

/* FIXME: Button doesn't align properly in Safari */
.submit-btn {
  margin-top: 10px;
}

/* HACK: Temporary fix for z-index issue */
.dropdown {
  z-index: 9999;
}

/* NOTE: This relies on JavaScript to add .active class */
.menu.active {
  display: block;
}

/* DEPRECATED: Use .btn-primary instead */
.button-blue {
  background: blue;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Commenting Out Code</h2>
      <p className="mt-2">
        Comments can be used to temporarily disable CSS rules for testing or debugging:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Temporarily disabled for testing
.problematic-element {
  position: absolute;
  transform: rotate(45deg);
}
*/

/* Old approach - kept for reference
.header {
  float: left;
  width: 100%;
}
*/

/* New approach using flexbox */
.header {
  display: flex;
  justify-content: space-between;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Comments in HTML Style Tags</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<style>
  /* Comments work inside style tags too */
  body {
    background: #f5f5f5;
  }

  /* Navigation styles */
  nav {
    background: #333;
  }
</style>

<!-- HTML comments are different: they use this syntax -->
<!-- <style>
  This entire style block is commented out in HTML
</style> -->`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Note: No Single-Line Comment Syntax</h2>
      <p className="mt-2">
        Unlike JavaScript or other languages, CSS does not support <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">//</code> single-line comments.
        You must always use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">/* */</code> syntax.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* CORRECT: This is a valid CSS comment */
p {
  color: blue;
}

// WRONG: This will cause errors!
// CSS does not support double-slash comments

/* Use this instead for single-line comments */
p {
  color: blue; /* Even at end of line */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices for CSS Comments</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Comment the "why" not the "what" - explain reasoning, not obvious code</li>
        <li>Use consistent formatting for section headers</li>
        <li>Keep comments up-to-date when code changes</li>
        <li>Remove commented-out code before production (or add explanation)</li>
        <li>Use tools to strip comments in production builds</li>
        <li>Consider using CSS preprocessors (Sass/Less) for // single-line comments</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Comments in CSS Preprocessors</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`// SCSS/Sass supports single-line comments
// These won't appear in compiled CSS

/* Multi-line comments are preserved in output */

$primary-color: #007bff; // Variable definition

.button {
  background: $primary-color; // Using the variable
  padding: 10px;
}`}</code>
      </pre>
    </div>
  );
};

export default CSSComments;
