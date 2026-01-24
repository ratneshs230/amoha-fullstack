import React from "react";

const PhpMagicConstants: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PHP Magic Constants</h1>

      <p>
        PHP has nine predefined constants that change value depending on where they are used.
        These are known as <strong>magic constants</strong>.
      </p>

      <p>
        Magic constants are written with double underscores at the beginning and the end, except{" "}
        <code>ClassName::class</code>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">List of Magic Constants</h2>

      <div className="overflow-auto">
        <table className="w-full table-auto border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Constant</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">__CLASS__</code></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Returns the class name (used inside a class).</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">__DIR__</code></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Returns the directory of the file.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">__FILE__</code></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Returns the full path and filename.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">__FUNCTION__</code></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Returns the function name (inside a function).</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">__LINE__</code></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Returns the current line number.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">__METHOD__</code></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Returns class + function name (inside class method).</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">__NAMESPACE__</code></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Returns the current namespace name.</td>
            </tr>
              <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">__TRAIT__</code></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Returns the trait name (inside a trait).</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">ClassName::class</code></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                Returns the class name including namespace (if any).
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Examples</h2>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">__FILE__ Example</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`<?php
echo __FILE__; 
// Outputs: full path + filename
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">__DIR__ Example</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`<?php
echo __DIR__;
// Outputs: directory path
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">__FUNCTION__ Example</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`<?php
function test() {
  echo __FUNCTION__;
}
test(); 
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">__CLASS__ and __METHOD__</h3>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`<?php
class MyClass {
  public function myMethod() {
    echo __CLASS__ . "<br>";
    echo __METHOD__;
  }
}
$obj = new MyClass();
$obj->myMethod();
?>`}
      </pre>

      <p className="mt-4 text-yellow-700 dark:text-yellow-400 font-semibold">
        Note: Magic constants are case-insensitive (e.g., __LINE__ == __line__).
      </p>
    </div>
  );
};

export default PhpMagicConstants;
