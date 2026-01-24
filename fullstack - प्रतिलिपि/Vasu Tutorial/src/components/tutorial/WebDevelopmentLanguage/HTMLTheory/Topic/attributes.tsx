import React from "react";

const HTMLAttributes: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">HTML Attributes</h1>

      <p className="mt-2">
        HTML attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">name="value"</code>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Key Points About Attributes</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>All HTML elements can have attributes</li>
        <li>Attributes provide additional information about elements</li>
        <li>Attributes are always specified in the start tag</li>
        <li>Attributes usually come in name/value pairs like: name="value"</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The href Attribute</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;a&gt;</code> tag defines a hyperlink. The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">href</code> attribute specifies the URL of the page the link goes to:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<a href="https://www.example.com">Visit Example</a>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The src Attribute</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> tag is used to embed an image in an HTML page. The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src</code> attribute specifies the path to the image to be displayed:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="img_girl.jpg">`}</code>
      </pre>

      <p className="mt-2">There are two ways to specify the URL in the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src</code> attribute:</p>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">1. Absolute URL</h3>
      <p className="mt-2">
        Links to an external image that is hosted on another website. Example: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src="https://www.example.com/images/img_girl.jpg"</code>
      </p>

      <p className="mt-2 p-3 bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 rounded">
        <strong>Note:</strong> External images might be under copyright. If you do not get permission to use it, you may be in violation of copyright laws. In addition, you cannot control external images; it can suddenly be removed or changed.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">2. Relative URL</h3>
      <p className="mt-2">
        Links to an image that is hosted within the website. Here, the URL does not include the domain name. If the URL begins without a slash, it will be relative to the current page. Example: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src="img_girl.jpg"</code>. If the URL begins with a slash, it will be relative to the domain. Example: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src="/images/img_girl.jpg"</code>
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The width and height Attributes</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> tag should also contain the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">width</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">height</code> attributes, which specify the width and height of the image (in pixels):
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="img_girl.jpg" width="500" height="600">`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The alt Attribute</h2>
      <p className="mt-2">
        The required <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">alt</code> attribute for the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src</code> attribute, or if the user uses a screen reader.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="img_girl.jpg" alt="Girl with a jacket">`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The style Attribute</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">style</code> attribute is used to add styles to an element, such as color, font, size, and more.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<p style="color:red;">This is a red paragraph.</p>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The lang Attribute</h2>
      <p className="mt-2">
        You should always include the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">lang</code> attribute inside the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;html&gt;</code> tag, to declare the language of the Web page. This is meant to assist search engines and browsers.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>`}</code>
      </pre>

      <p className="mt-2">
        Country codes can also be added to the language code in the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">lang</code> attribute. So, the first two characters define the language of the HTML page, and the last two characters define the country.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html lang="en-US">
<body>
...
</body>
</html>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The title Attribute</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">title</code> attribute defines some extra information about an element. The value of the title attribute will be displayed as a tooltip when you mouse over the element:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<p title="I'm a tooltip">This is a paragraph.</p>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The class Attribute</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">class</code> attribute is used to specify a class for an HTML element. Multiple HTML elements can share the same class. The class attribute is often used to point to a class name in a style sheet or for JavaScript to access and manipulate elements with the specific class name.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The id Attribute</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">id</code> attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document. The id attribute is used to point to a specific style declaration in a style sheet or by JavaScript to manipulate the element with the specific id.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<h1 id="myHeader">My Header</h1>`}</code>
      </pre>

      <p className="mt-2 p-3 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 rounded">
        <strong>Tip:</strong> The id name is case sensitive! The id name must contain at least one character, cannot start with a number, and must not contain whitespaces (spaces, tabs, etc.).
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices for Attributes</h2>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Always Use Lowercase Attributes</h3>
      <p className="mt-2">
        The HTML standard does not require lowercase attribute names. However, W3C recommends lowercase attributes in HTML, and demands lowercase attributes for stricter document types like XHTML.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Always Quote Attribute Values</h3>
      <p className="mt-2">
        The HTML standard does not require quotes around attribute values. However, W3C recommends quotes in HTML, and demands quotes for stricter document types like XHTML.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!-- Good -->
<a href="https://www.example.com">Link</a>

<!-- Bad -->
<a href=https://www.example.com>Link</a>`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Single or Double Quotes?</h3>
      <p className="mt-2">
        Double quotes around attribute values are the most common in HTML, but single quotes can also be used. In some situations, when the attribute value itself contains double quotes, it is necessary to use single quotes:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<p title='John "ShotGun" Nelson'>`}</code>
      </pre>

      <p className="mt-2">Or vice versa:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<p title="John 'ShotGun' Nelson">`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Common HTML Attributes Reference</h2>
      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Attribute</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>alt</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Specifies an alternate text when the original element fails to display</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>disabled</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Specifies that an input element should be disabled</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>href</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Specifies the URL for a link</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>id</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Specifies a unique id for an element</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>src</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Specifies the URL for an image</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>style</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Specifies an inline CSS style for an element</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>title</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Specifies extra information about an element (displayed as a tooltip)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HTMLAttributes;
