import React from "react";

const PhpFormHandling: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        PHP Form Handling
      </h1>

      <p className="leading-relaxed mb-4">
        PHP forms ke through user input collect kiya ja sakta hai using two
        superglobals: <strong>$_GET</strong> and <strong>$_POST</strong>.
      </p>

      {/* Simple HTML Form */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">PHP - A Simple HTML Form</h2>

      <p className="leading-relaxed mb-4">
        Yeh example ek simple HTML form show karta hai jisme name aur email
        input hai:
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-inner text-sm mb-6">
        <pre className="font-mono text-black dark:text-gray-200">
{`<html>
<body>

<form action="welcome.php" method="POST">
  Name: <input type="text" name="name"><br>
  E-mail: <input type="text" name="email"><br>
  <input type="submit">
</form>

</body>
</html>`}
        </pre>
      </div>

      <p className="leading-relaxed mb-4">
        Form submit karne par data <strong>welcome.php</strong> me POST method
        ke through send hota hai.
      </p>

      {/* welcome.php */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">welcome.php Example</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-inner text-sm mb-6">
        <pre className="font-mono text-black dark:text-gray-200">
{`<html>
<body>

Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

</body>
</html>`}
        </pre>
      </div>

      {/* GET Example */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Same Example Using GET</h2>

      <p className="leading-relaxed mb-4">
        Yahi example GET method ke saath:
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-inner text-sm mb-6">
        <pre className="font-mono text-black dark:text-gray-200">
{`<form action="welcome_get.php" method="GET">
  Name: <input type="text" name="name"><br>
  E-mail: <input type="text" name="email"><br>
  <input type="submit">
</form>`}
        </pre>
      </div>

      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">welcome_get.php</h3>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-inner text-sm mb-6">
        <pre className="font-mono text-black dark:text-gray-200">
{`<html>
<body>

Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?>

</body>
</html>`}
        </pre>
      </div>

      {/* Security Note */}
      <p className="leading-relaxed mb-4">
        ⚠️ <strong>Note:</strong> Yeh examples validation include nahi karte.
        Real applications me form validation bahut important hoti hai.
      </p>

      {/* GET vs POST */}
      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">GET vs POST</h2>

      <p className="leading-relaxed mb-4">
        GET aur POST dono associative arrays create karte hain jaha keys input
        names aur values user inputs hoti hain.
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
        <li>
          <strong>$_GET</strong> – URL parameters se data receive karta hai.
        </li>
        <li>
          <strong>$_POST</strong> – HTTP POST method se data receive karta hai.
        </li>
      </ul>

      {/* When to use GET */}
      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">When to use GET?</h3>
      <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
        <li>Data URL me visible hota hai</li>
        <li>Bookmark ho sakta hai</li>
        <li>~2000 chars limit hoti hai</li>
        <li>Sensitive info ke liye kabhi use nahi karna</li>
      </ul>

      {/* When to use POST */}
      <h3 className="text-xl font-semibold mt-6 text-gray-800 dark:text-gray-100">When to use POST?</h3>
      <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
        <li>Data URL me visible nahi hota</li>
        <li>No size limit</li>
        <li>File upload support</li>
        <li>Safer for sensitive data</li>
      </ul>

      <p className="leading-relaxed mb-4">
        Developers mostly <strong>POST</strong> prefer karte hain form-data
        ke liye.
      </p>
    </div>
  );
};

export default PhpFormHandling;
