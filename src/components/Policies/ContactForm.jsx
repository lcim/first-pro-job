import "./Contact.css";
import PropTypes from "prop-types"

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
// import React from 'react';
import { useForm, ValidationError } from "@formspree/react";
// npm install react-textarea-autosize needed for autosizing
import TextareaAutosize from 'react-textarea-autosize'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvojrjzj");
  if (state.succeeded) {
    return <p>Thanks for your mail. We will reply to you soon.</p>;
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input id="email" type="email" name="email" className="input__box"
        placeholder="Your own email address here"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <TextareaAutosize
        id="message"
        name="message"
        placeholder="Compose your message here"
        className="email__body"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="contact__btn"
        type="submit"
        disabled={state.submitting}
      >
        Send email
      </button>
    </form>
  );
}
ContactForm.propTypes = {
  setHeight: PropTypes.func
}