import React from 'react';
import { connect } from 'react-redux';
import { merge } from 'lodash';
import { updatePlaylist } from '../../../actions/playlist_actions';

class PlaylistEditForm extends React.Component {
  constructor() {
    super();
    this.state = {
      playlist: {
        name: '',
      },
      disabled: true,
    };
    this._enableEdit = this._enableEdit.bind(this);
    this._renamePlaylist = this._renamePlaylist.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.update = this.update.bind(this);
    this.disabled = true;
    this.input = $('#rename-playlist-input');
  }

  componentWillReceiveProps() {
    this.setState({ playlist: { name: this.props.playlist.name } });
  }

  _enableEdit(e) {
    e.preventDefault();
    this.setState({ disabled: false });
    const input = $('#rename-playlist-input');
    input.val(this.props.playlist.name);
    input.focus();
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this._renamePlaylist(e);
    }
  }

  _renamePlaylist(e) {
    e.preventDefault();
    if (this.state.playlist.name) {
      const playlist = merge({}, this.props.playlist, this.state.playlist);
      this.props.renamePlaylist(playlist, this.props.author);
    }
    this.setState({ disabled: true });
  }

  update(key) {
    return (e) => {
      this.setState({ playlist: { [key]: e.target.value } });
    };
  }

  render() {
    let editButton = ('');
    if (this.props.canEdit) {
      editButton = (
        <button
          id="playlist-detail-edit-btn"
          className="negative-button"
          onClick={this._enableEdit}
        >
          Rename
        </button>
      );
    }
    return (
      <div id="playlist-edit-form">
        <form>
          <textarea
            id="rename-playlist-input"
            type="text"
            rows="2"
            disabled={this.state.disabled}
            placeholder={this.props.playlist.name}
            onChange={this.update('name')}
            onKeyPress={this._handleKeyPress}
          >
            {this.state.name}
          </textarea>
        </form>
        { editButton }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renamePlaylist: (playlist, author) => { return dispatch(updatePlaylist(playlist, author)); },
  };
};

export default connect(null, mapDispatchToProps)(PlaylistEditForm);
