export const fetchPlaylists = (userId) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${userId}/playlists`
  });
};
