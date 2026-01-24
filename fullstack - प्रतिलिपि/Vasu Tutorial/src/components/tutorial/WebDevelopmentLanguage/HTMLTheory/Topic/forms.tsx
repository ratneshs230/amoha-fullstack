import React from "react";

const HTMLForms: React.FC = () => {
  return (
    <div className="p-6 leading-7 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">HTML Forms</h1>

      <p className="mt-2">
        An HTML form is used to collect user input. The user input is most often sent to a server for processing. Forms are one of the most important parts of web development as they enable user interaction with websites.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The &lt;form&gt; Element</h2>
      <p className="mt-2">
        The HTML <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;form&gt;</code> element is used to create an HTML form for user input:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<form>
  <!-- form elements -->
</form>`}</code>
      </pre>

      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;form&gt;</code> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The &lt;input&gt; Element</h2>
      <p className="mt-2">
        The HTML <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;input&gt;</code> element is the most used form element. An <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;input&gt;</code> element can be displayed in many ways, depending on the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">type</code> attribute.
      </p>

      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Type</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;input type="text"&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Displays a single-line text input field</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;input type="radio"&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Displays a radio button (for selecting one of many choices)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;input type="checkbox"&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Displays a checkbox (for selecting zero or more choices)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;input type="submit"&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Displays a submit button (for submitting the form)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;input type="button"&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Displays a clickable button</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Text Fields</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;input type="text"&gt;</code> defines a single-line input field for text input:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>`}</code>
      </pre>

      <div className="mt-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded">
        <p className="font-semibold mb-2">Output:</p>
        <form>
          <label className="block">First name:</label>
          <input type="text" className="border border-gray-300 dark:border-gray-600 p-1 mb-2 bg-white dark:bg-gray-700" />
          <label className="block">Last name:</label>
          <input type="text" className="border border-gray-300 dark:border-gray-600 p-1 bg-white dark:bg-gray-700" />
        </form>
      </div>

      <p className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 rounded">
        <strong>Note:</strong> The form itself is not visible. Also note that the default width of an input field is 20 characters.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The &lt;label&gt; Element</h2>
      <p className="mt-2">
        Notice the use of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;label&gt;</code> element in the example above. The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;label&gt;</code> tag defines a label for many form elements.
      </p>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;label&gt;</code> element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focuses on the input element.
      </p>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">for</code> attribute of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;label&gt;</code> tag should be equal to the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">id</code> attribute of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;input&gt;</code> element to bind them together.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Radio Buttons</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;input type="radio"&gt;</code> defines a radio button. Radio buttons let a user select ONE of a limited number of choices:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<form>
  <p>Choose your favorite Web language:</p>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Checkboxes</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;input type="checkbox"&gt;</code> defines a checkbox. Checkboxes let a user select ZERO or MORE options of a limited number of choices:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The Submit Button</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;input type="submit"&gt;</code> defines a button for submitting the form data to a form-handler. The form-handler is typically a file on the server with a script for processing input data.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The Name Attribute for &lt;input&gt;</h2>
      <p className="mt-2">
        Notice that each input field must have a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">name</code> attribute to be submitted. If the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">name</code> attribute is omitted, the value of the input field will not be sent at all.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Form Attributes</h2>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">The Action Attribute</h3>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">action</code> attribute defines the action to be performed when the form is submitted. Usually, the form data is sent to a file on the server when the user clicks on the submit button.
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<form action="/action_page.php">
  ...
</form>`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">The Target Attribute</h3>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">target</code> attribute specifies where to display the response that is received after submitting the form.
      </p>

      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Value</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>_blank</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">The response is displayed in a new window or tab</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>_self</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">The response is displayed in the current window (default)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>_parent</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">The response is displayed in the parent frame</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>_top</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">The response is displayed in the full body of the window</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">The Method Attribute</h3>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">method</code> attribute specifies the HTTP method to be used when submitting the form data. The form-data can be sent as URL variables (with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">method="get"</code>) or as HTTP post transaction (with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">method="post"</code>).
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!-- GET method -->
<form action="/action_page.php" method="get">
  ...
</form>

<!-- POST method -->
<form action="/action_page.php" method="post">
  ...
</form>`}</code>
      </pre>

      <h4 className="text-lg font-semibold mt-4 text-gray-800 dark:text-gray-100">When to Use GET:</h4>
      <ul className="list-disc ml-6 mt-2">
        <li>The submitted form data will be visible in the page address field</li>
        <li>GET is suitable for non-sensitive data, like search queries</li>
        <li>GET has size limitations (about 2000 characters)</li>
        <li>GET requests can be bookmarked</li>
      </ul>

      <h4 className="text-lg font-semibold mt-4 text-gray-800 dark:text-gray-100">When to Use POST:</h4>
      <ul className="list-disc ml-6 mt-2">
        <li>The submitted form data is NOT displayed in the page address field</li>
        <li>POST is suitable for sensitive data (passwords, personal information)</li>
        <li>POST has no size limitations</li>
        <li>POST requests cannot be bookmarked</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The &lt;select&gt; Element</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;select&gt;</code> element defines a drop-down list:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat" selected>Fiat</option>
  <option value="audi">Audi</option>
</select>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The &lt;textarea&gt; Element</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;textarea&gt;</code> element defines a multi-line input field:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">The &lt;button&gt; Element</h2>
      <p className="mt-2">
        The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;button&gt;</code> element defines a clickable button:
      </p>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<button type="button" onclick="alert('Hello World!')">Click Me!</button>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">Complete Form Example</h2>

      <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded mt-4 overflow-x-auto">
        <code className="text-sm">{`<!DOCTYPE html>
<html>
<head>
<style>
form {
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-top: 10px;
}

input[type="text"],
input[type="email"],
input[type="password"],
textarea,
select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
</head>
<body>

<h2>Registration Form</h2>

<form action="/submit_form.php" method="post">
  <label for="fname">First Name:</label>
  <input type="text" id="fname" name="firstname" placeholder="Your first name" required>

  <label for="lname">Last Name:</label>
  <input type="text" id="lname" name="lastname" placeholder="Your last name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Your email" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="usa">USA</option>
    <option value="canada">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="india">India</option>
  </select>

  <label>Gender:</label>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male" style="display:inline;">Male</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female" style="display:inline;">Female</label>

  <label for="bio">Bio:</label>
  <textarea id="bio" name="bio" rows="4" placeholder="Tell us about yourself"></textarea>

  <label>
    <input type="checkbox" name="subscribe" value="yes"> Subscribe to newsletter
  </label>

  <input type="submit" value="Register">
</form>

</body>
</html>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-100">HTML Form Elements Summary</h2>
      <table className="mt-4 w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Tag</th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;form&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines an HTML form for user input</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;input&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines an input control</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;textarea&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a multiline input control</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;label&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a label for an input element</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;fieldset&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Groups related elements in a form</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;legend&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a caption for a fieldset</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;select&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a drop-down list</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;optgroup&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a group of related options</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;option&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines an option in a drop-down list</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;button&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines a clickable button</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;datalist&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Specifies a list of pre-defined options</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-2"><code>&lt;output&gt;</code></td>
            <td className="border border-gray-300 dark:border-gray-600 p-2">Defines the result of a calculation</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HTMLForms;
