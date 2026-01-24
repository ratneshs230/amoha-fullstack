import React from "react";

const HTMLImages: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">HTML Images</h1>

      <p className="mt-2">
        Images can improve the design and the appearance of a web page. The HTML <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> tag is used to embed an image in a web page.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Images Syntax</h2>
      <p className="mt-2">
        Images are not technically inserted into a web page; images are linked to web pages. The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> tag creates a holding space for the referenced image.
      </p>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> tag is empty, it contains attributes only, and does not have a closing tag.
      </p>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> tag has two required attributes:
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src</code> - Specifies the path to the image</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">alt</code> - Specifies an alternate text for the image</li>
      </ul>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="url" alt="alternatetext">`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The src Attribute</h2>
      <p className="mt-2">
        The required <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src</code> attribute specifies the path (URL) to the image.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="img_chania.jpg" alt="Flowers in Chania">`}</code>
      </pre>

      <p className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 rounded">
        <strong>Note:</strong> When a web page loads, it is the browser, at that moment, that gets the image from a web server and inserts it into the page. Therefore, make sure that the image actually stays in the same spot in relation to the web page, otherwise your visitors will get a broken link icon.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The alt Attribute</h2>
      <p className="mt-2">
        The required <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">alt</code> attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).
      </p>
      <p className="mt-2">
        The value of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">alt</code> attribute should describe the image:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="img_chania.jpg" alt="Flowers in Chania">`}</code>
      </pre>

      <p className="mt-2">If a browser cannot find an image, it will display the value of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">alt</code> attribute:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="wrongname.gif" alt="Flowers in Chania">`}</code>
      </pre>

      <p className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 rounded">
        <strong>Tip:</strong> A screen reader is a software program that reads the HTML code, and allows the user to "listen" to the content. Screen readers are useful for people who are visually impaired or learning disabled.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Image Size - Width and Height</h2>
      <p className="mt-2">
        You can use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">style</code> attribute to specify the width and height of an image.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">`}</code>
      </pre>

      <p className="mt-2">Alternatively, you can use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">width</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">height</code> attributes:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">`}</code>
      </pre>

      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">width</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">height</code> attributes always define the width and height of the image in pixels.
      </p>

      <p className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 rounded">
        <strong>Note:</strong> Always specify the width and height of an image. If width and height are not specified, the web page might flicker while the image loads.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Width and Height, or Style?</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">width</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">height</code>, and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">style</code> attributes are all valid in HTML. However, we suggest using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">style</code> attribute. It prevents styles sheets from changing the size of images:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html>
<head>
<style>
img {
  width: 100%;
}
</style>
</head>
<body>

<img src="html5.gif" alt="HTML5 Icon" width="128" height="128">

<img src="html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">

</body>
</html>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Images in Another Folder</h2>
      <p className="mt-2">
        If you have your images in a sub-folder, you must include the folder name in the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src</code> attribute:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="/images/html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Images on Another Server/Website</h2>
      <p className="mt-2">
        Some websites point to an image on another server. To point to an image on another server, you must specify an absolute (full) URL in the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src</code> attribute:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="https://www.example.com/images/html5.gif" alt="HTML5 Icon">`}</code>
      </pre>

      <p className="mt-4 p-3 bg-red-100 dark:bg-red-900 border-l-4 border-red-500 rounded">
        <strong>Notes on external images:</strong> External images might be under copyright. If you do not get permission to use it, you may be in violation of copyright laws. In addition, you cannot control external images; they can suddenly be removed or changed.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Animated Images</h2>
      <p className="mt-2">
        HTML allows animated GIFs:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="programming.gif" alt="Computer Man" style="width:48px;height:48px;">`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Image as a Link</h2>
      <p className="mt-2">
        To use an image as a link, put the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> tag inside the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;a&gt;</code> tag:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Image Floating</h2>
      <p className="mt-2">
        Use the CSS <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">float</code> property to let the image float to the right or to the left of a text:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<p><img src="smiley.gif" alt="Smiley face" style="float:right;width:42px;height:42px;">
The image will float to the right of the text.</p>

<p><img src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;">
The image will float to the left of the text.</p>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Common Image Formats</h2>
      <p className="mt-2">Here are the most common image file types, which are supported in all browsers (Chrome, Edge, Firefox, Safari, Opera):</p>

      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Abbreviation</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">File Format</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">File Extension</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">APNG</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Animated Portable Network Graphics</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">.apng</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">GIF</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Graphics Interchange Format</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">.gif</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">ICO</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Microsoft Icon</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">.ico, .cur</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">JPEG</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Joint Photographic Expert Group image</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">.jpg, .jpeg, .jfif, .pjpeg, .pjp</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">PNG</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Portable Network Graphics</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">.png</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">SVG</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Scalable Vector Graphics</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">.svg</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">WEBP</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Web Picture format</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">.webp</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Image Maps</h2>
      <p className="mt-2">
        With HTML image maps, you can create clickable areas on an image. The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;map&gt;</code> tag defines an image map, and the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;area&gt;</code> tag defines the clickable areas.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Background Images</h2>
      <p className="mt-2">
        A background image can be specified for almost any HTML element. To add a background image on an HTML element, use the HTML <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">style</code> attribute and the CSS <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">background-image</code> property:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<div style="background-image: url('img_girl.jpg');">
  <h2>Background Image</h2>
  <p>You can specify background images for any visible HTML element.</p>
</div>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The &lt;picture&gt; Element</h2>
      <p className="mt-2">
        HTML5 introduced the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;picture&gt;</code> element to give web developers more flexibility in specifying image resources. It contains <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;source&gt;</code> elements, each referring to different images. This way the browser can choose the image that best fits the current view and/or device.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg" alt="Girl">
</picture>`}</code>
      </pre>

      <p className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 rounded">
        <strong>Note:</strong> Always specify an <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> element as the last child element of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;picture&gt;</code> element. The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code> element is used by browsers that do not support the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;picture&gt;</code> element, or if none of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;source&gt;</code> tags match.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Image Tags Summary</h2>
      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Tag</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;img&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines an image</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;map&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines an image map</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;area&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a clickable area inside an image map</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;picture&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a container for multiple image resources</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HTMLImages;
