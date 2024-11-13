import React from 'react';

function ProjectCard({ src, link, h3, description }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="projectCard">
            <img src={src} alt={`${h3} logo`} />
            <h3>{h3}</h3>
            <p>{description}</p>

        </a>
    );
}

export default ProjectCard;
