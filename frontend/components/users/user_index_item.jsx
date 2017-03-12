import React from 'react';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router';

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let classStyle = classNames({
      'user-index-item-container': true,
      'selected-user': this.props.user.id === parseInt(this.props.params.userId)
    });

    return (
      <li className={classStyle}>
        <Link to={`/explore-playlists/users/${this.props.user.id}`}>
          <div className='user-index-item'>
            <div className='user-index-item-img'>
              <img src={this.props.user.image_url} />
            </div>
            <div className='user-index-item-name'>
              <p className='user-index-item-name-text'>
                { this.props.user.name }
              </p>
              <p className='user-index-item-follower-text'>
                { this.props.user.followers_count }
              </p>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default withRouter(UserIndexItem);
