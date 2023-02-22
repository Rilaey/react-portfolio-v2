import { React, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/Project";
import BackYardSportsLogo from "../images/BackyardSportsLogo1.png";
import ParkFinderLogo from "../images/ParkFinderLogo.png";
import WeatherLogo from "../images/WeatherLogo.jpg";

export default function Projects() {
  const [projects, useProjects] = useState([
    {
      image: BackYardSportsLogo,
      title: "Back Yard Sports",
      description:
        "Assemble your team with Backyard Sports. With this application connect with people who have the same sport interest as you. After connecting with your team hop into the chat room and talk with your teammates in real time.",
      repo: "https://github.com/Rilaey/Backyard-Sports",
      application: "https://backyard-sports.herokuapp.com/"
    },
    {
      image: ParkFinderLogo,
      title: "Park Finder",
      description:
        "Let Park Finder choose your next destination for you! With Park Finder's search feature you can find a random state park in the United States or narrow down the search based on location mile radius with the help of the Google Maps API.",
      repo: "https://github.com/Rilaey/Park-Finder",
      Application: "https://rilaey.github.io/Park-Finder/"
    },
    {
      image: WeatherLogo,
      title: "Weather Forecast",
      description:
        "Check out the 5 day and current weather in any city of your choice. With a polished UI it makes for a fun user experience.",
      repo: "https://github.com/Rilaey/Weather-Forcast",
      Application: "https://rilaey.github.io/Weather-Forcast/"
    }
  ]);

  return (
    <div className="main-body">
      <div>
        <Header />
      </div>
      <div className="project">
        {projects.map((project) => {
          return (
            <ProjectCard
               image={project.image}
               title={project.title}
               description={project.description}
               repo={project.repo}
               application={project.repo}
            />
          ); 
        })}
      </div>
      <div className="main-footer">
        <Footer />
      </div>
    </div>
  );
}
