import React from "react";

const HTMLBasic: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">HTML Basic</h1>

      <p className="mt-2">
        In this chapter, we will show some basic HTML examples. Don't worry if we use tags you have not learned about yet. You will learn about them in the following chapters.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Documents</h2>
      <p className="mt-2">
        All HTML documents must start with a document type declaration: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;!DOCTYPE html&gt;</code>.
      </p>
      <p className="mt-2">
        The HTML document itself begins with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;html&gt;</code> and ends with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;/html&gt;</code>.
      </p>
      <p className="mt-2">
        The visible part of the HTML document is between <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;body&gt;</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;/body&gt;</code>.
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

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The &lt;!DOCTYPE&gt; Declaration</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;!DOCTYPE&gt;</code> declaration represents the document type, and helps browsers to display web pages correctly.
      </p>
      <p className="mt-2">
        It must only appear once, at the top of the page (before any HTML tags).
      </p>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;!DOCTYPE&gt;</code> declaration is not case sensitive.
      </p>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;!DOCTYPE&gt;</code> declaration for HTML5 is:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Headings</h2>
      <p className="mt-2">
        HTML headings are defined with the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> to <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h6&gt;</code> tags.
      </p>
      <p className="mt-2">
        <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> defines the most important heading. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h6&gt;</code> defines the least important heading.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Paragraphs</h2>
      <p className="mt-2">
        HTML paragraphs are defined with the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;p&gt;</code> tag:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Links</h2>
      <p className="mt-2">
        HTML links are defined with the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;a&gt;</code> tag:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<a href="https://www.example.com">This is a link</a>`}</code>
      </pre>

      <p className="mt-2">
        The link's destination is specified in the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">href</code> attribute.
      </p>
      <p className="mt-2">
        Attributes are used to provide additional information about HTML elements. You will learn more about attributes in a later chapter.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Images</h2>
      <p className="mt-2">
        HTML images are defined with the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> tag.
      </p>
      <p className="mt-2">
        The source file (<code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src</code>), alternative text (<code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">alt</code>), <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">width</code>, and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">height</code> are provided as attributes:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="image.jpg" alt="Description" width="104" height="142">`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">How to View HTML Source</h2>
      <p className="mt-2">
        Have you ever seen a Web page and wondered "How did they do that?"
      </p>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">View HTML Source Code:</h3>
      <p className="mt-2">
        Click CTRL + U in an HTML page, or right-click on the page and select "View Page Source". This will open a new tab containing the HTML source code of the page.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Inspect an HTML Element:</h3>
      <p className="mt-2">
        Right-click on an element (or a blank area), and choose "Inspect" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Line Breaks</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;br&gt;</code> element defines a line break. Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;br&gt;</code> if you want a line break (a new line) without starting a new paragraph:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<p>This is<br>a paragraph<br>with line breaks.</p>`}</code>
      </pre>

      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;br&gt;</code> tag is an empty tag, which means that it has no end tag.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Horizontal Rules</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;hr&gt;</code> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.
      </p>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;hr&gt;</code> element is used to separate content (or define a change) in an HTML page:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>`}</code>
      </pre>

      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;hr&gt;</code> tag is an empty tag, which means that it has no end tag.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Complete Example</h2>
      <p className="mt-2">
        Here is a complete HTML document using all the basic elements we have learned:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>

<h1>Welcome to My Website</h1>
<hr>

<h2>About Me</h2>
<p>Hello! My name is John.<br>I am learning HTML.</p>

<h2>My Favorite Website</h2>
<p>Click here to visit: <a href="https://www.example.com">Example</a></p>

<h2>My Photo</h2>
<img src="photo.jpg" alt="My Photo" width="200" height="200">

<hr>
<p>Thank you for visiting!</p>

</body>
</html>`}</code>
      </pre>
    </div>
  );
};

export default HTMLBasic;
