import React from "react";

const PhpArrays: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PHP Arrays</h1>

      <p className="mt-2">
        An array stores multiple values in one single variable in PHP.
      </p>

      {/* Example 1: Create Array */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">What is an Array?</h2>
      <p className="mt-2">
        An array can hold many values under a single name. You can access
        these values using <strong>index numbers</strong> or{" "}
        <strong>key names</strong>.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$cars = array("Volvo", "BMW", "Toyota");`}</code>
      </pre>

      {/* Types of Arrays */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Array Types</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Indexed arrays - Arrays with numeric index</li>
        <li>Associative arrays - Arrays with named keys</li>
        <li>Multidimensional arrays - Arrays containing one or more arrays</li>
      </ul>

      {/* Working with Arrays */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Working With Arrays</h2>

      <p className="mt-2">You will learn how to:</p>

      <ul className="list-disc ml-6 mt-2">
        <li>Create Arrays</li>
        <li>Access Arrays</li>
        <li>Update Arrays</li>
        <li>Add Array Items</li>
        <li>Remove Array Items</li>
        <li>Sort Arrays</li>
      </ul>

      {/* Array items types */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Array Items</h2>

      <p className="mt-2">
        Array items can be of any data type: strings, numbers, objects,
        functions, or even arrays.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$myArr = array("Volvo", 15, ["apples", "bananas"], myFunction);`}</code>
      </pre>

      {/* Array Functions */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Array Functions</h2>

      <p className="mt-2">
        PHP arrays are powerful because of built-in functions. For example,
        <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded"> count()</code> returns the number of items in an array.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);`}</code>
      </pre>

      {/* Indexed Arrays */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Indexed Arrays</h2>
      <p className="mt-2">
        Indexed arrays use numeric keys starting from 0. You can create them using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">array()</code> function or short syntax.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
// Using array() function
$fruits = array("Apple", "Banana", "Orange");

// Using short syntax (PHP 5.4+)
$colors = ["Red", "Green", "Blue"];

// Accessing elements
echo $fruits[0];  // Output: Apple
echo $colors[2];  // Output: Blue
?>`}</code>
      </pre>

      {/* Associative Arrays */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Associative Arrays</h2>
      <p className="mt-2">
        Associative arrays use named keys that you assign to them.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$age = array("Peter" => 35, "Ben" => 37, "Joe" => 43);

// Or using short syntax
$age = ["Peter" => 35, "Ben" => 37, "Joe" => 43];

echo $age["Peter"];  // Output: 35
?>`}</code>
      </pre>

      {/* Looping Through Arrays */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Looping Through Arrays</h2>
      <p className="mt-2">
        Use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">foreach</code> loop to iterate through array elements.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$colors = ["Red", "Green", "Blue"];

foreach ($colors as $color) {
    echo "$color<br>";
}

// With keys
$age = ["Peter" => 35, "Ben" => 37];
foreach ($age as $name => $years) {
    echo "$name is $years years old<br>";
}
?>`}</code>
      </pre>
    </div>
  );
};

export default PhpArrays;
