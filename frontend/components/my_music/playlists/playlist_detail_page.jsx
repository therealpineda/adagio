import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import PlaylistEditForm from './playlist_edit_form';
import DeleteMenu from './delete_menu';
import SongsIndex from '../songs_index';
import { fetchPlaylist, followPlaylist, unfollowPlaylist } from '../../../actions/playlist_actions';
import { playSongs } from '../../../actions/play_queue_actions';
import { playTrack } from '../../../actions/current_track_actions';
import { Spinner, SpinnerButton } from '../../spinners';

class PlaylistDetailPage extends React.Component {
  constructor() {
    super();
    this.state = {
      deleteOpen: false,
      deletePos: [0, 0],
      buttonDisabled: false,
    };

    this.followPlaylist = this.followPlaylist.bind(this);
    this.unfollowPlaylist = this.unfollowPlaylist.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);

    this.openDeleteMenu = this.openDeleteMenu.bind(this);
    this.closeDeleteMenu = this.closeDeleteMenu.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  componentDidMount() {
    if (this.props.playlistId !== '0') {
      this.props.fetchPlaylist(this.props.playlistId).then((playlist) => {
        if (playlist.author_id === this.props.userId) {
          this.setState({ owner: true, fetched: true });
        } else {
          this.setState({ fetched: true });
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.playlistId !== '0' || nextProps.playlistId !== undefined) {
      if (this.props.playlistId !== nextProps.playlistId) {
        this.setState({ owner: false, fetched: false });
        this.props.fetchPlaylist(nextProps.playlistId).then((playlist) => {
          if (playlist.author_id === this.props.currentUser.id) {
            this.setState({ owner: true, fetched: true });
          } else {
            this.setState({ fetched: true });
          }
        });
      }
    }
  }

  openDeleteMenu(e) {
    e.preventDefault();
    const pos = this.calcPos(e);
    this.setState({ deleteOpen: true, deletePos: pos });
    this.toggleOverlay();
    document.addEventListener('click', this.closeDeleteMenu);
  }

  calcPos(e) {
    const x = e.clientX;
    const y = e.clientY;
    return [x, y];
  }

  toggleOverlay() {
    const bg = document.getElementById('bg');
    bg.classList.toggle('overlay');
  }

  closeDeleteMenu() {
    this.toggleOverlay();
    this.setState({ deleteOpen: false });
    document.removeEventListener('click', this.closeDeleteMenu);
  }

  playPlaylist(e) {
    e.preventDefault();
    this.props.playSongs(this.props.playlist.songs);
    this.props.playTrack();
  }

  followPlaylist(e) {
    e.preventDefault();
    this.setState({ buttonDisabled: true });
    this.props.followPlaylist(this.props.playlistId, this.props.currentUser).then(() => {
      this.setState({ buttonDisabled: false });
    });
  }

  unfollowPlaylist(e) {
    e.preventDefault();
    this.setState({ buttonDisabled: true });
    this.props.unfollowPlaylist(
      this.props.playlistId,
      this.props.playlist.following,
      this.props.currentUser,
    ).then(() => {
      this.setState({ buttonDisabled: false });
      if (this.props.location.pathname.includes('/my-music')) {
        const playlists = this.props.currentUser.playlists;
        const mostRecentPlaylist = playlists[playlists.length - 1];
        const id = mostRecentPlaylist.id;
        this.props.router.push(`/my-music/playlists/${id}`);
      }
    });
  }

  render() {
    if (!this.state.fetched) return <Spinner />;
    if (this.state.fetched && this.props.playlist) {
      let canEdit = false;
      let followDeleteButton = (
        <button
          id="playlist-detail-follow-btn"
          className="positive-button"
          onClick={this.followPlaylist}
        >
          Follow
        </button>
      );
      if (this.props.playlist.following) {
        followDeleteButton = (
          <button
            id="playlist-detail-follow-btn"
            className="negative-button"
            onClick={this.unfollowPlaylist}
          >
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
            onClick={this.openDeleteMenu}
          >
            Delete
          </button>
        );
      }

      if (this.state.buttonDisabled) {
        followDeleteButton = <SpinnerButton />;
      }
      let playlistImage = (
        <div
          className="playlist-detail-image playlist-default-image"
        >
          <img
            src={this.props.playlist.images[0]}
            alt={this.props.playlist.name}
          />
        </div>
      );

      if (this.props.playlist.images.length > 1) {
        playlistImage = (
          <div className="playlist-detail-image">
            <div className="pl-img-row">
              <div className="pl-img-piece">
                <img src={this.props.playlist.images[0]} alt={this.props.playlist.name} />
              </div>
              <div className="pl-img-piece">
                <img src={this.props.playlist.images[1]} alt={this.props.playlist.name} />
              </div>
            </div>
            <div className="pl-img-row">
              <div className="pl-img-piece">
                <img src={this.props.playlist.images[2]} alt={this.props.playlist.name} />
              </div>
              <div className="pl-img-piece">
                <img src={this.props.playlist.images[3]} alt={this.props.playlist.name} />
              </div>
            </div>
          </div>
        );
      }


      return (
        <div id="playlist-detail-page">
          <div id="playlist-detail-header">
            { playlistImage }
            <div id="playlist-detail-right">
              <div id="playlist-detail-text">
                <div className="detail-type-header">
                  <p>Playlist</p>
                </div>
                <div id="playlist-detail-title">
                  <PlaylistEditForm
                    key={this.props.playlist.id}
                    playlist={this.props.playlist}
                    canEdit={canEdit}
                    author={this.props.currentUser}
                  />
                </div>
              </div>
              <div id="playlist-detail-btm-rt-container">
                <div id="playlist-detail-buttons">
                  <button
                    id="playlist-detail-play-btn"
                    onClick={this.playPlaylist}
                  >
                    <i
                      id="playlist-detail-play-btn-icon"
                      className="fa fa-caret-right"
                      aria-hidden="true"
                    >
                    </i>
                    <p>Play</p>
                  </button>
                  { followDeleteButton }
                  <DeleteMenu
                    open={this.state.deleteOpen}
                    pos={this.state.deletePos}
                    playlistName={this.props.playlist.name}
                    playlistId={this.props.playlist.id}
                    />
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
                <span className="playlist-user-link">
                  {this.props.playlist.author}
                </span>
              </ Link>
              &nbsp;&#8226; {this.props.playlist.songs.length} songs,
              &nbsp;{this.props.playlist.duration}
            </p>
          </div>
          <div
            id="playlist-songs-index"
            className="custom-scrollbar"
          >
            <SongsIndex songs={this.props.playlist.songs} />
          </div>
        </div>
      );
    }
    return (
      <div id="playlist-detail-page">
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const playlistId = ownProps.params.playlistId;
  let playlist = ownProps.playlist;
  if (!playlist) {
    playlist = state.playlists[playlistId];
  }
  const userId = state.session.currentUser.id;
  const currentUser = state.users[userId];

  return {
    playlistId,
    playlist,
    userId,
    currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylist: (playlistId) => {
      return dispatch(fetchPlaylist(playlistId));
    },
    followPlaylist: (playlistId, user) => {
      return dispatch(followPlaylist(playlistId, user));
    },
    unfollowPlaylist: (playlistId, followId, user) => {
      return dispatch(unfollowPlaylist(playlistId, followId, user));
    },
    playSongs: (songs) => { return dispatch(playSongs(songs)); },
    playTrack: () => { return dispatch(playTrack()); },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistDetailPage));
