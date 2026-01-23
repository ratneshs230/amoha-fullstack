import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import signupImage from "../assets/signuplogo.png";
import { API } from "../api";   // ✅ Correct axios instance



const TOKEN_KEY = "access_token";


interface LoginSignupProps {
  onClose: () => void;
  onLoginSuccess: () => void;   // 🔥 ADD THIS
}

const LoginSignup: React.FC<LoginSignupProps> = ({ onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  // ✅ Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
//   useEffect(() => {
//   const token = localStorage.getItem("token");
//   setIsLogin(!!token);
// }, [location]);
  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    setIsLogin(!!token);
  }, []);










////////face


  // ✅ Signup / Login API Calls
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // ✅ LOGIN API CALL
        // const res = await API.post("/login", {
        //   email: formData.email,
        //   password: formData.password,
        // });
        const params = new URLSearchParams();
        params.append("username", formData.email);   // 🔥 email → username
        params.append("password", formData.password);

        const res = await API.post("/login", params, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });


        alert("Login successful ✅");
        console.log("Token:", res.data.access_token);
        console.log("Login response:", res.data);

        localStorage.setItem(TOKEN_KEY, res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        window.dispatchEvent(new Event("authChanged"));
        onLoginSuccess();


        onClose();
        navigate("/profile");
      } else {
        // ✅ SIGNUP API CALL
        const res = await API.post("/register", {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
        });

        alert("Account created ✅");
        console.log("User:", res.data);
        try {
        //   if (res.data.access_token) localStorage.setItem("token", res.data.access_token);
        //   localStorage.setItem("user", JSON.stringify(res.data.user || res.data));
        //   window.dispatchEvent(new Event("authChanged"));
          
        // }
          if (res.data.access_token) {
            localStorage.setItem(TOKEN_KEY, res.data.access_token);
          }

        }catch (e) {
          console.warn("Failed to persist signup data", e);
        }
        onClose();
        navigate("/profile");
      }

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      });
    } catch (error: any) {
      if (error.response?.data?.detail) {
        alert(error.response.data.detail);
      } else {
        alert("Something went wrong");
      }
    }
  };

  // ✅ Toggle Between Login & Signup
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-100 rounded-2xl shadow-lg overflow-hidden p-6 max-w-5xl mx-auto relative">

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
      >
        X
      </button>

      <div className="flex flex-col md:flex-row gap-6">

        {/* LEFT */}
        <div
          className="hidden md:flex md:w-1/2 flex-col justify-center items-center text-white p-6 rounded-lg"
          style={{ backgroundImage: "linear-gradient(to bottom right, #6d28d9, #5b21b6)" }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            {isLogin ? "Welcome Back!" : "Stay on top of time tracking"}
          </h2>
          <p className="mb-4 text-center">
            {isLogin ? "Login to continue" : "Create a new account"}
          </p>

          <img src={signupImage} className="max-h-48 mb-4" />
          <button
            onClick={toggleForm}
            className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-[#6334B9] transition"
          >
            {isLogin ? "Create Account" : "Login"}
          </button>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-4">

          <h2 className="text-2xl font-bold mb-6 text-center">
            {isLogin ? "Login" : "Create Account"}
          </h2>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">

            {!isLogin && (
              <>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="p-3 rounded-lg border"
                />

                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="p-3 rounded-lg border"
                />
              </>
            )}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 rounded-lg border"
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="p-3 rounded-lg border"
            />

            <button
              type="submit"
              className="bg-black text-white py-2 rounded-lg hover:bg-gray-800"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default LoginSignup;



// /////add new

// import React, { useState } from "react";
// import { FaFacebook } from "react-icons/fa";
// import signupImage from "../assets/signuplogo.png";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// ///import { useNavigate } from "react-router-dom"; // ✅ Add this line

 




// interface LoginSignupProps {
//   onClose: () => void;
// }

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

// const LoginSignup: React.FC<LoginSignupProps> = ({ onClose }) => {
//   const [isLogin, setIsLogin] = useState<boolean>(false);
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate(); // ✅ declare this


//   // ✅ Handle Input Change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Signup / Login API Calls
//   // const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();

//   //   try {
//   //     if (isLogin) {
//   //       // ✅ LOGIN API CALL
//   //       //  const res = await axios.post("/login", {
//   //       const res = await axios.post("http://127.0.0.1:8000/login", {

//   //         email: formData.email,
//   //         password: formData.password,
          
//   //       });



//   //       // Token store in localStorage
//   //       localStorage.setItem("token", res.data.access_token);

//   //       alert("Login successful!");
//   //       console.log("Token:", res.data.access_token);
       
//   //     } else {
//   //       // ✅ SIGNUP API CALL
//   //       // const res = await axios.post("/signup", {
//   //       const res = await axios.post("http://127.0.0.1:8000/register", {

//   //         first_name: formData.firstName,
//   //         last_name: formData.lastName,
//   //         email: formData.email,
//   //         password: formData.password,
//   //       });

//   //       alert("Account created successfully!");
//   //       console.log("User:", res.data);
//   //     }

//   //     // Reset form
//   //     setFormData({ firstName: "", lastName: "", email: "", password: "" });
//   //   } catch (error: any) {
//   //     if (error.response && error.response.data.detail) {
//   //       alert(error.response.data.detail); // 👈 e.g. "This email already exists"
//   //     } else {
//   //       alert("Something went wrong, please try again.");
//   //     }
//   //   }
//   // };


//   //add new
// const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   try {
//     if (isLogin) {
//       // ✅ LOGIN API CALL
//       const res = await axios.post("http://127.0.0.1:8000/login", {
//         email: formData.email,
//         password: formData.password,
//       });

//       // ✅ Token store in localStorage
//       localStorage.setItem("token", res.data.access_token);

//       alert("Login successful!");

//       // ✅ Redirect to Profile Page
//       navigate("/profile");
//     } else {
//       // ✅ SIGNUP API CALL
//       const res = await axios.post("http://127.0.0.1:8000/register", {
//         first_name: formData.firstName,
//         last_name: formData.lastName,
//         email: formData.email,
//         password: formData.password,
//       });

//       alert("Account created successfully!");
//       console.log("User:", res.data);

//       // ✅ After signup, switch to login form
//       setIsLogin(true);
//     }

//     // ✅ Reset Form
//     setFormData({ firstName: "", lastName: "", email: "", password: "" });
//   } catch (error: any) {
//     if (error.response && error.response.data.detail) {
//       alert(error.response.data.detail);
//     } else {
//       alert("Something went wrong, please try again.");
//     }
//   }
// };




//   //add new

//   // ✅ Toggle Between Login & Signup
//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//     setFormData({ firstName: "", lastName: "", email: "", password: "" });
//   };

//   return (
//     <div className="bg-white dark:bg-gray-100 rounded-2xl shadow-lg overflow-hidden p-6 relative max-w-5xl mx-auto">
//       {/* Close Button */}
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer transition"
//       >
//         X
//       </button>

//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Left Image / Info */}
//         <div
//           className="hidden md:flex md:w-1/2 flex-col justify-center items-center text-white p-6 rounded-lg transition-all duration-300"
//           style={{
//             backgroundImage: "linear-gradient(to bottom right, #6d28d9, #5b21b6)",
//           }}
//         >
//           <h2 className="text-3xl font-bold mb-4 text-center">
//             {isLogin ? "Welcome Back!" : "Stay on top of time tracking"}
//           </h2>
//           <p className="mb-4 text-center">
//             {isLogin
//               ? "Login with your credentials to continue."
//               : "Create a new account to get started."}
//           </p>
//           <img src={signupImage} alt="Illustration" className="max-h-48 mb-4" />
//           <button
//             onClick={toggleForm}
//             className="mt-4 px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-[#6334B9] transition transform hover:scale-105 cursor-pointer"
//           >
//             {isLogin ? "Create Account" : "Login"}
//           </button>
//         </div>

//         {/* Right Form */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
//           <h2 className="text-2xl font-bold mb-6 text-center">
//             {isLogin ? "Login to your Account" : "Create Account"}
//           </h2>

//          {/* ✅ FORM START */}
//           <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
//             {!isLogin && (
//               <>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="First Name"
//                   autoComplete="off"
//                   className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6334B9]"
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Last Name"
//                   autoComplete="off"
//                   className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6334B9]"
//                 />
//               </>
//             )}

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               autoComplete="off"
//               className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6334B9]"
//             />
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               autoComplete="new-password"
//               className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6334B9]"
//             />

//             <button
//               type="submit"
//               className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition transform hover:scale-105 cursor-pointer"
//             >
//               {isLogin ? "Login" : "Create Account"}
//             </button>
//           </form>
//           {/* ✅ FORM END */}


//           {/* Divider */}
//           <div className="flex items-center justify-center my-6 relative">
//             <span className="absolute left-0 w-full border-t border-gray-300"></span>
//             <span className="relative px-4 text-gray-500 bg-white">or</span>
//           </div>

//           {/* Social buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transform hover:scale-105 cursor-pointer transition">
//               <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
//                 <path
//                   fill="#4285F4"
//                   d="M533.5 278.4c0-17.5-1.6-34.5-4.6-51H272v96.9h146.9c-6.3 34-25.3 62.8-54 82.1v68.1h87.2c50.9-46.9 80.4-115.9 80.4-196.1z"
//                 />
//                 <path
//                   fill="#34A853"
//                   d="M272 544.3c73.4 0 134.9-24.3 179.9-65.8l-87.2-68.1c-24.2 16.2-55.3 25.8-92.7 25.8-71 0-131.1-47.9-152.6-112.5H31.1v70.9C75.5 477.8 167.4 544.3 272 544.3z"
//                 />
//                 <path
//                   fill="#FBBC05"
//                   d="M119.4 319.7c-5.4-16.1-8.5-33.2-8.5-50.7s3.1-34.6 8.5-50.7V147.4H31.1c-18.6 37.3-29.1 79.1-29.1 123s10.5 85.7 29.1 123l88.3-73.7z"
//                 />
//                 <path
//                   fill="#EA4335"
//                   d="M272 107.3c39.9 0 75.7 13.7 104 40.7l78.1-78.1C406.7 24.3 345.2 0 272 0 167.4 0 75.5 66.5 31.1 162.3l88.3 70.9c21.5-64.6 81.6-112.5 152.6-112.5z"
//                 />
//               </svg>
//               Google
//             </button>
//             <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transform hover:scale-105 cursor-pointer transition">
//               <FaFacebook className="text-blue-600" /> Facebook
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import signupImage from "../assets/signuplogo.png";
// import { API } from "../api"; // ✅ Axios instance

// interface LoginSignupProps {
//   onClose: () => void;
//   onLoginSuccess: () => void;   // ⭐ ADD THIS
// }


// const LoginSignup: React.FC<LoginSignupProps> = ({ onClose }) => {
//   const [isLogin, setIsLogin] = useState(false);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: "",
//   });

//   // ✅ Input change handler
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Form submit handler
//   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       if (isLogin) {
//         // 🔹 LOGIN
//         const res = await API.post("/login", {
//           email: formData.email,
//           password: formData.password,
//         },
//         { withCredentials: true } // ⭐ IMPORTANT
//       );

//         alert("Login successful ✅");
// //new add
//         await API.post(
//           "/api/save-profile",
//           {
//             name: formData.first_name || "",
//             email: formData.email,
//             address: "Not provided",
//           },
//           { withCredentials: true }
//         );
// //new add

//         // ✅ Store token + user
//         const userData = res.data.user || res.data;
//        // localStorage.setItem("token", res.data.access_token);
//         localStorage.setItem("user", JSON.stringify(userData));

//         // Notify app
//         window.dispatchEvent(new Event("authChanged"));
//         onClose();
//         navigate("/profile");
//       } else {
//         // 🔹 SIGNUP
//         const res = await API.post("/register", formData);
//         alert("Account created ✅");
// //new add
//         await API.post(
//           "/api/save-profile",
//           {
//             name: formData.first_name + " " + formData.last_name,
//             email: formData.email,
//             address: "Not provided",
//           },
//           { withCredentials: true }
//         );
// //new add

//         const userData = res.data.user || res.data;
//         localStorage.setItem("user", JSON.stringify(userData));

//         // Notify app
//         window.dispatchEvent(new Event("authChanged"));
//         onClose();
//         navigate("/profile");
//       }

//       // Reset form
//       setFormData({
//         first_name: "",
//         last_name: "",
//         email: "",
//         password: "",
//       });
//     } catch (error: any) {
//       console.error(error);
//       alert(error.response?.data?.detail || "Something went wrong ❌");
//     }
//   };




  
//   // ✅ Toggle between Login / Signup
//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//     setFormData({ first_name: "", last_name: "", email: "", password: "" });
//   };

// //   return (
// //   <>
// //     {/* COOKIE POPUP */}
// //     {!cookiesAccepted && (
// //       <div className="fixed bottom-4 left-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg flex justify-between items-center">
// //         <span>We use cookies to improve your experience.</span>
// //         <button
// //           onClick={acceptCookies}
// //           className="bg-white text-black px-4 py-2 rounded-lg"
// //         >
// //           Accept
// //         </button>
// //       </div>
// //     )}

// //     {/* 👇 YAHAN SE TUMHARA PURA LOGIN SIGNUP UI START HOTA HAI */}
// //     <div className="bg-white dark:bg-gray-100 rounded-2xl shadow-lg overflow-hidden p-6 max-w-5xl mx-auto relative">
// //       {/* CLOSE BUTTON */}
// //       <button
// //         onClick={onClose}
// //         className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
// //       >
// //         ✕
// //       </button>

// //       {/* ...YOUR COMPLETE LOGIN/SIGNUP UI ... */}
// //     </div>
// //   </>
// // );

    

// // ////cookie


// //     <div className="bg-white dark:bg-gray-100 rounded-2xl shadow-lg overflow-hidden p-6 max-w-5xl mx-auto relative">
// //       {/* ❌ Close Button */}
// //       <button
// //         onClick={onClose}
// //         className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
// //       >
// //         ✕
// //       </button>

// //       <div className="flex flex-col md:flex-row gap-6">
// //         {/* LEFT SIDE */}
// //         <div
// //           className="hidden md:flex md:w-1/2 flex-col justify-center items-center text-white p-6 rounded-lg"
// //           style={{
// //             backgroundImage:
// //               "linear-gradient(to bottom right, #6d28d9, #5b21b6)",
// //           }}
// //         >
// //           <h2 className="text-3xl font-bold mb-4 text-center">
// //             {isLogin ? "Welcome Back!" : "Stay on top of time tracking"}
// //           </h2>
// //           <p className="mb-4 text-center">
// //             {isLogin ? "Login to continue" : "Create a new account"}
// //           </p>
// //           <img src={signupImage} className="max-h-48 mb-4" alt="Signup" />
// //           <button
// //             onClick={toggleForm}
// //             className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-[#6334B9] transition"
// //           >
// //             {isLogin ? "Create Account" : "Login"}
// //           </button>
// //         </div>

// //         {/* RIGHT SIDE (FORM) */}
// //         <div className="w-full md:w-1/2 p-4">
// //           <h2 className="text-2xl font-bold mb-6 text-center">
// //             {isLogin ? "Login" : "Create Account"}
// //           </h2>

// //           <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
// //             {!isLogin && (
// //               <>
// //                 <input
// //                   type="text"
// //                   name="first_name"
// //                   value={formData.first_name}
// //                   onChange={handleChange}
// //                   placeholder="First Name"
// //                   className="p-3 rounded-lg border"
// //                   required
// //                 />
// //                 <input
// //                   type="text"
// //                   name="last_name"
// //                   value={formData.last_name}
// //                   onChange={handleChange}
// //                   placeholder="Last Name"
// //                   className="p-3 rounded-lg border"
// //                   required
// //                 />
// //               </>
// //             )}

// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               placeholder="Email"
// //               className="p-3 rounded-lg border"
// //               required
// //             />

// //             <input
// //               type="password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               placeholder="Password"
// //               className="p-3 rounded-lg border"
// //               required
// //             />

// //             <button
// //               type="submit"
// //               className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
// //             >
// //               {isLogin ? "Login" : "Create Account"}
// //             </button>
// //           </form>

// //           {/* OR LINE */}
// //           <div className="flex items-center my-4">
// //             <hr className="flex-grow border-gray-300" />
// //             <span className="mx-2 text-gray-500">or</span>
// //             <hr className="flex-grow border-gray-300" />
// //           </div>

// //           {/* ✅ Social Login Buttons */}
// //           <div className="flex justify-center gap-4">
// //             <button
// //               type="button"
// //               onClick={() =>
// //              (window.location.href = "http://localhost:8000/login/google")
// //        }

// //               className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
// //             >
// //               <img
// //                 src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_%22G%22_Logo.svg"
// //                 alt="Google"
// //                 className="w-5 h-5"
// //               />
// //               <span>Google</span>
// //             </button>

// //             {/* <button
// //               type="button"
// //               onClick={() =>
// //                 (window.location.href = "http://localhost:8000/auth/facebook")
// //               }
// //               className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
// //             >
// //               <img
// //                 src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
// //                 alt="Facebook"
// //                 className="w-5 h-5"
// //               />
// //               <span>Facebook</span>
// //             </button> */}

// //             <button
// //   type="button"
// //   onClick={() =>
// //     (window.location.href = "http://localhost:8000/login/facebook")
// //   }
// //   className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
// // >
// //   <img
// //     src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
// //     alt="Facebook"
// //     className="w-5 h-5"
// //   />
// //   <span>Facebook</span>
// // </button>

// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// return (
//   <>
//     {/* COOKIE POPUP
//     {!cookiesAccepted && (
//       <div className="fixed bottom-4 left-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg flex justify-between items-center z-[9999]">
//         <span>We use cookies to improve your experience.</span>

//         <div className="flex gap-2">
//           <button
//             onClick={acceptCookies}
//             className="bg-white text-black px-4 py-2 rounded-lg"
//           >
//             Accept
//           </button>

//           <button
//             onClick={() => setCookiesAccepted(true)}
//             className="bg-red-500 text-white px-4 py-2 rounded-lg"
//           >
//             Reject
//           </button>
//         </div>
//       </div>
//     )} */}

//     {/* MAIN LOGIN/SIGNUP UI */}
//     <div className="bg-white dark:bg-gray-100 rounded-2xl shadow-lg overflow-hidden p-6 max-w-5xl mx-auto relative">
      
//       {/* CLOSE BUTTON */}
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//       >
//         ✕
//       </button>

//       <div className="flex flex-col md:flex-row gap-6">
        
//         {/* LEFT SIDE */}
//         <div
//           className="hidden md:flex md:w-1/2 flex-col justify-center items-center text-white p-6 rounded-lg"
//           style={{
//             backgroundImage:
//               "linear-gradient(to bottom right, #6d28d9, #5b21b6)",
//           }}
//         >
//           <h2 className="text-3xl font-bold mb-4 text-center">
//             {isLogin ? "Welcome Back!" : "Stay on top of time tracking"}
//           </h2>
//           <p className="mb-4 text-center">
//             {isLogin ? "Login to continue" : "Create a new account"}
//           </p>
//           <img src={signupImage} className="max-h-48 mb-4" alt="Signup" />
//           <button
//             onClick={toggleForm}
//             className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-[#6334B9] transition"
//           >
//             {isLogin ? "Create Account" : "Login"}
//           </button>
//         </div>

//         {/* RIGHT SIDE (FORM) */}
//         <div className="w-full md:w-1/2 p-4">
//           <h2 className="text-2xl font-bold mb-6 text-center">
//             {isLogin ? "Login" : "Create Account"}
//           </h2>

//           <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
//             {!isLogin && (
//               <>
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   placeholder="First Name"
//                   className="p-3 rounded-lg border"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   placeholder="Last Name"
//                   className="p-3 rounded-lg border"
//                   required
//                 />
//               </>
//             )}

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="p-3 rounded-lg border"
//               required
//             />

//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               className="p-3 rounded-lg border"
//               required
//             />

//             <button
//               type="submit"
//               className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
//             >
//               {isLogin ? "Login" : "Create Account"}
//             </button>
//           </form>

//           {/* OR LINE */}
//           <div className="flex items-center my-4">
//             <hr className="flex-grow border-gray-300" />
//             <span className="mx-2 text-gray-500">or</span>
//             <hr className="flex-grow border-gray-300" />
//           </div>

//           {/* SOCIAL LOGIN */}
//           <div className="flex justify-center gap-4">
//             <button
//               type="button"
//               onClick={() =>
//                 (window.location.href = "http://localhost:8000/login/google")
//               }
//               className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
//             >
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_%22G%22_Logo.svg"
//                 alt="Google"
//                 className="w-5 h-5"
//               />
//               <span>Google</span>
//             </button>

//             <button
//               type="button"
//               onClick={() =>
//                 (window.location.href = "http://localhost:8000/login/facebook")
//               }
//               className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
//             >
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
//                 alt="Facebook"
//                 className="w-5 h-5"
//               />
//               <span>Facebook</span>
//             </button>
//           </div>
//         </div>
//       </div>

//     </div>
//   </>
// );
// };
// export default LoginSignup;


// import React, { useState } from "react";
// import axios from "axios";

// interface LoginSignupProps {
//   onClose: () => void;
//   onLoginSuccess: () => void;
// }

// const LoginSignup: React.FC<LoginSignupProps> = ({ onClose }) => {
//   const [isLogin, setIsLogin] = useState(true);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ REAL SUBMIT FUNCTION
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       if (isLogin) {
//         // 🔐 LOGIN API
//         const res = await axios.post(
//           "http://127.0.0.1:8000/login",
//           new URLSearchParams({
//             username: formData.email,
//             password: formData.password,
//           }),
//           {
//             headers: {
//               "Content-Type": "application/x-www-form-urlencoded",
//             },
//           }
//         );

//         // ✅ SAVE LOGIN
//         localStorage.setItem("token", res.data.access_token);
//         onLoginSuccess();
//         // alert("Login successful");
//         onClose();
//       } else {
//         // 📝 SIGNUP API
//         await axios.post("http://127.0.0.1:8000/signup", {
//           first_name: formData.firstName,
//           last_name: formData.lastName,
//           email: formData.email,
//           password: formData.password,
//         });

//         alert("Signup successful, please login");
//         setIsLogin(true);
//       }
//     } catch (err: any) {
//       alert(err.response?.data?.detail || "Something went wrong");
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto relative">
//       <button onClick={onClose} className="absolute top-3 right-3">X</button>

//       <h2 className="text-2xl font-bold text-center mb-6">
//         {isLogin ? "Login" : "Create Account"}
//       </h2>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         {!isLogin && (
//           <>
//             <input
//               name="firstName"
//               placeholder="First Name"
//               onChange={handleChange}
//               className="p-2 border rounded"
//             />
//             <input
//               name="lastName"
//               placeholder="Last Name"
//               onChange={handleChange}
//               className="p-2 border rounded"
//             />
//           </>
//         )}

//         <input
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           className="p-2 border rounded"
//         />

//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={handleChange}
//           className="p-2 border rounded"
//         />

//         <button className="bg-black text-white py-2 rounded">
//           {isLogin ? "Login" : "Signup"}
//         </button>
//       </form>

//       <p
//         className="text-center mt-4 cursor-pointer text-blue-600"
//         onClick={() => setIsLogin(!isLogin)}
//       >
//         {isLogin ? "Create account" : "Already have account? Login"}
//       </p>
//     </div>
//   );
// };

// export default LoginSignup;
// function onLoginSuccess() {
//     throw new Error("Function not implemented.");
// }


// import React, { useState } from "react";
// import { FaFacebook } from "react-icons/fa";
// import signupImage from "../assets/signuplogo.png";

// interface LoginSignupProps {
//   onClose: () => void;
//   onLoginSuccess: () => void;   // 🔥 ADD THIS
// }


// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

// const LoginSignup: React.FC<LoginSignupProps> = ({ onClose, onLoginSuccess }) => {
//   const [isLogin, setIsLogin] = useState<boolean>(false);
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   if (!isLogin) {
//     alert("Abhi sirf LOGIN kaam karwa rahe hain");
//     return;
//   }

//   try {
//     const response = await fetch("http://127.0.0.1:8000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: new URLSearchParams({
//         username: formData.email,
//         password: formData.password,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Login failed");
//     }

//     const data = await response.json();

//     // 🔑 TOKEN SAVE
//     localStorage.setItem("token", data.access_token);

//    // alert("Login successful");

//     onClose(); // modal close
//   } catch (error) {
//     alert("Invalid email or password");
//   }
// };



//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//     setFormData({ firstName: "", lastName: "", email: "", password: "" });
//   };

//   return (
//     <div className="bg-white dark:bg-gray-100 rounded-2xl shadow-lg overflow-hidden p-6 relative max-w-5xl mx-auto">
//       {/* Close Button */}
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer transition"
//       >
//         X
//       </button>

//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Left Image / Info */}
//         <div
//           className="hidden md:flex md:w-1/2 flex-col justify-center items-center text-white p-6 rounded-lg transition-all duration-300"
//           style={{
//             backgroundImage: "linear-gradient(to bottom right, #6d28d9, #5b21b6)",
//           }}
//         >
//           <h2 className="text-3xl font-bold mb-4 text-center">
//             {isLogin ? "Welcome Back!" : "Stay on top of time tracking"}
//           </h2>
//           <p className="mb-4 text-center">
//             {isLogin
//               ? "Login with your credentials to continue."
//               : "Create a new account to get started."}
//           </p>
//           <img src={signupImage} alt="Illustration" className="max-h-48 mb-4" />
//           <button
//             onClick={toggleForm}
//             className="mt-4 px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-[#6334B9] transition transform hover:scale-105 cursor-pointer"
//           >
//             {isLogin ? "Create Account" : "Login"}
//           </button>
//         </div>

//         {/* Right Form */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
//           <h2 className="text-2xl font-bold mb-6 text-center">
//             {isLogin ? "Login to your Account" : "Create Account"}
//           </h2>

//           <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
//             {!isLogin && (
//               <>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="First Name"
//                   autoComplete="off"
//                   className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6334B9]"
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Last Name"
//                   autoComplete="off"
//                   className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6334B9]"
//                 />
//               </>
//             )}

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               autoComplete="off"
//               className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6334B9]"
//             />
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               autoComplete="new-password"
//               className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6334B9]"
//             />

//             <button
//               type="submit"
//               className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition transform hover:scale-105 cursor-pointer"
//             >
//               {isLogin ? "Login" : "Create Account"}
//             </button>
//           </form>

//           {/* Or divider */}
//           <div className="flex items-center justify-center my-6 relative">
//             <span className="absolute left-0 w-full border-t border-gray-300"></span>
//             <span className="relative px-4 text-gray-500 bg-white">or</span>
//           </div>

//           {/* Social buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transform hover:scale-105 cursor-pointer transition">
//               <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
//                 <path
//                   fill="#4285F4"
//                   d="M533.5 278.4c0-17.5-1.6-34.5-4.6-51H272v96.9h146.9c-6.3 34-25.3 62.8-54 82.1v68.1h87.2c50.9-46.9 80.4-115.9 80.4-196.1z"
//                 />
//                 <path
//                   fill="#34A853"
//                   d="M272 544.3c73.4 0 134.9-24.3 179.9-65.8l-87.2-68.1c-24.2 16.2-55.3 25.8-92.7 25.8-71 0-131.1-47.9-152.6-112.5H31.1v70.9C75.5 477.8 167.4 544.3 272 544.3z"
//                 />
//                 <path
//                   fill="#FBBC05"
//                   d="M119.4 319.7c-5.4-16.1-8.5-33.2-8.5-50.7s3.1-34.6 8.5-50.7V147.4H31.1c-18.6 37.3-29.1 79.1-29.1 123s10.5 85.7 29.1 123l88.3-73.7z"
//                 />
//                 <path
//                   fill="#EA4335"
//                   d="M272 107.3c39.9 0 75.7 13.7 104 40.7l78.1-78.1C406.7 24.3 345.2 0 272 0 167.4 0 75.5 66.5 31.1 162.3l88.3 70.9c21.5-64.6 81.6-112.5 152.6-112.5z"
//                 />
//               </svg>
//               Google
//             </button>
//             <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transform hover:scale-105 cursor-pointer transition">
//               <FaFacebook className="text-blue-600" /> Facebook
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


