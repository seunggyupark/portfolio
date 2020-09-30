import React from 'react';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import classes from './Experiences.module.css';

import Scientist from '../../components/Images/Scientist';
import Intern from '../../components/Images/Intern';
import Developer from '../../components/Images/Developer';
import Student from '../../components/Images/Student';

import Carousel from '../../components/UI/Carousel/ExperiencesCarousel/ExperiencesCarousel';


const Experiences = () => {

    const title = [
        'Front-end Developer',
        'Quality Lead (@ Reuben\'s Brews)',
        'Process Engineer Intern (@ Norpac)',
        'Bioresource Engineering Degree'
    ];

    const content = [

        ['Experienced in JavaScript, CSS, HTML, React, Redux, and node.js. Minor experience in Python and Java.',
        'Great communication skills due to years in customer service which translates into design focused around the user',
        'Other skills: programming fundamentals, object oriented programming, component based architecture',
        'Actively developing projects to build my portfolio and learning to develop my skillset'],

        ['Developed a database and data collection system using web apps, providing automation, 75% reduced data processing time, and improved performance with process management and reporting.',
        'Created the quality program involving chemical, microbiological, and sensory analysis.',
        'Built a state of the art brewery lab and managed the testing schedule.',
        'Other responsibilites: SOP/FDA compliance, wastewater management, safety/risk assessments, and QA/QC'], 

        ['Provided research for the company\'s conversion into a recycled paper mill involving: compatible equipment, incompatible materials, and cost assessments',
        'Completed cost-reduction projects involving chemical trials and new processes',
        'Lead a support crew during plant shutdowns and directed their efforts',
        'Created blueprints for a new in-house dye mixing process'],
        
        ['Completed my degree at the University of Washington (December 2020)',
        'Strong process engineering fundamentals: project cost estimation, thermodynamics, chemical conversion, and process controls',
        'Other skills: critical thinking, root-cause analysis, research, and process logic',
        'Experienced in paper manufacturing and bioethanol production']];

    return (
        <Aux>
            <div className={classes.Experiences}>
                <div className={classes.Header}>
                    <h1>experiences</h1>
                    <h2 className={classes.Subheader}>Multifacted skillset from being in many different environments.</h2>
                </div>
                <div className={classes.CarouselContainer}>
                    <Carousel 
                        title={title}
                        content={content}
                        img={[Developer, Scientist, Intern, Student]} 
                    />
                </div>
            </div>
        </Aux>
    );
}

export default Experiences;