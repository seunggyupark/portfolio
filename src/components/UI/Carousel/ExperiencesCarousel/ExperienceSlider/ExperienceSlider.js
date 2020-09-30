import React from 'react';
import classes from './ExperienceSlider.module.css';

const Slider = props => {
    const list = [];
    props.bulletPoints.forEach((element, index) => {
        list.push((<li key={index}>{element}</li>));
    });

    // Decide how you would like your content to look insider the .Content div

    return (
        <div className={classes.Slider}>
            <h1>{props.title}</h1>
            <div className={classes.Content}> 
                
                <ul>{list}</ul>
                <div className={classes.Image}>
                    <props.Image/>
                </div>
            </div>
        </div>
    )
};

export default Slider;