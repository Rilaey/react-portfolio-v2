import React from "react";
import BackYardSportsLogo from "../images/BackyardSportsLogo1.png";
import '../styles/Project.css'

export default function Project(props) {
  return (
    <div className="project-card">
        <div className="project-img">
          <img src={props.image} className="single-img"/> 
        </div>
        
        <div className="project-bio">
          <div className="project-title proj-text">
            {props.title}
          </div>
          <div className="project-description proj-text">
            {props.description}
          </div>
          <div className="project-repo proj-text">
            <a href={props.repo}>Github Repo</a>
          </div>
          <div className="project-application proj-text">
            <a href={props.application}>Live Application</a>
          </div>
        </div>

    </div>
  );
}
