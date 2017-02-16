import React from 'react';
import { merge } from 'lodash';
import { connect } from 'react-redux';
import { addPlaylist } from '../actions/playlist_actions';

class AddPlaylistForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    }
    this._addPlaylist = this._addPlaylist.bind(this);
    this.update = this.update.bind(this);
  }

  _addPlaylist(e) {
    e.preventDefault();
    let playlist = merge(this.state, { user_id: this.props.userId })
    this.props.addPlaylist(playlist);
  }

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value })
    }
  }

  render() {
    return (
      <div id='add-playlist-form'>
        <form onSubmit={ this._addPlaylist }>
          <input
            type="text"
            id="add-playlist-input"
            placeholder="New Playlist"
            onChange={this.update('name')}
            value={this.state.name}
            />
          <button id="create-playlist-btn">Create</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.session.currentUser.id
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPlaylist: (playlist) => { return dispatch(addPlaylist(playlist)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlaylistForm);
