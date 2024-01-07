import LottieTechManpower from "../Lotties/LottieTechManpower";

const TechManpower = () => {
  return (
    <div className="services__type" id="techmanpower">
      <h2 className="services__header">Technical manpower Services</h2>
      <div className="services__body">
        <ul className="services__list">
          <li>PMI - Project Management Inspection and Supply chain support services</li>
        </ul>
        {/* video/image for the current page */}
        <LottieTechManpower />
      </div>
    </div>
  )
}

export default TechManpower