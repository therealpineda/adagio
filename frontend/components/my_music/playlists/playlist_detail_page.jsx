import React from 'react';
import PlaylistEditForm from './playlist_edit_form';
import SongsIndex from '../songs_index';
import { fetchPlaylist, deletePlaylist, followPlaylist, unfollowPlaylist, removePlaylist } from '../../../actions/playlist_actions';
import { playSongs } from '../../../actions/play_queue_actions';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

class PlaylistDetailPage extends React.Component {
  constructor() {
    super();
    this.state = {
      owner: false,
      fetched: false
    };
    this.followPlaylist = this.followPlaylist.bind(this);
    this.unfollowPlaylist = this.unfollowPlaylist.bind(this);
    this.deletePlaylist = this.deletePlaylist.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);
  }

// use id for check user

// if passing playlist as prop in directly, don't need to fetch

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId).then( (playlist) => {
      if (playlist.author_id === this.props.currentUser.id) {
        this.setState({owner: true, fetched: true});
      } else {
        this.setState({fetched: true});
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.playlistId !== nextProps.playlistId) {
      this.setState({owner: false, fetched: false});

      this.props.fetchPlaylist(nextProps.playlistId).then( (playlist) => {
        if (playlist.author_id === this.props.currentUser.id) {
          this.setState({owner: true, fetched: true});
        } else {
          this.setState({fetched: true});
        }
      });
    }
  }

  deletePlaylist(e) {
    e.preventDefault();
    this.props.deletePlaylist(this.props.playlistId).then( () => {
      this.props.router.push('/my-music');
    });
  }

  playPlaylist(e) {
    e.preventDefault();
    this.props.playSongs(this.props.playlist.songs);
  }

  followPlaylist(e) {
    e.preventDefault();
    this.props.followPlaylist(this.props.playlistId);
  };

  unfollowPlaylist(e) {
    e.preventDefault();
    this.props.unfollowPlaylist(this.props.playlistId, this.props.playlist.following).then(() => {
      this.props.removePlaylist(this.props.playlist);
    });
  };

  render() {
    if (this.state.fetched && this.props.playlist) {
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
                    key={this.props.playlist.id}
                    playlist={this.props.playlist}
                    canEdit={canEdit} />
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
               &nbsp; &#8226;	{this.props.playlist.songs.length} songs, {this.props.playlist.duration}
             </p>
          </div>

          <div id='playlist-songs-index'>
            <SongsIndex songs={this.props.playlist.songs} />
          </div>
        </div>
      );
    } else {
      return (
        <div id='playlist-detail-page' className='comp-d'>
          <p>Loading...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  let playlistId = ownProps.params.playlistId
  return {
    playlistId: playlistId,
    playlist: state.playlists[playlistId],
    currentUser: state.session.currentUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylist: (playlistId) => { return dispatch(fetchPlaylist(playlistId)); },
    followPlaylist: (playlistId) => { return dispatch(followPlaylist(playlistId)); },
    unfollowPlaylist: (playlistId, followId) => { return dispatch(unfollowPlaylist(playlistId, followId)); },
    removePlaylist: (playlist) => { return dispatch(removePlaylist(playlist)); },
    deletePlaylist: (id) => { return dispatch(deletePlaylist(id)); },
    playSongs: (songs) => { return dispatch(playSongs(songs)); }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistDetailPage));
