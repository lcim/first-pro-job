import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./_Carousel.scss";

// slides array
const displayData = [
  "Engineering | Procurement",
  "Construction | Fabrication", "Installation | Corrosion Control", "Blasting and Painting",
  "Underwater and Above Water Inspection",
  "NDT Services ( MT, PT, UT, RT)",
  "Inspection / Maintenance services",
  "Welder Training and Qualification",
  "Quality Management System (QMS ISO 9001:2015 Certification)",
];
// slides render function
const renderSlides = displayData.map((text, i) => (
  <div key={i}>
    <h3>{text} </h3>
  </div>
));

export default function CarouselAbout() {
  // slide index in the slides array
  const [curIndex, setCurIndex] = useState();
  function handleChange(index) {
    setCurIndex(index);
  }
  return (
    <div className="App">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={displayData[curIndex]}
        onChange={handleChange}
        interval={4200}
        className="about__carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}
