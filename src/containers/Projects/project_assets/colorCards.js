import React from 'react';

import still from '../../../assets/img/colorcards_still.png';
import gif from '../../../assets/img/colorcards_project.gif';

const description = (<p>A practice project using React and Sass. It accepts a color in rgb or hex and returns colors under different categories: monochromatic, complementary, analogic, and more.
        This is a quick project that I built to practice Sass, API calls, pagination, and git.<br/><br/>Features a component based structure, instantly loading pages, and responsive web design. It helped me solidify 
        importing mixins, pagination, and how to use flexbox for card-type content.</p>);

export default {
    title: "Color Cards",
    still,
    gif,
    description,
    link: "https://color-car-7e6c6.web.app/",
    gitHubLink: "https://github.com/seunggyupark/color-cards",
    displayLink: true,
};