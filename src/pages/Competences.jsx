import React from "react";
import Collapse from "../components/Collapse";

const Competences = () => {
  // On passe des React nodes (div + meter). Chaque item a une key unique.
  const front = [
    <div key="HTML5" className="skill-row">
      <span className="skill-name">HTML5</span>
      <meter min="0" max="100" value={90} aria-label="HTML5 90%" className="skill-meter" />
      <span className="skill-level">90%</span>
    </div>,
    <div key="CSS3 / Sass" className="skill-row">
      <span className="skill-name">CSS3</span>
      <meter min="0" max="100" value={85} aria-label="CSS3 / Sass 85%" className="skill-meter" />
      <span className="skill-level">85%</span>
    </div>,
    <div key="JavaScript (ES6+)" className="skill-row">
      <span className="skill-name">JavaScript</span>
      <meter min="0" max="100" value={80} aria-label="JavaScript (ES6+) 80%" className="skill-meter" />
      <span className="skill-level">80%</span>
    </div>,
    <div key="React" className="skill-row">
      <span className="skill-name">React</span>
      <meter min="0" max="100" value={78} aria-label="React 78%" className="skill-meter" />
      <span className="skill-level">78%</span>
    </div>,
  ];

  const back = [
    <div key="Node.js / Express" className="skill-row">
      <span className="skill-name">Node.js</span>
      <meter min="0" max="100" value={70} aria-label="Node.js / Express 70%" className="skill-meter" />
      <span className="skill-level">70%</span>
    </div>,
    <div key="API REST" className="skill-row">
      <span className="skill-name">API REST</span>
      <meter min="0" max="100" value={75} aria-label="API REST 75%" className="skill-meter" />
      <span className="skill-level">75%</span>
    </div>,
    <div key="MongoDB" className="skill-row">
      <span className="skill-name">MongoDB</span>
      <meter min="0" max="100" value={65} aria-label="MongoDB 65%" className="skill-meter" />
      <span className="skill-level">65%</span>
    </div>,
    <div key="Gestion des données" className="skill-row">
      <span className="skill-name">Gestion des données</span>
      <meter min="0" max="100" value={72} aria-label="Gestion des données 72%" className="skill-meter" />
      <span className="skill-level">72%</span>
    </div>,
  ];

  const outils = [
    <div key="Git / GitHub" className="skill-row">
      <span className="skill-name">GitHub</span>
      <meter min="0" max="100" value={80} aria-label="Git / GitHub 80%" className="skill-meter" />
      <span className="skill-level">80%</span>
    </div>,
    <div key="Vite" className="skill-row">
      <span className="skill-name">Vite</span>
      <meter min="0" max="100" value={75} aria-label="Vite 75%" className="skill-meter" />
      <span className="skill-level">80%</span>
    </div>,
    <div key="Figma" className="skill-row">
      <span className="skill-name">Figma</span>
      <meter min="0" max="100" value={70} aria-label="Figma 70%" className="skill-meter" />
      <span className="skill-level">88%</span>
    </div>,
    <div key="Lighthouse, WAVE" className="skill-row">
      <span className="skill-name">Lighthouse, WAVE</span>
      <meter min="0" max="100" value={68} aria-label="Lighthouse, WAVE 68%" className="skill-meter" />
      <span className="skill-level">90%</span>
    </div>,
  ];

  return (
    <main className="competences">
      <section className="competences__header">
        <h1>Mes Compétences</h1>
        <p>Voici un résumé de mes compétences</p>
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
