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

export const deletePlaylist = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/playlists/${id}`
  });
};

export const updatePlaylist = (playlist) => {
  return $.ajax({
    method: 'patch',
    url: `api/playlists/${playlist.id}`,
    data: { playlist: playlist }
  });
};
