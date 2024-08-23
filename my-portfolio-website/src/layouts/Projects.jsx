import React from "react";
import Card from "../components/Card";
import data from "../assets/data";

const Projects = () => {
  const cardDivs = data.cards.map((card, index) => (
    <Card
      key={index}
      thumbnail={card.thumbnail}
      title={card.title}
      description={card.description}
      link={card.link}
      repository={card.repository}
      tools={card.tools}
    />
  ));
  return (
    <div
      id="portfolio"
      className="flex flex-col lg:flex-row flex-wrap container gap-[40px] justify-around"
    >
      {cardDivs}
    </div>
  );
};

export default Projects;
