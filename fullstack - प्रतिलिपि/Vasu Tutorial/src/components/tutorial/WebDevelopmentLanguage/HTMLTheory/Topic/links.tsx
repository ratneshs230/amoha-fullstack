import React from "react";

const HTMLLinks: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">HTML Links</h1>

      <p className="mt-2">
        Links are found in nearly all web pages. Links allow users to click their way from page to page. HTML links are hyperlinks. You can click on a link and jump to another document.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Links - Hyperlinks</h2>
      <p className="mt-2">
        When you move the mouse over a link, the mouse arrow will turn into a little hand. A link does not have to be text. A link can be an image or any other HTML element!
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Links - Syntax</h2>
      <p className="mt-2">
        The HTML <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;a&gt;</code> tag defines a hyperlink. It has the following syntax:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<a href="url">link text</a>`}</code>
      </pre>

      <p className="mt-2">
        The most important attribute of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;a&gt;</code> element is the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">href</code> attribute, which indicates the link's destination.
      </p>
      <p className="mt-2">
        The link text is the part that will be visible to the reader. Clicking on the link text will send the reader to the specified URL address.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<a href="https://www.example.com">Visit Example.com</a>`}</code>
      </pre>

      <p className="mt-2">
        By default, links will appear as follows in all browsers:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>An unvisited link is underlined and blue</li>
        <li>A visited link is underlined and purple</li>
        <li>An active link is underlined and red</li>
      </ul>

      <p className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 rounded">
        <strong>Tip:</strong> Links can of course be styled with CSS, to get another look!
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Links - The target Attribute</h2>
      <p className="mt-2">
        By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link. The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">target</code> attribute specifies where to open the linked document.
      </p>

      <p className="mt-2">The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">target</code> attribute can have one of the following values:</p>
      <ul className="list-disc ml-6 mt-2">
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">_self</code> - Default. Opens the document in the same window/tab as it was clicked</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">_blank</code> - Opens the document in a new window or tab</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">_parent</code> - Opens the document in the parent frame</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">_top</code> - Opens the document in the full body of the window</li>
      </ul>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<a href="https://www.example.com" target="_blank">Visit Example!</a>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Absolute URLs vs. Relative URLs</h2>
      <p className="mt-2">
        Both examples above are using an absolute URL (a full web address) in the href attribute. A local link (a link to a page within the same website) is specified with a relative URL (without the "https://www" part):
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!-- Absolute URLs -->
<a href="https://www.google.com/">Google</a>
<a href="https://www.example.com/html/default.asp">HTML Tutorial</a>

<!-- Relative URLs -->
<a href="html_images.html">HTML Images</a>
<a href="/css/default.asp">CSS Tutorial</a>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Links - Use an Image as a Link</h2>
      <p className="mt-2">
        To use an image as a link, just put the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> tag inside the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;a&gt;</code> tag:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Link to an Email Address</h2>
      <p className="mt-2">
        Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">mailto:</code> inside the href attribute to create a link that opens the user's email program (to let them send a new email):
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<a href="mailto:someone@example.com">Send email</a>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Button as a Link</h2>
      <p className="mt-2">
        To use an HTML button as a link, you have to add some JavaScript code. JavaScript allows you to specify what happens at certain events, such as a click of a button:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<button onclick="document.location='default.asp'">HTML Tutorial</button>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Link Titles</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">title</code> attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<a href="https://www.example.com/html/" title="Go to HTML section">Visit our HTML Tutorial</a>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Links - Bookmarks</h2>
      <p className="mt-2">
        HTML links can be used to create bookmarks, so that readers can jump to specific parts of a web page.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Create a Bookmark</h3>
      <p className="mt-2">
        Bookmarks can be useful if a web page is very long. To create a bookmark - first create the bookmark with the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">id</code> attribute:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<h2 id="C4">Chapter 4</h2>`}</code>
      </pre>

      <p className="mt-2">Then, add a link to the bookmark ("Jump to Chapter 4"), from within the same page:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<a href="#C4">Jump to Chapter 4</a>`}</code>
      </pre>

      <p className="mt-2">You can also add a link to a bookmark on another page:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<a href="html_demo.html#C4">Jump to Chapter 4</a>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Link to Phone Numbers</h2>
      <p className="mt-2">
        Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">tel:</code> to create links that open phone dialers:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<a href="tel:+1234567890">Call us: +1 234 567 890</a>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Download Links</h2>
      <p className="mt-2">
        Use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">download</code> attribute to specify that the target will be downloaded when a user clicks on the hyperlink:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<a href="/images/myw3schoolsimage.jpg" download>
  <img src="/images/myw3schoolsimage.jpg" alt="W3Schools" width="104" height="142">
</a>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Styling Links with CSS</h2>
      <p className="mt-2">
        Links can be styled with CSS to look different:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<style>
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Link Colors Explained</h2>
      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">State</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">CSS Selector</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Unvisited</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>a:link</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">A normal, unvisited link</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Visited</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>a:visited</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">A link the user has visited</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Hover</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>a:hover</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">A link when the user mouses over it</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Active</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>a:active</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">A link the moment it is clicked</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Complete Example</h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html>
<head>
<style>
a:link, a:visited {
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: red;
}
</style>
</head>
<body>

<h2>Link Button</h2>
<p>A link styled as a button:</p>
<a href="default.asp" target="_blank">This is a link</a>

</body>
</html>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Link Tags Summary</h2>
      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Tag</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;a&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a hyperlink</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HTMLLinks;
