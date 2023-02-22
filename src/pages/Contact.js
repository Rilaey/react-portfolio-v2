import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/App.css";

export default function Contact() {
  return (
    <div className="main-body">
      <div>
        <Header />
      </div>
      <form className="contact">
        <h2 className="contact-head c-text">Contact</h2>
        <label className="c-text">Name:</label>
        <input
          placeholder="Name"
          required
          min={4}
          type="text"
          className="c-text"
        />
        <label className="c-text">Email:</label>
        <input placeholder="Email" required type="email" className="c-text" />
        <label required className="c-text">
          Message:
        </label>
        <textarea
          class="form-control c-text"
          rows="5"
          type="text"
          placeholder="Message"
          required
        ></textarea>
        <div>
          <input type="submit" value="Submit" className="c-text c-btn"></input>
        </div>
      </form>
      <div className="main-footer">
        <Footer />
      </div>
    </div>
  );
}
