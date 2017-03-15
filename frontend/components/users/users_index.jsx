import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import UserIndexItem from './user_index_item';
import UserDetail from './user_detail';
import { usersArray } from '../../reducers/selectors';
import { fetchUsers } from '../../actions/users_actions';

class UsersIndex extends React.Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    const userIndexItems = this.props.users.map((user) => {
      return (
        <UserIndexItem
          key={user.id}
          user={user}
        />
      );
    });

    return (
      <div id="users-index">
        <div
          id="users-index-sidebar"
          className="custom-scrollbar"
        >
          <ul>
            { userIndexItems }
          </ul>
        </div>
        <div
          id="users-index-detail"
          className="custom-scrollbar"
        >
          <UserDetail user={this.props.selectedUser} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let userId;
  if (ownProps.params.userId) {
    userId = ownProps.params.userId;
  } else {
    userId = state.session.currentUser.id;
  }
  const selectedUser = state.users[userId];
  return {
    users: usersArray(state),
    userId,
    selectedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => { return dispatch(fetchUsers()); },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersIndex));
