// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaUser, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
// import LoginSignup from "./LoginSignup";

// interface NavbarProps {
//   darkMode: boolean;
//   setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "Tutorials", path: "/about" },
//     { name: "Practice", path: "/practice" },
//     // { name: "Courses", path: "/courses" },
//     { name: "Careers", path: "/careers" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* Navbar */}
//       <div className="absolute top-0 left-0 w-full z-20 ">
//         <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-20 py-4 sm:py-6 ">
//           {/* LEFT CODES */}
//           <h1 className="text-xl sm:text-2xl font-bold">
//            <a href="/" className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
//             <span style={{ color: "#6334B9" }}>Amoha</span>{" "}
//             <span className={`${darkMode ? "text-white" : "text-black"}`}>Codes</span>
//            </a>
//           </h1>

//          {/* Desktop Links */}
//           <div className="hidden md:flex flex-1 justify-center items-center">
//           <ul className="flex flex-wrap gap-4 lg:gap-6 font-inter text-base lg:text-lg">
//             {links.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   to={link.path}
//                   className={`cursor-pointer transition-colors duration-300 
//                     ${darkMode 
//                       ? "text-white hover:text-[#6334B9]"  // Dark mode: white → purple
//                       : "text-gray-900 hover:text-[#6334B9]" // Light mode: dark gray → purple
//                     }`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>


//           {/* Right Icons */}
//           <div className="hidden md:flex items-center gap-3 lg:gap-4">
//             {/* Dark Mode */}
//             <div
//               className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full flex items-center p-1 cursor-pointer transition-all ${
//                 darkMode ? "bg-yellow-400" : "bg-[#6334B9] "
//               }`}
//               onClick={() => setDarkMode(!darkMode)}
//             >
//               <div
//                 className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-xs transition-transform ${
//                   darkMode
//                     ? "translate-x-5 sm:translate-x-6 bg-yellow-400 text-black"
//                     : "bg-gray-800  text-white"
//                 }`}
//               >
//                 {darkMode ? <FaSun /> : <FaMoon />}
//               </div>
//             </div>

//             {/* User Icon */}
//             <button
//               onClick={() => setModalOpen(true)}
//               className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#6334B9] text-[#6334B9] hover:bg-[#6334B9] hover:text-white transition-colors"
//             >
//               <FaUser size={16} className="sm:size-[18px]" />
//             </button>
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden fixed inset-0 bg-white text-black flex flex-col items-center justify-center space-y-6 z-50 px-6">
//             <button
//               className="absolute top-6 right-6 text-2xl"
//               onClick={() => setMenuOpen(false)}
//             >
//               <FaTimes />
//             </button>
//             <ul className="flex flex-col items-center gap-6 text-lg">
//               {links.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     onClick={() => setMenuOpen(false)}
//                     className="cursor-pointer hover:text-[#6334B9] "
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//       {/* Modal */}
//       {modalOpen && (

//         <><div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6">
//           <div
//             className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <LoginSignup onClose={() => setModalOpen(false)} />
//           </div>
//         </div></>

//       )}
 
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import LoginSignup from "./LoginSignup";


const TOKEN_KEY = "access_token";


interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 Check user login status from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Modal only for login/signup page
  const [modalOpen, setModalOpen] = useState(false);

  // Profile dropdown
  const [profileMenu, setProfileMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 When user logs in (localStorage me item save ho)
//   useEffect(() => {
//     // const user = localStorage.getItem("user");
//     // setIsLoggedIn(!!user);
//     const token = localStorage.getItem("token");
// setIsLoggedIn(!!token);

//   }, [location]);

useEffect(() => {
  const syncAuth = () => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  };

  syncAuth(); // initial load

  window.addEventListener("authChanged", syncAuth);

  return () => {
    window.removeEventListener("authChanged", syncAuth);
  };
}, []);


  // 🔥 Logout
  const handleLogout = () => {
   // localStorage.removeItem("user");
  //  localStorage.removeItem("token");

  //   setIsLoggedIn(false);
  //   navigate("/");
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    window.dispatchEvent(new Event("authChanged"));
    navigate("/");

  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Tutorials", path: "/about" },
    { name: "Practice", path: "/practice" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-20 ">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-20 py-4 sm:py-6 ">

          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-bold">
            <a href="/" className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
              <span style={{ color: "#6334B9" }}>Amoha</span>{" "}
              <span className={`${darkMode ? "text-white" : "text-black"}`}>Codes</span>
            </a>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <ul className="flex flex-wrap gap-4 lg:gap-6 font-inter text-base lg:text-lg">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`cursor-pointer transition-colors duration-300 
                      ${darkMode 
                        ? "text-white hover:text-[#6334B9]"
                        : "text-gray-900 hover:text-[#6334B9]"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">

            {/* Dark Mode Toggle */}
            <div
              className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full flex items-center p-1 cursor-pointer transition-all ${
                darkMode ? "bg-yellow-400" : "bg-[#6334B9]"
              }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <div
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-xs transition-transform ${
                  darkMode
                    ? "translate-x-5 sm:translate-x-6 bg-yellow-400 text-black"
                    : "bg-gray-800 text-white"
                }`}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </div>
            </div>

            {/* 🔥 LOGIN ICON OR PROFILE DROPDOWN */}
            {!isLoggedIn ? (
              // ------------------ NOT LOGGED IN → OPEN LOGIN MODAL ------------------

              
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#6334B9] text-[#6334B9] hover:bg-[#6334B9] hover:text-white transition-colors"
              >
                <FaUser size={16} className="sm:size-[18px]" />
              </button>
            ) : (
              // ------------------ LOGGED IN → SHOW DROPDOWN ------------------
              <div className="relative">
                <button
                  onClick={() => setProfileMenu(!profileMenu)}
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#6334B9] text-[#6334B9] hover:bg-[#6334B9] hover:text-white transition-colors"
                >
                  <FaUser size={16} />
                </button>

                {profileMenu && (
                  <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md py-2 z-50">
                    <button
                      onClick={() => navigate("/profile")}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* LOGIN MODAL */}
      {modalOpen && !isLoggedIn && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6">
          <div
            className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <LoginSignup
              onClose={() => setModalOpen(false)}
              onLoginSuccess={() => {
                setIsLoggedIn(true);
                setModalOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;