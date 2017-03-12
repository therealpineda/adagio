import React from 'react';
import PlaylistIndex from './playlists/playlist_index';
import { withRouter } from 'react-router';
import { NavLinkTop } from '../navlink';
import classNames from 'classnames';

class MyMusic extends React.Component {

  componentWillMount() {
    const id = this.props.params.playlistId;
    const currentPath = this.props.router.location.pathname;
    if (!id && currentPath.includes("playlists")) {
      this.props.router.push("/my-music/playlists/0");
    } else {
      if (!currentPath.includes("songs")) {
        this.props.router.push(`/my-music/playlists/${id}`);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const id = this.props.params.playlistId;
    const currentPath = this.props.router.location.pathname;
    if (!id && currentPath.includes("playlists")) {
      this.props.router.push("/my-music/playlists/0");
    } else {
      if (id !== this.props.params.playlistId) {
        this.props.router.push(`/my-music/playlists/${id}`);
      }
    }
  }

  render () {
    const currentPath = this.props.router.location.pathname;
    const activeLink = currentPath.includes("playlists") ? true : false;
    const playlistClass = classNames({
     'my-music-link': true,
     'my-music-active-link': activeLink
    });

    return (
      <div id='my-music'>
        <nav><ul>
          <li>
            <NavLinkTop to='/my-music/playlists' className={playlistClass}>
              <p>Playlists</p>
            </NavLinkTop>
          </li>
          <li>
            <NavLinkTop to='/my-music/songs' className='my-music-link'>
              <p>Songs</p>
            </NavLinkTop>
          </li>
        </ul></nav>
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
}

export default withRouter(MyMusic);
