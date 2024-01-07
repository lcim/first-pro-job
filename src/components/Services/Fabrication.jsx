const Fabrication = () => {
  const fabSample = new URL(`../../assets/images/jic${5}.jpg`, import.meta.url)
    .href;
  return (
    <div className="services__type" id="fabrication">
      <h2 className="services__header">Fabrication Services</h2>
      <div className="services__body">
        <ul className="services__list">
          <li>Storage TanksLight Manifolds</li>
          <li>Piping Fabrication</li>
          <li>Structural Fabrication</li>
          <li>Warehouse/Workshop</li>
          <li>fabrication</li>
          <li>installation Pipeline Fabrication</li>
        </ul>
        {/* video/image for the current page */}
        <img
          src={fabSample}
          alt="sample fabrication"
          className="services__image"
        />
      </div>
    </div>
  );
};

export default Fabrication;
