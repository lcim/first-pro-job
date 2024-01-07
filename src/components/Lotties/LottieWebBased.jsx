
// Discarded because it id not give me expected display
import lottie from "lottie-web";
import { useRef, useEffect } from "react";
import procAnimation from "../../assets/Data/procurement.json";
import './Lottie.css';
console.log(procAnimation);

const LottieWebBased = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      animationData: procAnimation,
      autoplay: true,
      container: container.current,
      loop: true,
      renderer: "svg",
    });
  }, []);
    return <div ref={container} className="lottie__container"></div>;
};

export default LottieWebBased;
