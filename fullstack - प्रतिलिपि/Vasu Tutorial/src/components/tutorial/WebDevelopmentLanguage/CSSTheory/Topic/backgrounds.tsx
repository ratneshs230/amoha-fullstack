import React from "react";

const CSSBackgrounds: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Backgrounds</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Background Properties Overview</h2>
      <p className="mt-2">
        CSS provides several properties to control element backgrounds. You can set colors, images,
        gradients, and control how they are positioned and repeated.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Background Color</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">background-color</code> property sets the background color of an element.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Background color values */
.color-name {
  background-color: lightblue;
}

.hex-color {
  background-color: #f0f0f0;
}

.rgb-color {
  background-color: rgb(255, 200, 100);
}

.rgba-transparent {
  background-color: rgba(0, 0, 0, 0.5);  /* 50% transparent black */
}

.hsl-color {
  background-color: hsl(200, 50%, 80%);
}

/* Transparent background */
.transparent {
  background-color: transparent;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Background Image</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">background-image</code> property sets one or more background images.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Single background image */
.hero {
  background-image: url('hero-bg.jpg');
}

/* Relative path */
.banner {
  background-image: url('../images/banner.png');
}

/* Absolute URL */
.external {
  background-image: url('https://example.com/image.jpg');
}

/* Multiple background images (layered) */
.layered {
  background-image:
    url('overlay.png'),     /* Top layer */
    url('pattern.png'),     /* Middle layer */
    url('background.jpg');  /* Bottom layer */
}

/* No background image */
.no-image {
  background-image: none;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Background Repeat</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">background-repeat</code> property controls how background images are repeated.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Repeat options */
.repeat {
  background-image: url('pattern.png');
  background-repeat: repeat;      /* Default - tiles in both directions */
}

.repeat-x {
  background-image: url('border.png');
  background-repeat: repeat-x;    /* Repeat horizontally only */
}

.repeat-y {
  background-image: url('sidebar.png');
  background-repeat: repeat-y;    /* Repeat vertically only */
}

.no-repeat {
  background-image: url('logo.png');
  background-repeat: no-repeat;   /* Show once */
}

/* New values */
.space {
  background-repeat: space;       /* Repeat without clipping */
}

.round {
  background-repeat: round;       /* Scale to fit whole number of times */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Background Position</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">background-position</code> property sets the starting position of a background image.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Keyword positions */
.top-left {
  background-position: top left;
}

.top-center {
  background-position: top center;
}

.center {
  background-position: center;        /* Center both axes */
}

.bottom-right {
  background-position: bottom right;
}

/* Percentage values */
.percentage {
  background-position: 25% 75%;       /* X% from left, Y% from top */
}

/* Length values */
.pixels {
  background-position: 50px 100px;    /* 50px from left, 100px from top */
}

/* Mixed values */
.mixed {
  background-position: right 20px bottom 10px;
}

/* Shorthand with multiple images */
.multiple {
  background-image: url('a.png'), url('b.png');
  background-position: top left, bottom right;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Background Size</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">background-size</code> property specifies the size of background images.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Cover - scales to cover entire element */
.cover {
  background-image: url('hero.jpg');
  background-size: cover;
  /* May crop image to fill */
}

/* Contain - scales to fit within element */
.contain {
  background-image: url('logo.png');
  background-size: contain;
  /* May leave empty space */
}

/* Auto - original size */
.auto {
  background-size: auto;
}

/* Specific dimensions */
.fixed-size {
  background-size: 200px 100px;     /* Width Height */
}

.width-only {
  background-size: 300px auto;      /* Width, proportional height */
}

/* Percentage */
.percentage {
  background-size: 50% 50%;         /* 50% of element size */
}

/* Multiple backgrounds */
.multiple {
  background-image: url('a.png'), url('b.png');
  background-size: 100px, cover;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Background Attachment</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">background-attachment</code> property determines if the background scrolls with the page.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Scroll with page (default) */
.scroll {
  background-attachment: scroll;
}

/* Fixed relative to viewport (parallax effect) */
.fixed {
  background-image: url('hero.jpg');
  background-attachment: fixed;
  background-size: cover;
}

/* Fixed relative to element's content */
.local {
  background-attachment: local;
  /* Scrolls with element's content, not the page */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Background Origin and Clip</h2>
      <p className="mt-2">
        These properties control where the background starts and where it's clipped.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Background origin - where background positioning starts */
.origin-border {
  background-origin: border-box;    /* From border edge */
}

.origin-padding {
  background-origin: padding-box;   /* From padding edge (default) */
}

.origin-content {
  background-origin: content-box;   /* From content edge */
}

/* Background clip - where background is visible */
.clip-border {
  background-clip: border-box;      /* Extends under border (default) */
}

.clip-padding {
  background-clip: padding-box;     /* Clips at padding edge */
}

.clip-content {
  background-clip: content-box;     /* Clips at content edge */
}

/* Text clip (for gradient text effect) */
.text-gradient {
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">CSS Gradients</h2>
      <p className="mt-2">
        Gradients are special types of background images created with CSS.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Linear gradient */
.linear {
  background: linear-gradient(to right, red, blue);
}

.linear-angle {
  background: linear-gradient(45deg, red, yellow, green);
}

.linear-stops {
  background: linear-gradient(
    to bottom,
    red 0%,
    yellow 50%,
    green 100%
  );
}

/* Radial gradient */
.radial {
  background: radial-gradient(circle, red, blue);
}

.radial-ellipse {
  background: radial-gradient(ellipse at top left, red, blue);
}

/* Conic gradient */
.conic {
  background: conic-gradient(red, yellow, green, blue, red);
}

/* Repeating gradients */
.repeating-linear {
  background: repeating-linear-gradient(
    45deg,
    #f0f0f0,
    #f0f0f0 10px,
    #ccc 10px,
    #ccc 20px
  );
}

.repeating-radial {
  background: repeating-radial-gradient(
    circle,
    red 0px,
    red 10px,
    white 10px,
    white 20px
  );
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Background Shorthand</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">background</code> shorthand property sets all background properties at once.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Shorthand syntax */
.shorthand {
  background: color image position/size repeat attachment;
}

/* Examples */
.hero {
  background: #333 url('hero.jpg') center/cover no-repeat fixed;
}

.pattern {
  background: white url('pattern.png') repeat;
}

/* Multiple backgrounds with shorthand */
.layered {
  background:
    url('overlay.png') center/cover no-repeat,
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('background.jpg') center/cover no-repeat;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Common Background Patterns</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Hero section with overlay */
.hero {
  background:
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
    url('hero.jpg') center/cover no-repeat;
  color: white;
  min-height: 100vh;
}

/* Card with subtle pattern */
.card {
  background:
    url('subtle-pattern.png') repeat,
    white;
}

/* Diagonal stripes */
.stripes {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(0,0,0,0.1) 10px,
    rgba(0,0,0,0.1) 20px
  );
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Optimize background images for web (compress, proper format)</li>
        <li>Use CSS gradients instead of images when possible</li>
        <li>Always set a fallback background color</li>
        <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">background-size: cover</code> for responsive hero images</li>
        <li>Be careful with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">background-attachment: fixed</code> on mobile (performance issues)</li>
        <li>Test backgrounds across different screen sizes</li>
      </ul>
    </div>
  );
};

export default CSSBackgrounds;
