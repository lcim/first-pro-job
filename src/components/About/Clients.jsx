// Define clients array
const CLIENTS_LISTS = [
  "Mobil Producing Nigeria Unlimited",
  "Shell Petroleum Development Company",
  "Total E & Nigeria Limited",
  "Chevron Nigeria Limited",
  "Oando Plc",
  "Agip",
  "Addax Petroleum",
];

const Clients = () => {
  const clientsHeading = (
    // page heading
    <h1 className="clients__heading" id="clients">SOME OF OUR MAJOR CLIENTS</h1>
  );

  // Client's page details
  const clientsIntro = (
    <p className="clients__intro">
      <span className="highlighted">JESCON</span> has several clients using its
      array of products. Our team members have the distinguished experience and
      association with different national and international organizations in
      different sectors. <br />A partial list of these clients includes:
    </p>
  );

  // Client's page list items
  const clientsList = (
    <ul className="clients__list">
      {CLIENTS_LISTS.map((client, i) => (
        <p key={i}>{client}</p>
      ))}
    </ul>
  );

  return (
    <div className="clients__container">
      {clientsHeading}
      {clientsIntro}
      {clientsList}
    </div>
  );
};

export default Clients;
