import Typewriter from "typewriter-effect";
import './_Policy.scss'

const Cashes = () => {
  const cashesHeading = (
    <h1 className="policy__heading">
      <Typewriter
        options={{
          strings: "JESCON CASHES POLICY",
          autoStart: true,
          loop: true,
          cursor: "✍️",
          wrapperClassName: "Typewriter__wrapper",
          deleteSpeed: 150,
        }}
        // className="Typewriter__wrapper"
      />
    </h1>
  );
  const cashes = [
    "Establish and maintain a healthy and safety workplace for all its employees and others on its premises and construction sites",
    "Conduct its activities in a responsible manner to ensure the health and safety of people in the vicinity of its operations",
    "Provide employment to host community",
    "Establish cordial relationship with host community",
  ];

  //     const CashesTypewritter = new Typewriter('#typewriter', {
  //   strings: cashes,
  //   autoStart: true,
  // });
  return (
    <div className="policy__wrapper">
      {cashesHeading}
      {cashes.map((cashe, i) => (
        <p className="cashes__list" key={i}>
          {cashe}
        </p>
      ))}
    </div>
  );
};

export default Cashes;
