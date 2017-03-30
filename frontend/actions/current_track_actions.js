export const PLAY_TRACK = 'PLAY_TRACK';
export const PAUSE_TRACK = 'PAUSE_TRACK';

export const playTrack = () => {
  return {
    type: PLAY_TRACK,
  };
};

export const pauseTrack = () => {
  return {
    type: PAUSE_TRACK,
  };
};
