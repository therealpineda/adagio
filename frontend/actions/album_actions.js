export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
import * as AlbumApiUtil from '../util/album_api_util';

export const fetchAlbums = () => {
  return (dispatch) => {
    return AlbumApiUtil.fetchAlbums().then( (albums) => {
      return dispatch(receiveAlbums(albums));
    });
  };
};

export const receiveAlbums = (albums) => {
  return {
    type: RECEIVE_ALBUMS,
    albums: albums
  }
};
