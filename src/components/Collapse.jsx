import React, { useState, useId } from "react";
import PropTypes from "prop-types";
import { FaChevronUp } from "react-icons/fa";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  const toggleCollapse = () => setIsOpen((o) => !o);

  const renderContent = () => {
    if (!isOpen) return null;

    // Si c'est un tableau (strings ou nodes)
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li> // item peut être string OU React node
          ))}
        </ul>
      );
    }

    // Sinon un seul élément : string OU React node
    // On évite <p> pour ne pas casser si c'est un composant
    return <div className="collapse-body">{content}</div>;
  };

  return (
    <div className="collapse">
      <button
        className="collapse-header"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
        aria-controls={contentId}
        type="button"
      >
        <span className={`arrow ${isOpen ? "open" : ""}`}>{title}</span>
        <FaChevronUp className={`chevron ${isOpen ? "open" : ""}`} />
      </button>

      <div
        id={contentId}
        className={`collapse-content ${isOpen ? "open" : ""}`}
        role="region"
        aria-hidden={!isOpen}
      >
        {renderContent()}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.node,                 // un seul node (texte OU composant)
    PropTypes.arrayOf(PropTypes.node), // tableau de nodes (textes et/ou composants)
  ]).isRequired,
};

export default Collapse;
