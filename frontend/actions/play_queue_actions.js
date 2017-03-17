export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const PLAY_SONGS = 'PLAY_SONGS';
export const PLAY_SONG = 'PLAY_SONG';
export const NEXT_SONG = 'NEXT_SONG';
export const REMOVE_SONGS = 'REMOVE_SONGS';
export const JUMP_QUEUE = 'JUMP_QUEUE';
export const SHUFFLE_SONGS = 'SHUFFLE_SONGS';

export const addSongs = (songs) => {
  return {
    type: RECEIVE_SONGS,
    songs,
  };
};

export const addSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song,
  };
};

export const playSong = (song) => {
  return {
    type: PLAY_SONG,
    song,
  };
};

export const playSongs = (songs) => {
  return {
    type: PLAY_SONGS,
    songs,
  };
};

export const nextSong = (song) => {
  return {
    type: NEXT_SONG,
    song,
  };
};

export const jumpQueue = (jumpAmount) => {
  return {
    type: JUMP_QUEUE,
    amount: jumpAmount,
  };
};

export const shuffleQueue = (songs) => {
  return {
    type: SHUFFLE_SONGS,
    songs
  };
};

export const clearQueue = () => {
  return {
    type: REMOVE_SONGS
  };
};
