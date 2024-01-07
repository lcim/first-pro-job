import Lottie from "lottie-react";
import ConsultancyLottie from "../../assets/Data/consultancy.json";

const LottieConsultancy = () => {

  return (
    <Lottie className="services__image" animationData={ConsultancyLottie} loop={true} />
  )
};

export default LottieConsultancy;