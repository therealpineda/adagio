import React from 'react';
import { Link } from 'react-router';

class UserFollowingIndex extends React.Component {
  render() {
    let users = this.props.followings.map ((user) => {
        return (
          <li key={user.id} className="user-following-index-item">
            <Link to={`/explore-playlists/users/${user.id}`}>
              <div className='user-following-index-item-img'>
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              </div>
              <div className='user-following-index-item-details'>
                <p className="user-following-index-name">{user.name}</p>
                <p className="user-following-index-followers">{user.followers_count}</p>
              </div>
            </Link>
          </li>
        );
    });

    return (
      <div id='user-following-index' className="comp-d">
        <ul id='user-following-index-list'>
          { users }
        </ul>
      </div>
    );
  }
}

export default UserFollowingIndex;
