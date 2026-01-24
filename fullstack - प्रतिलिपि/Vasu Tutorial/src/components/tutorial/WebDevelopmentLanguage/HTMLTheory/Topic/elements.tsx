import React from "react";

const HTMLElements: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">HTML Elements</h1>

      <p className="mt-2">
        An HTML element is defined by a start tag, some content, and an end tag. The HTML element is everything from the start tag to the end tag.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<tagname>Content goes here...</tagname>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Examples of HTML Elements</h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<h1>My First Heading</h1>
<p>My first paragraph.</p>`}</code>
      </pre>

      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Start Tag</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Element Content</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">End Tag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;h1&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">My First Heading</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;/h1&gt;</code></td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;p&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">My first paragraph.</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;/p&gt;</code></td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;br&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><em>none</em></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><em>none</em></td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 rounded">
        <strong>Note:</strong> Some HTML elements have no content (like the &lt;br&gt; element). These elements are called empty elements. Empty elements do not have an end tag!
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Nested HTML Elements</h2>
      <p className="mt-2">
        HTML elements can be nested (this means that elements can contain other elements). All HTML documents consist of nested HTML elements.
      </p>
      <p className="mt-2">
        The following example contains four HTML elements (<code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;html&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;body&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code>):
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Example Explained</h3>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;html&gt;</code> element is the root element and it defines the whole HTML document.
      </p>
      <p className="mt-2">
        It has a start tag <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;html&gt;</code> and an end tag <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;/html&gt;</code>.
      </p>
      <p className="mt-2">
        Then, inside the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;html&gt;</code> element there is a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;body&gt;</code> element:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>`}</code>
      </pre>

      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;body&gt;</code> element defines the document's body. It has a start tag <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;body&gt;</code> and an end tag <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;/body&gt;</code>.
      </p>
      <p className="mt-2">
        Then, inside the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;body&gt;</code> element there are two other elements: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Never Skip the End Tag</h2>
      <p className="mt-2">
        Some HTML elements will display correctly, even if you forget the end tag:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<html>
<body>

<p>This is a paragraph
<p>This is a paragraph

</body>
</html>`}</code>
      </pre>

      <p className="mt-4 p-3 bg-red-100 dark:bg-red-900 border-l-4 border-red-500 rounded">
        <strong>Warning:</strong> Never rely on this! Unexpected results and errors may occur if you forget the end tag!
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Empty HTML Elements</h2>
      <p className="mt-2">
        HTML elements with no content are called empty elements. The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;br&gt;</code> tag defines a line break, and is an empty element without a closing tag:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<p>This is a <br> paragraph with a line break.</p>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML is Not Case Sensitive</h2>
      <p className="mt-2">
        HTML tags are not case sensitive: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;P&gt;</code> means the same as <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code>.
      </p>
      <p className="mt-2">
        The HTML standard does not require lowercase tags, but W3C <strong>recommends</strong> lowercase in HTML, and <strong>demands</strong> lowercase for stricter document types like XHTML.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Block-level and Inline Elements</h2>
      <p className="mt-2">
        Every HTML element has a default display value, depending on what type of element it is. The two most common display values are block and inline.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Block-level Elements</h3>
      <p className="mt-2">
        A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available.
      </p>
      <p className="mt-2">
        Two commonly used block elements are: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;div&gt;</code>.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<p>Hello World</p>
<div>Hello World</div>`}</code>
      </pre>

      <p className="mt-2">Here are the block-level elements in HTML:</p>
      <ul className="list-disc ml-6 mt-2">
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;address&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;article&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;aside&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;blockquote&gt;</code></li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;canvas&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;dd&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;div&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;dl&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;dt&gt;</code></li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;fieldset&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;figcaption&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;figure&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;footer&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;form&gt;</code></li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code>-<code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h6&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;header&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;hr&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;li&gt;</code></li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;main&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;nav&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;noscript&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;ol&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code></li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;pre&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;section&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;table&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;tfoot&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;ul&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;video&gt;</code></li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Inline Elements</h3>
      <p className="mt-2">
        An inline element does not start on a new line. An inline element only takes up as much width as necessary.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<span>Hello World</span>`}</code>
      </pre>

      <p className="mt-2">Here are the inline elements in HTML:</p>
      <ul className="list-disc ml-6 mt-2">
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;a&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;abbr&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;acronym&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;b&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;bdo&gt;</code></li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;big&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;br&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;button&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;cite&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;code&gt;</code></li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;dfn&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;em&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;i&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;input&gt;</code></li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;kbd&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;label&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;map&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;object&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;output&gt;</code></li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;q&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;samp&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;script&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;select&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;small&gt;</code></li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;span&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;strong&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;sub&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;sup&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;textarea&gt;</code></li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;time&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;tt&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;var&gt;</code></li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The &lt;div&gt; Element</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;div&gt;</code> element is often used as a container for other HTML elements. It has no required attributes, but <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">style</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">class</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">id</code> are common.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<div style="background-color:lightblue">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
</div>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The &lt;span&gt; Element</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;span&gt;</code> element is an inline container used to mark up a part of a text, or a part of a document.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<p>My mother has <span style="color:blue">blue</span> eyes and my father has <span style="color:darkolivegreen">dark green</span> eyes.</p>`}</code>
      </pre>
    </div>
  );
};

export default HTMLElements;
