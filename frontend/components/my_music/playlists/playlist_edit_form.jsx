import React from 'react';
import autosize from 'autosize';
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
    autosize(this.input);
  }

  componentWillReceiveProps() {
    this.setState({ playlist: {name: this.props.playlist.name }});
    autosize.update(this.input);
  }

  _enableEdit(e) {
    autosize(this.input);
    this.setState( { disabled: false } );
    const input = $('#rename-playlist-input');
    input.val(this.props.playlist.name);
    input.focus();
    autosize(this.input);
  }

  _handleKeyPress(e) {
    autosize(this.input);
    if (e.key === 'Enter') {
      e.preventDefault();
      this._renamePlaylist(e);
    }
    autosize(this.input);
  }

  _renamePlaylist(e) {
    autosize(this.input);
    e.preventDefault();
    if (this.state.playlist.name) {
      const playlist = merge({}, this.props.playlist, this.state.playlist);
      this.props.renamePlaylist(playlist).then(autosize.update(this.input));
    }
    this.setState( { disabled: true } );
  }

  update(key) {
    autosize(this.input);

    return (e) => {
      this.setState({ playlist: {[key]: e.target.value }})
    }
  }

  render() {
    autosize(this.input);
    return (
      <div id='playlist-edit-form' className="comp-d">
          <form onSubmit={ this._renamePlaylist }>
            <textarea
              id="rename-playlist-input"
              type="text"
              rows="2"
              disabled={this.state.disabled}
              placeholder={this.props.playlist.name}
              onChange={this.update('name')}
              onKeyPress={this._handleKeyPress}
              >{this.state.name}</textarea>
            <br/><button className="rename-playlist-btn">Rename</button>
          </form>
          <button
            id='playlist-detail-edit-btn'
            onClick={this._enableEdit}>
            Edit
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
