import React, { useRef, useState }from 'react';
import emailjs from 'emailjs-com';
import classes from './Contact.module.css';
import Social from '../../components/UI/Navigation/Social/Social';
import Modal from '../../components/UI/Modal/Modal';

const Contact = () => {

    const name = useRef(null);
    const email = useRef(null);
    const message = useRef(null);

    const [invalid, setInvalid] = useState({name: false, email: false, message: false})
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const handlerSubmit = event => {
        event.preventDefault();

        const userInput = {
            fromName: name.current.value,
            fromEmail: email.current.value,
            message: message.current.value
        }

        const invalidTemp = {name: false, email: false, message: false}
        if (!userInput.fromName) {
            invalidTemp.name = true;
        } if (!userInput.fromEmail) {
            invalidTemp.email = true;
        } if (!userInput.message) {
            invalidTemp.message = true;
        }
        setInvalid(invalidTemp);

        if (userInput.fromName && userInput.fromEmail && userInput.message) {
            emailjs.send('service token', 'template token', userInput, 'user token')
                .then(() => {
                    toggleModal()
                }, error => {
                    alert('Something went wrong! Could you email me directly at park@seung.dev?');
                });
        }
    }

    const thankYouMessage = (<p style={{fontSize: "20px", lineHeight: "200%", textAlign: "center"}}>I appreciate that you took the time to look through my portfolio. I will make sure to get back to you within 48 hours. Meanwhile, you can check me out on my
    Twitter, GitHub, and LinkedIn below.</p>);


    const nameIcon = invalid.name ? (<ion-icon name="warning-outline" style={{color: "#FFCC00"}}/>) : (<ion-icon name="person-outline" />);
    const emailIcon = invalid.email ? (<ion-icon name="warning-outline" style={{color: "#FFCC00"}}/>) : (<ion-icon name="mail-outline" />);
    const messageIcon = invalid.message ? (<ion-icon name="warning-outline" style={{color: "#FFCC00"}}/>) : (<ion-icon name="create-outline" className={classes.MessageIcon}/>);
    
    return (
        <div className={classes.Container}>
            <div className={classes.Header}>
                <h1>contact</h1>
                <h2 className={classes.Subheader}>I would be happy to answer any questions or inquiries you have!</h2>
            </div>
            <div className={classes.ContentContainer}>
                <div className={classes.Form}>
                    <form>
                        <span>{nameIcon}<input className={classes.Input} type="text" name="name" placeholder="Name" ref={name} autoComplete="off"/></span>
                        <span>{emailIcon}<input className={classes.Input} type="email" name="email" placeholder="Email" ref={email} autoComplete="off"/></span>
                        <span className={classes.MessageSpan}>{messageIcon}<textarea ref={message} className={classes.Text} name="message" placeholder="Message"></textarea></span>
                        <button className={classes.Submit} onClick={handlerSubmit}>Send Message</button>
                    </form>
                    <Modal modalContent={thankYouMessage} header={"Thank you for contacting me!"} show={showModal}/>
                    <div className={classes.Social}>
                        <Social /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
