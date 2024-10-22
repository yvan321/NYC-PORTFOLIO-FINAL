import React from 'react';

function EducationCard({ src, link, h2, h3, p }) {
    return (
      <a href={link} target="_blank">
        <img className="hover" src={src} alt={`${h3} logo`} />
        <h2>{h2}</h2>
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    );
  }
  
  export default EducationCard;
