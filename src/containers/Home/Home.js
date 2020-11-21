import React from 'react';
import classes from './Home.module.css';
import Social from '../../components/UI/Navigation/Social/Social';

const Home = props => (
    <div className={classes.Background}>
        <div className={classes.Home}>
            <h1>Hello! I am <span className={classes.Name}>Seung Gyu Park</span>.</h1>
            <h2>I am a <span className={classes.Job1}>frontend developer</span>, <span className={classes.Job2}>designer</span>, and <span className={classes.Job3}>process engineer</span> based in Seattle.<br/>
                I provide great user experiences, polished designs, and creative solutions.<br/>
                Actively seeking a position either remote or in office.</h2>
        </div>
        <div className={classes.Social}>
            <Social />
        </div>
    </div>
);

export default Home;