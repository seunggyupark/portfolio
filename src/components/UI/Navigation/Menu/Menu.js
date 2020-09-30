import React from 'react';
import MenuButton from './MenuButton/MenuButton';
import Aux from '../../../../hoc/Auxilliary/Auxilliary';
import classes from './Menu.module.css';
import { Link } from 'react-router-dom';


const menu = props => {
    let attachedClasses = [classes.Menu, props.show ? classes.Open : classes.Close];

    return (
        <Aux>
        <MenuButton toggle={props.toggle} show={props.show}/>
        <nav className={attachedClasses.join(' ')}>
            <ul>
                <Link to="/" style={{ textDecoration: 'none' }}><li onClick={props.routing}>home</li></Link>
                <Link to="/projects" style={{ textDecoration: 'none' }}><li onClick={props.routing}>projects</li></Link>
                <Link to="/experiences" style={{ textDecoration: 'none' }}><li onClick={props.routing}>experiences</li></Link>
                <Link to="/testimonials" style={{ textDecoration: 'none' }}><li onClick={props.routing}>testimonials</li></Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}><li onClick={props.routing}>contact</li></Link>
            </ul>
        </nav>
    </Aux>
    )
};

export default menu;