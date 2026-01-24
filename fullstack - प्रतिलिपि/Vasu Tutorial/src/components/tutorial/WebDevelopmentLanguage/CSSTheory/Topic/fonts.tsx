import React from "react";

const CSSFonts: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Fonts</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Introduction to CSS Fonts</h2>
      <p className="mt-2">
        Choosing the right font is crucial for web design. CSS provides extensive control over font
        appearance, including font family, size, weight, style, and more.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Font Family</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">font-family</code> property specifies the font for an element.
        Always include fallback fonts in case the primary font is unavailable.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Font family with fallbacks */
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}

h1 {
  font-family: Georgia, "Times New Roman", serif;
}

code {
  font-family: "Courier New", Consolas, monospace;
}

/* Generic font families (always as fallback) */
/* serif, sans-serif, monospace, cursive, fantasy */

/* Font stacks for different purposes */
.sans-serif-stack {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
               Roboto, "Helvetica Neue", Arial, sans-serif;
}

.serif-stack {
  font-family: Georgia, Cambria, "Times New Roman",
               Times, serif;
}

.monospace-stack {
  font-family: SFMono-Regular, Menlo, Monaco,
               Consolas, "Liberation Mono", "Courier New", monospace;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Font Size</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">font-size</code> property sets the size of the font.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Absolute sizes */
.small {
  font-size: 12px;
}

.medium {
  font-size: 16px;
}

.large {
  font-size: 24px;
}

/* Relative sizes (recommended) */
html {
  font-size: 16px;  /* Base size = 1rem */
}

body {
  font-size: 1rem;     /* 16px */
}

h1 {
  font-size: 2.5rem;   /* 40px */
}

h2 {
  font-size: 2rem;     /* 32px */
}

p {
  font-size: 1rem;     /* 16px */
}

small {
  font-size: 0.875rem; /* 14px */
}

/* Em units (relative to parent) */
.parent {
  font-size: 16px;
}

.child {
  font-size: 1.5em;  /* 24px (1.5 * 16px) */
}

/* Viewport-based sizing */
.responsive-heading {
  font-size: 5vw;    /* 5% of viewport width */
}

/* Clamp for responsive sizing with limits */
.fluid-text {
  font-size: clamp(1rem, 2vw + 1rem, 2rem);
  /* Min: 1rem, Preferred: 2vw + 1rem, Max: 2rem */
}

/* Keyword sizes */
.xx-small { font-size: xx-small; }
.x-small { font-size: x-small; }
.small { font-size: small; }
.medium { font-size: medium; }
.large { font-size: large; }
.x-large { font-size: x-large; }
.xx-large { font-size: xx-large; }`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Font Weight</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">font-weight</code> property sets the boldness of the font.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Keyword values */
.normal {
  font-weight: normal;  /* Same as 400 */
}

.bold {
  font-weight: bold;    /* Same as 700 */
}

.lighter {
  font-weight: lighter; /* One step lighter than parent */
}

.bolder {
  font-weight: bolder;  /* One step bolder than parent */
}

/* Numeric values (100-900) */
.thin {
  font-weight: 100;     /* Thin */
}

.extra-light {
  font-weight: 200;     /* Extra Light */
}

.light {
  font-weight: 300;     /* Light */
}

.regular {
  font-weight: 400;     /* Normal */
}

.medium {
  font-weight: 500;     /* Medium */
}

.semi-bold {
  font-weight: 600;     /* Semi Bold */
}

.bold {
  font-weight: 700;     /* Bold */
}

.extra-bold {
  font-weight: 800;     /* Extra Bold */
}

.black {
  font-weight: 900;     /* Black */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Font Style</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">font-style</code> property specifies italic or oblique text.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Font style values */
.normal {
  font-style: normal;   /* Default, upright */
}

.italic {
  font-style: italic;   /* Italic version of font */
}

.oblique {
  font-style: oblique;  /* Slanted version (simulated) */
}

/* Oblique with angle (CSS Fonts Level 4) */
.oblique-angle {
  font-style: oblique 14deg;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Font Variant</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">font-variant</code> property controls alternate glyphs.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Small caps */
.small-caps {
  font-variant: small-caps;
}

/* All small caps */
.all-small-caps {
  font-variant-caps: all-small-caps;
}

/* Numeric variants */
.oldstyle-nums {
  font-variant-numeric: oldstyle-nums;
}

.lining-nums {
  font-variant-numeric: lining-nums;
}

.tabular-nums {
  font-variant-numeric: tabular-nums;
}

/* Combined */
.fancy-numbers {
  font-variant-numeric: oldstyle-nums tabular-nums;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Font Shorthand</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">font</code> shorthand property combines multiple font properties.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* font: style variant weight size/line-height family */
p {
  font: italic small-caps bold 16px/1.5 Georgia, serif;
}

/* Minimum required: size and family */
h1 {
  font: 24px Arial, sans-serif;
}

/* With line-height */
.body-text {
  font: 16px/1.6 "Helvetica Neue", sans-serif;
}

/* System font */
.system {
  font: menu;          /* System menu font */
  font: message-box;   /* System message box font */
  font: status-bar;    /* System status bar font */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Web Fonts with @font-face</h2>
      <p className="mt-2">
        Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">@font-face</code> to load custom fonts.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Basic @font-face rule */
@font-face {
  font-family: "MyCustomFont";
  src: url("fonts/mycustomfont.woff2") format("woff2"),
       url("fonts/mycustomfont.woff") format("woff");
}

/* Using the custom font */
body {
  font-family: "MyCustomFont", Arial, sans-serif;
}

/* Multiple weights/styles */
@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto-Italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
}

/* Font display options */
@font-face {
  font-family: "MyFont";
  src: url("font.woff2") format("woff2");
  font-display: swap;  /* Show fallback immediately, swap when loaded */
  /* auto | block | swap | fallback | optional */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Google Fonts</h2>
      <p className="mt-2">
        Google Fonts provides free web fonts that are easy to use.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Link in HTML <head> */
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">

/* Or import in CSS */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

/* Using the font */
body {
  font-family: 'Open Sans', sans-serif;
}

/* Multiple fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap');

h1 {
  font-family: 'Playfair Display', serif;
}

body {
  font-family: 'Roboto', sans-serif;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Variable Fonts</h2>
      <p className="mt-2">
        Variable fonts allow multiple variations within a single font file.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Loading a variable font */
@font-face {
  font-family: "Inter";
  src: url("Inter-VariableFont.woff2") format("woff2-variations");
  font-weight: 100 900;  /* Weight range */
}

/* Using variable font settings */
.light {
  font-variation-settings: "wght" 300;
}

.regular {
  font-variation-settings: "wght" 400;
}

.bold {
  font-variation-settings: "wght" 700;
}

/* Multiple axes */
.custom {
  font-variation-settings:
    "wght" 450,
    "wdth" 75,
    "slnt" -5;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Always provide fallback fonts in your font stack</li>
        <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">rem</code> units for font sizes for better accessibility</li>
        <li>Limit the number of different fonts to 2-3 per page</li>
        <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">font-display: swap</code> to prevent invisible text during font loading</li>
        <li>Subset fonts to include only needed characters</li>
        <li>Consider system fonts for better performance</li>
        <li>Use variable fonts to reduce file size when multiple weights are needed</li>
      </ul>
    </div>
  );
};

export default CSSFonts;
