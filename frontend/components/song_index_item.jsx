import React from 'react';

class SongIndexItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr className='song-index-item' >
        <td>
          <p>{this.props.song.title}</p>
        </td>
        <td>
          <p>{this.props.song.artist}</p>
        </td>
        <td>
          <p>{this.props.song.album}</p>
        </td>
        <td>
          <p>{this.props.song.duration}</p>
        </td>
      </tr>
    );
  }
}

export default SongIndexItem;

// will need to connect for all the song actions, etc
