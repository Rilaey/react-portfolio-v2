import { React, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/Project";
import BackYardSportsLogo from "../images/BackyardSportsLogo1.png";
import ParkFinderLogo from "../images/ParkFinderLogo.png";
import WeatherLogo from "../images/WeatherLogo.jpg";
import TextEditor from "../images/text-edit.jpeg";
import NoteTaker from "../images/note-taker.jpg";
import Password from "../images/password.jpg";

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
      application: "https://rilaey.github.io/Park-Finder/"
    },
    {
      image: WeatherLogo,
      title: "Weather Forecast",
      description:
        "Check out the 5 day and current weather in any city of your choice. With a polished UI it makes for a fun user experience.",
      repo: "https://github.com/Rilaey/Weather-Forcast",
      application: "https://rilaey.github.io/Weather-Forcast/"
    },
    {
      image: TextEditor,
      title: "PWA Text Editor",
      description:
        "Need to write some code on the fly in a simple development environment? If so look no further because this is the application for you!",
      repo: "https://github.com/Rilaey/PWA-Text-Editor",
      application: "https://rileys-text-editor.herokuapp.com/"
    },
    {
      image: NoteTaker,
      title: "Take Some Notes",
      description:
        "Feel like you are forgetful? Never forget things again because with this note taking application you can write down your thoughts on the fly! I was motivated to build this note taking application because myself and a lot of others have issues remembering so much information throughout our busy lives. During the process of building the notes app I learned how to work with and operate methods such as GET, POST, and DELETE.",
      repo: "https://github.com/Rilaey/note-taker-app",
      application: "https://take-some-notes-today.herokuapp.com/"
    },
    {
      image: Password,
      title: "Password Generator",
      description:
        "Generate a random secure password spanning all the way up to 128 characters, which could include lower / upper case letters, numbers, and special characters! Easily copy the generated password with a built in copy button.",
      repo: "https://github.com/Rilaey/Password-Protector",
      application: "https://rilaey.github.io/Password-Protector/"
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
