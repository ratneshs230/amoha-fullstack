import React from "react";

const CSSText: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Text</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Text Formatting in CSS</h2>
      <p className="mt-2">
        CSS provides numerous properties for formatting text. These properties control the color, alignment,
        decoration, transformation, spacing, and shadow of text content.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Text Color</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">color</code> property sets the color of text content.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Text color */
p {
  color: #333333;       /* Dark gray */
}

h1 {
  color: navy;          /* Named color */
}

.highlight {
  color: rgb(255, 87, 51);  /* Orange-red */
}

a {
  color: #007bff;       /* Link blue */
}

a:hover {
  color: #0056b3;       /* Darker on hover */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Text Alignment</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">text-align</code> property controls the horizontal alignment of text.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Horizontal alignment */
.left {
  text-align: left;     /* Default for LTR languages */
}

.center {
  text-align: center;   /* Center aligned */
}

.right {
  text-align: right;    /* Right aligned */
}

.justify {
  text-align: justify;  /* Stretched to equal width lines */
}

/* Vertical alignment (for inline elements) */
img {
  vertical-align: middle;
}

span {
  vertical-align: top;
  vertical-align: bottom;
  vertical-align: baseline;
  vertical-align: text-top;
  vertical-align: text-bottom;
  vertical-align: super;    /* Superscript */
  vertical-align: sub;      /* Subscript */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Text Decoration</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">text-decoration</code> property adds decorative lines to text.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Text decoration lines */
.underline {
  text-decoration: underline;
}

.overline {
  text-decoration: overline;
}

.line-through {
  text-decoration: line-through;  /* Strikethrough */
}

.none {
  text-decoration: none;  /* Remove decoration (useful for links) */
}

/* Multiple decorations */
.multiple {
  text-decoration: underline overline;
}

/* Decoration styling (CSS3) */
.styled-underline {
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-style: wavy;    /* solid, double, dotted, dashed, wavy */
  text-decoration-thickness: 2px;
}

/* Shorthand */
.fancy {
  text-decoration: underline wavy red 2px;
}

/* text-underline-offset */
.offset {
  text-decoration: underline;
  text-underline-offset: 5px;  /* Space between text and underline */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Text Transformation</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">text-transform</code> property controls the capitalization of text.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Text transformation */
.uppercase {
  text-transform: uppercase;  /* ALL CAPS */
}

.lowercase {
  text-transform: lowercase;  /* all lowercase */
}

.capitalize {
  text-transform: capitalize; /* First Letter Of Each Word */
}

.none {
  text-transform: none;       /* No transformation */
}

/* Common use cases */
h1, h2 {
  text-transform: uppercase;
}

.button {
  text-transform: uppercase;
  letter-spacing: 1px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Text Spacing</h2>
      <p className="mt-2">
        CSS provides several properties for controlling spacing in text.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Letter spacing */
.wide {
  letter-spacing: 2px;   /* Space between characters */
}

.tight {
  letter-spacing: -1px;  /* Negative value tightens */
}

/* Word spacing */
.word-spaced {
  word-spacing: 10px;    /* Space between words */
}

/* Line height (leading) */
p {
  line-height: 1.5;      /* Unitless (recommended) - 1.5x font size */
  line-height: 24px;     /* Fixed value */
  line-height: 150%;     /* Percentage of font size */
}

/* Text indentation */
.indent {
  text-indent: 50px;     /* First line indent */
}

.hanging-indent {
  text-indent: -30px;
  padding-left: 30px;
}

/* White space handling */
.nowrap {
  white-space: nowrap;   /* Prevents line breaks */
}

.pre {
  white-space: pre;      /* Preserves whitespace and line breaks */
}

.pre-wrap {
  white-space: pre-wrap; /* Preserves whitespace, wraps text */
}

.pre-line {
  white-space: pre-line; /* Collapses whitespace, preserves line breaks */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Text Shadow</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">text-shadow</code> property adds shadow effects to text.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* text-shadow: h-offset v-offset blur-radius color */
.shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Hard shadow (no blur) */
.hard-shadow {
  text-shadow: 2px 2px 0 black;
}

/* Multiple shadows */
.multi-shadow {
  text-shadow:
    1px 1px 0 #000,
    2px 2px 0 #333,
    3px 3px 0 #666;
}

/* Glowing effect */
.glow {
  text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #ff00ff,
    0 0 30px #ff00ff;
}

/* Embossed effect */
.embossed {
  color: #ccc;
  text-shadow:
    -1px -1px 0 #fff,
    1px 1px 0 #333;
}

/* 3D effect */
.threed {
  text-shadow:
    0 1px 0 #ccc,
    0 2px 0 #c9c9c9,
    0 3px 0 #bbb,
    0 4px 0 #b9b9b9,
    0 5px 0 #aaa,
    0 6px 1px rgba(0,0,0,.1),
    0 0 5px rgba(0,0,0,.1);
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Text Overflow</h2>
      <p className="mt-2">
        Control how overflowed content is handled and displayed.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Ellipsis for truncated text */
.truncate {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* Shows "..." */
}

/* Multi-line truncation (with -webkit-) */
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;    /* Show 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Word breaking */
.break-word {
  word-wrap: break-word;    /* Legacy */
  overflow-wrap: break-word; /* Modern */
}

.break-all {
  word-break: break-all;    /* Break anywhere */
}

/* Hyphenation */
.hyphenate {
  hyphens: auto;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Writing Mode</h2>
      <p className="mt-2">
        Control the direction of text flow.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Writing direction */
.ltr {
  direction: ltr;         /* Left to right (default) */
}

.rtl {
  direction: rtl;         /* Right to left (Arabic, Hebrew) */
}

/* Writing mode */
.vertical {
  writing-mode: vertical-rl;  /* Vertical, right to left */
}

.vertical-lr {
  writing-mode: vertical-lr;  /* Vertical, left to right */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Complete Example</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Article text styling */
article {
  color: #333;
  line-height: 1.7;
  letter-spacing: 0.02em;
}

article h1 {
  color: #1a1a1a;
  text-transform: capitalize;
  letter-spacing: -0.02em;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
}

article p {
  text-indent: 1.5em;
  text-align: justify;
  margin-bottom: 1em;
}

article a {
  color: #0066cc;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

article a:hover {
  border-bottom-color: currentColor;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Use unitless values for <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">line-height</code> (e.g., 1.5 instead of 24px)</li>
        <li>Remove text decoration from links and add custom styling</li>
        <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">text-overflow: ellipsis</code> for content that may overflow</li>
        <li>Ensure sufficient color contrast for accessibility</li>
        <li>Avoid using <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">text-align: justify</code> on narrow columns</li>
      </ul>
    </div>
  );
};

export default CSSText;
