import Lottie from "lottie-react";
import techManpower from "../../assets/Data/techManPower.json";

const LottieTechManpower = () => {

  return (
    <Lottie className="services__image" animationData={techManpower} loop={true} />
  )
};

export default LottieTechManpower;