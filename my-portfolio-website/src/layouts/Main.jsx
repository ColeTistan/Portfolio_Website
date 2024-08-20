import React from "react";
import Home from "./Home";
import Divider from "../components/Divider";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";

const Main = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-2 xl:m-auto mx-8">
      <Home />
      <Divider title="My Portfolio" />
      <Projects />
      <Divider title="My Skillset" />
      <Skills />
      <Divider title="My Experience" />
      <Experience />
      <Divider title="My Education" />
      <Education />
      <Divider title="Contact Me" />
      <Contact />
    </div>
  );
};

export default Main;
