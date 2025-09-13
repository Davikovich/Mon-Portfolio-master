import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom"; // Renommage de Link de react-router-dom
import { Link as ScrollLink } from "react-scroll"; 

const Header = () => {
  //Initialisation de useLocation qui contient les information de l'URL actuelle
  const location = useLocation();

  const [isSticky, setIsSticky] = useState(false); // État local pour gérer si le header doit être sticky ou non
  //Fonction qui sera appelé  lors du défilement de la page pour changer l'état du header
  const handleScroll = () => {
    // Vérifie la position de défilement si superieur a 50px et si la largeur de la fenetre est superieur a 768px
    if (window.scrollY > 50 && window.innerWidth > 768) {
      setIsSticky(true); // Si la condition est vrai alors le header sera sticky
    } else {
      setIsSticky(false); //Si la condition est fausse alors le header ne sera pas sticky
    }
  };
  //Utilisation de useEdffect pour ajouter ou retirer l'ecouteur d'evenement lors du défilement de la page
  useEffect(() => {
    // Ajoute l'écouteur d'événements pour le défilement
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Supprime l'event listener
    };
  }, []); // Le tableau vide [] signifie que l'effet s'exécute une seule fois lors du montage

  // Vérifie si l'utilisateur est sur une page où le header ne doit pas être sticky
  const isStickyDisabled = location.pathname === "/";
  

  return (
    //Ajout de la classe isSticky si la valeur isSticky est vrai et que l'effet est autorisé
    <nav className={`header ${isSticky && isStickyDisabled ? "sticky" : ""}`}>
      <div className="Logo">
        <h1>David Mendes</h1>
      </div>
      <div className="nav-link">
        {/* Lien vers la page d'accueil avec une classe active si l'utilisateur est sur la page d'accueil */}
        <RouterLink to="/" className={location.pathname === "/" ? "active" : ""}>
          Mes projets
        </RouterLink>
        {/* Lien vers la page "A propos" avec une classe active si l'utilisateur est sur cette page */}
        <RouterLink
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          A propos
        </RouterLink>       
        {/*Au clic sur contact, rediriger vers le bas de page ou se trouve les informations de contact */}
        <ScrollLink
          to="footer" 
          smooth={true} // Ajoute le défilement fluide
          duration={500} // Durée de l'animation en ms
          className="contact-link"
        >
          Contact
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Header;
