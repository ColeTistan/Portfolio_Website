import React from "react";
import Home from "./Home";
import Divider from "../components/Divider";
import Projects from "./Projects";

const Main = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-2 xl:m-auto mx-8">
      <Home />
      <Divider title="My Portfolio" />
      <Projects />
    </div>
  );
};

export default Main;
