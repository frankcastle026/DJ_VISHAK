import React from 'react';
import Intro from './Intro.jsx';
import About from './About.jsx';
import Event from './Event.jsx';

function App(){
  return <div className='bg-black'>
    <Intro />
    <About />
    <Event />
  </div>
}

export default App;