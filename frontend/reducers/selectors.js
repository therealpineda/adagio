export const playlistsArray = (playlists) => {
  let array = []
  array = Object.keys(playlists).map( (id) => {
    return (
      playlists[id]
    );
  });
  return array;
}

export const currentSong = (playQueue) => {
  return playQueue[0];
}

export const usersArray = (users) => {
  let array = []
  array = Object.keys(users).map( (id) => {
    return (
      users[id]
    );
  });
  return array;
}
