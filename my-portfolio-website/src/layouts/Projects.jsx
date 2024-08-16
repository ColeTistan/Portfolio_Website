import React from "react";
import Card from "../components/Card";

const Projects = () => {
  return (
    <>
      <div className="join">
        <button className="btn join-item">JavaScript</button>
        <button className="btn join-item">Python</button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-8 mx-auto">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Projects;
