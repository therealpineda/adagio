import React from 'react';
import Nav from './nav';
import NowPlaying from './now_playing';

const App = ({children}) => {
  return (
    <div id='app' className="comp">
      <div id='nav-sidebar'>
        <Nav />
      </div>
      <div id='main-window'>
        {children}
      </div>
      <div id='now-playing-sidebar'>
        <NowPlaying />
      </div>
    </div>
  );
};

export default App;
