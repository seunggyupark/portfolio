import React from 'react';
import classes from './Social.module.css';

const social = props => (
    <div className={classes.Social}>
        <a href="https://twitter.com/AreWeCodingYet" className={classes.twitter} target="_blank" rel="noopener noreferrer"><ion-icon name="logo-twitter" /></a>
        <a href="https://github.com/seunggyupark" className={classes.github} target="_blank" rel="noopener noreferrer"><ion-icon name="logo-github" /></a>
        <a href="https://www.linkedin.com/in/seungquality/" className={classes.linkedin} target="_blank" rel="noopener noreferrer"><ion-icon name="logo-linkedin" /></a>
    </div>
);

export default social;