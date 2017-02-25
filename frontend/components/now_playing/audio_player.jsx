import React from 'react';
import { connect } from 'react-redux';
import { currentSong } from '../../reducers/selectors';
import { nextSong } from '../../actions/play_queue_actions';

class AudioPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      displayTime: "0:00",
      displayDuration: "0:00"
    };
    this.playButton = this.playButton.bind(this);
    this.backButton = this.backButton.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.timeUpdate = this.timeUpdate.bind(this);
    this.clickPercent = this.clickPercent.bind(this);
    this.moveplayhead = this.moveplayhead.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this._convertToTime = this._convertToTime.bind(this);
    this.onplayhead = false;
  }

  componentWillReceiveProps(nextProps) {
    this.music = document.getElementById('music');
    this.music.src = nextProps.currentSong.url;
    this.pButton = document.getElementById('pButton')
    this.playhead = document.getElementById('playhead');
    this.timeline = document.getElementById('timeline');
    this.timelineWidth = this.timeline.offsetWidth;
    this.music.addEventListener("canplaythrough", () => {
      this.duration = this.music.duration;
      this.setState({
        displayDuration: this._convertToTime(this.duration)
      });

      this.timeline.addEventListener("click", (event) => {
        this.moveplayhead(event);
        this.music.currentTime = this.duration * this.clickPercent(event);
      }, false);
      this.music.addEventListener("timeupdate", this.timeUpdate, false);
      this.playhead.addEventListener('mousedown', this.mouseDown, false);
      window.addEventListener('mouseup', this.mouseUp, false);
    }, false);

    this.pButton.className = "";
    this.pButton.className = "pause";
    this.music.play();
  }

  clickPercent(event) {
    return (event.clientX - this.getPosition(this.timeline)) / this.timelineWidth;
  }

  mouseDown() {
    this.onplayhead = true;
    window.addEventListener('mousemove', this.moveplayhead, true);
    this.music.removeEventListener('timeupdate', this.timeUpdate, false);
  }

  mouseUp(event) {
    if (this.onplayhead == true) {
        this.moveplayhead(event);
        window.removeEventListener('mousemove', this.moveplayhead, true);
        this.music.currentTime = this.duration * this.clickPercent(event);
        this.music.addEventListener('timeupdate', this.timeUpdate, false);
    }
    this.onplayhead = false;
  }

  moveplayhead(event) {
    const newWidth =  event.clientX - this.getPosition(this.timeline);
    this.playhead.style.width = newWidth;
  }

  backButton() {
    this.music.currentTime = 0;
    this.playhead.style.width = 3;
    this.timeUpdate();
  }

  playButton() {
    if (this.music.paused) {
      this.music.play();
      this.pButton.className = "";
      this.pButton.className = "pause";
    } else {
      this.music.pause();
      this.pButton.className = "";
      this.pButton.className = "play";
    }
  }

  nextButton() {
    this.music.pause();
    this.props.nextSong(this.props.currentSong);
  }

  _convertToTime (number) {
    const mins = Math.floor(number / 60);
    const secs = (number % 60).toFixed();
    return `${ mins }:${ secs < 10 ? '0' : '' }${ secs }`;
  }

  timeUpdate() {
    this.setState({
      displayTime: this._convertToTime(this.music.currentTime)
    });
    const playPercent = this.timelineWidth * (this.music.currentTime / this.duration);
    this.playhead.style.width = playPercent + "px";
    if (this.music.currentTime == this.duration) {
        this.nextButton();
    }
  }

  getPosition(el) {
    return el.getBoundingClientRect().left;
  }

  render() {
    let title = "-";
    let artist = "-";
    let image = "";
    const song = this.props.currentSong
    if (song) {
      title = song.title;
      artist = song.artist;
      image = song.image;
    }
    return (
      <div id='audio-player' className='comp-d'>
          <audio id="music" controls="controls">
            <source src="" type="audio/mpeg" />
          </audio>

          <div id="audio-player-image">
            <img src={image} />
          </div>

          <div id="player-song-information">
            <a href="#">{title}</a>
            <a href="#">{artist}</a>
          </div>

          <div id="timeline">
            <div id="playhead"></div>
          </div>

          <div id="timestamps">
            <p>{ this.state.displayTime }</p>
            <p>{ this.state.displayDuration }</p>
          </div>

          <div id="player-controls">
            <i
              className="fa fa-step-backward"
              aria-hidden="true"
              onClick={this.backButton}></i>
            <button
              id="pButton"
              className="play"
              onClick={this.playButton}>
            </button>
              <i
                className="fa fa-step-forward"
                aria-hidden="true"
                onClick={this.nextButton}></i>
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
    nextSong: (song) => { return dispatch(nextSong(song)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);