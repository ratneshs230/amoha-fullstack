import React from "react";

const PHPFunctions: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PHP Functions</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Built-in Functions</h2>
      <p className="mt-2">
        PHP contains over <strong>1000 built-in functions</strong> that can be
        called directly inside your script. These functions perform specific
        tasks. You can also create your own custom functions.
      </p>

      {/* -------------------------------- USER DEFINED -------------------------------- */}

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP User-Defined Functions</h2>
      <p className="mt-2">A function is a reusable block of statements. Important notes:</p>

      <ul className="list-disc ml-6 mt-2">
        <li>A function does not run automatically.</li>
        <li>It only executes when it is called.</li>
        <li>
          Function names must start with a letter or underscore and are
          case-insensitive.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Create a Function</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`function myMessage() {
  echo "Hello world!";
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Call a Function</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`function myMessage() {
  echo "Hello world!";
}

myMessage();`}</code>
      </pre>

      <p className="mt-2">The function prints "Hello world!".</p>

      {/* -------------------------------- ARGUMENTS -------------------------------- */}

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Function Arguments</h2>
      <p className="mt-2">
        You can pass information to functions using <strong>arguments</strong>.
        Arguments are written inside parentheses.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Example with One Argument</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`function familyName($fname) {
  echo "$fname Refsnes.<br>";
}

familyName("Jani");
familyName("Hege");
familyName("Stale");`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Example with Two Arguments</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`function familyName($fname, $year) {
  echo "$fname Refsnes. Born in $year <br>";
}

familyName("Hege", "1975");
familyName("Stale", "1978");`}</code>
      </pre>

      {/* -------------------------------- DEFAULT VALUE -------------------------------- */}

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Default Argument Values</h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`function setHeight($minheight = 50) {
  echo "The height is : $minheight <br>";
}

setHeight(350);
setHeight(); // default 50
setHeight(135);`}</code>
      </pre>

      {/* -------------------------------- RETURN VALUES -------------------------------- */}

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Functions - Returning Values</h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`function sum($x, $y) {
  $z = $x + $y;
  return $z;
}

echo sum(5, 10);
echo sum(7, 13);`}</code>
      </pre>

      {/* -------------------------------- PASS BY REFERENCE -------------------------------- */}

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Passing Arguments by Reference</h2>
      <p className="mt-2">
        To allow a function to modify the original variable, pass the argument
        by reference using <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&</code>.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`function add_five(&$value) {
  $value += 5;
}

$num = 2;
add_five($num);
echo $num; // output 7`}</code>
      </pre>

      {/* -------------------------------- VARIADIC FUNCTIONS -------------------------------- */}

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Variable Number of Arguments</h2>
      <p className="mt-2">
        Using <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">...$x</code> makes the function accept unlimited arguments.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Variadic Function Example</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`function sumMyNumbers(...$x) {
  $n = 0;
  foreach ($x as $value) {
    $n += $value;
  }
  return $n;
}

echo sumMyNumbers(5, 2, 6, 2, 7, 7);`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">
        Variadic Argument Must Be Last
      </h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`function myFamily($lastname, ...$firstname) {
  $txt = "";
  foreach ($firstname as $name) {
    $txt .= "Hi, $name $lastname.<br>";
  }
  return $txt;
}

echo myFamily("Doe", "Jane", "John", "Joey");`}</code>
      </pre>

      {/* -------------------------------- LOOSE TYPING -------------------------------- */}

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP is a Loosely Typed Language</h2>
      <p className="mt-2">
        PHP automatically converts variable types based on values.
        In PHP 7+, you can use <strong>type declarations</strong> and optional{" "}
        <strong>strict typing</strong>.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Without Strict Mode</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`function addNumbers(int $a, int $b) {
  return $a + $b;
}

echo addNumbers(5, "5 days");
// "5 days" becomes int(5) -> output 10`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">With Strict Mode Enabled</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php declare(strict_types=1);

function addNumbers(int $a, int $b) {
  return $a + $b;
}

echo addNumbers(5, "5 days");
// ERROR: "5 days" is not an integer`}</code>
      </pre>

      {/* -------------------------------- RETURN TYPE DECLARATIONS -------------------------------- */}

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Return Type Declarations</h2>

      <p className="mt-2">
        PHP 7 allows specifying the return type using <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">:</code> after the
        argument list.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Return Type Example</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php declare(strict_types=1);

function addNumbers(float $a, float $b) : float {
  return $a + $b;
}

echo addNumbers(1.2, 5.2);`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Returning a Different Type</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php declare(strict_types=1);

function addNumbers(float $a, float $b) : int {
  return (int)($a + $b);
}

echo addNumbers(1.2, 5.2);`}</code>
      </pre>
    </div>
  );
};

export default PHPFunctions;
