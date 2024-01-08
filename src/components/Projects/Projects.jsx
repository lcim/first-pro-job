import { useState, useEffect } from "react";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table1OnSmallDevices from "./Table1OnSmallDevices";
import Table2OnSmallDevices from "./Table2OnSmallDevices";
import "./_Projects.scss";

// import FooterLink from "../FooterLink/FooterLink";
// import React from 'react'

const Projects = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const breakpoint = 600;

  useEffect(() => {
    const setWindowSize = () => (setDeviceWidth(window.innerWidth));
    document.addEventListener("resize", setWindowSize);

    return () => document.removeEventListener("resize", setWindowSize);
  }, []);
  return (
    <div className="projects__wrapper">
      {/* main heading */}
      <h1 className="projects__heading">OUR PAST EXPERIENCES</h1>
      {/* sub-heading */}
      <h3 className="projects__sun-heading">
        A summary of our projects. The list will be continually updated
      </h3>
      {/* tables */}
      <div className="tables">
        <div className="table1">
          <p className="table1__title">
            Table 1: Construction & Inspection/Maintenance Services
          </p>
          {/* render either of table1 for large or small devices */}
          {deviceWidth < breakpoint ? <Table1OnSmallDevices /> : <Table1 />}        
        </div>
        <div className="table2">
          <p className="table2__title">Table2: NDT Services</p>
          {/* render either of table1 for large or small devices */}
          {deviceWidth < breakpoint ? <Table2OnSmallDevices /> : <Table2 />}
        </div>
      </div>
    </div>
  );
};

export default Projects;
