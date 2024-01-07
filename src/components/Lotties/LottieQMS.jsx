import Lottie from "lottie-react";
import QMSLottie from "../../assets/Data/QMSLottie.json";

const LottieQMS = () => {

  return (
    <Lottie className="services__image" animationData={QMSLottie} loop={true} />
  )
};

export default LottieQMS;