import React from "react";

const CSSColors: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Colors</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Introduction to CSS Colors</h2>
      <p className="mt-2">
        Colors in CSS can be specified using predefined color names, or RGB, HEX, HSL, RGBA, and HSLA values.
        Understanding color systems is essential for creating visually appealing web designs.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">1. Color Names</h2>
      <p className="mt-2">
        CSS supports 140+ standard color names. These are easy to remember and use.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Using color names */
h1 {
  color: tomato;
}

p {
  color: mediumseagreen;
}

div {
  background-color: lightblue;
}

/* Common color names */
/* red, blue, green, yellow, orange, purple, pink,
   black, white, gray, navy, teal, cyan, magenta */`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">2. Hexadecimal Colors</h2>
      <p className="mt-2">
        A hex color is specified with: #RRGGBB, where RR (red), GG (green), and BB (blue) are hexadecimal
        values between 00 and ff (0-255 in decimal).
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Full hex notation */
h1 {
  color: #ff0000;  /* Red */
}

p {
  color: #00ff00;  /* Green */
}

div {
  background-color: #0000ff;  /* Blue */
}

/* Shorthand hex (when pairs are identical) */
h2 {
  color: #f00;     /* Same as #ff0000 */
}

span {
  color: #fff;     /* White (#ffffff) */
}

/* Common hex colors */
/* #000000 - Black
   #ffffff - White
   #808080 - Gray
   #ff6347 - Tomato
   #4169e1 - Royal Blue */`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">3. RGB Colors</h2>
      <p className="mt-2">
        RGB stands for Red, Green, Blue. Each parameter defines the intensity of the color with a value
        between 0 and 255.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* RGB syntax: rgb(red, green, blue) */
h1 {
  color: rgb(255, 0, 0);    /* Red */
}

p {
  color: rgb(0, 255, 0);    /* Green */
}

div {
  color: rgb(0, 0, 255);    /* Blue */
}

/* Mixing colors */
.purple {
  color: rgb(128, 0, 128);  /* Purple = Red + Blue */
}

.gray {
  color: rgb(128, 128, 128); /* Gray = Equal RGB */
}

/* Shades of gray (all values equal) */
.light-gray {
  color: rgb(200, 200, 200);
}

.dark-gray {
  color: rgb(50, 50, 50);
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">4. RGBA Colors (with Transparency)</h2>
      <p className="mt-2">
        RGBA is an extension of RGB with an Alpha channel that specifies opacity. The alpha parameter is a
        number between 0.0 (fully transparent) and 1.0 (fully opaque).
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* RGBA syntax: rgba(red, green, blue, alpha) */
.transparent-red {
  background-color: rgba(255, 0, 0, 0.5);  /* 50% transparent red */
}

.overlay {
  background-color: rgba(0, 0, 0, 0.7);    /* 70% opaque black */
}

.glass-effect {
  background-color: rgba(255, 255, 255, 0.3);
}

/* Different opacity levels */
.opacity-25 {
  background-color: rgba(0, 128, 255, 0.25);
}

.opacity-50 {
  background-color: rgba(0, 128, 255, 0.50);
}

.opacity-75 {
  background-color: rgba(0, 128, 255, 0.75);
}

.opacity-100 {
  background-color: rgba(0, 128, 255, 1.0);
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">5. HSL Colors</h2>
      <p className="mt-2">
        HSL stands for Hue, Saturation, and Lightness. This color model is often considered more intuitive
        than RGB for designers.
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li><strong>Hue:</strong> A degree on the color wheel (0-360). 0 is red, 120 is green, 240 is blue.</li>
        <li><strong>Saturation:</strong> A percentage (0% is gray, 100% is full color)</li>
        <li><strong>Lightness:</strong> A percentage (0% is black, 100% is white, 50% is normal)</li>
      </ul>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* HSL syntax: hsl(hue, saturation, lightness) */
h1 {
  color: hsl(0, 100%, 50%);    /* Red */
}

h2 {
  color: hsl(120, 100%, 50%);  /* Green */
}

h3 {
  color: hsl(240, 100%, 50%);  /* Blue */
}

/* Creating color variations easily */
.color-base {
  color: hsl(200, 70%, 50%);   /* Base blue */
}

.color-light {
  color: hsl(200, 70%, 70%);   /* Lighter version */
}

.color-dark {
  color: hsl(200, 70%, 30%);   /* Darker version */
}

.color-muted {
  color: hsl(200, 30%, 50%);   /* Less saturated */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">6. HSLA Colors</h2>
      <p className="mt-2">
        HSLA adds an Alpha channel to HSL for transparency control.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* HSLA syntax: hsla(hue, saturation, lightness, alpha) */
.transparent-blue {
  background-color: hsla(240, 100%, 50%, 0.5);
}

.card-overlay {
  background-color: hsla(0, 0%, 0%, 0.6);
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">7. CSS Color Properties</h2>
      <p className="mt-2">Colors can be applied to various CSS properties:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Text color */
p {
  color: #333333;
}

/* Background color */
div {
  background-color: #f5f5f5;
}

/* Border color */
.box {
  border: 2px solid #007bff;
}

/* Outline color */
input:focus {
  outline-color: blue;
}

/* Box shadow with color */
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Text shadow with color */
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">8. currentColor Keyword</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">currentColor</code> keyword refers to the value of the element's color property.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* currentColor inherits from color property */
.link {
  color: blue;
  border-bottom: 2px solid currentColor;
}

.icon {
  color: green;
  fill: currentColor;  /* SVG fill matches text color */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Use CSS custom properties (variables) for consistent color schemes</li>
        <li>Ensure sufficient color contrast for accessibility (WCAG guidelines)</li>
        <li>Use HSL for creating color variations more easily</li>
        <li>Consider color-blind users when designing color schemes</li>
        <li>Use RGBA/HSLA for overlays and transparent effects</li>
      </ul>
    </div>
  );
};

export default CSSColors;
