import React from 'react';
import SongIndexItem from './song_index_item';
import Modal from 'react-modal';
import RCPlaylistIndex from './playlists/rc_playlist_index';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { playSong, addSong } from '../../actions/play_queue_actions';
import { removeSongFromPlaylist } from '../../actions/playlist_actions';

class SongsIndex extends React.Component {
  constructor(props) {
    super();

    this.state = {
      modalIsOpen: false,
      customStyles: {
        overlay : {
          position          : 'fixed',
          top               : 0,
          left              : 0,
          right             : 0,
          bottom            : 0,
          backgroundColor   : 'transparent'
        },
        content : {
          position                    : 'absolute',
          top                         : '40px',
          left                        : '40px',
          right                       : '10px',
          bottom                      : '10px',
          height                      : 'auto',
          border                      : 'none',
          background                  : '#2f2f31',
          overflowX                   : 'hidden',
          overflowY                   : 'auto',
          WebkitOverflowScrolling     : 'touch',
          borderRadius                : '0',
          outline                     : 'none',
          padding                     : '0',
          width                       : "200px"
        }
      },
      clickedSong: ""
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.playClickedSong = this.playClickedSong.bind(this);
    this.addClickedSongToQueue = this.addClickedSongToQueue.bind(this);
    this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  rightClick(e) {
    e.preventDefault();
    const songTitle = e.target.parentElement.parentElement.childNodes[1].firstChild.textContent;
    const clickedSong = this.props.songs.find((song) => song.title === songTitle );
    let customStyles = this.state.customStyles;
    customStyles.content.top = e.clientY;
    customStyles.content.left = e.clientX;
    this.setState({clickedSong: clickedSong, customStyles: customStyles});
    this.openModal();
  }

  playClickedSong() {
    this.props.playSong(this.state.clickedSong);
    this.closeModal();
  }

  addClickedSongToQueue() {
    this.props.addSong(this.state.clickedSong);
    this.closeModal();
  }

  removeFromPlaylist() {
    const songId = this.state.clickedSong.playlist_song_id;
    const playlistId = parseInt(this.props.params.playlistId);
    this.props.removeSongFromPlaylist(songId, playlistId);
    this.closeModal();
  }

  render() {
    const songIndexItems = this.props.songs.map( (song) => {
      return (
        <SongIndexItem
          key={song.playlist_song_id}
          song={song} />
      );
    });
    let clickedTitle = "";
    const clickedSong = this.state.clickedSong
    if (clickedSong) {
      clickedTitle = clickedSong.title;
    }

    let removePlaylist = "";
    const playlistId = this.props.params.playlistId;
    if (playlistId) {  
      const authorId = this.props.playlists[playlistId].author_id;
      if (authorId === this.props.userId) {
        removePlaylist = (
          <div className='rc-modal-item'
            onClick={this.removeFromPlaylist}>
            <p>Remove from Playlist</p>
          </div>
        );
      }
    }

    return (
        <div id='songs-index'>
          <table cellSpacing="0">
            <thead className='songs-index-labels'>
              <tr>
                <th></th>
                <th>Song</th>
                <th>Artist</th>
                <th>Album</th>
                <th><i className="fa fa-clock-o" aria-hidden="true"></i>
                </th>
              </tr>
            </thead>
            <tbody onContextMenu={this.rightClick}>
              { songIndexItems }
            </tbody>
          </table>

          <Modal
            className="rc-modal-modal"
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={this.state.customStyles}
            contentLabel="Right Click Menu"
            clickedSong={this.state.clickedSong}
          >
            <div className='rc-modal'>
              <div className="rc-song-descrip rc-modal-item">
                <p>{clickedTitle}</p>
              </div>
              <div
                className='rc-modal-item'
                onClick={this.playClickedSong}>
                <p>Play</p>
              </div>
              <div className='rc-modal-item'
                onClick={this.addClickedSongToQueue}>
                <p>Add to Play Queue</p>
              </div>
              { removePlaylist }
              <div
                className='rc-modal-item'
                onClick={this.closeModal} >
                <p>Add to Playlist:</p>
                <RCPlaylistIndex
                  clickedSong={this.state.clickedSong} />
              </div>
            </div>
          </Modal>

        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.session.currentUser.id,
    playlists: state.playlists
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playSong: (song) => { return dispatch( playSong(song) ); },
    addSong: (song) => { return dispatch( addSong(song) ); },
    removeSongFromPlaylist: (songId, playlistId) => { return dispatch(removeSongFromPlaylist(songId, playlistId)); }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongsIndex));
