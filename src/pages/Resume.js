import { React, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Resume.css";

export default function Resume() {
  // useState to map over front end skills
  const [frontSkills, setFrontSkills] = useState([
    {
      name: "HTML"
    },
    {
      name: "CSS"
    },
    {
      name: "Responsive Design"
    },
    {
      name: "JavaScript"
    },
    {
      name: "Bootstrap"
    },
    {
      name: "Jquery"
    },
    {
      name: "OOP"
    },
    {
      name: "React"
    }
  ]);

  const [backSkills, useBackSkills] = useState([
    {
      name: "Web / Server APIs"
    },
    {
      name: "GraphQl"
    },
    {
      name: "SQL Databases(SQL)"
    },
    {
      name: "NoSQL Databases(MongoDB)"
    },
    {
      name: "Express"
    }
  ]);

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("resume-portfolio.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume-portfolio.pdf.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="main-body">
      <div>
        <Header />
      </div>
      <div className="about">
        <h2 className="about-head">Download my resume here!</h2>
        <a
          onClick={onButtonClick}
          className="resume-link"
          //   href="https://docs.google.com/document/d/e/2PACX-1vRUOolJAxhqOFprqWjMbHmhO3m27W0nFYIa8opYF1FDVc4h2hTbwfG1yw19sOa8pBoa31jZv-zM65lj/pub"
        >
          ✨Resume Download Link✨
        </a>
      </div>
      <div className="pros">
        <div className="front">
          <h2 className="pro-head">Front End Skills</h2>
          {frontSkills.map((item) => {
            return <li className="items">{item.name}</li>;
          })}
        </div>
        <div className="back">
          <h2 className="pro-head">Back End Skills</h2>
          {backSkills.map((item) => {
            return <li className="items">{item.name}</li>;
          })}
        </div>
      </div>
      <div className="main-footer">
        <Footer />
      </div>
    </div>
  );
}
