import React from 'react';
import PlaylistEditForm from './playlist_edit_form';
import SongsIndex from '../songs_index';
import { fetchPlaylist, deletePlaylist, followPlaylist, unfollowPlaylist, removePlaylist } from '../../../actions/playlist_actions';
import Modal from 'react-modal';
import { playSongs } from '../../../actions/play_queue_actions';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

class PlaylistDetailPage extends React.Component {
  constructor() {
    super();
    this.state = {
      owner: false,
      fetched: false,
      modalIsOpen: false,
      customStyles: {
        overlay : {
          position          : 'fixed',
          top               : 0,
          left              : 0,
          right             : 0,
          bottom            : 0,
          backgroundColor   : 'rgba(15,16,16,0.3)'
        },
        content : {
          position                    : 'absolute',
          top                         : '240px',
          left                        : '340px',
          right                       : '10px',
          bottom                      : '10px',
          height                      : '128px',
          border                      : '1px solid #151616',
          background                  : '#2f2f31',
          overflowX                   : 'hidden',
          overflowY                   : 'hidden',
          WebkitOverflowScrolling     : 'touch',
          borderRadius                : '3px',
          outline                     : 'none',
          padding                     : '0px',
          width                       : "300px"
        }
      }
    };

    this.followPlaylist = this.followPlaylist.bind(this);
    this.unfollowPlaylist = this.unfollowPlaylist.bind(this);
    this.deletePlaylist = this.deletePlaylist.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    if (this.props.playlistId !== "0") {
      this.props.fetchPlaylist(this.props.playlistId).then( (playlist) => {
        if (playlist.author_id === this.props.userId) {
          this.setState({owner: true, fetched: true});
        } else {
          this.setState({fetched: true});
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.playlistId !== "0" || nextProps.playlistId !== undefined) {
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
  }

  deletePlaylist(e) {
    e.preventDefault();
    this.closeModal();
    this.props.deletePlaylist(this.props.playlistId, currentUser).then(() => {
      const playlists = this.props.currentUser.playlists;
      const mostRecentPlaylist = playlists[playlists.length - 1];
      const id = mostRecentPlaylist.id;
      this.props.router.push(`/my-music/playlists/${id}`);
    });
  }

  handleClick(e) {
    e.preventDefault();
    let customStyles = this.state.customStyles;
    customStyles.content.left = e.clientX;
    customStyles.content.top = e.clientY;
    this.setState({customStyles: customStyles});
    this.openModal();
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  playPlaylist(e) {
    e.preventDefault();
    this.props.playSongs(this.props.playlist.songs);
  }

  followPlaylist(e) {
    e.preventDefault();
    this.props.followPlaylist(this.props.playlistId, this.props.currentUser);
  };

  unfollowPlaylist(e) {
    e.preventDefault();
    this.props.unfollowPlaylist(this.props.playlistId, this.props.playlist.following, this.props.currentUser).then(() => {
      if (this.props.location.pathname.includes("/my-music")) {
        const playlists = this.props.currentUser.playlists;
        const mostRecentPlaylist = playlists[playlists.length - 1];
        const id = mostRecentPlaylist.id;
        this.props.router.push(`/my-music/playlists/${id}`);
      } else {
      }
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
            onClick={this.handleClick}>
            Delete
          </button>
        );
      }

      const songImages = []
      this.props.playlist.songs.forEach( (song) => {
        if (songImages.length < 4 && !songImages.includes(song.image)) {
          songImages.push(song.image);
        }
      });
      while (songImages.length < 4) {
        songImages.push(songImages[Math.floor(Math.random() * songImages.length)]);
      }

      let playlistImage = (
        <div className='playlist-detail-image'
          className='playlist-default-image'>
          <img src="https://s3.amazonaws.com/adagio-prod/images/default/playlist_img.jpg"/>
        </div>
      );
  
      if (this.props.playlist.songs.length > 3) {
        playlistImage = (
          <div className='playlist-detail-image'>
            <div className='pl-img-row'>
              <div className='pl-img-piece'><img src={songImages[0]}/></div>
              <div className='pl-img-piece'><img src={songImages[1]}/></div>
            </div>
            <div className='pl-img-row'>
              <div className='pl-img-piece'><img src={songImages[2]}/></div>
              <div className='pl-img-piece'><img src={songImages[3]}/></div>
            </div>
          </div>
        );
      }


      return (
        <div id='playlist-detail-page' className='comp-d'>

          <div id='playlist-detail-header'>

            { playlistImage }

            <div id='playlist-detail-right'>
              <div id='playlist-detail-text'>
                <div className='detail-type-header'>
                  <p>Playlist</p>
                </div>
                <div id='playlist-detail-title'>
                  <PlaylistEditForm
                    key={this.props.playlist.id}
                    playlist={this.props.playlist}
                    canEdit={canEdit}
                    author={this.props.currentUser} />
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

          <div
            id='playlist-songs-index'
            className='custom-scrollbar'>
            <SongsIndex songs={this.props.playlist.songs} />
          </div>


          <Modal
            className="delete-playlist-modal"
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={this.state.customStyles}
            contentLabel="Delete Playlist Modal"
          >
            <div className='delete-modal'>
              <div className='delete-modal-text'>
                <p><span className="detail-type-header">Playlist</span></p>
                <p>{this.props.playlist.name}</p>
              </div>
              <div className='delete-modal-buttons'>
                <button
                  className="negative-button"
                  onClick={this.closeModal}>
                  Cancel
                </button>
                <button
                  className="positive-button"
                  onClick={this.deletePlaylist}>

                  Delete
                </button>
              </div>
            </div>
          </Modal>
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
  let playlistId = ownProps.params.playlistId
  let playlist = ownProps.playlist
  if (!playlist) {
    playlist = state.playlists[playlistId]
  }
  const userId = state.session.currentUser.id;
  const currentUser = state.users[userId];

  return {
    playlistId: playlistId,
    playlist: playlist,
    userId: userId,
    currentUser: currentUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylist: (playlistId) => { return dispatch(fetchPlaylist(playlistId)); },
    followPlaylist: (playlistId, user) => { return dispatch(followPlaylist(playlistId, user)); },
    unfollowPlaylist: (playlistId, followId, user) => { return dispatch(unfollowPlaylist(playlistId, followId, user)); },
    removePlaylist: (playlist) => { return dispatch(removePlaylist(playlist)); },
    deletePlaylist: (id, user) => { return dispatch(deletePlaylist(id, user)); },
    playSongs: (songs) => { return dispatch(playSongs(songs)); }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistDetailPage));
