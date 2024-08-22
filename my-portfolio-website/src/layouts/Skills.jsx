import React from "react";
import Skill from "../components/Skill";
import data from "../assets/data";

const Skills = () => {
  const skillItems = data.skills.map((skill, index) => (
    <Skill
      key={index}
      icon={skill.icon}
      title={skill.title}
    />
  ));
  return (
    <ul id="skills" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-8">
      {skillItems}
    </ul>
  );
};

export default Skills;
