import React from "react";

const CSSBoxModel: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Box Model</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">What is the Box Model?</h2>
      <p className="mt-2">
        The CSS box model is essentially a box that wraps around every HTML element. It consists of:
        content, padding, borders, and margins. Understanding the box model is fundamental to creating
        layouts in CSS.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Box Model Components</h2>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Content:</strong> The actual content of the element (text, images, etc.)</li>
        <li><strong>Padding:</strong> Transparent space around the content (inside the border)</li>
        <li><strong>Border:</strong> A border that surrounds the padding and content</li>
        <li><strong>Margin:</strong> Transparent space outside the border</li>
      </ul>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Visual representation of the box model */
/*
  +------------------------------------------+
  |                 MARGIN                    |
  |  +------------------------------------+  |
  |  |              BORDER                |  |
  |  |  +----------------------------+    |  |
  |  |  |          PADDING           |    |  |
  |  |  |  +--------------------+    |    |  |
  |  |  |  |      CONTENT       |    |    |  |
  |  |  |  +--------------------+    |    |  |
  |  |  +----------------------------+    |  |
  |  +------------------------------------+  |
  +------------------------------------------+
*/`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Content</h2>
      <p className="mt-2">
        The content area contains the actual content of the element. You can set its dimensions using
        width and height properties.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Setting content dimensions */
.box {
  width: 300px;
  height: 200px;

  /* Min and max dimensions */
  min-width: 200px;
  max-width: 500px;
  min-height: 100px;
  max-height: 400px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Padding</h2>
      <p className="mt-2">
        Padding creates space around an element's content, inside of any defined borders. Padding is
        transparent and takes the background color of the element.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Individual sides */
.box {
  padding-top: 20px;
  padding-right: 30px;
  padding-bottom: 20px;
  padding-left: 30px;
}

/* Shorthand - all sides */
.box {
  padding: 20px;  /* All sides 20px */
}

/* Shorthand - vertical | horizontal */
.box {
  padding: 20px 30px;  /* Top/bottom: 20px, Left/right: 30px */
}

/* Shorthand - top | horizontal | bottom */
.box {
  padding: 10px 20px 15px;  /* Top: 10px, Left/right: 20px, Bottom: 15px */
}

/* Shorthand - top | right | bottom | left (clockwise) */
.box {
  padding: 10px 20px 15px 25px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Border</h2>
      <p className="mt-2">
        The border wraps around the padding and content. Borders can have different styles, widths, and colors.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Border shorthand: width style color */
.box {
  border: 2px solid black;
}

/* Individual border properties */
.box {
  border-width: 2px;
  border-style: solid;
  border-color: black;
}

/* Individual sides */
.box {
  border-top: 2px solid red;
  border-right: 3px dashed blue;
  border-bottom: 2px solid red;
  border-left: 3px dashed blue;
}

/* Border styles */
.solid { border-style: solid; }
.dashed { border-style: dashed; }
.dotted { border-style: dotted; }
.double { border-style: double; }
.groove { border-style: groove; }
.ridge { border-style: ridge; }
.inset { border-style: inset; }
.outset { border-style: outset; }
.none { border-style: none; }

/* Border radius for rounded corners */
.rounded {
  border-radius: 10px;  /* All corners */
}

.pill {
  border-radius: 50px;  /* Pill shape */
}

.circle {
  border-radius: 50%;   /* Perfect circle (if width = height) */
}

/* Individual corner radius */
.custom-radius {
  border-top-left-radius: 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 20px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Margin</h2>
      <p className="mt-2">
        Margins create space around elements, outside of any defined borders. Margins are completely
        transparent and don't have a background color.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Individual sides */
.box {
  margin-top: 20px;
  margin-right: 30px;
  margin-bottom: 20px;
  margin-left: 30px;
}

/* Shorthand (same as padding) */
.box {
  margin: 20px;           /* All sides */
  margin: 20px 30px;      /* Vertical | Horizontal */
  margin: 10px 20px 15px; /* Top | Horizontal | Bottom */
  margin: 10px 20px 15px 25px; /* Top | Right | Bottom | Left */
}

/* Auto margin for centering */
.centered {
  width: 500px;
  margin: 0 auto;  /* Horizontally center block elements */
}

/* Negative margins */
.overlap {
  margin-top: -20px;  /* Pulls element up */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Box Sizing</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">box-sizing</code> property defines how the width and height are calculated.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Default: content-box */
/* Width = content width only */
.content-box {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* Total width = 300 + 20*2 + 5*2 = 350px */
}

/* border-box: includes padding and border in width */
.border-box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* Total width = 300px (content shrinks to fit) */
}

/* Best practice: Apply border-box globally */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Or using inheritance */
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Margin Collapse</h2>
      <p className="mt-2">
        Vertical margins of adjacent block elements collapse into a single margin equal to the largest
        of the two margins.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Margin collapse example */
.box1 {
  margin-bottom: 30px;
}

.box2 {
  margin-top: 20px;
}

/* The space between box1 and box2 is 30px, not 50px */
/* The larger margin wins */

/* Preventing margin collapse */
.parent {
  /* Any of these prevent collapse */
  padding-top: 1px;
  border-top: 1px solid transparent;
  overflow: hidden;
  display: flow-root;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Complete Example</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Card component using box model */
.card {
  /* Content sizing */
  width: 300px;
  min-height: 200px;

  /* Padding for internal spacing */
  padding: 20px;

  /* Border for visual definition */
  border: 1px solid #ddd;
  border-radius: 8px;

  /* Margin for external spacing */
  margin: 15px;

  /* Use border-box for predictable sizing */
  box-sizing: border-box;

  /* Additional styling */
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Always use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">box-sizing: border-box</code> for easier sizing calculations</li>
        <li>Use padding for spacing inside elements, margin for spacing between elements</li>
        <li>Be aware of margin collapse when working with vertical margins</li>
        <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">margin: 0 auto</code> to center block elements horizontally</li>
        <li>Avoid mixing units (stick to px, em, or rem consistently)</li>
      </ul>
    </div>
  );
};

export default CSSBoxModel;
