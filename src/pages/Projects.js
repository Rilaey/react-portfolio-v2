import { React, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/Project";

export default function Projects() {
  const [projects, useProjects] = useState([])

  return (
    <div className="main-body">
      <div>
        <Header />
      </div>
      <div className="project">
        {projects.map((proj) => (
          <ProjectCard project={proj} />
        ))}
      </div>
      <div className="main-footer">
        <Footer />
      </div>
    </div>
  );
}
