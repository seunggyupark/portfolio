import React from 'react';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import classes from './Testimonials.module.css';

import Matt from '../../components/Images/Matt';
import Kat from '../../components/Images/Kat';

import Carousel from '../../components/UI/Carousel/TestimonialCarousel/TestimonialCarousel';


const Testimonials = () => {

    const title = [
        ['Matt', 'Brewer'],
        ['Kat', 'Lead Lab Technician']
    ];

    const content = [
        [`I admire Seung's ability to set a goal and follow through with it. The fact he built a database from scratch and maintained it, whilst juggling managing a lab, wastewater system, and heading a safety committee also speaks to his preserverance and dedication to projects. Pair that with his ability to receive and give constructive feedback, Seung has easily been one of the top coworkers I've had.`],
        ['Seung has the unique blend of patience and skill that is often only reserved for educators. Getting the chance to watch him build our lab and database from scratch was both educational and a bit awe inspiring. His creativity and problem solving shines in everything he does, and I consider myself fortunate to have been able to learn and work alongside him.']];

    return (
        <Aux>
            <div className={classes.Experiences}>
                <div className={classes.Header}>
                    <h1>testimonials</h1>
                    <h2 className={classes.Subheader}>Thank you to those who have helped me grow. Here are some words from them.</h2>
                </div>
                <div className={classes.CarouselContainer}>
                    <Carousel 
                        title={title}
                        content={content}
                        img={[Matt, Kat]} 
                    />
                </div>
            </div>
        </Aux>
    );
}

export default Testimonials;