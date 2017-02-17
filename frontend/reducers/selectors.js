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
