import classes from './MenuButton.module.css';
import React from 'react';

const menuButton = props => {

  const buttonClasses = [classes.ToggleButton, props.show ? classes.Open : null];
  const line2Style = [classes.Line2, props.show ? classes.Shrink : null]
  const line3Style = [classes.Line3, props.show ? classes.Shrink : null]

  
  return (
    <div onClick={props.toggle} className={buttonClasses.join(' ')}>
      <div className={classes.Line1}/>
      <div className={line2Style.join(' ')}/>
      <div className={line3Style.join(' ')}/>
    </div>
  );
};

export default menuButton;