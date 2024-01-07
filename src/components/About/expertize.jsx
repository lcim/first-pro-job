const Expertize = () => {
  //  page heading
  const expertizeHeading = (
    <h1 className="services__heading" id="expertize">
      AREAS OF EXPERTISE
    </h1>
  );

  // page body details
  const expertizeIntro = (
    <p className="expertize__intro">
      <span className="highlighted">Main Strength of JESCON</span> lies in the
      blend of professionals, specialized and highly focused operation.
      Increasing customer&apos;s awareness is the strength where it excels over
      its competitors. <br /> Our strength lies in our ability to blend current
      management practice and Engineering Management Solutions, Products and
      Services. <br />
      JESCON understands the need for skill transfer to client personnel. Our
      offers cover the following major areas:
    </p>
  );

  // Expertize array
  const expertizeList = [
    "Engineering / Procurement",
    "Construction / Fabrication",
    "Installation",
    "Corrosion control, Blasting and painting",
    "Underwater and above water inspection",
    "Man power supply (National & International)",
    "NDT Services ( MT, PT, UT, RT)",
    "Inspection/Maintenance services",
    "Welder training and qualification",
    "Quality Management system (QMS ISO 9001:2015 certification)",
  ];
  return (
    <div className="services__type" id="expertize">
      {expertizeHeading}
      {expertizeIntro}
      <ul className="expertize__list">
        {expertizeList.map((item, i) => (
          <li className="expertize__list_item" key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expertize;
