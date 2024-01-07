import Table1 from "./Table1";
import Table2 from "./Table2";
import "./_Projects.scss";

// import locationData from "./public/data.json" assert { type: "json" };
// import { projectsData2 } from "../../assets/Data/projectsData";
// import FooterLink from "../FooterLink/FooterLink";
// import React from 'react'

const Projects = () => {
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
          {/* render table1 */}
          <Table1 />
        </div>
        <div className="table2">
          <p className="table2__title">Table2: NDT Services</p>
          {/* render table2 */}
          <Table2 />
        </div>
      </div>
    </div>
  );
};

export default Projects;
