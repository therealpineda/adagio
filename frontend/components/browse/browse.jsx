import React from 'react';

const Browse = ({children}) => {
  return (
    <div id='browse' className="comp-d custom-scrollbar">
      <div id='albums-index-container'>
        {children}
      </div>
    </div>
  );
}

export default Browse;
