import React from 'react';
import Intro from './Intro.jsx';
import About from './About.jsx';
import Event from './Event.jsx';
import Service from './service.jsx';
import Contact from './Contact.jsx';
import Nav from './Nav.jsx';

function App(){
  return <div className='bg-black'>
    <Nav />
    <Intro />
    <About />
    <Event />
    <Service />
    <Contact />
  </div>
}

export default App;