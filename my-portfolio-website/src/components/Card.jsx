import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLink } from "react-icons/fa";

const Card = ({ id, thumbnail, title, description, link, repository, tools }) => {
  return (
    <div
      className="card bg-base-100 w-full lg:w-[calc(50%-20px)] shadow-xl"
    >
      <figure>
        <img src={thumbnail} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-base md:text-lg">{description}</p>
        {/* <div className="justify-start">
          {tools.map((tool) => <div className={tool.color}><{tool.icon}/></div>)}
        </div> */}
        <div className="card-actions justify-end mt-5">
          <a href={link} target="_blank">
            <IconContext.Provider value={{ className: "icon-lg" }}>
              <FaLink />
            </IconContext.Provider>
          </a>
          <a href={repository} target="_blank">
            <IconContext.Provider value={{ className: "icon-lg" }}>
              <FaGithub />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
