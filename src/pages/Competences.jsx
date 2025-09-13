// src/pages/Competences.jsx
import React from "react";
import Collapse from "../components/Collapse";




const Competences = () => {
    const front = [
       "HTML5 (sémantique, accessibilité de base)", 
       "CSS3 / Sass (BEM, animations, responsive)", 
       "JavaScript (ES6+)", "React (hooks, router, composants réutilisables)"
      ];

  const back = [
    "Node.js / Express (bases)",
    "API REST (consommation, erreurs, loaders)",
    "Gestion des données (JSON, mock, pagination)",
  ];

  const outils = [
    "Git / GitHub (branching, PR, issues)",
    "Vite / CRA, NPM scripts",
    "Figma (lecture de maquettes)",
    "Lighthouse, Web Vitals (perf de base)",
  ];

  return (
    <main className="competences">
      <section className="competences__header">
        <h1>Mes Compétences</h1>
        <p>
          Un aperçu clair de mes stacks, outils et pratiques que j’utilise au quotidien.
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
          <h2>Outils & Méthodes</h2>
          <Collapse title="Outils" content={outils} />
        </div>
      </section>
    </main>
  );
};

export default Competences;
