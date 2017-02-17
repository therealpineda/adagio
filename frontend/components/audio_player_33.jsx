import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { currentSong } from '../reducers/selectors';
import { nextSong } from '../actions/play_queue_actions';

function convertToTime (number) {
  const mins = Math.floor(number / 60);
  const secs = (number % 60).toFixed();
  return `${ mins }:${ secs < 10 ? '0' : '' }${ secs }`;
}

class AudioPlayer extends React.Component {
  constructor (props) {
    super(props);
    this.seekInProgress = false;
    this.state = {
      autoplay: false,
      paused: true,
      displayedTime: 0
    };
    this.audio = null;
    this.audioProgressContainer = null;
    this.audioProgressBoundingRect = null;

    // event listeners to add on mount and remove on unmount
    this.seekReleaseListener = e => this.seek(e);
    this.resizeListener = () => this.fetchAudioProgressBoundingRect();
    this.audioPlayListener = () => this.setState({ paused: false });
    this.audioPauseListener = () => this.setState({ paused: true });
    this.audioEndListener = () => {
      const gapLengthInSeconds = this.props.gapLengthInSeconds || 0;
      clearTimeout(this.gapLengthTimeout);
      this.gapLengthTimeout = setTimeout(() => this.skipToNextTrack(), gapLengthInSeconds * 1000);
    };
    this.audioStallListener = () => this.togglePause(true);
    this.audioTimeUpdateListener = () => this.handleTimeUpdate();
    this.audioMetadataLoadedListener = () => {
    };
  }

  componentDidMount () {
    // add event listeners bound outside the scope of our component
    window.addEventListener('mouseup', this.seekReleaseListener);
    document.addEventListener('touchend', this.seekReleaseListener);
    window.addEventListener('resize', this.resizeListener);
    this.resizeListener();

    const audio = this.audio = document.createElement('audio');

    // add event listeners on the audio element
    audio.preload = 'metadata';
    audio.addEventListener('play', this.audioPlayListener);
    audio.addEventListener('pause', this.audioPauseListener);
    audio.addEventListener('ended', this.audioEndListener);
    audio.addEventListener('stalled', this.audioStallListener);
    audio.addEventListener('timeupdate', this.audioTimeUpdateListener);
    audio.addEventListener('loadedmetadata', this.audioMetadataLoadedListener);

    if (this.props.currentSong) {
      this.updateSource(this.props.currentSong.url);
      if (this.props.autoplay) {
        const delay = this.props.autoplayDelayInSeconds || 0;
        clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(() => this.togglePause(false), delay * 1000);
      }
    }
  }

  componentWillUnmount () {
    // remove event listeners bound outside the scope of our component
    window.removeEventListener('mouseup', this.seekReleaseListener);
    document.removeEventListener('touchend', this.seekReleaseListener);
    window.removeEventListener('resize', this.resizeListener);

    // remove event listeners on the audio element
    this.audio.removeEventListener('play', this.audioPlayListener);
    this.audio.removeEventListener('pause', this.audioPauseListener);
    this.audio.removeEventListener('ended', this.audioEndListener);
    this.audio.removeEventListener('stalled', this.audioStallListener);
    this.audio.removeEventListener('timeupdate', this.audioTimeUpdateListener);
    this.audio.removeEventListener('loadedmetadata', this.audioMetadataLoadedListener);

    clearTimeout(this.gapLengthTimeout);
    clearTimeout(this.delayTimeout);

    // pause the audio element before we unmount
    this.audio.pause();
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentSong) {
      this.audio.src = nextProps.currentSong.url
    }
    if (this.state.autoplay) {
      this.audio.play();
      this.togglePause(false);
    };
  }


  togglePause (pause) {
    if (typeof pause !== 'boolean') {
      pause = !this.state.paused
    } else {
      if (this.audio.src) {
        if (pause) {
          this.setState({paused: true});
          this.audio.pause();
        } else {
          this.setState({paused: false});
          this.audio.play();
        }
      }
    }
  }

  skipToNextTrack (shouldPlay) {
    if (!this.audio) {
      return;
    }
    this.audio.pause();
    if (!this.props.currentSong) {
      return;
    }
    this.setState({
      displayedTime: 0,
      autoplay: true
    });

    this.props.nextSong(this.props.currentSong)
  }

  backSkip () {
    if (!this.audio) {
      return;
    }
    const audio = this.audio;
    audio.currentTime = 0;
    this.setState({displayedTime: 0});
  }

  updateSource (newSource) {
    this.audio.src = newSource;
  }

  fetchAudioProgressBoundingRect () {
    this.audioProgressBoundingRect = this.audioProgressContainer.getBoundingClientRect();
  }

  handleTimeUpdate () {
    if (!this.seekInProgress && this.audio) {
      this.setState({
        displayedTime: this.audio.currentTime
      });
    }
  }

  adjustDisplayedTime (event) {
    if (!this.props.currentSong) {
      return;
    }
    // make sure we don't select stuff in the background while seeking
    if (event.type === 'mousedown' || event.type === 'touchstart') {
      this.seekInProgress = true;
      document.body.classList.add('noselect');
    } else if (!this.seekInProgress) {
      return;
    }
    /* we don't want mouse handlers to receive the event
     * after touch handlers if we're seeking.
     */
    event.preventDefault();
    const boundingRect = this.audioProgressBoundingRect;
    const isTouch = event.type.slice(0, 5) === 'touch';
    const pageX = isTouch ? event.targetTouches.item(0).pageX : event.pageX;
    const position = pageX - boundingRect.left - document.body.scrollLeft;
    const containerWidth = boundingRect.width;
    const progressPercentage = position / containerWidth;
    this.setState({
      displayedTime: progressPercentage * this.audio.duration
    });
  }

  seek (event) {
    /* this function is activated when the user lets
     * go of the mouse, so if .noselect was applied
     * to the document body, get rid of it.
     */
    document.body.classList.remove('noselect');
    if (!this.seekInProgress) {
      return;
    }
    /* we don't want mouse handlers to receive the event
     * after touch handlers if we're seeking.
     */
    event.preventDefault();
    this.seekInProgress = false;
    const displayedTime = this.state.displayedTime;
    if (isNaN(displayedTime)) {
      return;
    }
    this.audio.currentTime = displayedTime;
  }

  render () {
    const currentSong = this.props.currentSong;
    const songTitle = currentSong ? currentSong.title : null;
    const songArtist = currentSong ? currentSong.artist : null;
    const songImage = currentSong ? currentSong.image : null;

    const displayedTime = this.state.displayedTime;
    const duration = this.audio && this.audio.duration || 0;

    const elapsedTime = convertToTime(displayedTime);
    const fullTime = convertToTime(duration);

    const progressBarWidth = `${ (displayedTime / duration) * 100 }%`;

    const adjustDisplayedTime = e => this.adjustDisplayedTime(e);



    return (
      <div
        id="audio_player"
        className="audio_player"
        title={songTitle}
      >
      <div className='audio_player_image'>
        <img src={songImage}/>
      </div>
        <div className="audio_controls">
          <div
            id="skip_button"
            className='skip_button back audio_button'
            onClick={() => this.backSkip()}
          >
            <div className="skip_button_inner">
              <div className="right_facing_triangle"></div>
              <div className="right_facing_triangle"></div>
            </div>
          </div>
          <div
            id="play_pause_button"
            className={classNames('play_pause_button', 'audio_button', {
              'paused': this.state.paused
            })}
            onClick={() => this.togglePause()}
          >
            <div className="play_pause_inner">
              <div className="left"></div>
              <div className="right"></div>
              <div className="triangle_1"></div>
              <div className="triangle_2"></div>
            </div>
          </div>
          <div
            id="skip_button"
            className='skip_button audio_button'
            onClick={() => this.skipToNextTrack()}
          >
            <div className="skip_button_inner">
              <div className="right_facing_triangle"></div>
              <div className="right_facing_triangle"></div>
            </div>
          </div>
        </div>

        <div
          id="audio_progress_container"
          className="audio_progress_container"
          ref={(ref) => this.audioProgressContainer = ref}
          onMouseDown={adjustDisplayedTime}
          onMouseMove={adjustDisplayedTime}
          onTouchStart={adjustDisplayedTime}
          onTouchMove={adjustDisplayedTime}
        >
          <div
            id="audio_progress"
            className="audio_progress"
            style={{ width: progressBarWidth }}></div>
          <div id="audio_progress_overlay" className="audio_progress_overlay">
            <div className="audio_info_marquee">
              <div id="audio_info" className="audio_info noselect" draggable="false">
                <p>{songTitle}</p>
                <p>{songArtist}</p>
              </div>
            </div>
            <div
              id="audio_time_progress"
              className="audio_time_progress noselect"
              draggable="false">
                <p>{elapsedTime}</p>
                <p>{fullTime}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentSong: currentSong(state.playQueue)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nextSong: (song) => { return dispatch(nextSong(song)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
