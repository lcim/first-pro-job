// import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import {  Route, Routes } from "react-router-dom";
import "../css/main.css";

import Home from './components/Home/Home';
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/OurServices";
import Policies from "./components/Policies/Policies";
import ErrorPage from "./components/ErrorPage/ErrorPage";
// import Navbar from "./components/Navbar/Navbar";
// import NavbarTest from "./components/Navbar/NavbarTest";
import Navbar from "./components/Navbar/Navbar";
// import GoHome from "../GoHome/GoHome";
// import React from 'react'

const App = () => {
  // const toggleBtn = () => {
  //   console.log("Hi")
  //   const toggler = document.getElementById("react-burger-menu-btn");
  //   toggler.addClass("hide")
  // }
  return (
    <div className="app">
        <Navbar />
        {/* <GoHome /> */}
        <Routes>
          {/* One can use "Component" or 'element' making necessary name adjustments */}
          
          <Route path="/first-pro-job/" Component={Home} />
          {/* <Route index Component={Home} /> */}
          <Route path="/first-pro-job/about" Component={About} />
          <Route path="/first-pro-job/projects" Component={Projects} />
          <Route path="/first-pro-job/services" element={<Services />} />
          <Route path="/first-pro-job/policies" element={<Policies />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  );
};

export default App;


