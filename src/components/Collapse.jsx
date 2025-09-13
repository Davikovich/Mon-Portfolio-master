import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronUp } from "react-icons/fa";

const Collapse = ({ title, content }) => {
  // Etat qui determine si le contenu est ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false);
  // Fonction qui determine l'ouverture et la fermeture du contenu
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={toggleCollapse}>
        <span className={`arrow ${isOpen ? "open" : ""}`}>{title}</span> 
         {/* La classe 'open' est ajoutée si isOpen est vrai */}
        <FaChevronUp className={`chevron ${isOpen ? "open" : ""}`} />
      </button>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
          {/* Si isOpen est vrai, afficher le contenu */}
        {isOpen && 
          (Array.isArray(content) ? ( // Si content est un tableau
            <ul>
              {content.map((item, index) => ( //Afficher chaque élement du tableau 
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            // Sinon, affiche un paragraphe
            <p>{content}</p>
          ))}
      </div>
    </div>
  );
};
// Défini des propsTypes pour valider les types de props du composant
Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.arrayOf(PropTypes.string).isRequired,
    ]).isRequired,
};
export default Collapse;
