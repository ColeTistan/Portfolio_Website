import React from "react";
import Card from "../components/Card";
import cards from "../assets/data";

const Projects = () => {
  const cardDivs = cards.map((card) => (
    <Card
      key={card.id}
      thumbnail={card.thumbnail}
      title={card.title}
      description={card.description}
      link={card.link}
      repository={card.repository}
    />
  ));
  return (
    <div className="flex flex-col lg:flex-row flex-wrap container gap-[40px] justify-around">
      {cardDivs}
    </div>
  );
};

export default Projects;
