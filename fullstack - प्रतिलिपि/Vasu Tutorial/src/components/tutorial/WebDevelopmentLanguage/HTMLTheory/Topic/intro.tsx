import React from "react";

const HTMLIntroduction: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">HTML Introduction</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">What is HTML?</h2>
      <p className="mt-2">
        HTML stands for <strong>HyperText Markup Language</strong>. It is the standard markup language used to create and structure content on the World Wide Web. HTML describes the structure of a web page using a series of elements, which tell the browser how to display the content.
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li>HTML stands for HyperText Markup Language</li>
        <li>HTML is the standard markup language for creating Web pages</li>
        <li>HTML describes the structure of a Web page</li>
        <li>HTML consists of a series of elements</li>
        <li>HTML elements tell the browser how to display the content</li>
        <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">A Simple HTML Document</h2>
      <p className="mt-2">
        Here is an example of a basic HTML document:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>

    <h1>My First Heading</h1>
    <p>My first paragraph.</p>

</body>
</html>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Example Explained</h2>
      <ul className="list-disc ml-6 mt-2">
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;!DOCTYPE html&gt;</code> - Declaration that defines this document as HTML5</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;html&gt;</code> - The root element of an HTML page</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;head&gt;</code> - Contains meta information about the HTML page</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;title&gt;</code> - Specifies a title for the HTML page (shown in the browser's title bar or tab)</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;body&gt;</code> - Defines the document's body and contains all the visible contents</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> - Defines a large heading</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code> - Defines a paragraph</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">What is an HTML Element?</h2>
      <p className="mt-2">
        An HTML element is defined by a start tag, some content, and an end tag:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<tagname>Content goes here...</tagname>`}</code>
      </pre>

      <p className="mt-2">
        The HTML element is everything from the start tag to the end tag:
      </p>

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

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <strong>Note:</strong> Some HTML elements have no content (like the &lt;br&gt; element). These elements are called empty elements. Empty elements do not have an end tag!
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Web Browsers</h2>
      <p className="mt-2">
        The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly. A browser does not display the HTML tags, but uses them to determine how to display the document.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Page Structure</h2>
      <p className="mt-2">
        Below is a visualization of an HTML page structure:
      </p>

      <div className="mt-4 border-2 border-gray-400 dark:border-gray-500 p-2">
        <div className="bg-gray-300 dark:bg-gray-700 p-2 text-center">&lt;html&gt;</div>
        <div className="ml-4 mt-2 border-2 border-gray-300 dark:border-gray-600 p-2">
          <div className="bg-gray-200 dark:bg-gray-600 p-2 text-center">&lt;head&gt;</div>
          <div className="ml-4 p-2 text-center">&lt;title&gt;Page title&lt;/title&gt;</div>
          <div className="bg-gray-200 dark:bg-gray-600 p-2 text-center">&lt;/head&gt;</div>
        </div>
        <div className="ml-4 mt-2 border-2 border-gray-300 dark:border-gray-600 p-2">
          <div className="bg-gray-200 dark:bg-gray-600 p-2 text-center">&lt;body&gt;</div>
          <div className="ml-4 p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-500 text-center">
            <p>&lt;h1&gt;This is a heading&lt;/h1&gt;</p>
            <p>&lt;p&gt;This is a paragraph.&lt;/p&gt;</p>
            <p>&lt;p&gt;This is another paragraph.&lt;/p&gt;</p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-600 p-2 text-center">&lt;/body&gt;</div>
        </div>
        <div className="bg-gray-300 dark:bg-gray-700 p-2 text-center">&lt;/html&gt;</div>
      </div>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <strong>Note:</strong> The content inside the &lt;body&gt; section will be displayed in a browser. The content inside the &lt;title&gt; element will be shown in the browser's title bar or in the page's tab.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML History</h2>
      <p className="mt-2">
        Since the early days of the World Wide Web, there have been many versions of HTML:
      </p>

      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Year</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">1991</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">HTML</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">1995</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">HTML 2.0</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">1997</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">HTML 3.2</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">1999</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">HTML 4.01</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">2000</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">XHTML</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">2014</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">HTML5</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4">
        This tutorial follows the latest HTML5 standard. HTML5 is the fifth and current major version of HTML, and it is widely supported by all modern browsers.
      </p>
    </div>
  );
};

export default HTMLIntroduction;
