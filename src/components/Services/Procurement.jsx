import LottieProc from "../Lotties/LottieProc";

const Procurement = () => {

  return (
    <div className="services__type">
      <h2 className="services__header">
        Procurement and Supply Chain Services
      </h2>
      <div className="services__body" id="procurement">
        <ul className="services__list">
          <li>Assist you in any purchasing or logistics challenge</li>
          <li>
            Supply of Oil field equipment&Apos;s, welding equipment&Apos;s and
            Materials e.g. spare parts, Chemical Supply, welding consumables etc
          </li>
        </ul>
        {/* video/image for the current page */}
        <LottieProc />
      </div>
    </div>
  );
};

export default Procurement;
