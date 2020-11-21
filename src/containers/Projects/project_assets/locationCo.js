import React from 'react';

import still from '../../../assets/img/locationCo_still.png';
import gif from '../../../assets/img/locationCoGif.gif';

const description = (<p>A MERN fullstack application that allows users to share locations and images with eachother. Features authentication, 
    route guarding (on frontend and backend), image uploads, and React hooks for state management (useContext, useReducer, and custom hooks). Supports all CRUD operations.<br/><br/>
    Additionally, it includes: Google Maps geocaching and map data to view locations on a map modal. Reuseable components across the entire site such as buttons, modals, and card styles.</p>);

const thoughts = (<p>This is my latest project that I completed as an entry into backend development. It helped me understand how everything works together, answering questions 
    I had about how authentication works on the backend and how sensitive data is transferred to the client.<br/><br/>I became familiar with using React hooks and creating 
    custom hooks for state management.</p>);

export default {
    title: "LocationCo",
    still,
    gif,
    description,
    thoughts,
    link: "https://location-co.web.app/",
    gitHubLink: "https://github.com/seunggyupark/location-co",
    displayLink: true,
};