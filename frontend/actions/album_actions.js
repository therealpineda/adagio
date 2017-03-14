import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

export const receiveAlbums = (albums) => {
  return {
    type: RECEIVE_ALBUMS,
    albums,
  };
};

export const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album,
  };
};

export const fetchAlbums = () => {
  return (dispatch) => {
    return AlbumApiUtil.fetchAlbums().then((albums) => {
      return dispatch(receiveAlbums(albums));
    });
  };
};

export const fetchAlbum = (id) => {
  return (dispatch) => {
    return AlbumApiUtil.fetchAlbum(id).then((album) => {
      return dispatch(receiveAlbum(album));
    });
  };
};
