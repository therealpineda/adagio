export const playlistsArray = (playlists) => {
  let array;
  if (Array.isArray(playlists)) {
    array = playlists
  } else {
    array = []
    array = Object.keys(playlists).map( (id) => {
      return (
        playlists[id]
      );
    });
  }
  array.sort((pl1, pl2) => {
    return (new Date(pl2.created_at)) - (new Date(pl1.created_at));
  });
  const sortedFollowing = []
  array.forEach((playlist) => {
    if (!playlist.following) {
      sortedFollowing.push(playlist);
    }
  });
  array.reverse();
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

export const albumsArray = (albums) => {
  const array = []
  Object.keys(albums).forEach( (id) => {
    array.push(albums[id]);
  });
  return array;
}

export const currentSong = (playQueue) => {
  return playQueue[0];
}

export const usersArray = ({ session, users }) => {
  const currentUser = users[session.currentUser.id];
  let array = []
  if (currentUser) {
    array = [currentUser]
    Object.keys(users).forEach( (id) => {
      if (parseInt(id) !== currentUser.id) {
        array.push(users[id]);
      }
    });
  }
  return array;
}
