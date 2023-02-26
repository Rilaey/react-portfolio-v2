import { React, useState } from "react";
import "../styles/Navigation.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  let location = useNavigate();

  const { pathname } = useLocation()

  const [links, setLinks] = useState([
    {
      name: "About",
      href: '/'
    },
    {
      name: "Projects",
      href: '/projects'
    },
    {
      name: "Contact",
      href: '/contact'
    },
    {
      name: "Resume",
      href: '/resume'
    },
  ])
  return (
    <div className="nav-div">
      {links.map((link) => {
        return (
          <a style={{
            backgroundColor: pathname === link.href ? "black" : "none",
            width: pathname === link.href ? "117px" : "100px",
            borderRadius: pathname === link.href ? "15%" : "100%"
          }} className="nav-link" onClick={() => {
            location(link.href)
          }}>{link.name}</a>
        )
      })}
    </div>
  );
}
