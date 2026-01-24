import React from "react";

const PHPOOPClassConstants: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PHP OOP - Class Constants</h1>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">What are Class Constants?</h2>
      <p>
        Class constants are useful for defining constant data inside a class. They are declared using the <code>const</code> keyword 
        and cannot be changed once set. Constants are case-sensitive, and usually named in uppercase.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Accessing Constants Outside the Class</h3>
      <p>You can access a class constant using <code>ClassName::CONSTANT_NAME</code>:</p>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        {`<?php
class Goodbye {
  const LEAVING_MESSAGE = "Thank you for visiting W3Schools.com!";
}

echo Goodbye::LEAVING_MESSAGE;
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Accessing Constants Inside the Class</h3>
      <p>
        Inside the class, use <code>self::CONSTANT_NAME</code> to access the constant:
      </p>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        {`<?php
class Goodbye {
  const LEAVING_MESSAGE = "Thank you for visiting W3Schools.com!";

  public function byebye() {
    echo self::LEAVING_MESSAGE;
  }
}

$goodbye = new Goodbye();
$goodbye->byebye();
?>`}
      </pre>

      <p className="mt-4">
        Class constants are perfect for values that are fixed and should remain the same for all instances of the class.
      </p>
    </div>
  );
};

export default PHPOOPClassConstants;
