// src/pages/Competences.jsx
import React from "react";
import Collapse from "../components/Collapse";
import htmlLogo from "../logos/html5.svg"




const Competences = () => {
    const front = [
       "HTML5", 
       "CSS3 / Sass", 
       "JavaScript (ES6+)",
       "React",
      ];

  const back = [
    "Node.js / Express",
    "API REST",
    "MangooDB",
    "Gestion des données",
  ];

  const outils = [
    "Git / GitHub",
    "Vite",
    "Figma",
    "Lighthouse, Wave",
  ];

  return (
    <main className="competences">
      <section className="competences__header">
        <h1>Mes Compétences</h1>
        <p>
          Voici un résumé de mes compétences
        </p>
      </section>

      <section className="competences__grid">
        <div className="competences__card">
          <h2>Frontend</h2>
          <Collapse title="Technologies" content={front} />
        </div>

        <div className="competences__card">
          <h2>Backend & API</h2>
          <Collapse title="Technologies" content={back} />
        </div>

        <div className="competences__card">
          <h2>Outils</h2>
          <Collapse title="Outils" content={outils} />
        </div>
      </section>
    </main>
  );
};

export default Competences;
