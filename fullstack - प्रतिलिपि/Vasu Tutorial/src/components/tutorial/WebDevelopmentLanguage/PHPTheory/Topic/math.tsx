import React from "react";

const PHPMathFunctions: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PHP Math Functions</h1>

      <p>
        PHP provides a set of built-in math functions that help you perform
        mathematical operations on numbers.
      </p>

      {/* pi() */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP pi() Function</h2>
      <p>The <strong>pi()</strong> function returns the value of PI.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`echo(pi());`}
      </pre>

      {/* min & max */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">
        PHP min() and max() Functions
      </h2>
      <p>
        The <strong>min()</strong> and <strong>max()</strong> functions return
        the lowest and highest values in a list.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`echo(min(0, 150, 30, 20, -8, -200));
echo(max(0, 150, 30, 20, -8, -200));`}
      </pre>

      {/* abs */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP abs() Function</h2>
      <p>
        The <strong>abs()</strong> function returns the absolute (positive)
        value of a number.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`echo(abs(-6.7));`}
      </pre>

      {/* sqrt */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP sqrt() Function</h2>
      <p>
        The <strong>sqrt()</strong> function returns the square root of a number.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`echo(sqrt(64));`}
      </pre>

      {/* round */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP round() Function</h2>
      <p>
        The <strong>round()</strong> function rounds a floating-point number to
        the nearest integer.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`echo(round(0.60));
echo(round(0.49));`}
      </pre>

      {/* rand() */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Random Numbers</h2>
      <p>
        The <strong>rand()</strong> function generates a random integer.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`echo(rand());`}
      </pre>

      <p className="mt-4">
        You can also specify minimum and maximum values:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`echo(rand(10, 100));   // random number between 10 and 100`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">
        Complete PHP Math Reference
      </h2>
      <p>
        PHP provides many more math functions. You can refer to the complete PHP
        Math Reference for detailed explanations and examples.
      </p>
    </div>
  );
};

export default PHPMathFunctions;
