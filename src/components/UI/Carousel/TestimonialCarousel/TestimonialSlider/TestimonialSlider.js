import React from 'react';
import classes from './TestimonialSlider.module.css';

const Slider = props => {

    // Decide how you would like your content to look insider the .Content div

    return (
        <div className={classes.Slider}>
            <h1>{props.title[0]}</h1><h3>{props.title[1]}</h3>
            <div className={classes.Content}> 
                
                <div className={classes.Image}>
                    <props.Image/>
                </div>
                <p>"{props.content}"</p>
            </div>
        </div>
    )
};

export default Slider;