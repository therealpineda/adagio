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
        <div id='songs-index' className="comp-d">
          <table cellSpacing="0">
            <thead className='songs-index-labels'>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Album</th>
                <th><i className="fa fa-clock-o" aria-hidden="true"></i>
</th>
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
