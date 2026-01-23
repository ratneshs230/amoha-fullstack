

// // // import React, { useState } from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Footer from  "./components/Footer"
// // // import Algorithm from "./pages/Algorithm"
// // // import ServiceBasedPatternDsa from "./pages/ServiceBasedPatternDSA";
// // // import MainPracticePage from "./pages/MainPracticePage";



// // // const App: React.FC = () => {
// // //   const [darkMode, setDarkMode] = useState(false);

// // //   return (
// // //     <Router>
// // //       {/* Pass darkMode toggle to Navbar */}
// // //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
// // //       {/* <About darkMode={true}/> */}
// // //       <Routes>
// // //         <Route path="/" element={<h1 className="p-6">🏡 Home Page</h1>} />
// // //         <Route path="/algorithm" element={<Algorithm />} />
// // //         {/* <Route path="/allinonedsa" element={<ALLINONEDSA />} /> */}
// // //         {/* <Route path="/blind75" element={<Blind75 darkMode={undefined} />} /> */}
// // //         {/* <Route path="/cp" element={<CP />} /> */}
// // //         {/* <Route path="/cppmodule" element={<CppModules darkMode={undefined} />} /> */}
// // //            {/* <Route path="/mainpractice" element={<MainPractice darkMode={undefined} />} /> */}
// // //         {/* <Route path="/practice" element={<Practice darkMode={undefined} />} /> */}
// // //         <Route path="/practicemainpage" element={<MainPracticePage />} />
// // //         {/* <Route path="/servicebaseddsa" element={<ServiceBasedDSA />} /> */}
// // //         <Route path="/servicebasedpatterndsa" element={<ServiceBasedPatternDsa darkMode={undefined} />} 
        
        
        
// // //         />
      

// // //       </Routes>
// // //       {/* <About darkMode={false}/> */}
// // //       <Footer/>
// // //     </Router>
// // //   );
// // // };

// // // export default App;


// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Footer from  "./components/Footer";
// // import Algorithm from "./pages/Algorithm";
// // import ServiceBasedPatternDsa from "./pages/ServiceBasedPatternDSA";
// // import MainPracticePage from "./pages/MainPracticePage";

// // const App: React.FC = () => {
// //   const [darkMode, setDarkMode] = useState(false);

// //   return (
// //     <Router>
// //       {/* Pass darkMode toggle to Navbar */}
// //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
// //       <Routes>
// //         <Route path="/" element={<h1 className="p-6">Home Page</h1>} />
// //         <Route path="/algorithm" element={<Algorithm />} />
// //         <Route path="/practicemainpage" element={<MainPracticePage />} />
// //         <Route path="/servicebasedpatterndsa" element={<ServiceBasedPatternDsa darkMode={undefined} />} />
// //       </Routes>

// //       <Footer/>
// //     </Router>
// //   );
// // };

// // export default App;


// // Second code edit ********************************
// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // Components
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";

// // // Pages
// // import Home from "./components/Home";
// // import Algorithm from "./pages/Algorithm";
// // import ServiceBasedPatternDsa from "./pages/ServiceBasedPatternDSA";
// // import MainPracticePage from "./pages/MainPracticePage";
// // import About from "./components/About";
// // // Agar future me aur pages add honge, unko bhi yaha import kar sakte ho

// // const App: React.FC = () => {
// //   const [darkMode, setDarkMode] = useState(false);

// //   return (
// //     <Router>
// //       {/* Navbar with darkMode toggle */}
// //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      

// //       {/* Routes */}
// //       <Routes>
// //         <Route path="/" element={<Home darkMode={darkMode} />} />
// //         <Route path="/algorithm" element={<Algorithm darkMode={darkMode} />} />
// //         <Route path="/practicemainpage" element={<MainPracticePage darkMode={darkMode} />} />
// //         <Route
// //           path="/servicebasedpatterndsa"
// //           element={<ServiceBasedPatternDsa darkMode={darkMode} />}
// //         />
// //         {/* Add more routes here as you import more pages */}
// //       </Routes>

// //       {/* Footer */}
// //       <About darkMode={false}/>
// //       <Footer  />
// //     </Router>
// //   );
// // };

// // export default App;

// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./components/About";
// import PracticePage from "./pages/MainPracticePage";
// import Courses from "./pages/Courses";
// import Careers from "./pages/Careers";
// import Contact from "./pages/Contact"

// const App: React.FC = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <Router>
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <Routes>
//         <Route path="/" element={<Home darkMode={darkMode} />} />
//         <Route path="/about" element={<About darkMode={darkMode} />} />
//         <Route path="/practice" element={<PracticePage darkMode={darkMode} />} />
//         <Route path="/courses" element={<Courses  />} />
//         <Route path="/careers" element={<Careers  />} />
//         <Route path="/contact" element={<Contact  />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;




// // // import React, { useState } from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Footer from  "./components/Footer"
// // // import Algorithm from "./pages/Algorithm"
// // // import ServiceBasedPatternDsa from "./pages/ServiceBasedPatternDSA";
// // // import MainPracticePage from "./pages/MainPracticePage";



// // // const App: React.FC = () => {
// // //   const [darkMode, setDarkMode] = useState(false);

// // //   return (
// // //     <Router>
// // //       {/* Pass darkMode toggle to Navbar */}
// // //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
// // //       {/* <About darkMode={true}/> */}
// // //       <Routes>
// // //         <Route path="/" element={<h1 className="p-6">🏡 Home Page</h1>} />
// // //         <Route path="/algorithm" element={<Algorithm />} />
// // //         {/* <Route path="/allinonedsa" element={<ALLINONEDSA />} /> */}
// // //         {/* <Route path="/blind75" element={<Blind75 darkMode={undefined} />} /> */}
// // //         {/* <Route path="/cp" element={<CP />} /> */}
// // //         {/* <Route path="/cppmodule" element={<CppModules darkMode={undefined} />} /> */}
// // //            {/* <Route path="/mainpractice" element={<MainPractice darkMode={undefined} />} /> */}
// // //         {/* <Route path="/practice" element={<Practice darkMode={undefined} />} /> */}
// // //         <Route path="/practicemainpage" element={<MainPracticePage />} />
// // //         {/* <Route path="/servicebaseddsa" element={<ServiceBasedDSA />} /> */}
// // //         <Route path="/servicebasedpatterndsa" element={<ServiceBasedPatternDsa darkMode={undefined} />} 
        
        
        
// // //         />
      

// // //       </Routes>
// // //       {/* <About darkMode={false}/> */}
// // //       <Footer/>
// // //     </Router>
// // //   );
// // // };

// // // export default App;


// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Footer from  "./components/Footer";
// // import Algorithm from "./pages/Algorithm";
// // import ServiceBasedPatternDsa from "./pages/ServiceBasedPatternDSA";
// // import MainPracticePage from "./pages/MainPracticePage";

// // const App: React.FC = () => {
// //   const [darkMode, setDarkMode] = useState(false);

// //   return (
// //     <Router>
// //       {/* Pass darkMode toggle to Navbar */}
// //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
// //       <Routes>
// //         <Route path="/" element={<h1 className="p-6">Home Page</h1>} />
// //         <Route path="/algorithm" element={<Algorithm />} />
// //         <Route path="/practicemainpage" element={<MainPracticePage />} />
// //         <Route path="/servicebasedpatterndsa" element={<ServiceBasedPatternDsa darkMode={undefined} />} />
// //       </Routes>

// //       <Footer/>
// //     </Router>
// //   );
// // };

// // export default App;


// // Second code edit ********************************
// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // Components
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";

// // // Pages
// // import Home from "./components/Home";
// // import Algorithm from "./pages/Algorithm";
// // import ServiceBasedPatternDsa from "./pages/ServiceBasedPatternDSA";
// // import MainPracticePage from "./pages/MainPracticePage";
// // import About from "./components/About";
// // // Agar future me aur pages add honge, unko bhi yaha import kar sakte ho

// // const App: React.FC = () => {
// //   const [darkMode, setDarkMode] = useState(false);

// //   return (
// //     <Router>
// //       {/* Navbar with darkMode toggle */}
// //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      

// //       {/* Routes */}
// //       <Routes>
// //         <Route path="/" element={<Home darkMode={darkMode} />} />
// //         <Route path="/algorithm" element={<Algorithm darkMode={darkMode} />} />
// //         <Route path="/practicemainpage" element={<MainPracticePage darkMode={darkMode} />} />
// //         <Route
// //           path="/servicebasedpatterndsa"
// //           element={<ServiceBasedPatternDsa darkMode={darkMode} />}
// //         />
// //         {/* Add more routes here as you import more pages */}
// //       </Routes>

// //       {/* Footer */}
// //       <About darkMode={false}/>
// //       <Footer  />
// //     </Router>
// //   );
// // };

// // export default App;

// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./components/About";
// import PracticePage from "./pages/MainPracticePage";
// import Courses from "./pages/Courses";
// import Careers from "./pages/Careers";
// import Contact from "./pages/Contact"

// const App: React.FC = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <Router>
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <Routes>
//         <Route path="/" element={<Home darkMode={darkMode} />} />
//         <Route path="/about" element={<About darkMode={darkMode} />} />
//         <Route path="/practice" element={<PracticePage darkMode={darkMode} />} />
//         <Route path="/courses" element={<Courses  />} />
//         <Route path="/careers" element={<Careers  />} />
//         <Route path="/contact" element={<Contact  />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { FacebookProvider } from "@react-oauth/facebook";

import { useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./pages/Homepage";
// import About from "./components/About";
import PracticePage from "./pages/MainPracticePage";
import Courses from "./components/Courses";
import Careers from "./components/Careers";
import Contact from "./components/ContactUs";
import BusinessPartners from "./components/BusineesPartner";
// import { LaunchingSoon } from "./components/LaunchingSoon.tsx";

// Individual practice section pages
// import DSAProblems from "./pages/ServiceBasedPatternDSA";//ye change kiya commit ke time changes
import ServiceBasedDSA from "./pages/ServiceBasedDSA";
import Blind75 from "./pages/Blind75.tsx";
import AllInOneDSA from "./pages/ALLINONEDSA";
import Algorithm from "./pages/Algorithm";
import ServiceBasedPatternDSA from "./pages/ServiceBasedPatternDSA";
import NumbersProblems from "./pages/NumbersProblems";
import ProgramingLang  from "./pages/ProgramingLang.tsx";

import Homepage from "./pages/Homepage";
import Practice from "./pages/Praactice"
import CppTutorial from "./components/tutorial/CPPTheory/CppTutorial";



// IMPORT TUTORIAL SECTION PAGE
// import SdePreparationPage from "./components/tutorial/Exxxtraaaaacode.tsx";
// import SdePreparationPage from "./pages/SdePreparationPage.tsx";
import TutorialPage from "./pages/TutorialPage.tsx";

import SdePreparationComponent from "./components/tutorial/SdePreparationComponent.tsx";
import ComputerScienceCoreSubjects from "./components/tutorial/ComputerScienceCoreSubjects.tsx"
import Programminglanguage from "./components/tutorial/Programminglanguage.tsx";
import WebDevLanguage from "./components/tutorial/WebDevLanguage.tsx";
import MobileDevLanguage from "./components/tutorial/MobileDevLanguage.tsx";
import SystemProgramingPage from "./components/tutorial/SystemProgramingPage.tsx";
import DatabaseLanguagePage from "./components/tutorial/DatabaseLanguagePage.tsx";
import GameDevelopmentpage from "./components/tutorial/GameDevelopmentpage.tsx";
import ScriptingLanguagePage from "./components/tutorial/ScriptingLanguagePage.tsx";

import Exxxtraaaaacode from "./components/tutorial/Exxxtraaaaacode.tsx";
import { LaunchingSoon } from "./components/LaunchingSoon.tsx";
import TrendingTechnologies from "./components/tutorial/TrendingTechnologies.tsx";
import W3School from "./components/tutorial/W3School.tsx";

// Course Page Import
import FullStackCourseMainPage from "./components/Course/FullStack Course/FullStackCourseMainPage.tsx";
import AIMLCourseMainPage from "./components/Course/AI&ML Mastery/AIMLCourseMainPage.tsx";
import CSSCourseMainPage from "./components/Course/CSSCourse/CSSCourseMainPage.tsx";
import DataEngineeringCourseMainPage from "./components/Course/DataEngineeringCourse/DataEngineeringCourseMainPage.tsx";
import AlgorithmCourseMainPage from "./components/Course/DSA algorithmCourse/AlgorithmCourseMainPage.tsx";
import AtoZCourseMainPage from "./components/Course/DSA AtoZCourse copy/AtoZCourseMainPage.tsx";
import NextjsCourseMainPage from "./components/Course/FrontendwithNext.js/NextjsCourseMainPage.tsx";
import ReactCourseMainPage from "./components/Course/FrontendwithReact/ReactCourseMainPage.tsx";
import HTMLCourseMainPage from "./components/Course/HTMLProgramming/HTMLCourseMainPage.tsx";
import JavaCourseMainPage from "./components/Course/JavaCourse.tsx/JavaCourseMainPage.tsx";
import JavascriptCourseMainPage from "./components/Course/JavascriptCourse/JavascriptCourseMainPage.tsx";
import MERNCourseMainPage from "./components/Course/MERNStack Development/MERNCourseMainPage.tsx";
import PythonCourseMainPage from "./components/Course/PythonCourse/PythonCourseMainPage copy.tsx";
import TypescriptCourseMainPage from "./components/Course/TypescriptCourse/TypescriptCourseMainPage.tsx";
import CourseMainPage from "./components/Course/C++Course/CourseMainPage.tsx";
import ExploreAllComponent from "./components/Course/ExploreAllComponent.tsx";
import ComputerTutorial from "./components/ComputerScienceCoreSubject/CoreFoundations/ComputerFundamentals/ComputerTutorial.tsx";
import EngMathTutorial from "./components/ComputerScienceCoreSubject/CoreFoundations/EngineeringMathematics/EngMathTutorial.tsx";
import MathsComputerTutorial from "./components/ComputerScienceCoreSubject/CoreFoundations/MathsForComputerScience/MathsComputerTutorial.tsx";
import NetworksTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/ComputerNetworks/NetworksTutorial.tsx";
import OperatingSystemsTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/OperatingSystems/OperatingSystemsTutorial.tsx";
import OrganizationTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/ComputerOrganization/OrganizationTutorial.tsx";
import ComputationTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/Theory Of Computation/ComputationTutorial.tsx";
import CompilerTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/Compiler Design/CompilerTutorial.tsx";
import DistributedTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/Distributed Systems/DistributedTutorial.tsx";
import LinuxTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/Linux Tutorial/LinuxTutorial.tsx";
import CyberSecurityTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/CyberSecurity Tutorial/CyberSecurityTutorial.tsx";
import DbmsTutorial from "./components/ComputerScienceCoreSubject/Data&Databases/Database Management System(DBMS)/DbmsTutorial.tsx";
import WarehousingTutorial from "./components/ComputerScienceCoreSubject/Data&Databases/Data Warehousing/WarehousingTutorial.tsx";
import Profile from "./components/Profile";






//import
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Homepage darkMode={darkMode}/>} />
        <Route path="/tutorial" element={<TutorialPage darkMode={darkMode} /> } />
        

        <Route path="/practice" element={<PracticePage darkMode={darkMode} />} />
        <Route path="/courses" element={<Courses darkMode={darkMode}/>} />
        <Route path="/careers" element={<Careers darkMode={darkMode}/>} />
        <Route path="/contact" element={<Contact darkMode={darkMode}/>} />
        <Route path="/businesspartner" element={<BusinessPartners darkMode={darkMode}/>} />
        <Route path="/launchingsoon" element={<LaunchingSoon darkMode={darkMode}/>} />



        {/* Individual practice section pages */}
        <Route path="/practice/practice" element={<Practice darkMode={darkMode} />} />
        <Route path="/practice/service-based-dsa" element={<ServiceBasedDSA darkMode={darkMode} />} />
        <Route path="/practice/blind-75" element={<Blind75 darkMode={darkMode} />} />
        <Route path="/practice/all-in-one-dsa" element={<AllInOneDSA darkMode={darkMode} />} />
        <Route path="/practice/algorithm" element={<Algorithm darkMode={darkMode} />} />
        <Route path="/practice/service-based-pattern-dsa" element={<ServiceBasedPatternDSA darkMode={darkMode} />} />
        <Route path="/practice/NumbersProblems" element={<NumbersProblems darkMode={darkMode} />} />
        <Route path="/practice/ProgramingLang" element={<ProgramingLang darkMode={darkMode} />} />
        <Route path="/practice/CppTutorial" element={<CppTutorial darkMode={darkMode} />} />

       {/* Tutorial page Rotuing  */}
        <Route path="/tutorial/sde-preparation" element={<SdePreparationComponent darkMode={darkMode}/>} /> 
        <Route path="/tutorial/ComputerScienceCoreSubjects" element={<ComputerScienceCoreSubjects/>} />
        <Route path="/tutorial/Programminglanguage" element={<Programminglanguage/>} />
        <Route path="/tutorial/WebDevLanguage" element={<WebDevLanguage/>} />
        <Route path="/tutorial/MobileDevLanguage" element={<MobileDevLanguage/>} />
        <Route path="/tutorial/SystemProgramingPage" element={<SystemProgramingPage/>} />
        <Route path="/tutorial/DatabaseLanguagePage" element={<DatabaseLanguagePage/>} />
        <Route path="/tutorial/GameDevelopmentpage" element={<GameDevelopmentpage/>} />
        <Route path="/tutorial/ScriptingLanguagePage" element={<ScriptingLanguagePage/>} />
        <Route path="/tutorial/TrendingTechnologies" element={<TrendingTechnologies/>} />
        
        <Route path="/tutorial/Exxxtraaaaacode" element={<Exxxtraaaaacode/>} />
        <Route path="/tutorial/W3School" element={<W3School/>} />

        {/* Computer SScience */}
        <Route path="/ComputerTutorial" element={<ComputerTutorial darkMode={darkMode} />} />
        <Route path="/EngMathTutorial" element={<EngMathTutorial darkMode={darkMode} />} />
        <Route path="/MathsComputerTutorial" element={<MathsComputerTutorial darkMode={darkMode} />} />
        <Route path="/OperatingSystemsTutorial" element={<OperatingSystemsTutorial darkMode={darkMode} />} />
        <Route path="/OrganizationTutorial" element={<OrganizationTutorial darkMode={darkMode} />} />
        <Route path="/NetworksTutorial" element={<NetworksTutorial darkMode={darkMode} />} />
        <Route path="/ComputationTutorial" element={<ComputationTutorial darkMode={darkMode} />} />
        <Route path="/CompilerTutorial" element={<CompilerTutorial darkMode={darkMode} />} />
        <Route path="/DistributedTutorial" element={<DistributedTutorial darkMode={darkMode} />} />
        <Route path="/LinuxTutorial" element={<LinuxTutorial darkMode={darkMode} />} />
        <Route path="/CyberSecurityTutorial" element={<CyberSecurityTutorial darkMode={darkMode} />} />
        <Route path="/DbmsTutorial" element={<DbmsTutorial darkMode={darkMode} />} />
        <Route path="/WarehousingTutorial" element={<WarehousingTutorial darkMode={darkMode} />} />


        {/* Course Page */}
        <Route path="/FullStackCourse" element={<FullStackCourseMainPage darkMode={darkMode} />} />
        <Route path="/AIMLCourse" element={<AIMLCourseMainPage darkMode={darkMode} />} />
        <Route path="/CSSCourse" element={<CSSCourseMainPage darkMode={darkMode} />} />
        <Route path="/DataEngineeringCourse" element={<DataEngineeringCourseMainPage darkMode={darkMode} />} />
        <Route path="/DSACourse" element={<AlgorithmCourseMainPage darkMode={darkMode} />} />
        <Route path="/AtoZCourse" element={<AtoZCourseMainPage darkMode={darkMode} />} />
        <Route path="/NextjsCourse" element={<NextjsCourseMainPage darkMode={darkMode} />} />
        <Route path="/ReactCourse" element={<ReactCourseMainPage darkMode={darkMode} />} />
        <Route path="/HTMLCourse" element={<HTMLCourseMainPage darkMode={darkMode} />} />
        <Route path="/JavaCourse" element={<JavaCourseMainPage darkMode={darkMode} />} />
        <Route path="/JavascriptCourse" element={<JavascriptCourseMainPage darkMode={darkMode} />} />
        <Route path="/MernstackCourse" element={<MERNCourseMainPage darkMode={darkMode} />} />
        <Route path="/pythonCourse" element={<PythonCourseMainPage darkMode={darkMode} />} />
        <Route path="/typescriptCourse" element={<TypescriptCourseMainPage darkMode={darkMode} />} />
        <Route path="/courseMain" element={<CourseMainPage darkMode={darkMode} />} />
        <Route path="/courses/ExploreAllComponent" element={<ExploreAllComponent darkMode={false}/>} />
        <Route path="/profile" element={<Profile />} />

        
      

        

        {/* <Route path="/cs-core" element={<CourseDetailPage />} />
        <Route path="/systems-networking" element={<CourseDetailPage />} />
        <Route path="/data-databases" element={<CourseDetailPage />} />
        <Route path="/data-science" element={<CourseDetailPage />} />
        <Route path="/programming-development" element={<CourseDetailPage />} />
        <Route path="/programming-languages" element={<CourseDetailPage />} />
        <Route path="/web-development" element={<CourseDetailPage />} />
        <Route path="/mobile-development" element={<CourseDetailPage />} />
        <Route path="/systems-programming" element={<CourseDetailPage />} />
        <Route path="/ai-research" element={<CourseDetailPage />} />
        <Route path="/game-development" element={<CourseDetailPage />} />
        <Route path="/scripting-automation" element={<CourseDetailPage />} /> */}
     
      </Routes>

      <Footer darkMode={darkMode}/>
    </Router>
  );
};

export default App;
