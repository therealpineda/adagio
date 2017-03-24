import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deletePlaylist } from '../../../actions/playlist_actions';

class DeleteMenu extends React.Component {
  constructor() {
    super();
    this.deletePlaylist = this.deletePlaylist.bind(this);
  }

  deletePlaylist(e) {
    e.preventDefault();
    this.props.deletePlaylist(this.props.playlistId, this.props.currentUser).then(() => {
      const playlists = this.props.currentUser.playlists;
      const mostRecentPlaylist = playlists[playlists.length - 1];
      const id = mostRecentPlaylist.id;
      this.props.router.push(`/my-music/playlists/${id}`);
    });
  }

  render() {
    let menuContent = '';
    const modal = document.querySelector('.delete-modal');
    if (this.props.open) {
      const pos = this.props.pos;
      modal.style.top = `${pos[1]}px`;
      modal.style.left = `${pos[0]}px`;

      menuContent = (
        <div className="delete-modal-inner">
          <div className="delete-modal-text">
            <p><span className="detail-type-header">Playlist</span></p>
            <p>{this.props.playlistName}</p>
          </div>
          <div className="delete-modal-buttons">
            <button className="cancel-button">
              Cancel
            </button>
            <button
              className="positive-button"
              onClick={this.deletePlaylist}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="delete-modal">
        { menuContent }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const userId = state.session.currentUser.id;
  return {
    currentUser: state.users[userId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePlaylist: (playlistId, currentUser) => {
      return dispatch(deletePlaylist(playlistId, currentUser));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteMenu));
