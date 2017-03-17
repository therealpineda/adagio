import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { playSong } from '../actions/play_queue_actions';
import { searchDatabase } from '../actions/search_actions';

class Search extends React.Component {
  constructor() {
    super();
    this._searching = this._searching.bind(this);
    this.preventSubmit = this.preventSubmit.bind(this);
    this._closeSearch = this._closeSearch.bind(this);
  }

  _searching(e) {
    this.props.searchDatabase(e.target.value);
  }

  preventSubmit(e) {
    e.preventDefault();
  }

  _closeSearch() {
    const search = document.getElementById('search-container');
    search.className = 'hidden';
  }

  _playSong(song) {
    this.props.playSong(song);
    this._closeSearch();
  }

  render() {
    const songs = this.props.songs.map((song) => {
      return (
        <Link
          key={song.id}
          className="search-item song-search-item"
          onClick={this._playSong.bind(this, song)}
        >
        <figure
          className="search-mini-play"
        >
          &nbsp;
        </figure>
          <img
            className="album-search-img song-search-img"
            src={song.image}
            alt={song.title}
          />
        <div className="search-text">
          <p>{song.title}</p>
          <p className="search-text-author">{song.artist}</p>
        </div>
        </Link>
      );
    });

    let songHeader = '';
    if (songs.length > 0) {
      songHeader = (<h3 className="detail-type-header search-header">Songs</h3>);
    }

    const albums = this.props.albums.map((album) => {
      return (
        <Link
          key={album.id}
          to={`/browse/albums/${album.id}`}
          className="search-item"
          onClick={this._closeSearch}
        >
          <img
            className="album-search-img"
            src={album.image_url}
            alt={album.title}
          />
          <div className="search-text">
            <p>{album.title}</p>
            <p className="search-text-author">{album.artist}</p>
          </div>
        </Link>
      );
    });

    let albumHeader = '';
    if (albums.length > 0) {
      albumHeader = (<h3 className="detail-type-header search-header">Albums</h3>);
    }

    const playlists = this.props.playlists.map((playlist) => {
      return (
        <Link
          key={playlist.id}
          to={`/playlists/${playlist.id}`}
          className="search-item"
          onClick={this._closeSearch}
        >
          <img
            className="album-search-img"
            src="https://s3.amazonaws.com/adagio-prod/images/default/playlist_img.jpg"
            alt={playlist.name}
          />
          <div className="search-text">
            <p>{playlist.name}</p>
            <p className="search-text-author">by {playlist.author}</p>
          </div>
        </Link>
      );
    });

    let playlistHeader = '';
    if (playlists.length > 0) {
      playlistHeader = (<h3 className="detail-type-header search-header">Playlists</h3>);
    }

    const users = this.props.users.map((user) => {
      return (
        <Link
          key={user.id}
          to={`/explore-playlists/users/${user.id}`}
          className="search-item"
          onClick={this._closeSearch}
        >
          <img
            className="album-search-img"
            src={user.image_url}
            alt={user.name}
          />
        <p className="search-text">{user.name}</p>
        </Link>
      );
    });

    let userHeader = '';
    if (users.length > 0) {
      userHeader = (<h3 className="detail-type-header search-header">Users</h3>);
    }

    return (
      <div id="search">
        <div id="search-sidebar-header">
          <h1 className="search-section-header">Search</h1>
          <form onSubmit={this.preventSubmit}>
            <div id="input-container">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input
                id="search-input"
                type="text"
                name="search"
                onChange={this._searching}
                autoComplete="off"
              />
            </div>
          </form>
        </div>
        { songHeader }
        { songs }
        { albumHeader }
        { albums }
        { playlistHeader }
        { playlists }
        { userHeader }
        { users }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const songs = state.search.songs;
  const albums = state.search.albums;
  const playlists = state.search.playlists;
  const users = state.search.users;
  return {
    songs,
    albums,
    playlists,
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchDatabase: (query) => { return dispatch(searchDatabase(query)); },
    playSong: (song) => { return dispatch(playSong(song)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
