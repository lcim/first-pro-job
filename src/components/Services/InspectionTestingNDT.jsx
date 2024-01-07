const InspectionTestingNDT = () => {
  const sampleImage = new URL(`../../assets/images/jic${2}.jpg`, import.meta.url)
    .href;
  // services array
  const ITNDTList = [
    "Production platform integrity survey (statutory inspection) for both onshore and offshore facilities", "Jetty integrity survey", "Advanced inspection techniques such as TOFD, Eddy Current, C-Scan, Long range Ultrasonic etcStructural Fabrication", "Risk Based Inspection", "Lifting equipment and Gears", "installation Pipeline Fabrication"
  ];
  return (
    <div className="services__type" id="inspection">
      <h2 className="services__header">Inspection & Testing/NDT Services</h2>
      <div className="services__body">
        <ul className="services__list">
          {ITNDTList.map((item, i) => (<li key={i}>{ item }</li>))}          
        </ul>
        {/* video/image for the current page */}
        <img
          src={sampleImage}
          alt="sample NDT image"
          className="services__image"
        />
      </div>
    </div>
  );
};

export default InspectionTestingNDT;
