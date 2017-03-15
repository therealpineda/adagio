import React from 'react';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router';

const UserIndexItem = ({ user, params }) => {
  const classStyle = classNames({
    'user-index-item-container': true,
    'selected-user': user.id === parseInt(params.userId, 10),
  });
  return (
    <li className={classStyle}>
      <Link to={`/explore-playlists/users/${user.id}`}>
        <div className="user-index-item">
          <div className="user-index-item-img">
            <img src={user.image_url} alt={user.name} />
          </div>
          <div className="user-index-item-name">
            <p className="user-index-item-name-text">
              { user.name }
            </p>
            <p className="user-index-item-follower-text">
              { user.followers_count }
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default withRouter(UserIndexItem);
