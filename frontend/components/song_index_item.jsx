import React from 'react';

class SongIndexItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id='song-index-item' className='comp'>
        <h6>SongIndexItem</h6>
        <p>{this.props.song.title}</p>
        <p>{this.props.song.artist}</p>
        <p>{this.props.song.album}</p>
        <p>{this.props.song.duration}</p>
      </div>

    );
  }
}

export default SongIndexItem;

// will need to connect for all the song actions, etc
