import React from "react";

const HTMLLists: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">HTML Lists</h1>

      <p className="mt-2">
        HTML lists allow web developers to group a set of related items in lists. There are three types of lists in HTML: unordered lists, ordered lists, and description lists.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Unordered HTML List</h2>
      <p className="mt-2">
        An unordered list starts with the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;ul&gt;</code> tag. Each list item starts with the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;li&gt;</code> tag. The list items will be marked with bullets (small black circles) by default.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}</code>
      </pre>

      <div className="mt-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded">
        <p className="font-semibold mb-2">Output:</p>
        <ul className="list-disc ml-6">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Unordered List - Choose List Item Marker</h3>
      <p className="mt-2">
        The CSS <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">list-style-type</code> property is used to define the style of the list item marker. It can have one of the following values:
      </p>

      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Value</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>disc</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Sets the list item marker to a bullet (default)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>circle</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Sets the list item marker to a circle</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>square</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Sets the list item marker to a square</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>none</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">The list items will not be marked</td>
          </tr>
        </tbody>
      </table>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!-- Disc (default) -->
<ul style="list-style-type:disc;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<!-- Circle -->
<ul style="list-style-type:circle;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<!-- Square -->
<ul style="list-style-type:square;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<!-- None -->
<ul style="list-style-type:none;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Ordered HTML List</h2>
      <p className="mt-2">
        An ordered list starts with the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;ol&gt;</code> tag. Each list item starts with the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;li&gt;</code> tag. The list items will be marked with numbers by default.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}</code>
      </pre>

      <div className="mt-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded">
        <p className="font-semibold mb-2">Output:</p>
        <ol className="list-decimal ml-6">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
      </div>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Ordered List - The Type Attribute</h3>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">type</code> attribute of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;ol&gt;</code> tag defines the type of the list item marker:
      </p>

      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Type</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>type="1"</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">The list items will be numbered with numbers (default)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>type="A"</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">The list items will be numbered with uppercase letters</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>type="a"</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">The list items will be numbered with lowercase letters</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>type="I"</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">The list items will be numbered with uppercase roman numbers</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>type="i"</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">The list items will be numbered with lowercase roman numbers</td>
          </tr>
        </tbody>
      </table>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!-- Numbers -->
<ol type="1">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<!-- Uppercase Letters -->
<ol type="A">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<!-- Lowercase Letters -->
<ol type="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<!-- Uppercase Roman Numbers -->
<ol type="I">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<!-- Lowercase Roman Numbers -->
<ol type="i">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Control List Counting</h3>
      <p className="mt-2">
        By default, an ordered list will start counting from 1. If you want to start counting from a specified number, you can use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">start</code> attribute:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Description Lists</h2>
      <p className="mt-2">
        A description list is a list of terms, with a description of each term. The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;dl&gt;</code> tag defines the description list, the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;dt&gt;</code> tag defines the term (name), and the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;dd&gt;</code> tag describes each term.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>`}</code>
      </pre>

      <div className="mt-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded">
        <p className="font-semibold mb-2">Output:</p>
        <dl>
          <dt className="font-semibold">Coffee</dt>
          <dd className="ml-4">- black hot drink</dd>
          <dt className="font-semibold">Milk</dt>
          <dd className="ml-4">- white cold drink</dd>
        </dl>
      </div>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Nested HTML Lists</h2>
      <p className="mt-2">
        Lists can be nested (list inside list). You can nest any type of list inside any other type of list.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>`}</code>
      </pre>

      <div className="mt-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded">
        <p className="font-semibold mb-2">Output:</p>
        <ul className="list-disc ml-6">
          <li>Coffee</li>
          <li>Tea
            <ul className="list-circle ml-6">
              <li>Black tea</li>
              <li>Green tea</li>
            </ul>
          </li>
          <li>Milk</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Horizontal List with CSS</h2>
      <p className="mt-2">
        HTML lists can be styled in many different ways with CSS. One popular way is to style a list horizontally, to create a navigation menu:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html>
<head>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>
</head>
<body>

<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

</body>
</html>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Styling Lists with CSS</h2>
      <p className="mt-2">
        Here are some additional CSS techniques for styling lists:
      </p>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Custom Markers with Images</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`ul {
  list-style-image: url('sqpurple.gif');
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Remove Default Settings</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">List with Borders</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`ul {
  list-style-type: none;
  padding: 0;
  border: 1px solid #ddd;
}

ul li {
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
}

ul li:last-child {
  border-bottom: none;
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Complete List Example</h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html>
<head>
<style>
.custom-list {
  list-style-type: none;
  padding: 0;
}

.custom-list li {
  background: #f9f9f9;
  margin: 5px 0;
  padding: 12px;
  border-left: 4px solid #4CAF50;
}

.custom-list li:hover {
  background: #e9e9e9;
}
</style>
</head>
<body>

<h2>Shopping List</h2>

<ul class="custom-list">
  <li>Bread</li>
  <li>Milk</li>
  <li>Eggs</li>
  <li>Butter</li>
  <li>Cheese</li>
</ul>

<h2>Recipe Steps</h2>

<ol>
  <li>Preheat the oven to 350°F</li>
  <li>Mix the dry ingredients</li>
  <li>Add the wet ingredients</li>
  <li>Pour into a baking pan</li>
  <li>Bake for 30 minutes</li>
</ol>

</body>
</html>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML List Tags Summary</h2>
      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Tag</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;ul&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines an unordered list</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;ol&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines an ordered list</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;li&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a list item</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;dl&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a description list</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;dt&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a term in a description list</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;dd&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Describes the term in a description list</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HTMLLists;
