import React from 'react';
import { updatePlaylist } from '../../../actions/playlist_actions';
import { connect } from 'react-redux';
import { merge } from 'lodash';

class PlaylistEditForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    }
    this._renamePlaylist = this._renamePlaylist.bind(this);
    this.update = this.update.bind(this);
  }

  _renamePlaylist(e) {
    e.preventDefault();
    if (this.state.name) {
      const playlist = merge({}, this.props.playlist, this.state);
      this.props.renamePlaylist(playlist);
    }
  }

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value })
    }
  }

  render() {
    return (
      <div id='playlist-edit-form' className="comp-d">
          <form onSubmit={ this._renamePlaylist }>
            <input
              type="text"
              id="rename-playlist-input"
              placeholder={this.props.playlist.name}
              onChange={this.update('name')}
              value={this.state.name}
              />
            <button id="rename-playlist-btn">Rename</button>
          </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    renamePlaylist: (playlist) => { return dispatch(updatePlaylist(playlist)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistEditForm);
