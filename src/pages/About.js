import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ProfilePicture from "../images/my-pic.jpeg";
import '../styles/App.css'

export default function About() {
  return (
    <div className="main-body">
      <div>
        <Header />
      </div>
      <div className="about">
        <h2 className="about-head">About Me</h2>
        <img
          src={ProfilePicture}
          alt="profile picture"
          className="profile-pic"
        />
        <p className="about-text">
          I began my coding journey half way through 2022. I quickly fell in
          love with learning and the problem solving aspects of programming.
          About a year after being self taught, I enrolled at the University of
          Central Flordia full stack coding bootcamp to have a more structured
          learning process. Currently I'm looking for my first job in this field
          and I would love to dive head first into the industry! Thank you for
          checking out my portfolio and giving me the chance of a lifetime!
        </p>
      </div>
      <div className="main-footer">
        <Footer />
      </div>
    </div>
  );
}
