import React, { useEffect, useState } from 'react';
import classes from './TestimonialCarousel.module.css';
import TestimonialSlider from './TestimonialSlider/TestimonialSlider';

const Carousel = props => {
    const title = [...props.title];
    const list = [...props.content];
    const img = [...props.img];

    const [position, setPosition] = useState(0);
    const [transition, setTransition] = useState(false);
    const [change, setChange] = useState(0);
    const [order, setOrder] = useState(title.map((element, index) => index));
    const [toggleIncrease, setToggleIncrease] = useState(false);
    const [toggleDecrease, setToggleDecrease] = useState(false);
    const [allowClick, setAllowClick] = useState(true);

    let sliderComponents = [];
    const renderSliders = () => {
        order.forEach((element, index) => {
            sliderComponents.push((<TestimonialSlider style={{flexBasis: `${100/list.length}%`}}key={index} title={title[element]} content={list[element]} Image={img[element]}/>))
        });
    }
    renderSliders();

    // Right handler (translate to where it needs to go, then resets the array)
    const handlerSliderRight = value => {
        if (allowClick) {
            setAllowClick(false);
            setTransition(true);
            setChange(value);
            (value + position === order.length) ? setPosition(0) : setPosition(value + position);
            setToggleIncrease(!toggleIncrease);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (change !== 0) {
                setTransition(false);
                const orderToMove = [];

                order.forEach((element, index) => {
                    if (index < change) {
                        orderToMove.push(element)};
                });
                setOrder(order.slice(change).concat(orderToMove));
                setChange(0);
            }
            setAllowClick(true);
        }, 300);
    }, [toggleIncrease])

    // Left handler (changes the array, then brings the translate back to 0)
    const handlerSliderLeft = value => {
        if (allowClick) {
            setAllowClick(false);
            const count = order.length - value;
            const orderToMove = order.slice(count);
            setOrder(orderToMove.concat(order.slice(0, count)));
            setTransition(false);
            setChange(value);
            setToggleDecrease(!toggleDecrease);
        }
    }

    useEffect(() => {
        if (change !== 0) {
            setTimeout(() => {
                setTransition(true);
                (position === 0) ? setPosition(order.length - 1) : setPosition(position - change);
                setChange(0);
            }, 1);
        }
        setTimeout(() => {
            setAllowClick(true);
        }, 300);
    }, [toggleDecrease])

    // Delegates the function to either the right or left slider depending on if increasing or decreasing values 
    const handlerIndicator = key => {
        (key - position > 0) ? handlerSliderRight(key - position) : handlerSliderLeft(position - key);
    }

    const indicators = [];
    for (let i = 0; i < list.length; i++) {
        indicators.push((<li onClick={() => handlerIndicator(i)}
                                key={'indicator' + i}
                                className={position === i ? classes.Selected : null}/>));
    }
    console.log('ahh');
    const slidersWidth = {width: `${100*list.length}%`};
    return (
        <div className={classes.Container} style={props.passedStyle}>
            <div className={classes.Carousel}>
                <section 
                    className={classes.Sliders}
                    style={transition ? {...slidersWidth, transition: 'all 0.3s', transform: `translate(-${change*100/list.length}%)`} 
                                  : {...slidersWidth, transition: 'none', transform: `translate(-${change*100/list.length}%)`}}>
                    {sliderComponents}
                </section>
                <div className={classes.Controls}>
                    <span className={classes.ArrowRight} onClick={() => handlerSliderRight(1)}><ion-icon name="chevron-forward-outline"/></span>
                    <span className={classes.ArrowLeft} onClick={() => handlerSliderLeft(1)}><ion-icon name="chevron-back-outline"/></span>
                    <ul>
                        {indicators}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Carousel;

