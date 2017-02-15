import React from 'react';

const App = ({children}) => {
  return (
    <div id='app' className="comp">
      <h6>App</h6>
      { children }
    </div>
  );
};

export default App;
