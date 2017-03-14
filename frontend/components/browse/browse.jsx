import React from 'react';

const Browse = ({ children }) => {
  return (
    <div id="browse" className="custom-scrollbar">
      <div id="albums-index-container">
        {children}
      </div>
    </div>
  );
};

export default Browse;
