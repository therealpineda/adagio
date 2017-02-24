import React from 'react';
import UserIndexItem from './user_index_item';
import UserDetail from './user_detail';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { usersArray } from '../../reducers/selectors';
import { fetchUsers } from '../../actions/users_actions';

class UsersIndex extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchUsers();
    if (!this.props.selectedUser) {
      this.props.router.push(`/explore-playlists/users/${this.props.userId}`)
    }
  }

  render() {
    const userIndexItems = this.props.users.map((user) => {
      return (
        <UserIndexItem
          key={user.id}
          user={user}/>
      );
    });
    return (
      <div id='users-index' className="comp-d">
        <div
          id='users-index-sidebar'
          className='custom-scrollbar'>
          <ul>
            { userIndexItems }
          </ul>
        </div>
        <div id='users-index-detail'
          className='custom-scrollbar'>
          <UserDetail user={this.props.selectedUser} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let userId = state.session.currentUser.id;
  let selectedUser = null;
  if (ownProps.params.userId) {
    userId = ownProps.params.userId;
    selectedUser = state.users[userId];
  }
  return {
    users: usersArray(state),
    userId: userId,
    selectedUser: selectedUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => { return dispatch(fetchUsers()); }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersIndex));
