import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate(); // Initialiser du hook useNavigate qui permet de naviguer vers une autre page

  //Fonction qui permet de gérer le clic sur la card et de naviguer vers la page projet
  const handleNavigation = () => {
    navigate(`/projet/${id}`); //Redirige vers l'URL qui cotient l'id 
  };

  return (
    <div className="card" onClick={handleNavigation}> {/* Au clic sur la card, on appelle handleNavigation pour changer de page. */}
      <img src={process.env.PUBLIC_URL + cover} alt={title} className="card-cover" />
      <span className="card-title">{title}</span>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
