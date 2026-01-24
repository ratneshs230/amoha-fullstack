import React from "react";

const PhpVariables: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PHP Variables</h1>

      <p className="mt-2">
        Variables in PHP are containers used to store data. A variable always
        starts with the <strong>$</strong> sign, followed by its name.
      </p>

      {/* Creating variables */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Creating (Declaring) PHP Variables</h2>
      <p className="mt-2">PHP creates a variable automatically when you assign a value to it.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$x = 5;
$y = "John";`}</code>
      </pre>

      <p className="mt-2">
        Always wrap string values in quotes. PHP does not require a specific
        command to declare a variable - it's created when assigned.
      </p>

      {/* Rules */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Rules for PHP Variables</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>A variable starts with the <strong>$</strong> sign</li>
        <li>Must start with a letter or underscore</li>
        <li>Cannot start with a number</li>
        <li>Can include letters, numbers, and underscores</li>
        <li>Variable names are case-sensitive</li>
      </ul>

      {/* Output variables */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Output Variables</h2>
      <p className="mt-2">You can output variables using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">echo</code> statement.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$txt = "W3Schools.com";
echo "I love $txt!";`}</code>
      </pre>

      <p className="mt-2">Or using concatenation:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$txt = "W3Schools.com";
echo "I love " . $txt . "!";`}</code>
      </pre>

      <p className="mt-2">Outputting a sum:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$x = 5;
$y = 4;
echo $x + $y;`}</code>
      </pre>

      {/* Loose typing */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP is a Loosely Typed Language</h2>
      <p className="mt-2">
        PHP does not require declaring the data type. The type is automatically
        assigned based on the value.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$x = 5;      // integer
$y = "John"; // string`}</code>
      </pre>

      <p className="mt-2">
        PHP allows adding a string and a number without an error. Optionally,
        PHP 7+ supports type declarations for functions.
      </p>

      {/* Variable types */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Variable Types</h2>
      <p className="mt-2">PHP supports several data types:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>String</li>
        <li>Integer</li>
        <li>Float</li>
        <li>Boolean</li>
        <li>Array</li>
        <li>Object</li>
        <li>NULL</li>
        <li>Resource</li>
      </ul>

      {/* var_dump */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Get the Type</h2>
      <p className="mt-2">Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">var_dump()</code> to display a variable's type and value.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$x = 5;
var_dump($x);`}</code>
      </pre>

      <p className="mt-2">More examples:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`var_dump(5);
var_dump("John");
var_dump(3.14);
var_dump(true);
var_dump([2, 3, 56]);
var_dump(NULL);`}</code>
      </pre>

      {/* string assign */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Assign String to a Variable</h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$x = "John";
echo $x;`}</code>
      </pre>

      {/* multiple values */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Assign Multiple Values</h2>
      <p className="mt-2">You can assign the same value to multiple variables in one line:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$x = $y = $z = "Fruit";`}</code>
      </pre>
    </div>
  );
};

export default PhpVariables;
