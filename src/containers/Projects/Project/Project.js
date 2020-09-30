import classes from './Project.module.css';
import Modal from '../../../components/UI/Modal/Modal';
import React, { useState } from 'react';

const Project = props => {

    const [showModal, setShowModal] = useState(false);

    const stillContainerStyles = [classes.StillContainer, props.hideStill ? classes.Hidden : null];

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div>
            <h2 className={classes.Title}>{props.title}</h2>
            <div className={classes.ProjectContainer} style={props.borderStyle}>
                <div className={classes.ImageContainer}>
                    <div className={stillContainerStyles.join(' ')} >
                        <div className={classes.Layer} />
                        <img src={props.still} alt="Still" className={classes.Still} />
                        <button className={classes.PlayPause}><ion-icon name="play-circle-outline" /></button>
                    </div>
                    <img src={props.gif} alt="Gif" className={classes.Gif} />
                </div>
                <div className={classes.Description}>
                    <div className={classes.TextDescription}>
                        <Modal modalContent={props.modalContent} header={"Thoughts"} show={showModal}/>
                        {props.description}
                    </div>
                    <ul>
                        <li style={props.linkStyle}><a href={props.link} target="_blank" rel="noopener noreferrer" className={classes.Demo}>
                            <ion-icon name="link-outline" /></a></li>
                        <li style={props.showCode} className={classes.GithubContainer}><a href={props.codeLink} target="_blank" rel="noopener noreferrer" className={classes.Github}>
                            <ion-icon name="logo-github" /></a></li>
                        <li onClick={toggleModal}><ion-icon name="information-circle-outline" /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project;


// Button needs to activate a modal with the description passed in
