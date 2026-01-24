import React from "react";

const PHPRegEx: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PHP Regular Expressions</h1>

      <p className="mt-2">
        A regular expression is a sequence of characters that forms a search pattern.
        When you search for data in a text, you can use this search pattern to describe what you are searching for.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">What is a Regular Expression?</h2>
      <p className="mt-2">
        A regular expression can be a single character, or a more complicated pattern.
        Regular expressions can be used to perform all types of text search and text replace operations.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Regular Expression Functions</h2>
      <p className="mt-2">PHP provides a variety of functions that allow you to use regular expressions:</p>

      <ul className="list-disc ml-6 mt-2">
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">preg_match()</code> - Returns 1 if the pattern was found in the string and 0 if not</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">preg_match_all()</code> - Returns the number of times the pattern was found in the string</li>
        <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">preg_replace()</code> - Returns a new string where matched patterns have been replaced</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Using preg_match()</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">preg_match()</code> function will tell you whether a string contains matches of a pattern.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$str = "Visit W3Schools";
$pattern = "/w3schools/i";

echo preg_match($pattern, $str);  // Outputs: 1
?>`}</code>
      </pre>

      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">/i</code> modifier makes the search case-insensitive.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Using preg_match_all()</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">preg_match_all()</code> function returns the number of times the pattern was found in the string.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$str = "The rain in SPAIN falls mainly on the plains.";
$pattern = "/ain/i";

echo preg_match_all($pattern, $str);  // Outputs: 4
?>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Using preg_replace()</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">preg_replace()</code> function returns a string where all matches of a pattern have been replaced with another string.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$str = "Visit Microsoft!";
$pattern = "/microsoft/i";
$replacement = "W3Schools";

echo preg_replace($pattern, $replacement, $str);
// Outputs: Visit W3Schools!
?>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Regular Expression Modifiers</h2>
      <p className="mt-2">Modifiers can change how a search is performed:</p>

      <table className="min-w-full border border-gray-300 dark:border-gray-600 mt-4">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Modifier</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">i</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Performs a case-insensitive search</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">m</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Performs a multiline search</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">u</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Enables correct matching of UTF-8 encoded patterns</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Regular Expression Patterns</h2>
      <p className="mt-2">Brackets are used to find a range of characters:</p>

      <table className="min-w-full border border-gray-300 dark:border-gray-600 mt-4">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Expression</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">[abc]</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Find one character from the options in brackets</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">[^abc]</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Find any character NOT in brackets</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">[0-9]</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Find one character from the range 0 to 9</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">[a-z]</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Find one character from the range a to z</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">[A-Z]</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Find one character from the range A to Z</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Metacharacters</h2>
      <p className="mt-2">Metacharacters are characters with a special meaning:</p>

      <table className="min-w-full border border-gray-300 dark:border-gray-600 mt-4">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Character</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">.</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Find any single character</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">\d</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Find a digit</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">\s</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Find a whitespace character</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">\b</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Find a match at the beginning or end of a word</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">^</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Find a match at the beginning of a string</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">$</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Find a match at the end of a string</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Quantifiers</h2>
      <p className="mt-2">Quantifiers define how many instances of a character or group must be present:</p>

      <table className="min-w-full border border-gray-300 dark:border-gray-600 mt-4">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Quantifier</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">n+</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Matches any string that contains at least one n</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">n*</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Matches any string that contains zero or more occurrences of n</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">n?</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Matches any string that contains zero or one occurrences of n</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{`n{x}`}</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Matches any string that contains exactly x occurrences of n</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{`n{x,y}`}</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Matches any string that contains between x and y occurrences of n</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Email Validation Example</h2>
      <p className="mt-2">A practical example of using regular expressions to validate an email address:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$email = "test@example.com";
$pattern = "/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";

if (preg_match($pattern, $email)) {
    echo "Valid email address";
} else {
    echo "Invalid email address";
}
?>`}</code>
      </pre>
    </div>
  );
};

export default PHPRegEx;
