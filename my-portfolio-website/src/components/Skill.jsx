import React from "react";

const Skill = ({ icon, title }) => {
  return (
    <li className="skill-list-item">
      <img src={icon} alt={title} className="size-20" />
      {title}
    </li>
  );
};
export default Skill;
