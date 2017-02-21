import React from 'react';
import { merge } from 'lodash';
import { connect } from 'react-redux';
import { addPlaylist } from '../../../actions/playlist_actions';

class AddPlaylistForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    }
    this._addPlaylist = this._addPlaylist.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.update = this.update.bind(this);
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this._addPlaylist(e);
    }
  }

  _addPlaylist(e) {
    e.preventDefault();
    let playlist = merge(this.state, { user_id: this.props.userId })
    this.props.addPlaylist(playlist);
    this.setState({name: ""});
    const form = $('.add-playlist-form');
    form.addClass('hidden-form');
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
          <div>
          <input
            type="text"
            id="add-playlist-input"
            placeholder="New Playlist"
            onChange={this.update('name')}
            onKeyPress={this._handleKeyPress}
            value={this.state.name} />
          </div>
          <div id='create-playlist-btn-container'>
            <button
              id="create-playlist-btn">
              Create
            </button>
          </div>
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
