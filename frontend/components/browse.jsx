import React from 'react';
import AlbumsIndex from './albums_index';

class Browse extends React.Component {

  render() {
    return (
      <div id='browse' className="comp-d custom-scrollbar">
        <div id='albums-index-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Browse;
