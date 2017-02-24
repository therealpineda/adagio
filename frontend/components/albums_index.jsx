import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { albumsArray } from '../reducers/selectors';
import { fetchAlbums } from '../actions/album_actions';

class AlbumsIndex extends React.Component {
  componentWillMount() {
    this.props.fetchAlbums();
  }

  _redirect(id) {
    this.props.router.push(`/browse/albums/${id}`)
  }

  render() {
    const albumIndexItems = this.props.albums.map((album) => {
      return (
        <li key={album.id}
          onClick={this._redirect.bind(this, album.id)}
          className="album-index-item">

            <div className='album-index-item-img'>
              <img src={album.image_url}/>
            </div>
            <div className='album-index-item-details'>
              <p className="album-index-name">{album.title}</p>
              <p className="album-index-artist">{album.artist}</p>
              <p className="album-index-songs">{album.num_songs}</p>
            </div>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumsIndex));
