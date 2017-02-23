import React from 'react';
import PlaylistIndex from './playlists/playlist_index';
import { fetchUser } from '../../actions/users_actions';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';

class MyMusic extends React.Component {
  constructor(props) {
    super(props)
  }

  _clickLink(route, e) {
    $(document.getElementsByClassName('my-music-link')).attr('class', 'my-music-link');
    e.currentTarget.className += " my-music-active-link";
    this.props.router.push(`${route}`);
  }

  render () {

    const currentPath = this.props.location.pathname;

    let activeLink = currentPath.includes("playlists") ? true : false;
    const classStylePlaylists = classNames({
      'my-music-link': true,
      'my-music-active-link': activeLink
    });

    activeLink = currentPath.includes("songs") ? true : false;
    const classStyleSongs = classNames({
      'my-music-link': true,
      'my-music-active-link': activeLink
    });

    return (
      <div id='my-music' className="comp-d">
        <nav><ul>
          <li
            className={classStylePlaylists}
            onClick={this._clickLink.bind(this, "my-music/playlists/0")}>
            Playlists
          </li>
          <li
            className={classStyleSongs}
            onClick={this._clickLink.bind(this, "my-music/songs")}>
            Songs
          </li>
          <li>Artists</li>
          <li>Albums</li>
        </ul></nav>
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
}


export default withRouter(MyMusic);
