import React from "react";
import "../styles/Navigation.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navigation() {
  let location = useNavigate();
  return (
    <div className="nav-div">
      <a className="nav-link" onClick={() => location("/")}>
        About
      </a>

      <a className="nav-link" onClick={() => location("/projects")}>
        Projects
      </a>

      <a className="nav-link" onClick={() => location("/contact")}>
        Contact
      </a>

      <a className="nav-link" onClick={() => location("/resume")}>Resume</a>
    </div>
  );
}
