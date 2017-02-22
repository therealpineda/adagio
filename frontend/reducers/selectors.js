export const playlistsArray = (playlists) => {
  let array = []
  array = Object.keys(playlists).map( (id) => {
    return (
      playlists[id]
    );
  });
  array.sort((pl1, pl2) => {
    return (new Date(pl2.created_at)) - (new Date(pl1.created_at));
  });
  const sortedFollowing = []
  array.forEach((playlist) => {
    if (!playlist.following) {
      sortedFollowing.push(playlist);
    }
  });
  array.forEach((playlist) => {
    if (playlist.following) {
      sortedFollowing.push(playlist);
    }
  });
  return sortedFollowing;
}

export const playlistsArrayNoFollowing = (playlists) => {
  let array = []
  array = Object.keys(playlists).map( (id) => {
    return (
      playlists[id]
    );
  });
  array.sort((pl1, pl2) => {
    return (new Date(pl2.created_at)) - (new Date(pl1.created_at));
  });
  const sorted = []
  array.forEach((playlist) => {
    if (!playlist.following) {
      sorted.push(playlist);
    }
  });
  return sorted;
}

export const currentSong = (playQueue) => {
  return playQueue[0];
}

export const usersArray = (users) => {
  const currentUser = window.currentUser;
  let array = [currentUser]
  Object.keys(users).forEach( (id) => {
    if (parseInt(id) !== currentUser.id) {
      array.push(users[id]);
    }
  });
  return array;
}
