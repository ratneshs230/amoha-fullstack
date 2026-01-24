import React from "react";

const PhpDataTypes: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PHP Data Types</h1>

      <p className="mt-2">
        Variables in PHP can store different types of data, and each data type
        behaves differently. PHP supports several data types.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Supported Data Types</h2>
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

      {/* var_dump Example */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Get the Data Type</h2>
      <p className="mt-2">The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">var_dump()</code> function returns the data type and value:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$x = 5;
var_dump($x);
?>`}</code>
      </pre>

      {/* STRING */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP String</h2>
      <p className="mt-2">A string is a sequence of characters inside quotes.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$x = "Hello world!";
$y = 'Hello world!';

var_dump($x);
var_dump($y);
?>`}</code>
      </pre>

      {/* INTEGER */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Integer</h2>
      <p className="mt-2">Integer is a whole number without decimal.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$x = 5985;
var_dump($x);
?>`}</code>
      </pre>

      {/* FLOAT */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Float</h2>
      <p className="mt-2">A float is a number with a decimal.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$x = 10.365;
var_dump($x);
?>`}</code>
      </pre>

      {/* BOOLEAN */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Boolean</h2>
      <p className="mt-2">Boolean stores TRUE or FALSE.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$x = true;
var_dump($x);
?>`}</code>
      </pre>

      {/* ARRAY */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Array</h2>
      <p className="mt-2">An array stores multiple values in one variable.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$cars = array("Volvo", "BMW", "Toyota");
var_dump($cars);
?>`}</code>
      </pre>

      {/* OBJECT */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Object</h2>
      <p className="mt-2">Objects are instances of classes.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
class Car {
  public $color;
  public $model;

  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }

  public function message() {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}

$myCar = new Car("red", "Volvo");
var_dump($myCar);
?>`}</code>
      </pre>

      {/* NULL */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP NULL</h2>
      <p className="mt-2">NULL represents a variable with no value.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$x = "Hello world!";
$x = null;
var_dump($x);
?>`}</code>
      </pre>

      {/* TYPE CHANGE */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Change Data Type Automatically</h2>
      <p className="mt-2">PHP changes variable type automatically based on value.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$x = 5;
var_dump($x);

$x = "Hello";
var_dump($x);
?>`}</code>
      </pre>

      {/* CASTING */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Casting Data Types</h2>
      <p className="mt-2">You can manually convert a variable type using casting.</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$x = 5;
$x = (string) $x;
var_dump($x);
?>`}</code>
      </pre>
    </div>
  );
};

export default PhpDataTypes;
