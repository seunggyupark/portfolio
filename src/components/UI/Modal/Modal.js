import React from 'react';
import classes from './Modal.module.css';

// Expects to be placed in a container with overflow:hidden, and slides into the content with a greater z-index than the content below it.

const Modal = props => {

    const attachedClasses = [classes.Modal, props.show ? classes.Show : null];

    return (
        <div className={attachedClasses.join(' ')}>
            <h3>{props.header}</h3>
            {props.modalContent}
        </div>
    )
}

export default Modal;