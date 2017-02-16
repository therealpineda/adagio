import React from 'react';
import SongIndexItem from './song_index_item';

class SongsIndex extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const songIndexItems = this.props.songs.map( (song) => {
      return (
        <SongIndexItem
          key={song.id}
          song={song} />
      );
    });
    return (
        <div id='songs-index' className="comp">
          <h6>SongsIndex</h6>
          <table>
            <thead className='songs-index-labels'>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Album</th>
                <th>[C]</th>
              </tr>
            </thead>
            <tbody>
              { songIndexItems }
            </tbody>
          </table>
        </div>
    );
  }
}

export default SongsIndex;
