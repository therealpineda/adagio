import React from 'react';
import SongIndexItem from './song_index_item';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { playSong, addSong } from '../actions/play_queue_actions';

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
          position                   : 'absolute',
          top                        : '40px',
          left                       : '40px',
          right                      : '40px',
          bottom                     : '40px',
          border                     : 'none',
          background                 : '#2f2f31',
          overflowX                   : 'hidden',
          overflowY                   : 'auto',
          WebkitOverflowScrolling    : 'touch',
          borderRadius               : '0',
          outline                    : 'none',
          padding                    : '0',
          width : "180px"

        }
      },
      clickedSong: ""
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.playClickedSong = this.playClickedSong.bind(this);
    this.addClickedSongToQueue = this.addClickedSongToQueue.bind(this);
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

  handleClick(e) {
  e.preventDefault();
  const songTitle = e.target.parentElement.parentElement.firstChild.firstChild.textContent;
  const clickedSong = this.props.songs.filter((song) => { return song.title === songTitle })[0];
  this.setState({clickedSong: clickedSong});
  let customStyles = this.state.customStyles;
  customStyles.content.left = e.clientX;
  customStyles.content.top = e.clientY;
  this.setState({customStyles: customStyles});
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

  render() {
    const songIndexItems = this.props.songs.map( (song, idx) => {
      return (
        <SongIndexItem
          key={idx}
          song={song} />
      );
    });
    let clickedTitle = "";
    let clickedArtist = "";
    const clickedSong = this.state.clickedSong
    if (clickedSong) {
      clickedTitle = clickedSong.title;
      clickedArtist = clickedSong.artist;
    }
    return (
        <div id='songs-index' className="comp-d">
          <table cellSpacing="0">
            <thead className='songs-index-labels'>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Album</th>
                <th><i className="fa fa-clock-o" aria-hidden="true"></i>
                </th>
              </tr>
            </thead>
            <tbody onContextMenu={this.handleClick}>
              { songIndexItems }
            </tbody>
          </table>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={this.state.customStyles}
            contentLabel="Example Modal"
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
              <div className='rc-modal-item'>
                <p>Add to Playlist...</p>
              </div>
              <div className='rc-modal-item'
                onClick={this.addClickedSongToQueue}>
                <p>Add to Play Queue</p>
              </div>
            </div>
          </Modal>

        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playSong: (song) => { return dispatch( playSong(song) ); },
    addSong: (song) => { return dispatch( addSong(song) ); }
  };
};

export default connect(null, mapDispatchToProps)(SongsIndex);
