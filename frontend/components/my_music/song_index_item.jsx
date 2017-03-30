import React from 'react';
import { connect } from 'react-redux';
import { playSong } from '../../actions/play_queue_actions';
import { playTrack, pauseTrack } from '../../actions/current_track_actions';
import { currentSong } from '../../reducers/selectors';

class SongIndexItem extends React.Component {
  constructor() {
    super();
    this._playSong = this._playSong.bind(this);
    this._togglePause = this._togglePause.bind(this);
  }

  _playSong(e) {
    e.preventDefault();
    this.props.playSong(this.props.song);
    this.props.playTrack();
  }

  _togglePause() {
    if (this.props.playing) {
      this.props.pauseTrack();
    } else {
      this.props.playTrack();
    }
  }

  render() {
    let playButton = (
      <figure
        className="mini-play-btn"
        onClick={this._playSong}
      >
        &nbsp;
      </figure>
    );
    if (this.props.currentTrack) {
      if (this.props.currentTrack.playlist_song_id === this.props.song.playlist_song_id) {
        if (this.props.playing) {
          playButton = (
            <figure
              className="mini-pause-playing-btn"
              onClick={this._togglePause}
            >
              &nbsp;
            </figure>
          );
        } else {
          playButton = (
            <figure
              className="mini-play-playing-btn"
              onClick={this._togglePause}
            >
              &nbsp;
            </figure>
          );
        }
      }
    }
    return (
      <tr
        className="song-index-item"
        onDoubleClick={this._playSong}
      >
        <td>
          { playButton }
        </td>
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

const mapStateToProps = (state) => {
  return {
    currentTrack: currentSong(state.playQueue),
    playing: state.currentTrack.playing,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    playSong: (song) => { return dispatch(playSong(song)); },
    playTrack: () => { return dispatch(playTrack()); },
    pauseTrack: () => { return dispatch(pauseTrack()); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongIndexItem);
