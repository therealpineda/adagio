import React from 'react';
import { Link } from 'react-router';

const UserFollowingIndex = ({ followings }) => {
  const users = followings.map((user) => {
    return (
      <li key={user.id} className="user-following-index-item">
        <Link to={`/explore-playlists/users/${user.id}`}>
          <div className="user-following-index-item-img">
            <img src={user.image_url} alt={user.name} />
          </div>
          <div className="user-following-index-item-details">
            <p className="user-following-index-name">{user.name}</p>
            <p className="user-following-index-followers">{user.followers_count}</p>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div id="user-following-index">
      <ul
        id="user-following-index-list"
        className="custom-scrollbar"
      >
        { users }
      </ul>
    </div>
  );
};

export default UserFollowingIndex;
