import React from 'react';
import { fetchPlaylist } from '../../../actions/playlist_actions';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

import SongsIndex from '../songs_index';
import PlaylistEditForm from './playlist_edit_form';
import { deletePlaylist, followPlaylist, unfollowPlaylist } from '../../../actions/playlist_actions';
import { playSongs } from '../../../actions/play_queue_actions';


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
        className='positive-button'
        onClick={this.followPlaylist}>
        Follow
        </button>
      );
      if (this.props.playlist.following) {
        followDeleteButton = (
          <button
            id="playlist-detail-follow-btn"
            className='negative-button'
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
            className="negative-button"
            onClick={this.deletePlaylist}>
            Delete
          </button>
        );
      }

      return (
        <div id='playlist-detail-page' className='comp-d'>
          <div id='playlist-detail-header'>
            <div className='playlist-detail-img'>
              <img src="https://s3.amazonaws.com/adagio-prod/images/logo.png" />
            </div>
            <div id='playlist-detail-right'>
              <div id='playlist-detail-text'>
                <div className='detail-type-header'>
                  <p>Playlist</p>
                </div>
                <div id='playlist-detail-title'>
                  <PlaylistEditForm
                    key={this.props.playlist.id} playlist={this.props.playlist} canEdit={canEdit}/>
                </div>
              </div>
              <div id='playlist-detail-btm-rt-container'>

              <div id="playlist-detail-buttons">
                <button
                  id="playlist-detail-play-btn"
                  onClick={this.playPlaylist}>
                  <i id="playlist-detail-play-btn-icon" className="fa fa-caret-right" aria-hidden="true"></i>
                   <p>Play</p>
                </button>

                { followDeleteButton }

              </div>
              <div id="playlist-detail-follower-count">
                <p>{this.props.playlist.followers_count}</p>
              </div>
            </div>
            </div>
          </div>
          <div id="playlist-detail-user">
            <p>Created by: &nbsp;
              <Link to={`/explore-playlists/users/${this.props.playlist.author_id}`}>
                <span className='playlist-user-link'>
                  {this.props.playlist.author}
                </span>
              </ Link>
               &nbsp; &#8226;	{this.props.playlist.songs.length} songs, {this.props.playlist.duration}</p>
          </div>
          <div id='playlist-songs-index'>
            <SongsIndex songs={this.props.playlist.songs} />
          </div>
        </div>
      );
    } else {
      return (
        <div id='playlist-detail-page' className='comp-d'>
          <p></p>
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
