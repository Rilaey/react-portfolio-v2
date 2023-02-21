import React from "react";
import { Route, Routes } from "react-router-dom";
// import "./css/App.css";
// import "./css/Footer.css";
// import "./css/Header.css";
// import "./css/Navigation.css";
// import "./css/index.css";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from './pages/Contact'


export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}