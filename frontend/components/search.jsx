import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { searchDatabase } from '../actions/search_actions';

class Search extends React.Component {
  constructor() {
    super();
    this._searching = this._searching.bind(this);
    this.preventSubmit = this.preventSubmit.bind(this);
  }

  _searching(e) {
    this.props.searchDatabase(e.target.value);
  }

  preventSubmit(e) {
    e.preventDefault();
  }

  render() {
    const albums = this.props.albums.map((album) => {
      return (
        <Link
          key={album.id}
          to={`/browse/albums/${album.id}`}
          className="search-item"
        >
          <img
            className="album-search-img"
            src={album.image_url}
            alt={album.title}
          />
          <p className="search-text">{album.title}</p>
        </Link>
      );
    });

    let albumHeader = '';
    if (albums.length > 0) {
      albumHeader = (<h3 className="detail-type-header search-header">Albums</h3>);
    }

    const users = this.props.users.map((user) => {
      return (
        <Link
          key={user.id}
          to={`/explore-playlists/users/${user.id}`}
          className="search-item"
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
        <h1 className="search-section-header">Search</h1>
        <form onSubmit={this.preventSubmit}>
          <input
            id="search-input"
            type="text"
            name="search"
            onChange={this._searching}
          />
        </form>
        { albumHeader }
        { albums }
        { userHeader }
        { users }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const albums = state.search.albums;
  const users = state.search.users;
  return {
    albums,
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchDatabase: (query) => { return dispatch(searchDatabase(query)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);