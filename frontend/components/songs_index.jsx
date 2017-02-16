import React from 'react';
import SongIndexItem from './song_index_item';

class SongsIndex extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const songIndexItems = this.props.songs.map( (song) => {
      return (
        <SongIndexItem song={song} />
      );
    });
    return (
        <div id='songs-index' className="comp">
          <h6>SongsIndex</h6>
          <p>Song Artist Album [C]</p>
            { songIndexItems }
        </div>
    );
  }
}

export default SongsIndex;
