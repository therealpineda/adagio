import React from 'react';
import AudioPlayer from './audio_player';
import {connect} from 'react-redux';


class NowPlaying extends React.Component {
  render() {

    return (
      <div id='now-playing' className="comp-d">
          <div id='audio-player-container'>
            <AudioPlayer />
          </div>
      </div>
    );
  }
}

export default NowPlaying;
