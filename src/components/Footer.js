import React from "react";
import TwitterLogo from '../images/twitter-logo.png';
import LinkedInLogo from '../images/Linkedin.png';
import GithubLogo from '../images/white-github.svg';
//import '../styles/App.css'
import '../styles/Footer.css'

export default function Footer() {
  return (
      <div className="container text-center logo-display">
      <a className='logo' href="https://twitter.com/codingWithRiley"><img src={TwitterLogo} alt='twitter logo' className="logo" /></a>
      <a className='logo' href="https://www.linkedin.com/in/riley-newhart-667b43128/"><img src={LinkedInLogo} alt='linkedin logo' className="logo"/></a>
      <a className='logo' href="https://github.com/Rilaey"><img src={GithubLogo} alt='github logo' className="logo"/></a>
      </div>
  );
}
