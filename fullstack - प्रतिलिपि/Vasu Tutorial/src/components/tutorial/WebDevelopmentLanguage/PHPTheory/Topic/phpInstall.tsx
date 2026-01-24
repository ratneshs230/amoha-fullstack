import React from "react";

const PHPInstallation: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PHP Installation</h1>

      {/* What Do I Need? */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">What Do I Need?</h2>
      <p className="mt-2">To start using PHP, you can choose one of the following options:</p>

      <ul className="list-disc ml-6 mt-2">
        <li>Find a web host with PHP and MySQL support</li>
        <li>Install a web server, PHP, and MySQL on your own computer</li>
      </ul>

      {/* Use a Web Host */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">
        Use a Web Host With PHP Support
      </h2>

      <p className="mt-2">
        If your hosting server already supports PHP, you don't need to install
        anything. Just create your <strong>.php</strong> files and upload them
        to the server. PHP will be processed automatically.
      </p>

      <p className="mt-2">
        Since PHP is free and widely used, most hosting providers support PHP by
        default.
      </p>

      {/* Set Up PHP on PC */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">
        Set Up PHP on Your Own PC
      </h2>

      <p className="mt-2">If your server or PC does not support PHP, you need to install:</p>

      <ul className="list-disc ml-6 mt-2">
        <li>A web server</li>
        <li>PHP</li>
        <li>A database (like MySQL)</li>
      </ul>

      <p className="mt-2">
        The official PHP installation documentation is available at:
      </p>

      <a
        href="https://www.php.net/manual/en/install.php"
        target="_blank"
        className="text-blue-600 dark:text-blue-400 underline"
      >
        php.net/manual/en/install.php
      </a>

      {/* Online Compiler */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Online Compiler / Editor</h2>

      <p className="mt-2">
        You can practice PHP online using w3schools' PHP compiler. You can edit
        the code and see the output instantly.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<?php
$txt = "PHP";
echo "I love $txt!";
?>`}</code>
      </pre>

      <p className="mt-2 font-semibold">Output:</p>
      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-2 overflow-x-auto">
        <code className="text-sm">{`I love PHP!`}</code>
      </pre>

      {/* PHP Version */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP Version</h2>

      <p className="mt-2">You can check your PHP version using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">phpversion()</code> function:</p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`echo phpversion();`}</code>
      </pre>
    </div>
  );
};

export default PHPInstallation;
