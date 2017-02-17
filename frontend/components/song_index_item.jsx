import React from 'react';
import { connect } from 'react-redux';
import { playSong } from '../actions/play_queue_actions';

class SongIndexItem extends React.Component {
  constructor() {
    super();
    this._playSong = this._playSong.bind(this);
  }

  _playSong(e) {
    e.preventDefault();
    this.props.playSong(this.props.song);
  };

  render() {
    return (
      <tr
        className='song-index-item'
        onDoubleClick={ this._playSong } >
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

const mapDispatchToProps = (dispatch) => {
  return {
    playSong: (song) => { return dispatch( playSong(song) ); }
  };
};

export default connect(null, mapDispatchToProps)(SongIndexItem);

// will need to connect for all the song actions, etc
