import React from 'react';

import still from '../../../assets/img/portfolio_still.png';
import gif from '../../../assets/img/portfolio_project.gif';

const description = (<p>A portfolio focused on minimal design with grey tones and a slight accent of color. The intent of this portfolio is to display my developer skills,
    experience, and idea of a clean design. The focus is to keep it simple and do simplicity well. The entire website was designed with the user in mind.
    <br/><br/> Featuring menu animations, an infinite content carousel, and modular components - all coded from scratch. Thank you for getting this far and I appreciate your time!</p>);

const thoughts = (<p>This is my first project using React to test myself on what I have learned.
    <br/><br/>I wanted this portfolio to convey information in a very effective manner. 
     Most of my resumes for engineering positions have been one page and I wanted this webpage to reflect that same concept. Only the essentials with a structured flow.
    </p>);

export default {
    still,
    gif,
    description,
    thoughts,
    link: "https://seung.dev/",
    gitHubLink: "https://github.com/seunggyupark/portfolio",
    displayLink: true,
};