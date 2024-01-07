import "./_Services.scss";
import Consultancy from "./Consultancy";
import Fabrication from "./Fabrication";
import InspectionTestingNDT from "./InspectionTestingNDT";
import Procurement from "./Procurement";
import QMSProcess from "./QMSProcess";
import TechManpower from "./TechManpower";
import QualityMgt from './QualityMgt'
import Expertize from "../About/expertize";
import { HashLink } from "react-router-hash-link";

const OurServices = () => {
  // creat aside component for inpage navigation
  const inPageNav = (
    <div className="in__page">
      <p>
        <HashLink to="/services/#fabrication" smooth>
          Fabrication
        </HashLink>
      </p>
      <p>
        <HashLink to="/services/#inspection" smooth>
          Inspection/NDT
        </HashLink>
      </p>
      <p>
        <HashLink to="/services/#procurement" smooth>
          Procurement
        </HashLink>
      </p>
      <p>
        <HashLink to="/services/#qms" smooth>
          QMS Process
        </HashLink>
      </p>
      <p>
        <HashLink to="/services/#consultancy" smooth>
          Consultancy
        </HashLink>
      </p>
      <p>
        <HashLink to="/services/#techmanpower" smooth>
          TechManpower
        </HashLink>
      </p>
      <p>
        <HashLink to="/services/#expertize" smooth>
          Our Expertize
        </HashLink>
      </p>
    </div>
  );
  return (
    // main Our Services container
    <div className="services__wrapper">
      {/* aside wrapper */}
      <div className="aside__wrapper">
        <aside className="aside">{inPageNav}</aside>
      </div>
      {/* container for EACH individual services components */}
      <div className="services">
        <div className="services__top_row">
          {/* Our Services heading */}
          <h1 className="page__heading">OUR SERVICES</h1>
          {/* brief introduction on Our Services */}
          <h3 className="page__intro">
            <span className="highlighted">Jescon&apos;s</span> capabilities
            include the provision of a wide range of consultancy, managerial and
            supervisory services in Engineering, Procurement, Construction and
            Fabrication services.
          </h3>
        </div>
        {/* container for ALL individual services components */}
        <div className="services__components">
          <Fabrication />
          <InspectionTestingNDT />
          <Procurement />
          <TechManpower />
          <QMSProcess />
          <Consultancy />
          <QualityMgt />
          <Expertize />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
