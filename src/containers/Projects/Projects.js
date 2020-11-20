import React, { useEffect, useState, useCallback } from 'react';
import classes from './Projects.module.css';

import pigeonTask from './project_assets/pigeonTask';
import portfolio from './project_assets/portfolio';
import breweryApp from './project_assets/breweryApp';
import locationCo from './project_assets/locationCo';
import colorCards from './project_assets/colorCards'
import Project from './Project/Project';



const Projects = () => {
    const [autoPlayPosition, setAutoPlayPosition] = useState(0)

    const projects = [breweryApp, locationCo, colorCards, pigeonTask, portfolio];

    const handleScroll = useCallback(() => {
        const height = document.documentElement.scrollHeight;
        const scrollPosition = window.pageYOffset;
        const setPosition = Math.floor(scrollPosition / (height / projects.length));
        setAutoPlayPosition(setPosition);
    }, [projects]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className={classes.Container}>
            <div className={classes.Header}>
                <h1>projects</h1>
                <h2 className={classes.Subheader}>Collaborative and personal projects that I am proud of.</h2>
            </div>
            <div className={classes.ContentContainer}>
                {projects.map((prj, index) => (
                    <Project
                        key={index}
                        hideStill={autoPlayPosition === index ? true : null}
                        title={prj.title} 
                        still={prj.still}
                        gif={prj.gif} 
                        description={prj.description} 
                        showThoughts={prj.thoughts ? true : false}
                        modalContent={prj.thoughts}
                        link={prj.link}
                        linkStyle={!prj.displayLink ? {display: 'none'}: null}
                        gitHubLink={prj.gitHubLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;