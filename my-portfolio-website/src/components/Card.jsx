import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLink } from "react-icons/fa";

const Card = ({ thumbnail, title, description, link, repository, tools }) => {
  return (
    <div className="card-base">
      <figure>
        <img src={thumbnail} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-base md:text-lg">{description}</p>
        <div className="flex flex-wrap justify-start gap-2 my-1">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="badge badge-primary text-slate-50 rounded-full"
            >
              {tool}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end gap-4">
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
