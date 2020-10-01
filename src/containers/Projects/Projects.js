import React, { useEffect, useState } from 'react';
import classes from './Projects.module.css';
import colorProject from '../../assets/img/colorcards_project.gif';
import reubensProject from '../../assets/img/reubens_project.gif';
import pigeonProject from '../../assets/img/pigeon_project.gif';
import colorStill from '../../assets/img/colorcards_still.png';
import reubensStill from '../../assets/img/reubens_still.png';
import pigeonStill from '../../assets/img/pigeon_still.png';

import Project from './Project/Project';



const Projects = () => {

    // const [autoPlayPosition, setAutoPlayPosition] = useState(0)

    // const handleScroll = () => {
    //     const height = document.documentElement.scrollHeight;
    //     const scrollPosition = window.pageYOffset;
        
    //     if (scrollPosition >= height * 0.45 && autoPlayPosition !== 2) {
    //         setAutoPlayPosition(2);
    //     } else if (scrollPosition  > height * 0.25 && autoPlayPosition !== 1) {
    //         setAutoPlayPosition(1);
    //     } else if (scrollPosition  >= 0) {
    //         setAutoPlayPosition(0);
    //     }
    // }


    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, { passive: true });
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    
    // const portfolioDescription = (<p>A portfolio focused on minimal design with grey tones and a slight accent of color. The intent of this portfolio is to display my developer skills,
    //                     experience, and idea of a clean design. The focus is to keep it simple and do simplicity well. The entire website was designed with the user in mind.
    //                     <br/><br/> 
    //                     Featuring menu animations, an infinite content carousel, and modular components - all coded from scratch. Thank you for getting this far and I appreciate your time!</p>);
    
    const reubensDescription = (<p>A key communication and process management tool for Reuben's Brews. The example showcases the Packaging App which displays all beers that are in the packaging phase 
                       and their current statuses. Included in this project: 6 apps performing different brewery functions, a database, routine reports, KPI reports, and task scheduling automation. 
                        <br/><br/>The apps are built with AppSheet and the backend uses Google Apps Scripts running on triggers. The final result was 75% less labor spent on data processing, increased product quality, increased facility management, and higher communication ability allowing all team members to make
                         educated decisions.</p>);
    
    const pigeonDescription = (<p>An email formatter for making task schedules for production environments. Most task management applications, such as Monday, are fantastic but a bit too complex for production and manufacturing, where employees may simply need a list of
                                tasks that need to get done. A personal tool that I have used in manufacturing environments, Pigeon Task quickly creates a formatted email that is then emailed to the team.<br/><br/>The target audience are managers and shift leads in manufacturing, production, 
                                or skilled labor industries. It is a webapp that completes a simple task for people who need an easy to comprehend tool.</p>);

    const colorDescription = (<p>A practice project using React and Sass. It accepts a color in rgb or hex and returns colors under different categories: monochromatic, complementary, analogic, and more.
        This is a quick project that I built to practice Sass, API calls, pagination, and git.<br/><br/>Features a component based structure, instantly loading pages, and responsive web design. It helped me solidify importing mixins, understand pagination
        and how to uses flexbox for card-type content.</p>)

    // const portfolioThoughts = (<p>This is my first project using React to test myself on what I have learned.
    //    <br/><br/>I wanted this portfolio to convey information in a very effective manner. 
    //     Most of my resumes for engineering positions have been one page and I wanted this webpage to reflect that same concept. Only the essentials with a structured flow.
    // </p>);

    const reubensThoughts = (<p>This is my first project ever! When I worked at Reuben's Brews, I was processing data by hand for about 10 hours a week. Additionally, figuring out
        the statuses of 34 tanks of beer was a nightmare, as I was in charge of all the QA testing and scheduling.<br/><br/>Out of a desire to no longer write data on paper, and reduce my skyrocketing stress levels, I set out to
        change how we did things entirely. I learned a lot about UX, technical debt, and how to communicate technology to non-technical people.</p>);

    const pigeonThoughts = (<p>This is my first project after learning JavaScript, CSS, and HTML.<br/><br/>It needed to be digestable since many production environments do not use task management applications.
        I have seen this same issue in manufacturing environments where teams are managed with email and I wanted to present a simple solution.</p>);



    return (
        <div className={classes.Container}>
            <div className={classes.Header}>
                <h1>projects</h1>
                <h2 className={classes.Subheader}>Collaborative and personal projects that I am proud of.</h2>
            </div>
            <div className={classes.ContentContainer}>
                <Project hideStill={null} title={'Brewery Management App'} 
                         still={reubensStill} gif={reubensProject} description={reubensDescription} 
                         modalContent={reubensThoughts} linkStyle={{display: 'none'}} showCode={{display: 'none'}}/>

                <Project hideStill={null} title={'Pigeon Task'} 
                         link={"http://pigeontask.com/"} still={pigeonStill} 
                         gif={pigeonProject} description={pigeonDescription} modalContent={pigeonThoughts} 
                         codeLink={"https://github.com/seunggyupark/pigeon-task"}/>

                <Project hideStill={null} title={'Color Cards'} 
                         link={"https://color-car-7e6c6.web.app/"} still={colorStill} 
                         gif={colorProject} description={colorDescription}
                         borderStyle={{border: 'none'}} modalStyle={{display: 'none'}}
                         codeLink={"https://github.com/seunggyupark/color-cards"}/>
            </div>
        </div>
    );
}

export default Projects;