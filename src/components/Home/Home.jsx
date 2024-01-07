import { Link, useLocation } from "react-router-dom";
import "./_Home.scss";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
import CarouselHome from "../Carousel/Carousel";
import {homeContent} from "../../assets/Data/homeContent.js"

const Home = () => {
  // define initial modal state
  const [showModal, setShowModal] = useState(false);
  // get current location
  const currentLocation = useLocation();
  const isModal = currentLocation.pathname === "/" ? "true" : "false";

  // set timeout to display isModal component
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2400);
  }, [isModal]);
  // function to toggle Modal
  const closeModal = () => {
    setShowModal(false);
  };

  // homepage content  
  return (
    <div className="home__container">
      {/* show modal component */}
      {showModal && <Modal closeModal={closeModal} />}
      
      {/* Show slide using Carousel */}
      <CarouselHome />

      <div className="intro">
      {/* homepage title */}
        <h1 className="title">Jescon Integrated Concept Limited</h1>
        {/* homepage body */}
        <div className="intro__section">
          {homeContent.map((content, i) => (
            <p key={i} className="brief"><span className="highlighted">{content.highlight}{ " " }</span>{ content.details }</p>
          ))}
        </div>
      </div>

      {/* redirect to about page */}
      <div className="head__btns">
        <Link to="about" className="btn btn__black">
          <p className="btn-text">More about us ...</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
