import React from "react";

const CSSBorders: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">CSS Borders</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Border Properties</h2>
      <p className="mt-2">
        CSS borders surround an element's content and padding. You can control the style, width,
        color, and shape of borders using various properties.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Border Style</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">border-style</code> property specifies the type of border.
        A border must have a style to be visible.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Border style values */
.solid { border-style: solid; }     /* Solid line */
.dashed { border-style: dashed; }   /* Dashed line */
.dotted { border-style: dotted; }   /* Dotted line */
.double { border-style: double; }   /* Double line */
.groove { border-style: groove; }   /* 3D grooved effect */
.ridge { border-style: ridge; }     /* 3D ridged effect */
.inset { border-style: inset; }     /* 3D inset effect */
.outset { border-style: outset; }   /* 3D outset effect */
.none { border-style: none; }       /* No border */
.hidden { border-style: hidden; }   /* Hidden border */

/* Different styles per side */
.mixed {
  border-style: solid dashed dotted double;
  /* Top | Right | Bottom | Left */
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Border Width</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">border-width</code> property sets the thickness of the border.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Border width values */
.thin {
  border-style: solid;
  border-width: thin;        /* Thin line */
}

.medium {
  border-style: solid;
  border-width: medium;      /* Medium line (default) */
}

.thick {
  border-style: solid;
  border-width: thick;       /* Thick line */
}

/* Specific pixel values */
.pixels {
  border-style: solid;
  border-width: 2px;
}

/* Different widths per side */
.mixed {
  border-style: solid;
  border-width: 1px 2px 3px 4px;
  /* Top | Right | Bottom | Left */
}

/* Individual sides */
.individual {
  border-top-width: 2px;
  border-right-width: 4px;
  border-bottom-width: 2px;
  border-left-width: 4px;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Border Color</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">border-color</code> property sets the color of the border.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Border color values */
.named {
  border: 2px solid red;
}

.hex {
  border: 2px solid #3498db;
}

.rgb {
  border: 2px solid rgb(52, 152, 219);
}

.rgba-transparent {
  border: 2px solid rgba(0, 0, 0, 0.3);
}

/* Different colors per side */
.rainbow {
  border-style: solid;
  border-width: 4px;
  border-color: red green blue yellow;
  /* Top | Right | Bottom | Left */
}

/* Transparent border */
.transparent {
  border: 2px solid transparent;
  /* Useful for hover effects */
}

.hover-border:hover {
  border-color: blue;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Border Shorthand</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">border</code> shorthand sets width, style, and color in one declaration.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Shorthand: width style color */
.shorthand {
  border: 2px solid #333;
}

/* Individual side shorthands */
.sides {
  border-top: 1px solid red;
  border-right: 2px dashed blue;
  border-bottom: 3px dotted green;
  border-left: 4px double orange;
}

/* Same style, different sides */
.card {
  border: 1px solid #ddd;
  border-bottom: 3px solid #007bff;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Border Radius</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">border-radius</code> property rounds the corners of an element.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* All corners same radius */
.rounded {
  border-radius: 10px;
}

/* Percentage for elliptical corners */
.percentage {
  border-radius: 50%;        /* Circle if width = height */
}

/* Different radius per corner */
.asymmetric {
  border-radius: 10px 20px 30px 40px;
  /* Top-left | Top-right | Bottom-right | Bottom-left */
}

/* Two value shorthand */
.two-values {
  border-radius: 10px 30px;
  /* Top-left/Bottom-right | Top-right/Bottom-left */
}

/* Individual corners */
.individual {
  border-top-left-radius: 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 20px;
}

/* Elliptical corners (horizontal / vertical) */
.elliptical {
  border-radius: 50px / 25px;
}

/* Complex shapes */
.pill {
  border-radius: 50px;       /* Pill/capsule shape */
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;        /* Perfect circle */
}

.leaf {
  border-radius: 0 50% 0 50%;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Border Image</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">border-image</code> property allows using an image as a border.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Border image properties */
.border-image {
  border: 20px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-repeat: round;
}

/* Shorthand */
.shorthand {
  border: 20px solid transparent;
  border-image: url('border.png') 30 round;
}

/* Gradient border */
.gradient-border {
  border: 4px solid transparent;
  border-image: linear-gradient(to right, red, blue) 1;
}

/* Gradient border with border-radius (workaround) */
.gradient-radius {
  position: relative;
  background: white;
  border-radius: 10px;
}

.gradient-radius::before {
  content: '';
  position: absolute;
  inset: -3px;
  background: linear-gradient(to right, red, blue);
  border-radius: inherit;
  z-index: -1;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Common Border Patterns</h2>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Card with shadow and border */
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Input field */
.input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
}

.input:focus {
  border-color: #007bff;
  outline: none;
}

/* Button with border */
.btn-outline {
  border: 2px solid #007bff;
  border-radius: 4px;
  background: transparent;
  color: #007bff;
}

.btn-outline:hover {
  background: #007bff;
  color: white;
}

/* Separator line */
.separator {
  border-bottom: 1px solid #eee;
  margin: 20px 0;
}

/* Accent border */
.accent-left {
  border-left: 4px solid #007bff;
  padding-left: 15px;
}

/* Tab indicator */
.tab.active {
  border-bottom: 3px solid #007bff;
}

/* Avatar circle */
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Outline vs Border</h2>
      <p className="mt-2">
        Outline is similar to border but does not take up space and can be non-rectangular.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`/* Outline properties */
.outline {
  outline: 2px solid blue;
  outline-offset: 5px;    /* Space between border and outline */
}

/* Focus outline */
.input:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Remove default outline (provide alternative) */
.custom-focus:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0,123,255,0.25);
}

/* Key differences:
   - Outline doesn't affect layout (no space)
   - Outline can't have different sides
   - Outline doesn't follow border-radius
   - Outline can be offset from element
*/`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">border</code> shorthand for simpler, cleaner code</li>
        <li>Consider using <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">box-shadow</code> for softer visual separation</li>
        <li>Use transparent borders for spacing that becomes visible on hover</li>
        <li>Keep border styles consistent throughout your design</li>
        <li>Ensure sufficient color contrast for accessibility</li>
        <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">border-radius</code> consistently for a cohesive look</li>
      </ul>
    </div>
  );
};

export default CSSBorders;
