import React from 'react';

import still from '../../../assets/img/pigeon_still.png';
import gif from '../../../assets/img/pigeon_project.gif';

const description = (<p>An email formatter for making task schedules for production environments. Most task management applications, such as Monday, are fantastic but a bit too complex for production and manufacturing, where employees may simply need a list of
    tasks that need to get done. A personal tool that I have used in manufacturing environments, Pigeon Task quickly creates a formatted email that is then emailed to the team.<br/><br/>The target audience are managers and shift leads in manufacturing, production, 
    or skilled labor industries. It is a webapp that completes a simple task for people who need an easy to comprehend tool.</p>);

const thoughts = (<p>This is my first project after learning JavaScript, CSS, and HTML.<br/><br/>It needed to be digestable since many production environments do not use task management applications.
I have seen this same issue in manufacturing environments where teams are managed with email and I wanted to present a simple solution.</p>);

export default {
    title: "Pigeon Task",
    still,
    gif,
    description,
    thoughts,
    link: "http://pigeontask.com/",
    gitHubLink: "https://github.com/seunggyupark/pigeon-task",
    displayLink: true,
};