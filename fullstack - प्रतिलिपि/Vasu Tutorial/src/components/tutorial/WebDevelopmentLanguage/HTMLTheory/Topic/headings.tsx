import React from "react";

const HTMLHeadings: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">HTML Headings</h1>

      <p className="mt-2">
        HTML headings are titles or subtitles that you want to display on a webpage. They are defined with the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> to <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h6&gt;</code> tags.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Headings Overview</h2>
      <p className="mt-2">
        <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> defines the most important heading. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h6&gt;</code> defines the least important heading.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Heading Examples Displayed</h2>
      <div className="mt-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded">
        <h1 className="text-4xl font-bold">Heading 1</h1>
        <h2 className="text-3xl font-bold">Heading 2</h2>
        <h3 className="text-2xl font-bold">Heading 3</h3>
        <h4 className="text-xl font-bold">Heading 4</h4>
        <h5 className="text-lg font-bold">Heading 5</h5>
        <h6 className="text-base font-bold">Heading 6</h6>
      </div>

      <p className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 rounded">
        <strong>Note:</strong> Browsers automatically add some white space (a margin) before and after a heading.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Headings Are Important</h2>
      <p className="mt-2">
        Search engines use the headings to index the structure and content of your web pages. Users often skim a page by its headings. It is important to use headings to show the document structure.
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> headings should be used for main headings, followed by <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h2&gt;</code> headings, then the less important <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h3&gt;</code>, and so on.</li>
        <li>Use HTML headings for headings only. Don't use headings to make text BIG or bold.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Bigger Headings</h2>
      <p className="mt-2">
        Each HTML heading has a default size. However, you can specify the size for any heading with the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">style</code> attribute, using the CSS <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">font-size</code> property:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<h1 style="font-size:60px;">Heading 1</h1>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Heading Hierarchy Best Practices</h2>
      <p className="mt-2">
        It's important to follow a proper heading hierarchy for both accessibility and SEO purposes:
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li>Use only one <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> per page - this should be the main title</li>
        <li>Don't skip heading levels (e.g., don't jump from <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> to <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h3&gt;</code>)</li>
        <li>Use headings to create a logical document outline</li>
        <li>Subheadings should always be one level lower than their parent heading</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Good Heading Structure Example</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<h1>Main Title of the Page</h1>

<h2>First Major Section</h2>
<p>Content for the first section...</p>

<h3>Subsection 1.1</h3>
<p>Content for subsection 1.1...</p>

<h3>Subsection 1.2</h3>
<p>Content for subsection 1.2...</p>

<h2>Second Major Section</h2>
<p>Content for the second section...</p>

<h3>Subsection 2.1</h3>
<p>Content for subsection 2.1...</p>`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Bad Heading Structure Example</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!-- DON'T DO THIS -->
<h1>Main Title</h1>
<h3>This skips h2!</h3>
<h1>Another h1 on the same page</h1>
<h4>Jumping around heading levels</h4>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Styling Headings with CSS</h2>
      <p className="mt-2">
        You can customize the appearance of headings using CSS. Here are some examples:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<style>
h1 {
  color: navy;
  font-family: Arial, sans-serif;
  text-align: center;
}

h2 {
  color: darkgreen;
  border-bottom: 2px solid darkgreen;
  padding-bottom: 10px;
}

h3 {
  color: maroon;
  font-style: italic;
}
</style>

<h1>Styled Heading 1</h1>
<h2>Styled Heading 2</h2>
<h3>Styled Heading 3</h3>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Default Heading Styles</h2>
      <p className="mt-2">
        Browsers display headings with default styles. Here are the typical default sizes:
      </p>

      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Heading</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Default Size</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Font Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;h1&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">2em (32px)</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Bold</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;h2&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">1.5em (24px)</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Bold</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;h3&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">1.17em (18.72px)</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Bold</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;h4&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">1em (16px)</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Bold</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;h5&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">0.83em (13.28px)</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Bold</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;h6&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">0.67em (10.72px)</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Bold</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">SEO and Accessibility Tips</h2>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>SEO:</strong> Search engines give more weight to text in headings, especially <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h1&gt;</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;h2&gt;</code></li>
        <li><strong>Accessibility:</strong> Screen readers use headings to navigate content - users can jump between headings</li>
        <li><strong>Readability:</strong> Clear headings help users scan and understand page structure quickly</li>
        <li>Include relevant keywords in your headings where appropriate</li>
        <li>Keep headings concise but descriptive</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Complete Example</h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Headings Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 { color: #333; }
        h2 { color: #555; border-bottom: 1px solid #ddd; }
        h3 { color: #777; }
    </style>
</head>
<body>

<h1>Welcome to My Website</h1>
<p>This is the main introduction to the page.</p>

<h2>About Us</h2>
<p>Learn more about our company and mission.</p>

<h3>Our History</h3>
<p>Founded in 2000, we have grown...</p>

<h3>Our Team</h3>
<p>Meet the people behind the company...</p>

<h2>Services</h2>
<p>Discover what we offer.</p>

<h3>Web Development</h3>
<p>Custom websites and applications...</p>

<h3>Consulting</h3>
<p>Expert advice for your business...</p>

<h2>Contact</h2>
<p>Get in touch with us today!</p>

</body>
</html>`}</code>
      </pre>
    </div>
  );
};

export default HTMLHeadings;
