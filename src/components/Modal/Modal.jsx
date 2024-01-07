import "./_Modal.scss";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

// modal component
const Modal = ({ closeModal }) => {

  return ReactDOM.createPortal(
    <div onClick={() => closeModal()} className="modal__overlay">
      <div onClick={(e) => e.stopPropagation()} 
        className="modal__container">
        {/* contents of the modal */}
        <section className="upper_section">
          <h1>Jescon: Opportunities Beckoning!</h1>
          {/* letter X closes modal on click */}
          <p onClick={() => closeModal()} className="exit">
            &times;
          </p>
        </section>
        <section className="middle_section">
          <h3>
            Our Records Speak volumes -{" "}
            <span className="sub-heading">
              Do not miss out on this rare opportunity to discover Jescon
              Integrated Concept.
            </span>
          </h3>

          <h3>Summary:</h3>
          <p className="appreciation">
            <span className="highlighted">Jescon</span> offer technical support
            services in terms of providing specialist manpower to major oil and
            gas companies. The manpower supply covers areas such as
            Construction, Engineering, Procurement, and Administration.
          </p>
          <p>
            <span className="highlighted">Jescon</span> also have capability for
            general supply of goods in manufacturing and construction companies.
            Also an expert in marine maintenance/ fabrication of major oil
            producing facilities such as flow station, pipelines, offshore
            infrastructures, etc. We undertake statutory underwater and topsides
            inspection of offshore and swamp installed facilities. This is in
            accordance with statutory requirements of the Department of
            Petroleum Resources Achievement is our key driver, setting goals and
            meeting targets, we perform in an atmosphere charged with
            excitement. Our constant motivation is your smile. We Perform. We go
            that extra mile We are a leading player, Safe-practices Team-spirit,
            and the commitment to excel. These are the qualities possess by
            Jescon Integrated concept Limited.
          </p>
        </section>
        {/* exit button, on click closes modal */}
        <section className="lower_section">
          <a onClick={() => closeModal()} className="btn-modal btn-red">
            Exit
          </a>
          {/* redirect to our services page */}
          <Link className="btn-modal btn-green" to="/services">
            See Our Services
          </Link>
        </section>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
