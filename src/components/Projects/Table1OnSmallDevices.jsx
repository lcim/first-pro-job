import projectsData from "../../assets/Data/projectsData.json";
const Table1OnSmallDevices = () => {
  // map through project data, an array of objects
  const projects = projectsData.map((project, ind) => (
    // project container
    <div key={ind} className="projects__sm_wrapper">
      {/* individual projects */}
      <div className="project__item">
        <span className="column1">Project: </span>
        <span className="project__description">{project.projectName}</span>
      </div>
      <div className="project__item">
        <span className="column1">Activities: </span>
        <span className="project__description">{project.projectDescription}</span>
      </div>
      <div className="project__item">
        <span className="column1">Client: </span>
        <span className="project__description">{project.client}</span>
      </div>
      <div className="project__item">
        <span className="column1">Location: </span>
        <span className="project__description">{project.location}</span>
      </div>
      <hr />
    </div>
  ));
  return <div className="mini__table">{projects}</div>;
};

export default Table1OnSmallDevices;
