import React from "react";
import { useLocation } from "react-router-dom";
import { RiContactsFill } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  //Initialisation de useLocation qui contient les information de l'URL actuelle
  const location = useLocation();
  //Vérification sur l'utilisateur est sur la page Projet ou About , applique le style en fonction de la page
  const isProjetPage =
    location.pathname.startsWith("/projet") || location.pathname === "/about";
  return (
    //Ajout de la class footer-projet si l'utilisateur est sur la page projet ou about
    <div id="footer" className={`footer ${isProjetPage ? "footer-projet" : ""}`}>
      <RiContactsFill className="icone-contact" />
      <span className="contact">Contact</span>
      <div className="profil-contact">
        <a
          href="https://github.com/Davikovich"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub className="icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/davidmdsfeather/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>
      <a href="mailto:davidmendespro@gmail.com" className="contact-link">
        <span className="mail">davidmendespro@gmail.com</span>
      </a>
    </div>
  );
};

export default Footer;
