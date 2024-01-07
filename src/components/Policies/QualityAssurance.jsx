import Typewriter from "typewriter-effect";

const QualityAssurance = () => {
  const qAssurance = (
    <p className="quality__intro">
      The Company recognizes the requirements of ISO 9001:2015 and her products
      and services conform to this standard. <br />
      To maintain the high quality level we are known for, Quality Inspectors
      carry out inspections on a continuous basis to ensure that all our
      products and services comply with all the relevant standards in respect of
      quality, safety and the environment. <br />
      For more specialized products requiring higher Standards Quality Systems
      are implemented and maintained on a project to project basis.
    </p>
  );
  return (
    <div className="policy__wrapper">
      <h1 className="policy__heading">
        <Typewriter
          options={{
            strings: "QUALITY ASSURANCE STATEMENT",
            autoStart: true,
            loop: true,
            cursor: "✍️",
            wrapperClassName: "Typewriter__wrapper",
            deleteSpeed: 150,
          }}
        />
      </h1>
      {qAssurance}
    </div>
  );
};

export default QualityAssurance;
