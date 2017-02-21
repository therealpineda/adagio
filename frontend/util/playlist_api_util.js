export const fetchPlaylists = (userId) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${userId}/playlists`
  });
};

export const fetchPlaylist = (playlistId) => {
  return $.ajax({
    method: 'get',
    url: `api/playlists/${playlistId}`
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

export const addSongToPlaylist = (songId, playlistId) => {
  return $.ajax({
    method: 'post',
    url: `/api/playlists/${playlistId}/songs`,
    data: { songId: songId }
  });
};

export const removeSongFromPlaylist = (songId, playlistId) => {
  return $.ajax({
    method: 'delete',
    url: `/api/playlists/${playlistId}/songs/${songId}`
  });
};

export const followPlaylist = (playlistId) => {
  return $.ajax({
    method: 'post',
    url: `api/playlists/${playlistId}/playlist_follows`
  });
};

export const unfollowPlaylist = (playlistId, followId) => {
  return $.ajax({
    method: 'delete',
    url: `api/playlists/${playlistId}/playlist_follows/${followId}`
  });
};
