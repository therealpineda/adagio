import React from 'react';
import { fetchPlaylist } from '../actions/playlist_actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import SongsIndex from './my_music/songs_index';
import PlaylistEditForm from './my_music/playlists/playlist_edit_form';
import { deletePlaylist, followPlaylist, unfollowPlaylist } from '../actions/playlist_actions';
import { playSongs } from '../actions/play_queue_actions';


class PlaylistDetailPage extends React.Component {
  constructor() {
    super()
    this.state = {
      owner: false,
      fetched: false
    };
    this.followPlaylist = this.followPlaylist.bind(this);
    this.unfollowPlaylist = this.unfollowPlaylist.bind(this);
    this.deletePlaylist = this.deletePlaylist.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);
  }

  componentWillMount() {
    this.playlistId = parseInt(this.props.params.playlistId);
    this.props.fetchPlaylist(this.playlistId).then( () => {
      if (this.props.playlist.author_username === this.props.currentUser) {
        this.setState({owner: true});
      }
      this.setState({fetched: true});
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.playlistId !== parseInt(nextProps.params.playlistId)) {
      this.setState({owner: false, fetched: false});
      this.playlistId = parseInt(nextProps.params.playlistId);
      this.props.fetchPlaylist(nextProps.params.playlistId).then( () => {
        if (this.props.playlist.author_username === this.props.currentUser) {
          this.setState({owner: true});
        }
        this.setState({fetched: true});
      });
    }
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

  followPlaylist(e) {
    e.preventDefault();
    this.props.followPlaylist(this.playlistId);
  };

  unfollowPlaylist(e) {
    e.preventDefault();
    this.props.unfollowPlaylist(this.playlistId, this.props.playlist.following);
  };

  render() {
    if (this.state.fetched) {
      let canEdit = false;
      let followDeleteButton = (
        <button
        id="playlist-detail-follow-btn"
        onClick={this.followPlaylist}>
        Follow
        </button>
      );
      if (this.props.playlist.following) {
        followDeleteButton = (
          <button
            id="playlist-detail-follow-btn"
            onClick={this.unfollowPlaylist}>
            Unfollow
          </button>
        );
      }

      if (this.state.owner) {
        canEdit = true;
        followDeleteButton = (
          <button
            id="playlist-detail-delete-btn"
            onClick={this.deletePlaylist}>
            Delete
          </button>
        );
      }

      return (
        <div id='playlist-detail-page' className='comp'>
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
                  <PlaylistEditForm
                    key={this.props.playlist.id} playlist={this.props.playlist} canEdit={canEdit}/>
                </div>
              </div>
              <div id="playlist-detail-buttons">
                <button
                  id="playlist-detail-play-btn"
                  onClick={this.playPlaylist}>
                  <i id="playlist-detail-play-btn-icon" className="fa fa-caret-right" aria-hidden="true"></i>
                   <p>Play</p>
                </button>

                { followDeleteButton }

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
        <div id='playlist-detail-page' className='comp'>
          <p>Loading...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const playlistId = parseInt(ownProps.params.playlistId);
  return {
    playlist: state.playlists[playlistId],
    currentUser: state.session.currentUser.username
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylist: (playlistId) => { return dispatch(fetchPlaylist(playlistId)); },
    followPlaylist: (playlistId) => { return dispatch(followPlaylist(playlistId)); },
    unfollowPlaylist: (playlistId, followId) => { return dispatch(unfollowPlaylist(playlistId, followId)); },
    deletePlaylist: (id) => { return dispatch(deletePlaylist(id)); },
    playSongs: (songs) => { return dispatch(playSongs(songs)); }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistDetailPage));
