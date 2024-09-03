import React from 'react';

function Project({ title, image, deployedLink, githubLink }) {
    return (
        <div className="project">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Live</a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
    );
}

export default Project;
