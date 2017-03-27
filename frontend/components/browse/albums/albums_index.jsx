import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { albumsArray } from '../../../reducers/selectors';
import { fetchAlbums } from '../../../actions/album_actions';
import { Spinner } from '../../spinners';

class AlbumsIndex extends React.Component {
  componentWillMount() {
    this.props.fetchAlbums();
  }

  render() {
    const albums = this.props.albums
    if (albums.length === 0) return <Spinner />
    const albumIndexItems = albums.map((album) => {
      return (
        <Link
          key={album.id}
          to={`/browse/albums/${album.id}`}
          className="album-index-item"
        >
          <li>
            <div className="album-index-item-img">
              <img src={album.image_url} alt={album.title} />
            </div>
            <div className="album-index-item-details">
              <p className="album-index-name">{album.title}</p>
              <p className="album-index-artist">{album.artist}</p>
              <p className="album-index-songs">{album.num_songs}</p>
            </div>
          </li>
        </Link>
      );
    });

    return (
      <div id="albums-index">
        <div id="browse-albums-header">
          <h2>Albums</h2>
        </div>
        <div id="albums-index-items-container">
          <ul id="albums-index-list">
            { albumIndexItems }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albums: albumsArray(state.albums),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => { return dispatch(fetchAlbums()); },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumsIndex));
