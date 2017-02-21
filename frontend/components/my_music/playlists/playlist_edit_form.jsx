import React from 'react';
import { updatePlaylist } from '../../../actions/playlist_actions';
import { connect } from 'react-redux';
import { merge } from 'lodash';

class PlaylistEditForm extends React.Component {
  constructor() {
    super();
    this.state = {
      playlist: {
        name: ""
      },
      disabled: true
    }
    this._enableEdit = this._enableEdit.bind(this);
    this._renamePlaylist = this._renamePlaylist.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.update = this.update.bind(this);
    this.disabled = true;
    this.input = $('#rename-playlist-input');
  }

  componentWillReceiveProps() {
    this.setState({ playlist: {name: this.props.playlist.name }});
  }

  _enableEdit(e) {
    this.setState( { disabled: false } );
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
      this.props.renamePlaylist(playlist);
    }
    this.setState( { disabled: true } );
  }

  update(key) {

    return (e) => {
      this.setState({ playlist: {[key]: e.target.value }})
    }
  }

  render() {
    return (
      <div id='playlist-edit-form' className="comp-d">
          <form>
            <textarea
              id="rename-playlist-input"
              type="text"
              rows="2"
              disabled={this.state.disabled}
              placeholder={this.props.playlist.name}
              onChange={this.update('name')}
              onKeyPress={this._handleKeyPress}
              >{this.state.name}</textarea>
          </form>
          <button
            id='playlist-detail-edit-btn'
            onClick={this._enableEdit}>
            Rename
          </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renamePlaylist: (playlist) => { return dispatch(updatePlaylist(playlist)); }
  };
};

export default connect(null, mapDispatchToProps)(PlaylistEditForm);
