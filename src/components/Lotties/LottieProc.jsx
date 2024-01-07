import Lottie from "lottie-react";
import procAnimation from "../../assets/Data/procurement.json"
import './_Lottie.scss'

const LottieProc = () => {
  return (
    <Lottie className="services__image" animationData={procAnimation} loop={true} />
  )
}

export default LottieProc