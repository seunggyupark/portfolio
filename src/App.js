import React, {useState} from 'react';
import { Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import Experiences from './containers/Experiences/Experiences';
import Testimonials from './containers/Testimonials/Testimonials';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';

import Aux from './hoc/Auxilliary/Auxilliary';
import Menu from './components/UI/Navigation/Menu/Menu';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = fromButton => {
    if (showMenu && !fromButton) {
      setTimeout(() => {
        setShowMenu(!showMenu);
      }, 500);
    } else {
      setShowMenu(!showMenu);
    }
  }

  return (
    <Aux>
      <Menu toggle={() => {toggleMenuHandler(true)}} routing={() => {toggleMenuHandler(false)}} show={showMenu}/>
      <Route path="/" exact component={Home}/>
      <Route path="/projects" exact component={Projects}/>
      <Route path="/experiences" exact component={Experiences}/>
      <Route path="/testimonials" exact component={Testimonials}/>
      <Route path="/contact" exact component={Contact}/>
    </Aux>
  );
}

export default App;
