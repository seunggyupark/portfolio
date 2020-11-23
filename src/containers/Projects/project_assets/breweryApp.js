import React from 'react';

import still from '../../../assets/img/reubens_still.png';
import gif from '../../../assets/img/reubens_project.gif';

const description = (<p>A key communication and process management tool for Reuben's Brews. The example showcases the Packaging App which displays all beers that are in the packaging phase 
    and their current statuses. Included in this project: 6 apps performing different brewery functions, a database, routine reports, KPI reports, and task scheduling automation. 
    <br/><br/>The apps are built with AppSheet and the backend uses Google Apps Scripts running on triggers. The final result was 75% less labor spent on data processing, increased product quality, increased facility management, and higher communication ability allowing all team members to make
    educated decisions.</p>);

const thoughts = (<p>This is my first project ever! When I worked at Reuben's Brews I was processing data by hand for about 10 hours a week. Additionally, figuring out
the statuses of 34 tanks of beer was a nightmare as I was in charge of all the QA testing and scheduling.<br/><br/>Out of a desire to no longer write data on paper and reduce my skyrocketing stress levels, I set out to
change how we did things entirely. I learned a lot about UX, proposing designs to management, and how to communicate technology to non-technical people.</p>);

export default {
    title: "Brewery Management App",
    still,
    gif,
    description,
    thoughts,
    link: "https://www.appsheet.com/start/cb3b4833-2274-4587-8251-6393f29b2939",
    gitHubLink: "https://github.com/seunggyupark/brewery-app",
    displayLink: true
};