import React from "react";

const PHPComments: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PHP Comments</h1>

      <p className="mt-2">
        Comments in PHP are lines of code that are not executed as part of the program.
        They are used to explain code and make it more readable. Comments can also be used
        to prevent code from executing when testing.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Why Use Comments?</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Let others understand your code</li>
        <li>Remind yourself what the code does</li>
        <li>Temporarily disable code during debugging</li>
        <li>Document functions and their parameters</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Supports Several Types of Comments</h2>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Single-line Comments</h3>
      <p className="mt-2">
        Single-line comments start with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">//</code> or <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">#</code>.
        Everything after these symbols on the same line is ignored.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
// This is a single-line comment

# This is also a single-line comment

echo "Hello World!"; // This comment is at the end of a line
?>`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Multi-line Comments</h3>
      <p className="mt-2">
        Multi-line comments start with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">/*</code> and end with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">*/</code>.
        Everything between these markers is ignored.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
/*
This is a multi-line comment.
It can span multiple lines.
Very useful for longer explanations.
*/

echo "Hello World!";
?>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Using Comments to Disable Code</h2>
      <p className="mt-2">
        Comments can be used to prevent code from executing, which is helpful during debugging.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
// echo "This line will NOT execute";

echo "This line will execute";

/*
echo "This entire block";
echo "will not execute";
echo "useful for testing";
*/
?>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Comments in HTML and PHP</h2>
      <p className="mt-2">
        PHP comments are different from HTML comments. PHP comments are not visible in the browser's source code.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html>
<body>

<!-- This is an HTML comment (visible in page source) -->

<?php
// This is a PHP comment (NOT visible in page source)
echo "Hello World!";
?>

</body>
</html>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Documentation Comments (PHPDoc)</h2>
      <p className="mt-2">
        PHPDoc comments are special multi-line comments used to document functions, classes, and methods.
        They start with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">/**</code> and include special tags.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
/**
 * Calculate the sum of two numbers
 *
 * @param int $a First number
 * @param int $b Second number
 * @return int The sum of the two numbers
 */
function add($a, $b) {
    return $a + $b;
}

echo add(5, 3);  // Output: 8
?>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Best Practices for Comments</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Write comments that explain "why" not just "what"</li>
        <li>Keep comments up to date when code changes</li>
        <li>Use meaningful variable names to reduce the need for comments</li>
        <li>Avoid obvious comments like "increment i by 1"</li>
        <li>Use PHPDoc for functions and classes in larger projects</li>
      </ul>
    </div>
  );
};

export default PHPComments;
