import React from "react";

const CSSSelectors: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Selectors</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">What are CSS Selectors?</h2>
      <p className="mt-2">
        CSS selectors are used to "find" (or select) the HTML elements you want to style. Selectors are
        patterns used to select elements based on their name, id, class, attributes, and more.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">1. Element Selector</h2>
      <p className="mt-2">
        The element selector selects HTML elements based on the element name.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Selects all <p> elements */
p {
  color: blue;
  font-size: 16px;
}

/* Selects all <h1> elements */
h1 {
  color: navy;
  text-align: center;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">2. ID Selector</h2>
      <p className="mt-2">
        The ID selector uses the id attribute of an HTML element. It is written with a hash (#) character,
        followed by the id of the element. An id is unique within a page.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* HTML: <p id="intro">Welcome</p> */
#intro {
  font-weight: bold;
  color: green;
  font-size: 18px;
}

/* HTML: <div id="header">Header Content</div> */
#header {
  background-color: #333;
  padding: 20px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">3. Class Selector</h2>
      <p className="mt-2">
        The class selector selects elements with a specific class attribute. It is written with a period (.)
        character, followed by the class name. Unlike ID, classes can be used multiple times on a page.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Selects all elements with class="highlight" */
.highlight {
  background-color: yellow;
  padding: 5px;
}

/* Selects only <p> elements with class="intro" */
p.intro {
  font-size: 20px;
  color: blue;
}

/* Multiple classes on one element */
/* HTML: <p class="bold italic">Text</p> */
.bold {
  font-weight: bold;
}
.italic {
  font-style: italic;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">4. Universal Selector</h2>
      <p className="mt-2">
        The universal selector (*) selects all HTML elements on the page.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Applies to all elements */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">5. Grouping Selector</h2>
      <p className="mt-2">
        The grouping selector selects all elements with the same style definitions. Separate each selector
        with a comma.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`h1, h2, h3 {
  color: navy;
  font-family: Georgia, serif;
}

.btn, .link, .nav-item {
  cursor: pointer;
  text-decoration: none;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">6. Descendant Selector</h2>
      <p className="mt-2">
        The descendant selector matches all elements that are descendants of a specified element.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Selects all <p> inside <div> */
div p {
  color: blue;
}

/* Selects all <a> inside <nav> inside <header> */
header nav a {
  color: white;
  text-decoration: none;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">7. Child Selector</h2>
      <p className="mt-2">
        The child selector (&gt;) selects elements that are direct children of a specified element.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Selects only direct <p> children of <div> */
div > p {
  border-left: 3px solid blue;
  padding-left: 10px;
}

/* Selects only direct <li> children of <ul> */
ul > li {
  list-style-type: square;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">8. Attribute Selectors</h2>
      <p className="mt-2">
        Attribute selectors select elements based on an attribute or attribute value.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Elements with a title attribute */
[title] {
  border-bottom: 1px dotted;
}

/* Elements with href="https://example.com" */
[href="https://example.com"] {
  color: green;
}

/* Elements with href starting with "https" */
[href^="https"] {
  color: green;
}

/* Elements with href ending with ".pdf" */
[href$=".pdf"] {
  background: url('pdf-icon.png') no-repeat;
}

/* Elements with class containing "btn" */
[class*="btn"] {
  cursor: pointer;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">9. Pseudo-class Selectors</h2>
      <p className="mt-2">
        Pseudo-classes select elements based on a certain state.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Unvisited link */
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
  text-decoration: underline;
}

/* Selected link */
a:active {
  color: orange;
}

/* First child element */
p:first-child {
  font-weight: bold;
}

/* Last child element */
li:last-child {
  border-bottom: none;
}

/* Nth child (every other row) */
tr:nth-child(even) {
  background-color: #f2f2f2;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">10. Pseudo-element Selectors</h2>
      <p className="mt-2">
        Pseudo-elements style specific parts of an element.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* First line of a paragraph */
p::first-line {
  font-weight: bold;
  color: navy;
}

/* First letter of a paragraph */
p::first-letter {
  font-size: 200%;
  color: red;
}

/* Insert content before element */
h1::before {
  content: ">> ";
  color: blue;
}

/* Insert content after element */
h1::after {
  content: " <<";
  color: blue;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Selector Specificity</h2>
      <p className="mt-2">
        When multiple rules apply to the same element, specificity determines which rule wins:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Inline styles:</strong> 1000 points</li>
        <li><strong>ID selectors:</strong> 100 points</li>
        <li><strong>Class, attribute, pseudo-class:</strong> 10 points</li>
        <li><strong>Element, pseudo-element:</strong> 1 point</li>
      </ul>
    </div>
  );
};

export default CSSSelectors;
