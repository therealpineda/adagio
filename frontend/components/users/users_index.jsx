import React from 'react';
import UserIndexItem from './user_index_item';
import { connect } from 'react-redux';
import { usersArray } from '../../reducers/selectors';
import { fetchUsers } from '../../actions/users_actions';

class UsersIndex extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    const userIndexItems = this.props.users.map((user) => {
      return (
        <UserIndexItem
          key={user.id}
          user={user} />
      );
    });
    return (
      <div id='users-index' className="comp">
        <div id='users-index-sidebar'>
          <ul>
            { userIndexItems }
          </ul>
        </div>
        <div id='users-index-detail'>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: usersArray(state.users)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => { return dispatch(fetchUsers()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);
