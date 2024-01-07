import Cashes from "./Cashes";
import CompanyQuality from "./CompanyQuality";
import QualityAssurance from "./QualityAssurance";

const Policies = () => {
  return (
    <div className="policies__wrapper">
      <h1 className="company__policies">JESCON POLICIES</h1>
      <p className="policies__intro">
        It is <span className="highlighted">JESCON Integrated Concept Limited</span> policy to:
      </p>
      <div className="policies">
        <Cashes />
        <CompanyQuality />
        <QualityAssurance />
      </div>
    </div>
  );
};

export default Policies;
