import React from 'react';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import classes from './Testimonials.module.css';

import Thor from '../../components/Images/Thor';
import Kat from '../../components/Images/Kat';

import Carousel from '../../components/UI/Carousel/TestimonialCarousel/TestimonialCarousel';


const Testimonials = () => {

    const title = [
        ['Thor', 'Experimental Brewer'],
        ['Kat', 'Lead Lab Technician']
    ];

    const content = [
        [`Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.`],
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
                        img={[Thor, Kat]} 
                    />
                </div>
            </div>
        </Aux>
    );
}

export default Testimonials;