import Typewriter from "typewriter-effect";

const CompanyQuality = () => {
  const heading = (
    <h1 className="policy__heading">
      <Typewriter
        options={{
          strings: "COMPANY QUALITY POLICY",
          autoStart: true,
          loop: true,
          cursor: "✍️",
          wrapperClassName: "Typewriter__wrapper",
          deleteSpeed: 150,
        }}
      />
    </h1>
  );
  const cQuality = (
    <p className="quality__intro">
      Our policy is to meet and exceed customer satisfaction within the national
      codes and ethics of operation.
    </p>
  );
  return (
    <div className="policy__wrapper">
      {heading}
      {cQuality}
    </div>
  );
};

export default CompanyQuality;
