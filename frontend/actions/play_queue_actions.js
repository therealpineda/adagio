export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const PLAY_SONG = 'PLAY_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const REMOVE_SONGS = 'REMOVE_SONGS';
export const SHUFFLE_SONGS = 'SHUFFLE_SONGS';

export const addSongs = () => {

};

export const addSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song: song
  }
};

export const playSong = (song) => {
  return {
    type: PLAY_SONG,
    song: song
  }
};

export const nextSong = (song) => {
  return {
    type: REMOVE_SONG,
    song: song
  };
}
