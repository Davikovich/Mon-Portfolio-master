import React from "react";
import PropTypes from "prop-types";

const ProjectImage = ({ cover, title }) => {
    return (
        <div className="project-image">
            <img src={process.env.PUBLIC_URL + cover} alt={`Projet ${title}`} className="project-cover" />
        </div>
    );
};

ProjectImage.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default ProjectImage;
