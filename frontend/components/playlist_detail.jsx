import React from 'react';
import SongsIndex from './songs_index';
import PlaylistEditForm from './playlist_edit_form';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { deletePlaylist } from '../actions/playlist_actions';
import { playSongs } from '../actions/play_queue_actions';


class PlaylistDetail extends React.Component {
  constructor({props}) {
    super();
    this.deletePlaylist = this.deletePlaylist.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);
  }

  deletePlaylist(e) {
    e.preventDefault();
    this.props.deletePlaylist(this.props.playlist.id).then( () => {
      this.props.router.push('/my-music');
    });
  }

  playPlaylist(e) {
    e.preventDefault();
    this.props.playSongs(this.props.playlist.songs);
  }

  render() {
    if (this.props.playlist) {
      return (
        <div id='playlist-detail' className='comp-d'>
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
                  <div id='rename-action'>
                    <button id='playlist-detail-rename-btn'>Rename</button>
                  <div className='playlist-rename-dropdown'>
                    <PlaylistEditForm playlist={this.props.playlist} />
                  </div>
                </div>
                </div>
              </div>
              <div id="playlist-detail-buttons">
                <button
                  id="playlist-detail-play-btn"
                  onClick={this.playPlaylist}>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                   &nbsp; Play
               </button>
                <button
                  id="playlist-detail-delete-btn"
                  onClick={this.deletePlaylist}>Delete</button>
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
          <p>Choose a playlist...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePlaylist: (id) => { return dispatch(deletePlaylist(id)); },
    playSongs: (songs) => { return dispatch(playSongs(songs)); }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail));
