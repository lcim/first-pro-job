import LottieQMS from "../Lotties/LottieQMS";

const QMSProcess = () => {
  return (
    <div className="services__type" id="qms">
      <h2 className="services__header">QMS And Process Development Services</h2>
      <div className="services__body">
        <ul className="services__list">
          <li>Systems evaluation and development</li>
          <li>Process based auditing services</li>
          <li>QMS certification consultancy services</li>
        </ul>
        {/* video/image for the current page */}
        <LottieQMS />
      </div>
    </div>
  )
}

export default QMSProcess;