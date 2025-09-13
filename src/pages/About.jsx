import React, { useEffect } from "react";

const About = () => {
  //Permet de s'assurer que la page soit en position haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Tableau vide , L'effet s'exécute une seule fois lors du chargement de la page du projet
  return (
    <article className="apropos">
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/DavidMendes.webp`} alt="David Mendes " />
        <p>Moi, David ! </p>
        <p>
          J'ai 30 ans et suis actuellement en reconversion professionnelle vers
          le <b>développement web</b> grâce à une formation d'OpenClassrooms.
        </p>

        <p>
        Auparavant, j’étais cadre maçon dans l’entreprise familiale de mon père. Cette expérience m’a permis d’acquérir de nombreuses compétences essentielles : rigueur, sens de l’organisation, gestion des priorités et capacité à me remettre en question pour toujours améliorer ma façon de travailler.
        </p>

        <p>
        Aujourd’hui, j’ai choisi de tourner la page du secteur du bâtiment pour me consacrer pleinement au développement web. C’est une passion que je nourris depuis mon enfance pour la programmation et les nouvelles technologies. J’aime apprendre, créer et relever des défis techniques qui me poussent à progresser chaque jour.
        </p>
        
        <p>
        De nature pointilleuse et exigeante, je mets tout mon temps, mon énergie et mon savoir-faire pour atteindre mes objectifs. Mon ambition est de construire un parcours solide dans le développement en continuant à développer mes compétences et en contribuant à des projets concrets et utiles.
        </p>

        <p>
        En dehors du code, je suis passionné de sport, amateur de littérature et, à mes heures perdues, je prends plaisir à explorer quelques jeux vidéo. Ces centres d’intérêt nourrissent ma curiosité, mon esprit d’analyse et mon goût du challenge.
        </p>

        <p>
        Merci d’avoir pris le temps de lire ma présentation. J’espère avoir l’occasion de vous croiser bientôt pour de nouvelles aventures et poursuivre ma croisière vers le développement !
        </p>

      </div>
    </article>
  );
};

export default About;
