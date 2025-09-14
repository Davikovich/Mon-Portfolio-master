import React, { useState, useId } from "react";
import PropTypes from "prop-types";
import { FaChevronUp } from "react-icons/fa";

const Collapse = ({ title, content, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();
  const toggleCollapse = () => setIsOpen(o => !o);

  const renderContent = () => {
    if (!isOpen) return null;

    // 1) Si on a des children, on les rend tels quels (idéal pour <SkillsList />)
    if (children) return <div className="collapse-body">{children}</div>;

    // 2) Sinon on gère "content" (string | ReactNode | ReactNode[])
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item) => {
            const key =
              typeof item === "string"
                ? item
                : (item?.key ?? JSON.stringify(item));
            return <li key={key}>{item}</li>;
          })}
        </ul>
      );
    }

    // 3) Fallback: un seul élément (string ou node)
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
  // "content" devient optionnel puisque "children" peut être utilisé
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  children: PropTypes.node,
};

export default Collapse;
