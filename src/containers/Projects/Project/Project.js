import classes from './Project.module.css';
import Modal from '../../../components/UI/Modal/Modal';
import React, { useState } from 'react';
import GifPlayer  from 'react-gif-player';

const Project = props => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    const style = !props.showThoughts ? {display: "none"} : {};

    return (
        <div>
            <h2 className={classes.Title}>{props.title}</h2>
            <div className={classes.ProjectContainer} style={props.borderStyle}>
                <div className={classes.ImageContainer}>
                    <GifPlayer gif={props.gif} still={props.still} className={classes.Gif} autoplay={props.key === 0} />
                </div>
                <div className={classes.Description}>
                    <div className={classes.TextDescription}>
                        <Modal modalContent={props.modalContent} header={"Thoughts"} show={showModal}/>
                        {props.description}
                    </div>
                    <ul>
                        <li style={props.linkStyle}><a href={props.link} target="_blank" rel="noopener noreferrer" className={classes.Demo}>
                            <ion-icon name="link-outline" /></a></li>
                        <li style={props.showCode} className={classes.GithubContainer}><a href={props.gitHubLink} target="_blank" rel="noopener noreferrer" className={classes.Github}>
                            <ion-icon name="logo-github" /></a></li>
                        <li onClick={toggleModal}><ion-icon name="information-circle-outline" style={style}/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project;


// Button needs to activate a modal with the description passed in
