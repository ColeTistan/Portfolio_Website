import React from "react";

const Skill = ({ icon, title }) => {
  return (
    <li className="text-base text-center font-normal tracking-wide leading-10 hover:scale-[1.15] duration-200 transition-all">
      <img src={icon} alt={title} className="size-20" />
      {title}
    </li>
  );
};
export default Skill;
