import React from 'react';
import CurrentUser from './current_user';

const App = ({children}) => {
  return (
    <div id='app' className="comp">
      <h6>App</h6>
      <CurrentUser />
      { children }
    </div>
  );
};

export default App;
