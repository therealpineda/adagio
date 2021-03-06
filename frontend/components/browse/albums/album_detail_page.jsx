import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import SongsIndex from '../../my_music/songs_index';
import { fetchAlbum } from '../../../actions/album_actions';
import { playSongs } from '../../../actions/play_queue_actions';
import { playTrack } from '../../../actions/current_track_actions';
import { Spinner } from '../../spinners';

class AlbumDetailPage extends React.Component {
  constructor() {
    super();
    this.state = {
      fetched: false,
    };
    this.playAlbum = this.playAlbum.bind(this);
  }

  componentWillMount() {
    this.props.fetchAlbum(this.props.albumId).then(() => {
      this.setState({ fetched: true });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.albumId) {
      this.setState({ fetched: false });
    } else {
      if (this.props.albumId !== nextProps.params.albumId) {
        this.setState({ fetched: false });
        this.props.fetchAlbum(nextProps.albumId).then(() => {
          this.setState({ fetched: true });
        });
      }
    }
  }

  playAlbum(e) {
    e.preventDefault();
    this.props.playSongs(this.props.album.songs);
    this.props.playTrack();
  }

  render() {
    if (!this.state.fetched) return <Spinner />
    return (
      <div id="playlist-detail-page">

        <div id="playlist-detail-header">
          <div className="album-detail-image">
            <img src={this.props.album.image_url} alt={this.props.album.title} />
          </div>

          <div id="playlist-detail-right">
            <div id="playlist-detail-text">
              <div className="detail-type-header">
                <p>Album</p>
              </div>
              <div id="album-detail-title">
                <p>{this.props.album.title}</p>
              </div>
            </div>

            <div id="playlist-detail-btm-rt-container">
              <div id="playlist-detail-buttons">
                <button
                  id="playlist-detail-play-btn"
                  onClick={this.playAlbum}
                >
                  <i id="playlist-detail-play-btn-icon" className="fa fa-caret-right" aria-hidden="true"></i>
                  <p>Play</p>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div id="playlist-detail-user">
          <p>By: &nbsp;
            <Link to="">
              <span className="playlist-user-link">
                {this.props.album.artist}
              </span>
            </Link>
            &nbsp; {this.props.album.num_songs}, {this.props.album.duration}
          </p>
        </div>

        <div
          id="playlist-songs-index"
          className="custom-scrollbar"
        >
          <SongsIndex songs={this.props.album.songs} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const albumId = ownProps.params.albumId;
  const album = state.albums[albumId];
  return {
    albumId,
    album,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playSongs: (songs) => { return dispatch(playSongs(songs)); },
    playTrack: () => { return dispatch(playTrack()); },
    fetchAlbum: (id) => { return dispatch(fetchAlbum(id)); },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumDetailPage));
