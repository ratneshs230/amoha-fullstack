import React from "react";

const PHPOperators: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PHP Operators</h1>

      <p className="mt-2">
        Operators are used to perform operations on variables and values. PHP
        offers many operator types grouped as:
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li>Arithmetic Operators</li>
        <li>Assignment Operators</li>
        <li>Comparison Operators</li>
        <li>Increment/Decrement Operators</li>
        <li>Logical Operators</li>
        <li>String Operators</li>
        <li>Array Operators</li>
        <li>Conditional Assignment Operators</li>
      </ul>

      {/* Arithmetic */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Arithmetic Operators</h2>
      <p className="mt-2">Used for basic numeric calculations like +, -, x, / etc.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`+   Addition            $x + $y
-   Subtraction         $x - $y
*   Multiplication      $x * $y
/   Division            $x / $y
%   Modulus             $x % $y
**  Exponentiation      $x ** $y`}</code>
      </pre>

      {/* Assignment */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Assignment Operators</h2>
      <p className="mt-2">
        The basic assignment operator is <strong>=</strong>. Other shortcuts:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`x = y     // set x to y
x += y    // x = x + y
x -= y    // x = x - y
x *= y    // x = x * y
x /= y    // x = x / y
x %= y    // x = x % y`}</code>
      </pre>

      {/* Comparison */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Comparison Operators</h2>
      <p className="mt-2">Used to compare values.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`==   Equal
===  Identical (same value + type)
!=   Not equal
<>   Not equal
!==  Not identical
>    Greater than
<    Less than
>=   Greater or equal
<=   Less or equal
<=>  Spaceship operator`}</code>
      </pre>

      {/* Increment / Decrement */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">
        PHP Increment / Decrement Operators
      </h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`++$x   Pre-increment
$x++   Post-increment
--$x   Pre-decrement
$x--   Post-decrement`}</code>
      </pre>

      {/* Logical */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Logical Operators</h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`and   True if both true
or    True if either true
xor   True if only one is true
&&    Logical AND
||    Logical OR
!     Logical NOT`}</code>
      </pre>

      {/* String */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP String Operators</h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`.    Concatenation
.=   Concatenation assignment`}</code>
      </pre>

      {/* Array */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Array Operators</h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`+     Union
==    Equality
===   Identity
!=    Inequality
<>    Inequality
!==   Non-identity`}</code>
      </pre>

      {/* Conditional */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">
        PHP Conditional Assignment Operators
      </h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`?:   Ternary operator
??   Null coalescing operator`}</code>
      </pre>
    </div>
  );
};

export default PHPOperators;
