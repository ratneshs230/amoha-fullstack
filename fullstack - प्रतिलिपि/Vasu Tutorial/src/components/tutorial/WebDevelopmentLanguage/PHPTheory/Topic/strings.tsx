import React from "react";

const PhpStrings: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PHP Strings</h1>

      <p className="mt-2">
        A string is a sequence of characters, such as <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">"Hello world!"</code>.
        In PHP, strings can be declared using either <strong>single quotes</strong> or{" "}
        <strong>double quotes</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Strings</h2>
      <p className="mt-2">You can output a string using single or double quotation marks:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`echo "Hello";
echo 'Hello';`}</code>
      </pre>

      <p className="text-yellow-700 dark:text-yellow-400 font-semibold mt-4">
        Note: Double quotes process special characters and variables, while single quotes do NOT.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Double or Single Quotes?</h2>

      <p className="mt-2">
        Double-quoted strings interpret variables and special characters, while single-quoted
        strings return the content exactly as written.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Double-Quoted Example</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$x = "John";
echo "Hello $x";   // Output: Hello John`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Single-Quoted Example</h3>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`$x = "John";
echo 'Hello $x';   // Output: Hello $x`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">String Length</h2>

      <p className="mt-2">The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">strlen()</code> function returns the length of a string.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`echo strlen("Hello world!");   // Output: 12`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Word Count</h2>

      <p className="mt-2">The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">str_word_count()</code> function counts the number of words in a string.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`echo str_word_count("Hello world!");   // Output: 2`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Search for Text Within a String</h2>

      <p className="mt-2">
        Use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">strpos()</code> function to search for a specific text within a string.
        It returns the position of the first match or <strong>FALSE</strong> if not found.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`echo strpos("Hello world!", "world");   // Output: 6`}</code>
      </pre>

      <p className="italic mt-2">
        Tip: String positions start from index <strong>0</strong>.
      </p>
    </div>
  );
};

export default PhpStrings;
