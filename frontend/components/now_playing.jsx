import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayerMine from './audio_player';


class NowPlaying extends React.Component {
  render() {
    const playlist =
    [{ url: 'https://s3.amazonaws.com/adagio-prod/songs/music%252Fno_curator%252FLJ_Kruzer%252FDance_Audit_Hour%252FLJ_Kruzer_-_01_-_Chantiers_Navals_412.mp3', displayText: 'Chantiers Navals 412' }, { url: 'https://s3.amazonaws.com/adagio-prod/songs/Jahzzar_-_05_-_Siesta.mp3', displayText: 'Siesta' }];
    return (
      <div id='now-playing' className="comp">
        <h6>Now Playing</h6>
          <img src='https://s3.amazonaws.com/adagio-prod/images/default/album_img.jpg'/>
          <div id='audio-player-container'>

            <AudioPlayerMine
              playlist={playlist}
              />
          </div>
      </div>
    );
  }
}

export default NowPlaying;
