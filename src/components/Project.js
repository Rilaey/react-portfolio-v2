import React from "react";

export default function Project(props) {
  const projects = [
    {
      image: "../images/BackyardSportsLogo1.png",
      title: "Back Yard Sports",
      description: "Assemble your team with Backyard Sports. With this application connect with people who have the same sport interest as you. After connecting with your team hop into the chat room and talk with your teammates in real time.",
      repo: "https://github.com/Rilaey/Backyard-Sports",
      application: "https://backyard-sports.herokuapp.com/"
    },
    {
      image: "../images/ParkFinderLogo.png",
      title: "Park Finder",
      description: "Let Park Finder choose your next destination for you! With Park Finder's search feature you can find a random state park in the United States or narrow down the search based on location mile radius with the help of the Google Maps API.",
      repo: "https://github.com/Rilaey/Park-Finder",
      Application: "https://rilaey.github.io/Park-Finder/"
    },
    {
      image: "../images/WeatherLogo.png",
      title: "Weather Forecast",
      description: "Check out the 5 day and current weather in any city of your choice. With a polished UI it makes for a fun user experience.",
      repo: "https://github.com/Rilaey/Weather-Forcast",
      Application: "https://rilaey.github.io/Weather-Forcast/"
    },
    // {
    //   image: "",
    //   title: "",
    //   description: "",
    //   repo: "",
    //   Application: ""
    // },
    // {
    //   image: "",
    //   title: "",
    //   description: "",
    //   repo: "",
    //   Application: ""
    // }
  ];
  
  return (
    <div className="project-card">
      <div className="project-img">
        {props.image}
      </div>
      <div className="project-bio">
        <div className="project-title">
          {props.title}
        </div>
        <div className="project-description">
          {props.description}
        </div>
        <div className="project-repo">
          <a href={props.repo}></a>
        </div>
        <div className="project-application">
          <a href={props.application}></a>
        </div>
      </div>
    </div>
  );
}
