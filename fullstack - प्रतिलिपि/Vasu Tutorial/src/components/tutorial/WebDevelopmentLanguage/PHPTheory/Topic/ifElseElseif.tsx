import React from "react";

const PHPIfStatements: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PHP if Statements</h1>

      <p className="mt-2">
        Conditional statements are used to perform different actions based on
        different conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Conditional Statements</h2>

      <p className="mt-2">In PHP, we have the following conditional statements:</p>

      <ul className="list-disc ml-6 mt-2">
        <li>
          <strong>if statement</strong> - executes some code if one condition is
          true
        </li>
        <li>
          <strong>if...else statement</strong> - executes some code if a
          condition is true and another code if that condition is false
        </li>
        <li>
          <strong>if...elseif...else statement</strong> - executes different
          code for more than two conditions
        </li>
        <li>
          <strong>switch statement</strong> - selects one of many blocks of code
          to be executed
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP - The if Statement</h2>
      <p className="mt-2">
        The <strong>if statement</strong> executes some code if one condition is
        true.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Syntax</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`if (condition) {
  // code to be executed if condition is true;
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Example</h3>
      <p className="mt-2">Output "Have a good day!" if 5 is larger than 3:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`if (5 > 3) {
  echo "Have a good day!";
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Example with Variables</h3>
      <p className="mt-2">Output "Have a good day!" if $t is less than 20:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$t = 14;

if ($t < 20) {
  echo "Have a good day!";
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP - The if...else Statement</h2>
      <p className="mt-2">
        The <strong>if...else statement</strong> executes some code if a condition is true
        and another code if the condition is false.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$t = 22;

if ($t < 20) {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
?>

// Output: Have a good night!`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP - The if...elseif...else Statement</h2>
      <p className="mt-2">
        The <strong>if...elseif...else statement</strong> executes different codes for
        more than two conditions.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$t = 14;

if ($t < 10) {
  echo "Good morning!";
} elseif ($t < 20) {
  echo "Good day!";
} else {
  echo "Good evening!";
}
?>

// Output: Good day!`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Nested if Statements</h2>
      <p className="mt-2">
        You can have if statements inside if statements - this is called nested if statements.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$age = 25;
$hasLicense = true;

if ($age >= 18) {
  if ($hasLicense) {
    echo "You can drive!";
  } else {
    echo "You need a license to drive.";
  }
} else {
  echo "You are too young to drive.";
}
?>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Shorthand if...else (Ternary Operator)</h2>
      <p className="mt-2">
        The ternary operator is a shorthand way to write an if...else statement in one line.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
// Traditional if...else
$age = 20;
if ($age >= 18) {
  $vote = "Yes";
} else {
  $vote = "No";
}

// Using ternary operator
$vote = ($age >= 18) ? "Yes" : "No";

echo $vote;  // Output: Yes
?>`}</code>
      </pre>
    </div>
  );
};

export default PHPIfStatements;
