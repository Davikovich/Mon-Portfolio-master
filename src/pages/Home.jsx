import React from "react";
import projet from"../data/project.json";
import Card from"../components/Cards";


const Home = () => {
  return (
    <div className="content">
        <div className="card-content">
        <div className="cards">
          {projet.map((projet) => (
            <Card
              key={projet.id}
              id={projet.id}
              title={projet.title}
              cover={projet.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
