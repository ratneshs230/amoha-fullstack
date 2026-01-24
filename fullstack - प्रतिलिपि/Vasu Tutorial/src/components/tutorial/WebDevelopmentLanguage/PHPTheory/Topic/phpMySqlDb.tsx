export default function PhpMySqlTutorial() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">PHP + MySQL Tutorial</h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">1. What is MySQL?</h2>
        <p>
          MySQL is a fast, reliable, open-source database system widely used for
          web applications. It stores data in tables made of rows and columns.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Runs on a server</li>
          <li>Ideal for both small and large applications</li>
          <li>Uses standard SQL</li>
          <li>Free to download and use</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">2. PHP + MySQL Overview</h2>
        <p>
          PHP is used to connect to a MySQL database, run SQL queries, and send
          results back to the browser.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">3. Basic SQL Query</h2>
        <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`SELECT LastName FROM Employees;`}
        </pre>
        <p>This query fetches all last names from the Employees table.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">4. PHP: Connect to MySQL</h2>
        <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";
?>`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">5. PHP: Fetch Data From MySQL</h2>
        <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
{`<?php
$sql = "SELECT id, firstname, lastname FROM Users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "ID: " . $row["id"] . " - Name: " . $row["firstname"] . " " . $row["lastname"] . "<br>";
  }
} else {
  echo "0 results";
}
?>`}
        </pre>
      </section>
    </div>
  );
}