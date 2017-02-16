export const fetchPlaylists = (userId) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${userId}/playlists`
  });
};

export const addPlaylist = (playlist) => {
  return $.ajax({
    method: 'post',
    url: 'api/playlists',
    data: { playlist: playlist }
  });
}
