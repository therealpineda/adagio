import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    let classStyle = classNames({
      'user-index-item-container': true,
      'selected-user': this.props.user.id === parseInt(99)
    });

    return (
      <li className={classStyle}>
        <Link to=''>
          <div className='user-index-item'>
            <div className='user-index-item-img'>
              <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>
            <div className='user-index-item-name'>
              <p>
                { this.props.user.first_name }
                { this.props.user.last_name }
              </p>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default UserIndexItem;
