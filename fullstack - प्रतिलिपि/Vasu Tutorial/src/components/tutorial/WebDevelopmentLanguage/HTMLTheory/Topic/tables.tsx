import React from "react";

const HTMLTables: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">HTML Tables</h1>

      <p className="mt-2">
        HTML tables allow web developers to arrange data into rows and columns. A table in HTML consists of table cells inside rows and columns.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Table Example</h2>

      <div className="mt-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 p-2 bg-gray-100 dark:bg-gray-700">Company</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 bg-gray-100 dark:bg-gray-700">Contact</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 bg-gray-100 dark:bg-gray-700">Country</th>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Alfreds Futterkiste</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Maria Anders</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Germany</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Centro comercial</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Francisco Chang</td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Mexico</td>
          </tr>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Define an HTML Table</h2>
      <p className="mt-2">
        A table is defined with the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;table&gt;</code> tag. Each table row is defined with a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;tr&gt;</code> tag. Each table header is defined with a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;th&gt;</code> tag. Each table data/cell is defined with a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;td&gt;</code> tag.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`}</code>
      </pre>

      <p className="mt-2">
        By default, the text in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;th&gt;</code> elements are bold and centered, but you can change that with CSS. The text in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;td&gt;</code> elements are regular and left-aligned.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Table Cells</h2>
      <p className="mt-2">
        Each table cell is defined by a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;td&gt;</code> and a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;/td&gt;</code> tag. Everything between <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;td&gt;</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;/td&gt;</code> are the content of the table cell.
      </p>

      <p className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 rounded">
        <strong>Note:</strong> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">td</code> stands for table data. A table cell can contain all sorts of HTML elements: text, images, lists, links, other tables, etc.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Table Rows</h2>
      <p className="mt-2">
        Each table row starts with a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;tr&gt;</code> and ends with a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;/tr&gt;</code> tag. You can have as many rows as you like in a table; just make sure that the number of cells is the same in each row.
      </p>

      <p className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 rounded">
        <strong>Note:</strong> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">tr</code> stands for table row.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Table Headers</h2>
      <p className="mt-2">
        Sometimes you want your cells to be table header cells. In those cases, use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;th&gt;</code> tag instead of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;td&gt;</code> tag.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<table>
  <tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Adding a Border</h2>
      <p className="mt-2">
        To add a border, use the CSS <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">border</code> property on <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">table</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">th</code>, and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">td</code> elements:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<style>
table, th, td {
  border: 1px solid black;
}
</style>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Collapsed Table Borders</h2>
      <p className="mt-2">
        To avoid having double borders, set the CSS <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">border-collapse</code> property to <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">collapse</code>:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Table Padding and Spacing</h2>
      <p className="mt-2">
        Cell padding is the space between the cell edges and the cell content. By default, the padding is set to 0. To add padding, use the CSS <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">padding</code> property:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<style>
th, td {
  padding: 15px;
}
</style>`}</code>
      </pre>

      <p className="mt-2">
        Cell spacing is the space between each cell. By default, the space is set to 2 pixels. To change the space, use the CSS <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">border-spacing</code> property:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<style>
table {
  border-spacing: 5px;
}
</style>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Colspan and Rowspan</h2>
      <p className="mt-2">
        To make a cell span more than one column, use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">colspan</code> attribute:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>`}</code>
      </pre>

      <p className="mt-2">
        To make a cell span more than one row, use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">rowspan</code> attribute:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<table>
  <tr>
    <th>Name</th>
    <td>Jill</td>
  </tr>
  <tr>
    <th rowspan="2">Phone</th>
    <td>555-1234</td>
  </tr>
  <tr>
    <td>555-8745</td>
  </tr>
</table>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Table Caption</h2>
      <p className="mt-2">
        To add a caption to a table, use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;caption&gt;</code> tag:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<table>
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$50</td>
  </tr>
</table>`}</code>
      </pre>

      <p className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 rounded">
        <strong>Note:</strong> The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;caption&gt;</code> tag must be inserted immediately after the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;table&gt;</code> tag.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Table Head, Body, and Footer</h2>
      <p className="mt-2">
        A table can be divided into three parts: a head, a body, and a footer. This is done using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;thead&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;tbody&gt;</code>, and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;tfoot&gt;</code> elements.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Table Styling with CSS</h2>
      <p className="mt-2">
        You can style tables extensively with CSS. Here are some common styling techniques:
      </p>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Zebra Stripes</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<style>
tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">Hoverable Table</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<style>
tr:hover {
  background-color: #ddd;
}
</style>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Complete Table Example</h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html>
<head>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: #4CAF50;
  color: white;
}
</style>
</head>
<body>

<h2>Styled Table</h2>

<table>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Peter</td>
      <td>Griffin</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>Lois</td>
      <td>Griffin</td>
      <td>$150</td>
    </tr>
    <tr>
      <td>Joe</td>
      <td>Swanson</td>
      <td>$300</td>
    </tr>
  </tbody>
</table>

</body>
</html>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Table Tags Summary</h2>
      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Tag</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;table&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a table</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;th&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a header cell in a table</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;tr&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a row in a table</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;td&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a cell in a table</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;caption&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a table caption</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;colgroup&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Specifies a group of columns</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;col&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Specifies column properties</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;thead&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Groups the header content</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;tbody&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Groups the body content</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;tfoot&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Groups the footer content</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HTMLTables;
