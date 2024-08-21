import React from "react";

const Skill = ({ icon, title }) => {
  return (
    <li className="text-base text-center font-medium tracking-wide leading-10">
      <img
        src={icon}
        alt={title}
        className="size-20"
      />
      {title}
    </li>
  );
};

export default Skill;
