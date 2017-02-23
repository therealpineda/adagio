import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { albumsArray } from '../reducers/selectors';
import { fetchAlbums } from '../actions/album_actions';

class AlbumsIndex extends React.Component {
  componentWillMount() {
    this.props.fetchAlbums();
  }

  render() {
    const albumIndexItems = this.props.albums.map((album) => {
      return (
        <li key={album.id} className="album-index-item">
          <Link to={`/playlists/${album.id}`}>
            <div className='album-index-item-img'>
              <img src={album.image_url}/>
            </div>
            <div className='album-index-item-details'>
              <p className="album-index-name">{album.title}</p>
              <p className="album-index-songs">{album.num_songs}</p>
            </div>
          </Link>
        </li>
      );
    });

    return (
      <div id='albums-index'>
          <div id='browse-albums-header'>
            <h2>Albums</h2>
          </div>
          <div id='albums-index-items-container'>
            <ul id='albums-index-list'>
              { albumIndexItems }
            </ul>
          </div>

      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    albums: albumsArray(state.albums)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => { return dispatch(fetchAlbums()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsIndex);
