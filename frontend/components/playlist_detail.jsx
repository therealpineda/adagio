import React from 'react';
import { connect } from 'react-redux';
import SongsIndex from './songs_index';

class PlaylistDetail extends React.Component {
  constructor({props}) {
    super();
  }

  render() {
    if (this.props.playlist) {
      return (
        <div id='playlist-detail' className='comp'>
          <h6>PlaylistDetail</h6>
          <div id='playlist-detail-header'>
            <div className='playlist-detail-img'>
              <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" />
            </div>
            <div id='playlist-detail-right'>
              <div id='playlist-detail-text'>
                <div id='playlist-detail-playlist'>
                  <p>PLAYLIST</p>
                </div>
                <div id='playlist-detail-title'>
                  <p>{this.props.playlist.name}</p>
                </div>
              </div>
              <div id="playlist-detail-buttons">
                <button id="playlist-detail-play-btn">Play</button>
                <button id="playlist-detail-delete-btn">Delete</button>
              </div>
            </div>
          </div>
          <div id="playlist-detail-user">
            <p>Created by: &nbsp;
              <span className='playlist-user-link'>
                {this.props.playlist.author}
              </span>
               &nbsp; &#8226;	{this.props.playlist.songs.length} songs, {this.props.playlist.duration}</p>
          </div>
          <div id='playlist-songs-index'>
            <SongsIndex songs={this.props.playlist.songs} />
          </div>
        </div>
      );
    } else {
      return (
        <div id='playlist-detail' className='comp'>
          <h6>PlaylistDetail</h6>
          <p>Loading...</p>
        </div>
      );
    }
  }
}

export default PlaylistDetail;
