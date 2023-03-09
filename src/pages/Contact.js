import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/App.css";
import emailjs from "@emailjs/browser";

export default function Contact() {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dw40vid",
        "template_rpbdm2h",
        form.current,
        "tcvghC_602qwzMEG2"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="main-body">
      <div>
        <Header />
      </div>
      <form className="contact" ref={form} onSubmit={sendEmail}>
        <h2 className="contact-head c-text">Contact</h2>
        <label className="c-text">Name:</label>
        <input
          placeholder="Name"
          required
          min={4}
          type="text"
          className="c-text input-text"
          name="user_name"
          style={{
            width: "50%"
          }}
        />
        <label className="c-text">Email:</label>
        <input
          placeholder="Email"
          required
          type="email"
          className="c-text input-text"
          name="user_email"
          style={{
            width: "50%"
          }}
        />
        <label required className="c-text">
          Message:
        </label>
        <textarea
          class="form-control c-text input-text"
          rows="5"
          type="text"
          placeholder="Message"
          name="message"
          required
        ></textarea>
        <div>
          <input type="submit" value="Send" className="c-text c-btn"></input>
        </div>
      </form>
      <div className="main-footer">
        <Footer />
      </div>
    </div>
  );
}
