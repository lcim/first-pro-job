import Focus from "./Focus";
import Expertize from "./expertize";
import missionImg from "./../../assets/images/jic2.jpg";
import visionImg from "./../../assets/images/jic3.jpg";
import Clients from "./Clients";
import { HashLink } from "react-router-hash-link";
import CarouselAbout from "../Carousel/CarouselAbout";
// import FooterLink from "../FooterLink/FooterLink";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./_About.scss";

const About = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle__hamburger = () => {
    setIsOpen(!isOpen);
  };

  // hamburger menu class
  let menuClass = [""];
  if (isOpen) {
    menuClass.push("hidden");
  } else {
    menuClass.push("in__page");
  }

  // inpage navigation section
  const inPageNavAbout = (
    <div className="stick">
      <div className={menuClass.join(" ")}>
        <HashLink to="#mission" smooth>
          Our Mission
        </HashLink>
        <HashLink to="#vision" smooth>
          Our Vision
        </HashLink>
        <HashLink to="#clients" smooth>
          Our Clients
        </HashLink>
        <HashLink to="#expertize" smooth>
          Our Expertize
        </HashLink>
        <HashLink to="#focus" smooth>
          Our Focus
        </HashLink>
      </div>
      <div className="burger__menu" onClick={toggle__hamburger}>
        {isOpen ? <FaBars className="bars" /> : <FaTimes className="xclose" />}
      </div>
    </div>
  );

  // mission statement
  const ourMission = `Our Mission is to achieve the reputation of a quality, high
              standard & reliable solution & service Provider Company in the oil
              and gas industry. We are striving to be the first indigenous point
              of call in Engineering, Procurement, Construction, Installation
              and general services.`;
  
  // vision statement
  const ourVision = `Our Vision is to achieve 100% customer satisfaction by
                    delivering quality products and services at an affordable
                    cost. Our forward vision is to strive to become an entity in
                    technology based corporate solutions, capable of demanding
                    unconditional response from the targeted niche. We also
                    believe that for our scope of improvisation – sky is the
                    limit and we are always ready to take our achievements to
                    the next level. We are growing and would always like to
                    remain on the growing streak.`;
  
  // carousel for sub-heading
  const about__sub_heading = <CarouselAbout />;
  return (
    <div className="about__wrapper" id="#about">
      {/* inpage navigation component */}
      {inPageNavAbout}
      {/* page title/heading */}
      <h1 className="about__heading"> JESCON INTEGRATED CONCEPT</h1>
      {/* sub-heading/carousel */}
      <div className="about__sub_heading">{about__sub_heading}</div>

      {/* vision and mission section */}
      <div className="mission__and__vision">
        {/* mission section */}
        <section className="mission " id="mission">
          {/* mission title and body text */}
          <div className="sub_mission">
            <h3 className="mission__heading">Our Mission:</h3>
            <p className="mission__details">{ourMission}</p>
          </div>
          {/* mission image */}
          <img
            src={missionImg}
            alt="mission image"
            className="mission__image"
          />
        </section>

        {/* vision section */}
        <section className="vision" id="vision">
          {/* vision title and body text */}
          <div className="sub_vision">
            <h3 className="vision__heading">Our Vision:</h3>
            <p className="vision__details">{ourVision}</p>
          </div>
          {/* vision image */}
          <img src={visionImg} alt="about image" className="vision__image" />
        </section>
      </div>
      {/* import components files */}
      <div className="expertize__clients">
        <Expertize />
        <Clients />
      </div>
      <Focus />
    </div>
  );
};

export default About;
