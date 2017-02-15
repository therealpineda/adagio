import React from 'react';
import Nav from './nav';
import NowPlaying from './now_playing';

const Main = (props) => {
  return (
    <div id='main' className="comp">
      <h6>Main</h6>
      <div id='nav-sidebar'>
        <Nav />
      </div>
      <div id='main-window'>
        {props.children}
      </div>
      <div id='now-playing-sidebar'>
        <NowPlaying />
      </div>
    </div>
  );
};

export default Main;
