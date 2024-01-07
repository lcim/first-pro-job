
const QualityMgt = () => {
    const QualitySample = new URL(`../../assets/images/jic${10}.jpg`, import.meta.url)
    .href;
  return (
    <div className="services__type">
      <h2 className="services__header">Quality management system and process development Services</h2>
      <div className="services__body">
        <ul className="services__list">
          <li>Systems evaluation and development</li>
          <li>Process based auditing services</li>
          <li>QMS certification consultancy services</li>
        </ul>
        {/* video/image for the current page */}
        <img
          src={QualitySample}
          alt="sample fabrication"
          className="fabrication__image"
        />
      </div>
    </div>
  );
}

export default QualityMgt