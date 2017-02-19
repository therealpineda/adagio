import React from 'react';
import AudioPlayer from './audio_player';
import { connect } from 'react-redux';
import { currentSong } from '../reducers/selectors';
import classNames from 'classnames';

class NowPlaying extends React.Component {

  render() {
    const classStyle = classNames({
      'now-playing': true,
      'comp-d': true,
      'hidden': !this.props.currentSong
    });

    return (
      <div className={classStyle}>
          <div id='audio-player-container'>
            <AudioPlayer />
            <MiniPlayQueue />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentSong: currentSong(state.playQueue)
  };
};

export default connect(mapStateToProps)(NowPlaying);
