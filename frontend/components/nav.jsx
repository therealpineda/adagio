import React from 'react';
import CurrentUser from './current_user';
import { Link } from 'react-router';

class Nav extends React.Component {

  render() {
    return (
      <div id='nav' className="comp">
        <h6>Nav</h6>
        <Link to="">Search</Link>
        <br /><Link to="">Browse</Link>
        <br /><Link to="">Your Music</Link>
        <br /><Link to="">Explore Playlists</Link>
        <CurrentUser />
      </div>
    );
  }
}

export default Nav;
