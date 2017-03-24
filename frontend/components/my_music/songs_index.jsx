import React from 'react';
import SongIndexItem from './song_index_item';
import ContextMenu from '../context_menu';

class SongsIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      rcOpen: false,
      rcPos: [0, 0],
      rcSong: '',
      rcAbove: false,
    };
    this.openMenu = this.openMenu.bind(this);
    this.calcSong = this.calcSong.bind(this);
    this.calcPos = this.calcPos.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu(e) {
    e.preventDefault();
    const clickedSong = this.calcSong(e);
    const pos = this.calcPos(e);
    const above = this.calcAbove(e, pos);
    this.setState({
      rcOpen: true,
      rcPos: pos,
      rcSong: clickedSong,
      rcAbove: above,
    });
    this.toggleOverlay();
    document.addEventListener('click', this.closeMenu);
  }

  calcSong(e) {
    let row = e.target.parentElement;
    if (!e.target.outerHTML.includes('td')) {
      row = row.parentElement;
    }
    const title = row.childNodes[1].firstChild.textContent;
    return this.props.songs.find(song => song.title === title);
  }

  calcPos(e) {
    const x = e.clientX;
    const y = e.clientY;
    return [x, y];
  }

  calcAbove(e, pos) {
    const modal = document.querySelector('.context-menu');
    const windowHeight = window.innerHeight;
    return e.clientY > (windowHeight - 230);
  }

  toggleOverlay() {
    const bg = document.getElementById('bg');
    bg.classList.toggle('overlay');
  }

  closeMenu() {
    this.toggleOverlay();
    this.setState({ rcOpen: false });
    document.removeEventListener('click', this.closeMenu);
  }

  render() {
    const songIndexItems = this.props.songs.map((song) => {
      return (
        <SongIndexItem
          key={song.playlist_song_id}
          song={song}
        />
      );
    });

    return (
      <div id="songs-index">
        <ContextMenu
          open={this.state.rcOpen}
          above={this.state.rcAbove}
          pos={this.state.rcPos}
          song={this.state.rcSong}
        />
      <table cellSpacing="0">
          <thead className="songs-index-labels">
            <tr>
              <th></th>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              <th>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
              </th>
            </tr>
          </thead>
          <tbody onContextMenu={this.openMenu}>
            { songIndexItems }
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongsIndex;
