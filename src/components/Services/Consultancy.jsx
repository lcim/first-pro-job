import LottieConsultancy from "../Lotties/LottieConsultancy";

const Consultancy = () => {
  // consultancy array
  const consultancyList = [
    "Welding procedure qualification (PQR) of SMAW, TIG etc. to AWS B2.1/B2.1M, to demonstrate the capabilities of a weld to meet required properties","Training of welders","Fabrication workshop set up","Quality Management system (QMS) to ISO 9001:2015 certification","Using a qualified welding procedure specification (WPS) to carry out performance qualification test (PQTR) to determine the ability of welders to produce a sound weld in the welding test positions"
  ]
  return (
    <div className="services__type" id="consultancy">
      <h2 className="services__header">Consultancy Services</h2>
      <div className="services__body">
        <ul className="services__list">
          {consultancyList.map((item, i) =>(<li key={i}>{item}</li>))}
        </ul>
        {/* video/image for the current page */}
        <LottieConsultancy />
      </div>
    </div>
  );
};

export default Consultancy;
