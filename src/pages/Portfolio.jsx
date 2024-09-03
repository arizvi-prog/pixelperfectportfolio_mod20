import React from 'react';
import Project from '../components/Project';

function Portfolio() {
    return (
        <section>
            <h2>Portfolio</h2>
            <Project
                title="Project 1"
                image="project1-image-url"
                deployedLink="project1-deployed-url"
                githubLink="project1-github-url"
            />
            {/* Repeat for other projects */}
        </section>
    );
}

export default Portfolio;
